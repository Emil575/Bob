const {
    Client,
    CommandInteraction,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'anno',
    description: 'set anno channel',
    type: 'CHAT_INPUT',
    userperm: [],
    botperm: [],
    ownerOnly: false,
    options: [{
        name: 'channel',
        description: 'set the channel',
        type: 'CHANNEL',
        required: true,
    }],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const channel = interaction.options.getChannel('channel')
        const embed = new MessageEmbed()
            .setTitle(`Data Reply`)
            .setDescription(`${client.bob.get(interaction.guild.id)}`)
        client.bob.set(interaction.guild.id, channel.id, `AnnoChannel`)
        const GuildSettings = client.bob.get(interaction.guild.id)
        interaction.followUp({
            content: `Set the anno channel to **__${channel.name}__**`,
            embeds: [embed]
        })
        console.log(GuildSettings.AnnoChannel)
        console.log(client.bob.get(interaction.guild.id))
    },
};