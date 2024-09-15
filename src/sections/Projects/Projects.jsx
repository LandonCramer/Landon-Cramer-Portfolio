import styles from "./ProjectsStyles.module.css";
import ledgerEnds from "../../assets/ledgerEndsLogo.webp";
import ProjectCard from "../../common/ProjectCard";
import shoeHaven from "../../assets/shoeHaven.gif";
import birdNoise from "../../assets/birdnoise.png";
import peakExperiences from "../../assets/peakExperiences.gif";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ledgerEnds}
          link="https://github.com/LandonCramer/Flatiron-Hackonomics-2024/tree/main"
          h3="Ledger Ends"
          p="AI-Driven Personal Finance Platform"
        />
        <ProjectCard
          src={shoeHaven}
          link="https://github.com/LandonCramer/ShoeHaven2.0"
          h3="ShoeHaven"
          p="Web application tailored for footwear enthusiasts"
        />
        <ProjectCard
          src={birdNoise}
          link="https://github.com/LandonCramer/BirdNoise"
          h3="BirdNoise"
          p="Social platform that reimagines online conversations"
        />
        <ProjectCard
          src={peakExperiences}
          link="https://github.com/LandonCramer/peak-experiences"
          h3="Peak Experiences"
          p="Discover and explore awe-inspiring activities"
        />
      </div>
    </section>
  );
}

export default Projects;
