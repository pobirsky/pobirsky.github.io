import styles from "../styles/header.module.css";
import cn from "classnames";
import {Logo} from "./svgComponents/header.vklogo";
import {Search} from "./svgComponents/searchIcon";
import {HeaderNotification} from "./svgComponents/header.notification";
import {HeaderPlayerPlay} from "./svgComponents/header.playerPlay";
import {HeaderBurger} from "./svgComponents/header.burger";
import {HeaderAva} from "./svgComponents/header.ava";
import {HeaderArrowDown} from "./svgComponents/header.arrowDown";

const Header = () => {
  return (
    <header className={styles.headerVk}>
      <div className={styles.container}>
        <div className={styles.wrapContainer}>
          <div className={cn(styles.flexBetween, styles.flexContainer)}>
            <div className={styles.flexContainer}>
              <a href="" className={styles.vkLogo}>
                <Logo />
              </a>

              <div className={styles.search}>
                <div className={styles.topSearchInput}>
                  <input
                    type="text"
                    className={styles.headerInput}
                    placeholder={"Поиск"}
                  />
                  <div className={styles.searchIcon}>
                    <Search />
                  </div>
                </div>
              </div>

              <div className={styles.notification}>
                <HeaderNotification />
              </div>

              <div className={styles.player}>
                <div className={styles.flexContainer}>
                  <div className={styles.playerPlay}>
                    <HeaderPlayerPlay />
                  </div>
                </div>
              </div>
            </div>
            <div className={cn(styles.flexContainer, styles.box)}>
              <HeaderBurger />
              <HeaderAva />
              <HeaderArrowDown />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
