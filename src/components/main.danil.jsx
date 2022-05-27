import bodyStyles from "../style/body.module.css";

const style = {
  svg: {
    borderRadius: "100%",
  },
};

export function Danil() {
  return (
    <img
      style={style.svg}
      src="https://sun9-59.userapi.com/s/v1/if2/w9Vqn-tvJDaWzNK5kex5Riw_E2C9s-QhJJbVS2bd0aArieUcPm7J-JuXmzj4qbWJQo8vMECvM1WDtcDygZ25T9O2.jpg?size=50x50&amp;quality=96&amp;crop=0,119,720,720&amp;ava=1"
      data-post-id="8075319_3018"
      data-post-click-type="post_owner_img"
      className={bodyStyles.postImageStories}
      alt="Данил Побирский"
    />
  );
}
