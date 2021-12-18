const client = require('..');
const {
  MessageEmbed
} = require('discord.js');
client.on('interactionCreate', async (interaction) => {

  client.setups.ensure(interaction.guild.id, {
    enabled: false,
    guildid: interaction.guild.id,
    messageid: "",
    channelid: "",
    parentid: "",
    message: "Hey {user}, thanks for opening an ticket! Someone will help you soon!",
    adminroles: []
}, "ticketsystem")

  client.Anti_Nuke_System.ensure(interaction.guild.id, {
    all: {
      enabled: false,
      logger: "no",
      whitelisted: {
        roles: [],
        users: []
      },
      showwhitelistlog: true,
      quarantine: false,
    },
    antibot: {
      enabled: true,
      whitelisted: {
        roles: [],
        users: []
      },
      punishment: {
        bot: {
          kick: true,
          ban: false,
        },
        member: {
          removeroles: {
            neededdaycount: 1, //he is allowed to add 1 Bot / Day
            neededweekcount: 4, //he is allowed to add 4 Bots / Week
            neededmonthcount: 10, //he is allowed to add 10 Bot / Month
            noeededalltimecount: 0, //0 means that he is allowed to add infinite Bots for all time
            enabled: true
          },
          kick: {
            neededdaycount: 2, //he is allowed to add 2 Bot / Day
            neededweekcount: 7, //he is allowed to add 5 Bots / Week
            neededmonthcount: 20, //he is allowed to add 11 Bot / Month
            noeededalltimecount: 0, //0 means that he is allowed to add infinite Bots for all time
            enabled: true
          },
          ban: {
            neededdaycount: 4, //he is allowed to add 3 Bot / Day
            neededweekcount: 10, //he is allowed to add 6 Bots / Week
            neededmonthcount: 25, //he is allowed to add 12 Bot / Month
            noeededalltimecount: 0, //0 means that he is allowed to add infinite Bots for all time
            enabled: true
          },
        }
      },
    },
    //Anti Kick & Ban
    antideleteuser: {
      enabled: true,
      whitelisted: {
        roles: [],
        users: []
      },
      punishment: {
        member: {
          removeroles: {
            neededdaycount: 1, //he is allowed to do it 1 / Day
            neededweekcount: 4, //he is allowed to do it 4 / Week
            neededmonthcount: 10, //he is allowed to do it 10 / Month
            noeededalltimecount: 0, //0 means that he is allowed to do it infinite for all time
            enabled: true
          },
          kick: {
            neededdaycount: 2, //he is allowed to to do it 2 / Day
            neededweekcount: 7, //he is allowed to to do it 5 / Week
            neededmonthcount: 20, //he is allowed to to do it 11 / Month
            noeededalltimecount: 0, //0 means that he is allowed to do it infinite for all time
            enabled: true
          },
          ban: {
            neededdaycount: 4, //he is allowed to to do it 3 / Day
            neededweekcount: 10, //he is allowed to to do it 6 / Week
            neededmonthcount: 25, //he is allowed to to do it 12 / Month
            noeededalltimecount: 0, //0 means that he is allowed to do it infinite for all time
            enabled: true
          },
        }
      },
    },
    //ANTI CREATE ROLE
    anticreaterole: {
      enabled: true,
      whitelisted: {
        roles: [],
        users: []
      },
      punishment: {
        removeaddedrole: true,
        member: {
          removeroles: {
            neededdaycount: 1, //he is allowed to do it 1 / Day
            neededweekcount: 4, //he is allowed to do it 4 / Week
            neededmonthcount: 10, //he is allowed to do it 10 / Month
            noeededalltimecount: 0, //0 means that he is allowed to do it infinite for all time
            enabled: true
          },
          kick: {
            neededdaycount: 2, //he is allowed to to do it 2 / Day
            neededweekcount: 7, //he is allowed to to do it 5 / Week
            neededmonthcount: 20, //he is allowed to to do it 11 / Month
            noeededalltimecount: 0, //0 means that he is allowed to do it infinite for all time
            enabled: true
          },
          ban: {
            neededdaycount: 4, //he is allowed to to do it 3 / Day
            neededweekcount: 10, //he is allowed to to do it 6 / Week
            neededmonthcount: 25, //he is allowed to to do it 12 / Month
            noeededalltimecount: 0, //0 means that he is allowed to do it infinite for all time
            enabled: true
          },
        }
      },
    },
    //Anti DELETE Role
    antideleterole: {
      enabled: true,
      whitelisted: {
        roles: [],
        users: []
      },
      punishment: {
        readdrole: true,
        member: {
          removeroles: {
            neededdaycount: 1, //he is allowed to do it 1 / Day
            neededweekcount: 4, //he is allowed to do it 4 / Week
            neededmonthcount: 10, //he is allowed to do it 10 / Month
            noeededalltimecount: 0, //0 means that he is allowed to do it infinite for all time
            enabled: true
          },
          kick: {
            neededdaycount: 2, //he is allowed to to do it 2 / Day
            neededweekcount: 7, //he is allowed to to do it 5 / Week
            neededmonthcount: 20, //he is allowed to to do it 11 / Month
            noeededalltimecount: 0, //0 means that he is allowed to do it infinite for all time
            enabled: true
          },
          ban: {
            neededdaycount: 4, //he is allowed to to do it 3 / Day
            neededweekcount: 10, //he is allowed to to do it 6 / Week
            neededmonthcount: 25, //he is allowed to to do it 12 / Month
            noeededalltimecount: 0, //0 means that he is allowed to do it infinite for all time
            enabled: true
          },
        }
      },
    },
    //ANTI DELETE CHANNEL
    antichanneldelete: {
      enabled: true,
      whitelisted: {
        roles: [],
        users: []
      },
      punishment: {
        member: {
          removeroles: {
            neededdaycount: 1, //he is allowed to do it 1 / Day
            neededweekcount: 4, //he is allowed to do it 4 / Week
            neededmonthcount: 10, //he is allowed to do it 10 / Month
            noeededalltimecount: 0, //0 means that he is allowed to do it infinite for all time
            enabled: true
          },
          kick: {
            neededdaycount: 2, //he is allowed to to do it 2 / Day
            neededweekcount: 7, //he is allowed to to do it 5 / Week
            neededmonthcount: 20, //he is allowed to to do it 11 / Month
            noeededalltimecount: 0, //0 means that he is allowed to do it infinite for all time
            enabled: true
          },
          ban: {
            neededdaycount: 4, //he is allowed to to do it 3 / Day
            neededweekcount: 10, //he is allowed to to do it 6 / Week
            neededmonthcount: 25, //he is allowed to to do it 12 / Month
            noeededalltimecount: 0, //0 means that he is allowed to do it infinite for all time
            enabled: true
          },
        }
      },
    },
    //ANTI CREATE CHANNEL
    antichannelcreate: {
      enabled: true,
      whitelisted: {
        roles: [],
        users: []
      },
      punishment: {
        deletecreatedchannel: true,
        member: {
          removeroles: {
            neededdaycount: 1, //he is allowed to do it 1 / Day
            neededweekcount: 4, //he is allowed to do it 4 / Week
            neededmonthcount: 10, //he is allowed to do it 10 / Month
            noeededalltimecount: 0, //0 means that he is allowed to do it infinite for all time
            enabled: true
          },
          kick: {
            neededdaycount: 2, //he is allowed to to do it 2 / Day
            neededweekcount: 7, //he is allowed to to do it 5 / Week
            neededmonthcount: 20, //he is allowed to to do it 11 / Month
            noeededalltimecount: 0, //0 means that he is allowed to do it infinite for all time
            enabled: true
          },
          ban: {
            neededdaycount: 4, //he is allowed to to do it 3 / Day
            neededweekcount: 10, //he is allowed to to do it 6 / Week
            neededmonthcount: 25, //he is allowed to to do it 12 / Month
            noeededalltimecount: 0, //0 means that he is allowed to do it infinite for all time
            enabled: true
          },
        }
      },
    },
  });
  client.bob.ensure(interaction.guild.id, {
    AnnoChannel: false,
    GuildId: interaction.guild.id,
    GuildName: interaction.guild.name,
    SystemChannel: false,
    LastMember: false,
    LastLeaver: false,
    Links: true,
    ReadAntiNuke: [],
    BlacklistUser: [],
    BlacklistGuild: [],
    BlacklistedWords: [],
    BannedUser: [],
    KickedUser: [],
    Status: {
      Role: false,
      Text: false
    },
    Logs: {
      Enable: false,
      Channel: false,
      WebHookId: false,
      WebHookToken: false
    },
  })

  const GuildSettings = client.bob.get(interaction.guild.id)
  const {
    BlacklistUser,
    BlacklistGuild,
  } = GuildSettings



  // Slash Command Handling
  if (interaction.isCommand()) {
    await interaction.deferReply({
      ephemeral: true
    }).catch(() => {});

    const cmd = client.slashCommands.get(interaction.commandName);
    if (!cmd) return interaction.followUp({
      content: 'An error has occured '
    });

    const args = [];
    for (let option of interaction.options.data) {
      if (option.type === "SUB_COMMAND") {
        if (option.name) args.push(option.name);
        option.options?.forEach((x) => {
            if (x.value) args.push(x.value);
        });
    } else if (option.value) args.push(option.value);
}
    const userperm = interaction.member.permissions.has(cmd.userperm || []);

    if (!userperm) {
      let userperm = new MessageEmbed().setDescription(
        `*<a:wrong:885815677091454986> You Need **${cmd.userperm}**  Permissions!*`
      );
      return interaction.followUp({
        embeds: [userperm]
      });
    }

    const botperm = interaction.guild.me.permissions.has(cmd.botperm || []);
    if (!botperm) {
      let perms = new MessageEmbed().setDescription(
        `*<a:wrong:885815677091454986> I Need **${cmd.botperm}** Permissions!*`
      );
      return interaction.followUp({
        embeds: [perms]
      });
    }

    const {
      owners
    } = require('../json/config.json');
    if (cmd) {
      if (cmd.ownerOnly) {
        if (!owners.includes(interaction.user.id)) {
          let ownerOnly = new MessageEmbed().setDescription(
            '*<a:wrong:885815677091454986> Only Bot Developer can use this command!*'
          );
          return interaction.followUp({
            embeds: [ownerOnly]
          });
        }
      }
    }

    interaction.member = interaction.guild.members.cache.get(
      interaction.user.id
    );
    if (BlacklistUser.includes(interaction.user.id))
      return interaction.followUp({
        content: `You are Blacklisted from the bot`,
        ephemeral: true
      })
    if (BlacklistGuild.includes(interaction.guild.id))
      return interaction.followUp({
        content: `This Guild is blacklisted from the bot`,
        ephemeral: true
      })
    cmd.run(client, interaction, args);
  }
});