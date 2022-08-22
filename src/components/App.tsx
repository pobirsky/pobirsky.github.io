import "../styles/App.css";
import cn from "classnames";
import "../../node_modules/normalize.css/normalize.css";
import styles from "../styles/header.module.css";
import bodyStyles from "../styles/body.module.css";
import Header from "./containers/MyContainers/Header";
import Sidebar from "./containers/MyContainers/Sidebar";
import AppRouter from "./router/appRouter";
import * as React from "react";

function App() {
  return (
    <div className="App">
      <div className={styles.main}>
        <Header />
        <div className={cn(bodyStyles.bodyVk, bodyStyles.container)}>
          <div className={bodyStyles.sectionContainer}>
            <Sidebar />
            <AppRouter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
