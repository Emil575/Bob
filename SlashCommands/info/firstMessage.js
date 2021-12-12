const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'firstmessage',
    description: 'see the fitst message in a channel',
    type: 'CHAT_INPUT',
    userperm: [],
    botperm: [],
    ownerOnly: false,
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const fetchMsg = await interaction.channel.messages.fetch({
            after: 1,
            limit: 1
        });
        const msg = fetchMsg.first()
        const embed = new MessageEmbed()
        .setTitle(`First Messsage in ${interaction.channel.name}`)
        .setURL(msg.url)
        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
        .setDescription("Content: " + msg.content)
        .addField("Author", msg.author, true)
        .addField('Message ID', msg.id, true)
        .addField('Message Sent on', message.createdAt.toLocaleDateString(), true)
        interaction.followUp({
            embeds: [embed]
        })
    },
};
