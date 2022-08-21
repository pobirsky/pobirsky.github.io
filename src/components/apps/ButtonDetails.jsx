import bodyStyles from "../../styles/body.module.css";
import React, { useState } from "react";

const ButtonDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeComment = <a href="#">Показать подробную информацию</a>;
  const openComment = <a href="#">Скрыть подробную информацию</a>;

  return (
    <div>
      {isOpen && (
        <div className={bodyStyles.profileInfo}>
          <div className={bodyStyles.profileInfoBlock}>
            <div className={bodyStyles.profileInfoHeaderWrap}>
              <h2 className={bodyStyles.profileInfoHeader}>
                Основная информация
              </h2>
            </div>
            <div className={bodyStyles.profileInfoRow}>
              <h3 className={bodyStyles.labelFl1}>Родной город</h3>
              <div className={bodyStyles.labeled}>
                <a href="#">Иркутск</a>
              </div>
            </div>
          </div>
          <div className={bodyStyles.profileInfoBlock}>
            <div className={bodyStyles.profileInfoHeaderWrap}>
              <h2 className={bodyStyles.profileInfoHeader}>Образование</h2>
            </div>
            <div className={bodyStyles.profileInfoRow}>
              <h3 className={bodyStyles.labelFl1}>Вуз</h3>
              <div className={bodyStyles.labeled}>
                <a href="#">ИГУ</a>
              </div>
            </div>
            <div className={bodyStyles.profileInfoRow}>
              <h3 className={bodyStyles.labelFl1}>Факультет</h3>
              <div className={bodyStyles.labeled}>
                <a href="#">Институт математики и информатики</a>
              </div>
            </div>
          </div>
        </div>
      )}
      <span
        className={bodyStyles.profileMoreInfoLink}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen && openComment}
        {!isOpen && closeComment}
      </span>
    </div>
  );
};

export default ButtonDetails;
