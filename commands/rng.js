module.exports.run = (bot, message, args, Discord) => {
let numbermax = args.join(" ")
//Set's the X in 0-X
let num = Math.floor(Math.random()*numbermax);
let em = new Discord.RichEmbed()
.setTitle("Random Number Generator")
.setDescription("I guess I'm here to make a number for you. M'lord")
.addField("Your number is:", num)
.setColor("GREEN")

let emf = new Discord.RichEmbed()
.setTitle("Oopsie Woopsi!")
.setDescription("Your ment to put a number for the args silly!")
.setColor("RED")

let emf2 = new Discord.RichEmbed()
.setTitle("Oppsi Woopsi V2!")
.setDescription("Please include a number after !rng!!")
.setColor("RED")

message.channel.send({embed: em})
}


module.exports.help = {
"name": "rng"
}
