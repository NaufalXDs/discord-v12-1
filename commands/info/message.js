const { MessageEmbed } = require('discord.js')

module.exports ={
    name : 'server',
    run : async(Client, message) => {
        const embed = new MessageEmbed()
        .setTitle("SandornsNetwork")
        .setDescription("**ip**: **Play.sandorns.net**")
        .setColor("#FF5000")
        .setThumbnail(`https://i.imgur.com/TzY6lXc.jpg`)
        message.channel.send(embed)
    }
}