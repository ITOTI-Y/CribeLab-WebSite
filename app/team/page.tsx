import { getTeamMembersData } from "@/lib/api";
import MemberCard from "@/components/team/MemberCard";

export default async function TeamPage() {
    const teamMembersData = await getTeamMembersData();
    const teamMembers = teamMembersData.filter((member) => !member.is_team && !member.is_featured);
    const teamLeaders = teamMembersData.filter((member) => member.is_featured);

    return (
        <div className="min-h-screen w-full bg-black text-white pt-16 font-roboto">
            <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 pb-16">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold p-6 text-center sm:text-start">
                    Team Members
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {teamLeaders.map((member) => (
                        <MemberCard key={member.id} member={member} />
                    ))}
                    {teamMembers.map((member) => (
                        <MemberCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
        </div>
    )
}