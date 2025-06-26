import ContributorCard from "./custom/ContributorCard";
import { getTeamMembersData } from "@/lib/api";


export default async function Contributor() {
    const teamMembers = await getTeamMembersData();
    const developerMembers = teamMembers.filter((member) => member.development_role);
    return (
        <section id="contributor" className="w-full flex justify-center items-center">
            <div className="w-full px-4 sm:px-6 lg:px-8 pb-4">
                <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-lg p-10">
                    <h1 className="text-3xl mx-auto font-extrabold text-white text-center mt-6">
                        WEBSITE CONTRIBUTORS
                    </h1>
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 mt-6 gap-y-4">
                        {developerMembers.map((member) => (
                                <ContributorCard key={member.id} member={member} />
                            ))}
                    </div>
                </div>
            </div>

        </section>
    );
}