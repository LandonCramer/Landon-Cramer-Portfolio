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
           <SkillList src={themeIcon} skill="CSS" />
           <SkillList src={themeIcon} skill="JavaScript" />
           <SkillList src={themeIcon} skill="HTML" />
           <SkillList src={themeIcon} skill="Python" />
           <SkillList src={themeIcon} skill="Node" />
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={themeIcon} skill="React" />
           <SkillList src={themeIcon} skill="Flask" />
           <SkillList src={themeIcon} skill="Git" />
           <SkillList src={themeIcon} skill="PostgreSQL" />
           <SkillList src={themeIcon} skill="SQLAlchemy" />
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={themeIcon} skill="Software Development" />
           <SkillList src={themeIcon} skill="SQL" />
           <SkillList src={themeIcon} skill="ReactNative" />
           <SkillList src={themeIcon} skill="Expo" />
           <SkillList src={themeIcon} skill="GitHub" />
        </div>
        <hr />
    </section>
  )
}

export default Skills;


