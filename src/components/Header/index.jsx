import style from "./style.module.css"

import igniteLogo from "../../assets/ignite-logo.png"

export function Header() {
    return (
        <header className={style.header}>
            <img src={igniteLogo} alt="Ignite Logo" />
            <span>ignite feed</span>
        </header>
    )
}
