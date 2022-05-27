import bodyStyles from "../style/body.module.css";

export function MainImgVin() {
  return (
    <img className={bodyStyles.imgVinyl} src={require("../img/sample.png")} alt="sample" />
  );
}
