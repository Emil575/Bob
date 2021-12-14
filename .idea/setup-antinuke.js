var {
  MessageEmbed
} = require(`discord.js`);
var Discord = require(`discord.js`);
const {  MessageMenuOption, MessageMenu } = require('discord-buttons')
module.exports = {
  name: "setup-antinuke",
  category: "💪 Setup",
  aliases: ["setupantinuke", "antinuke-setup", "antinukesetup", "antinukesystem"],
  cooldown: 5,
  usage: "setup-antinuke --> Follow Steps",
  description: "Manage the Anti Nuke System",
  memberpermissions: ["ADMINISTRATOR"],
  run: async (client, message, args, cmduser, text, prefix) => {
    //only allow the Server owner, (&Tomato) to execute this Command, (Tomato just because if he needs to help for Shop Bots)
    if(message.author.id != message.guild.ownerID && message.author.id != "442355791412854784"){
      return message.reply("<:no:833101993668771842> **Only the Server Owner is allowed to execute this Command!**\n> *This was a wish from the Community..*")
    }
    var es = {
      "color": "#fffff9",
      "wrongcolor": "#e01e01",
      "footertext": "Clan Bot | powered by milrato.eu",
      "footericon": "https://cdn.discordapp.com/avatars/784364932149280778/58af253f0e865c8669e31092abd8cad2.webp"
    };    
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
      first_layer()
      async function first_layer(){
        let menuoptions = [
          {
            value: "Information",
            description: `Show Information about the Anti Nuke System`,
            emoji: "869468766529003560"
          },
          {
            value: "Manage Whitelist",
            description: `Allow/Deny Roles/Users who should not get affected`,
            emoji: "857334024087011378"
          },
          {
            value: "Manage Settings",
            description: `Enable/Disable & Change the Anti Nuke Settings`,
            emoji: "866089513654419466"
          },
          {
            value: "Suggested Settings",
            description: `Use our suggested Settings!`,
            emoji: "866089515993792522"
          },
          {
            value: "Sync Quarantine Role",
            description: `Add Perm !VIEW_CH. to all Chans.for the Qu. Role`,
            emoji: "🔒"
          },
          
          {
            value: "Cancel",
            description: `Cancel and stop the Anti-Nuke-Setup!`,
            emoji: "862306766338523166"
          }
        ]
        //define the selection
        let Selection = new MessageMenu()
          .setID('MenuSelection') 
          .setMaxValues(1) //OPTIONAL, this is how many values you can have at each selection
          .setMinValues(1) //OPTIONAL , this is how many values you need to have at each selection
          .setPlaceholder('Click me to setup the Anti Nuke System!');  //message in the content placeholder
        menuoptions.forEach(option => {
          let row = new MessageMenuOption()
            .setLabel(option.label ? option.label.substr(0, 25) : option.value.substr(0, 25))
            .setValue(option.value) 
            .setDescription(option.description.substr(0, 50)) 
            .setDefault() 
          if(option.emoji) row.setEmoji(option.emoji) 
          Selection.addOption(row)
        })
        
        //define the embed
        let MenuEmbed = new Discord.MessageEmbed()
        .setColor(es.color)
        .setAuthor("Anti Nuke Setup", "https://cdn.discordapp.com/attachments/820695790170275871/869657327941324860/PS7lwz7HwAAAABJRU5ErkJggg.png", "https://discord.gg/FQGXbypRf8")
        .setDescription("***Select what you need in the `Selection` down Below!***")
        let used1 = false;
        //send the menu msg
        let menumsg = await message.channel.send(MenuEmbed, Selection)
        //function to handle the menuselection
        async function menuselection(menu) {
          if(menu.values[0] == "Cancel") return menu.reply.send(":x: Cancelled the Setup!")
          used1 = true;
          if(menu.values[0] == "Information"){
            
            await message.channel.send("<a:yes:833101995723194437> **The Current Anti-Nuke Settings**",{ content: "<a:yes:833101995723194437> **The Current Anti-Nuke Settings**", embed: new MessageEmbed()
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
            });
            return menu.reply.send({embed: new MessageEmbed()
            .setColor(es.color)
            .setFooter(es.footertext, es.footericon)
            .setDescription(`> ***This Setup is used to secure your Server***\n\n**Things it will protect:**\n> \`Watch Kicks & Bans\`\n> \`Watch Channel Creations & Deletions\`\n> \`Watch Role Creations & Deletions\`\n> \`Watch Add Bots\`\n\n> *If something Happens, and the settings are right, i will punish him by removing his role or kicking or banning him.*`)
            .addField("**Other Security Systems:**", `\`${prefix}setup-antidiscord\` *... Enable/Disable & Adjust anti Discord Invite Links*\n\`${prefix}setup-antilink\` *... Enable/Disable & Adjust anti Links*\n\`${prefix}setup-anticaps\` *... Enable/Disable & Adjust anti Caps spamming*\n\`${prefix}setup-blacklist\` *... to add/remove Bad (blacklsited) Words*`)
          });
          } 
          else if(menu.values[0] == "Manage Whitelist"){
            menu.reply.defer();
            menuoptions = [
              {
                value: "General Users/Roles",
                description: `Add/Remove General Users/Roles`,
                emoji: "866089515993792522"
              },
              {
                value: "Anti Bot Add Users/Roles",
                description: `Add/Remove Anti-Bot-Add Users/Roles`,
                emoji: "843943149902626846"
              },
              {
                value: "Anti Kick/Ban Users/Roles",
                description: `Add/Remove Anti-Kick/Ban Users/Roles`,
                emoji: "843943149868023808"
              },
              {
                value: "Anti Create Role Users/Roles",
                description: `Add/Remove Anti-Create-Role Users/Roles`,
                emoji: "843943149914554388"
              },
              {
                value: "Anti Delete Role Users/Roles",
                description: `Add/Remove Anti-Delete-Role Users/Roles`,
                emoji: "843943149919535154"
              },
              {
                value: "Anti Create Channel Users/Roles",
                description: `Add/Remove Anti-Create-Channel Users/Roles`,
                emoji: "843943149759889439"
              },
              {
                value: "Anti Delete Channel Users/Roles",
                description: `Add/Remove Anti-Delete-Channel Users/Roles`,
                emoji: "843943150468857876"
              },
              {
                value: "Cancel",
                description: `Cancel and stop the Anti-Nuke-Setup!`,
                emoji: "862306766338523166"
              }
            ]
            //define the selection
            let Selection = new MessageMenu()
              .setID('MenuSelection') 
              .setMaxValues(1) //OPTIONAL, this is how many values you can have at each selection
              .setMinValues(1) //OPTIONAL , this is how many values you need to have at each selection
              .setPlaceholder('Click me to setup the Anti Nuke Settings!');  //message in the content placeholder
            menuoptions.forEach(option => {
              let row = new MessageMenuOption()
                .setLabel(option.label ? option.label.substr(0, 25) : option.value.substr(0, 25))
                .setValue(option.value) 
                .setDescription(option.description.substr(0, 50)) 
                .setDefault() 
              if(option.emoji) row.setEmoji(option.emoji) 
              Selection.addOption(row)
            })
            
            //define the embed
            let MenuEmbed = new Discord.MessageEmbed()
            .setColor(es.color)
            .setAuthor("https://discord.gg/FQGXbypRf8")
            .setDescription("***Select what you need in the `Selection` down Below!***")
            let used1 = false;
            //send the menu msg
            let menumsg = await message.channel.send(MenuEmbed, Selection)
            //function to handle the menuselection
            async function menuselection2(menu) {
              if(menu.values[0] == "Cancel") return menu.reply.send(":x: Cancelled the Setup!")
              used1 = true;
              let index = menuoptions.findIndex(v=>v.value == menu.values[0])
              //Toggle
              if(String(index) == "0"){
                menu.reply.defer();
                let timeouterror = false;
                let tempmsg = await message.channel.send({embed: new Discord.MessageEmbed()
                  .setTitle("Which Role/User do you wanna add/remove?")
                  .setColor(es.color)
                  .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`).setFooter(es.footertext, es.footericon)
                })
                await tempmsg.channel.awaitMessages(m=>m.author.id == message.author.id, {
                    max: 1,
                    time: 90000,
                    errors: ["time"]
                  })
                  .then(async collected => {
                    var message = collected.first();
                    if(!message) throw "NO MESSAGE SENT";
                    let users = message.mentions.members.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
                    let roles = message.mentions.roles.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
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
                  
                    return message.reply({embed: new Discord.MessageEmbed()
                      .setTitle(`**Added [${addedroles.length}] Roles and [${addedusers.length}] Users to the __general__ Whitelist!**`)
                      .setColor(es.color)
                      .setDescription(`**Removed [${removedroles.length}] Roles and [${removedusers.length}] Users from the __general__ Whitelist!**`.substr(0, 2048))
                      .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                      .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                      .setFooter(es.footertext, es.footericon)
                    });
                  })
                  .catch(e => {
                    timeouterror = e;
                  })
                if (timeouterror)
                  return message.reply({embed: new Discord.MessageEmbed()
                    .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                    .setColor(es.wrongcolor)
                    .setDescription(`Cancelled the Operation!`.substr(0, 2000))
                    .setFooter(es.footertext, es.footericon)
                  });
              } else if(String(index) == "1"){
                menu.reply.defer();
                let timeouterror = false;
                let tempmsg = await message.channel.send({embed: new Discord.MessageEmbed()
                  .setTitle("Which Role/User do you wanna add/remove?")
                  .setColor(es.color)
                  .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`).setFooter(es.footertext, es.footericon)
                })
                await tempmsg.channel.awaitMessages(m=>m.author.id == message.author.id, {
                    max: 1,
                    time: 90000,
                    errors: ["time"]
                  })
                  .then(async collected => {
                    var message = collected.first();
                    if(!message) throw "NO MESSAGE SENT";
                    let users = message.mentions.members.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
                    let roles = message.mentions.roles.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
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
                  
                    return message.reply({embed: new Discord.MessageEmbed()
                      .setTitle(`<:joines:866356465299488809> **Added \`[${addedroles.length}] Roles\` and \`[${addedusers.length}] Users\` to the __Anti Bot add__ Whitelist (module)!**`)
                      .setColor(es.color)
                      .setDescription(`<:leaves:866356598356049930> **Removed \`[${removedroles.length}] Roles\` and \`[${removedusers.length}] Users\` from the __Anti Bot add__ Whitelist (module)!**`.substr(0, 2048))
                      .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "antibot.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "antibot.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "antibot.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "antibot.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "antibot.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                      .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "antibot.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "antibot.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "antibot.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "antibot.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "antibot.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                      .setFooter(es.footertext, es.footericon)
                    });
                  })
                  .catch(e => {
                    timeouterror = e;
                  })
                if (timeouterror)
                  return message.reply({embed: new Discord.MessageEmbed()
                    .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                    .setColor(es.wrongcolor)
                    .setDescription(`Cancelled the Operation!`.substr(0, 2000))
                    .setFooter(es.footertext, es.footericon)
                  });
              } else if(String(index) == "2"){
                menu.reply.defer();
                let timeouterror = false;
                let tempmsg = await message.channel.send({embed: new Discord.MessageEmbed()
                  .setTitle("Which Role/User do you wanna add/remove?")
                  .setColor(es.color)
                  .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`).setFooter(es.footertext, es.footericon)
                })
                await tempmsg.channel.awaitMessages(m=>m.author.id == message.author.id, {
                    max: 1,
                    time: 90000,
                    errors: ["time"]
                  })
                  .then(async collected => {
                    var message = collected.first();
                    if(!message) throw "NO MESSAGE SENT";
                    let users = message.mentions.members.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
                    let roles = message.mentions.roles.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
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
                  
                    return message.reply({embed: new Discord.MessageEmbed()
                      .setTitle(`<:joines:866356465299488809> **Added \`[${addedroles.length}] Roles\` and \`[${addedusers.length}] Users\` to the __Anti Kick/Ban__ Whitelist (module)!**`)
                      .setColor(es.color)
                      .setDescription(`<:leaves:866356598356049930> **Removed \`[${removedroles.length}] Roles\` and \`[${removedusers.length}] Users\` from the __Anti Kick/Ban__ Whitelist (module)!**`.substr(0, 2048))
                      .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                      .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                      .setFooter(es.footertext, es.footericon)
                    });
                  })
                  .catch(e => {
                    timeouterror = e;
                  })
                if (timeouterror)
                  return message.reply({embed: new Discord.MessageEmbed()
                    .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                    .setColor(es.wrongcolor)
                    .setDescription(`Cancelled the Operation!`.substr(0, 2000))
                    .setFooter(es.footertext, es.footericon)
                  });
              } else if(String(index) == "3"){
                menu.reply.defer();
                let timeouterror = false;
                let tempmsg = await message.channel.send({embed: new Discord.MessageEmbed()
                  .setTitle("Which Role/User do you wanna add/remove?")
                  .setColor(es.color)
                  .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`).setFooter(es.footertext, es.footericon)
                })
                await tempmsg.channel.awaitMessages(m=>m.author.id == message.author.id, {
                    max: 1,
                    time: 90000,
                    errors: ["time"]
                  })
                  .then(async collected => {
                    var message = collected.first();
                    if(!message) throw "NO MESSAGE SENT";
                    let users = message.mentions.members.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
                    let roles = message.mentions.roles.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
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
                  
                    return message.reply({embed: new Discord.MessageEmbed()
                      .setTitle(`<:joines:866356465299488809> **Added \`[${addedroles.length}] Roles\` and \`[${addedusers.length}] Users\` to the __Anti Create Role__ Whitelist (module)!**`)
                      .setColor(es.color)
                      .setDescription(`<:leaves:866356598356049930> **Removed \`[${removedroles.length}] Roles\` and \`[${removedusers.length}] Users\` from the __Anti Create Role__ Whitelist (module)!**`.substr(0, 2048))
                      .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                      .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                      .setFooter(es.footertext, es.footericon)
                    });
                  })
                  .catch(e => {
                    timeouterror = e;
                  })
                if (timeouterror)
                  return message.reply({embed: new Discord.MessageEmbed()
                    .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                    .setColor(es.wrongcolor)
                    .setDescription(`Cancelled the Operation!`.substr(0, 2000))
                    .setFooter(es.footertext, es.footericon)
                  });
              } else if(String(index) == "4"){
                menu.reply.defer();
                let timeouterror = false;
                let tempmsg = await message.channel.send({embed: new Discord.MessageEmbed()
                  .setTitle("Which Role/User do you wanna add/remove?")
                  .setColor(es.color)
                  .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`).setFooter(es.footertext, es.footericon)
                })
                await tempmsg.channel.awaitMessages(m=>m.author.id == message.author.id, {
                    max: 1,
                    time: 90000,
                    errors: ["time"]
                  })
                  .then(async collected => {
                    var message = collected.first();
                    if(!message) throw "NO MESSAGE SENT";
                    let users = message.mentions.members.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
                    let roles = message.mentions.roles.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
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
                  
                    return message.reply({embed: new Discord.MessageEmbed()
                      .setTitle(`<:joines:866356465299488809> **Added \`[${addedroles.length}] Roles\` and \`[${addedusers.length}] Users\` to the __Anti Delete Role__ Whitelist (module)!**`)
                      .setColor(es.color)
                      .setDescription(`<:leaves:866356598356049930> **Removed \`[${removedroles.length}] Roles\` and \`[${removedusers.length}] Users\` from the __Anti Delete Role__ Whitelist (module)!**`.substr(0, 2048))
                      .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "antideleterole.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "antideleterole.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "antideleterole.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "antideleterole.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "antideleterole.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                      .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "antideleterole.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "antideleterole.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "antideleterole.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "antideleterole.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "antideleterole.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                      .setFooter(es.footertext, es.footericon)
                    });
                  })
                  .catch(e => {
                    timeouterror = e;
                  })
                if (timeouterror)
                  return message.reply({embed: new Discord.MessageEmbed()
                    .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                    .setColor(es.wrongcolor)
                    .setDescription(`Cancelled the Operation!`.substr(0, 2000))
                    .setFooter(es.footertext, es.footericon)
                  });
              } else if(String(index) == "5"){
                menu.reply.defer();
                let timeouterror = false;
                let tempmsg = await message.channel.send({embed: new Discord.MessageEmbed()
                  .setTitle("Which Role/User do you wanna add/remove?")
                  .setColor(es.color)
                  .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`).setFooter(es.footertext, es.footericon)
                })
                await tempmsg.channel.awaitMessages(m=>m.author.id == message.author.id, {
                    max: 1,
                    time: 90000,
                    errors: ["time"]
                  })
                  .then(async collected => {
                    var message = collected.first();
                    if(!message) throw "NO MESSAGE SENT";
                    let users = message.mentions.members.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
                    let roles = message.mentions.roles.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
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
                  
                    return message.reply({embed: new Discord.MessageEmbed()
                      .setTitle(`<:joines:866356465299488809> **Added \`[${addedroles.length}] Roles\` and \`[${addedusers.length}] Users\` to the __Anti Channel Create__ Whitelist (module)!**`)
                      .setColor(es.color)
                      .setDescription(`<:leaves:866356598356049930> **Removed \`[${removedroles.length}] Roles\` and \`[${removedusers.length}] Users\` from the __Anti Channel Create__ Whitelist (module)!**`.substr(0, 2048))
                      .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                      .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                      .setFooter(es.footertext, es.footericon)
                    });
                  })
                  .catch(e => {
                    timeouterror = e;
                  })
                if (timeouterror)
                  return message.reply({embed: new Discord.MessageEmbed()
                    .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                    .setColor(es.wrongcolor)
                    .setDescription(`Cancelled the Operation!`.substr(0, 2000))
                    .setFooter(es.footertext, es.footericon)
                  });
              } else if(String(index) == "6"){
                menu.reply.defer();
                let timeouterror = false;
                let tempmsg = await message.channel.send({embed: new Discord.MessageEmbed()
                  .setTitle("Which Role/User do you wanna add/remove?")
                  .setColor(es.color)
                  .setDescription(`*Just ping each User / Role you wanna whitelist!*\n\n> *If the Role/User is already in the Whitelisted, it will automatically get "unwhitelisted"*`).setFooter(es.footertext, es.footericon)
                })
                await tempmsg.channel.awaitMessages(m=>m.author.id == message.author.id, {
                    max: 1,
                    time: 90000,
                    errors: ["time"]
                  })
                  .then(async collected => {
                    var message = collected.first();
                    if(!message) throw "NO MESSAGE SENT";
                    let users = message.mentions.members.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
                    let roles = message.mentions.roles.filter(r=>r.guild.id == message.guild.id).map(r=>r.id);
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
                  
                    return message.reply({embed: new Discord.MessageEmbed()
                      .setTitle(`<:joines:866356465299488809> **Added \`[${addedroles.length}] Roles\` and \`[${addedusers.length}] Users\` to the __Anti Channel Delete__ Whitelist (module)!**`)
                      .setColor(es.color)
                      .setDescription(`<:leaves:866356598356049930> **Removed \`[${removedroles.length}] Roles\` and \`[${removedusers.length}] Users\` from the __Anti Channel Delete__ Whitelist (module)!**`.substr(0, 2048))
                      .addField("__**Current Whitelisted Users:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.whitelisted.users").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.whitelisted.users").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.whitelisted.users").slice(0, 15).map(x=>`<@${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.whitelisted.users").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.whitelisted.users").map(x=>`<@${x}>`).join(", ")}`)
                      .addField("__**Current Whitelisted Roles:**__", `>>> ${client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.whitelisted.roles").length == 0 ? "**No One**" : client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.whitelisted.roles").length > 15 ? client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.whitelisted.roles").slice(0, 15).map(x=>`<@&${x}>`).join(", ") + ` ***and ${client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.whitelisted.roles").length - 15} more...***`: client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.whitelisted.roles").map(x=>`<@&${x}>`).join(", ")}`)
                      .setFooter(es.footertext, es.footericon)
                    });
                  })
                  .catch(e => {
                    timeouterror = e;
                  })
                if (timeouterror)
                  return message.reply({embed: new Discord.MessageEmbed()
                    .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                    .setColor(es.wrongcolor)
                    .setDescription(`Cancelled the Operation!`.substr(0, 2000))
                    .setFooter(es.footertext, es.footericon)
                  });
              } else {
                return menu.reply.send("<:no:833101993668771842> **This is not finished yet, no worries the System itself works!**");
              }
            }
            //Event
            client.on('clickMenu', (menu) => {
              if (menu.message.id === menumsg.id) {
                if (menu.clicker.user.id === cmduser.id) {
                  if(used1) return menu.reply.send(`<:no:833101993668771842> You already selected something, this Selection is now disabled!`, true);
                  menuselection2(menu);
                }
                else menu.reply.send(`<:no:833101993668771842> You are not allowed to do that! Only: <@${cmduser.id}>`, true);
              }
            });
          
        
          } 
          else if(menu.values[0] == "Manage Settings"){
              menu.reply.defer();
              menuoptions = [
                {
                  value: client.Anti_Nuke_System.get(message.guild.id, "all.enabled") ? "Disable complete AntiNuke": "Enable complete Anti Nuke",
                  description: client.Anti_Nuke_System.get(message.guild.id, "all.enabled") ? "I will not work anymore": "I will be enabled",
                  emoji: client.Anti_Nuke_System.get(message.guild.id, "all.enabled") ? "833101993668771842": "833101995723194437"
                },
                {
                  value: "Set Logger",
                  description: `Define a (new) Logger Channel`,
                  emoji: "866089515993792522"
                },
                {
                  value: client.Anti_Nuke_System.get(message.guild.id, "all.showwhitelistlog") ? "Disable Whitelisted Log": "Enable Whitelisted Log",
                  description: client.Anti_Nuke_System.get(message.guild.id, "all.showwhitelistlog") ? "I will not show when a whitelisted User makes smt": "I will show when a whitelisted User makes smt (I won't do smt tho)",
                  emoji: client.Anti_Nuke_System.get(message.guild.id, "all.showwhitelistlog") ? "833101993668771842": "833101995723194437"
                },
                {
                  value: "Modify Quarantine Role",
                  description: "Remove/add the Qurantine Role",
                  emoji: "865686493016096809"
                },
                {
                  value: "Anti Bot Add",
                  description: `Adjust the Settings of the Anti Bot Add System`,
                  emoji: "843943149902626846"
                },
                {
                  value: "Anti Kick/Ban",
                  description: `Adjust the Settings of the Anti Kick/Ban System`,
                  emoji: "843943149868023808"
                },
                {
                  value: "Anti Create Role",
                  description: `Adjust the Settings of the Anti Create Role System`,
                  emoji: "843943149914554388"
                },
                {
                  value: "Anti Delete Role",
                  description: `Adjust the Settings of the Anti Delete Role System`,
                  emoji: "843943149919535154"
                },
                {
                  value: "Anti Create Channel",
                  description: `Adjust the Settings of the Anti Create Channel System`,
                  emoji: "843943149759889439"
                },
                {
                  value: "Anti Delete Channel",
                  description: `Adjust the Settings of the Anti Delete Channel System`,
                  emoji: "843943150468857876"
                },
                {
                  value: "Cancel",
                  description: `Cancel and stop the Anti-Nuke-Setup!`,
                  emoji: "862306766338523166"
                }
              ]
              //define the selection
              let Selection = new MessageMenu()
                .setID('MenuSelection') 
                .setMaxValues(1) //OPTIONAL, this is how many values you can have at each selection
                .setMinValues(1) //OPTIONAL , this is how many values you need to have at each selection
                .setPlaceholder('Click me to setup the Anti Nuke Settings!');  //message in the content placeholder
              menuoptions.forEach(option => {
                let row = new MessageMenuOption()
                  .setLabel(option.label ? option.label.substr(0, 25) : option.value.substr(0, 25))
                  .setValue(option.value) 
                  .setDescription(option.description.substr(0, 50)) 
                  .setDefault() 
                if(option.emoji) row.setEmoji(option.emoji) 
                Selection.addOption(row)
              })
              
              //define the embed
              let MenuEmbed = new Discord.MessageEmbed()
              .setColor(es.color)
              .setAuthor("Anti Nuke Settings", "https://cdn.discordapp.com/attachments/820695790170275871/869657327941324860/PS7lwz7HwAAAABJRU5ErkJggg.png", "https://discord.gg/FQGXbypRf8")
              .setDescription("***Select what you need in the `Selection` down Below!***")
              let used1 = false;
              //send the menu msg
              let menumsg = await message.channel.send(MenuEmbed, Selection)
              //function to handle the menuselection
              async function menuselection2(menu) {
                if(menu.values[0] == "Cancel") return menu.reply.send(":x: Cancelled the Setup!")
                used1 = true;
                let index = menuoptions.findIndex(v=>v.value == menu.values[0])
                //Toggle
                if(String(index) == "0"){
                  client.Anti_Nuke_System.set(message.guild.id, !client.Anti_Nuke_System.get(message.guild.id, "all.enabled"), "all.enabled")
                  return menu.reply.send(new MessageEmbed()
                  .setFooter(es.footertext, es.footericon).setColor(es.color).setThumbnail(es.thumb ? es.footericon : null)
                  .setTitle(`**Successfully __${client.Anti_Nuke_System.get(message.guild.id, "all.enabled") ? "Enabled" : "Disabled"}__ the Anti-Nuke System**`)
                  .setDescription(`**I will now${client.Anti_Nuke_System.get(message.guild.id, "all.enabled") ? "" : " not"} the Anti-Nuke System!**\n> But please mind the Settings of each Module!`)
                  .addField("\u200b", "**DONT FORGET TO ADD WHITELISTED USERS/BOTS/ROLES**\n**For Example:** *If you have a join-to-create Bot add him, at least for channel creations!*")
                );
                } else if(String(index) == "1"){
                  menu.reply.defer();
                  let timeouterror = false;
                  let tempmsg = await message.channel.send({embed: new Discord.MessageEmbed()
                    .setTitle("Which Channel do you wanna use?")
                    .setColor(es.color)
                    .setDescription(`*Just ping the channel with #channel in the Chat*`).setFooter(es.footertext, es.footericon)
                  })
                  await tempmsg.channel.awaitMessages(m=>m.author.id == message.author.id, {
                      max: 1,
                      time: 90000,
                      errors: ["time"]
                    })
                    .then(async collected => {
                      var message = collected.first();
                      if(!message) throw "NO MESSAGE SENT";
                      if(message.mentions.channels.filter(ch=>ch.guild.id==message.guild.id).first()){
                        try{
                          message.mentions.channels.filter(ch=>ch.guild.id==message.guild.id).first().send({embed: new Discord.MessageEmbed()
                            .setTitle(`<a:yes:833101995723194437> This Channel is now the Anti Nuke Logger!`)
                            .setColor(es.color)
                            .setDescription(`**Here are some Infos:**\n>>> In the **FOOTER** (bottom), will be Informations (ID & AVATAR) of the EXECUTOR\nIn the **AUTHOR** (top), will be information about the **METHOD**\n\nIf there is a **Thumbnail**, it will be the **TARGET INFORMATION**\n\nEvery Embed, which is **GREEN**, is a security action from **ME**\nEvery Embed in **YELLOW** is a **WARN**\nEvery Embed in **ORANGE** is a **KICK**\nEvery Embed in **RED** is a **BAN**\nEvery Embed in **BLURPLE** is a **Remove Role**`.substr(0, 2048))
                            .setFooter(es.footertext, es.footericon)
                          })
                        }catch (e){
                          console.log(e.stack ? String(e.stack).red : String(e).red)
                        }
                        try{
                          message.channel.send({embed: new Discord.MessageEmbed()
                            .setTitle(`<a:yes:833101995723194437> ${ message.mentions.channels.filter(ch=>ch.guild.id==message.guild.id).first().name} is now the Anti Nuke Logger!`)
                            .setColor(es.color)
                            .setDescription(`**Here are some Infos:**\n>>> In the **FOOTER** (bottom), will be Informations (ID & AVATAR) of the EXECUTOR\nIn the **AUTHOR** (top), will be information about the **METHOD**\n\nIf there is a **Thumbnail**, it will be the **TARGET INFORMATION**\n\nEvery Embed, which is **GREEN**, is a security action from **ME**\nEvery Embed in **YELLOW** is a **WARN**\nEvery Embed in **ORANGE** is a **KICK**\nEvery Embed in **RED** is a **BAN**\nEvery Embed in **BLURPLE** is a **Remove Role**`.substr(0, 2048))
                            .setFooter(es.footertext, es.footericon)
                          })
                        }catch (e){
                          console.log(e.stack ? String(e.stack).red : String(e).red)
                        }
                        client.Anti_Nuke_System.set(message.guild.id, message.mentions.channels.filter(ch=>ch.guild.id==message.guild.id).first().id, `all.logger`)
                        return message.reply({embed: new Discord.MessageEmbed()
                          .setTitle(`<a:yes:833101995723194437> The Channel: \`${message.mentions.channels.filter(ch=>ch.guild.id==message.guild.id).first().name}\` is now registered as the Anti-Nuke logger`)
                          .setColor(es.color)
                          .setDescription(`If some Anti-Nuke actions are needed to be executed, i will log them there!`.substr(0, 2048))
                          .setFooter(es.footertext, es.footericon)
                        });
                      }
                      else{
                        throw "NO CHANNEL PINGED";
                      }
                    })
                    .catch(e => {
                      timeouterror = e;
                    })
                  if (timeouterror)
                    return message.reply({embed: new Discord.MessageEmbed()
                      .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                      .setColor(es.wrongcolor)
                      .setDescription(`Cancelled the Operation!`.substr(0, 2000))
                      .setFooter(es.footertext, es.footericon)
                    });
                } else if(String(index) == "2"){
                  client.Anti_Nuke_System.set(message.guild.id, !client.Anti_Nuke_System.get(message.guild.id, "all.showwhitelistlog"), "all.showwhitelistlog")
                  return menu.reply.send(new MessageEmbed()
                  .setFooter(es.footertext, es.footericon).setColor(es.color).setThumbnail(es.thumb ? es.footericon : null)
                  .setTitle(`**Successfully __${client.Anti_Nuke_System.get(message.guild.id, "all.showwhitelistlog") ? "Enabled" : "Disabled"}__ the Whitelisted Log**`)
                  .setDescription(`**I will now${client.Anti_Nuke_System.get(message.guild.id, "all.showwhitelistlog") ? "" : " not"} show it, when a Whitelisted User / Role makes something**\n> But please mind the Settings of each Module!${client.Anti_Nuke_System.get(message.guild.id, "all.showwhitelistlog") ? "\n\n> Tho this is enabled it does **not** mean i will punish the Whitelisted User, this is **just the Logging** for it!\n> ***So that you know, when what happens!***" : ""}`)
                  .addField("\u200b", "**DONT FORGET TO ADD WHITELISTED USERS/BOTS/ROLES**\n**For Example:** *If you have a join-to-create Bot add him, at least for channel creations!*")
                );
                } else if(String(index) == "3"){
                  menu.reply.defer();
                  let timeouterror = false;
                  let tempmsg = await message.channel.send({embed: new Discord.MessageEmbed()
                    .setTitle("Which Role do you wanna use as the Quranatine Role?")
                    .setColor(es.color)
                    .setDescription(`> *Just ping the Role with @Role in the Chat*\n> Write \`no\` if you wanna disable/remove it!\n\nThis Role will be added, if the User gets the roles removed!\n> You can also ran a command in the \`${prefix}setup-antinuke\` to set all channels to not visible when having this Role!`).setFooter(es.footertext, es.footericon)
                  })
                  await tempmsg.channel.awaitMessages(m=>m.author.id == message.author.id, {
                      max: 1,
                      time: 90000,
                      errors: ["time"]
                    })
                    .then(async collected => {
                      var message = collected.first();
                      if(!message || !message.content) throw "NO MESSAGE SENT";
                      if(message.content.toLowerCase() == "no"){
                        client.Anti_Nuke_System.set(message.guild.id, false, `all.quarantine`)
                        return message.reply({embed: new Discord.MessageEmbed()
                          .setTitle(`<a:yes:833101995723194437> The Quarantine Role is now disabled!`)
                          .setColor(es.color)
                          .setFooter(es.footertext, es.footericon)
                        });
                      }
                      if(message.mentions.roles.filter(r=>r.guild.id==message.guild.id).first()){
                        client.Anti_Nuke_System.set(message.guild.id, message.mentions.roles.filter(r=>r.guild.id==message.guild.id).first().id, `all.quarantine`)
                        return message.reply({embed: new Discord.MessageEmbed()
                          .setTitle(`<a:yes:833101995723194437> The Role: \`${message.mentions.roles.filter(r=>r.guild.id==message.guild.id).first().name}\` is now registered as the Quarantine Role`)
                          .setColor(es.color)
                          .setDescription(`This Role will be added, if the User gets the roles removed!\n> You can also ran a command in the \`${prefix}setup-antinuke\` to set all channels to not visible when having this Role!`.substr(0, 2048))
                          .setFooter(es.footertext, es.footericon)
                        });
                      }
                      else{
                        throw "NO CHANNEL PINGED";
                      }
                    })
                    .catch(e => {
                      timeouterror = e;
                    })
                  if (timeouterror)
                    return message.reply({embed: new Discord.MessageEmbed()
                      .setTitle("<:no:833101993668771842> ERROR | Your Time ran out")
                      .setColor(es.wrongcolor)
                      .setDescription(`Cancelled the Operation!`.substr(0, 2000))
                      .setFooter(es.footertext, es.footericon)
                    });
                } else {
                  return menu.reply.send("<:no:833101993668771842> **This is not finished yet, no worries the System itself works!**");
                }
              }
              //Event
              client.on('clickMenu', (menu) => {
                if (menu.message.id === menumsg.id) {
                  if (menu.clicker.user.id === cmduser.id) {
                    if(used1) return menu.reply.send(`<:no:833101993668771842> You already selected something, this Selection is now disabled!`, true);
                    menuselection2(menu);
                  }
                  else menu.reply.send(`<:no:833101993668771842> You are not allowed to do that! Only: <@${cmduser.id}>`, true);
                }
              });
            
          } 
          else if(menu.values[0] == "Suggested Settings"){
            client.Anti_Nuke_System.set(message.guild.id, {
              all: {
                  enabled: true,
                  logger: "no",
                  whitelisted: client.Anti_Nuke_System.get(message.guild.id, "all.whitelisted"),
              },
              antibot: {
                  enabled: true,
                  whitelisted: client.Anti_Nuke_System.get(message.guild.id, "antibot.whitelisted"),
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
                  whitelisted: client.Anti_Nuke_System.get(message.guild.id, "antideleteuser.whitelisted"),
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
                  whitelisted: client.Anti_Nuke_System.get(message.guild.id, "anticreaterole.whitelisted"),
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
                  whitelisted: client.Anti_Nuke_System.get(message.guild.id, "antideleterole.whitelisted"),
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
                  whitelisted: client.Anti_Nuke_System.get(message.guild.id, "antichanneldelete.whitelisted"),
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
                  whitelisted: client.Anti_Nuke_System.get(message.guild.id, "antichannelcreate.whitelisted"),
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
            return menu.reply.send("<a:yes:833101995723194437> **Now using the Suggested Settings!**\n\n> If you want to enable a Logger for the Actions, then go to the 'MANAGE SETTINGS'", {content: "<a:yes:833101995723194437> **Now using the Suggested Settings!**", embed: new MessageEmbed()
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
              .addField("\u200b", "**DONT FORGET TO ADD WHITELISTED USERS/BOTS/ROLES**\n**For Example:** *If you have a join-to-create Bot add him, at least for channel creations!*")
              .setDescription(`${client.Anti_Nuke_System.get(message.guild.id, "all.showwhitelistlog") ? "> <a:yes:833101995723194437> **I will show it when a Whitelisted User/Role makes an Action**\n> *But I won't do anything to him/her, cause he/she is whitelisted!*": "> <:no:833101993668771842> **I won't show it when a whitelisted User is doing something!**\n> This doesn't affect your security! (He is whitelisted, from the YOU)"}${client.Anti_Nuke_System.get(message.guild.id, "all.quarantine").length > 0 ? `\n\n> **I will add him/her the Quarantine Role: <@&${client.Anti_Nuke_System.get(message.guild.id, "all.quarantine")}> Role when removing the Roles!**` : "*NO Quarantine Role set, I will just remove his/her Roles / KICK / BAN..!*"}`)
            });
          } 
          else if(menu.values[0] == "Sync Quarantine Role"){
            let role = client.Anti_Nuke_System.get(message.guild.id, "all.quarantine");
            if(!role || role.length <= 5){
              return menu.reply.send("<:no:833101993668771842> **There is no Quarantine Role added yet!**\n> To add it go to 'Manage Settings' and Add the Quarantine Role!")
            }
            let channels = message.guild.channels.cache.filter(c => !c.permissionOverwrites.has(role) || (c.permissionOverwrites.has(role) && !c.permissionOverwrites.get(role).deny.toArray().includes("VIEW_CHANNEL")));
            if(!channels || channels.size == 0){
              return menu.reply.send(`<:no:833101993668771842> **All Channels in this Guild are denied to View the Channel for the <@&${role}> Role**`)
            }
            menu.reply.send(`>>> <a:yes:833101995723194437> **Now Denying the <@&${role}> for ${channels.size} Channels, to View it!**\n\n<a:Loading:833101350623117342> **This might take up to \`${channels.size * 1.5} Seconds\`**`)
            for(const ch of channels){
              try {
                ch.updateOverwrite(role, {
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
            message.channel.send(`<a:yes:833101995723194437> **Adjusted the Permission for \`${channels.size} Channels\`**`);
          } else {
            menu.reply.defer();
          }
        }
        //Event
        client.on('clickMenu', (menu) => {
          if (menu.message.id === menumsg.id) {
            if (menu.clicker.user.id === cmduser.id) {
              if(used1) return menu.reply.send(`<:no:833101993668771842> You already selected something, this Selection is now disabled!`, true);
              menuselection(menu);
            }
            else menu.reply.send(`<:no:833101993668771842> You are not allowed to do that! Only: <@${cmduser.id}>`, true);
          }
        });
      }
  },
};
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://discord.gg/FQGXbypRf8
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */


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