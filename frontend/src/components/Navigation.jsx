import { NavLink } from "react-router-dom";
import { GraduationCap, Settings, Trophy } from "lucide-react";
import styles from "./navigation.module.css";

const links = [
  { to: "/", label: "Dashboard", icon: <GraduationCap size={18} /> },
  { to: "/config", label: "Config", icon: <Settings size={18} /> },
  { to: "/records", label: "Records", icon: <Trophy size={18} /> },
];

function Navigation() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>StudyQuest Stack</div>
      <nav>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Navigation;