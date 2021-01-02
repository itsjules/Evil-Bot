module.exports={
    name:"help",
    description:"list of commands",
    execute(message,args,Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor("#CCEE11")
        .setTitle("How Evil Bot works")
        .setDescription("Hi you loser, I am Evil Bot and here for the chaos. You can annoy me via DM or inside your server. My commands are listed below:")
        .addFields(
            {name: "!ping", value: "My first command I could do, when I was born."},
            {name:"!foff", value: "I will play you a happy song."},
            {name:"!server", value:"Choose a server as my playground.\nIf you already know the server to infiltrate, type !server *serverName*.\nIMPORTANT: I can't do the commands !members or !insult member without you giving me a server!"},
            {name:"!members", value:"Get the list of members in your server and their presence status."},
            {name:"!insult", value:"Now we go to the nitty gritty.\n If you only type !insult, you will get insulted in the channel you are currently in.\n If you type !insult me, i will slide into your DMs and insult you.\n If you type !insult member, I will slide into the DMs of a random member from your chosen server and insult them (it's more fun if you DM me with this command)."},
            {name:"!clean *number* ", value: "Give me the amount of messages i should delete and i will cover the tracks in your server."},
            {name:"!help", value:"If you are lost or have a brain like a sieve, i will tell you what my commands are."}
        )
        .setFooter("Well then, have fun with me dumbass.");


        message.channel.send(newEmbed);
        console.log("i did help");
    }
}