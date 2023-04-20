import ContactForm from "src/components/ContactForm";
import { ReactComponent as LinkedInLogo } from "src/assets/linkedin.svg";
import styles from "src/assets/styles/Contact.module.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.block}></div>
      <div>
        <a href="https://www.linkedin.com/in/joloows/" target="_blank">
          <LinkedInLogo className={styles.linkedin} />
        </a>
      </div>
      <h4>or</h4>
      <ContactForm />
    </motion.div>
  );
}

export default Contact;
