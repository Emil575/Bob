const { Client, CommandInteraction } = require('discord.js');

module.exports = {
    name: 'say',
    description: 'say somfing',
    type: 'CHAT_INPUT',
    userperm: [],
    botperm: [],
    ownerOnly: false,
    options: [
      {
        name: 'message',
        description: 'the say content',
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
        const message = interaction.options.getString('message')
        interaction.followUp({
            content: `Send the message`,
            ephemeral: true
        })
        interaction.channel.send({
            content: message
        })
    },
};
