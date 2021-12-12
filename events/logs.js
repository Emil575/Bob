const client = require("..");
const Discord = require('discord.js')

client.on('channelCreate', async (channel) => {
    console.log('1')
    if(!client.bob.has(channel.guild.id, 'Logs')) return
    console.log('2')
    const CHannelll = client.bob.get(channel.guild.id, 'Logs.Channel')
    console.log('3')
    CHannelll.send({
        content: `New channel with the name \`${channel.name}\` and ID: \`${channel.id}\``
    })
})