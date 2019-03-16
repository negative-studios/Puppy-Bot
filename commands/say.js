module.exports.run = (bot, message, args, Discord) => {
  let jargs = args.join(" ")
  message.channel.send(jargs)
}

module.exports.help = {
"name": "say"
}
