import TeamMemberCard from './TeamMemberCard';
import '../../styles/team/teamSection.css';

function TeamSection({ area, members, altBackground = false }) {
  return (
    <section className={`team-section ${altBackground ? 'alt-bg' : ''}`}>
      <div className="team-section-container">
        <h2 className="team-section-title">{area}</h2>

        <div className="team-section-grid">
          {members.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;