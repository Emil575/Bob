const {
  Client,
  CommandInteraction,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'setsystem',
  description: 'set a channel for all system date in your server',
  type: 'CHAT_INPUT',
  userperm: ['ADMINISTRATOR'],
  botperm: [],
  ownerOnly: false,
  options: [{
    name: 'channel',
    description: 'the channel',
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
    const c = interaction.options.getChannel('channel')
    const channel = interaction.guild.channels.cache.get(c.id) || interaction.guild.channels.cache.find(c.id)
    client.bob.set(interaction.guild.id, channel.id, `SystemChannel`)
    const GuildSettings = client.bob.get(interaction.guild.id)
    interaction.followUp({
      content: `I set the setsystem channel to \`${channel.name}\``,
      ephemeral: true
    })
    const embed = new MessageEmbed()
      .setTitle(`Server stats ${interaction.guild.name}`)
      .addFields({
        name: `Server id`,
        value: interaction.guild.id,
        inline: false
      }, {
        name: `Server name`,
        value: interaction.guild.name,
        inline: false
      }, {
        name: `Last Member`,
        value: `Member Name ${GuildSettings.LastMember.id}`,
        inline: false
      })
    channel.send({
      embeds: [embed]
    })
  },
};