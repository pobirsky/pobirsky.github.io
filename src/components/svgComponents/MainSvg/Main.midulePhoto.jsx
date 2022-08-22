const styles = {
  img: {
    width: '105px',
    height: '105px',
    marginLeft: '6px'
  }
}

export function FirstPhoto() {
  return (
    <img style={styles.img} src={require("../../../img/photo1.png")} alt="photo1"/>
  );
}

export function SecondPhoto() {
  return (
    <img style={styles.img} src={require("../../../img/photo2.png")} alt="photo2"/>
  )
}

export function ThirdPhoto() {
  return (
    <img style={styles.img} src={require("../../../img/photo3.png")} alt="photo3" />
  )
}

export function FourthPhoto() {
  return (
    <img style={styles.img} src={require("../../../img/photo4.png")} alt="photo4"/>
  )
}
