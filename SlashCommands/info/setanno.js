const { Client, CommandInteraction } = require('discord.js');

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
        if(!channel) return
        channel.send({
            content: message
        })
    },
};
