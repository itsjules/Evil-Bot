const { DMChannel } = require("discord.js");

module.exports={
    name:"clean",
    description:"clear Messages",
    execute(message,args){
        if(message.channel.type==="dm")return message.channel.send("Aint working here, just for Textchannel in servers");
        message.channel.bulkDelete(parseInt(args[0])+1);
        console.log("i did clean");
    }
}