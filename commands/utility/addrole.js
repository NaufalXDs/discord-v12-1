const { Message } = require('discord.js')

module.exports ={
    name : 'addrole',
    run : async(Client, message, args) =>{
        /**
         * @param {Message} message
         */
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You do not have Permission.')
        const target = message.mentions.members.first()
        if(!target) return message.channel.send('No member specified')
        const role = message.mentions.roles.first()
        if(!role) return message.channel.send('No role specified')
        await target.roles.add(role)
        message.channel.send(`${target.user.username} has add role`)
    }
}