import bodyStyles from "../styles/body.module.css";
import { Mybody } from "./svgComponents/sidebar.mybody";
import { News } from "./svgComponents/sidebar.news";
import { Messanger } from "./svgComponents/sidebar.messanger";
import { Calls } from "./svgComponents/sidebar.calls";
import { Friends } from "./svgComponents/sidebar.friends";
import { Commmunities } from "./svgComponents/sidebar.communities";
import { Photos } from "./svgComponents/sidebar.photos";
import { Musics } from "./svgComponents/sidebar.misuc";
import { Videos } from "./svgComponents/header.videos";
import { Clips } from "./svgComponents/sidebar.clips";
import { Games } from "./svgComponents/sidebar.games";
import { Stick } from "./svgComponents/sidebar.stick";
import { Ajs } from "./svgComponents/sidebar.ajs";
import { Mini } from "./svgComponents/sidebar.mini";
import { VkPay } from "./svgComponents/sidebar.vkPay";
import { Work } from "./svgComponents/sidebar.work";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={bodyStyles.menu}>
      <div className={bodyStyles.sideBar}>
        <ul>
          <li>
            <a href="" className={bodyStyles.shelterItem}>
              <Mybody />
              <Link to="/main" className={bodyStyles.leftMenuItem}>
                Моя страница
              </Link>
            </a>
          </li>
          <li>
            <a href="" className={bodyStyles.shelterItem}>
              <News />
              <Link to="/news" className={bodyStyles.leftMenuItem}>
                Новости
              </Link>
            </a>
          </li>
          <li>
            <a href="" className={bodyStyles.shelterItem}>
              <Messanger />
              <Link to="/posts" className={bodyStyles.leftMenuItem}>
                Мессенджер
              </Link>
            </a>
          </li>
          <li>
            <a href="" className={bodyStyles.shelterItem}>
              <Calls />
              <Link to="*" className={bodyStyles.leftMenuItem}>
                Звонки
              </Link>
            </a>
          </li>
          <li>
            <a href="" className={bodyStyles.shelterItem}>
              <Friends />
              <span className={bodyStyles.leftMenuItem}>Друзья</span>
            </a>
          </li>
          <li>
            <a href="" className={bodyStyles.shelterItem}>
              <Commmunities />
              <span className={bodyStyles.leftMenuItem}>Сообщества</span>
            </a>
          </li>
          <li>
            <a href="" className={bodyStyles.shelterItem}>
              <Photos />
              <span className={bodyStyles.leftMenuItem}>Фотографии</span>
            </a>
          </li>
          <li>
            <a href="" className={bodyStyles.shelterItem}>
              <Musics />
              <span className={bodyStyles.leftMenuItem}>Музыка</span>
            </a>
          </li>
          <li>
            <a href="" className={bodyStyles.shelterItem}>
              <Videos />
              <span className={bodyStyles.leftMenuItem}>Видео</span>
            </a>
          </li>
          <li>
            <a href="" className={bodyStyles.shelterItem}>
              <Clips />
              <span className={bodyStyles.leftMenuItem}>Клипы</span>
            </a>
          </li>
          <li>
            <a href="" className={bodyStyles.shelterItem}>
              <Games />
              <span className={bodyStyles.leftMenuItem}>Игры</span>
            </a>
          </li>
          <li>
            <a href="" className={bodyStyles.shelterItem}>
              <Stick />
              <span className={bodyStyles.leftMenuItem}>Стикеры</span>
            </a>
          </li>
          <li>
            <a href="" className={bodyStyles.shelterItem}>
              <Ajs />
              <span className={bodyStyles.leftMenuItem}>Обьявление</span>
            </a>
          </li>
        </ul>
        <div className={bodyStyles.moreDiv} />
        <ul>
          <li>
            <a href="" className={bodyStyles.shelterItem}>
              <Mini />
              <span className={bodyStyles.leftMenuItem}>Мини приложения</span>
            </a>
          </li>
          <li>
            <a href="" className={bodyStyles.shelterItem}>
              <VkPay />
              <span className={bodyStyles.leftMenuItem}>VK Pay</span>
            </a>
          </li>
          <li>
            <a href="" className={bodyStyles.shelterItem}>
              <Work />
              <Link to="/login" className={bodyStyles.leftMenuItem}>
                Выйти
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
