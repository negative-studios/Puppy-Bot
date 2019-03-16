const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
var prefix = "/"
//Required if editing do not change.

bot.commands = new Discord.Collection()

//Command Handler
fs.readdir("./commands/", (err, files) => {
    console.log("Loading commands...");
    if (err) return console.log(`Command loading failed!`);
    files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
        bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
    });
});
//Part 1 End

//When bot starts up
bot.on("ready", () => {
    bot.user.setActivity("Looking for -help!")
    console.log("I'm alive!!")
})

//Command handeler Part 2
bot.on('message', message => {
    let mArray = message.content.split(" ")
    let args = mArray.slice(1)
    let cmd = bot.commands.get(mArray[0].slice(prefix.length))
    if (!message.content.startsWith(prefix)) return;
    if (cmd) {
        cmd.run(bot, message, args, Discord)
        console.log(`${message.author.username} used the ${message.content.split(" ")[0]} command.`)
    }
})


bot.login(process.env.TOKEN)
