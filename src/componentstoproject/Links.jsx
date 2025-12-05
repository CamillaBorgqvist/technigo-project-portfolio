export const Links = ({github, netlify}) => {
    return (
      <div className="button-container">
        <a href={github} target="_blank">
          <button className="link-button">View Code </button>
        </a>
        <a href={netlify} target="_blank">
          <button className="link-button">View Live </button>
        </a>
      </div>
    );
};