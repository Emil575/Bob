const client = require("..")
const {
    MessageEmbed,
    MessageAttachment
} = require('discord.js')

function antinuke_databasing(GUILDID) {
    client.Anti_Nuke_System.ensure(GUILDID, {
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
}

function usr_antinuke_databasing(GUILDIDUSERID) {
    client.Anti_Nuke_System.ensure(GUILDIDUSERID, {
        antibot: [], //ANTI INVITE BOT
        antideleteuser: [], // ANTI Kick & Ban

        anticreaterole: [], //ANTI CREATE ROLE
        antideleterole: [], //ANTI DELETE Role

        antichannelcreate: [], //ANTI CREATE CHANNEL
        antichanneldelete: [], //ANTI DELETE CHANNEL
    })
}




//anti Bot - works | attemp counter fix...
client.on("guildMemberAdd", async (member) => {
    try {
        const eventsTimestamp = Date.now().toString()
        if (!member.guild) return;
        antinuke_databasing(member.guild.id);
        let data = client.Anti_Nuke_System.get(member.guild.id)
        console.log('Not Enable')
        if (!data.all.enabled || !data.antibot.enabled) return;
        console.log('Enable')
        if (member.user.bot) {
            let AuditData = await member.guild.fetchAuditLogs({
                limit: 1,
                type: "BOT_ADD"
            }).then((audit => {
                return audit.entries.first()
            })).catch((e) => {
                //send information
                if (data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = member.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("YELLOW")
                                .setAuthor("ANTIBOT - This is a Warn", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/warning-sign_26a0.png")
                                .setTitle("I am __missing__ the **Permission**to See the **Audit Log**!")
                                .setDescription("**ANTI-BOT-ADD System is not working without it!**")
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                        return;
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        return;
                    }
                }
                return;
            })
            let AddedUserID = AuditData.executor.id;
            let LogTimeString = AuditData.createdTimestamp.toString();

            const EventExecution = eventsTimestamp;
            const logtime = LogTimeString.slice(0, -3);
            const eventtime = EventExecution.slice(0, -3);
            console.log('Eventime')
            console.log('Eventime2')
            let AddedMember = await member.guild.members.fetch(AddedUserID).catch((e) => {
                if (data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = member.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("YELLOW")
                                .setAuthor("ANTIBOT - This is a Warn", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/warning-sign_26a0.png")
                                .setTitle(`I failed finding Data information about the User who added the Bot: \`${member.user.tag}\`!`)
                                .setDescription(`SOMEONE added a Bot (<@${member.user.id}>), but I can't punish him...`)
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                        return;
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        return;
                    }
                }
                return;
            })
            console.log('Fail by Punsh')
            if (AddedMember) {
                if (AddedUserID == AddedMember.guild.ownerId) {
                    if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                        try {
                            let ch = member.guild.channels.cache.get(data.all.logger);
                            if (ch) {
                                const embed = new MessageEmbed()
                                    .setColor("#fffff9")
                                    .setAuthor(`ANTI ADD BOT - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                        dynamic: true
                                    }))
                                    .setDescription(`I did nothing, cause he/she is the **SERVER OWNER**`)
                                    .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                        dynamic: true
                                    }))
                                ch.send({
                                    embeds: [embed]
                                }).catch((e) => {})
                            }
                        } catch (e) {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        }
                    }
                    return;
                }
                console.log('Fail by Owner')
                if (AddedMember.roles.cache.size > 0 && AddedMember.guild.me.roles.cache.size > 0 && AddedMember.roles.highest.rawPosition >= AddedMember.guild.me.roles.highest.rawPosition) {
                    if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                        try {
                            let ch = member.guild.channels.cache.get(data.all.logger);
                            if (ch) {
                                const embed = new MessageEmbed()
                                    .setColor("#fffff9")
                                    .setAuthor(`ANTI ADD BOT - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                        dynamic: true
                                    }))
                                    .setDescription(`I did nothing, cause his/her **highest Role** (${AddedMember.roles.highest}) is higher/equal to **mine** (${AddedMember.guild.me.roles.highest}) !`)
                                    .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                        dynamic: true
                                    }))
                                ch.send({
                                    embeds: [embed]
                                }).catch((e) => {})
                            }
                        } catch (e) {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        }
                    }
                    return;
                }
                console.log('Position')
                if (data.all.whitelisted.users.includes(AddedUserID)) {
                    if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                        try {
                            let ch = member.guild.channels.cache.get(data.all.logger);
                            if (ch) {
                                const embed = new MessageEmbed()
                                    .setColor("#fffff9")
                                    .setAuthor(`ANTI ADD BOT - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                        dynamic: true
                                    }))
                                    .setDescription(`I did nothing, cause he/she is whitelisted as a USER`)
                                    .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                        dynamic: true
                                    }))
                                ch.send({
                                    embeds: [embed]
                                }).catch((e) => {})
                            }
                        } catch (e) {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        }
                    }
                    return;
                }
                console.log('Whitelist user')
                if (AddedMember.roles.cache.size > 0 && AddedMember.roles.cache.some(r => data.all.whitelisted.roles.includes(r.id))) {
                    if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                        try {
                            let ch = member.guild.channels.cache.get(data.all.logger);
                            if (ch) {
                                const embed = new MessageEmbed()
                                    .setColor("#fffff9")
                                    .setAuthor(`ANTI ADD BOT - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                        dynamic: true
                                    }))
                                    .setDescription(`I did nothing, cause he has a whitelisted Role`)
                                    .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                        dynamic: true
                                    }))
                                ch.send({
                                    embeds: [embed]
                                }).catch((e) => {})
                            }
                        } catch (e) {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        }
                    }
                    return;
                }
                console.log('Whitelist Role')
                if (data.antibot.whitelisted.users.includes(AddedUserID)) {
                    if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                        try {
                            let ch = member.guild.channels.cache.get(data.all.logger);
                            if (ch) {
                                const embed = new MessageEmbed()
                                    .setColor("#fffff9")
                                    .setAuthor(`ANTI ADD BOT - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                        dynamic: true
                                    }))
                                    .setDescription(`I did nothing, cause he/she is whitelisted as a USER`)
                                    .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                        dynamic: true
                                    }))
                                ch.send({
                                    embeds: [embed]
                                }).catch((e) => {})
                            }
                        } catch (e) {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        }
                    }
                    return;
                }
                console.log('Whitelist user 2')
                if (AddedMember.roles.cache.size > 0 && AddedMember.roles.cache.some(r => data.antibot.whitelisted.roles.includes(r.id))) {
                    if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                        try {
                            let ch = member.guild.channels.cache.get(data.all.logger);
                            if (ch) {
                                const embed = new MessageEmbed()
                                    .setColor("#fffff9")
                                    .setAuthor(`ANTI ADD BOT - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                        dynamic: true
                                    }))
                                    .setDescription(`I did nothing, cause he has a whitelisted Role`)
                                    .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                        dynamic: true
                                    }))
                                ch.send({
                                    embeds: [embed]
                                }).catch((e) => {})
                            }
                        } catch (e) {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        }
                    }
                    return;
                }
                console.log('Whitelist role 2')
                //ensure the Data
                usr_antinuke_databasing(member.guild.id + AddedMember.id);
                let memberData = client.Anti_Nuke_System.get(member.guild.id + AddedMember.id);
                //increment the stats
                client.Anti_Nuke_System.push(member.guild.id + AddedMember.id, Date.now(), "antibot")
                try {
                    if (data.antibot.punishment.member.removeroles.enabled &&
                        ( //for 1 Day check
                            (data.antibot.punishment.member.removeroles.neededdaycount > 0 && memberData.antibot.filter(v => {
                                return v - (Date.now() - 8640000000) > 0
                            }).length >= data.antibot.punishment.member.removeroles.neededdaycount) ||
                            //for 1 Week Check
                            (data.antibot.punishment.member.removeroles.neededweekcount > 0 && memberData.antibot.filter(v => {
                                return v - (Date.now() - 7 * 8640000000) > 0
                            }).length >= data.antibot.punishment.member.removeroles.neededweekcount) ||
                            //for 1 Month Check
                            (data.antibot.punishment.member.removeroles.neededmonthcount > 0 && memberData.antibot.filter(v => {
                                return v - (Date.now() - 30 * 8640000000) > 0
                            }).length >= data.antibot.punishment.member.removeroles.neededmonthcount) ||
                            //for All Time Check
                            (data.antibot.punishment.member.removeroles.noeededalltimecount > 0 && memberData.antibot.length >= data.antibot.punishment.member.removeroles.noeededalltimecount))
                    ) {
                        console.log(`Embed 1 faild`)
                        //KICK THE BOT
                        try {
                            if (!data.antibot.punishment.bot.ban && data.antibot.punishment.bot.kick) {
                                //if there is a logger enabled then log the data
                                if (data.all.logger && data.all.logger.length > 5) {
                                    try {
                                        let ch = member.guild.channels.cache.get(data.all.logger);
                                        if (ch) {
                                            const embed = new MessageEmbed()
                                                .setColor("GREEN")
                                                .setAuthor(`ANTI BOT - I Kicked: ${member.user.tag}`, "https://cdn.discordapp.com/attachments/820695790170275871/869657327941324860/PS7lwz7HwAAAABJRU5ErkJggg.png")
                                                .setThumbnail(member.user.displayAvatarURL({
                                                    dynamic: true
                                                }))
                                                .setDescription(`> **I Kicked the Bot:**\n> <@${member.user.id}> |  **${member.user.tag}** (\`${member.user.id}\`)n\n**Added by:**\n> <@${AddedMember.user.id}> | **${AddedMember.user.tag}** (\`${AddedMember.user.id}\`)\n\n> *This is a step, which keeps your Server clean and secure!*`)
                                            ch.send({
                                                embeds: [embed]
                                            }).catch((e) => {})
                                        }
                                    } catch (e) {
                                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                    }
                                }
                                console.log(`kick 1 faild`)
                                //kick the Bot
                                member.kick(`Anti Bot - Added by: ${AddedUserID}`).catch((e) => {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                });
                            }
                            if (data.antibot.punishment.bot.ban) {
                                //if there is a logger enabled then log the data
                                if (data.all.logger && data.all.logger.length > 5) {
                                    try {
                                        let ch = member.guild.channels.cache.get(data.all.logger);
                                        if (ch) {
                                            const embed = new MessageEmbed()
                                                .setColor("GREEN")
                                                .setAuthor(`ANTIBOT - I Banned: ${member.user.tag}`, "https://cdn.discordapp.com/attachments/820695790170275871/869657327941324860/PS7lwz7HwAAAABJRU5ErkJggg.png")
                                                .setThumbnail(member.user.displayAvatarURL({
                                                    dynamic: true
                                                }))
                                                .setDescription(`> **I Banned the Bot:**\n> <@${member.user.id}> |  **${member.user.tag}** (\`${member.user.id}\`)\n\n**Added by:**\n> <@${AddedMember.user.id}> | **${AddedMember.user.tag}** (\`${AddedMember.user.id}\`)\n\n> *This is a step, which keeps your Server clean and secure!*`)
                                            ch.send({
                                                embeds: [embed]
                                            }).catch((e) => {})
                                        }
                                    } catch (e) {
                                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                    }
                                }
                                //Ban the Bot
                                member.ban({
                                    reason: `Anti Bot - Added by: ${AddedUserID}`
                                }).catch((e) => {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                });
                            }
                        } catch (e) {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        }
                        //Remove his/her roles
                        let roles2set = [];
                        if (data.all.quarantine && data.all.quarantine.length > 5) {
                            try {
                                let therole = AddedMember.guild.roles.cache.get(data.all.quarantine);
                                if (therole && therole.id) {
                                    roles2set.push(therole.id)
                                }
                            } catch (e) {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            }
                        }
                        AddedMember.roles.set(roles2set).then(member => {
                            //If there is the logger enabled, send information
                            if (data.all.logger && data.all.logger.length > 5) {
                                try {

                                    let ch = member.guild.channels.cache.get(data.all.logger);
                                    if (ch) {
                                        const embed = new MessageEmbed()
                                            .setColor("BLURPLE")
                                            .setAuthor(`ANTI ADD BOT - Removed Roles of ${AddedMember.user.tag} for adding ${member.user.tag}`, "https://cdn.discordapp.com/attachments/820695790170275871/869664393783304212/869285770723217488.png")
                                            .setThumbnail(member.user.displayAvatarURL({
                                                dynamic: true
                                            }))
                                            .setDescription(`I removed all possible Roles of <@${AddedUserID}> for adding the Bot <@${member.user.id}>\nThis was his/her ${memberData.antibot.length + 1} attemp to add a Bot!\n> **${memberData.antibot.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} Bots** added in the Last 24 hours\n> **${memberData.antibot.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} Bots** added in the Last 7 Days\n> **${memberData.antibot.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} Bots** added in the Last 30 Days${roles2set.length > 0 ? `\n\n> **I also added to him/her the <@&${roles2set[0]}> Role!**` : ""}`)
                                            .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                                dynamic: true
                                            }))
                                        ch.send({
                                            embeds: [embed]
                                        }).catch((e) => {})
                                    }
                                } catch (e) {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                }
                            }
                            console.log(`ANTIBOT - Removed roles of ${member.user.tag} | ${member.user.id}`)
                        }).catch((e) => {})
                    }
                    //Kick Member punishment 4
                    if (AddedMember.kickable && data.antibot.punishment.member.kick.enabled &&
                        ( //for 1 Day check
                            (data.antibot.punishment.member.kick.neededdaycount > 0 && memberData.antibot.filter(v => {
                                return v - (Date.now() - 8640000000) > 0
                            }).length >= data.antibot.punishment.member.kick.neededdaycount) ||
                            //for 1 Week Check
                            (data.antibot.punishment.member.kick.neededweekcount > 0 && memberData.antibot.filter(v => {
                                return v - (Date.now() - 7 * 8640000000) > 0
                            }).length >= data.antibot.punishment.member.kick.neededweekcount) ||
                            //for 1 Month Check
                            (data.antibot.punishment.member.kick.neededmonthcount > 0 && memberData.antibot.filter(v => {
                                return v - (Date.now() - 30 * 8640000000) > 0
                            }).length >= data.antibot.punishment.member.kick.neededmonthcount) ||
                            //for All Time Check
                            (data.antibot.punishment.member.kick.noeededalltimecount > 0 && memberData.antibot.length >= data.antibot.punishment.member.kick.noeededalltimecount)) &&
                        (!data.antibot.punishment.member.ban.enabled ||
                            ( //for 1 Day check
                                (data.antibot.punishment.member.ban.neededdaycount > 0 && memberData.antibot.filter(v => {
                                    return v - (Date.now() - 8640000000) > 0
                                }).length < data.antibot.punishment.member.ban.neededdaycount) ||
                                //for 1 Week Check
                                (data.antibot.punishment.member.ban.neededweekcount > 0 && memberData.antibot.filter(v => {
                                    return v - (Date.now() - 7 * 8640000000) > 0
                                }).length < data.antibot.punishment.member.ban.neededweekcount) ||
                                //for 1 Month Check
                                (data.antibot.punishment.member.ban.neededmonthcount > 0 && memberData.antibot.filter(v => {
                                    return v - (Date.now() - 30 * 8640000000) > 0
                                }).length < data.antibot.punishment.member.ban.neededmonthcount) ||
                                //for All Time Check
                                (data.antibot.punishment.member.ban.noeededalltimecount > 0 && memberData.antibot.length < data.antibot.punishment.member.ban.noeededalltimecount))
                        ) //Only do the kick if no ban is enabled or if he doesnt have enough counts for getting banned
                    ) {
                        //KICK THE BOT
                        try {
                            if (!data.antibot.punishment.bot.ban && data.antibot.punishment.bot.kick) {
                                //if there is a logger enabled then log the data
                                if (data.all.logger && data.all.logger.length > 5) {
                                    try {
                                        let ch = member.guild.channels.cache.get(data.all.logger);
                                        if (ch) {
                                            const embed = new MessageEmbed()
                                                .setColor("GREEN")
                                                .setAuthor(`ANTI BOT - I Kicked: ${member.user.tag}`, "https://cdn.discordapp.com/attachments/820695790170275871/869657327941324860/PS7lwz7HwAAAABJRU5ErkJggg.png")
                                                .setThumbnail(member.user.displayAvatarURL({
                                                    dynamic: true
                                                }))
                                                .setDescription(`> **I Kicked the Bot:**\n> <@${member.user.id}> |  **${member.user.tag}** (\`${member.user.id}\`)n\n**Added by:**\n> <@${AddedMember.user.id}> | **${AddedMember.user.tag}** (\`${AddedMember.user.id}\`)\n\n> *This is a step, which keeps your Server clean and secure!*`)
                                            ch.send({
                                                embeds: [embed]
                                            }).catch((e) => {})
                                        }
                                    } catch (e) {
                                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                    }
                                }
                                //kick the Bot
                                member.kick(`Anti Bot - Added by: ${AddedUserID}`).catch((e) => {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                });
                            }
                            if (data.antibot.punishment.bot.ban) {
                                //if there is a logger enabled then log the data
                                if (data.all.logger && data.all.logger.length > 5) {
                                    try {
                                        let ch = member.guild.channels.cache.get(data.all.logger);
                                        if (ch) {
                                            const embed = new MessageEmbed()
                                                .setColor("GREEN")
                                                .setAuthor(`ANTIBOT - I Banned: ${member.user.tag}`, "https://cdn.discordapp.com/attachments/820695790170275871/869657327941324860/PS7lwz7HwAAAABJRU5ErkJggg.png")
                                                .setThumbnail(member.user.displayAvatarURL({
                                                    dynamic: true
                                                }))
                                                .setDescription(`> **I Banned the Bot:**\n> <@${member.user.id}> |  **${member.user.tag}** (\`${member.user.id}\`)\n\n**Added by:**\n> <@${AddedMember.user.id}> | **${AddedMember.user.tag}** (\`${AddedMember.user.id}\`)\n\n> *This is a step, which keeps your Server clean and secure!*`)
                                            ch.send({
                                                embeds: [embed]
                                            }).catch((e) => {})
                                        }
                                    } catch (e) {
                                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                    }
                                }
                                //Ban the Bot
                                member.ban({
                                    reason: `Anti Bot - Added by: ${AddedUserID}`
                                }).catch((e) => {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                });
                            }
                        } catch (e) {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        }
                        //Kick the Member
                        AddedMember.kick(`Anti Bot - He/She Added: ${member.user.id} | ${member.user.tag}`).then(member => {
                            //If there is the logger enabled, send information
                            if (data.all.logger && data.all.logger.length > 5) {
                                try {
                                    let ch = member.guild.channels.cache.get(data.all.logger);
                                    if (ch) {
                                        const embed = new MessageEmbed()
                                            .setColor("ORANGE")
                                            .setAuthor(`ANTI ADD BOT - Kicked ${AddedMember.user.tag} for adding ${member.user.tag}`, "https://cdn.discordapp.com/attachments/820695790170275871/869665099512688670/hammer_1f528.png")
                                            .setDescription(`I kicked <@${AddedUserID}> for adding the Bot <@${member.user.id}>\nThis was his/her ${memberData.antibot.length + 1} attemp to add a Bot!\n> **${memberData.antibot.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} Bots** added in the Last 24 hours\n> **${memberData.antibot.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} Bots** added in the Last 7 Days\n> **${memberData.antibot.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} Bots** added in the Last 30 Days`)
                                            .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                                dynamic: true
                                            }))
                                        ch.send({
                                            embeds: [embed]
                                        }).catch((e) => {})
                                    }
                                } catch (e) {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                }
                            }
                            console.log(`ANTI Bot - Kicked ${member.user.tag} | ${member.user.id}`)
                        }).catch((e) => {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        });
                    }
                    if (AddedMember.bannable && data.antibot.punishment.member.ban.enabled && ( //for 1 Day check
                            (data.antibot.punishment.member.ban.neededdaycount > 0 && memberData.antibot.filter(v => {
                                return v - (Date.now() - 8640000000) > 0
                            }).length >= data.antibot.punishment.member.ban.neededdaycount) ||
                            //for 1 Week Check
                            (data.antibot.punishment.member.ban.neededweekcount > 0 && memberData.antibot.filter(v => {
                                return v - (Date.now() - 7 * 8640000000) > 0
                            }).length >= data.antibot.punishment.member.ban.neededweekcount) ||
                            //for 1 Month Check
                            (data.antibot.punishment.member.ban.neededmonthcount > 0 && memberData.antibot.filter(v => {
                                return v - (Date.now() - 30 * 8640000000) > 0
                            }).length >= data.antibot.punishment.member.ban.neededmonthcount) ||
                            //for All Time Check
                            (data.antibot.punishment.member.ban.noeededalltimecount > 0 && memberData.antibot.length >= data.antibot.punishment.member.ban.noeededalltimecount))) {
                        //KICK THE BOT
                        try {
                            if (!data.antibot.punishment.bot.ban && data.antibot.punishment.bot.kick) {
                                //if there is a logger enabled then log the data
                                if (data.all.logger && data.all.logger.length > 5) {
                                    try {
                                        let ch = member.guild.channels.cache.get(data.all.logger);
                                        if (ch) {
                                            const embed = new MessageEmbed()
                                                .setColor("GREEN")
                                                .setAuthor(`ANTI BOT - I Kicked: ${member.user.tag}`, "https://cdn.discordapp.com/attachments/820695790170275871/869657327941324860/PS7lwz7HwAAAABJRU5ErkJggg.png")
                                                .setThumbnail(member.user.displayAvatarURL({
                                                    dynamic: true
                                                }))
                                                .setDescription(`> **I Kicked the Bot:**\n> <@${member.user.id}> |  **${member.user.tag}** (\`${member.user.id}\`)n\n**Added by:**\n> <@${AddedMember.user.id}> | **${AddedMember.user.tag}** (\`${AddedMember.user.id}\`)\n\n> *This is a step, which keeps your Server clean and secure!*`)
                                            ch.send({
                                                embeds: [embed]
                                            }).catch((e) => {})
                                        }
                                    } catch (e) {
                                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                    }
                                }
                                //kick the Bot
                                member.kick(`Anti Bot - Added by: ${AddedUserID}`).catch((e) => {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                });
                            }
                            if (data.antibot.punishment.bot.ban) {
                                //if there is a logger enabled then log the data
                                if (data.all.logger && data.all.logger.length > 5) {
                                    try {
                                        let ch = member.guild.channels.cache.get(data.all.logger);
                                        if (ch) {
                                            const embed = new MessageEmbed()
                                                .setColor("GREEN")
                                                .setAuthor(`ANTIBOT - I Banned: ${member.user.tag}`, "https://cdn.discordapp.com/attachments/820695790170275871/869657327941324860/PS7lwz7HwAAAABJRU5ErkJggg.png")
                                                .setThumbnail(member.user.displayAvatarURL({
                                                    dynamic: true
                                                }))
                                                .setDescription(`> **I Banned the Bot:**\n> <@${member.user.id}> |  **${member.user.tag}** (\`${member.user.id}\`)\n\n**Added by:**\n> <@${AddedMember.user.id}> | **${AddedMember.user.tag}** (\`${AddedMember.user.id}\`)\n\n> *This is a step, which keeps your Server clean and secure!*`)
                                            ch.send({
                                                embeds: [embed]
                                            }).catch((e) => {})
                                        }
                                    } catch (e) {
                                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                    }
                                }
                                //Ban the Bot
                                member.ban({
                                    reason: `Anti Bot - Added by: ${AddedUserID}`
                                }).catch((e) => {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                });
                            }
                        } catch (e) {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        }
                        //Ban the Member
                        AddedMember.ban({
                                reason: `Anti Bot - He/She Added: ${AddedUserID} | ${member.user.tag}`
                            })
                            .then(member => {
                                //If there is the logger enabled, send information
                                if (data.all.logger && data.all.logger.length > 5) {
                                    try {
                                        let ch = member.guild.channels.cache.get(data.all.logger);
                                        if (ch) {
                                            const embed = new MessageEmbed()
                                                .setColor("RED")
                                                .setAuthor(`ANTI ADD BOT - Banned ${AddedMember.user.tag} for adding ${member.user.tag}`, "https://cdn.discordapp.com/attachments/820695790170275871/869665114373095514/811556437284749322.png")
                                                .setThumbnail(member.user.displayAvatarURL({
                                                    dynamic: true
                                                }))
                                                .setDescription(`I Banned <@${AddedUserID}> for adding the Bot <@${member.user.id}>\n\nThis was his/her ${memberData.antibot.length + 1} attemp to add a Bot!\n> **${memberData.antibot.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} Bots** added in the Last 24 hours\n> **${memberData.antibot.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} Bots** added in the Last 7 Days\n> **${memberData.antibot.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} Bots** added in the Last 30 Days`)
                                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                                    dynamic: true
                                                }))
                                            ch.send({
                                                embeds: [embed]
                                            }).catch((e) => {})
                                        }
                                    } catch (e) {
                                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                    }
                                }
                                console.log(`ANTI Bot - Banned ${member.user.tag} | ${member.user.id}`)
                            })
                            .catch((e) => {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            });
                    }

                } catch (e) {
                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                }
            }
        }
    } catch (e) {
        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
    }
})




