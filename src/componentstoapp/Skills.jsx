export const Skills = ({ skills }) => {
  return (
    <div className="skills-section">
        <div className="skills-container">
            <h1>Skills</h1>
            {skills.map((skill) => (
            <span className="skill-list" key={skill}>
            {skill}
            </span>
            ))}
        </div>
    </div>
  );
};