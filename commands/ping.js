module.exports={
    name:"ping",
    description:"ping command",
    execute(message,args){
        
        message.channel.send("me is the evil bot and i like disaster");
        console.log("i did ping");
    }
}