//anti Kick - works | attemp counter fix...
client.on("guildMemberRemove", async (member) => {
    try {
        const eventsTimestamp = Date.now().toString()
        if (!member.guild) return;
        antinuke_databasing(member.guild.id);
        let data = client.Anti_Nuke_System.get(member.guild.id)
        if (!data.all.enabled || !data.antideleteuser.enabled) return;
        let AuditData = await member.guild.fetchAuditLogs({
            limit: 1,
            type: "MEMBER_KICK",
        }).then((audit => {
            return audit.entries.first()
        })).catch((e) => {

            //send information
            if (data.all.logger && data.all.logger.length > 5) {
                try {
                    let ch = member.guild.channels.cache.get(data.all.logger);
                    if (ch) {
                        const embed = new MessageEmbed()
                            .setColor("YELLOW")
                            .setAuthor("ANTI KICK - This is a Warn", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/warning-sign_26a0.png")
                            .setTitle("I am __missing__ the **Permission**to See the **Audit Log**!")
                            .setDescription("**ANTI-KICK System is not working without it!**")
                        ch.send({
                            embeds: [embed]
                        }).catch((e) => {})
                    }
                    return;
                } catch (e) {
                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    return;
                }
            }
            return;
        })
        let AddedUserID = AuditData.executor.id;
        let LogTimeString = AuditData.createdTimestamp.toString();

        const EventExecution = eventsTimestamp;
        const logtime = LogTimeString.slice(0, -3);
        const eventtime = EventExecution.slice(0, -3);
        if (AddedUserID == client.user.id) return;
        let AddedMember = await member.guild.members.fetch(AddedUserID).catch((e) => {
            if (data.all.logger && data.all.logger.length > 5) {
                try {
                    let ch = member.guild.channels.cache.get(data.all.logger);
                    if (ch) {
                        const embed = new MessageEmbed()
                            .setColor("YELLOW")
                            .setAuthor("ANTI KICK - This is a Warn", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/warning-sign_26a0.png")
                            .setTitle(`I failed finding Data information about the User who kicked: \`${member.user.tag}\`!`)
                            .setDescription(`SOMEONE kicked <@${member.user.id}>, but I can't punish him...`)
                        ch.send({
                            embeds: [embed]
                        }).catch((e) => {})
                    }
                    return;
                } catch (e) {
                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    return;
                }
            }
            return;
        })
        if (AddedMember) {
            //if guild owner, he is whitelisted
            if (AddedUserID == AddedMember.guild.ownerID) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = member.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI KICK - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is the **SERVER OWNER**`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            //if his highest role is above mine, he is whitelisted
            if (AddedMember.roles.cache.size > 0 && AddedMember.guild.me.roles.cache.size > 0 && AddedMember.roles.highest.rawPosition >= AddedMember.guild.me.roles.highest.rawPosition) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = member.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI KICK - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause his/her **highest Role** (${AddedMember.roles.highest}) is higher/equal to **mine** (${AddedMember.guild.me.roles.highest}) !`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            //all whitelist is above module whitelist
            if (data.all.whitelisted.users.includes(AddedUserID)) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = member.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI KICK - ${AddedMember.user.tag} kicked ${member.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is whitelisted as a USER`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            if (AddedMember.roles.cache.size > 0 && AddedMember.roles.cache.some(r => data.all.whitelisted.roles.includes(r.id))) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = member.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI KICK - ${AddedMember.user.tag} kicked ${member.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he has a whitelisted Role`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            //then module whitelist checker
            if (data.antideleteuser.whitelisted.users.includes(AddedUserID)) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = member.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI KICK - ${AddedMember.user.tag} kicked ${member.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is whitelisted as a USER`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            if (AddedMember.roles.cache.size > 0 && AddedMember.roles.cache.some(r => data.antideleteuser.whitelisted.roles.includes(r.id))) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = member.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI KICK - ${AddedMember.user.tag} kicked ${member.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he has a whitelisted Role`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            //ensure the Data
            usr_antinuke_databasing(member.guild.id + AddedMember.id);
            let memberData = client.Anti_Nuke_System.get(member.guild.id + AddedMember.id);
            //increment the stats
            client.Anti_Nuke_System.push(member.guild.id + AddedMember.id, Date.now(), "antideleteuser")
            try {
                if (data.antideleteuser.punishment.member.removeroles.enabled &&
                    ( //for 1 Day check
                        (data.antideleteuser.punishment.member.removeroles.neededdaycount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.removeroles.neededdaycount) ||
                        //for 1 Week Check
                        (data.antideleteuser.punishment.member.removeroles.neededweekcount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.removeroles.neededweekcount) ||
                        //for 1 Month Check
                        (data.antideleteuser.punishment.member.removeroles.neededmonthcount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.removeroles.neededmonthcount) ||
                        //for All Time Check
                        (data.antideleteuser.punishment.member.removeroles.noeededalltimecount > 0 && memberData.antideleteuser.length >= data.antideleteuser.punishment.member.removeroles.noeededalltimecount))
                ) {
                    //Remove his/her roles
                    let roles2set = [];
                    if (data.all.quarantine && data.all.quarantine.length > 5) {
                        try {
                            let therole = AddedMember.guild.roles.cache.get(data.all.quarantine);
                            if (therole && therole.id) {
                                roles2set.push(therole.id)
                            }
                        } catch (e) {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        }
                    }
                    AddedMember.roles.set(roles2set).then(member => {
                        //If there is the logger enabled, send information
                        if (data.all.logger && data.all.logger.length > 5) {
                            try {
                                let ch = member.guild.channels.cache.get(data.all.logger);
                                if (ch) {
                                    const embed = new MessageEmbed()
                                        .setColor("BLURPLE")
                                        .setAuthor(`ANTI KICK - Removed Roles of ${AddedMember.user.tag} for kicking ${member.user.tag}`, "https://cdn.discordapp.com/attachments/820695790170275871/869664393783304212/869285770723217488.png")
                                        .setThumbnail(member.user.displayAvatarURL({
                                            dynamic: true
                                        }))
                                        .setDescription(`I removed all possible Roles of <@${AddedUserID}> for **kicking** <@${member.user.id}>\n\nThis was his/her ${memberData.antideleteuser.length + 1} attemp to kick/ban a User!\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 24 hours\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 7 Days\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 30 Days${roles2set.length > 0 ? `\n\n> **I also added to him/her the <@&${roles2set[0]}> Role!**` : ""}`)
                                        .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                            dynamic: true
                                        }))
                                    ch.send({
                                        embeds: [embed]
                                    }).catch((e) => {})
                                }
                            } catch (e) {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            }
                        }
                        console.log(`ANTIBOT - Removed roles of ${member.user.tag} | ${member.user.id}`)
                    }).catch((e) => {})
                }
                //Kick Member punishment 4
                if (AddedMember.kickable && data.antideleteuser.punishment.member.kick.enabled &&
                    ( //for 1 Day check
                        (data.antideleteuser.punishment.member.kick.neededdaycount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.kick.neededdaycount) ||
                        //for 1 Week Check
                        (data.antideleteuser.punishment.member.kick.neededweekcount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.kick.neededweekcount) ||
                        //for 1 Month Check
                        (data.antideleteuser.punishment.member.kick.neededmonthcount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.kick.neededmonthcount) ||
                        //for All Time Check
                        (data.antideleteuser.punishment.member.kick.noeededalltimecount > 0 && memberData.antideleteuser.length >= data.antideleteuser.punishment.member.kick.noeededalltimecount)) &&
                    (!data.antideleteuser.punishment.member.ban.enabled ||
                        ( //for 1 Day check
                            (data.antideleteuser.punishment.member.ban.neededdaycount > 0 && memberData.antideleteuser.filter(v => {
                                return v - (Date.now() - 8640000000) > 0
                            }).length < data.antideleteuser.punishment.member.ban.neededdaycount) ||
                            //for 1 Week Check
                            (data.antideleteuser.punishment.member.ban.neededweekcount > 0 && memberData.antideleteuser.filter(v => {
                                return v - (Date.now() - 7 * 8640000000) > 0
                            }).length < data.antideleteuser.punishment.member.ban.neededweekcount) ||
                            //for 1 Month Check
                            (data.antideleteuser.punishment.member.ban.neededmonthcount > 0 && memberData.antideleteuser.filter(v => {
                                return v - (Date.now() - 30 * 8640000000) > 0
                            }).length < data.antideleteuser.punishment.member.ban.neededmonthcount) ||
                            //for All Time Check
                            (data.antideleteuser.punishment.member.ban.noeededalltimecount > 0 && memberData.antideleteuser.length < data.antideleteuser.punishment.member.ban.noeededalltimecount))
                    ) //Only do the kick if no ban is enabled or if he doesnt have enough counts for getting banned
                ) {
                    //Kick the Member
                    AddedMember.kick(`Anti Kick - He/She kicked: ${member.user.id} | ${member.user.tag}`).then(member => {
                        //If there is the logger enabled, send information
                        if (data.all.logger && data.all.logger.length > 5) {
                            try {
                                let ch = member.guild.channels.cache.get(data.all.logger);
                                if (ch) {
                                    const embed = new MessageEmbed()
                                        .setColor("ORANGE")
                                        .setAuthor(`ANTI KICK - Kicked ${AddedMember.user.tag} for kicking ${member.user.tag}`, "https://cdn.discordapp.com/attachments/820695790170275871/869665099512688670/hammer_1f528.png")
                                        .setThumbnail(member.user.displayAvatarURL({
                                            dynamic: true
                                        }))
                                        .setDescription(`I kicked <@${AddedUserID}> for **kicking** <@${member.user.id}>\n\nThis was his/her ${memberData.antideleteuser.length + 1} attemp to kick/ban a User!\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 24 hours\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 7 Days\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 30 Days`)
                                        .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                            dynamic: true
                                        }))
                                    ch.send({
                                        embeds: [embed]
                                    }).catch((e) => {})
                                }
                            } catch (e) {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            }
                        }
                        console.log(`ANTI Kick - Kicked ${member.user.tag} | ${member.user.id}`)
                    }).catch((e) => {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    });
                }
                if (AddedMember.bannable && data.antideleteuser.punishment.member.ban.enabled && ( //for 1 Day check
                        (data.antideleteuser.punishment.member.ban.neededdaycount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.ban.neededdaycount) ||
                        //for 1 Week Check
                        (data.antideleteuser.punishment.member.ban.neededweekcount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.ban.neededweekcount) ||
                        //for 1 Month Check
                        (data.antideleteuser.punishment.member.ban.neededmonthcount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.ban.neededmonthcount) ||
                        //for All Time Check
                        (data.antideleteuser.punishment.member.ban.noeededalltimecount > 0 && memberData.antideleteuser.length >= data.antideleteuser.punishment.member.ban.noeededalltimecount))) {

                    //Ban the Member
                    AddedMember.ban({
                            reason: `Anti Kick - He/She kicked: ${member.user.id} | ${member.user.tag}`
                        })
                        .then(member => {
                            //If there is the logger enabled, send information
                            if (data.all.logger && data.all.logger.length > 5) {
                                try {
                                    let ch = member.guild.channels.cache.get(data.all.logger);
                                    if (ch) {
                                        const embed = new MessageEmbed()
                                            .setColor("RED")
                                            .setAuthor(`ANTI KICK - Banned ${AddedMember.user.tag} for kicking ${member.user.tag}`, "https://cdn.discordapp.com/attachments/820695790170275871/869665114373095514/811556437284749322.png")
                                            .setThumbnail(member.user.displayAvatarURL({
                                                dynamic: true
                                            }))
                                            .setDescription(`I Banned <@${AddedUserID}> for **kicking** <@${member.user.id}>\n\nThis was his/her ${memberData.antideleteuser.length + 1} attemp to kick/ban a User!\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 24 hours\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 7 Days\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 30 Days`)
                                            .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                                dynamic: true
                                            }))
                                        ch.send({
                                            embeds: [embed]
                                        }).catch((e) => {})
                                    }
                                } catch (e) {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                }
                            }
                            console.log(`ANTI Kick - Banned ${member.user.tag} | ${member.user.id}`)
                        })
                        .catch((e) => {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        });
                }
            } catch (e) {
                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
            }
        }
    } catch (e) {
        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
    }
})


