// lib/remark-custom-captions.ts

import { visit } from 'unist-util-visit';
import type { Plugin, Transformer } from 'unified';
import type { Root, Paragraph, Text, Html } from 'mdast';

// 正则表达式保持不变，它本身是正确的
const captionRegex = /(^\r?\n?\s?(Fig).\s\d+\.\s)|(^\s?(Table)\s\d+\s)/;

export const remarkCustomCaptions: Plugin<[], Root> = () => {
    const transformer: Transformer<Root> = (tree) => {
        // 遍历所有段落节点
        visit(tree, 'paragraph', (node: Paragraph) => {
            // 遍历该段落下的所有子节点
            for (let i = 0; i < node.children.length; i++) {
                const child = node.children[i];

                // 找到第一个符合条件的文本节点
                if (child.type === 'text') {
                    const match = child.value.match(captionRegex);

                    if (match) {
                        const matchedText = match[0];
                        const type = match[2] ? match[2] : match[4];
                        const className = `caption-${type}`.toLowerCase();
                        const remainingText = child.value.substring(matchedText.length).trimStart();

                        // 创建包裹标签的 HTML 节点
                        const htmlNode: Html = {
                            type: 'html',
                            value: `<span class="${className}">${matchedText}</span>`
                        };

                        // 准备要替换旧文本节点的新节点数组
                        const newNodes: (Html | Text)[] = [htmlNode];

                        // 如果后面还有剩余文本，创建一个新的文本节点并添加到数组中
                        if (remainingText) {
                            newNodes.push({
                                type: 'text',
                                value: ` ${remainingText}` // 保持前导空格
                            });
                        }

                        // 用我们的新节点数组替换掉原来的那个文本节点
                        // splice(startIndex, deleteCount, ...itemsToAdd)
                        node.children.splice(i, 1, ...newNodes);

                        // 找到了并处理了，就可以跳出这个段落的循环，避免重复处理
                        break; 
                    }
                }
            }
        });
    };

    return transformer;
};