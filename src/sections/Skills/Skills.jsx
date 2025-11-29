import styles from './SkillsStyles.module.css'
import checkMarkLight from '../../assets/checkmark-light.svg'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext'

function Skills () {
  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? checkMarkLight : checkMarkDark
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
           <SkillList src={themeIcon} skill="JavaScript" />
           <SkillList src={themeIcon} skill="TypeScript" />
           <SkillList src={themeIcon} skill="Python" />
           <SkillList src={themeIcon} skill="C++" />
           <SkillList src={themeIcon} skill="SQL" />
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={themeIcon} skill="React" />
           <SkillList src={themeIcon} skill="Flask" />
           <SkillList src={themeIcon} skill="Node" />
           <SkillList src={themeIcon} skill="HTML/CSS" />
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={themeIcon} skill="PostgreSQL" />
           <SkillList src={themeIcon} skill="SQLAlchemy" />
           <SkillList src={themeIcon} skill="REST APIs" />
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={themeIcon} skill="Git" />
           <SkillList src={themeIcon} skill="Supabase" />
           <SkillList src={themeIcon} skill="Docker" />
           <SkillList src={themeIcon} skill="CI/CD" />
        </div>
    </section>
  )
}

export default Skills;


