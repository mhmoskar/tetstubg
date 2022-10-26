const { MessageEmbed } = require("discord.js");
const Command = require("../Structures/Command.js");
function Accuracy() {
    var rating = Math.floor((Math.random() * 50) + 50);
    return rating;
}
function UoA() {
  var rating = Math.floor(Math.random() * 3);
  return rating;
}

if (UoA = 1) 


// 8 lines
// :question:
// :white_check_mark:

module.exports = new Command({
    name: "towers...",
//    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        const embed = new MessageEmbed()
        .setTitle('Hound Predictions')
        .setColor('#000279')
        .addField('Towers', `\n`, false)
        .addField('Accuracy', `${Accuracy()}` + '%')
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
        .setFooter("Buy @ discord.gg/rANjA8hWzC")
        message.author.send({ embeds: [embed]});
      }
})



  