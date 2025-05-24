import SubTitle from "@/components/custom/SubTitle";
import Citation from "@/components/custom/Citation";
import { getTeamMembersData } from "@/lib/api";
import FeaturedMemberCard from "@/components/custom/FeaturedMemberCard";
import MemberCard from "@/components/custom/MemberCard";

export default async function TeamSection() {
  // Get featured team members (first one is the primary)
  const subtitle = "Team Members";
  const citation =
    "Highly Skilled Professionals, Green Building Design Research Backgrounds in Architecture & Building Science with Industry and Academic Experience including computational and Practical expertise";
  const teamMembersData = await getTeamMembersData();
  const featuredMember = teamMembersData.find((member) => member.is_featured);
  const otherMembers = teamMembersData.filter((member) => !member.is_featured);

  return (
    <section id="team" className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SubTitle content={subtitle} />
        <Citation content={citation} />

        <div className="h-fit grid grid-cols-7 md:grid-cols-7 grid-rows-4 gap-4">
          <div className="grid grid-cols-3 grid-rows-4 col-span-3 row-span-3 gap-4">
            {featuredMember && <FeaturedMemberCard member={featuredMember} />}
          </div>
          <div className="grid grid-cols-4 grid-rows-3 col-span-4 row-span-3 gap-4">
            <MemberCard member={otherMembers[0]} />
            <MemberCard member={otherMembers[0]} />
            <MemberCard member={otherMembers[0]} />
            <MemberCard member={otherMembers[0]} />
            <MemberCard member={otherMembers[0]} />
            <MemberCard member={otherMembers[0]} />
            <MemberCard member={otherMembers[0]} />
            <MemberCard member={otherMembers[0]} />
            <MemberCard member={otherMembers[0]} />
            <MemberCard member={otherMembers[0]} />
            <MemberCard member={otherMembers[0]} />
            <MemberCard member={otherMembers[0]} />
          </div>
          <div className="grid grid-cols-7 grid-rows-1 gap-4 col-span-7 row-span-1">
            {/* <MemberCard member={otherMembers[0]} />
               <MemberCard member={otherMembers[0]} />
               <MemberCard member={otherMembers[0]} />
               <MemberCard member={otherMembers[0]} />
               <MemberCard member={otherMembers[0]} />
               <MemberCard member={otherMembers[0]} />
               <MemberCard member={otherMembers[0]} /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
