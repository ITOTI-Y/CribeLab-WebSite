import { getTeamMembersData, TeamMemberItem } from "@/lib/api";
import ReadMoreMoveButton from "@/components/custom/ReadMoreMoveButton";
import Image from "next/image";

export default async function TeamSection() {
    // Get featured team members (first one is the primary)
    const subtitle = "OUR TEAM";
    const teamMembersData: TeamMemberItem[] = await getTeamMembersData();
    const otherMembers = teamMembersData.filter((member) => !member.is_featured);
    const team = otherMembers.filter((member) => member.is_team);

    return (
        <section id="team" className="w-full py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-10 flex-col md:flex-row">
                <div className="relative w-full md:w-1/2 h-54 md:h-96">
                    <Image src={team[0]?.image} alt={team[0]?.name} fill sizes="99vw" className="object-cover rounded-lg" />
                    <div className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                        <h3 className="text-2xl text-center font-bold text-neutral-200">
                            The gravity of ideas is bringing us together.
                        </h3>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-between py-5">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-white text-start mb-5">
                            {subtitle}
                        </h2>
                        <p className="text-gray-300 text-start w-full text-sm sm:text-base">
                            {team[0]?.description}
                        </p>
                    </div>
                    <ReadMoreMoveButton href={'/team'} text="Know About Us" />
                </div>
            </div>
        </section>
    );
}
