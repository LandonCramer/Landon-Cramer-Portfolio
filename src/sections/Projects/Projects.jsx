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
          p="ShoeHaven, a web application tailored for footwear enthusiasts. This application lets users browse a curated selection of shoes, add favorites to their collection, and seamlessly purchase the pairs they love."
        />
        <ProjectCard
          src={birdNoise}
          link="https://github.com/LandonCramer/BirdNoise"
          h3="BirdNoise"
          p="BirdNoise is a social platform that reimagines online conversations with infinite scrolling, dark mode, and unlimited nested posts. Engage in seamless discussions and explore content endlessly in a sleek, user-friendly environment."
        />
        <ProjectCard
          src={peakExperiences}
          link="https://github.com/LandonCramer/peak-experiences"
          h3="Peak Experiences"
          p="Discover and explore awe-inspiring activities, designed to help you create, customize, and share your ultimate bucket list. Step out of your comfort zone and turn dreams into reality with every tap."
        />
      </div>
    </section>
  );
}

export default Projects;
