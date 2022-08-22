import bodyStyles from "../../../styles/body.module.css";
import Avatar from "../../svgComponents/MainSvg/Main.avatar";
import cn from "classnames";
import Stats from "../../svgComponents/MainSvg/Main.stats";
import Question from "../../svgComponents/MainSvg/Main.question";
import Memories from "../../svgComponents/MainSvg/Main.memories";
import Money from "../../svgComponents/MainSvg/Main.money";
import Ball from "../../svgComponents/MainSvg/Main.ball";
import Calendar from "../../svgComponents/MainSvg/Main.calendar";
import Win from "../../svgComponents/MainSvg/Main.win";
import {Mihail, Nikita, Oleg, Sasha, Serega, Taya} from "../../svgComponents/MainSvg/Main.avaFriends";
import ButtonDetails from "../ButtonDetails";
import {FirstPhoto, FourthPhoto, SecondPhoto, ThirdPhoto} from "../../svgComponents/MainSvg/Main.midulePhoto";
import Danil from "../../svgComponents/MainSvg/Main.danil";
import MainImgVin from "../../svgComponents/MainSvg/Main.imgVin";
import MainPostAlbom from "../../svgComponents/MainSvg/Main.postAlbom";
import MainAudio from "../../svgComponents/MainSvg/Main.audio";
import LikeAction from "../../svgComponents/Likes";
import Share from "../../svgComponents/MainSvg/Main.shaire";
import LikeIcon from "../../svgComponents/MainSvg/Main.like";
import Tabs from "../../ui/Tabs";
import {items} from '../../ui/helperTabs.js'

const Main = () => {
  return (
    <div className={bodyStyles.centeer}>
      <div className={bodyStyles.center1}>
        <div className={bodyStyles.narrowColumnWrap}>
          <div className={bodyStyles.containerItemCenter}>
            <div className={bodyStyles.mainCenterItem}>
              <Avatar/>
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
                      <Stats/>
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
                      <Question/>
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
                      <Memories/>
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
                      <Money/>
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
              <Ball/>
              <Calendar/>
              <Win/>
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
              <Nikita/>
              <a href="#" className={bodyStyles.hrefLink}>Никита</a>
            </div>
            <div className={bodyStyles.friend}>
              <Oleg/>
              <a href="#" className={bodyStyles.hrefLink}>Олег</a>
            </div>
            <div className={bodyStyles.friend}>
              <Mihail/>
              <a href="#" className={bodyStyles.hrefLink}>Михаил</a>
            </div>
            <div className={bodyStyles.friend}>
              <Sasha/>
              <a href="#" className={bodyStyles.hrefLink}>Саша</a>
            </div>
            <div className={bodyStyles.friend}>
              <Taya/>
              <a href="#" className={bodyStyles.hrefLink}>Тая</a>
            </div>
            <div className={bodyStyles.friend}>
              <Serega/>
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
                <h3 className={bodyStyles.labeled}></h3>
                <ButtonDetails/>

              </div>
            </div>
            <div className={bodyStyles.countModules}>
              <a href="#" className={bodyStyles.pageCounter}>
                <div className={bodyStyles.numberItem}>484</div>
                <div className={bodyStyles.signatureNumber}>друга</div>
              </a>
              <a href="#" className={bodyStyles.pageCounter}>
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
              <FirstPhoto/>
              <SecondPhoto/>
              <ThirdPhoto/>
              <FourthPhoto/>
            </div>
          </div>

        </div>

        <div className={bodyStyles.pageBlock}>
          <Tabs items={items}/>
        </div>


        <div className={cn(bodyStyles.mainPost, bodyStyles.pageBlock)}>
          <div className={bodyStyles.PostHeader}>
            <div className={bodyStyles.headerImage}>
              <div className={bodyStyles.postImageStories}>
                <Danil/>
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
                      <MainImgVin/>
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
                <MainPostAlbom/>
                <div className={bodyStyles.audioRowContainer}>
                  <MainAudio/>
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
                    <LikeAction/>
                    <div className={bodyStyles.share}>
                      <Share/>
                    </div>
                  </div>
                  <div className={bodyStyles.likesCountContainer}>
                    <LikeIcon/>
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
  )
}


export default Main;
