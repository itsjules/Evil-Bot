
module.exports = {
  name: "members",
  description: "members of guild",
  execute(message, args, guild) {
    if(guild==="")return message.channel.send("You first need to select a server to view the members.\nType !server to view servers I am a part of or get !help.");
    let usersArr = [];
    guild.then((value) => {
        value.members.cache.each((member) => {
          let userChunk = [member.user.username, member.presence.status];
          usersArr.push(userChunk.join(" is "));
        });
        message.channel.send("members are: \n" + usersArr.join("\n"));
      })
      .catch((err) => {
        console.error(err);
        
      });
    console.log("i did member");
  },
};
