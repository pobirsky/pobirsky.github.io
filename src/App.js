import "./App.css";
import cn from "classnames";
import "normalize.css";
import styles from "../src/style/header.module.css";
import bodyStyles from "../src/style/body.module.css";
import { Logo } from "./components/header.vklogo";
import { Search } from "./components/searchIcon";
import { HeaderNotification } from "./components/header.notification";
import { HeaderPlayerPlay } from "./components/header.playerPlay";
import { HeaderBurger } from "./components/header.burger";
import { HeaderAva } from "./components/header.ava";
import { HeaderArrowDown } from "./components/header.arrowDown";
import { Mybody } from "./components/sidebar.mybody";
import { News } from "./components/sidebar.news";
import { Messanger } from "./components/sidebar.messanger";
import { Ajs } from "./components/sidebar.ajs";
import { Stick } from "./components/sidebar.stick";
import { Games } from "./components/sidebar.games";
import { Clips } from "./components/sidebar.clips";
import { Commmunities } from "./components/sidebar.communities";
import { Photos } from "./components/sidebar.photos";
import { Calls } from "./components/sidebar.calls";
import { Friends } from "./components/sidebar.friends";
import { Videos } from "./components/header.videos";
import { Musics } from "./components/sidebar.misuc";
import { Mini } from "./components/sidebar.mini";
import { Work } from "./components/sidebar.work";
import { VkPay } from "./components/sidebar.vkPay";
import { Avavatar } from "./components/main.avatar";
import { Stats } from "./components/main.stats";
import { Question } from "./components/main.question";
import { Memories } from "./components/main.memories";
import { Money } from "./components/main.money";
import { Ball } from "./components/main.ball";
import { Calendar } from "./components/main.calendar";
import { Win } from "./components/main.win";
import {
  Mihail,
  Nikita,
  Oleg,
  Sasha,
  Serega,
  Taya,
} from "./components/main.avaFriends";
import {
  FirstPhoto,
  FourthPhoto,
  SecondPhoto,
  ThirdPhoto,
} from "./components/main.midulePhoto";
import { Danil } from "./components/main.danil";
import { LikeIcon } from "./components/main.like";
import { LikeIcon2 } from "./components/main.like2";
import { Share } from "./components/main.shaire";
import { MainAudio } from "./components/main.audio";
import { MainImgVin } from "./components/main.imgVin";
import { MainPostAlbom } from "./components/main.postAlbom";

