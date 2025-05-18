'use client'

import { SelectedCard } from './SelectedCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PublicationItem } from '@/lib/api';


const SelectedPublicationFrame = ({ selectedPublications }: { selectedPublications: PublicationItem[] }) => {
    return (
        <div className="bg-[rgba(217,217,217,0.1)] p-4 rounded-xl">
        <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Selected Publications
        </h3>
        <ScrollArea className="h-96 md:h-128 w-full pr-4">
            <div className="space-y-6 p-4">
                {selectedPublications.length > 0 ? (
                    selectedPublications.map((pub) => (
                        <SelectedCard key={pub.id} publication={pub} />
                    ))
                ) : (
                    <p className="text-gray-400 text-sm text-center py-10">
                        No selected publications found. Mark publications as Selected in WordPress.
                    </p>
                )}
            </div>
        </ScrollArea>
    </div>
    )
}


export default SelectedPublicationFrame;