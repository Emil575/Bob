function SEND(guild, client, description, title){
    try {
        let embed = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription(description.substring(0, 2000))
        .setTimestamp()
        .setFooter('Bot by Emil')
        if(title) embed.setTitle(("❗ | " + title).substring(0, 250))
        let logger = client.bob.get(guild.id, `Logs`)
        if(!logger.Enable) return

        let channel = client.guilds.cache.get(guild.id).channels.cache.get(logger.Channel)
        try {
            channel.createWebhook(guild.name, {
                avatar: guild.iconURL({format: "png"}),
            }).then(async webhook => {
                await webhook.send({
                    username: guild.name,
                    avatarURL: guild.iconURL({format: "png"}),
                    embeds: [embed]
                }).catch(e => console.log(e));
                await webhook.delete().catch(e => console.log(e))
            })
            .catch(e=> console.log(e));
        } catch (error) {
            console.warn(error)
        }
    } catch (error) {
        console.warn(error)
    }
}
module.exports.SEND = SEND