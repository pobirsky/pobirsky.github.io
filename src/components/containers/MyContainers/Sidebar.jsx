import bodyStyles from "../../../styles/body.module.css";
import Mybody from "../../svgComponents/SidebarSvg/Sidebar.mybody";
import News from "../../svgComponents/SidebarSvg/Sidebar.news";
import Messanger from "../../svgComponents/SidebarSvg/Sidebar.messanger";
import Calls from "../../svgComponents/SidebarSvg/Sidebar.calls";
import Friends from "../../svgComponents/SidebarSvg/Sidebar.friends";
import Commmunities from "../../svgComponents/SidebarSvg/Sidebar.communities";
import Photos from "../../svgComponents/SidebarSvg/Sidebar.photos";
import Musics from "../../svgComponents/SidebarSvg/Sidebar.music";
import Videos from "../../svgComponents/HeaderSvg/Header.videos";
import Clips from "../../svgComponents/SidebarSvg/Sidebar.clips";
import Games from "../../svgComponents/SidebarSvg/Sidebar.games";
import Stick from "../../svgComponents/SidebarSvg/Sidebar.stick";
import Ajs from "../../svgComponents/SidebarSvg/Sidebar.ajs";
import Mini from "../../svgComponents/SidebarSvg/Sidebar.mini";
import VkPay from "../../svgComponents/SidebarSvg/Sidebar.vkPay";
import Work from "../../svgComponents/SidebarSvg/Sidebar.work";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={bodyStyles.menu}>
      <div className={bodyStyles.sideBar}>
        <ul>
          <li>
            <a href="/#" className={bodyStyles.shelterItem}>
              <Mybody />
              <Link to="/main" className={bodyStyles.leftMenuItem}>
                Моя страница
              </Link>
            </a>
          </li>
          <li>
            <a href="/#" className={bodyStyles.shelterItem}>
              <News />
              <Link to="/news" className={bodyStyles.leftMenuItem}>
                Новости
              </Link>
            </a>
          </li>
          <li>
            <a href="/#" className={bodyStyles.shelterItem}>
              <Messanger />
              <Link to="/posts" className={bodyStyles.leftMenuItem}>
                Мессенджер
              </Link>
            </a>
          </li>
          <li>
            <a href="/#" className={bodyStyles.shelterItem}>
              <Calls />
              <span className={bodyStyles.leftMenuItem}>Музыка</span>
            </a>
          </li>
          <li>
            <a href="/#" className={bodyStyles.shelterItem}>
              <Friends />
              <Link to="/reduxToolkit" className={bodyStyles.leftMenuItem}>
                Друзья
              </Link>
            </a>
          </li>
          <li>
            <a href="/#" className={bodyStyles.shelterItem}>
              <Commmunities />
              <span className={bodyStyles.leftMenuItem}>Сообщества</span>
            </a>
          </li>
          <li>
            <a href="/#" className={bodyStyles.shelterItem}>
              <Photos />
              <span className={bodyStyles.leftMenuItem}>Фотографии</span>
            </a>
          </li>
          <li>
            <a href="/#" className={bodyStyles.shelterItem}>
              <Musics />
              <span className={bodyStyles.leftMenuItem}>Музыка</span>
            </a>
          </li>
          <li>
            <a href="/#" className={bodyStyles.shelterItem}>
              <Videos />
              <span className={bodyStyles.leftMenuItem}>Видео</span>
            </a>
          </li>
          <li>
            <a href="/#" className={bodyStyles.shelterItem}>
              <Clips />
              <span className={bodyStyles.leftMenuItem}>Клипы</span>
            </a>
          </li>
          <li>
            <a href="/#" className={bodyStyles.shelterItem}>
              <Games />
              <span className={bodyStyles.leftMenuItem}>Игры</span>
            </a>
          </li>
          <li>
            <a href="/#" className={bodyStyles.shelterItem}>
              <Stick />
              <span className={bodyStyles.leftMenuItem}>Стикеры</span>
            </a>
          </li>
          <li>
            <a href="/#" className={bodyStyles.shelterItem}>
              <Ajs />
              <span className={bodyStyles.leftMenuItem}>Обьявление</span>
            </a>
          </li>
        </ul>
        <div className={bodyStyles.moreDiv} />
        <ul>
          <li>
            <a href="/#" className={bodyStyles.shelterItem}>
              <Mini />
              <span className={bodyStyles.leftMenuItem}>Мини приложения</span>
            </a>
          </li>
          <li>
            <a href="/#" className={bodyStyles.shelterItem}>
              <VkPay />
              <span className={bodyStyles.leftMenuItem}>VK Pay</span>
            </a>
          </li>
          <li>
            <a href="/#" className={bodyStyles.shelterItem}>
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
