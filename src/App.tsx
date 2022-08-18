import "./App.css";
import cn from "classnames";
import "normalize.css";
import styles from "./styles/header.module.css";
import bodyStyles from "./styles/body.module.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import AppRouter from "./components/router/appRouter";
import {useAppSelector} from "./hooks/redux";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "./store/reducers/ActionCreator";

function App() {
  const dispatch = useDispatch()
  const {users, loading, error} = useAppSelector((state) => state.userReducer);

  // вот с этого момента у меня не рендепится ни один элемент
  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])

  return (
    <div className="App">
      <div className={styles.main}>
        <Header />
        {/*<div></div>*/}
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
