const { MessageEmbed, Permissions } = require("discord.js");
const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "help",
    permission: "VIEW_CHANNEL",
    async run(message, args, client) {
    const embed = new MessageEmbed()
        .setTitle('Hound Predictions')
        .setColor('#000279')
//      .addField('.claim <code>', '```Claims the code and gives you a subscription (if the code is valid).```',false)
        .addField('.crash', '```Predicts the outcome of the next game of crash.```')
//      .addField('.help', '```Shows available commands.```')
        .addField('.mines <amount of mines>', '```Predicts the outcome of the next game of mines.```')
//      .addField('.roulette', '```Predicts the outcome of the next game of roulette.```')
//      .addField('.site <name>', '```Sets the predictor for an exact site (bloxflip or rblxwild).```')
//      .addField('.status', '```Shows the status of your active subscription.```')
//      .addField('.towers', '```Predicts the outcome of the next game of towers.```')
.setThumbnail('https://cdn.discordapp.com/avatars/1010163026126712892/4c1d9ee4451c6c29cff1b91a6b1ad759.webp')
        .setFooter("Free @ discord.gg/rANjA8hWzC")
        message.channel.send({ embeds: [embed]})
    }
})