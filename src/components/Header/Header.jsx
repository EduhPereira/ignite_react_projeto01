import styles from "./Header.module.css"

import igniteLogo from "../../assets/ignite-logo.png"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Ignite Logo" />
            <span>ignite feed</span>
        </header>
    )
}
