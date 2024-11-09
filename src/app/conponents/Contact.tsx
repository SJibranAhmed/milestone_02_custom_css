import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import styles from './styles/contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer} id="contact">
      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <h2 className={styles.contactHeading}>Get in touch</h2>
          <p className={styles.contactDescription}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            numquam exercitationem distinctio reiciendis, enim asperiores.
          </p>
          <div className={styles.contactDetails}>
            <AiOutlineMail size={30} /> sheihkjibran889970@gmail.com
          </div>
          <div className={styles.contactDetails}>
            <BsTelephone size={30} /> +92315 9936336
          </div>
        </div>

        <div className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className={styles.formInput}
              id="name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className={styles.formInput}
              id="email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="msg">Message</label>
            <textarea
              className={styles.formTextarea}
              id="msg"
              rows={8}
            ></textarea>
          </div>
          <button className={styles.submitBtn}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
