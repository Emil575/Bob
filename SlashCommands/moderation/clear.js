const {
  Client,
  CommandInteraction,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'clear',
  description: 'clear the channel',
  type: 'CHAT_INPUT',
  userperm: [],
  botperm: [],
  ownerOnly: false,
  options: [{
    name: 'bots',
    description: 'Delete messages sent by bots. (Ignore humans)',
    type: 'SUB_COMMAND',
    options: [{
      name: 'amount',
      description: `Delete a number of messages from a channel. (Ignores the pinned messages and limit is 100)`,
      type: 'INTEGER',
      required: true,
    }, ],
  }, {
    name: 'humans',
    description: `Delete messages sent by humans. (Ignore bots)`,
    type: 'SUB_COMMAND',
    options: [{
      name: 'amount',
      description: `Delete a number of messages from a channel. (Ignores the pinned messages and limit is 100)`,
      type: 'INTEGER',
      required: true,
    }, ],
  }, {
    name: 'embeds',
    description: 'Delete messages containing rich embeds.',
    type: 'SUB_COMMAND',
    options: [{
      name: 'amount',
      description: `Delete a number of messages from a channel. (Ignores the pinned messages and limit is 100)`,
      type: 'INTEGER',
      required: true,
    }, ],
  }, {
    name: 'files',
    description: 'Delete messages containing files/images/attachments.',
    type: 'SUB_COMMAND',
    options: [{
      name: 'amount',
      description: `Delete a number of messages from a channel. (Ignores the pinned messages and limit is 100)`,
      type: 'INTEGER',
      required: true,
    }, ],
  }, {
    name: 'text',
    description: 'Delete messages containing only text. (Ignores files/images/attachments, embeds)',
    type: 'SUB_COMMAND',
    options: [{
      name: 'amount',
      description: `Delete a number of messages from a channel. (Ignores the pinned messages and limit is 100)`,
      type: 'INTEGER',
      required: true,
    }, ],
  }, {
    name: 'mentions',
    description: 'Delete messages containing member/user/channel/role mentions.',
    type: 'SUB_COMMAND',
    options: [{
      name: 'amount',
      description: `Delete a number of messages from a channel. (Ignores the pinned messages and limit is 100)`,
      type: 'INTEGER',
      required: true,
    }, ],
  }, {
    name: 'pins',
    description: 'Delete messages which are pinned.',
    type: 'SUB_COMMAND',
    options: [{
      name: 'amount',
      description: `Delete a number of messages from a channel. (Ignores the pinned messages and limit is 100)`,
      type: 'INTEGER',
      required: true,
    }, ],
  }, {
    name: 'match',
    description: '<text> - Delete messages containing text.',
    type: 'SUB_COMMAND',
    options: [{
      name: 'amount',
      description: `Delete a number of messages from a channel. (Ignores the pinned messages and limit is 100)`,
      type: 'INTEGER',
      required: true,
    }, {
      name: 'text',
      description: `The text you wont to delete`,
      type: 'STRING',
      required: true,
    }, ],
  }, {
    name: 'not',
    description: ' <text> - Delete messages not containing text.',
    type: 'SUB_COMMAND',
    options: [{
      name: 'amount',
      description: `Delete a number of messages from a channel. (Ignores the pinned messages and limit is 100)`,
      type: 'INTEGER',
      required: true,
    }, {
      name: 'text',
      description: `The text you not wont to delete`,
      type: 'STRING',
      required: true,
    }, ],
  }, {
    name: 'startswith',
    description: '<text> - Delete messages starts with text.',
    type: 'SUB_COMMAND',
    options: [{
      name: 'amount',
      description: `Delete a number of messages from a channel. (Ignores the pinned messages and limit is 100)`,
      type: 'INTEGER',
      required: true,
    }, {
      name: 'text',
      description: `The text you wont to delete`,
      type: 'STRING',
      required: true,
    }, ],
  }, {
    name: 'endswith',
    description: '<text> - Delete messages ends with text.',
    type: 'SUB_COMMAND',
    options: [{
      name: 'amount',
      description: `Delete a number of messages from a channel. (Ignores the pinned messages and limit is 100)`,
      type: 'INTEGER',
      required: true,
    }, {
      name: 'text',
      description: `The text you wont to delte`,
      type: 'STRING',
      required: true,
    }, ],
  }],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const [SubCommand] = args;
    if (SubCommand === 'bots') {
      const amout = interaction.options.getInteger('amount')
      if (amout < 2 || amout > 100) return
      let msg;
      let data;
      let embed;
      msg = await interaction.channel.messages.fetch({
        limit: amout
      })
      data = []
      msg.map(m => m).forEach(async ms => {
        if (ms.author.bot && !ms.pinned && !ms.author.id === client.user.id) data.push(ms)
        try {
          await interaction.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {
            embed = new MessageEmbed()
              .setColor('0x#00ffff')
              .setDescription(`✅ Cleared **${m.size}**/**${amout}** messages!`);
            interaction.followUp({
              embeds: [embed]
            })
          })
        } catch (error) {
          console.log(error)
          interaction.followUp({
            content: `You can only delete the messages which are not older than 14 days.`,
          })
        }
      })
    } else
    if (SubCommand === 'humans') {
      const amout = interaction.options.getInteger('amount')
      if (amout < 2 || amout > 100) return console.log('2')
      let msg;
      let data;
      let embed;
      msg = await interaction.channel.messages.fetch({
        limit: amout
      })
      data = []
      msg.map(m => m).forEach(async ms => {
        if (!ms.author.bot && !ms.pinned) data.push(ms)
      })
      try {
        await interaction.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {
          embed = new MessageEmbed()
            .setColor('0x#00ffff')
            .setDescription(`✅ Cleard **${m.size}**/**${amout}** messages!`);
          interaction.followUp({
            embeds: [embed]
          })
        })
      } catch (error) {
        console.log(error)
        interaction.followUp({
          content: `You can only delete the messages which are not older than 14 days.`
        })
      }
    } else
    if (SubCommand === 'embeds') {
      const amout = interaction.options.getInteger('amount')
      if (amout < 2 || amout > 100) return
      let msg;
      let data;
      let embed;
      msg = await interaction.channel.messages.fetch({
        limit: amout
      })
      data = []
      msg.map(m => m).forEach(async ms => {
        if (ms.embeds.length && !ms.pinned) data.push(ms)
        try {
          await interaction.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {
            embed = new MessageEmbed()
              .setColor('0x#00ffff')
              .setDescription(`✅ Cleared **${m.size}**/**${amout}** messages`);
            interaction.followUp({
              embeds: [embed]
            })
          })
        } catch (error) {
          console.log(error)
          interaction.followUp({
            content: `You can only delete the messages which are not older than 14 days.`
          })
        }
      })
    } else
    if (SubCommand === 'files') {
      const amout = interaction.options.getInteger('amount')
      if (amout < 2 || amout > 100) return
      let msg;
      let data;
      let embed;
      msg = await interaction.channel.messages.fetch({
        limit: amout
      })
      data = []
      msg.map(m => m).forEach(async ms => {
        if (ms.attachments.first() && !ms.pinned) data.push(ms)
      })
      try {
        interaction.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {
          embed = new MessageEmbed()
            .setColor('0x#00ffff')
            .setDescription(`✅ Cleard **${m.size}**/**${amout}** messages!`);
          interaction.followUp({
            embeds: [embed]
          })
        })
      } catch (error) {
        console.log(error)
        interaction.followUp({
          content: `You can only delete the messages which are not older than 14 days.`
        })
      }
    } else
    if (SubCommand === 'text') {
      const amout = interaction.options.getInteger('amount')
      if (amout < 2 || amout > 100) return
      let msg;
      let data;
      let embed;
      msg = await interaction.channel.messages.fetch({
        limit: amout
      })
      data = []
      msg.map(m => m).forEach(async ms => {
        if (!ms.attachments.first() && !ms.embeds.length && !ms.pinned) data.push(ms)
      })
      try {
        await interaction.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {
          embed = new MessageEmbed()
            .setColor('0x#00ffff')
            .setDescription(`✅ Cleard **${m.size}**/**${amout}** messages!`)
          interaction.followUp({
            embeds: [embed]
          })
        })
      } catch (error) {
        console.log(error)
        interaction.followUp({
          content: `You can only delete the messages which are not older than 14 days.`
        })
      }
    } else
    if (SubCommand === 'mentions') {
      const amout = interaction.options.getInteger('amount')
      if (amout < 2 || amout > 100) return
      let msg;
      let data;
      let embed;
      msg = await interaction.channel.messages.fetch({
        limit: amout
      })
      data = []
      msg.map(m => m).forEach(async ms => {
        if ((ms.mentions.users.first() || ms.mentions.members.first() || ms.mentions.channels.first() || ms.mentions.roles.first()) && !ms.pinned) data.push(ms)
      })
      try {
        await interaction.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {
          embed = new MessageEmbed()
            .setColor('0x#00ffff')
            .setDescription(`✅ Cleard **${m.size}**/**${amout}** messages!`)
          interaction.followUp({
            embeds: [embed]
          })
        })
      } catch (error) {
        console.log(error)
        interaction.followUp({
          content: `You can only delete the messages which are not older than 14 days.`
        })
      }
    } else
    if (SubCommand === 'pins') {
      const amout = interaction.options.getInteger('amount')
      if (amout < 2 || amout > 100) return
      let msg;
      let data;
      let embed;
      msg = await interaction.channel.messages.fetch({
        limit: amout
      })
      data = []
      msg.map(m => m).forEach(async ms => {
        if (ms.pinned) data.push(ms)
      })
      try {
        await interaction.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {
          embed = new MessageEmbed()
            .setColor('0x#00ffff')
            .setDescription(`✅ Cleard **${m.size}**/**${amout}** messages!`)
          interaction.followUp({
            embeds: [embed]
          })
        })
      } catch (error) {
        console.log(error)
        interaction.followUp({
          content: `You can only delete the messages which are not older than 14 days.`
        })
      }
    } else
    if (SubCommand === 'match') {
      const amout = interaction.options.getInteger('amount')
      const text = interaction.options.getString('text')
      if (amout < 2 || amout > 100) return
      let msg;
      let data;
      let embed;
      msg = await interaction.channel.messages.fetch({
        limit: amout
      })
      data = []
      msg.map(m => m).forEach(async ms => {
        if (ms.content.includes(text) && !ms.pinned) data.push(ms)
      })
      try {
        await interaction.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {
          embed = new MessageEmbed()
            .setColor('0x#00ffff')
            .setDescription(`✅ Cleard **${m.size}**/**${amout}** messages!`)
          interaction.followUp({
            embeds: [embed]
          })
        })
      } catch (error) {
        console.log(error)
        interaction.followUp({
          content: `You can only delete the messages which are not older than 14 days.`
        })
      }
    } else
    if (SubCommand === 'not') {
      const amout = interaction.options.getInteger('amount')
      const text = interaction.options.getString('text')
      if (amout < 2 || amout > 100) return
      let msg;
      let data;
      let embed;
      msg = await interaction.channel.messages.fetch({
        limit: amout
      })
      data = []
      msg.map(m => m).forEach(async ms => {
        if (!ms.content.includes(text) && !ms.pinned) data.push(ms)
      })
      try {
        await interaction.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {
          embed = new MessageEmbed()
            .setColor('0x#00ffff')
            .setDescription(`✅ Cleard **${m.size}**/**${amout}** messages!`);
          interaction.followUp({
            embeds: [embed]
          })
        })
      } catch (error) {
        console.log(error)
        interaction.followUp({
          content: `You can only delete the messages which are not older than 14 days.`
        })
      }
    } else
    if (SubCommand === 'startswith') {
      const amout = interaction.options.getInteger('amount')
      const text = interaction.options.getString('text')
      if (amout < 2 || amout > 100) return
      let msg;
      let data;
      let embed;
      msg = await interaction.channel.messages.fetch({
        limit: amout
      })
      data = []
      msg.map(m => m).forEach(async ms => {
        if (ms.content.startsWith(text) && !ms.pinned) data.push(ms)
      })
      try {
        await interaction.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {
          embed = new MessageEmbed()
            .setColor('0x#00ffff')
            .setDescription(`✅ Cleard **${m.size}**/**${amout}** messages!`)
          interaction.followUp({
            embeds: [embed]
          })
        })
      } catch (error) {
        console.log(error)
        interaction.followUp({
          content: `You can only delete the messages which are not older than 14 days.`
        })
      }
    } else
    if (SubCommand === 'endswith') {
      const amout = interaction.options.getInteger('amount')
      const text = interaction.options.getString('text')
      if (amout < 2 || amout > 100) return
      let msg;
      let data;
      let embed;
      msg = await interaction.channel.messages.fetch({
        limit: amout
      })
      data = []
      msg.map(m => m).forEach(async ms => {
        if (ms.content.endsWith(text) && !ms.pinned) data.push(ms)
      })
      try {
        await interaction.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {
          embed = new MessageEmbed()
            .setColor('0x#00ffff')
            .setDescription(`✅ Cleard **${m.size}**/**${amout}** messages!`);
          interaction.followUp({
            embeds: [embed]
          })
        })
      } catch (error) {
        console.log(error)
        interaction.followUp({
          content: `You can only delete the messages which are not older than 14 days.`
        })
      }
    }
  },
};