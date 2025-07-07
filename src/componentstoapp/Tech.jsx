export const Tech = ({ skills }) => {
  return (
    <div className="tech-section">
        <h1>Tech</h1>
        <div className="tech-container">
            {skills.map((tech) => (
            <span className="tech-list" key={tech}>
            {tech}
            </span>
            ))}
        </div>
    </div>
  );
};