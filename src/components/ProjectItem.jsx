import styles from "src/assets/styles/ProjectItem.module.css";

function ProjectTags({ tags }) {
  return (
    <div className={styles.project_tags}>
      {tags.map((tag, key) => {
        return (
          <h5 className={styles.project_tag} key={key}>
            {tag}
          </h5>
        );
      })}
    </div>
  );
}

function ProjectItem({ name, description, image, alt, tags }) {
  return (
    <div className={styles.project_item}>
      <img className={styles.project_image} src={image} alt={alt} />
      <h3 className={styles.project_title}>{name}</h3>
      <p className={styles.project_description}>{description}</p>
      <ProjectTags tags={tags} />
    </div>
  );
}

export default ProjectItem;
