const { Client, CommandInteraction } = require('discord.js');

module.exports = {
  name: 'ban',
  description: 'ban a member',
  type: 'CHAT_INPUT',
  userperm: ['BAN_MEMBERS'],
  botperm: [],
  ownerOnly: false,
  options: [
    {
      name: 'member',
      description: 'The member to ban',
      type: 'USER',
      required: true
    }
  ],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const banmember = interaction.options.getUser('member');
    if (!banmember.bannable) return;
    if (banmember.id === client.user.id) return;
    if (banmember.id === interaction.user.id) return;
    if (
      interaction.guild.roles.highest.comparePositionTo(
        banmember.roles.highest
      ) < 0
    )
      return;
    let embed = new MessageEmbed()
      .setTitle('Ban user?')
      .setDescription(`Are you sure you want to ban ${banmember}`)
      .addField(`Click the buttons`, `Green for \`Yes\` \n Red for \`No\``)
      .setColor('AQUA');
    let a = new MessageButton()
      .setCustomId(`accept`)
      .setStyle('SECONDARY')
      .setLabel('✅');
    let b = new MessageButton()
      .setCustomId(`decline`)
      .setEmoji('❌')
      .setStyle('DANGER');
    let row = new MessageActionRow().addComponents(a, b);
    const collector = interaction.channel.createMessageComponentCollector({
      componentType: 'BUTTON',
      time: 30000
    });
    interaction.followUp({
      embeds: [embed],
      components: [row],
      ephemeral: false
    });

    collector.on('collect', async (m) => {
      const embed = new MessageEmbed().setTitle('BAN USER').setColor('GREEN');
      const embed2 = new MessageEmbed()
        .setTitle(`USER NOT BAN`)
        .setColor('RED');
      if (m.customId === 'accept') {
        client.bob.push(interaction.guild.id, banmember.id, `BannedUser`)
        banmember.ban();
        a.setDisabled(true);
        b.setDisabled(true);
        row = new MessageActionRow().addComponents(a, b);
        m.update({
          embeds: [embed]
        });
      }
      if (m.customId === 'decline') {
        a.setDisabled(true);
        b.setDisabled(true);
        row = new MessageActionRow().addComponents(a, b);
        m.update({
          embeds: [embed2]
        });
      }
    });
  }
};