//anti BAN - works | attemp counter fix...
client.on("guildMemberRemove", async (member) => {
    try {
        const eventsTimestamp = Date.now().toString()
        if (!member.guild) return;
        antinuke_databasing(member.guild.id);
        let data = client.Anti_Nuke_System.get(member.guild.id)
        if (!data.all.enabled || !data.antideleteuser.enabled) return;
        let AuditData = await member.guild.fetchAuditLogs({
            limit: 1,
            type: "MEMBER_BAN_ADD",
        }).then((audit => {
            return audit.entries.first()
        })).catch((e) => {

            //send information
            if (data.all.logger && data.all.logger.length > 5) {
                try {
                    let ch = member.guild.channels.cache.get(data.all.logger);
                    if (ch) {
                        const embed = new MessageEmbed()
                            .setColor("YELLOW")
                            .setAuthor("ANTI BAN - This is a Warn", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/warning-sign_26a0.png")
                            .setTitle("I am __missing__ the **Permission**to See the **Audit Log**!")
                            .setDescription("**ANTI-BAN System is not working without it!**")
                        ch.send({
                            embeds: [embed]
                        }).catch((e) => {})
                    }
                    return;
                } catch (e) {
                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    return;
                }
            }
            return;
        })
        let AddedUserID = AuditData.executor.id;
        let LogTimeString = AuditData.createdTimestamp.toString();

        const EventExecution = eventsTimestamp;
        const logtime = LogTimeString.slice(0, -3);
        const eventtime = EventExecution.slice(0, -3);
        if (AddedUserID == client.user.id) return;
        let AddedMember = await member.guild.members.fetch(AddedUserID).catch((e) => {
            if (data.all.logger && data.all.logger.length > 5) {
                try {
                    let ch = member.guild.channels.cache.get(data.all.logger);
                    if (ch) {
                        const embed = new MessageEmbed()
                            .setColor("YELLOW")
                            .setAuthor("ANTI BAN - This is a Warn", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/warning-sign_26a0.png")
                            .setTitle(`I failed finding Data information about the User who banned: \`${member.user.tag}\`!`)
                            .setDescription(`SOMEONE banned <@${member.user.id}>, but I can't punish him...`)
                        ch.send({
                            embeds: [embed]
                        }).catch((e) => {})
                    }
                    return;
                } catch (e) {
                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    return;
                }
            }
            return;
        })
        if (AddedMember) {
            //if guild owner, he is whitelisted
            if (AddedUserID == AddedMember.guild.ownerID) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = member.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI BAN - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is the **SERVER OWNER**`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            //if his highest role is above mine, he is whitelisted
            if (AddedMember.roles.cache.size > 0 && AddedMember.guild.me.roles.cache.size > 0 && AddedMember.roles.highest.rawPosition >= AddedMember.guild.me.roles.highest.rawPosition) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = member.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI BAN - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause his/her **highest Role** (${AddedMember.roles.highest}) is higher/equal to **mine** (${AddedMember.guild.me.roles.highest}) !`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            //all whitelist above module
            if (data.all.whitelisted.users.includes(AddedUserID)) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = member.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI BAN - ${AddedMember.user.tag} kicked ${member.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is whitelisted as a USER`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            if (AddedMember.roles.cache.size > 0 && AddedMember.roles.cache.some(r => data.all.whitelisted.roles.includes(r.id))) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = member.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI BAN - ${AddedMember.user.tag} kicked ${member.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he has a whitelisted Role`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            if (data.antideleteuser.whitelisted.users.includes(AddedUserID)) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = member.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI BAN - ${AddedMember.user.tag} kicked ${member.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is whitelisted as a USER`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            if (AddedMember.roles.cache.size > 0 && AddedMember.roles.cache.some(r => data.antideleteuser.whitelisted.roles.includes(r.id))) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = member.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI BAN - ${AddedMember.user.tag} kicked ${member.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he has a whitelisted Role`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            //ensure the Data
            usr_antinuke_databasing(member.guild.id + AddedMember.id);
            let memberData = client.Anti_Nuke_System.get(member.guild.id + AddedMember.id);
            //increment the stats
            client.Anti_Nuke_System.push(member.guild.id + AddedMember.id, Date.now(), "antideleteuser")
            try {
                if (data.antideleteuser.punishment.member.removeroles.enabled &&
                    ( //for 1 Day check
                        (data.antideleteuser.punishment.member.removeroles.neededdaycount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.removeroles.neededdaycount) ||
                        //for 1 Week Check
                        (data.antideleteuser.punishment.member.removeroles.neededweekcount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.removeroles.neededweekcount) ||
                        //for 1 Month Check
                        (data.antideleteuser.punishment.member.removeroles.neededmonthcount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.removeroles.neededmonthcount) ||
                        //for All Time Check
                        (data.antideleteuser.punishment.member.removeroles.noeededalltimecount > 0 && memberData.antideleteuser.length >= data.antideleteuser.punishment.member.removeroles.noeededalltimecount))
                ) {
                    //Remove his/her roles
                    let roles2set = [];
                    if (data.all.quarantine && data.all.quarantine.length > 5) {
                        try {
                            let therole = AddedMember.guild.roles.cache.get(data.all.quarantine);
                            if (therole && therole.id) {
                                roles2set.push(therole.id)
                            }
                        } catch (e) {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        }
                    }
                    AddedMember.roles.set(roles2set).then(member => {
                        //If there is the logger enabled, send information
                        if (data.all.logger && data.all.logger.length > 5) {
                            try {
                                let ch = member.guild.channels.cache.get(data.all.logger);
                                if (ch) {
                                    const embed = new MessageEmbed()
                                        .setColor("BLURPLE")
                                        .setAuthor(`ANTI BAN - Removed Roles of ${AddedMember.user.tag} for banning ${member.user.tag}`, "https://cdn.discordapp.com/attachments/820695790170275871/869664393783304212/869285770723217488.png")
                                        .setThumbnail(member.user.displayAvatarURL({
                                            dynamic: true
                                        }))
                                        .setDescription(`I removed all possible Roles of <@${AddedUserID}> for **banning** <@${member.user.id}>\n\nThis was his/her ${memberData.antideleteuser.length + 1} attemp to kick/ban a User!\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 24 hours\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 7 Days\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 30 Days${roles2set.length > 0 ? `\n\n> **I also added to him/her the <@&${roles2set[0]}> Role!**` : ""}`)
                                        .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                            dynamic: true
                                        }))
                                    ch.send({
                                        embeds: [embed]
                                    }).catch((e) => {})
                                }
                            } catch (e) {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            }
                        }
                        console.log(`ANTI BAN - Removed roles of ${member.user.tag} | ${member.user.id}`)
                    }).catch((e) => {})
                }
                //Kick Member punishment 4
                if (AddedMember.kickable && data.antideleteuser.punishment.member.kick.enabled &&
                    ( //for 1 Day check
                        (data.antideleteuser.punishment.member.kick.neededdaycount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.kick.neededdaycount) ||
                        //for 1 Week Check
                        (data.antideleteuser.punishment.member.kick.neededweekcount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.kick.neededweekcount) ||
                        //for 1 Month Check
                        (data.antideleteuser.punishment.member.kick.neededmonthcount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.kick.neededmonthcount) ||
                        //for All Time Check
                        (data.antideleteuser.punishment.member.kick.noeededalltimecount > 0 && memberData.antideleteuser.length >= data.antideleteuser.punishment.member.kick.noeededalltimecount)) &&
                    (!data.antideleteuser.punishment.member.ban.enabled ||
                        ( //for 1 Day check
                            (data.antideleteuser.punishment.member.ban.neededdaycount > 0 && memberData.antideleteuser.filter(v => {
                                return v - (Date.now() - 8640000000) > 0
                            }).length < data.antideleteuser.punishment.member.ban.neededdaycount) ||
                            //for 1 Week Check
                            (data.antideleteuser.punishment.member.ban.neededweekcount > 0 && memberData.antideleteuser.filter(v => {
                                return v - (Date.now() - 7 * 8640000000) > 0
                            }).length < data.antideleteuser.punishment.member.ban.neededweekcount) ||
                            //for 1 Month Check
                            (data.antideleteuser.punishment.member.ban.neededmonthcount > 0 && memberData.antideleteuser.filter(v => {
                                return v - (Date.now() - 30 * 8640000000) > 0
                            }).length < data.antideleteuser.punishment.member.ban.neededmonthcount) ||
                            //for All Time Check
                            (data.antideleteuser.punishment.member.ban.noeededalltimecount > 0 && memberData.antideleteuser.length < data.antideleteuser.punishment.member.ban.noeededalltimecount))
                    ) //Only do the kick if no ban is enabled or if he doesnt have enough counts for getting banned
                ) {
                    //Kick the Member
                    AddedMember.kick(`Anti Ban - He/She banned: ${member.user.id} | ${member.user.tag}`).then(member => {
                        //If there is the logger enabled, send information
                        if (data.all.logger && data.all.logger.length > 5) {
                            try {
                                let ch = member.guild.channels.cache.get(data.all.logger);
                                if (ch) {
                                    const embed = new MessageEmbed()
                                        .setColor("ORANGE")
                                        .setAuthor(`ANTI BAN - Kicked ${AddedMember.user.tag} for banning ${member.user.tag}`, "https://cdn.discordapp.com/attachments/820695790170275871/869665099512688670/hammer_1f528.png")
                                        .setThumbnail(member.user.displayAvatarURL({
                                            dynamic: true
                                        }))
                                        .setDescription(`I kicked <@${AddedUserID}> for **banning** <@${member.user.id}>\n\nThis was his/her ${memberData.antideleteuser.length + 1} attemp to kick/ban a User!\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 24 hours\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 7 Days\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 30 Days`)
                                        .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                            dynamic: true
                                        }))
                                    ch.send({
                                        embeds: [embed]
                                    }).catch((e) => {})
                                }
                            } catch (e) {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            }
                        }
                        console.log(`ANTI Ban - Kicked ${member.user.tag} | ${member.user.id}`)
                    }).catch((e) => {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    });
                }
                if (AddedMember.bannable && data.antideleteuser.punishment.member.ban.enabled && ( //for 1 Day check
                        (data.antideleteuser.punishment.member.ban.neededdaycount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.ban.neededdaycount) ||
                        //for 1 Week Check
                        (data.antideleteuser.punishment.member.ban.neededweekcount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.ban.neededweekcount) ||
                        //for 1 Month Check
                        (data.antideleteuser.punishment.member.ban.neededmonthcount > 0 && memberData.antideleteuser.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.antideleteuser.punishment.member.ban.neededmonthcount) ||
                        //for All Time Check
                        (data.antideleteuser.punishment.member.ban.noeededalltimecount > 0 && memberData.antideleteuser.length >= data.antideleteuser.punishment.member.ban.noeededalltimecount))) {

                    //Ban the Member
                    AddedMember.ban({
                            reason: `Anti Ban - He/She banned: ${member.user.id} | ${member.user.tag}`
                        })
                        .then(member => {
                            //If there is the logger enabled, send information
                            if (data.all.logger && data.all.logger.length > 5) {
                                try {
                                    let ch = member.guild.channels.cache.get(data.all.logger);
                                    if (ch) {
                                        const embed = new MessageEmbed()
                                            .setColor("RED")
                                            .setAuthor(`ANTI BAN - Banned ${AddedMember.user.tag} for banning ${member.user.tag}`, "https://cdn.discordapp.com/attachments/820695790170275871/869665114373095514/811556437284749322.png")
                                            .setThumbnail(member.user.displayAvatarURL({
                                                dynamic: true
                                            }))
                                            .setDescription(`I Banned <@${AddedUserID}> for **banning** <@${member.user.id}>\n\nThis was his/her ${memberData.antideleteuser.length + 1} attemp to kick/ban a User!\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 24 hours\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 7 Days\n> **${memberData.antideleteuser.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} Users** kicked/banned in the Last 30 Days`)
                                            .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                                dynamic: true
                                            }))
                                        ch.send({
                                            embeds: [embed]
                                        }).catch((e) => {})
                                    }
                                } catch (e) {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                }
                            }
                            console.log(`ANTI Ban - Banned ${member.user.tag} | ${member.user.id}`)
                        })
                        .catch((e) => {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        });
                }
            } catch (e) {
                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
            }
        }
    } catch (e) {
        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
    }
})


