import styles from './styles/skills.module.css'
const Skills = () => {
  return (
    <div className={styles.container} id='skills'>
      <div className={styles.main}>
        <div>
          <h2 className={styles.heading}>Technologies I work with</h2>
          <p className={styles.para}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Alias cupiditate doloribus nostrum quidem earum et nihil excepturi dolorum sequi id.
          </p><br /><br />

          <div>
            <div className={styles.langContainer}>
              <div className={styles.items}>
                <h2>Next.js</h2>
                <h2>React.js</h2>
              </div>
              <div className={styles.items}>
                <h2>Tailwind</h2>
                <h2>CSS</h2>
              </div>
              <div className={styles.items}>
                <h2>FastAPI</h2>
                <h2>Node.js</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
