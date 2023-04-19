import "src/assets/styles/ProjectItem.css";

function ProjectItem({ name, description, image, alt }) {
  return (
    <div className="project-item">
      <img src={image} alt={alt} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectItem;
