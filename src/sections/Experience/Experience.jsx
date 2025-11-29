import styles from "./ExperienceStyles.module.css";
import rezmeHero from "../../assets/rezmeHero.gif";

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.experienceCard}>
        <div className={styles.imageContainer}>
          <img src={rezmeHero} alt="Rézme Platform Demo" className={styles.demoImage} />
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>Full-Stack Software Engineer</h2>
            <a href="https://rezme.app" target="_blank" rel="noopener noreferrer" className={styles.company}>
              Rézme
            </a>
            <p className={styles.period}>2024 – Present</p>
          </div>
          <div className={styles.stack}>
            <span className={styles.tech}>React</span>
            <span className={styles.tech}>TypeScript</span>
            <span className={styles.tech}>Python/Flask</span>
            <span className={styles.tech}>PostgreSQL</span>
            <span className={styles.tech}>Supabase</span>
          </div>
          <ul className={styles.achievements}>
            <li>Follow structured development workflow: document issues with clear specs → peer code review → staging deployment and testing → production release with team validation</li>
            <li>Implement security best practices including CSRF protection with secureFetch() wrappers for all API calls and secure coding standards</li>
            <li>Maintain code quality through focused commits, proper naming conventions (camelCase for variables, underscore_case for database fields), and clean Git history</li>
            <li>Led accessibility improvements across the platform, achieving WCAG 2.1 AA compliance for core workflows</li>
            <li>Designed and implemented data-driven reporting features giving HR teams real-time compliance insights</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;


