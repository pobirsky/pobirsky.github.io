const friends = [
  {
    firstName: "from API v2",
    lastName: "from API v2",
    email: "from API v2",
    avatarUrl:
      "https://sun9-59.userapi.com/s/v1/if2/Qdnp0q9qBQx4AIcgxf-5BqhkuV-GhnMdf7KOmzGncTc21zGRGYi7O-ZZyej_M5Lly2rejLGVjWNQQygen533nQG7.jpg?size=200x200&quality=96&crop=0,119,720,720&ava=1",
  },
  {
    firstName: "Danil2",
    lastName: "Dani2",
    email: "email2",
    avatarUrl:
      "https://sun9-59.userapi.com/s/v1/if2/Qdnp0q9qBQx4AIcgxf-5BqhkuV-GhnMdf7KOmzGncTc21zGRGYi7O-ZZyej_M5Lly2rejLGVjWNQQygen533nQG7.jpg?size=200x200&quality=96&crop=0,119,720,720&ava=1",
  },
  {
    firstName: "Danil3",
    lastName: "Dani3",
    email: "email3",
    avatarUrl:
      "https://sun9-59.userapi.com/s/v1/if2/Qdnp0q9qBQx4AIcgxf-5BqhkuV-GhnMdf7KOmzGncTc21zGRGYi7O-ZZyej_M5Lly2rejLGVjWNQQygen533nQG7.jpg?size=200x200&quality=96&crop=0,119,720,720&ava=1",
  },
  {
    firstName: "Danil4",
    lastName: "Dani4",
    email: "email4",
    avatarUrl:
      "https://sun9-59.userapi.com/s/v1/if2/Qdnp0q9qBQx4AIcgxf-5BqhkuV-GhnMdf7KOmzGncTc21zGRGYi7O-ZZyej_M5Lly2rejLGVjWNQQygen533nQG7.jpg?size=200x200&quality=96&crop=0,119,720,720&ava=1",
  },
  {
    firstName: "Danil5",
    lastName: "Danil5",
    email: "email5",
    avatarUrl:
      "https://sun9-59.userapi.com/s/v1/if2/Qdnp0q9qBQx4AIcgxf-5BqhkuV-GhnMdf7KOmzGncTc21zGRGYi7O-ZZyej_M5Lly2rejLGVjWNQQygen533nQG7.jpg?size=200x200&quality=96&crop=0,119,720,720&ava=1",
  },
  {
    firstName: "Danil6",
    lastName: "Danil6",
    email: "email6",
    avatarUrl:
      "https://sun9-59.userapi.com/s/v1/if2/Qdnp0q9qBQx4AIcgxf-5BqhkuV-GhnMdf7KOmzGncTc21zGRGYi7O-ZZyej_M5Lly2rejLGVjWNQQygen533nQG7.jpg?size=200x200&quality=96&crop=0,119,720,720&ava=1",
  },
];

const onlineFriends = [
  {
    firstName: "another from API v1",
    lastName: "another from API v1",
    email: "another from API v1",
    avatarUrl: "https://sun9-9.userapi.com/impg/JcRINl6L_LOzCG4jkS8M9yl9Gb2zmTHqYgep_w/-D9IBlVz5VY.jpg?size=956x960&quality=95&sign=7aa75811cb07e8e3fca9edea803d7363&type=album",
  },
  {
    firstName: "another from API v2",
    lastName: "another from API v2",
    email: "another from API v2",
    avatarUrl: "https://sun9-9.userapi.com/impg/JcRINl6L_LOzCG4jkS8M9yl9Gb2zmTHqYgep_w/-D9IBlVz5VY.jpg?size=956x960&quality=95&sign=7aa75811cb07e8e3fca9edea803d7363&type=album",
  },
  {
    firstName: "another from API v3",
    lastName: "another from API v3",
    email: "another from API v3",
    avatarUrl: "https://sun9-9.userapi.com/impg/JcRINl6L_LOzCG4jkS8M9yl9Gb2zmTHqYgep_w/-D9IBlVz5VY.jpg?size=956x960&quality=95&sign=7aa75811cb07e8e3fca9edea803d7363&type=album",
  },
  {
    firstName: "another from API v4",
    lastName: "another from API v4",
    email: "another from API v4",
    avatarUrl: "https://sun9-9.userapi.com/impg/JcRINl6L_LOzCG4jkS8M9yl9Gb2zmTHqYgep_w/-D9IBlVz5VY.jpg?size=956x960&quality=95&sign=7aa75811cb07e8e3fca9edea803d7363&type=album",
  },
  {
    firstName: "another from API v4",
    lastName: "another from API v4",
    email: "another from API v4",
    avatarUrl: "https://sun9-9.userapi.com/impg/JcRINl6L_LOzCG4jkS8M9yl9Gb2zmTHqYgep_w/-D9IBlVz5VY.jpg?size=956x960&quality=95&sign=7aa75811cb07e8e3fca9edea803d7363&type=album",
  },
  {
    firstName: "another from API v5",
    lastName: "another from API v5",
    email: "another from API v5",
    avatarUrl: "https://sun9-9.userapi.com/impg/JcRINl6L_LOzCG4jkS8M9yl9Gb2zmTHqYgep_w/-D9IBlVz5VY.jpg?size=956x960&quality=95&sign=7aa75811cb07e8e3fca9edea803d7363&type=album",
  },
  {
    firstName: "another from API v6",
    lastName: "another from API v6",
    email: "another from API v6",
    avatarUrl: "https://sun9-9.userapi.com/impg/JcRINl6L_LOzCG4jkS8M9yl9Gb2zmTHqYgep_w/-D9IBlVz5VY.jpg?size=956x960&quality=95&sign=7aa75811cb07e8e3fca9edea803d7363&type=album",
  },
];

module.exports = (app) => {
  app.get("/api2/users", (req, res) => {
    console.log("API called!", req.query, req.params);
    setTimeout(() => {
      if (req.query.another === "true") {
        return res.json(onlineFriends);
      }
      return res.json(friends);
    }, 1000);
  });
};
