const config = require("../config.json").ownerid
module.exports.run = (bot, message, args, Discord) => {
if(config.includes(message.author.id)) {
  let me = new Discord.RichEmbed()
  .setTitle("👋 Shutting down.")
  .setDescription("Expected down time ahead!!!")
  .setColor("GREEN")
  message.channel.send({embed: me}).then(bot.destroy())
  } else {
    let errorno = new Discord.RichEmbed()
    .setTitle("Uh-Oh your not a owner!")
    .setDescription("Sorry but this command is owner only.")
    .setColor("RED")
    message.channel.send({embed: errorno})
  }
}

module.exports.help = {
"name": "shutdown"
}
