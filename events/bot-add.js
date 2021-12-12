const client = require("..")
const Discord = require('discord.js')

client.on('guildCreate', async(guild) => {
    const inviter = (await guild.fetchAuditLogs({
        type: 'BOT_ADD'
    })).entries.filter(u => u.target.id === client.user.id).first().executor
    
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(guild.name, guild.iconURL({ dynamic: true }))
    .setDescription(`Hello <@${inviter.id}>, thank you for inviting me to **${guild.name}**\n\nTo get the list of my commands use command \`!help\`;\n`)
    .setFooter(`Thx for invite`)

    inviter.send({
        embeds: [embed]
    })
})