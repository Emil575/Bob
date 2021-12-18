const { Client, CommandInteraction, MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'setup',
    description: 'Setup command, you can setup Antinuke and Ticket',
    type: 'CHAT_INPUT',
    userperm: [],
    botperm: [],
    ownerOnly: false,
    options:[
      {
      name: 'antinuke',
      description: 'setup antinuke in your Server',
      type: 'SUB_COMMAND'
    },
    {
      name: 'ticket',
      description: 'setup ticket in your Server',
      type: 'SUB_COMMAND'
    }
  ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      const [SUB_CMD] = args;
      if(SUB_CMD === 'antinuke'){
      const sellection = new MessageSelectMenu()
      .setCustomId('sellection')
      .setMaxValues(1)
      .setMinValues(1)
      .setPlaceholder('Click here')
      .addOptions({
              value: "information",
              label: 'Information',
              description: `Show Information about the Anti Nuke System`,
              emoji: "869468766529003560"
          }, {
              value: "managewhitelist",
              label: 'Manage Whitelist',
              description: `Allow/Deny Roles/Users who should not get affected`,
              emoji: "857334024087011378"
          }, {
              label: "Manage Settings",
              value: 'managesettings',
              description: `Enable/Disable & Change the Anti Nuke Settings`,
              emoji: "866089513654419466"
          }, {
              label: "Suggested Settings",
              value: 'suggestedsettings',
              description: `Use our suggested Settings!`,
              emoji: "866089515993792522"
          }, {
              label: "Sync Quarantine Role",
              value: 'syncquarantinerole',
              description: `Add Perm !VIEW_CH. to all Chans.for the Qu. Role`,
              emoji: "🔒"
          },

          {
              label: "Cancel",
              value: 'cancel',
              description: `Cancel and stop the Anti-Nuke-Setup!`,
              emoji: "862306766338523166"
          }
      )
  let MenuEmbed = new MessageEmbed()
      .setColor('RANDOM')
      .setAuthor("Anti Nuke Setup", "https://cdn.discordapp.com/attachments/820695790170275871/869657327941324860/PS7lwz7HwAAAABJRU5ErkJggg.png", "https://discord.gg/FQGXbypRf8")
      .setDescription("***Select what you need in the `Selection` down Below!***")
  const row = new MessageActionRow().addComponents(sellection)
  interaction.followUp({
      components: [row],
      embeds: [MenuEmbed],
      ephemeral: true
  })


client.on('interactionCreate', async (interaction) => {
  if (!interaction.isSelectMenu()) return
  if (interaction.customId == 'sellection') {
      if (interaction.values[0] == 'cancel') {
          interaction.reply({
              content: `:x: Cancelled the Setup!`,
              ephemeral: false
          })
          return
      } else
      if (interaction.values[0] == 'information') {
          const embed = new MessageEmbed()
              .setColor('RANDOM')
              .setTitle(`${client.Anti_Nuke_System.get(interaction.guild.id, "all.enabled") ? "<a:yes:833101995723194437> __**The Anti Nuke is enabled!**__": "<:no:833101993668771842> __**The Anti Nuke is disabled!**__"}`)
              .setDescription(`__**Anti Add Bot | ${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.ban.neededmonthcount")}\`**\n
                              __**Anti Kick/Ban | ${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Kicks / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Kicks / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.ban.neededmonthcount")}\`**\n
                              __**Anti Delete Role | ${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.ban.neededmonthcount")}\`**\n
                              __**Anti Delete Channel | ${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.ban.neededmonthcount")}\`**\n
                              __**Anti Create Role | ${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.ban.neededmonthcount")}\`**\n
                              __**Anti Create Channel | ${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.ban.neededmonthcount")}\`**\n
                              > ***This Setup is used to secure your Server***\n\n**Things it will protect:**\n> \`Watch Kicks & Bans\`\n> \`Watch Channel Creations & Deletions\`\n> \`Watch Role Creations & Deletions\`\n> \`Watch Add Bots\`\n\n> *If something Happens, and the settings are right, i will punish him by removing his role or kicking or banning him.**\n
                              ${client.Anti_Nuke_System.get(interaction.guild.id, "all.showwhitelistlog") ? "> <a:yes:833101995723194437> **I will show it when a Whitelisted User/Role makes an Action**\n> *But I won't do anything to him/her, cause he/she is whitelisted!*": "> <:no:833101993668771842> **I won't show it when a whitelisted User is doing something!**\n> This doesn't affect your security! (He is whitelisted, from the YOU)"}${client.Anti_Nuke_System.get(interaction.guild.id, "all.quarantine").length > 0 ? `\n\n> **I will add him/her the Quarantine Role: <@&${client.Anti_Nuke_System.get(interaction.guild.id, "all.quarantine")}> Role when removing the Roles!**` : "*NO Quarantine Role set, I will just remove his/her Roles / KICK / BAN..!*"}`)
              .setFooter(">>> __***When the allowed Actions / Time are reached, then i will do the punishments in []***__\n*I will also Kick the added Bot and delete the Created Role/Channel*")
          await interaction.reply({
              content: "<a:yes:833101995723194437> **The Current Anti-Nuke Settings**",
              embeds: [embed]
          })
      } else
      if (interaction.values[0] == 'managewhitelist') {
          const sellection = new MessageSelectMenu()
              .setCustomId('sellection2')
              .setMaxValues(1)
              .setMinValues(1)
              .setPlaceholder('Click here')
              .addOptions({
                  value: "generalusersroles",
                  label: 'General Users/Roles',
                  description: `Add/Remove General Users/Roles`,
                  emoji: "866089515993792522"
              }, {
                  value: "antibotaddusersroles",
                  label: 'Anti Bot Add Users/Roles',
                  description: `Add/Remove Anti-Bot-Add Users/Roles`,
                  emoji: "843943149902626846"
              }, {
                  label: "Anti Kick/Ban Users/Roles",
                  value: 'antikickbanusersroles',
                  description: `Add/Remove Anti-Kick/Ban Users/Roles`,
                  emoji: "843943149868023808"
              },{
                  label: "Anti Delete Role Users/Roles",
                  value: 'antideleteroleusersroles',
                  description: `Add/Remove Anti-Delete-Role Users/Roles`,
                  emoji: "843943149919535154"
              },{
                  label: "Anti Create Channel Users/Roles",
                  value: 'anticreatechannelusersroles',
                  description: `Add/Remove Anti-Create-Channel Users/Roles`,
                  emoji: "843943149759889439"
              }, {
                  label: "Anti Delete Channel Users/Roles",
                  value: 'antideletechannelusersroles',
                  description: `Add/Remove Anti-Delete-Channel Users/Roles`,
                  emoji: "843943150468857876"
              }, {
                  value: "cancel",
                  label: 'Cancel',
                  description: `Cancel and stop the Anti-Nuke-Setup!`,
                  emoji: "862306766338523166"
              })
          const row = new MessageActionRow()
              .addComponents(sellection)
          const embed = new MessageEmbed()
              .setAuthor("https://discord.gg/FQGXbypRf8")
              .setDescription("***Select what you need in the `Selection` down Below!***")
              .setColor('RANDOM')
          interaction.reply({
              embeds: [embed],
              components: [row]
          })
      }else
      if(interaction.values[0] == 'managesettings'){
          const Selection = new MessageSelectMenu()
          .setCustomId('MenuSelection')
          .setMaxValues(1)
          .setMinValues(1)
          .setPlaceholder('Click me to setup the Anti Nuke Settings!')
          .addOptions(
              {
                  label: client.Anti_Nuke_System.get(interaction.guild.id, "all.enabled") ? "Disable complete AntiNuke" : "Enable complete Anti Nuke",
                  value: 'enabledisable',
                  description: client.Anti_Nuke_System.get(interaction.guild.id, "all.enabled") ? "I will not work anymore" : "I will be enabled",
                  emoji: client.Anti_Nuke_System.get(interaction.guild.id, "all.enabled") ? "833101993668771842" : "833101995723194437"
              },
              {
                  label: "Set Logger",
                  value: 'logger',
                  description: `Define a (new) Logger Channel`,
                  emoji: "866089515993792522"
              },
              {
                  value: 'whitelistlog',
                  label: client.Anti_Nuke_System.get(interaction.guild.id, "all.showwhitelistlog") ? "Disable Whitelisted Log" : "Enable Whitelisted Log",
                  description: client.Anti_Nuke_System.get(interaction.guild.id, "all.showwhitelistlog") ? "I will not show when a whitelisted User makes smt" : "I will show when a whitelisted User makes smt (I won't do smt tho)",
                  emoji: client.Anti_Nuke_System.get(interaction.guild.id, "all.showwhitelistlog") ? "833101993668771842" : "833101995723194437"
              },
              {
                  label: "Modify Quarantine Role",
                  value: 'quarantine',
                  description: "Remove/add the Qurantine Role",
                  emoji: "865686493016096809"
              },
              {
                  label: "Cancel",
                  value: 'cancel',
                  description: `Cancel and stop the Anti-Nuke-Setup!`,
                  emoji: "862306766338523166"
              }
          )
          const row = new MessageActionRow()
          .addComponents(Selection)
          let MenuEmbed = new MessageEmbed()
          .setAuthor("Anti Nuke Settings", "https://cdn.discordapp.com/attachments/820695790170275871/869657327941324860/PS7lwz7HwAAAABJRU5ErkJggg.png", "https://discord.gg/FQGXbypRf8")
          .setDescription("***Select what you need in the `Selection` down Below!***")
          interaction.reply({
              embeds: [MenuEmbed],
              components: [row]
          })
      }else
          if(interaction.values[0] == 'suggestedsettings'){
              client.Anti_Nuke_System.set(interaction.guild.id, {
                  all: {
                    enabled: true,
                    logger: "no",
                    whitelisted: client.Anti_Nuke_System.get(interaction.guild.id, "all.whitelisted"),
                  },
                  antibot: {
                    enabled: true,
                    whitelisted: client.Anti_Nuke_System.get(interaction.guild.id, "antibot.whitelisted"),
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
                    whitelisted: client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.whitelisted"),
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
                    whitelisted: client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.whitelisted"),
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
                    whitelisted: client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.whitelisted"),
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
                    whitelisted: client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.whitelisted"),
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
                    whitelisted: client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.whitelisted"),
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
                return interaction.reply({
                    content: `<a:yes:833101995723194437> **Now using the Suggested Settings!**`,
                    embeds: [
                        new MessageEmbed()
                        .setColor('RANDOM')
                      .setTitle(`${client.Anti_Nuke_System.get(interaction.guild.id, "all.enabled") ? "<a:yes:833101995723194437> __**The Anti Nuke is enabled!**__": "<:no:833101993668771842> __**The Anti Nuke is disabled!**__"}`)
                      .setDescription(`__**Anti Add Bot | ${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.punishment.member.ban.neededmonthcount")}\`**\n
                              __**Anti Kick/Ban | ${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Kicks / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Kicks / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.punishment.member.ban.neededmonthcount")}\`**\n
                              __**Anti Delete Role | ${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.punishment.member.ban.neededmonthcount")}\`**\n
                              __**Anti Delete Channel | ${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.punishment.member.ban.neededmonthcount")}\`**\n
                              __**Anti Create Role | ${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.punishment.member.ban.neededmonthcount")}\`**\n
                              __**Anti Create Channel | ${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.enabled") ? "<a:yes:833101995723194437> Enabled ": "<:no:833101993668771842> Disabled"}**__`, `>>> [Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.removeroles.neededdaycount")}\`**\n[Remove Roles] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.removeroles.neededweekcount")}\`\n**[Remove Roles] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.removeroles.neededmonthcount")}\`**\n\n[Kick] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.kick.neededdaycount")}\`**\n[Kick] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.kick.neededweekcount")}\`\n**[Kick] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.kick.neededmonthcount")}\`**\n\n[Ban] **Actions / Day: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.ban.neededdaycount")}\`**\n[Ban] **Actions / Week: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.ban.neededweekcount")}\`\n**[Ban] **Actions / Month: \`${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.punishment.member.ban.neededmonthcount")}\`**\n
                              > ***This Setup is used to secure your Server***\n\n**Things it will protect:**\n> \`Watch Kicks & Bans\`\n> \`Watch Channel Creations & Deletions\`\n> \`Watch Role Creations & Deletions\`\n> \`Watch Add Bots\`\n\n> *If something Happens, and the settings are right, i will punish him by removing his role or kicking or banning him.**\n
                              ${client.Anti_Nuke_System.get(interaction.guild.id, "all.showwhitelistlog") ? "> <a:yes:833101995723194437> **I will show it when a Whitelisted User/Role makes an Action**\n> *But I won't do anything to him/her, cause he/she is whitelisted!*": "> <:no:833101993668771842> **I won't show it when a whitelisted User is doing something!**\n> This doesn't affect your security! (He is whitelisted, from the YOU)"}${client.Anti_Nuke_System.get(interaction.guild.id, "all.quarantine").length > 0 ? `\n\n> **I will add him/her the Quarantine Role: <@&${client.Anti_Nuke_System.get(interaction.guild.id, "all.quarantine")}> Role when removing the Roles!**` : "*NO Quarantine Role set, I will just remove his/her Roles / KICK / BAN..!*"}`)
                      .setFooter(">>> __***When the allowed Actions / Time are reached, then i will do the punishments in []***__\n*I will also Kick the added Bot and delete the Created Role/Channel*")
                    ]
                })
          }else 
              if(interaction.values[0] == 'syncquarantinerole'){
                  let role = client.Anti_Nuke_System.get(interaction.guild.id, 'all.quarantine');
                  if (!role || role.length <= 5) {
                      return interaction.reply({
                          content: "<:no:833101993668771842> **There is no Quarantine Role added yet!**\n> To add it go to 'Manage Settings' and Add the Quarantine Role!"
                      })
                  }
                  let channels = interaction.guild.channels.cache.filter(c => !c.permissionOverwrites.has(role) || (c.permissionOverwrites.has(role) && !c.permissionOverwrites.get(role).deny.toArray().includes("VIEW_CHANNEL")));
                  if(!channels || channels.size == 0){
                      return interaction.reply({
                          content: `<:no:833101993668771842> **All Channels in this Guild are denied to View the Channel for the <@&${role}> Role**`
                      })
                  }
                  interaction.reply({
                      content: `>>> <a:yes:833101995723194437> **Now Denying the <@&${role}> for ${channels.size} Channels, to View it!**\n\n<a:Loading:833101350623117342> **This might take up to \`${channels.size * 1.5} Seconds\`**`
                  })
                  for(const ch of channels){
                      try {
                          ch.permissionOverwrites.creat(role, {
                              VIEW_CHANNEL: false,
                              SEND_MESSAGES: false,
                              ADD_REACTIONS: false,
                              CONNECT: false,
                              SPEAK: false
                          });
                          await delay(1500);
                      } catch (e) {
                          console.log(String(e.stack).dim.red);
                      }
                  }
              }
  } else
  if (interaction.customId == 'sellection2') {
      if (interaction.values[0] == 'cancel') {
          interaction.reply({
              content: `:x: Cancelled the Setup!`,
              ephemeral: false
          })
          return
      } else
      if (interaction.values[0] == 'generalusersroles') {
          let timeouterror = false;
          const embed = new MessageEmbed()
              .setTitle("Which Role/User do you wanna add/remove?")
              .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`)
          let tempMsg = await interaction.channel.send({
              embeds: [embed]
          })
          await tempMsg.channel.awaitMessages({
                  max: 1,
                  time: 90000,
                  errors: ['time']
              })
              .then(async collected => {
                  var message = collected.first();
                  if(!message) throw "NO MESSAGE SENT";
                  let users = message.mentions.members.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
                  let roles = message.mentions.roles.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
                  if(!roles || !users) return interaction.reply({
                    ephemeral: true,
                    content: `Pls Mention a ROLE and a USER`
                  })
                  let addedusers = [];
                  let addedroles = [];
                  let removedusers = [];
                  let removedroles = [];
                  let current = client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted");
                  for(const u of users){
                    if(current.users.includes(u)){
                      removedusers.push(u)
                    }else {
                      addedusers.push(u)
                    }
                  }
                  for(const r of roles){
                    if(current.roles.includes(r)){
                      removedroles.push(r)
                    }else {
                      addedroles.push(r)
                    }
                  }
                  for(const u of addedusers){
                    client.Anti_Nuke_System.push(message.guild.id, u, "all.whitelisted.users")
                  }
                  for(const r of addedroles){
                    client.Anti_Nuke_System.push(message.guild.id, r, "all.whitelisted.roles")
                  }
                  for(const u of removedusers){
                    client.Anti_Nuke_System.remove(message.guild.id, u, "all.whitelisted.users")
                  }
                  for(const r of removedroles){
                    client.Anti_Nuke_System.remove(message.guild.id, r, "all.whitelisted.roles")
                  }
                  console.log('9')
                  console.log('Alles drin')
                  const embed2 = new MessageEmbed()
                      .setTitle(`**Added [${addedroles.length}] Roles and [${addedusers.length}] Users to the __general__ Whitelist!**`)
                      .setDescription(`**Removed [${removedroles.length}] Roles and [${removedusers.length}] Users from the __general__ Whitelist!**`.substring(0, 2048))
                      .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(interaction.guild.id, "all.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(interaction.guild.id, "all.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(interaction.guild.id, "all.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(interaction.guild.id, "all.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(interaction.guild.id, "all.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                      .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(interaction.guild.id, "all.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(interaction.guild.id, "all.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(interaction.guild.id, "all.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(interaction.guild.id, "all.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(interaction.guild.id, "all.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                      const data = client.Anti_Nuke_System.get(interaction.guild.id, `all.whitelisted`)
                      const data2 = client.Anti_Nuke_System.get(interaction.guild.id, `all.whitelisted.users`)
                      const data3 = client.Anti_Nuke_System.get(interaction.guild.id, `all.whitelisted.roles`)
                      console.log(data)
                      console.log(data2)
                      console.log(data3)
                      return interaction.channel.send({
                      embeds: [embed2]
                  })
              })
              .catch(e => {
                  timeouterror = e;
              })
              if(timeouterror)
              return interaction.reply({
                  embeds: [
                      new MessageEmbed()
                      .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                      .setDescription(`Cancelled the Operation!`.substring(0, 2000))
                  ]
              })
      } else
      if (interaction.values[0] == 'antibotaddusersroles') {
          let timeouterror = false
          const embed = new MessageEmbed()
              .setTitle("Which Role/User do you wanna add/remove?")
              .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`)
          let tempMSG = await interaction.channel.send({
              embeds: [embed]
          })
          await tempMSG.channel.awaitMessages({
                  max: 1,
                  time: 90000,
                  errors: ['time']
              })
              .then(async collected => {
                  var message = collected.first();
                  if(!message) throw "NO MESSAGE SENT";
                  let users = message.mentions.members.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
                  let roles = message.mentions.roles.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
                  if(!roles || !users) return interaction.reply({
                    ephemeral: true,
                    content: `Pls Mention a ROLE and a USER`
                  })
                  let addedusers = [];
                  let addedroles = [];
                  let removedusers = [];
                  let removedroles = [];
                  let current = client.Anti_Nuke_System.get(message.guild.id, "antibot.whitelisted");
                  for(const u of users){
                      if(current.users.includes(u)){
                        removedusers.push(u)
                      }else {
                        addedusers.push(u)
                      }
                    }
                    for(const r of roles){
                      if(current.roles.includes(r)){
                        removedroles.push(r)
                      }else {
                        addedroles.push(r)
                      }
                    }
                    for(const u of addedusers){
                      client.Anti_Nuke_System.push(message.guild.id, u, "antibot.whitelisted.users")
                    }
                    for(const r of addedroles){
                      client.Anti_Nuke_System.push(message.guild.id, r, "antibot.whitelisted.roles")
                    }
                    for(const u of removedusers){
                      client.Anti_Nuke_System.remove(message.guild.id, u, "antibot.whitelisted.users")
                    }
                    for(const r of removedroles){
                      client.Anti_Nuke_System.remove(message.guild.id, r, "antibot.whitelisted.roles")
                    }
                  const embed2 = new MessageEmbed()
                      .setTitle(`<:joines:866356465299488809> **Added \`[${addedroles.length}] Roles\` and \`[${addedusers.length}] Users\` to the __Anti Bot add__ Whitelist (module)!**`)
                      .setDescription(`<:leaves:866356598356049930> **Removed \`[${removedroles.length}] Roles\` and \`[${removedusers.length}] Users\` from the __Anti Bot add__ Whitelist (module)!**`.substring(0, 2048))
                      .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(interaction.guild.id, "antibot.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(interaction.guild.id, "antibot.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(interaction.guild.id, "antibot.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                      .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(interaction.guild.id, "antibot.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(interaction.guild.id, "antibot.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(interaction.guild.id, "antibot.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(interaction.guild.id, "antibot.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                  return interaction.reply({
                      embeds: [embed2]
                  })
              }).catch(e => {
                  timeouterror = e;
              })
          if(timeouterror)
          return interaction.reply({
              embeds: [
                  new MessageEmbed()
                  .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                  .setDescription(`Cancelled the Operation!`.substring(0, 2000))
              ]
          })
      } else
      if (interaction.values[0] == 'antikickbanusersroles') {
          let timeouterror = false;
          const embed = new MessageEmbed()
              .setTitle("Which Role/User do you wanna add/remove?")
              .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`)
          let tempMSG = await interaction.channel.send({
              embeds: [embed]
          })
          await tempMSG.channel.awaitMessages({
                  max: 1,
                  time: 90000,
                  errors: ['time']
              })
              .then(async collected => {
                  var message = collected.first();
                  if (!message) throw "NO MESSAGE SENT";
                  let users = message.mentions.members.filter(r => r.guild.id == message.guild.id).map(r => r.id);
                  let roles = message.mentions.roles.filter(r => r.guild.id == message.guild.id).map(r => r.id);
                  if(!roles || !users) return interaction.reply({
                    ephemeral: true,
                    content: `Pls Mention a ROLE and a USER`
                  })
                  let addedusers = [];
                  let addedroles = [];
                  let removedusers = [];
                  let removedroles = [];
                  let current = client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.whitelisted");
                  for(const u of users){
                      if(current.users.includes(u)){
                        removedusers.push(u)
                      }else {
                        addedusers.push(u)
                      }
                    }
                    for(const r of roles){
                      if(current.roles.includes(r)){
                        removedroles.push(r)
                      }else {
                        addedroles.push(r)
                      }
                    }
                    for(const u of addedusers){
                      client.Anti_Nuke_System.push(message.guild.id, u, "antideleteuser.whitelisted.users")
                    }
                    for(const r of addedroles){
                      client.Anti_Nuke_System.push(message.guild.id, r, "antideleteuser.whitelisted.roles")
                    }
                    for(const u of removedusers){
                      client.Anti_Nuke_System.remove(message.guild.id, u, "antideleteuser.whitelisted.users")
                    }
                    for(const r of removedroles){
                      client.Anti_Nuke_System.remove(message.guild.id, r, "antideleteuser.whitelisted.roles")
                    }
                  const embed2 = new MessageEmbed()
                      .setTitle(`<:joines:866356465299488809> **Added \`[${addedroles.length}] Roles\` and \`[${addedusers.length}] Users\` to the __Anti Kick/Ban__ Whitelist (module)!**`)
                      .setDescription(`<:leaves:866356598356049930> **Removed \`[${removedroles.length}] Roles\` and \`[${removedusers.length}] Users\` from the __Anti Kick/Ban__ Whitelist (module)!**`.substring(0, 2048))
                      .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                      .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(interaction.guild.id, "antideleteuser.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                  return interaction.reply({
                      embeds: [embed2]
                  })
              })
              .catch(e => {
                  timeouterror = e
              })
              if(timeouterror)
              return interaction.reply({
                  embeds: [
                      new MessageEmbed()
                      .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                      .setDescription(`Cancelled the Operation!`.substring(0, 2000))
                  ]
              })
      } else
      if (interaction.values[0] == 'Anti Create Role Users/Roles') {
          let timeouterror = false;
          const embed = new MessageEmbed()
              .setTitle("Which Role/User do you wanna add/remove?")
              .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`)
          const tempMSG = await interaction.channel.send({
              embeds: [embed]
          })
          await tempMSG.channel.awaitMessages({
              max: 1,
              time: 90000,
              errors: ['time']
          }).then(async collected => {
              var message = collected.first();
              if (!message) throw "NO MESSAGE SENT";
              let users = message.mentions.members.filter(r => r.guild.id == message.guild.id).map(r => r.id);
              let roles = message.mentions.roles.filter(r => r.guild.id == message.guild.id).map(r => r.id);
              if(!roles || !users) return interaction.reply({
                ephemeral: true,
                content: `Pls Mention a ROLE and a USER`
              })
              let addedusers = [];
              let addedroles = [];
              let removedusers = [];
              let removedroles = [];
              let current = client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.whitelisted");
              for(const u of users){
                  if(current.users.includes(u)){
                    removedusers.push(u)
                  }else {
                    addedusers.push(u)
                  }
                }
                for(const r of roles){
                  if(current.roles.includes(r)){
                    removedroles.push(r)
                  }else {
                    addedroles.push(r)
                  }
                }
                for(const u of addedusers){
                  client.Anti_Nuke_System.push(message.guild.id, u, "anticreaterole.whitelisted.users")
                }
                for(const r of addedroles){
                  client.Anti_Nuke_System.push(message.guild.id, r, "anticreaterole.whitelisted.roles")
                }
                for(const u of removedusers){
                  client.Anti_Nuke_System.remove(message.guild.id, u, "anticreaterole.whitelisted.users")
                }
                for(const r of removedroles){
                  client.Anti_Nuke_System.remove(message.guild.id, r, "anticreaterole.whitelisted.roles")
                }
              const embed2 = new MessageEmbed()
                  .setTitle(`<:joines:866356465299488809> **Added \`[${addedroles.length}] Roles\` and \`[${addedusers.length}] Users\` to the __Anti Create Role__ Whitelist (module)!**`)
                  .setDescription(`<:leaves:866356598356049930> **Removed \`[${removedroles.length}] Roles\` and \`[${removedusers.length}] Users\` from the __Anti Create Role__ Whitelist (module)!**`.substring(0, 2048))
                  .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                  .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(interaction.guild.id, "anticreaterole.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
              return interaction.reply({
                  embeds: [embed2]
              })
          }).catch(e => {
              timeouterror = e
          })
          if(timeouterror)
          return interaction.reply({
              embeds: [
                  new MessageEmbed()
                  .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                  .setDescription(`Cancelled the Operation!`.substring(0, 2000))
              ]
          })
      } else
      if (interaction.values[0] == 'antideleteroleusersroles') {
          let timeouterror = false;
          const embed = new MessageEmbed()
              .setTitle("Which Role/User do you wanna add/remove?")
              .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`)
          let tempMSG = await interaction.channel.send({
              embeds: [embed]
          })
          await tempMSG.channel.awaitMessages({
                  max: 1,
                  time: 90000,
                  errors: ['time']
              })
              .then(async collected => {
                  var message = collected.first();
                  if (!message) throw "NO MESSAGE SENT";
                  let users = message.mentions.members.filter(r => r.guild.id == message.guild.id).map(r => r.id);
                  let roles = message.mentions.roles.filter(r => r.guild.id == message.guild.id).map(r => r.id);
                  if (!roles || !users) return interaction.reply({
                      content: `Pls Mention a ROLE and a USER`
                  })
                  let addedusers = [];
                  let addedroles = [];
                  let removedusers = [];
                  let removedroles = [];
                  let current = client.Anti_Nuke_System.get(message.guild.id, "antideleterole.whitelisted");
                  for(const u of users){
                      if(current.users.includes(u)){
                        removedusers.push(u)
                      }else {
                        addedusers.push(u)
                      }
                    }
                    for(const r of roles){
                      if(current.roles.includes(r)){
                        removedroles.push(r)
                      }else {
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
                  const embed2 = new MessageEmbed()
                      .setTitle(`<:joines:866356465299488809> **Added \`[${addedroles.length}] Roles\` and \`[${addedusers.length}] Users\` to the __Anti Delete Role__ Whitelist (module)!**`)
                      .setDescription(`<:leaves:866356598356049930> **Removed \`[${removedroles.length}] Roles\` and \`[${removedusers.length}] Users\` from the __Anti Delete Role__ Whitelist (module)!**`.substring(0, 2048))
                      .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                      .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(interaction.guild.id, "antideleterole.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                  return interaction.reply({
                      embeds: [embed2]
                  })
              })
              .catch(e => {
                  timeouterror = e;
              })
              if(timeouterror)
              return interaction.reply({
                  embeds: [
                      new MessageEmbed()
                      .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                      .setDescription(`Cancelled the Operation!`.substring(0, 2000))
                  ]
              })
      }else
      if(interaction.values[0] == 'anticreatechannelusersroles'){
          let timeouterror = false;
          const embed = new MessageEmbed()
          .setTitle("Which Role/User do you wanna add/remove?")
          .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`)
      let tempMSG = await interaction.channel.send({
          embeds: [embed]
      })
      await tempMSG.channel.awaitMessages({
          max: 1,
          time: 90000,
          errors: ['time']
      })
      .then(async collected => {
          var message = collected.first();
        if (!message) throw "NO MESSAGE SENT";
        let users = message.mentions.members.filter(r => r.guild.id == message.guild.id).map(r => r.id);
        let roles = message.mentions.roles.filter(r => r.guild.id == message.guild.id).map(r => r.id);
        if(!roles || !users) return interaction.reply({
          ephemeral: true,
          content: `Pls Mention a ROLE and a USER`
        })
        let addedusers = [];
        let addedroles = [];
        let removedusers = [];
        let removedroles = [];
        let current = client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.whitelisted");
          for(const u of users){
              if(current.users.includes(u)){
                removedusers.push(u)
              }else {
                addedusers.push(u)
              }
            }
            for(const r of roles){
              if(current.roles.includes(r)){
                removedroles.push(r)
              }else {
                addedroles.push(r)
              }
            }
            for(const u of addedusers){
              client.Anti_Nuke_System.push(message.guild.id, u, "antichanneldelete.whitelisted.users")
            }
            for(const r of addedroles){
              client.Anti_Nuke_System.push(message.guild.id, r, "antichanneldelete.whitelisted.roles")
            }
            for(const u of removedusers){
              client.Anti_Nuke_System.remove(message.guild.id, u, "antichanneldelete.whitelisted.users")
            }
            for(const r of removedroles){
              client.Anti_Nuke_System.remove(message.guild.id, r, "antichanneldelete.whitelisted.roles")
            }
            const embed2 = new MessageEmbed()
            .setTitle(`<:joines:866356465299488809> **Added \`[${addedroles.length}] Roles\` and \`[${addedusers.length}] Users\` to the __Anti Channel Create__ Whitelist (module)!**`)
            .setDescription(`<:leaves:866356598356049930> **Removed \`[${removedroles.length}] Roles\` and \`[${removedusers.length}] Users\` from the __Anti Channel Create__ Whitelist (module)!**`.substring(0, 2048))
            .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
            .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(interaction.guild.id, "antichanneldelete.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
            return interaction.reply({
                embeds: [embed2]
            })
      }).catch(e => {
          timeouterror = e;
      })
      if(timeouterror)
      return interaction.reply({
          embeds: [
              new MessageEmbed()
              .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
              .setDescription(`Cancelled the Operation!`.substring(0, 2000))
          ]
      })
      }else
      if(interaction.values[0] == 'antideletechannelusersroles'){
          let timeouterror = false;
          const embed = new MessageEmbed()
          .setTitle("Which Role/User do you wanna add/remove?")
          .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`)
      let tempMSG = await interaction.channel.send({
          embeds: [embed]
      })
      await tempMSG.channel.awaitMessages({
          max: 1,
          time: 90000,
          errors: ['time']
      })
      .then(async collected => {
          var message = collected.first();
        if (!message) throw "NO MESSAGE SENT";
        let users = message.mentions.members.filter(r => r.guild.id == message.guild.id).map(r => r.id);
        let roles = message.mentions.roles.filter(r => r.guild.id == message.guild.id).map(r => r.id);
        if(!roles || !users) return interaction.reply({
          ephemeral: true,
          content: `Pls Mention a ROLE and a USER`
        })
        let addedusers = [];
        let addedroles = [];
        let removedusers = [];
        let removedroles = [];
        let current = client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.whitelisted");
        for(const u of users){
          if(current.users.includes(u)){
            removedusers.push(u)
          }else {
            addedusers.push(u)
          }
        }
        for(const r of roles){
          if(current.roles.includes(r)){
            removedroles.push(r)
          }else {
            addedroles.push(r)
          }
        }
        for(const u of addedusers){
          client.Anti_Nuke_System.push(message.guild.id, u, "antichannelcreate.whitelisted.users")
        }
        for(const r of addedroles){
          client.Anti_Nuke_System.push(message.guild.id, r, "antichannelcreate.whitelisted.roles")
        }
        for(const u of removedusers){
          client.Anti_Nuke_System.remove(message.guild.id, u, "antichannelcreate.whitelisted.users")
        }
        for(const r of removedroles){
          client.Anti_Nuke_System.remove(message.guild.id, r, "antichannelcreate.whitelisted.roles")
        }
        const embed = new MessageEmbed()
        .setTitle(`<:joines:866356465299488809> **Added \`[${addedroles.length}] Roles\` and \`[${addedusers.length}] Users\` to the __Anti Channel Delete__ Whitelist (module)!**`)
        .setDescription(`<:leaves:866356598356049930> **Removed \`[${removedroles.length}] Roles\` and \`[${removedusers.length}] Users\` from the __Anti Channel Delete__ Whitelist (module)!**`.substring(0, 2048))
        .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
        .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(interaction.guild.id, "antichannelcreate.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
      })
      interaction.reply({
          embeds: [embed]
      })
      .catch(e => {
          timeouterror = e;
      })
      if(timeouterror)
      return interaction.reply({
          embeds: [
          new MessageEmbed()
          .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
          .setDescription(`Cancelled the Operation!`.substring(0, 2000))
      ]
      })
      }else {
          return interaction.reply({
              content: "<:no:833101993668771842> **This is not finished yet, no worries the System itself works!**"
          })
      }
  }else
  if(interaction.customId == 'MenuSelection'){
      if(interaction.values[0] == 'cancel'){
          return interaction.followUp({
              content: ":x: Cancelled the Setup!"
          })
      }else
      if(interaction.values[0] == 'enabledisable'){
          client.Anti_Nuke_System.set(interaction.guild.id, !client.Anti_Nuke_System.get(interaction.guild.id, "all.enabled"), "all.enabled")
          const embed = new MessageEmbed()
      .setTitle(`**Successfully __${client.Anti_Nuke_System.get(interaction.guild.id, "all.enabled") ? "Enabled" : "Disabled"}__ the Anti-Nuke System**`)
      .setDescription(`**I will now${client.Anti_Nuke_System.get(interaction.guild.id, "all.enabled") ? "" : " not"} the Anti-Nuke System!**\n> But please mind the Settings of each Module!`)
      .addField("\u200b", "**DONT FORGET TO ADD WHITELISTED USERS/BOTS/ROLES**\n**For Example:** *If you have a join-to-create Bot add him, at least for channel creations!*")
          return interaction.reply({
              embeds: [embed]
          })
      }else
      if(interaction.values[0] == 'logger'){
          let timeouterror = false;
          const embed = new MessageEmbed()
          .setTitle("Which Channel do you wanna use?")
          .setDescription(`*Just ping the channel with #channel in the Chat*`)
          let tempMSG = await interaction.channel.send({
              embeds: [embed]
          })
          await tempMSG.channel.awaitMessages({
              max: 1,
              time: 9000,
              errors: ['time']
          })
          .then(async collected => {
              var message = collected.first();
              if (!message) throw "NO MESSAGE SENT";
              if(message.mentions.channels.filter(ch => ch.guild.id == message.guild.id).first()){
                  try {
                      message.mentions.channels.filter(ch => ch.guild.id == message.guild.id).first().send({
                          embeds: [
                              new MessageEmbed()
                              .setTitle(`<a:yes:833101995723194437> This Channel is now the Anti Nuke Logger!`)
                              .setDescription(`**Here are some Infos:**\n>>> In the **FOOTER** (bottom), will be Informations (ID & AVATAR) of the EXECUTOR\nIn the **AUTHOR** (top), will be information about the **METHOD**\n\nIf there is a **Thumbnail**, it will be the **TARGET INFORMATION**\n\nEvery Embed, which is **GREEN**, is a security action from **ME**\nEvery Embed in **YELLOW** is a **WARN**\nEvery Embed in **ORANGE** is a **KICK**\nEvery Embed in **RED** is a **BAN**\nEvery Embed in **BLURPLE** is a **Remove Role**`.substring(0, 2048))
                          ]
                      })
                  } catch (e) {
                      console.log(e.stack ? String(e.stack).red : String(e).red)
                  }
                  try {
                      message.channel.send({
                          embeds: [
                              new MessageEmbed()
                              .setTitle(`<a:yes:833101995723194437> ${ message.mentions.channels.filter(ch=>ch.guild.id==message.guild.id).first().name} is now the Anti Nuke Logger!`)
                              .setDescription(`**Here are some Infos:**\n>>> In the **FOOTER** (bottom), will be Informations (ID & AVATAR) of the EXECUTOR\nIn the **AUTHOR** (top), will be information about the **METHOD**\n\nIf there is a **Thumbnail**, it will be the **TARGET INFORMATION**\n\nEvery Embed, which is **GREEN**, is a security action from **ME**\nEvery Embed in **YELLOW** is a **WARN**\nEvery Embed in **ORANGE** is a **KICK**\nEvery Embed in **RED** is a **BAN**\nEvery Embed in **BLURPLE** is a **Remove Role**`.substring(0, 2048))
                          ]
                      })
                  } catch (e) {
                      console.log(e.stack ? String(e.stack).red : String(e).red)
                  }
                  client.Anti_Nuke_System.set(interaction.guild.id, message.mentions.channels.filter(ch => ch.guild.id == message.guild.id).first().id, `all.logger`)
                  return interaction.reply({
                      embeds: [
                          new MessageEmbed()
                          .setTitle(`<a:yes:833101995723194437> The Channel: \`${message.mentions.channels.filter(ch=>ch.guild.id==message.guild.id).first().name}\` is now registered as the Anti-Nuke logger`)
                          .setDescription(`If some Anti-Nuke actions are needed to be executed, i will log them there!`.substring(0, 2048))
                      ]
                  })
              }else{
                  throw "NO CHANNEL PINGED"
              }
          })
          .catch(e => {
              timeouterror = e;
          })
          if(timeouterror)
          return interaction.reply({
              embeds: [
                  new MessageEmbed()
                  .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                  .setDescription(`Cancelled the Operation!`.substring(0, 2000))
              ]
          })
      }else
      if(interaction.values[0] == 'whitelistlog'){
          client.Anti_Nuke_System.set(interaction.guild.id, !client.Anti_Nuke_System.get(interaction.guild.id, "all.showwhitelistlog"), "all.showwhitelistlog")
          return interaction.reply({
              embeds: [
                  new MessageEmbed()
                  .setTitle(`**Successfully __${client.Anti_Nuke_System.get(interaction.guild.id, "all.showwhitelistlog") ? "Enabled" : "Disabled"}__ the Whitelisted Log**`)
                  .setDescription(`**I will now${client.Anti_Nuke_System.get(interaction.guild.id, "all.showwhitelistlog") ? "" : " not"} show it, when a Whitelisted User / Role makes something**\n> But please mind the Settings of each Module!${client.Anti_Nuke_System.get(interaction.guild.id, "all.showwhitelistlog") ? "\n\n> Tho this is enabled it does **not** mean i will punish the Whitelisted User, this is **just the Logging** for it!\n> ***So that you know, when what happens!***" : ""}`)
                  .addField("\u200b", "**DONT FORGET TO ADD WHITELISTED USERS/BOTS/ROLES**\n**For Example:** *If you have a join-to-create Bot add him, at least for channel creations!*")
              ]
          });
      }else
      if(interaction.values[0] == 'quarantine'){
          let timeouterror = false;
          let tmepMSG = await interaction.channel.send({
              embeds: [ new MessageEmbed()
              .setTitle("Which Role do you wanna use as the Quranatine Role?")
              .setDescription(`> *Just ping the Role with @Role in the Chat*\n> Write \`no\` if you wanna disable/remove it!\n\nThis Role will be added, if the User gets the roles removed!\n> You can also ran a command in the \`/setup-antinuke\` to set all channels to not visible when having this Role!`)
              ]
          })
          await tmepMSG.channel.awaitMessages({
              max: 1,
              time: 90000,
              errors: ['time']
          })
          .then(async collected => {
              var message = collected.first();
              if (!message || !message.content) throw "NO MESSAGE SENT";
              if(message.content.toLowerCase() == 'no'){
                  client.Anti_Nuke_System.set(interaction.guild.id, false, `all.quarantine`)
                  return interaction.reply({
                      embeds: [
                          new MessageEmbed()
                          .setTitle(`<a:yes:833101995723194437> The Quarantine Role is now disabled!`)
                      ]
                  })
              }
              if(message.mentions.roles.filter(r => r.guild.id == message.guild.id).first()) {
                  client.Anti_Nuke_System.set(interaction.guild.id, message.mentions.roles.filter(r => r.guild.id == message.guild.id).first().id, `all.quarantine`)
                  return interaction.reply({
                      embeds: [
                          new MessageEmbed()
                          .setTitle(`<a:yes:833101995723194437> The Role: \`${message.mentions.roles.filter(r=>r.guild.id==message.guild.id).first().name}\` is now registered as the Quarantine Role`)
                          .setDescription(`This Role will be added, if the User gets the roles removed!\n> You can also ran a command in the \`/setup-antinuke\` to set all channels to not visible when having this Role!`.substring(0, 2048))
                      ]
                  })
              }else {
                  throw "NO CHANNEL PINGED";
              }
          })
          .catch(e => {
              timeouterror = e;
          })
          if(timeouterror)
            return interaction.reply({
                embeds: [
                    new MessageEmbed()
                    .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                    .setDescription(`Cancelled the Operation!`.substring(0, 2000))
                ]
            })
      }else {
          return interaction.followUp({
              content: "<:no:833101993668771842> **This is not finished yet, no worries the System itself works!**"
          })
      }
  }
})
}else
if(SUB_CMD === 'ticket'){
  
}
    },
};


function delay(delayInms) {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(2);
        }, delayInms);
      });
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }
/**
 * @INFO
 * Bot Coded by EmiL#8665 | https://discord.gg/FQGXbypRf8
 * @INFO
 * Code from Milrato Development | https://milrato.eu
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */