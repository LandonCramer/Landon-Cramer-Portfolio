import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/myPhoto.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/resume.pdf";
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
        <h1>Landon Cramer</h1>
        <h2>Full-Stack Software Engineer</h2>
        <span>
          <a href="https://www.linkedin.com/in/landon-cramer/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>

          <a href="https://github.com/LandonCramer" target="_blank">
            <img src={githubIcon} alt="GithubIcon" />
          </a>
        </span>
        <p className={styles.description}>
          I'm a full-stack software engineer with skills in Javascript (React),
          Python (Flask), SQL, HTML, and CSS. I'm passionate about learning and
          always looking to challenge myself. What excites me the most is using
          my skills to create innovative applications that make a positive
          impact. Let's connect and build something awesome together!
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
