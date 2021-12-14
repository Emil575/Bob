const {
    Client,
    CommandInteraction,
    MessageSelectMenu,
    Message,
    MessageActionRow,
    MessageEmbed,
    MessageAttachment,
    CommandInteractionOptionResolver
  } = require('discord.js');
  
  module.exports = {
    name: 'antinuke',
    description: 'setupanti',
    type: 'CHAT_INPUT',
    userperm: [],
    botperm: [],
    ownerOnly: true,
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      client.Anti_Nuke_System.ensure(message.guild.id, {
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
      })
      const Slection = new MessageSelectMenu()
        .setCustomId('MenuSelection')
        .setMaxValues(1)
        .setMinValues(1)
        .setPlaceholder('Click me to setup the Anti Nuke System!')
        .addOptions({
          value: "Information",
          label: `Show Information about the Anti Nuke System`,
          emoji: "869468766529003560"
        }, {
          value: "Manage Whitelist",
          label: `Allow/Deny Roles/Users who should not get affected`,
          emoji: "857334024087011378"
        }, {
          value: "Manage Settings",
          label: `Enable/Disable & Change the Anti Nuke Settings`,
          emoji: "866089513654419466"
        }, {
          value: "Suggested Settings",
          label: `Use our suggested Settings!`,
          emoji: "866089515993792522"
        }, {
          value: "Sync Quarantine Role",
          label: `Add Perm !VIEW_CH. to all Chans.for the Qu. Role`,
          emoji: "🔒"
        }, {
          value: "Cancel",
          label: `Cancel and stop the Anti-Nuke-Setup!`,
          emoji: "862306766338523166"
        })
      const row = new MessageActionRow()
        .addComponents(Slection)
      const embed = new MessageEmbed()
        .setColor(es.color)
        .setAuthor("Anti Nuke Setup", "https://cdn.discordapp.com/attachments/820695790170275871/869657327941324860/PS7lwz7HwAAAABJRU5ErkJggg.png", "https://discord.gg/FQGXbypRf8")
        .setDescription("***Select what you need in the `Selection` down Below!***")
      interaction.followUp({
        embeds: [embed],
        components: [row]
      })
  
      client.on('interactionCreate', async (interaction) => {
        if (!interaction.isSelectMenu()) return
        if (interaction.values === 'Information') {
          const embed = new MessageEmbed()
            .setColor(es.color)
            .setFooter(es.footertext, es.footericon)
            .setTitle(`${client.Anti_Nuke_System.get(message.guild.id, "all.enabled") ? "<a:yes:833101995723194437> __**The Anti Nuke is enabled!**__": "<:no:833101993668771842> __**The Anti Nuke is disabled!**__"}`)
            .addField(`__**Anti Add Bot | ${client.Anti_Nuke_System.get(message.guild.id, "antibot.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antibot.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Actions / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "antibot.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antibot.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antibot.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "antibot.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(message.guild.id, "antibot.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antibot.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "antibot.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(message.guild.id, "antibot.punishment.member.ban.neededmonthcount")}\`**`)
            .addField(`__**Anti Kick/Ban | ${client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Kicks / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Kicks / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.punishment.member.ban.neededmonthcount")}\`**`)
            .addField(`__**Anti Delete Role | ${client.Anti_Nuke_System.get(message.guild.id, "antideleterole.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleterole.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Actions / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleterole.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleterole.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleterole.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleterole.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleterole.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleterole.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleterole.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(message.guild.id, "antideleterole.punishment.member.ban.neededmonthcount")}\`**`)
            .addField(`__**Anti Delete Channel | ${client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Actions / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.punishment.member.ban.neededmonthcount")}\`**`)
            .addField(`__**Anti Create Role | ${client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Actions / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.punishment.member.ban.neededmonthcount")}\`**`)
            .addField(`__**Anti Create Channel | ${client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Actions / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.punishment.member.ban.neededmonthcount")}\`**`)
            .addField("\u200b", ">>> __***When the allowed Actions / Time are reached, then i will do the punishments in []***__\n*I will also Kick the added Bot and delete the Created Role/Channel*")
            .setDescription(`${client.Anti_Nuke_System.get(message.guild.id, "all.showwhitelistlog") ? "> <a:yes:833101995723194437> **I will show it when a Whitelisted User/Role makes an Action**\n> *But I won't do anything to him/her, cause he/she is whitelisted!*": "> <:no:833101993668771842> **I won't show it when a whitelisted User is doing something!**\n> This doesn't affect your security! (He is whitelisted, from the YOU)"}${client.Anti_Nuke_System.get(message.guild.id, "all.quarantine").length > 0 ? `\n\n> **I will add him/her the Quarantine Role: <@&${client.Anti_Nuke_System.get(message.guild.id, "all.quarantine")}> Role when removing the Roles!**` : "*NO Quarantine Role set, I will just remove his/her Roles / KICK / BAN..!*"}`)
          await interaction.followUp({
            content: "<a:yes:833101995723194437> **The Current Anti-Nuke Settings**",
            embeds: [embed]
          })
        } else
        if (interaction.values === 'Manage Whitelist') {
          interaction.deferReply()
          let Selection = new MessageSelectMenu()
            .setCustomId('MenuSelection2')
            .setMaxValues(1)
            .setMinValues(1)
            .setPlaceholder('Click me to setup the Anti Nuke Settings!')
            .addOptions({
              value: "General Users/Roles",
              label: `Add/Remove General Users/Roles`,
              emoji: "866089515993792522"
            }, {
              value: "Anti Bot Add Users/Roles",
              label: `Add/Remove Anti-Bot-Add Users/Roles`,
              emoji: "843943149902626846"
            }, {
              value: "Anti Kick/Ban Users/Roles",
              label: `Add/Remove Anti-Kick/Ban Users/Roles`,
              emoji: "843943149868023808"
            }, {
              value: "Anti Create Role Users/Roles",
              label: `Add/Remove Anti-Create-Role Users/Roles`,
              emoji: "843943149914554388"
            }, {
              value: "Anti Delete Role Users/Roles",
              label: `Add/Remove Anti-Delete-Role Users/Roles`,
              emoji: "843943149919535154"
            }, {
              value: "Anti Create Channel Users/Roles",
              label: `Add/Remove Anti-Create-Channel Users/Roles`,
              emoji: "843943149759889439"
            }, {
              value: "Anti Delete Channel Users/Roles",
              label: `Add/Remove Anti-Delete-Channel Users/Roles`,
              emoji: "843943150468857876"
            }, {
              value: "Cancel",
              label: `Cancel and stop the Anti-Nuke-Setup!`,
              emoji: "862306766338523166"
            })
          const row = new MessageActionRow().addComponents(Selection)
          const embed = new MessageEmbed()
            .setAuthor("https://discord.gg/FQGXbypRf8")
            .setDescription("***Select what you need in the `Selection` down Below!***")
          let menumsg = await interaction.followUp({
            embeds: [embed],
            components: [row]
          })
          client.on('interactionCreate', async (interaction) => {
            if (!interaction.isSelectMenu()) return
            if (interaction.values === 'General Users/Roles') {
              let timeouterror = false;
              const embed = new MessageEmbed()
                .setTitle("Which Role/User do you wanna add/remove?")
                .setColor(es.color)
                .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`).setFooter(es.footertext, es.footericon)
              let tempmsg = await interaction.channel.send({
                embeds: [embed]
              })
              await tempmsg.channel.awaitMessages(m => m.author.id == interaction.user.id, {
                  max: 1,
                  time: 90000,
                  errors: ["time"]
                })
                .then(async collected => {
                  let message = collected.first()
                  if (!message) throw "NO MESSAGE SENT";
                  let users = message.mentions.members.filter(r => r.guild.id == message.guild.id).map(r => r.id)
                  let roles = message.mentions.roles.filter(r => r.guild.id == message.guild.id).map(r => r.id)
                  let addedusers = [];
                  let addedroles = [];
                  let removedusers = [];
                  let removedroles = [];
                  let current = client.Anti_Nuke_System.get(interaction.guild.id, 'all.whitelisted');
                  for (const u of users) {
                    if (current.users.includes(u)) {
                      removedusers.push(u)
                    } else {
                      addedusers.push(u)
                    }
                  }
                  for (const r of roles) {
                    if (current.roles.includes(r)) {
                      removedroles.push(r)
                    } else {
                      addedroles.push(r)
                    }
                  }
                  for (const u of addedusers) {
                    client.Anti_Nuke_System.push(interaction.guild.id, u, "all.whitelisted.users")
                  }
                  for (const r of addedroles) {
                    client.Anti_Nuke_System.push(interaction.guild.id, r, "all.whitelisted.roles")
                  }
                  for (const u of removedusers) {
                    client.Anti_Nuke_System.remove(interaction.guild.id, u, "all.whitelisted.users")
                  }
                  for (const r of removedroles) {
                    client.Anti_Nuke_System.remove(interaction.guild.id, r, "all.whitelisted.roles")
                  }
                  const embed = new Discord.MessageEmbed()
                    .setTitle(`**Added [${addedroles.length}] Roles and [${addedusers.length}] Users to the __general__ Whitelist!**`)
                    .setColor(es.color)
                    .setDescription(`**Removed [${removedroles.length}] Roles and [${removedusers.length}] Users from the __general__ Whitelist!**`.substr(0, 2048))
                    .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                    .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                    .setFooter(es.footertext, es.footericon)
  
                  return interaction.followUp({
                    embeds: [embed]
                  })
                }).catch(e => {
                  timeouterror = e
                })
              if (timeouterror)
                const embed = new Discord.MessageEmbed()
                  .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                  .setColor(es.wrongcolor)
                  .setDescription(`Cancelled the Operation!`.substr(0, 2000))
                  .setFooter(es.footertext, es.footericon)
              return interaction.followUp({
                embeds: [embed]
              })
            }else
            if(interaction.values === 'Anti Bot Add Users/Roles'){
              let timeouterror = false;
              const embed = new MessageEmbed()
                .setTitle("Which Role/User do you wanna add/remove?")
                .setColor(es.color)
                .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`).setFooter(es.footertext, es.footericon)
              let tempmsg = await interaction.channel.send({
                embeds: [embed]
              })
              await tempmsg.channel.awaitMessages(m => m.author.id == interaction.user.id, {
                  max: 1,
                  time: 90000,
                  errors: ["time"]
                })
                .then(async collected => {
                  let message = collected.first()
                  if (!message) throw "NO MESSAGE SENT";
                  let users = message.mentions.members.filter(r => r.guild.id == message.guild.id).map(r => r.id)
                  let roles = message.mentions.roles.filter(r => r.guild.id == message.guild.id).map(r => r.id)
                  let addedusers = [];
                  let addedroles = [];
                  let removedusers = [];
                  let removedroles = [];
                  let current = client.Anti_Nuke_System.get(interaction.guild.id, 'all.whitelisted');
                  for (const u of users) {
                    if (current.users.includes(u)) {
                      removedusers.push(u)
                    } else {
                      addedusers.push(u)
                    }
                  }
                  for (const r of roles) {
                    if (current.roles.includes(r)) {
                      removedroles.push(r)
                    } else {
                      addedroles.push(r)
                    }
                  }
                  for(const u of addedusers){
                    client.Anti_Nuke_System.push(interaction.guild.id, u, "antibot.whitelisted.users")
                  }
                  for(const r of addedroles){
                    client.Anti_Nuke_System.push(interaction.guild.id, r, "antibot.whitelisted.roles")
                  }
                  for(const u of removedusers){
                    client.Anti_Nuke_System.remove(interaction.guild.id, u, "antibot.whitelisted.users")
                  }
                  for(const r of removedroles){
                    client.Anti_Nuke_System.remove(interaction.guild.id, r, "antibot.whitelisted.roles")
                  }
                  const embed = new Discord.MessageEmbed()
                    .setTitle(`**Added [${addedroles.length}] Roles and [${addedusers.length}] Users to the __general__ Whitelist!**`)
                    .setColor(es.color)
                    .setDescription(`**Removed [${removedroles.length}] Roles and [${removedusers.length}] Users from the __general__ Whitelist!**`.substr(0, 2048))
                    .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                    .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                    .setFooter(es.footertext, es.footericon)
  
                  return interaction.followUp({
                    embeds: [embed]
                  })
                }).catch(e => {
                  timeouterror = e
                })
              if (timeouterror)
                const embed = new Discord.MessageEmbed()
                  .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                  .setColor(es.wrongcolor)
                  .setDescription(`Cancelled the Operation!`.substr(0, 2000))
                  .setFooter(es.footertext, es.footericon)
              return interaction.followUp({
                embeds: [embed]
              })
            }else
            if(interaction.values === 'Anti Kick/Ban Users/Roles'){
              let timeouterror = false
              const embed = new MessageEmbed()
                .setTitle("Which Role/User do you wanna add/remove?")
                .setColor(es.color)
                .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`).setFooter(es.footertext, es.footericon)
              let tempmsg = await interaction.channel.send({
                embeds: [embed]
              })
              await tempmsg.channel.awaitMessages(m => m.author.id == interaction.user.id, {
                  max: 1,
                  time: 90000,
                  errors: ["time"]
                })
                .then(async collected => {
                  let message = collected.first()
                  if (!message) throw "NO MESSAGE SENT";
                  let users = message.mentions.members.filter(r => r.guild.id == message.guild.id).map(r => r.id)
                  let roles = message.mentions.roles.filter(r => r.guild.id == message.guild.id).map(r => r.id)
                  let addedusers = [];
                  let addedroles = [];
                  let removedusers = [];
                  let removedroles = [];
                  let current = client.Anti_Nuke_System.get(interaction.guild.id, 'all.whitelisted');
                  for (const u of users) {
                    if (current.users.includes(u)) {
                      removedusers.push(u)
                    } else {
                      addedusers.push(u)
                    }
                  }
                  for (const r of roles) {
                    if (current.roles.includes(r)) {
                      removedroles.push(r)
                    } else {
                      addedroles.push(r)
                    }
                  }
                  for(const u of addedusers){
                    client.Anti_Nuke_System.push(interaction.guild.id, u, "antideleteuser.whitelisted.users")
                  }
                  for(const r of addedroles){
                    client.Anti_Nuke_System.push(interaction.guild.id, r, "antideleteuser.whitelisted.roles")
                  }
                  for(const u of removedusers){
                    client.Anti_Nuke_System.remove(interaction.guild.id, u, "antideleteuser.whitelisted.users")
                  }
                  for(const r of removedroles){
                    client.Anti_Nuke_System.remove(interaction.guild.id, r, "antideleteuser.whitelisted.roles")
                  }
                  const embed = new Discord.MessageEmbed()
                    .setTitle(`**Added [${addedroles.length}] Roles and [${addedusers.length}] Users to the __general__ Whitelist!**`)
                    .setColor(es.color)
                    .setDescription(`**Removed [${removedroles.length}] Roles and [${removedusers.length}] Users from the __general__ Whitelist!**`.substr(0, 2048))
                    .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                    .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                    .setFooter(es.footertext, es.footericon)
  
                  return interaction.followUp({
                    embeds: [embed]
                  })
                }).catch(e => {
                  timeouterror = e
                })
              if (timeouterror)
                const embed = new Discord.MessageEmbed()
                  .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                  .setColor(es.wrongcolor)
                  .setDescription(`Cancelled the Operation!`.substr(0, 2000))
                  .setFooter(es.footertext, es.footericon)
              return interaction.followUp({
                embeds: [embed]
              })
            }else
            if(interaction.values === 'Anti Create Role Users/Roles'){
              let timeouterror = false
              const embed = new MessageEmbed()
                .setTitle("Which Role/User do you wanna add/remove?")
                .setColor(es.color)
                .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`).setFooter(es.footertext, es.footericon)
              let tempmsg = await interaction.channel.send({
                embeds: [embed]
              })
              await tempmsg.channel.awaitMessages(m => m.author.id == interaction.user.id, {
                  max: 1,
                  time: 90000,
                  errors: ["time"]
                })
                .then(async collected => {
                  let message = collected.first()
                  if (!message) throw "NO MESSAGE SENT";
                  let users = message.mentions.members.filter(r => r.guild.id == message.guild.id).map(r => r.id)
                  let roles = message.mentions.roles.filter(r => r.guild.id == message.guild.id).map(r => r.id)
                  let addedusers = [];
                  let addedroles = [];
                  let removedusers = [];
                  let removedroles = [];
                  let current = client.Anti_Nuke_System.get(interaction.guild.id, 'all.whitelisted');
                  for (const u of users) {
                    if (current.users.includes(u)) {
                      removedusers.push(u)
                    } else {
                      addedusers.push(u)
                    }
                  }
                  for (const r of roles) {
                    if (current.roles.includes(r)) {
                      removedroles.push(r)
                    } else {
                      addedroles.push(r)
                    }
                  }
                  for(const u of addedusers){
                    client.Anti_Nuke_System.push(interaction.guild.id, u, "anticreaterole.whitelisted.users")
                  }
                  for(const r of addedroles){
                    client.Anti_Nuke_System.push(interaction.guild.id, r, "anticreaterole.whitelisted.roles")
                  }
                  for(const u of removedusers){
                    client.Anti_Nuke_System.remove(interaction.guild.id, u, "anticreaterole.whitelisted.users")
                  }
                  for(const r of removedroles){
                    client.Anti_Nuke_System.remove(interaction.guild.id, r, "anticreaterole.whitelisted.roles")
                  }
                  const embed = new Discord.MessageEmbed()
                    .setTitle(`**Added [${addedroles.length}] Roles and [${addedusers.length}] Users to the __general__ Whitelist!**`)
                    .setColor(es.color)
                    .setDescription(`**Removed [${removedroles.length}] Roles and [${removedusers.length}] Users from the __general__ Whitelist!**`.substr(0, 2048))
                    .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                    .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                    .setFooter(es.footertext, es.footericon)
  
                  return interaction.followUp({
                    embeds: [embed]
                  })
                }).catch(e => {
                  timeouterror = e
                })
              if (timeouterror)
                const embed = new Discord.MessageEmbed()
                  .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                  .setColor(es.wrongcolor)
                  .setDescription(`Cancelled the Operation!`.substr(0, 2000))
                  .setFooter(es.footertext, es.footericon)
              return interaction.followUp({
                embeds: [embed]
              })
            }else
            if(interaction.values === 'Anti Delete Role Users/Roles'){
              let timeouterror = false
              const embed = new MessageEmbed()
                .setTitle("Which Role/User do you wanna add/remove?")
                .setColor(es.color)
                .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`).setFooter(es.footertext, es.footericon)
              let tempmsg = await interaction.channel.send({
                embeds: [embed]
              })
              await tempmsg.channel.awaitMessages(m => m.author.id == interaction.user.id, {
                  max: 1,
                  time: 90000,
                  errors: ["time"]
                })
                .then(async collected => {
                  let message = collected.first()
                  if (!message) throw "NO MESSAGE SENT";
                  let users = message.mentions.members.filter(r => r.guild.id == message.guild.id).map(r => r.id)
                  let roles = message.mentions.roles.filter(r => r.guild.id == message.guild.id).map(r => r.id)
                  let addedusers = [];
                  let addedroles = [];
                  let removedusers = [];
                  let removedroles = [];
                  let current = client.Anti_Nuke_System.get(interaction.guild.id, 'all.whitelisted');
                  for (const u of users) {
                    if (current.users.includes(u)) {
                      removedusers.push(u)
                    } else {
                      addedusers.push(u)
                    }
                  }
                  for (const r of roles) {
                    if (current.roles.includes(r)) {
                      removedroles.push(r)
                    } else {
                      addedroles.push(r)
                    }
                  }
                  for(const u of addedusers){
                    client.Anti_Nuke_System.push(message.guild.id, u, "antideleterole.whitelisted.users")
                  }
                  for(const r of addedroles){
                    client.Anti_Nuke_System.push(message.guild.id, r, "antideleterole.whitelisted.roles")
                  }
                  for(const u of removedusers){
                    client.Anti_Nuke_System.remove(message.guild.id, u, "antideleterole.whitelisted.users")
                  }
                  for(const r of removedroles){
                    client.Anti_Nuke_System.remove(message.guild.id, r, "antideleterole.whitelisted.roles")
                  }
                  const embed = new Discord.MessageEmbed()
                    .setTitle(`**Added [${addedroles.length}] Roles and [${addedusers.length}] Users to the __general__ Whitelist!**`)
                    .setColor(es.color)
                    .setDescription(`**Removed [${removedroles.length}] Roles and [${removedusers.length}] Users from the __general__ Whitelist!**`.substr(0, 2048))
                    .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                    .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                    .setFooter(es.footertext, es.footericon)
  
                  return interaction.followUp({
                    embeds: [embed]
                  })
                }).catch(e => {
                  timeouterror = e
                })
              if (timeouterror)
                const embed = new Discord.MessageEmbed()
                  .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                  .setColor(es.wrongcolor)
                  .setDescription(`Cancelled the Operation!`.substr(0, 2000))
                  .setFooter(es.footertext, es.footericon)
              return interaction.followUp({
                embeds: [embed]
              })
            }else
            if(interaction.values === 'Anti Create Channel Users/Roles'){
              let timeouterror = false
              const embed = new MessageEmbed()
                .setTitle("Which Role/User do you wanna add/remove?")
                .setColor(es.color)
                .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`).setFooter(es.footertext, es.footericon)
              let tempmsg = await interaction.channel.send({
                embeds: [embed]
              })
              await tempmsg.channel.awaitMessages(m => m.author.id == interaction.user.id, {
                  max: 1,
                  time: 90000,
                  errors: ["time"]
                })
                .then(async collected => {
                  let message = collected.first()
                  if (!message) throw "NO MESSAGE SENT";
                  let users = message.mentions.members.filter(r => r.guild.id == message.guild.id).map(r => r.id)
                  let roles = message.mentions.roles.filter(r => r.guild.id == message.guild.id).map(r => r.id)
                  let addedusers = [];
                  let addedroles = [];
                  let removedusers = [];
                  let removedroles = [];
                  let current = client.Anti_Nuke_System.get(interaction.guild.id, 'all.whitelisted');
                  for (const u of users) {
                    if (current.users.includes(u)) {
                      removedusers.push(u)
                    } else {
                      addedusers.push(u)
                    }
                  }
                  for (const r of roles) {
                    if (current.roles.includes(r)) {
                      removedroles.push(r)
                    } else {
                      addedroles.push(r)
                    }
                  }
                  for(const u of addedusers){
                    client.Anti_Nuke_System.push(interaction.guild.id, u, "antichanneldelete.whitelisted.users")
                  }
                  for(const r of addedroles){
                    client.Anti_Nuke_System.push(interaction.guild.id, r, "antichanneldelete.whitelisted.roles")
                  }
                  for(const u of removedusers){
                    client.Anti_Nuke_System.remove(interaction.guild.id, u, "antichanneldelete.whitelisted.users")
                  }
                  for(const r of removedroles){
                    client.Anti_Nuke_System.remove(interaction.guild.id, r, "antichanneldelete.whitelisted.roles")
                  }
                  const embed = new Discord.MessageEmbed()
                    .setTitle(`**Added [${addedroles.length}] Roles and [${addedusers.length}] Users to the __general__ Whitelist!**`)
                    .setColor(es.color)
                    .setDescription(`**Removed [${removedroles.length}] Roles and [${removedusers.length}] Users from the __general__ Whitelist!**`.substr(0, 2048))
                    .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                    .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                    .setFooter(es.footertext, es.footericon)
  
                  return interaction.followUp({
                    embeds: [embed]
                  })
                }).catch(e => {
                  timeouterror = e
                })
              if (timeouterror)
                const embed = new Discord.MessageEmbed()
                  .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                  .setColor(es.wrongcolor)
                  .setDescription(`Cancelled the Operation!`.substr(0, 2000))
                  .setFooter(es.footertext, es.footericon)
              return interaction.followUp({
                embeds: [embed]
              })
            }else
            if(interaction.values === 'Anti Delete Channel Users/Roles'){
              let timeouterror = false
              const embed = new MessageEmbed()
                .setTitle("Which Role/User do you wanna add/remove?")
                .setColor(es.color)
                .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`).setFooter(es.footertext, es.footericon)
              let tempmsg = await interaction.channel.send({
                embeds: [embed]
              })
              await tempmsg.channel.awaitMessages(m => m.author.id == interaction.user.id, {
                  max: 1,
                  time: 90000,
                  errors: ["time"]
                })
                .then(async collected => {
                  let message = collected.first()
                  if (!message) throw "NO MESSAGE SENT";
                  let users = message.mentions.members.filter(r => r.guild.id == message.guild.id).map(r => r.id)
                  let roles = message.mentions.roles.filter(r => r.guild.id == message.guild.id).map(r => r.id)
                  let addedusers = [];
                  let addedroles = [];
                  let removedusers = [];
                  let removedroles = [];
                  let current = client.Anti_Nuke_System.get(interaction.guild.id, 'all.whitelisted');
                  for (const u of users) {
                    if (current.users.includes(u)) {
                      removedusers.push(u)
                    } else {
                      addedusers.push(u)
                    }
                  }
                  for (const r of roles) {
                    if (current.roles.includes(r)) {
                      removedroles.push(r)
                    } else {
                      addedroles.push(r)
                    }
                  }
                  for(const u of addedusers){
                    client.Anti_Nuke_System.push(interaction.guild.id, u, "antichannelcreate.whitelisted.users")
                  }
                  for(const r of addedroles){
                    client.Anti_Nuke_System.push(interaction.guild.id, r, "antichannelcreate.whitelisted.roles")
                  }
                  for(const u of removedusers){
                    client.Anti_Nuke_System.remove(interaction.guild.id, u, "antichannelcreate.whitelisted.users")
                  }
                  for(const r of removedroles){
                    client.Anti_Nuke_System.remove(interaction.guild.id, r, "antichannelcreate.whitelisted.roles")
                  }
                  const embed = new Discord.MessageEmbed()
                    .setTitle(`**Added [${addedroles.length}] Roles and [${addedusers.length}] Users to the __general__ Whitelist!**`)
                    .setColor(es.color)
                    .setDescription(`**Removed [${removedroles.length}] Roles and [${removedusers.length}] Users from the __general__ Whitelist!**`.substr(0, 2048))
                    .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                    .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                    .setFooter(es.footertext, es.footericon)
  
                  return interaction.followUp({
                    embeds: [embed]
                  })
                }).catch(e => {
                  timeouterror = e
                })
              if (timeouterror)
                const embed = new Discord.MessageEmbed()
                  .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                  .setColor(es.wrongcolor)
                  .setDescription(`Cancelled the Operation!`.substr(0, 2000))
                  .setFooter(es.footertext, es.footericon)
              return interaction.followUp({
                embeds: [embed]
              })
            }
          })
        }else
        if(interaction.values === 'Manage Settings'){
          
        }
      })
    },
  };