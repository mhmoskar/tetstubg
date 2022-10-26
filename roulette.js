const { MessageEmbed } = require("discord.js");
const Command = require("../Structures/Command.js");
function Accuracy() {
    var rating = Math.floor((Math.random() * 50) + 50);
    return rating;
}
function Yellow() {
    const yel = Math.floor(Math.random() * 20) + 3;
    return yel;
}
function Red() {
    const re = ( 100 - Yellow())
    return re;
}
function Purple() {
    const pur = Math.floor((Math.random() * 50) + 50);
    return pur;
}
const Reed = (Red() - Yellow())
const Yeellow = (Yellow())
// console.log(Red())
// console.log(Yellow())
// console.log(Reed)
// console.log(Reed)
// console.log(Yeellow)

module.exports = new Command({
    name: "roulette...",
//    permission: "SEND_MESSAGES",
    async run(message, args, client) {
    const embed = new MessageEmbed()
        .setTitle('Hound Predictions')
        .setColor('#000279')
        .addField('Red Prediction', `${Red() - Yellow()}` + '%', true)
        .addField('Red Prediction', `${Red()}` + '%', true)
        .addField('Purple Prediction', `${Purple()}` + '%', true)
        .addField('Yellow Prediction', `${Yellow()}` + '%', true)
        .addField('Accuracy', `${Accuracy()}` + '%', false)
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        .setFooter("Buy @ discord.gg/rANjA8hWzC")
    message.author.send({ embeds: [embed]})
    }
})