const { MessageEmbed, Message, client } = require("discord.js");
const Command = require("../Structures/Command.js");
function UoA() {
    var rand = ['Under','Above'];
    return rand[Math.floor(Math.random()*rand.length)];
}
function Crash() {
    var rating = Math.floor((Math.random() * 25) + 10) /10;
    return rating;
}
function Accuracy() {
    var rating = Math.floor((Math.random() * 50) + 50);
    return rating;
}


module.exports = new Command({
    name: "crash",
//    permission: "SEND_MESSAGES",
    async run(message, args, client) {
    const embed = new MessageEmbed()
        .setTitle("Hound Predictions")
        .setColor('000279')
        .addField('Multiplier',`${UoA()}` + ` ${Crash()}`, )
        .addField('Accuracy', `${Accuracy()}` + '%')
        .setThumbnail('https://cdn.discordapp.com/avatars/1010163026126712892/4c1d9ee4451c6c29cff1b91a6b1ad759.webp')
        .setFooter("Free @ discord.gg/rANjA8hWzC")
    message.channel.send({ embeds: [embed]}, '<#1010171401572974613>')
//    message.channel.id('1010170553652486234').send(message.author.username)

    }
})



