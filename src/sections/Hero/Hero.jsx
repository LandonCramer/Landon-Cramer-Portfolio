import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/myPhoto.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/LandonCramerResume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Landon Cramer"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.heroName}>LANDON CRAMER</h1>
        <h2 className={styles.heroTitle}>Software Engineer · Systems & Web</h2>
        
        <span>
          <a href="https://www.linkedin.com/in/landon-cramer/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/LandonCramer" target="_blank">
            <img src={githubIcon} alt="GithubIcon" />
          </a>
        </span>

        <p className={styles.heroTagline}>
          Building reliable, accessible software that opens doors for people.
        </p>

        <p className={styles.heroBody}>
          I'm a software engineer at Rézme, working across the stack with React,
          TypeScript, Python/Flask, and Postgres. I build user-facing features like
          interactive tutorial systems and onboarding flows, refactor components for
          better reusability, and fix bugs that improve performance. I focus on type
          safety, clean architecture, and shipping features that make compliance tools
          accessible to everyone.
        </p>

        <p className={styles.heroBody}>
          If you're interested in fair-chance hiring, impactful tech, or just good
          engineering, I'd love to connect.
        </p>

        <button 
          className={styles.heroResumeButton}
          onClick={() => window.open(CV, '_blank')}
        >
          View Resume
        </button>
      </div>
    </section>
  );
}

export default Hero;
