import "./App.css";
import cn from "classnames";
import "normalize.css";
import styles from "./styles/header.module.css";
import bodyStyles from './styles/body.module.css';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import AppRouter from "./components/router/appRouter";
import {useAppSelector} from "./hooks/redux";
/* eslint-disable */
function App() {
    return (
        <div className="App">
            <div className={styles.main}>
                <Header/>
                <div className={cn(bodyStyles.bodyVk, bodyStyles.container)}>
                    <div className={bodyStyles.sectionContainer}>
                        <Sidebar/>
                        <AppRouter/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
