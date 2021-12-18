const { Client, CommandInteraction, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
    name: 'makeanno',
    description: 'make a anno',
    type: 'CHAT_INPUT',
    userperm: [],
    botperm: [],
    ownerOnly: false,
    options: [
      {
        name: 'anno_message',
        description: 'the message',
        type: 'STRING',
        required: true,
      }
  ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const message = interaction.options.getString('anno_message')
        const guildsetting = client.bob.get(interaction.guild.id)
        const anno = guildsetting.AnnoChannel
        const channel = interaction.guild.channels.cache.get(anno)
        const ja = new MessageButton()
        .setCustomId('ja')
        .setStyle('SUCCESS')
        .setLabel('Yea i sure')
        const nein = new MessageButton()
        .setCustomId('nein')
        .setStyle('DANGER')
        .setLabel('No im not sure')
        const row = new MessageActionRow().addComponents(ja, nein)
        interaction.followUp({
          content: `Are you sure you wont to send ${anno} to ${channel.name}?`,
          components: [row]
        })
    },
};
/**
 * @INFO
 * Bot Coded by EmiL#8665
 * @INFO
 * Code from Emil Development
 * @INFO
 * Please mention him / Emil Development, when using this Code!
 * @INFO
 */
