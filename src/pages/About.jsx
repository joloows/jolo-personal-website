import styles from "src/assets/styles/About.module.css";
import ProjectItem from "src/components/ProjectItem";
import data from "src/utils/data/data.json";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.about}>
        <h1 className={styles.title}>About Jolo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit
          asperiores cupiditate optio, sint unde perspiciatis hic eos aperiam
          deleniti beatae accusantium dolores corrupti dolorum, adipisci
          corporis consequuntur voluptas possimus. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          commodi odio illum doloribus. Rerum minus similique eaque libero aut
          quibusdam praesentium nisi provident optio. Repellat accusantium iure
          iste inventore nisi. Nesciunt voluptatem reiciendis at ut voluptas
          quos! Nostrum optio obcaecati corporis officia, et odio consequuntur
          illo, doloremque, non quaerat repudiandae reprehenderit veritatis.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
          placeat vel nulla porro id inventore repudiandae, omnis assumenda
          eveniet, deleniti natus dolore optio nobis qui dicta tempore vitae
          ipsa fugiat?
        </p>
      </div>
      <div>
        <h1 className={styles.projects}>Projects</h1>
        <div className={styles.projects_container}>{projectItems}</div>
      </div>
    </motion.div>
  );
}

export default About;
