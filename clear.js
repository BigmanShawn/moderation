module.exports = {
    name : 'clear',
    aliases : ['purge'],
    run : async(client, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');
        if(!args[0]) return message.channel.send('Please specify a number of messages to delete ranging from 1 - 1000')
        if(isNaN(args[0])) return message.channel.send('Numbers are only allowed')
        if(parseInt(args[0]) > 1000) return message.channel.send('The max amount of messages that I can delete is 1000')
        await message.channel.bulkDelete(parseInt(args[0]) + 1)
            .catch(err => console.log(err))
        message.channel.send('Deleted ' + args[0]  + " messages.")
    }
}