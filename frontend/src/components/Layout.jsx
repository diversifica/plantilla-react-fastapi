import Navigation from "./Navigation.jsx";
import styles from "./layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.shell}>
      <Navigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;