import styles from "./App.module.css";
import Menubar from "./components/Menubar";
import Tile from "./components/Tile";
import TileReversed from "./components/TileR";

function App() {
    return (
        <div className={styles.mainApp}>
            <Menubar />
            <div className={styles.content}>
                <Tile />
                <TileReversed />
            </div>
        </div>
    );
}

export default App;
