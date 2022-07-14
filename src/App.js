import "./App.css";
import cn from "classnames";
import "normalize.css";
import styles from "./styles/header.module.css";
import bodyStyles from "./styles/body.module.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Centeer from "./components/centeer";
import { Routes, Route } from "react-router-dom";
import { News } from "./components/pages/AboutPage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { BlockPage } from "./components/pages/Blockpage";
// import Login from "./components/login"
import FormikLogin from "./components/LoginFormik";

/* eslint-disable */
function App() {
  return (
    <div className="App">
      <div className={styles.main}>
        <Header />
        <div className={cn(bodyStyles.bodyVk, bodyStyles.container)}>
          <div className={bodyStyles.sectionContainer}>
            <Sidebar />
              <Routes>
                <Route path="/login" element={<FormikLogin/>} />
                <Route path="/main" element={<Centeer />} />
                <Route path="/news" element={<News />} />
                <Route path="/posts" element={<BlockPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
