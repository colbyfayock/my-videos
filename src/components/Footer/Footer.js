import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <p>&copy;&nbsp;<a href="https://spacejelly.dev">Space Jelly</a>, {new Date().getFullYear()}</p>
      <p>All videos from <a href="https://pexels.com">Pexels</a></p>
    </footer>
  )
}

export default Footer;