import styles from './FooterStyles.module.css'

function Footer() {
    const currentDate = new Date().getFullYear()
  return (
    <section id='footer' className={styles.container}>
        <p>&copy; {currentDate} Landon Cramer.<br />
        All rights reserved.
        </p>
    </section>
  )
}

export default Footer