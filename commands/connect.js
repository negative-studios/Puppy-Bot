module.exports.run = (bot, message, args, Discord) => {
  if(message.member.voiceChannel) {
    message.member.voiceChannel.join().then(connection => {
      message.channel.send("I'm connected!")
    });
  } else {
  message.channel.send("Your not in a voice channel?")
  }
} 

module.exports.help = {
"name": "connect"
}
