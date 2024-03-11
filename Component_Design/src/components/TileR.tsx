import styles from "./TileR.module.css";

function TileReversed() {
    return (
        <div className={styles.tile}>
            <div className={styles.smalltile}>small</div>
            <div className={styles.bigtile}>big</div>
        </div>
    );
}

export default TileReversed;
