// lib/api.ts
// TODO:Publications 只能返回100条数据，由于per_page=100
// TODO:其余API 也需要解决分页问题

const placeholderImage = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-content/uploads/2025/02/placeholder-1.svg`;

interface ACFImage {
    url?: string;
    width?: number;
    height?: number;
}

interface ResearchACF {
    title?: string | null;
    description?: string | null;
    thumbnail?: ACFImage;
    icon?: string | null;
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
    pdf?: string | null;
    is_selected?: boolean;
}

interface TeamMemberACF {
    name?: string | null;
    role?: string | null;
    is_featured?: boolean;
    member_image?: ACFImage | null;
    is_team?: boolean;
    description?: string | null;
}

interface DevelopmentACF {
    title?: string | null;
    url?: string | null;
    description?: string | null;
    thumbnail?: ACFImage;
}

interface NewACF {
    title?: string;
    date?: string;
    url?: string | null;
    description?: string | null;
    thumbnail?: ACFImage;
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

interface WordPressDevelopmentPostData extends BaseWordPressPost {
    acf?: DevelopmentACF;
}

interface WordPressNewPostData extends BaseWordPressPost {
    acf?: NewACF;
}

export interface ResearchItem {
    id: number;
    title: string; // 来自 ResearchACF.title (ACF 字段)
    description: string | null; // 来自 ResearchACF
    image: string; // 来自 ResearchACF.thumbnail.url 或占位符
    width?: number;
    height?: number;
    icon?: string;
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
    pdf?: string | null;     // 来自 PublicationACF
    is_selected?: boolean; // 来自 PublicationACF
}

export interface TeamMemberItem {
    id: number;
    name: string;       // 来自 TeamMemberACF
    role?: string | null;// 来自 TeamMemberACF
    image: string;// 来自 TeamMemberACF.member_image.url 或占位符
    is_featured?: boolean; // 来自 TeamMemberACF
    is_team?: boolean; // 来自 TeamMemberACF
    width?: number | null;
    height?: number | null;
    description?: string | null;
}

export interface DevelopmentItem {
    id: number;
    title: string;
    url: string | null;
    description: string | null;
    image: string;
}

export interface NewItem {
    id: number;
    title: string;
    date: string | null;
    url: string | null;
    description: string | null;
    image: string;
}

export async function getResearchData(): Promise<ResearchItem[]> {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    if (!apiUrl) {
        console.error("WordPress API URL is not configured in .env.local");
        return [];
    }
    const fetchUrl = `${apiUrl}/wp-json/wp/v2/research`;
    try {
        const res = await fetch(fetchUrl);
        if (!res.ok) {
            console.error(`Failed to fetch research data: ${res.status} ${res.statusText}`);
            return [];
        }
        // 使用更具体的类型
        const data: WordPressResearchPostData[] = await res.json();
        const researchItems: ResearchItem[] = data.map((item) => {
            const acfImageUrl = item.acf?.thumbnail?.url || placeholderImage;
            return {
                id: item.id,
                title: item.acf?.title || 'Untitled Research',
                description: item.acf?.description || null,
                image: acfImageUrl, // image 现在直接使用 acfImageUrl
                width: item.acf?.thumbnail?.width || undefined,
                height: item.acf?.thumbnail?.height || undefined,
                icon: item.acf?.icon || undefined,
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

    const fetchUrl = `${apiUrl}/wp-json/wp/v2/publication?_embed&orderby=date&order=desc&per_page=100`;
    try {
        const res = await fetch(fetchUrl);
        if (!res.ok) {
            console.error(`Failed to fetch publications: ${res.status} ${res.statusText}`)
            return [];
        }
        // 使用更具体的类型
        const data: WordPressPublicationPostData[] = await res.json();

        const publications: PublicationItem[] = data.map((item) => {
            const acfThumbnailUrl = item.acf?.thumbnail?.url || placeholderImage;
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
                pdf: item.acf?.pdf || null,
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
    const fetchUrl = `${apiUrl}/wp-json/wp/v2/member`;
    try {
        const res = await fetch(fetchUrl);
        if (!res.ok) {
            console.error(`Failed to fetch team members: ${res.status} ${res.statusText}`);
            return [];
        }
        const data: WordPressTeamMemberPostData[] = await res.json();
        const teamMembers: TeamMemberItem[] = data.map((item) => {
            const acfImageUrl = item.acf?.member_image?.url || placeholderImage;
            const width = item.acf?.member_image?.width || null;
            const height = item.acf?.member_image?.height || null;
            return {
                id: item.id,
                name: item.acf?.name || item.title?.rendered || 'Unknown Member',
                role: item.acf?.role || null,
                image: acfImageUrl,
                is_featured: item.acf?.is_featured || false,
                is_team: item.acf?.is_team || false,
                width: width,
                height: height,
                description: item.acf?.description || null,
            };
        });

        return teamMembers;
    } catch (error) {
        console.error("Error fetching or processing team members data:", error);
        return [];
    }
}

export async function getDevelopmentData(): Promise<DevelopmentItem[]> {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    if (!apiUrl) {
        console.error("WordPress API URL is not configured in .env.local");
        return [];
    }
    const fetchUrl = `${apiUrl}/wp-json/wp/v2/development`;
    try {
        const res = await fetch(fetchUrl);
        if (!res.ok) {
            console.error(`Failed to fetch development data: ${res.status} ${res.statusText}`);
            return [];
        }
        const data: WordPressDevelopmentPostData[] = await res.json();
        const developmentItems: DevelopmentItem[] = data.map((item) => {
            const acfImageUrl = item.acf?.thumbnail?.url || placeholderImage;
            return {
                id: item.id,
                title: item.acf?.title || 'Untitled Development',
                url: item.acf?.url || null,
                description: item.acf?.description || null,
                image: acfImageUrl,
            };
        });
        return developmentItems;
    } catch (error) {
        console.error("Error fetching or processing development data:", error);
        return [];
    }
}

export async function getNewsData(): Promise<NewItem[]> {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    if (!apiUrl) {
        console.error("WordPress API URL is not configured in .env.local");
        return [];
    }
    const fetchUrl = `${apiUrl}/wp-json/wp/v2/new`;
    try {
        const res = await fetch(fetchUrl);
        if (!res.ok) {
            console.error(`Failed to fetch news data: ${res.status} ${res.statusText}`);
            return [];
        }
        const data: WordPressNewPostData[] = await res.json();
        const newsItems: NewItem[] = data.map((item) => {
            const acfImageUrl = item.acf?.thumbnail?.url || placeholderImage;
            return {
                id: item.id,
                title: item.acf?.title || 'Untitled New',
                date: item.acf?.date || null,
                url: item.acf?.url || null,
                description: item.acf?.description || null,
                image: acfImageUrl,
            };
        });
        return newsItems;
    } catch (error) {
        console.error("Error fetching or processing news data:", error);
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
