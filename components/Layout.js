import styles from './layout.module.css';

const Layout = ({children}) => {
  const myName = "Ganesh Bhusi";
  return (
    <div className={styles.container}>
      <h1>Top Layout</h1>
      {children}
    </div>
  )
}

export default Layout;