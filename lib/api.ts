// lib/api.ts

interface ACFImage {
    url?: string;
    width?: number;
    height?: number;
}

interface ResearchACF {
    title?: string | null;
    description?: string | null;
    thumbnail?: ACFImage | null;
}

interface PublicationACF {
    categories?: string | null;
    authors?: string | null;
    thumbnail?: ACFImage | null;
    thumbnail_describe?: string | null;
    year?: string | null;
    title?: string | null;
    summary?: string | null;
    journal?: string | null;
    abstract?: string | null;
    url?: string | null;
    is_selected?: boolean;
}

interface TeamMemberACF {
    name?: string | null;
    role?: string | null;
    is_featured?: boolean;
    member_image?: ACFImage | null;
}

interface BaseWordPressPost {
    id: number;
    title?: { // WP Post 主 title
        rendered: string;
    };
    _embedded?: {
        'wp:featuredmedia'?: {
            source_url?: string;
        }[];
    };
}

// --- Specific WordPress Post Data Interfaces ---
interface WordPressResearchPostData extends BaseWordPressPost {
    acf?: ResearchACF;
}

interface WordPressPublicationPostData extends BaseWordPressPost {
    acf?: PublicationACF;
}

interface WordPressTeamMemberPostData extends BaseWordPressPost {
    acf?: TeamMemberACF;
}

export interface ResearchItem {
    id: number;
    title: string; // 来自 ResearchACF.title (ACF 字段)
    description: string | null; // 来自 ResearchACF
    image: string | null; // 来自 ResearchACF.thumbnail.url 或占位符
    width?: number;
    height?: number;
}

export interface PublicationItem {
    id: number;
    categories: string; // 来自 PublicationACF
    authors: string;    // 来自 PublicationACF
    thumbnail: string; // 来自 PublicationACF.thumbnail.url 或 _embedded
    thumbnail_describe?: string | null; // 来自 PublicationACF
    year: string;       // 来自 PublicationACF
    title: string;      // 来自 PublicationACF.title (ACF 字段)
    summary?: string | null; // 来自 PublicationACF
    journal?: string | null; // 来自 PublicationACF
    abstract?: string | null; // 来自 PublicationACF
    url?: string | null;     // 来自 PublicationACF
    is_selected?: boolean; // 来自 PublicationACF
}

export interface TeamMemberItem {
    id: number;
    name: string;       // 来自 TeamMemberACF
    role?: string | null;// 来自 TeamMemberACF
    image?: string | null;// 来自 TeamMemberACF.member_image.url 或占位符
    is_featured?: boolean; // 来自 TeamMemberACF
    width?: number | null;
    height?: number | null;
}

export interface ResearchItem {
    id: number;
    title: string;
    description: string | null;
    image: string | null;
    width?: number;
    height?: number;
}

export async function getResearchData(): Promise<ResearchItem[]> {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    if (!apiUrl) {
        console.error("WordPress API URL is not configured in .env.local");
        return [];
    }
    const fetchUrl = `${apiUrl}/wp/v2/research`; // 假设 'research' 是你的自定义帖子类型 slug
    try {
        const res = await fetch(fetchUrl);
        if (!res.ok) {
            console.error(`Failed to fetch research data: ${res.status} ${res.statusText}`);
            return [];
        }
        // 使用更具体的类型
        const data: WordPressResearchPostData[] = await res.json();
        const researchItems: ResearchItem[] = data.map((item) => {
            const acfImageUrl = item.acf?.thumbnail?.url || "https://www.cribelab.org/wp-content/uploads/2025/02/placeholder-1.svg";
            return {
                id: item.id,
                title: item.acf?.title || 'Untitled Research', // 使用 ResearchACF.title (ACF 字段)
                description: item.acf?.description || null,
                image: acfImageUrl, // image 现在直接使用 acfImageUrl
                width: item.acf?.thumbnail?.width || undefined,
                height: item.acf?.thumbnail?.height || undefined,
            };
        });
        return researchItems;
    } catch (error) {
        console.error("Error fetching or processing research data:", error);
        return [];
    }
}

export async function getPublicationsData(): Promise<PublicationItem[]> {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    if (!apiUrl) {
        console.error("WordPress API URL is not configured in .env.local");
        return [];
    }

    const fetchUrl = `${apiUrl}/wp/v2/publication?_embed&orderby=date&order=desc&per_page=100`;
    try {
        const res = await fetch(fetchUrl);
        if (!res.ok) {
            console.error(`Failed to fetch publications: ${res.status} ${res.statusText}`)
            return [];
        }
        // 使用更具体的类型
        const data: WordPressPublicationPostData[] = await res.json();

        const publications: PublicationItem[] = data.map((item) => {
            const acfThumbnailUrl = item.acf?.thumbnail?.url || "https://www.cribelab.org/wp-content/uploads/2025/02/placeholder-1.svg";
            return {
                id: item.id,
                categories: item.acf?.categories || 'Unknown Category',
                authors: item.acf?.authors || 'Unknown Authors',
                thumbnail: acfThumbnailUrl,
                thumbnail_describe: item.acf?.thumbnail_describe || null,
                year: item.acf?.year || 'N/A',
                title: item.acf?.title || item.title?.rendered || 'Untitled Publication', // 优先 ACF title，其次 WP Post title
                summary: item.acf?.summary || null,
                journal: item.acf?.journal || null,
                abstract: item.acf?.abstract || null,
                url: item.acf?.url || null,
                is_selected: item.acf?.is_selected || false,
            };
        });
        return publications;
    } catch (error) {
        console.error("Error fetching or processing publications data:", error);
        return [];
    }
}

export async function getTeamMembersData(): Promise<TeamMemberItem[]> {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    if (!apiUrl) {
        console.error("WordPress API URL is not configured in .env.local");
        return [];
    }
    const fetchUrl = `${apiUrl}/wp/v2/member`;
    try {
        const res = await fetch(fetchUrl);
        if (!res.ok) {
            console.error(`Failed to fetch team members: ${res.status} ${res.statusText}`);
            return [];
        }
        const data: WordPressTeamMemberPostData[] = await res.json();
        const teamMembers: TeamMemberItem[] = data.map((item) => {
            const acfImageUrl = item.acf?.member_image?.url || "https://www.cribelab.org/wp-content/uploads/2025/02/placeholder-1.svg";
            const width = item.acf?.member_image?.width || null;
            const height = item.acf?.member_image?.height || null;
            return {
                id: item.id,
                name: item.acf?.name || item.title?.rendered || 'Unknown Member',
                role: item.acf?.role || null,
                image: acfImageUrl,
                is_featured: item.acf?.is_featured || false,
                width: width,
                height: height,
            };
        });

        return teamMembers;
    } catch (error) {
        console.error("Error fetching or processing team members data:", error);
        return [];
    }
}

export interface MeanItem {
    id: string;
    label: string;
    href: string;
    sub_href: string;
}

export async function getMeanData(): Promise<MeanItem[]> {
    const meanitems: MeanItem[] = [
        { id: 'mean-home', label: 'Home', href: 'home', sub_href: '/#home' },
        { id: 'mean-research', label: 'Research', href: 'research', sub_href: '/#research' },
        { id: 'mean-publications', label: 'Publications', href: 'publications', sub_href: '/#publications' },
        { id: 'mean-team', label: 'Team', href: 'team', sub_href: '/#team' },
        { id: 'mean-news', label: 'News', href: 'news', sub_href: '/#news' },
        { id: 'mean-join', label: 'Join Us', href: 'join', sub_href: '/#join' },
    ];
    return meanitems;
}