/* eslint-disable */
function App() {
  return (
    <div className="App">
      <div className={styles.main}>
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

        <div className={cn(bodyStyles.bodyVk, bodyStyles.container)}>
          <div className={bodyStyles.sectionContainer}>
            <div className={bodyStyles.menu}>
              <div className={bodyStyles.sideBar}>
                <ul>
                  <li>
                    <a href="" className={bodyStyles.shelterItem}>
                      <Mybody />
                      <span className={bodyStyles.leftMenuItem}>
                        Моя страница
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className={bodyStyles.shelterItem}>
                      <News />
                      <span className={bodyStyles.leftMenuItem}>Новости</span>
                    </a>
                  </li>
                  <li>
                    <a href="" className={bodyStyles.shelterItem}>
                      <Messanger />
                      <span className={bodyStyles.leftMenuItem}>
                        Мессенджер
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className={bodyStyles.shelterItem}>
                      <Calls />
                      <span className={bodyStyles.leftMenuItem}>Звонки</span>
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
                      <span className={bodyStyles.leftMenuItem}>
                        Сообщщества
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className={bodyStyles.shelterItem}>
                      <Photos />
                      <span className={bodyStyles.leftMenuItem}>
                        Фотографии
                      </span>
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
                      <span className={bodyStyles.leftMenuItem}>
                        Обьявления
                      </span>
                    </a>
                  </li>
                </ul>
                <div className={bodyStyles.moreDiv} />
                <ul>
                  <li>
                    <a href="" className={bodyStyles.shelterItem}>
                      <Mini />
                      <span className={bodyStyles.leftMenuItem}>
                        Мини приложения
                      </span>
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
                      <span className={bodyStyles.leftMenuItem}>Работа</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={bodyStyles.centeer}>
              <div className={bodyStyles.center1}>
                <div className={bodyStyles.narrowColumnWrap}>
                  <div className={bodyStyles.containerItemCenter}>
                    <div className={bodyStyles.mainCenterItem}>
                      <Avavatar />
                    </div>
                    <div className={bodyStyles.mainCenterItem}>
                      <button
                        type="button"
                        className={bodyStyles.buttonCenterItem}
                      >
                        <span
                          className={cn(
                            bodyStyles.FlatbuttonIn,
                            bodyStyles.leftMenuItem2
                          )}
                        >
                          Редактировать
                        </span>
                      </button>
                    </div>

                    <div
                      className={cn(
                        bodyStyles.mainCenterItem,
                        bodyStyles.lastItemMenu
                      )}
                    >
                      <div>
                        <ul>
                          <li>
                            <a href="" className={bodyStyles.shelterItem}>
                              <Stats />
                              <span
                                className={cn(
                                  bodyStyles.leftMenuItem,
                                  bodyStyles.leftMenuItem2
                                )}
                              >
                                Статистика страницы
                              </span>
                            </a>
                          </li>

                          <li>
                            <a href="" className={bodyStyles.shelterItem}>
                              <Question />
                              <span
                                className={cn(
                                  bodyStyles.leftMenuItem,
                                  bodyStyles.leftMenuItem2
                                )}
                              >
                                Вопросы
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="" className="shelter-item">
                              <Memories />
                              <span
                                className={cn(
                                  bodyStyles.leftMenuItem,
                                  bodyStyles.leftMenuItem2
                                )}
                              >
                                Воспоминания
                              </span>
                            </a>
                          </li>

                          <li>
                            <a
                              href=""
                              className={cn(
                                bodyStyles.shelterItem,
                                bodyStyles.end
                              )}
                            >
                              <Money />
                              <span
                                className={cn(
                                  bodyStyles.leftMenuItem,
                                  bodyStyles.leftMenuItem2
                                )}
                              >
                                Денежные переводы
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div id={bodyStyles.profileGift}>
                  <a href="#" className={bodyStyles.headerGift}>
                    <div className={bodyStyles.headerTop}>
                      <span>Подарки 14</span>
                    </div>
                  </a>
                  <div className={bodyStyles.moduleBody}>
                    <a href="#">
                      <Ball />
                      <Calendar />
                      <Win />
                    </a>
                  </div>
                </div>

                <div className={bodyStyles.cardName}>
                  <div className={bodyStyles.friendsHeader}>
                    <a href="#" className={bodyStyles.linkFriendsLeft}>
                      Друзья (+1)
                    </a>
                    <a href="№" className={bodyStyles.linkFriendsRight}>
                      обновления
                    </a>
                  </div>
                  <div className={bodyStyles.friends}>
                    <div className={bodyStyles.friend}>
                      <Nikita />
                      <a href="#" className={bodyStyles.hrefLink}>Никита</a>
                    </div>
                    <div className={bodyStyles.friend}>
                      <Oleg />
                      <a href="#" className={bodyStyles.hrefLink}>Олег</a>
                    </div>
                    <div className={bodyStyles.friend}>
                      <Mihail />
                      <a href="#" className={bodyStyles.hrefLink}>Михаил</a>
                    </div>
                    <div className={bodyStyles.friend}>
                      <Sasha />
                      <a href="#" className={bodyStyles.hrefLink}>Саша</a>
                    </div>
                    <div className={bodyStyles.friend}>
                      <Taya />
                      <a href="#" className={bodyStyles.hrefLink}>Тая</a>
                    </div>
                    <div className={bodyStyles.friend}>
                      <Serega />
                      <a href="#" className={bodyStyles.hrefLink}>Серега</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={bodyStyles.containerItemRight}>
                <div className={bodyStyles.pageBlock}>
                  <div className={bodyStyles.pageInfoWrap}>
                    <div
                      className={cn(bodyStyles.Profile, bodyStyles.cardMain)}
                    >
                      <div>
                        <div className={bodyStyles.profileOnline}>
                          <div>online</div>
                        </div>
                      </div>
                      <h1 className={bodyStyles.pageName}>Данил Побирский</h1>
                      <div className={bodyStyles.pageCurrentInfo}>
                        <span className={bodyStyles.currentInfo}>
                          установить статус
                        </span>
                      </div>
                    </div>

                    <div className={bodyStyles.profileInfo}>
                      <div className={bodyStyles.profileInfoRow}>
                        <h3 className={bodyStyles.labelFl1}>День рождения:</h3>
                        <div className={bodyStyles.labeled}>
                          <a href="#">03 ноября</a>
                        </div>
                      </div>
                      <div className={bodyStyles.profileInfoRow}>
                        <h3 className={bodyStyles.labelFl1}>Образование</h3>
                        <div className={bodyStyles.labeled}>
                          <a href="#">ИГУ</a>
                        </div>
                      </div>
                      <div className={bodyStyles.profileInfoMore}>
                        <h3 className={bodyStyles.labelFl1}></h3>
                        <div className={bodyStyles.labeled}>
                          <a href="#">Показать подробную информацию</a>
                        </div>
                      </div>
                    </div>
                    <div className={bodyStyles.countModules}>
                      <a href="#" className={bodyStyles.pageCounter}>
                        <div className={bodyStyles.numberItem}>484</div>
                        <div className={bodyStyles.signatureNumber}>друга</div>
                      </a>
                      <a href="#" class={bodyStyles.pageCounter}>
                        <div className={bodyStyles.numberItem}>271</div>
                        <div className={bodyStyles.signatureNumber}>
                          подписчик
                        </div>
                      </a>
                      <a href="#" className={bodyStyles.pageCounter}>
                        <div className={bodyStyles.numberItem}>35</div>
                        <div className={bodyStyles.signatureNumber}>
                          фотографий
                        </div>
                      </a>
                      <a href="#" className={bodyStyles.pageCounter}>
                        <div className={bodyStyles.numberItem}>113</div>
                        <div className={bodyStyles.signatureNumber}>
                          отметок
                        </div>
                      </a>
                      <a href="#" className={bodyStyles.pageCounter}>
                        <div className={bodyStyles.numberItem}>23</div>
                        <div className={bodyStyles.signatureNumber}>
                          видеозаписи
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className={bodyStyles.pageBlock}>
                  <div className={bodyStyles.photosModule}>
                    <a href="#" className={bodyStyles.headerRightLink}>
                      <div>
                        <span>Показать на карте</span>
                      </div>
                    </a>
                    <a href="#" className="">
                      <div className={bodyStyles.headerTop}>
                        <span>Мои фотографии 35</span>
                      </div>
                    </a>
                    <div className={bodyStyles.photoModuleLvl1}>
                      <FirstPhoto />
                      <SecondPhoto />
                      <ThirdPhoto />
                      <FourthPhoto />
                    </div>
                  </div>
                </div>

                <div className={cn(bodyStyles.mainPost, bodyStyles.pageBlock)}>
                  <div className={bodyStyles.PostHeader}>
                    <div className={bodyStyles.headerImage}>
                      <div className={bodyStyles.postImageStories}>
                        <Danil />
                      </div>
                    </div>
                    <div className={bodyStyles.PostHeaderInfo}>
                      <div className={bodyStyles.postAutor}>
                        Данил Побирский
                      </div>
                      <div className={bodyStyles.postDate}>1 ноября 2020</div>
                    </div>
                  </div>

                  <div className={bodyStyles.postContent}>
                    <div className={bodyStyles.PostPost}>
                      <div className={bodyStyles.copyQuote}>
                        <div className={bodyStyles.flex}>
                          <div className={bodyStyles.headerImage}>
                            <div className={bodyStyles.postImageStories}>
                              <MainImgVin />
                            </div>
                          </div>
                          <div className={bodyStyles.PostHeaderInfo}>
                            <div className={bodyStyles.postAutor}>
                              Что за семпл братан
                            </div>
                            <div className={bodyStyles.postDate}>
                              28 окт 2020 в 22:39
                            </div>
                          </div>
                        </div>
                        <div className={bodyStyles.postMainPl}>
                          Эксклюзивный стафф от министра мегамиксов ЧЗСБ, Макса
                          Invadis — чилловый инструментальный хип-хап с обоих
                          полушарий этой пыльной планеты. Употреблять с тёплой
                          жидкостью и творческим фокусом
                        </div>

                        <div className={bodyStyles.tag}>
                          #dolcevita@whatsthatsamplebro
                        </div>
                        <MainPostAlbom />
                        <div className={bodyStyles.audioRowContainer}>
                          <MainAudio />
                          <div className={bodyStyles.audioRowInner}>
                            <div className={bodyStyles.track}>
                              <div className={bodyStyles.audioName}>
                                Invadis -
                              </div>
                              <div className={bodyStyles.audioAlbom}>
                                Instrumental HH Mix for ЧЗСБ
                              </div>
                            </div>
                            <div className={bodyStyles.audioTimer}>1:36</div>
                          </div>
                        </div>
                        <div className={bodyStyles.likesContainer}>
                          <div className={bodyStyles.likesMain}>
                            <div className={bodyStyles.like}>
                              <LikeIcon2 />
                            </div>
                            <div className={bodyStyles.share}>
                              <Share />
                            </div>
                          </div>
                          <div className={bodyStyles.likesCountContainer}>
                            <LikeIcon />
                            <div className={bodyStyles.likeCount}>
                              100
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
