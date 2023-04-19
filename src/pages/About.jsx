import styles from "src/assets/styles/About.module.css";
import ProjectItem from "src/components/ProjectItem";
import data from "src/utils/data/data.json";

function About() {
  const projectItems = data.projects.map(
    ({ name, description, imageSrc, alt }, key) => {
      return (
        <ProjectItem
          key={key}
          name={name}
          description={description}
          image={imageSrc}
          alt={alt}
        />
      );
    }
  );
  return (
    <>
      <div className={styles.about}>
        <h1 className={styles.title}>About Jolo</h1>
        <p>
          Hello there. My name is John Carlo Del Rosario. Just call me Jolo. I'm
          an aspiring web developer and an individual passionate in programming
          in general.
        </p>
        <p>
          I'm currently a student in a vocational college in the Philippines. I
          love tech.
        </p>
      </div>
      <div>
        <h1 className={styles.projects}>Projects</h1>
        <div className={styles.projects_container}>{projectItems}</div>
      </div>
    </>
  );
}

export default About;
