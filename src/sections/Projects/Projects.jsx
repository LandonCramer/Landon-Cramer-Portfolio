import styles from "./ProjectsStyles.module.css"
import ledgerEnds from "../../assets/ledgerEndsLogo.webp"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <a href="https://github.com/LandonCramer/Flatiron-Hackonomics-2024/tree/main" target="_blank">
                <img className="hover" src={ledgerEnds} alt="Ledger Ends logo" />
                <h3>The Ledger Ends</h3>
                <p>AI-Driven Personal Finance Platform</p>
                </a>
        </div>
    </section>
  )
}

export default Projects;