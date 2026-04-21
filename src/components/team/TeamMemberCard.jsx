import '../../styles/team/teamMemberCard.css';

function TeamMemberCard({ name, role, description, image }) {
  return (
    <article className="team-member-card">
      <div className="team-member-image-wrapper">
        {image ? (
          <img src={image} alt={name} className="team-member-image" />
        ) : (
          <div className="team-member-placeholder"></div>
        )}
      </div>

      <h3 className="team-member-name">{name}</h3>
      <p className="team-member-role">{role}</p>
      <p className="team-member-description">{description}</p>
    </article>
  );
}

export default TeamMemberCard;