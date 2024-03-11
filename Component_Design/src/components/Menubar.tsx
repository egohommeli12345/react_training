import styles from "./Menubar.module.css";

function Menubar() {
    return (
        <div className={styles.menubar}>
            <h1 className={styles.logo}>Savonkoti</h1>
            <nav className={styles.navbar}>
                <ul className={styles.navlist}>
                    <li>
                        <a href="#home">Etusivu</a>
                    </li>
                    <li>
                        <a href="#home">Meistä</a>
                    </li>
                    <li>
                        <a href="#home">Tuotteet</a>
                    </li>
                    <li>
                        <a href="#home">Yhteydenotto</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menubar;
