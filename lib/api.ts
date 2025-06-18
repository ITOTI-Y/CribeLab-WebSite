// lib/api.ts

export const placeholderImage = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-content/uploads/2025/02/placeholder-1.svg`;

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
    title?: {
        rendered: string;
    };
    _embedded?: {
        'wp:featuredmedia'?: {
            source_url?: string;
        }[];
    };
}

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

// --- Final Data Item Interfaces (Used in Components) ---

export interface ResearchItem {
    id: number;
    title: string;
    description: string | null;
    image: string;
    width?: number;
    height?: number;
    icon?: string | null;
}

export interface PublicationItem {
    id: number;
    categories: string;
    authors: string;
    thumbnail: string;
    thumbnail_describe?: string | null;
    year: string;
    title: string;
    summary?: string | null;
    journal?: string | null;
    abstract?: string | null;
    url?: string | null;
    pdf?: string | null;
    is_selected?: boolean;
}

export interface TeamMemberItem {
    id: number;
    name: string;
    role?: string | null;
    image: string;
    is_featured?: boolean;
    is_team?: boolean;
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

// --- Generic Fetcher Helper ---
/**
 * Fetches all pages for a given WordPress REST API endpoint.
 * @param baseUrl The base URL for the API endpoint, including per_page parameter.
 * @returns A promise that resolves to an array of all items.
 */

async function fetchAllPages<T>(baseUrl: string): Promise<T[]> {
    try {
        const firstPageRes = await fetch(baseUrl);
        if (!firstPageRes.ok) {
            console.error(`Failed to fetch initial data from ${baseUrl}: ${firstPageRes.status} ${firstPageRes.statusText}`);
            return [];
        }

        const totalPagesHeader = firstPageRes.headers.get('X-WP-TotalPages');
        const totalPages = totalPagesHeader ? parseInt(totalPagesHeader, 10) : 1;
        
        const firstPageData: T[] = await firstPageRes.json();
        let allData = firstPageData;

        if (totalPages > 1) {
            const pagePromises: Promise<T[]>[] = [];
            for (let page = 2; page <= totalPages; page++) {
                const pageUrl = `${baseUrl}&page=${page}`;
                pagePromises.push(
                    fetch(pageUrl).then(res => {
                        if (!res.ok) {
                            console.error(`Failed to fetch page ${page} from ${baseUrl}: ${res.status} ${res.statusText}`);
                            return []; // Return empty array for failed pages to not break Promise.all
                        }
                        return res.json();
                    })
                );
            }
            const subsequentPagesData = await Promise.all(pagePromises);
            allData = allData.concat(...subsequentPagesData);
        }

        return allData;
    } catch (error) {
        console.error(`Error fetching all pages from ${baseUrl}:`, error);
        return [];
    }
}

// --- Data Fetching Functions ---

export async function getResearchData(): Promise<ResearchItem[]> {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    if (!apiUrl) {
        console.error("WordPress API URL is not configured in .env.local");
        return [];
    }
    const baseUrl = `${apiUrl}/wp-json/wp/v2/research`;
    const data = await fetchAllPages<WordPressResearchPostData>(baseUrl);

    return data.map((item) => {
        const acfImageUrl = item.acf?.thumbnail?.url || placeholderImage;
        return {
            id: item.id,
            title: item.acf?.title || 'Untitled Research',
            description: item.acf?.description || null,
            image: acfImageUrl,
            width: item.acf?.thumbnail?.width,
            height: item.acf?.thumbnail?.height,
            icon: item.acf?.icon,
        };
    });
}

export async function getPublicationsData(): Promise<PublicationItem[]> {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    if (!apiUrl) {
        console.error("WordPress API URL is not configured in .env.local");
        return [];
    }
    const baseUrl = `${apiUrl}/wp-json/wp/v2/publication?_embed&orderby=date&order=desc`;
    const data = await fetchAllPages<WordPressPublicationPostData>(baseUrl);
    
    return data.map((item) => {
        const acfThumbnailUrl = item.acf?.thumbnail?.url || placeholderImage;
        return {
            id: item.id,
            categories: item.acf?.categories || 'Unknown Category',
            authors: item.acf?.authors || 'Unknown Authors',
            thumbnail: acfThumbnailUrl,
            thumbnail_describe: item.acf?.thumbnail_describe || null,
            year: item.acf?.year || 'N/A',
            title: item.acf?.title || item.title?.rendered || 'Untitled Publication',
            summary: item.acf?.summary || null,
            journal: item.acf?.journal || null,
            abstract: item.acf?.abstract || null,
            url: item.acf?.url || null,
            pdf: item.acf?.pdf || null,
            is_selected: item.acf?.is_selected || false,
        };
    });
}

export async function getTeamMembersData(): Promise<TeamMemberItem[]> {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    if (!apiUrl) {
        console.error("WordPress API URL is not configured in .env.local");
        return [];
    }
    const baseUrl = `${apiUrl}/wp-json/wp/v2/member?per_page=100`;
    const data = await fetchAllPages<WordPressTeamMemberPostData>(baseUrl);

    return data.map((item) => {
        const acfImageUrl = item.acf?.member_image?.url || placeholderImage;
        return {
            id: item.id,
            name: item.acf?.name || item.title?.rendered || 'Unknown Member',
            role: item.acf?.role || null,
            image: acfImageUrl,
            is_featured: item.acf?.is_featured || false,
            is_team: item.acf?.is_team || false,
            width: item.acf?.member_image?.width || null,
            height: item.acf?.member_image?.height || null,
            description: item.acf?.description || null,
        };
    });
}

export async function getDevelopmentData(): Promise<DevelopmentItem[]> {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    if (!apiUrl) {
        console.error("WordPress API URL is not configured in .env.local");
        return [];
    }
    const baseUrl = `${apiUrl}/wp-json/wp/v2/development?per_page=100`;
    const data = await fetchAllPages<WordPressDevelopmentPostData>(baseUrl);

    return data.map((item) => {
        const acfImageUrl = item.acf?.thumbnail?.url || placeholderImage;
        return {
            id: item.id,
            title: item.acf?.title || 'Untitled Development',
            url: item.acf?.url || null,
            description: item.acf?.description || null,
            image: acfImageUrl,
        };
    });
}

export async function getNewsData(): Promise<NewItem[]> {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    if (!apiUrl) {
        console.error("WordPress API URL is not configured in .env.local");
        return [];
    }
    const baseUrl = `${apiUrl}/wp-json/wp/v2/new?per_page=100`;
    const data = await fetchAllPages<WordPressNewPostData>(baseUrl);

    return data.map((item) => {
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
}

// --- Static Data ---
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
        { id: 'mean-development', label: 'Development', href: 'development', sub_href: '/#development' },
        { id: 'mean-team', label: 'Team', href: 'team', sub_href: '/#team' },
        { id: 'mean-join', label: 'Join Us', href: 'join', sub_href: '/#join' },
    ];
    return meanitems;
}
