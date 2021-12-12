const { Client, CommandInteraction, MessageEmbed } = require('discord.js');
const { connection } = require('mongoose');
module.exports = {
  name: 'status',
  description: 'Shows the bots`s status',
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
    const res = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`${client.user.tag} status`)
      .setDescription(
        `**Client**: \`🟢ONLINE\` - \`${
          client.ws.ping
        }ms\`\n **Uptime**: <t:${parseInt(
          client.readyTimestamp / 1000
        )}:R>\n**Database**: \`${swtichTo(
          connection.readyState
        )}\`\n\n**__Tools__**: \n
        **Discord Javascript**: \`${process.version}\`\n
        **Node.js**: \`${process.version}\`\n
        **Discord.js**: \`${require('discord.js').version}\`\n
        **Enmap**: \`${require('enmap').version}\`\n`
      )
      .addFields(
        {
          name: '**__Commands__**',
          value: `\`${client.commands.size}\` Commands Loaded`,
          inline: true
        },
        {
          name: '**__Guilds__**',
          value: `\`${client.guilds.cache.size}\` Guilds Connected`,
          inline: true
        },
        {
          name: `**__Users__**`,
          value: `\`${client.users.cache.size}\` User Connected`,
          inline: true
        }
      )
      .setThumbnail(client.user.avatarURL({ format: 'png', size: '1024' }))
      .setTimestamp()
      .setFooter(client.user.tag);

    interaction.followUp({
      embeds: [res]
    });
  }
};
function swtichTo(val) {
  var status = ' ';
  switch (val) {
    case 0:
      status = '🔴 DISCOONNECTED';
      break;
    case 1:
      status = '🟢 CONNECTED';
      break;
    case 2:
      status = '🟡 CONNECTING';
      break;
    case 3:
      status = '🔵 DISCONNECTING';
      break;
  }
  return status;
}
