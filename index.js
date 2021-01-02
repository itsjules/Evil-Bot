require("dotenv").config();
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();

const token = process.env.EVIL_BOT_TOKEN;

const prefix = "!";

bot.commands = new Discord.Collection();
let guildId = "";
let guild = "";

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

bot.on("ready", () => {
  console.log("Evil Bot is online");
});

bot.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("hi")) {
    message.channel.send("why so friendly?");
  }
  if (message.content.includes("hurensohn")) {
    message.channel.send("selber hurensohn");
  }
  if (
    message.content.includes("fuck you") ||
    message.content.includes("fuck u") ||
    message.content.includes("fuck you 2") ||
    message.content.includes("fuck you too")
  ) {
    message.channel.send("well then have a good fuckin day, you fucker");
  }

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    bot.commands.get("ping").execute(message, args);
  } else if (command === "foff") {
    bot.commands.get("foff").execute(message, args);
  } else if (command === "clean") {
    bot.commands.get("clean").execute(message, args);
  } else if (command === "insult") {
    bot.commands.get("insult").execute(message, args, guild);
  } else if (command === "server") {
    bot.commands.get("server").execute(message, args, bot,guild);
    if (args[0]) {
      guildId = bot.commands.get("server").chooseGuild(message, args, bot).id;
      guild = bot.guilds.fetch(guildId).catch(err => console.error(err));
    }
    console.log("in index:", guildId);
  } else if (command === "members") {
    bot.commands.get("members").execute(message, args, guild);
  } else if (command === "help") {
    bot.commands.get("help").execute(message, args, Discord);
  } else {
    message.channel.send("There is not such command, type !help for more");
  }
});

bot.login(token);
