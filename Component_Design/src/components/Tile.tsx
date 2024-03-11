import styles from "./Tile.module.css";

function Tile() {
    return (
        <div className={styles.tile}>
            <div className={styles.smalltile}>
                <div className={styles.button}>Button</div>
            </div>
            <div className={styles.bigtile}>big</div>
        </div>
    );
}

export default Tile;
