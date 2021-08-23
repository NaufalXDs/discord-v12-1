module.exports ={
    name : "ban",
    run : async(Client, message, args) => {
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('I Do Not Have permission');
        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send('Please specify a member to ban');
        await Member.ban({ reason : args.slice(1).join(" ")})
        message.channel.send(`${Member.user.tag} Was Banned Form The Server`)
    }
}