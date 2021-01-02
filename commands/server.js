module.exports = {
  name: "server",
  description: "search and select guilds",
  execute(message, args, bot,guild) {
    let guildsArr = [];
    bot.guilds.cache.each((guild) => {
      console.log(guild.name);
      guildsArr.push(guild.name);
    });
    if (!args[0]) {
      message.channel.send(
        "I am part of those servers:\n" + guildsArr.join(", ")
      );
      if (guild){
        guild.then(value => {
          let guildName =value.name;
          return guildName;
        }).then(guildName =>  {message.channel.send(`Your current guild is: ${guildName}`);
      message.reply("Should I change my playground? Type !server *serverName*")}).catch(err => console.error(err));
       
      }
      else if(!guild){
      message.reply(
        "What server do you wanna terrorize? Type !server *serverName*"
      );
      }
    }
    console.log("i did server");
  },
  chooseGuild(message, args, bot) {
    console.log(bot.guilds.cache
      .some((guild) => guild.name === args[0]))
    if ( !bot.guilds.cache
      .some((guild) => guild.name === args[0])) {
        return message.channel.send("That is not the correct name, you dumbfuck.");
      }
    let guildCur = bot.guilds.cache
      .filter((guild) => guild.name === args[0])
      .array();
    message.channel.send("Let's go and terrorize this server: " + guildCur);
    console.log("i picked server");
    return guildCur[0];
  },
};
