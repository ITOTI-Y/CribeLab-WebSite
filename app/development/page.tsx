import { getDevelopmentData } from '@/lib/api';
import DevelopmentGrid from '@/components/development/DevelopmentGridCard';
import { Code} from 'lucide-react';

export default async function DevelopmentPage() {
    const developmentData = await getDevelopmentData();
    
    return (
        <main className="flex flex-col min-h-screen items-center bg-black pt-16 text-white">
            <div className="flex flex-col lg:flex-row items-center justify-center pt-8 lg:pt-16 gap-2">
                <div className="flex items-center gap-4">
                    <Code className="w-8 h-8 lg:w-12 lg:h-12 text-purple-400" />
                    <h1 className="text-2xl lg:text-4xl font-bold text-center">
                        Discover our
                    </h1>
                </div>
                <span className="text-2xl lg:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    development projects
                </span>
            </div>
            <DevelopmentGrid developmentData={developmentData} />
        </main>
    )
}