//ANTI CHANNEL CREATE - works | attemp counter fix...
client.on("channelCreate", async (channel) => {
    try {
        const eventsTimestamp = Date.now().toString()
        if (!channel.guild) return;
        antinuke_databasing(channel.guild.id);
        let data = client.Anti_Nuke_System.get(channel.guild.id)
        if (!data.all.enabled || !data.antichannelcreate.enabled) return;
        let AuditData = await channel.guild.fetchAuditLogs({
            limit: 1,
            type: "CHANNEL_CREATE",
        }).then((audit => {
            return audit.entries.first()
        })).catch((e) => {

            //send information
            if (data.all.logger && data.all.logger.length > 5) {
                try {
                    let ch = channel.guild.channels.cache.get(data.all.logger);
                    if (ch) {
                        const embed = new MessageEmbed()
                            .setColor("YELLOW")
                            .setAuthor("ANTI CHANNEL CREATE - This is a Warn", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/warning-sign_26a0.png")
                            .setTitle("I am __missing__ the **Permission**to See the **Audit Log**!")
                            .setDescription("**ANTI-CHANNELCREATE System is not working without it!**")
                        ch.send({
                            embeds: [embed]
                        }).catch((e) => {})
                    }
                    return;
                } catch (e) {
                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    return;
                }
            }
            return;
        })
        let AddedUserID = AuditData.executor.id;
        let LogTimeString = AuditData.createdTimestamp.toString();

        const EventExecution = eventsTimestamp;
        const logtime = LogTimeString.slice(0, -3);
        const eventtime = EventExecution.slice(0, -3);
        if (AddedUserID == client.user.id) return;
        let AddedMember = await channel.guild.members.fetch(AddedUserID).catch((e) => {
            if (data.all.logger && data.all.logger.length > 5) {
                try {
                    let ch = channel.guild.channels.cache.get(data.all.logger);
                    if (ch) {
                        const embed = new MessageEmbed()
                            .setColor("YELLOW")
                            .setAuthor("ANTI CHANNEL CREATE - This is a Warn", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/warning-sign_26a0.png")
                            .setTitle(`I failed finding Data information about the User who created: \`${channel.name}\`!`)
                            .setDescription(`SOMEONE created <#${channel.id}>, but I can't punish him...`)
                        ch.send({
                            embeds: [embed]
                        }).catch((e) => {})
                    }
                    return;
                } catch (e) {
                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    return;
                }
            }
            return;
        })
        if (AddedMember) {
            //if guild owner, he is whitelisted
            if (AddedUserID == AddedMember.guild.ownerID) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = channel.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI CHANNEL CREATE - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is the **SERVER OWNER**`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            //if his highest role is above mine, he is whitelisted
            if (AddedMember.roles.cache.size > 0 && AddedMember.guild.me.roles.cache.size > 0 && AddedMember.roles.highest.rawPosition >= AddedMember.guild.me.roles.highest.rawPosition) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = channel.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI CHANNEL CREATE - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause his/her **highest Role** (${AddedMember.roles.highest}) is higher/equal to **mine** (${AddedMember.guild.me.roles.highest}) !`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            //all whitelist above module
            if (data.all.whitelisted.users.includes(AddedUserID)) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = channel.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI CHANNEL CREATE - ${AddedMember.user.tag} created ${channel.name}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is whitelisted as a USER`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            if (AddedMember.roles.cache.size > 0 && AddedMember.roles.cache.some(r => data.all.whitelisted.roles.includes(r.id))) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = channel.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI CHANNEL CREATE - ${AddedMember.user.tag} created ${channel.name}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he has a whitelisted Role`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            if (data.antichannelcreate.whitelisted.users.includes(AddedUserID)) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = channel.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI CHANNEL CREATE - ${AddedMember.user.tag} created ${channel.name}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is whitelisted as a USER`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            if (AddedMember.roles.cache.size > 0 && AddedMember.roles.cache.some(r => data.antichannelcreate.whitelisted.roles.includes(r.id))) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = channel.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI CHANNEL CREATE - ${AddedMember.user.tag} created ${channel.name}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he has a whitelisted Role`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            //ensure the Data
            usr_antinuke_databasing(channel.guild.id + AddedMember.id);
            let memberData = client.Anti_Nuke_System.get(channel.guild.id + AddedMember.id);
            //increment the stats
            client.Anti_Nuke_System.push(channel.guild.id + AddedMember.id, Date.now(), "antichannelcreate")
            try {
                if (data.antichannelcreate.punishment.member.removeroles.enabled &&
                    ( //for 1 Day check
                        (data.antichannelcreate.punishment.member.removeroles.neededdaycount > 0 && memberData.antichannelcreate.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.antichannelcreate.punishment.member.removeroles.neededdaycount) ||
                        //for 1 Week Check
                        (data.antichannelcreate.punishment.member.removeroles.neededweekcount > 0 && memberData.antichannelcreate.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.antichannelcreate.punishment.member.removeroles.neededweekcount) ||
                        //for 1 Month Check
                        (data.antichannelcreate.punishment.member.removeroles.neededmonthcount > 0 && memberData.antichannelcreate.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.antichannelcreate.punishment.member.removeroles.neededmonthcount) ||
                        //for All Time Check
                        (data.antichannelcreate.punishment.member.removeroles.noeededalltimecount > 0 && memberData.antichannelcreate.length >= data.antichannelcreate.punishment.member.removeroles.noeededalltimecount)
                    )
                ) {
                    try {
                        if (data.antichannelcreate.punishment.deletecreatedchannel) {
                            //if there is a logger enabled then log the data
                            if (data.all.logger && data.all.logger.length > 5) {
                                try {
                                    let ch = channel.guild.channels.cache.get(data.all.logger);
                                    if (ch) {
                                        const embed = new MessageEmbed()
                                            .setColor("GREEN")
                                            .setAuthor(`ANTI CHANNEL-CREATE - I Delete: ${channel.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869657327941324860/PS7lwz7HwAAAABJRU5ErkJggg.png")
                                            .setDescription(`**I Deleted the ${channel.type === "voice" ? "Voice Channel:" : "Text Channel:"}**\n> \`${channel.name}\` | \`${channel.id}\`\n\n**Created by:**\n> <@${AddedMember.user.id}> | **${AddedMember.user.tag}** (\`${AddedMember.user.id}\`)\n\n> *This is a step, which keeps your Server clean and secure!*`)
                                        ch.send({
                                            embeds: [embed]
                                        }).catch((e) => {})
                                    }
                                } catch (e) {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                }
                            }
                            //kick the Bot
                            channel.delete(`ANTI CHANNEL CREATE - Created by: ${AddedUserID}`).catch((e) => {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            });
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                    //Remove his/her roles
                    let roles2set = [];
                    if (data.all.quarantine && data.all.quarantine.length > 5) {
                        try {
                            let therole = AddedMember.guild.roles.cache.get(data.all.quarantine);
                            if (therole && therole.id) {
                                roles2set.push(therole.id)
                            }
                        } catch (e) {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        }
                    }
                    AddedMember.roles.set(roles2set).then(member => {
                        //If there is the logger enabled, send information
                        if (data.all.logger && data.all.logger.length > 5) {
                            try {
                                let ch = channel.guild.channels.cache.get(data.all.logger);
                                if (ch) {
                                    const embed = new MessageEmbed()
                                        .setColor("BLURPLE")
                                        .setAuthor(`ANTI CHANNEL CREATE - Removed Roles of ${AddedMember.user.tag} for creating ${channel.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869664393783304212/869285770723217488.png")
                                        .setDescription(`I removed all possible Roles of <@${AddedUserID}> for **creating** ${channel.name}\n\nThis was his/her ${memberData.antichannelcreate.length + 1} attemp to create a Channel!\n> **${memberData.antichannelcreate.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} created** Channels in the Last 24 hours\n> **${memberData.antichannelcreate.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} created** Channels in the Last 7 Days\n> **${memberData.antichannelcreate.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} created** Channels in the Last 30 Days${roles2set.length > 0 ? `\n\n> **I also added to him/her the <@&${roles2set[0]}> Role!**` : ""}`)
                                        .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                            dynamic: true
                                        }))
                                    ch.send({
                                        embeds: [embed]
                                    }).catch((e) => {})
                                }
                            } catch (e) {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            }
                        }
                        console.log(`ANTI CHANNEL CREATE - Removed roles of ${member.user.tag} | ${member.user.id}`)
                    }).catch((e) => {})
                }
                //Kick Member punishment 4
                if (AddedMember.kickable && data.antichannelcreate.punishment.member.kick.enabled &&
                    ( //for 1 Day check
                        (data.antichannelcreate.punishment.member.kick.neededdaycount > 0 && memberData.antichannelcreate.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.antichannelcreate.punishment.member.kick.neededdaycount) ||
                        //for 1 Week Check
                        (data.antichannelcreate.punishment.member.kick.neededweekcount > 0 && memberData.antichannelcreate.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.antichannelcreate.punishment.member.kick.neededweekcount) ||
                        //for 1 Month Check
                        (data.antichannelcreate.punishment.member.kick.neededmonthcount > 0 && memberData.antichannelcreate.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.antichannelcreate.punishment.member.kick.neededmonthcount) ||
                        //for All Time Check
                        (data.antichannelcreate.punishment.member.kick.noeededalltimecount > 0 && memberData.antichannelcreate.length >= data.antichannelcreate.punishment.member.kick.noeededalltimecount)) &&
                    (!data.antichannelcreate.punishment.member.ban.enabled ||
                        ( //for 1 Day check
                            (data.antichannelcreate.punishment.member.ban.neededdaycount > 0 && memberData.antichannelcreate.filter(v => {
                                return v - (Date.now() - 8640000000) > 0
                            }).length < data.antichannelcreate.punishment.member.ban.neededdaycount) ||
                            //for 1 Week Check
                            (data.antichannelcreate.punishment.member.ban.neededweekcount > 0 && memberData.antichannelcreate.filter(v => {
                                return v - (Date.now() - 7 * 8640000000) > 0
                            }).length < data.antichannelcreate.punishment.member.ban.neededweekcount) ||
                            //for 1 Month Check
                            (data.antichannelcreate.punishment.member.ban.neededmonthcount > 0 && memberData.antichannelcreate.filter(v => {
                                return v - (Date.now() - 30 * 8640000000) > 0
                            }).length < data.antichannelcreate.punishment.member.ban.neededmonthcount) ||
                            //for All Time Check
                            (data.antichannelcreate.punishment.member.ban.noeededalltimecount > 0 && memberData.antichannelcreate.length < data.antichannelcreate.punishment.member.ban.noeededalltimecount))
                    ) //Only do the kick if no ban is enabled or if he doesnt have enough counts for getting banned
                ) {
                    try {
                        if (data.antichannelcreate.punishment.deletecreatedchannel) {
                            //if there is a logger enabled then log the data
                            if (data.all.logger && data.all.logger.length > 5) {
                                try {
                                    let ch = channel.guild.channels.cache.get(data.all.logger);
                                    if (ch) {
                                        const embed = new MessageEmbed()
                                            .setColor("GREEN")
                                            .setAuthor(`ANTI CHANNEL-CREATE - I Delete: ${channel.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869657327941324860/PS7lwz7HwAAAABJRU5ErkJggg.png")
                                            .setDescription(`**I Deleted the ${channel.type === "voice" ? "Voice Channel:" : "Text Channel:"}**\n> \`${channel.name}\` | \`${channel.id}\`\n\n**Created by:**\n> <@${AddedMember.user.id}> | **${AddedMember.user.tag}** (\`${AddedMember.user.id}\`)\n\n> *This is a step, which keeps your Server clean and secure!*`)
                                        ch.send({
                                            embeds: [embed]
                                        }).catch((e) => {})
                                    }
                                } catch (e) {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                }
                            }
                            //kick the Bot
                            channel.delete(`ANTI CHANNEL CREATE - Created by: ${AddedUserID}`).catch((e) => {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            });
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                    //Kick the Member
                    AddedMember.kick(`ANTI CHANNEL CREATE - He created: ${channel.id} | ${channel.name}`).then(member => {
                        //If there is the logger enabled, send information
                        if (data.all.logger && data.all.logger.length > 5) {
                            try {
                                let ch = channel.guild.channels.cache.get(data.all.logger);
                                if (ch) {
                                    const embed = new MessageEmbed()
                                        .setColor("ORANGE")
                                        .setAuthor(`ANTI CHANNEL CREATE - Kicked ${AddedMember.user.tag} for creating ${channel.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869665099512688670/hammer_1f528.png")
                                        .setDescription(`I kicked <@${AddedUserID}> for **creating** ${channel.name}\n\nThis was his/her ${memberData.antichannelcreate.length + 1} attemp to create a Channel!\n> **${memberData.antichannelcreate.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} created** Channels in the Last 24 hours\n> **${memberData.antichannelcreate.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} created** Channels in the Last 7 Days\n> **${memberData.antichannelcreate.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} created** Channels in the Last 30 Days`)
                                        .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                            dynamic: true
                                        }))
                                    ch.send({
                                        embeds: [embed]
                                    }).catch((e) => {})
                                }
                            } catch (e) {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            }
                        }
                        console.log(`ANTI CHANNEL CREATE - Kicked ${member.user.tag} | ${member.user.id}`)
                    }).catch((e) => {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    });
                }
                if (AddedMember.bannable && data.antichannelcreate.punishment.member.ban.enabled && ( //for 1 Day check
                        (data.antichannelcreate.punishment.member.ban.neededdaycount > 0 && memberData.antichannelcreate.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.antichannelcreate.punishment.member.ban.neededdaycount) ||
                        //for 1 Week Check
                        (data.antichannelcreate.punishment.member.ban.neededweekcount > 0 && memberData.antichannelcreate.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.antichannelcreate.punishment.member.ban.neededweekcount) ||
                        //for 1 Month Check
                        (data.antichannelcreate.punishment.member.ban.neededmonthcount > 0 && memberData.antichannelcreate.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.antichannelcreate.punishment.member.ban.neededmonthcount) ||
                        //for All Time Check
                        (data.antichannelcreate.punishment.member.ban.noeededalltimecount > 0 && memberData.antichannelcreate.length >= data.antichannelcreate.punishment.member.ban.noeededalltimecount))) {
                    try {
                        if (data.antichannelcreate.punishment.deletecreatedchannel) {
                            //if there is a logger enabled then log the data
                            if (data.all.logger && data.all.logger.length > 5) {
                                try {
                                    let ch = channel.guild.channels.cache.get(data.all.logger);
                                    if (ch) {
                                        const embed = new MessageEmbed()
                                            .setColor("GREEN")
                                            .setAuthor(`ANTI CHANNEL-CREATE - I Delete: ${channel.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869657327941324860/PS7lwz7HwAAAABJRU5ErkJggg.png")
                                            .setDescription(`**I Deleted the ${channel.type === "voice" ? "Voice Channel:" : "Text Channel:"}**\n> \`${channel.name}\` | \`${channel.id}\`\n\n**Created by:**\n> <@${AddedMember.user.id}> | **${AddedMember.user.tag}** (\`${AddedMember.user.id}\`)\n\n> *This is a step, which keeps your Server clean and secure!*`)
                                        ch.send({
                                            embeds: [embed]
                                        }).catch((e) => {})
                                    }
                                } catch (e) {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                }
                            }
                            //kick the Bot
                            channel.delete(`ANTI CHANNEL CREATE - Created by: ${AddedUserID}`).catch((e) => {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            });
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                    //Ban the Member
                    AddedMember.ban({
                            reason: `ANTI CHANNEL CREATE - He created: ${channel.id} | ${channel.name}`
                        })
                        .then(member => {
                            //If there is the logger enabled, send information
                            if (data.all.logger && data.all.logger.length > 5) {
                                try {
                                    let ch = channel.guild.channels.cache.get(data.all.logger);
                                    if (ch) {
                                        const embed = new MessageEmbed()
                                            .setColor("RED")
                                            .setAuthor(`ANTI CHANNEL CREATE - Banned ${AddedMember.user.tag} for creating ${channel.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869665114373095514/811556437284749322.png")
                                            .setDescription(`I banned <@${AddedUserID}> for **creating** ${channel.name}\n\nThis was his/her ${memberData.antichannelcreate.length + 1} attemp to create a Channel!\n> **${memberData.antichannelcreate.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} created** Channels in the Last 24 hours\n> **${memberData.antichannelcreate.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} created** Channels in the Last 7 Days\n> **${memberData.antichannelcreate.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} created** Channels in the Last 30 Days`)
                                            .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                                dynamic: true
                                            }))
                                        ch.send({
                                            embeds: [embed]
                                        }).catch((e) => {})
                                    }
                                } catch (e) {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                }
                            }
                            console.log(`ANTI CHANNEL CREATE - Banned ${member.user.tag} | ${member.user.id}`)
                        })
                        .catch((e) => {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        });
                }

            } catch (e) {
                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
            }
        }
    } catch (e) {
        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
    }
})

//anti Channel DELETE
client.on("channelDelete", async (channel) => {
    try {
        const eventsTimestamp = Date.now().toString()
        if (!channel.guild) return console.log("COULD NOT FIND GUILD");
        antinuke_databasing(channel.guild.id);
        let data = client.Anti_Nuke_System.get(channel.guild.id)
        if (!data.all.enabled || !data.antichanneldelete.enabled) return console.log("THIS IS DISABLED");
        let AuditData = await channel.guild.fetchAuditLogs({
            limit: 1,
            type: "CHANNEL_DELETE",
        }).then((audit => {
            return audit.entries.first()
        })).catch((e) => {

            //send information
            if (data.all.logger && data.all.logger.length > 5) {
                try {
                    let ch = channel.guild.channels.cache.get(data.all.logger);
                    if (ch) {
                        ch.send({
                            e
                        }).catch((e) => {})
                    }
                    return;
                } catch (e) {
                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    return;
                }
            }
            return;
        })
        let AddedUserID = AuditData.executor.id;
        let LogTimeString = AuditData.createdTimestamp.toString();

        const EventExecution = eventsTimestamp;
        const logtime = LogTimeString.slice(0, -3);
        const eventtime = EventExecution.slice(0, -3);
        if (AddedUserID == client.user.id) return console.log("I AM THE DELETER - NO ANTI");
        let AddedMember = await channel.guild.members.fetch(AddedUserID).catch((e) => {
            if (data.all.logger && data.all.logger.length > 5) {
                try {
                    let ch = channel.guild.channels.cache.get(data.all.logger);
                    if (ch) {
                        const embed = new MessageEmbed()
                            .setColor("YELLOW")
                            .setAuthor("ANTI CHANNEL DELETE - This is a Warn", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/warning-sign_26a0.png")
                            .setTitle(`I failed finding Data information about the User who deleted: \`${channel.name}\`!`)
                            .setDescription(`SOMEONE deleted \`${channel.name}\` | ${channel.id}, but I can't punish him...`)
                        ch.send({
                            embeds: [embed]
                        }).catch((e) => {})
                    }
                    return;
                } catch (e) {
                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    return;
                }
            }
            return;
        })
        if (AddedMember) {
            //if guild owner, he is whitelisted
            if (AddedUserID == AddedMember.guild.ownerID) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = channel.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI CHANNEL DELETE - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is the **SERVER OWNER**`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            //if his highest role is above mine, he is whitelisted
            if (AddedMember.roles.cache.size > 0 && AddedMember.guild.me.roles.cache.size > 0 && AddedMember.roles.highest.rawPosition >= AddedMember.guild.me.roles.highest.rawPosition) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = channel.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI CHANNEL DELETE - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause his/her **highest Role** (${AddedMember.roles.highest}) is higher/equal to **mine** (${AddedMember.guild.me.roles.highest}) !`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            //all whitelist above module
            if (data.all.whitelisted.users.includes(AddedUserID)) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = channel.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI CHANNEL DELETE - ${AddedMember.user.tag} delete ${channel.name}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is whitelisted as a USER`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            if (AddedMember.roles.cache.size > 0 && AddedMember.roles.cache.some(r => data.all.whitelisted.roles.includes(r.id))) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = channel.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI CHANNEL DELETE - ${AddedMember.user.tag} delete ${channel.name}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he has a whitelisted Role`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            if (data.antichanneldelete.whitelisted.users.includes(AddedUserID)) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = channel.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI CHANNEL DELETE - ${AddedMember.user.tag} delete ${channel.name}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is whitelisted as a USER`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            if (AddedMember.roles.cache.size > 0 && AddedMember.roles.cache.some(r => data.antichanneldelete.whitelisted.roles.includes(r.id))) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = channel.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI CHANNEL DELETE - ${AddedMember.user.tag} delete ${channel.name}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he has a whitelisted Role`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }

            //ensure the Data
            usr_antinuke_databasing(channel.guild.id + AddedMember.id);
            let memberData = client.Anti_Nuke_System.get(channel.guild.id + AddedMember.id);
            //increment the stats
            client.Anti_Nuke_System.push(channel.guild.id + AddedMember.id, Date.now(), "antichanneldelete")
            try {
                if (data.antichanneldelete.punishment.member.removeroles.enabled &&
                    ( //for 1 Day check
                        (data.antichanneldelete.punishment.member.removeroles.neededdaycount > 0 && memberData.antichanneldelete.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.antichanneldelete.punishment.member.removeroles.neededdaycount) ||
                        //for 1 Week Check
                        (data.antichanneldelete.punishment.member.removeroles.neededweekcount > 0 && memberData.antichanneldelete.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.antichanneldelete.punishment.member.removeroles.neededweekcount) ||
                        //for 1 Month Check
                        (data.antichanneldelete.punishment.member.removeroles.neededmonthcount > 0 && memberData.antichanneldelete.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.antichanneldelete.punishment.member.removeroles.neededmonthcount) ||
                        //for All Time Check
                        (data.antichanneldelete.punishment.member.removeroles.noeededalltimecount > 0 && memberData.antichanneldelete.length >= data.antichanneldelete.punishment.member.removeroles.noeededalltimecount))
                ) {
                    //Remove his/her roles
                    let roles2set = [];
                    if (data.all.quarantine && data.all.quarantine.length > 5) {
                        try {
                            let therole = AddedMember.guild.roles.cache.get(data.all.quarantine);
                            if (therole && therole.id) {
                                roles2set.push(therole.id)
                            }
                        } catch (e) {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        }
                    }
                    AddedMember.roles.set(roles2set).then(member => {
                        //If there is the logger enabled, send information
                        if (data.all.logger && data.all.logger.length > 5) {
                            try {
                                let ch = channel.guild.channels.cache.get(data.all.logger);
                                if (ch) {
                                    const embed = new MessageEmbed()
                                        .setColor("BLURPLE")
                                        .setAuthor(`ANTI CHANNEL DELETE - Removed Roles of ${AddedMember.user.tag} for deleting ${channel.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869664393783304212/869285770723217488.png")
                                        .setDescription(`I removed all possible Roles of <@${AddedUserID}> for **deleting** ${channel.name}\n\nThis was his/her ${memberData.antichanneldelete.length + 1} attemp to delete a Channel!\n> **${memberData.antichanneldelete.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} deleted** Channels in the Last 24 hours\n> **${memberData.antichanneldelete.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} deleted** Channels in the Last 7 Days\n> **${memberData.antichanneldelete.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} deleted** Channels in the Last 30 Days${roles2set.length > 0 ? `\n\n> **I also added to him/her the <@&${roles2set[0]}> Role!**` : ""}`)
                                        .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                            dynamic: true
                                        }))
                                    ch.send({
                                        embeds: [embed]
                                    }).catch((e) => {})
                                }
                            } catch (e) {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            }
                        }
                        console.log(`ANTI CHANNEL DELETE - Removed roles of ${member.user.tag} | ${member.user.id}`)
                    }).catch((e) => {})
                }
                //Kick Member punishment 4
                if (AddedMember.kickable && data.antichanneldelete.punishment.member.kick.enabled &&
                    ( //for 1 Day check
                        (data.antichanneldelete.punishment.member.kick.neededdaycount > 0 && memberData.antichanneldelete.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.antichanneldelete.punishment.member.kick.neededdaycount) ||
                        //for 1 Week Check
                        (data.antichanneldelete.punishment.member.kick.neededweekcount > 0 && memberData.antichanneldelete.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.antichanneldelete.punishment.member.kick.neededweekcount) ||
                        //for 1 Month Check
                        (data.antichanneldelete.punishment.member.kick.neededmonthcount > 0 && memberData.antichanneldelete.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.antichanneldelete.punishment.member.kick.neededmonthcount) ||
                        //for All Time Check
                        (data.antichanneldelete.punishment.member.kick.noeededalltimecount > 0 && memberData.antichanneldelete.length >= data.antichanneldelete.punishment.member.kick.noeededalltimecount)) &&
                    (!data.antichanneldelete.punishment.member.ban.enabled ||
                        ( //for 1 Day check
                            (data.antichanneldelete.punishment.member.ban.neededdaycount > 0 && memberData.antichanneldelete.filter(v => {
                                return v - (Date.now() - 8640000000) > 0
                            }).length < data.antichanneldelete.punishment.member.ban.neededdaycount) ||
                            //for 1 Week Check
                            (data.antichanneldelete.punishment.member.ban.neededweekcount > 0 && memberData.antichanneldelete.filter(v => {
                                return v - (Date.now() - 7 * 8640000000) > 0
                            }).length < data.antichanneldelete.punishment.member.ban.neededweekcount) ||
                            //for 1 Month Check
                            (data.antichanneldelete.punishment.member.ban.neededmonthcount > 0 && memberData.antichanneldelete.filter(v => {
                                return v - (Date.now() - 30 * 8640000000) > 0
                            }).length < data.antichanneldelete.punishment.member.ban.neededmonthcount) ||
                            //for All Time Check
                            (data.antichanneldelete.punishment.member.ban.noeededalltimecount > 0 && memberData.antichanneldelete.length < data.antichanneldelete.punishment.member.ban.noeededalltimecount))
                    ) //Only do the kick if no ban is enabled or if he doesnt have enough counts for getting banned
                ) {
                    //Kick the Member
                    AddedMember.kick(`Anti CHANNEL DELETE - He created: ${channel.id} | ${channel.name}`).then(member => {
                        //If there is the logger enabled, send information
                        if (data.all.logger && data.all.logger.length > 5) {
                            try {
                                let ch = channel.guild.channels.cache.get(data.all.logger);
                                if (ch) {
                                    const embed = new MessageEmbed()
                                        .setColor("ORANGE")
                                        .setAuthor(`ANTI CHANNEL DELETE - Kicked ${AddedMember.user.tag} for deleting ${channel.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869665099512688670/hammer_1f528.png")
                                        .setDescription(`I kicked <@${AddedUserID}> for **deleting** ${channel.name}\n\nThis was his/her ${memberData.antichanneldelete.length + 1} attemp to delete a Channel!\n> **${memberData.antichanneldelete.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} deleted** Channels in the Last 24 hours\n> **${memberData.antichanneldelete.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} deleted** Channels in the Last 7 Days\n> **${memberData.antichanneldelete.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} deleted** Channels in the Last 30 Days`)
                                        .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                            dynamic: true
                                        }))
                                    ch.send({
                                        embeds: [embed]
                                    }).catch((e) => {})
                                }
                            } catch (e) {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            }
                        }
                        console.log(`ANTI Role DELETE - Kicked ${member.user.tag} | ${member.user.id}`)
                    }).catch((e) => {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    });
                }
                if (AddedMember.bannable && data.antichanneldelete.punishment.member.ban.enabled && ( //for 1 Day check
                        (data.antichanneldelete.punishment.member.ban.neededdaycount > 0 && memberData.antichanneldelete.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.antichanneldelete.punishment.member.ban.neededdaycount) ||
                        //for 1 Week Check
                        (data.antichanneldelete.punishment.member.ban.neededweekcount > 0 && memberData.antichanneldelete.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.antichanneldelete.punishment.member.ban.neededweekcount) ||
                        //for 1 Month Check
                        (data.antichanneldelete.punishment.member.ban.neededmonthcount > 0 && memberData.antichanneldelete.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.antichanneldelete.punishment.member.ban.neededmonthcount) ||
                        //for All Time Check
                        (data.antichanneldelete.punishment.member.ban.noeededalltimecount > 0 && memberData.antichanneldelete.length >= data.antichanneldelete.punishment.member.ban.noeededalltimecount))) {
                    //Ban the Member
                    AddedMember.ban({
                            reason: `Anti CHANNEL DELETE - He deleting: ${channel.id} | ${channel.name}`
                        })
                        .then(member => {
                            //If there is the logger enabled, send information
                            if (data.all.logger && data.all.logger.length > 5) {
                                try {
                                    let ch = channel.guild.channels.cache.get(data.all.logger);
                                    if (ch) {
                                        const embed = new MessageEmbed()
                                            .setColor("RED")
                                            .setAuthor(`ANTI CHANNEL DELETE - Banned ${AddedMember.user.tag} for deleting ${channel.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869665114373095514/811556437284749322.png")
                                            .setDescription(`I banned <@${AddedUserID}> for **deleting** ${channel.name}\n\nThis was his/her ${memberData.antichanneldelete.length + 1} attemp to delete a Channel!\n> **${memberData.antichanneldelete.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} deleted** Channels in the Last 24 hours\n> **${memberData.antichanneldelete.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} deleted** Channels in the Last 7 Days\n> **${memberData.antichanneldelete.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} deleted** Channels in the Last 30 Days`)
                                            .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                                dynamic: true
                                            }))
                                        ch.send({
                                            embeds: [embed]
                                        }).catch((e) => {})
                                    }
                                } catch (e) {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                }
                            }
                            console.log(`ANTI CHANNEL DELETE - Banned ${member.user.tag} | ${member.user.id}`)
                        })
                        .catch((e) => {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        });
                }
            } catch (e) {
                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
            }
        }
    } catch (e) {
        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
    }
})

//anti ROLE Create - works | attemp counter fix...
client.on("roleCreate", async (role) => {
    try {
        const eventsTimestamp = Date.now().toString()
        if (!role.guild) return;
        antinuke_databasing(role.guild.id);
        let data = client.Anti_Nuke_System.get(role.guild.id)
        if (!data.all.enabled || !data.anticreaterole.enabled) return;
        let AuditData = await role.guild.fetchAuditLogs({
            limit: 1,
            type: "ROLE_CREATE",
        }).then((audit => {
            return audit.entries.first()
        })).catch((e) => {

            //send information
            if (data.all.logger && data.all.logger.length > 5) {
                try {
                    let ch = role.guild.channels.cache.get(data.all.logger);
                    if (ch) {
                        const embed = new MessageEmbed()
                            .setColor("YELLOW")
                            .setAuthor("ANTI ROLE CREATE - This is a Warn", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/warning-sign_26a0.png")
                            .setTitle("I am __missing__ the **Permission**to See the **Audit Log**!")
                            .setDescription("**ANTI-ROLECREATE System is not working without it!**")
                        ch.send({
                            embeds: [embed]
                        }).catch((e) => {})
                    }
                    return;
                } catch (e) {
                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    return;
                }
            }
            return;
        })
        let AddedUserID = AuditData.executor.id;
        let LogTimeString = AuditData.createdTimestamp.toString();

        const EventExecution = eventsTimestamp;
        const logtime = LogTimeString.slice(0, -3);
        const eventtime = EventExecution.slice(0, -3);
        if (AddedUserID == client.user.id) return;
        let AddedMember = await role.guild.members.fetch(AddedUserID).catch((e) => {
            if (data.all.logger && data.all.logger.length > 5) {
                try {
                    let ch = role.guild.channels.cache.get(data.all.logger);
                    if (ch) {
                        const embed = new MessageEmbed()
                            .setColor("YELLOW")
                            .setAuthor("ANTI ROLE CREATE - This is a Warn", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/warning-sign_26a0.png")
                            .setTitle(`I failed finding Data information about the User who created: \`${role.name}\`!`)
                            .setDescription(`SOMEONE created <@&${role.id}>, but I can't punish him...`)
                        ch.send({
                            embeds: [embed]
                        }).catch((e) => {})
                    }
                    return;
                } catch (e) {
                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    return;
                }
            }
            return;
        })
        if (AddedMember) {
            //if guild owner, he is whitelisted
            if (AddedUserID == AddedMember.guild.ownerID) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = role.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI ROLE CREATE - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is the **SERVER OWNER**`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            //if his highest role is above mine, he is whitelisted
            if (AddedMember.roles.cache.size > 0 && AddedMember.guild.me.roles.cache.size > 0 && AddedMember.roles.highest.rawPosition >= AddedMember.guild.me.roles.highest.rawPosition) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = role.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI ROLE CREATE - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause his/her **highest Role** (${AddedMember.roles.highest}) is higher/equal to **mine** (${AddedMember.guild.me.roles.highest}) !`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            //all whitelist above module
            if (data.all.whitelisted.users.includes(AddedUserID)) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = role.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI ROLE CREATE - ${AddedMember.user.tag} created ${role.name}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is whitelisted as a USER`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            if (AddedMember.roles.cache.size > 0 && AddedMember.roles.cache.some(r => data.all.whitelisted.roles.includes(r.id))) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = role.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI ROLE CREATE - ${AddedMember.user.tag} created ${role.name}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he has a whitelisted Role`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            if (data.anticreaterole.whitelisted.users.includes(AddedUserID)) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = role.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI ROLE CREATE - ${AddedMember.user.tag} created ${role.name}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is whitelisted as a USER`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            if (AddedMember.roles.cache.size > 0 && AddedMember.roles.cache.some(r => data.anticreaterole.whitelisted.roles.includes(r.id))) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = role.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI ROLE CREATE - ${AddedMember.user.tag} created ${role.name}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he has a whitelisted Role`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            //ensure the Data
            usr_antinuke_databasing(role.guild.id + AddedMember.id);
            let memberData = client.Anti_Nuke_System.get(role.guild.id + AddedMember.id);
            //increment the stats
            client.Anti_Nuke_System.push(role.guild.id + AddedMember.id, Date.now(), "anticreaterole")
            try {
                if (data.anticreaterole.punishment.member.removeroles.enabled &&
                    ( //for 1 Day check
                        (data.anticreaterole.punishment.member.removeroles.neededdaycount > 0 && memberData.anticreaterole.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.anticreaterole.punishment.member.removeroles.neededdaycount) ||
                        //for 1 Week Check
                        (data.anticreaterole.punishment.member.removeroles.neededweekcount > 0 && memberData.anticreaterole.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.anticreaterole.punishment.member.removeroles.neededweekcount) ||
                        //for 1 Month Check
                        (data.anticreaterole.punishment.member.removeroles.neededmonthcount > 0 && memberData.anticreaterole.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.anticreaterole.punishment.member.removeroles.neededmonthcount) ||
                        //for All Time Check
                        (data.anticreaterole.punishment.member.removeroles.noeededalltimecount > 0 && memberData.anticreaterole.length >= data.anticreaterole.punishment.member.removeroles.noeededalltimecount))
                ) {
                    try {
                        if (data.anticreaterole.punishment.removeaddedrole) {
                            //if there is a logger enabled then log the data
                            if (data.all.logger && data.all.logger.length > 5) {
                                try {
                                    let ch = role.guild.channels.cache.get(data.all.logger);
                                    if (ch) {
                                        const embed = new MessageEmbed()
                                            .setColor("GREEN")
                                            .setAuthor(`ANTI ROLE CREATE - I Deleted: ${role.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869657327941324860/PS7lwz7HwAAAABJRU5ErkJggg.png")
                                            .setDescription(`**I Deleted the Role:**\n> **${role.name}** | \`${role.id}\`\n\n**Added by:**\n> <@${AddedMember.user.id}> | **${AddedMember.user.tag}** (\`${AddedMember.user.id}\`)\n\n> *This is a step, which keeps your Server clean and secure!*`)
                                        ch.send({
                                            embeds: [embed]
                                        }).catch((e) => {})
                                    }
                                } catch (e) {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                }
                            }
                            //kick the Bot
                            role.delete(`Anti ROLECREATE - Created by: ${AddedUserID}`).catch((e) => {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            });
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                    //Remove his/her roles
                    let roles2set = [];
                    if (data.all.quarantine && data.all.quarantine.length > 5) {
                        try {
                            let therole = AddedMember.guild.roles.cache.get(data.all.quarantine);
                            if (therole && therole.id) {
                                roles2set.push(therole.id)
                            }
                        } catch (e) {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        }
                    }
                    AddedMember.roles.set(roles2set).then(member => {
                        //If there is the logger enabled, send information
                        if (data.all.logger && data.all.logger.length > 5) {
                            try {
                                let ch = role.guild.channels.cache.get(data.all.logger);
                                if (ch) {
                                    const embed = new MessageEmbed()
                                        .setColor("BLURPLE")
                                        .setAuthor(`ANTI ROLE CREATE - Removed Roles of ${AddedMember.user.tag} for creating ${role.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869664393783304212/869285770723217488.png")
                                        .setDescription(`I removed all possible Roles of <@${AddedUserID}> for **creating** ${role.name}\n\nThis was his/her ${memberData.anticreaterole.length + 1} attemp to create a Role!\n> **${memberData.anticreaterole.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} created** Roles in the Last 24 hours\n> **${memberData.anticreaterole.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} created** Roles in the Last 7 Days\n> **${memberData.anticreaterole.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} created** Roles in the Last 30 Days${roles2set.length > 0 ? `\n\n> **I also added to him/her the <@&${roles2set[0]}> Role!**` : ""}`)
                                        .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                            dynamic: true
                                        }))
                                    ch.send({
                                        embeds: [embed]
                                    }).catch((e) => {})
                                }
                            } catch (e) {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            }
                        }
                        console.log(`ANTI Role Create - Removed roles of ${member.user.tag} | ${member.user.id}`)
                    }).catch((e) => {})
                }
                //Kick Member punishment 4
                if (AddedMember.kickable && data.anticreaterole.punishment.member.kick.enabled &&
                    ( //for 1 Day check
                        (data.anticreaterole.punishment.member.kick.neededdaycount > 0 && memberData.anticreaterole.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.anticreaterole.punishment.member.kick.neededdaycount) ||
                        //for 1 Week Check
                        (data.anticreaterole.punishment.member.kick.neededweekcount > 0 && memberData.anticreaterole.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.anticreaterole.punishment.member.kick.neededweekcount) ||
                        //for 1 Month Check
                        (data.anticreaterole.punishment.member.kick.neededmonthcount > 0 && memberData.anticreaterole.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.anticreaterole.punishment.member.kick.neededmonthcount) ||
                        //for All Time Check
                        (data.anticreaterole.punishment.member.kick.noeededalltimecount > 0 && memberData.anticreaterole.length >= data.anticreaterole.punishment.member.kick.noeededalltimecount)) &&
                    (!data.anticreaterole.punishment.member.ban.enabled ||
                        ( //for 1 Day check
                            (data.anticreaterole.punishment.member.ban.neededdaycount > 0 && memberData.anticreaterole.filter(v => {
                                return v - (Date.now() - 8640000000) > 0
                            }).length < data.anticreaterole.punishment.member.ban.neededdaycount) ||
                            //for 1 Week Check
                            (data.anticreaterole.punishment.member.ban.neededweekcount > 0 && memberData.anticreaterole.filter(v => {
                                return v - (Date.now() - 7 * 8640000000) > 0
                            }).length < data.anticreaterole.punishment.member.ban.neededweekcount) ||
                            //for 1 Month Check
                            (data.anticreaterole.punishment.member.ban.neededmonthcount > 0 && memberData.anticreaterole.filter(v => {
                                return v - (Date.now() - 30 * 8640000000) > 0
                            }).length < data.anticreaterole.punishment.member.ban.neededmonthcount) ||
                            //for All Time Check
                            (data.anticreaterole.punishment.member.ban.noeededalltimecount > 0 && memberData.anticreaterole.length < data.anticreaterole.punishment.member.ban.noeededalltimecount))
                    ) //Only do the kick if no ban is enabled or if he doesnt have enough counts for getting banned
                ) {
                    try {
                        if (data.anticreaterole.punishment.removeaddedrole) {
                            //if there is a logger enabled then log the data
                            if (data.all.logger && data.all.logger.length > 5) {
                                try {
                                    let ch = role.guild.channels.cache.get(data.all.logger);
                                    if (ch) {
                                        const embed = new MessageEmbed()
                                            .setColor("GREEN")
                                            .setAuthor(`ANTI ROLE CREATE - I Deleted: ${role.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869657327941324860/PS7lwz7HwAAAABJRU5ErkJggg.png")
                                            .setDescription(`**I Deleted the Role:**\n> **${role.name}** | \`${role.id}\`\n\n**Added by:**\n> <@${AddedMember.user.id}> | **${AddedMember.user.tag}** (\`${AddedMember.user.id}\`)\n\n> *This is a step, which keeps your Server clean and secure!*`)
                                        ch.send({
                                            embeds: [embed]
                                        }).catch((e) => {})
                                    }
                                } catch (e) {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                }
                            }
                            //kick the Bot
                            role.delete(`Anti ROLECREATE - Created by: ${AddedUserID}`).catch((e) => {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            });
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                    //Kick the Member
                    AddedMember.kick(`ANTI ROLE CREATE - He/She created: ${role.id} | ${role.name}`).then(member => {
                        //If there is the logger enabled, send information
                        if (data.all.logger && data.all.logger.length > 5) {
                            try {
                                let ch = role.guild.channels.cache.get(data.all.logger);
                                if (ch) {
                                    const embed = new MessageEmbed()
                                        .setColor("ORANGE")
                                        .setAuthor(`ANTI ROLE CREATE - Kicked ${AddedMember.user.tag} for creating ${role.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869665099512688670/hammer_1f528.png")
                                        .setDescription(`I kicked <@${AddedUserID}> for **creating** ${role.name}\n\nThis was his/her ${memberData.anticreaterole.length + 1} attemp to create a Role!\n> **${memberData.anticreaterole.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} created** Roles in the Last 24 hours\n> **${memberData.anticreaterole.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} created** Roles in the Last 7 Days\n> **${memberData.anticreaterole.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} created** Roles in the Last 30 Days`)
                                        .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                            dynamic: true
                                        }))
                                    ch.send({
                                        embeds: [embed]
                                    }).catch((e) => {})
                                }
                            } catch (e) {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            }
                        }
                        console.log(`ANTI Role CREATE - Kicked ${member.user.tag} | ${member.user.id}`)
                    }).catch((e) => {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    });
                }
                if (AddedMember.bannable && data.anticreaterole.punishment.member.ban.enabled && ( //for 1 Day check
                        (data.anticreaterole.punishment.member.ban.neededdaycount > 0 && memberData.anticreaterole.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.anticreaterole.punishment.member.ban.neededdaycount) ||
                        //for 1 Week Check
                        (data.anticreaterole.punishment.member.ban.neededweekcount > 0 && memberData.anticreaterole.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.anticreaterole.punishment.member.ban.neededweekcount) ||
                        //for 1 Month Check
                        (data.anticreaterole.punishment.member.ban.neededmonthcount > 0 && memberData.anticreaterole.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.anticreaterole.punishment.member.ban.neededmonthcount) ||
                        //for All Time Check
                        (data.anticreaterole.punishment.member.ban.noeededalltimecount > 0 && memberData.anticreaterole.length >= data.anticreaterole.punishment.member.ban.noeededalltimecount))) {
                    try {
                        if (data.anticreaterole.punishment.removeaddedrole) {
                            //if there is a logger enabled then log the data
                            if (data.all.logger && data.all.logger.length > 5) {
                                try {
                                    let ch = role.guild.channels.cache.get(data.all.logger);
                                    if (ch) {
                                        const embed = new MessageEmbed()
                                            .setColor("GREEN")
                                            .setAuthor(`ANTI ROLE CREATE - I Deleted: ${role.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869657327941324860/PS7lwz7HwAAAABJRU5ErkJggg.png")
                                            .setDescription(`**I Deleted the Role:**\n> **${role.name}** | \`${role.id}\`\n\n**Added by:**\n> <@${AddedMember.user.id}> | **${AddedMember.user.tag}** (\`${AddedMember.user.id}\`)\n\n> *This is a step, which keeps your Server clean and secure!*`)
                                        ch.send({
                                            embeds: [embed]
                                        }).catch((e) => {})
                                    }
                                } catch (e) {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                }
                            }
                            //kick the Bot
                            role.delete(`Anti ROLECREATE - Created by: ${AddedUserID}`).catch((e) => {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            });
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                    //Ban the Member
                    AddedMember.ban({
                            reason: `ANTI ROLE CREATE - He/She created: ${role.id} | ${role.name}`
                        })
                        .then(member => {
                            //If there is the logger enabled, send information
                            if (data.all.logger && data.all.logger.length > 5) {
                                try {
                                    let ch = role.guild.channels.cache.get(data.all.logger);
                                    if (ch) {
                                        const embed = new MessageEmbed()
                                            .setColor("RED")
                                            .setAuthor(`ANTI ROLE CREATE - Banned ${AddedMember.user.tag} for creating ${role.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869665114373095514/811556437284749322.png")
                                            .setDescription(`I Banned <@${AddedUserID}> for **creating** ${role.name}\n\nThis was his/her ${memberData.anticreaterole.length + 1} attemp to create a Role!\n> **${memberData.anticreaterole.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} created** Roles in the Last 24 hours\n> **${memberData.anticreaterole.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} created** Roles in the Last 7 Days\n> **${memberData.anticreaterole.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} created** Roles in the Last 30 Days`)
                                            .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                                dynamic: true
                                            }))
                                        ch.send({
                                            embeds: [embed]
                                        }).catch((e) => {})
                                    }
                                } catch (e) {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                }
                            }
                            console.log(`ANTI ROLE CREATE - Banned ${member.user.tag} | ${member.user.id}`)
                        })
                        .catch((e) => {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        });
                }
            } catch (e) {
                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
            }
        }
    } catch (e) {
        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
    }
})

//anti ROLE DELETE - works | attemp counter fix...
client.on("roleDelete", async (role) => {
    try {
        const eventsTimestamp = Date.now().toString()
        if (!role.guild) return
        antinuke_databasing(role.guild.id);
        let data = client.Anti_Nuke_System.get(role.guild.id)
        if (!data.all.enabled || !data.antideleterole.enabled) return
        let AuditData = await role.guild.fetchAuditLogs({
            limit: 1,
            type: "ROLE_DELETE",
        }).then((audit => {
            return audit.entries.first()
        })).catch((e) => {

            //send information
            if (data.all.logger && data.all.logger.length > 5) {
                try {
                    let ch = role.guild.channels.cache.get(data.all.logger);
                    if (ch) {
                        const embed = new MessageEmbed()
                            .setColor("YELLOW")
                            .setAuthor("ANTI ROLE DELETE - This is a Warn", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/warning-sign_26a0.png")
                            .setTitle("I am __missing__ the **Permission**to See the **Audit Log**!")
                            .setDescription("**ANTI-ROLEDELETE System is not working without it!**")
                        ch.send({
                            embeds: [embed]
                        }).catch((e) => {})
                    }
                    return;
                } catch (e) {
                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    return;
                }
            }
            return;
        })
        let AddedUserID = AuditData.executor.id;
        let LogTimeString = AuditData.createdTimestamp.toString();

        const EventExecution = eventsTimestamp;
        const logtime = LogTimeString.slice(0, -3);
        const eventtime = EventExecution.slice(0, -3);
        if (AddedUserID == client.user.id) return
        let AddedMember = await role.guild.members.fetch(AddedUserID).catch((e) => {
            if (data.all.logger && data.all.logger.length > 5) {
                try {
                    let ch = role.guild.channels.cache.get(data.all.logger);
                    if (ch) {
                        const embed = new MessageEmbed()
                            .setColor("YELLOW")
                            .setAuthor("ANTI ROLE DELETE - This is a Warn", "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/warning-sign_26a0.png")
                            .setTitle(`I failed finding Data information about the User who deleted: \`${role.name}\`!`)
                            .setDescription(`SOMEONE deleted \`${role.name}\` | ${role.id}, but I can't punish him...`)
                        ch.send({
                            embeds: [embed]
                        }).catch((e) => {})
                    }
                    return;
                } catch (e) {
                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    return;
                }
            }
            return;
        })
        if (AddedMember) {
            //if guild owner, he is whitelisted
            if (AddedUserID == AddedMember.guild.ownerID) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = role.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI ROLE DELETE - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is the **SERVER OWNER**`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            //if his highest role is above mine, he is whitelisted
            if (AddedMember.roles.cache.size > 0 && AddedMember.guild.me.roles.cache.size > 0 && AddedMember.roles.highest.rawPosition >= AddedMember.guild.me.roles.highest.rawPosition) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = role.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI ROLE DELETE - ${AddedMember.user.tag}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause his/her **highest Role** (${AddedMember.roles.highest}) is higher/equal to **mine** (${AddedMember.guild.me.roles.highest}) !`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            //all whitelist above module
            if (data.all.whitelisted.users.includes(AddedUserID)) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = role.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI ROLE DELETE - ${AddedMember.user.tag} delete ${role.name}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is whitelisted as a USER`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            if (AddedMember.roles.cache.size > 0 && AddedMember.roles.cache.some(r => data.all.whitelisted.roles.includes(r.id))) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = role.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI ROLE DELETE - ${AddedMember.user.tag} deleted ${role.name}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he has a whitelisted Role`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }

            if (data.antideleterole.whitelisted.users.includes(AddedUserID)) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = role.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI ROLE DELETE - ${AddedMember.user.tag} delete ${role.name}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he/she is whitelisted as a USER`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }
            if (AddedMember.roles.cache.size > 0 && AddedMember.roles.cache.some(r => data.antideleterole.whitelisted.roles.includes(r.id))) {
                if (data.all.showwhitelistlog && data.all.logger && data.all.logger.length > 5) {
                    try {
                        let ch = role.guild.channels.cache.get(data.all.logger);
                        if (ch) {
                            const embed = new MessageEmbed()
                                .setColor("#fffff9")
                                .setAuthor(`ANTI ROLE DELETE - ${AddedMember.user.tag} deleted ${role.name}`, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                                .setDescription(`I did nothing, cause he has a whitelisted Role`)
                                .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                    dynamic: true
                                }))
                            ch.send({
                                embeds: [embed]
                            }).catch((e) => {})
                        }
                    } catch (e) {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    }
                }
                return;
            }

            //ensure the Data
            usr_antinuke_databasing(role.guild.id + AddedMember.id);
            let memberData = client.Anti_Nuke_System.get(role.guild.id + AddedMember.id);
            //increment the stats
            client.Anti_Nuke_System.push(role.guild.id + AddedMember.id, Date.now(), "antideleterole")
            try {
                if (data.antideleterole.punishment.member.removeroles.enabled &&
                    ( //for 1 Day check
                        (data.antideleterole.punishment.member.removeroles.neededdaycount > 0 && memberData.antideleterole.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.antideleterole.punishment.member.removeroles.neededdaycount) ||
                        //for 1 Week Check
                        (data.antideleterole.punishment.member.removeroles.neededweekcount > 0 && memberData.antideleterole.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.antideleterole.punishment.member.removeroles.neededweekcount) ||
                        //for 1 Month Check
                        (data.antideleterole.punishment.member.removeroles.neededmonthcount > 0 && memberData.antideleterole.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.antideleterole.punishment.member.removeroles.neededmonthcount) ||
                        //for All Time Check
                        (data.antideleterole.punishment.member.removeroles.noeededalltimecount > 0 && memberData.antideleterole.length >= data.antideleterole.punishment.member.removeroles.noeededalltimecount))
                ) {
                    //Remove his/her roles
                    let roles2set = [];
                    if (data.all.quarantine && data.all.quarantine.length > 5) {
                        try {
                            let therole = AddedMember.guild.roles.cache.get(data.all.quarantine);
                            if (therole && therole.id) {
                                roles2set.push(therole.id)
                            }
                        } catch (e) {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        }
                    }
                    AddedMember.roles.set(roles2set).then(member => {
                        //If there is the logger enabled, send information
                        if (data.all.logger && data.all.logger.length > 5) {
                            try {
                                let ch = role.guild.channels.cache.get(data.all.logger);
                                if (ch) {
                                    const embed = new MessageEmbed()
                                        .setColor("BLURPLE")
                                        .setAuthor(`ANTI ROLE DELETE - Removed Roles of ${AddedMember.user.tag} for deleting ${role.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869664393783304212/869285770723217488.png")
                                        .setDescription(`I removed all possible Roles of <@${AddedUserID}> for **deleting** ${role.name}\n\nThis was his/her ${memberData.antideleterole.length + 1} attemp to delete a Role!\n> **${memberData.antideleterole.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} deleted** Roles in the Last 24 hours\n> **${memberData.antideleterole.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} deleted** Roles in the Last 7 Days\n> **${memberData.antideleterole.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} deleted** Roles in the Last 30 Days${roles2set.length > 0 ? `\n\n> **I also added to him/her the <@&${roles2set[0]}> Role!**` : ""}`)
                                        .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                            dynamic: true
                                        }))
                                    ch.send({
                                        embeds: [embed]
                                    }).catch((e) => {})
                                }
                            } catch (e) {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            }
                        }
                        console.log(`ANTI Role DELETE - Removed roles of ${member.user.tag} | ${member.user.id}`)
                    }).catch((e) => {})
                }
                //Kick Member punishment 4
                if (AddedMember.kickable && data.antideleterole.punishment.member.kick.enabled &&
                    ( //for 1 Day check
                        (data.antideleterole.punishment.member.kick.neededdaycount > 0 && memberData.antideleterole.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.antideleterole.punishment.member.kick.neededdaycount) ||
                        //for 1 Week Check
                        (data.antideleterole.punishment.member.kick.neededweekcount > 0 && memberData.antideleterole.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.antideleterole.punishment.member.kick.neededweekcount) ||
                        //for 1 Month Check
                        (data.antideleterole.punishment.member.kick.neededmonthcount > 0 && memberData.antideleterole.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.antideleterole.punishment.member.kick.neededmonthcount) ||
                        //for All Time Check
                        (data.antideleterole.punishment.member.kick.noeededalltimecount > 0 && memberData.antideleterole.length >= data.antideleterole.punishment.member.kick.noeededalltimecount)) &&
                    (!data.antideleterole.punishment.member.ban.enabled ||
                        ( //for 1 Day check
                            (data.antideleterole.punishment.member.ban.neededdaycount > 0 && memberData.antideleterole.filter(v => {
                                return v - (Date.now() - 8640000000) > 0
                            }).length < data.antideleterole.punishment.member.ban.neededdaycount) ||
                            //for 1 Week Check
                            (data.antideleterole.punishment.member.ban.neededweekcount > 0 && memberData.antideleterole.filter(v => {
                                return v - (Date.now() - 7 * 8640000000) > 0
                            }).length < data.antideleterole.punishment.member.ban.neededweekcount) ||
                            //for 1 Month Check
                            (data.antideleterole.punishment.member.ban.neededmonthcount > 0 && memberData.antideleterole.filter(v => {
                                return v - (Date.now() - 30 * 8640000000) > 0
                            }).length < data.antideleterole.punishment.member.ban.neededmonthcount) ||
                            //for All Time Check
                            (data.antideleterole.punishment.member.ban.noeededalltimecount > 0 && memberData.antideleterole.length < data.antideleterole.punishment.member.ban.noeededalltimecount))
                    ) //Only do the kick if no ban is enabled or if he doesnt have enough counts for getting banned
                ) {
                    //Kick the Member
                    AddedMember.kick(`ANTI ROLE DELETE - He/She created: ${role.id} | ${role.name}`).then(member => {
                        //If there is the logger enabled, send information
                        if (data.all.logger && data.all.logger.length > 5) {
                            try {
                                let ch = role.guild.channels.cache.get(data.all.logger);
                                if (ch) {
                                    const embed = new MessageEmbed()
                                        .setColor("ORANGE")
                                        .setAuthor(`ANTI ROLE DELETE - Kicked ${AddedMember.user.tag} for deleting ${role.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869665099512688670/hammer_1f528.png")
                                        .setDescription(`I kicked <@${AddedUserID}> for **deleting** ${role.name}\n\nThis was his/her ${memberData.antideleterole.length + 1} attemp to delete a Role!\n> **${memberData.antideleterole.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} deleted** Roles in the Last 24 hours\n> **${memberData.antideleterole.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} deleted** Roles in the Last 7 Days\n> **${memberData.antideleterole.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} deleted** Roles in the Last 30 Days`)
                                        .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                            dynamic: true
                                        }))
                                    ch.send({
                                        embeds: [embed]
                                    }).catch((e) => {})
                                }
                            } catch (e) {
                                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                            }
                        }
                        console.log(`ANTI Role DELETE - Kicked ${member.user.tag} | ${member.user.id}`)
                    }).catch((e) => {
                        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                    });
                }
                if (AddedMember.bannable && data.antideleterole.punishment.member.ban.enabled && ( //for 1 Day check
                        (data.antideleterole.punishment.member.ban.neededdaycount > 0 && memberData.antideleterole.filter(v => {
                            return v - (Date.now() - 8640000000) > 0
                        }).length >= data.antideleterole.punishment.member.ban.neededdaycount) ||
                        //for 1 Week Check
                        (data.antideleterole.punishment.member.ban.neededweekcount > 0 && memberData.antideleterole.filter(v => {
                            return v - (Date.now() - 7 * 8640000000) > 0
                        }).length >= data.antideleterole.punishment.member.ban.neededweekcount) ||
                        //for 1 Month Check
                        (data.antideleterole.punishment.member.ban.neededmonthcount > 0 && memberData.antideleterole.filter(v => {
                            return v - (Date.now() - 30 * 8640000000) > 0
                        }).length >= data.antideleterole.punishment.member.ban.neededmonthcount) ||
                        //for All Time Check
                        (data.antideleterole.punishment.member.ban.noeededalltimecount > 0 && memberData.antideleterole.length >= data.antideleterole.punishment.member.ban.noeededalltimecount))) {
                    //Ban the Member
                    AddedMember.ban({
                            reason: `ANTI ROLE DELETE - He/She created: ${role.id} | ${role.name}`
                        })
                        .then(member => {
                            //If there is the logger enabled, send information
                            if (data.all.logger && data.all.logger.length > 5) {
                                try {
                                    let ch = role.guild.channels.cache.get(data.all.logger);
                                    if (ch) {
                                        const embed = new MessageEmbed()
                                            .setColor("RED")
                                            .setAuthor(`ANTI ROLE DELETE - Banned ${AddedMember.user.tag} for deleting ${role.name}`, "https://cdn.discordapp.com/attachments/820695790170275871/869665114373095514/811556437284749322.png")
                                            .setDescription(`I Banned <@${AddedUserID}> for **deleting** ${role.name}\n\nThis was his/her ${memberData.antideleterole.length + 1} attemp to delete a Role!\n> **${memberData.antideleterole.filter(v => {return v - (Date.now() - 8640000000) > 0} ).length + 1} deleted** Roles in the Last 24 hours\n> **${memberData.antideleterole.filter(v => {return v - (Date.now() -7 *  8640000000) > 0} ).length + 1} deleted** Roles in the Last 7 Days\n> **${memberData.antideleterole.filter(v => {return v - (Date.now() - 30 * 8640000000) > 0} ).length + 1} deleted** Roles in the Last 30 Days`)
                                            .setFooter("ID: " + AddedUserID, AddedMember.user.displayAvatarURL({
                                                dynamic: true
                                            }))
                                        ch.send({
                                            embeds: [embed]
                                        }).catch((e) => {})
                                    }
                                } catch (e) {
                                    console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                                }
                            }
                            console.log(`ANTI ROLE DELETE - Banned ${member.user.tag} | ${member.user.id}`)
                        })
                        .catch((e) => {
                            console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
                        });
                }
            } catch (e) {
                console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
            }

        }
    } catch (e) {
        console.log("ANTI-NUKE SYSTEM - ERROR-CATCHER".dim.cyan, e.stack ? String(e.stack).dim.grey : String(e).dim.grey)
    }
})