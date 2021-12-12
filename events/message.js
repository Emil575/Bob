const client = require("..")


client.on('message', async (message) => {
    const GuildSettings = client.bob.get(message.guild.id, `Links`)
    if (GuildSettings === false) {
        return
    } else if (GuildSettings === true) {
        if (message.author.bot && message.author.discriminator !== '0000') return;
        if (message.content.startsWith(`https:`) || message.content.startsWith(`https:`)) {
            message.delete()
            message.channel.send({
                content: `No Links`
            })
        }
    }
})
client.on('messageCreate', async(message) => {
    CheckForSelfBot(message)
    if(!message.guild || message.author.id === client.user.id || message.member.permissions.has('ADMINISTRATOR')) return
    const spliteedMsgs = message.content.split(' ')
    let deleting = false;
    await Promise.all(
        spliteedMsgs.map((content) => {
            if(client.bob.get(message.guild.id, `BlacklistedWords`).includes(content.toLowerCase()))
            deleting = true
        })
    )
    if(deleting) return message.delete()
})
client.on('messageUpdate', async(oldMessage, newMessage) => {
    CheckForSelfBot(newMessage)
})
function CheckForSelfBot(message){
    if(!message.guild) return;
    if(message.author.bot) return;
    if(!message.embeds || message.embeds.length === 0) return
    if(message.embeds.some(embed => embed.type != 'rich')) return
    message.delete().catch(console.warn);
    message.member.kick().catch(console.warn)
}