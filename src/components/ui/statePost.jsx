import React from "react";

const posts = [
  {
    id: "1",
    link: "url",
    title:
      'Картина маслом "Гусь". Сюжет вымышленный.\n' +
      "\n" +
      'Размер по внешнему краю багета 31/35 см. Размер холста 25/30 см. Краски "Мастер класс", холст на подрамнике.\n' +
      "\n" +
      "Картина написана 25 мая 2022 года.",
    likesCount: 110,
    contentImgLink: "url",
  },

  {
    id: "2",
    link: "url",
    title:"пост 2"
    likesCount: 1,
    contentImgLink: "url",
  },
  {
    id: "3",
    link: "url",
    title:"пост 3"
    likesCount: 0,
    contentImgLink: "url",
  },
];

const StatePost = () => {

  return (
    <div>
      {posts.map(({link, title, id}) => {
        <div id={id} value={link}>{title}</div>
      })}
    </div>
  );
};

export default StatePost;
