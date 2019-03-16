module.exports.run = (bot, message, args, Discord) => {
let info = new Discord.RichEmbed()
.setTitle("Developer Information")
.addField("Developer:", "<@513103852409716736>")
.addField("Studio:", "Join [here](https://discord.gg/XV27psT)")
message.channel.send({embed: info})
}

module.exports.help = {
"name": "developerinfo"
}
