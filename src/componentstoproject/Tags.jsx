export const Tags = ({ tags }) => {
    return (
      <div className="tag-container">
        {tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    );
};