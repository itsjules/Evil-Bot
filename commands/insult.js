const fetch = require("node-fetch");

module.exports = {
  name: "insult",
  description: "insult author",
  execute(message, args, guild) {
    // if(!args[0])args[0]="en";
    fetch(`https://evilinsult.com/generate_insult.php?lang=en&type=json`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(`Response is: ${response.status}, ${response.statusText}`);
        return response.json();
      })
      .then((data) => {
        console.log("data: ", data);
        if (args[0] === "me") {
          message.author.send(data.insult);
        } else if (args[0] === "member") {
          if(guild==="")return message.channel.send("You first need to select a server to insult a member.\n Type !server to view servers I am a part of or get !help.");
          guild.then((value) => {
            let a = value.members.cache.filter((member) => !member.user.bot);
            let person = a.random(1); 
            console.log("picked one: ", person[0].user.username);
            message.channel.send(`I insulted ${person[0].user.username} with: "${data.insult}"`);
            person[0].user.send(`Hi ${person[0].user.username}, I have a message for you:`)
            person[0].user.send(data.insult);
            person[0].user.send("If you want to know what I can do and how to get your revenge, type !help.");
          })
          .catch((err) => {
            console.error(err);
          });
        } else {
          message.channel.send(data.insult);
        }
      })
      .catch((err) => {
        console.error(err);
      });

    console.log("i did insult");
  },
};
