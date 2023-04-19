import ContactForm from "src/components/ContactForm";
import { ReactComponent as LinkedInLogo } from "src/assets/linkedin.svg";
import styles from "src/assets/styles/Contact.module.css";

function Contact() {
  return (
    <div>
      <div className={styles.block}></div>
      <div>
        <a href="https://www.linkedin.com/in/joloows/" target="_blank">
          <LinkedInLogo className={styles.linkedin} />
        </a>
      </div>
      <h4>or</h4>
      <ContactForm />
    </div>
  );
}

export default Contact;
