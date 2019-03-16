module.exports.run = (bot, message, args, Discord) => {
  let jargs = args.join(" ")
  message.channel.send(jargs).then(message.delete(1)).then(console.log("Message deleted."))
}

module.exports.help = {
"name": "say"
}
