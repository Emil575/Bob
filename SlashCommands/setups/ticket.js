const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ticket',
    description: 'kek',
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

            let ticket = client.setups.get(interaction.guild.id, "ticketsystem");
        
            let rembed = new MessageEmbed()
             .setTitle("What do u want to do?")
             .setDescription(`
          **1.** \`Create Ticket-System\` - *Create ONE Ticket System for your Server*
          **2.** \`Edit Messages\` - *Edit the Message at the ticket open*
          **3.** \`Add AdminRole\`- *Adds a Role for Ticket Permissions*
          **4.** \`Remove AdminRole\`- *Removes a Role for Ticket Permissions*
          ${!ticket.enabled ?
          `**5.** \`Enable Ticket-System\` - *Enable the Ticket-Syste,*` :
          `**5.** \`Disable Ticket-System\` - *Disables the Ticket-System: no more tickets can be opened*`}
          **6.** \`Delete & Reset\` - *deletes current setup, which allows you to resetup*
          `)
             .setFooter("Pick the INDEX NUMBER")
        
             interaction.channel.send({embeds: [rembed]}).then(msg => {
              msg.channel.awaitMessages(m=>m.author.id===interaction.author.id,{max:1,time:30000,errors:['time']}).then(collected=>{
                switch(collected.first().content.toString()){
                  case "1":
                    let msg6 = new MessageEmbed()
            .setTitle(`**Hey ${interaction.user.username}!**`)
            .setDescription(`Please input the message of the ticket setup (React with 🔓 to open a ticket | is always provided)`)
            .setFooter("Milrato")
            interaction.channel.send({embeds: [msg6]}).then(msg => {
              msg.channel.awaitMessages(m => m.author.id == interaction.author.id,
                  { max: 1, time: 180000, errors: ['time'], }).then(collected => {
                    ticketmsg = collected.first().content;
                    interaction.guild.channels.create("Support - Tickets", {
                    type: 'category',
                    permissionOverwrites: [
                      {
                        id: interaction.guild.id,
                        allow: ['READ_MESSAGE_HISTORY'],
                        deny: ['SEND_MESSAGES'],
                      },
                    ],
                  })
                  .then((channel) => {
                    //PARENT ID IN DB
                    client.setups.set(interaction.guild.id, channel.id, "ticketsystem.parentid");
                    //PARENT ID IN DB
                    var lol = interaction.guild.channels
                    .create("Create a ticket", {
                      type: 'text',
                      topic: "React with 🔓 to open a Ticket",
                      parent: channel.id,
                      permissionOverwrites: [
                        {
                          id: interaction.guild.id,
                          allow: ['READ_MESSAGE_HISTORY'],
                          deny: ['SEND_MESSAGES'],
                        },
                      ],
                    })
                    .then((channel) => {
                      //channel id in db
                      client.setups.set(interaction.guild.id, channel.id, "ticketsystem.channelid");
                      //channel id in db
                     channel.send(new MessageEmbed()
                     .setTitle(`**Create a Ticket**`)
                     .setDescription(`${ticketmsg}\n\nReact with 🔓 to open a ticket`)
                     .setFooter("Milrato", config.AVATARURL)
                     .setThumbnail(config.AVATARURL)
                     .setColor(config.colors.yes)
                     ).then(msg=>{
                      //message id in db
                      client.setups.set(interaction.guild.id, msg.id, "ticketsystem.messageid");
                      client.setups.set(interaction.guild.id, true, "ticketsystem.enabled");
                      msg.react("🔓")
                            let themebd = new MessageEmbed()
                            .setColor(config.colors.yes)
                            .setTitle("Your Ticket Setup is created, you can edit everything by running `//setup` again")
                            .setDescription(`<#${channel.id}>`)
                            .setFooter("Milrato", config.AVATARURL)
                            .setThumbnail(config.AVATARURL)
                            interaction.reply(themebd)
                      })
                    })
                  })
                }).catch(error=>{
                  console.log(error)
                  return interaction.reply("SORRY BUT YOUR TIME RAN OUT!")
              })
              });
                    break;
                  case "6":
                    try{
                      let channel = interaction.guild.channels.cache.get(ticket.channelid)
                      channel.delete();
                    }catch{}
                    try{
                      let parent = interaction.guild.channels.cache.get(ticket.parentid)
                      parent.delete();
                    }catch{}
                    interaction.reply("Successfully resetted the current Ticket Setup!")
                    client.setups.set(interaction.guild.id, {
                      enabled: true,
                      guildid: interaction.guild.id,
                      messageid: "",
                      channelid: "",
                      parentid: "",
                      message: "Hey {user}, thanks for opening an ticket! Someone will help you soon!",
                      adminroles: []
                    }, "ticketsystem");
                  break;
                  case "2":
                   let rembed = new MessageEmbed()
                   .setColor(config.colors.yes)
                   .setFooter("Pick the INDEX NUMBER", config.AVATARURL)
                   .setThumbnail(config.AVATARURL)
             .setTitle("Enter the message now!")
             .setDescription(`{user} == the user whoe opens the ticket`)
             interaction.channel.send({embeds: [rembed]}).then(msg => {
                      msg.channel.awaitMessages(m=>m.author.id === interaction.author.id,{max:1,time:30000,errors:['time']}).then(collected=>{
                        interaction.reply("Successfully changed the Message")
                        client.setups.set(interaction.guild.id, collected.first().content, "ticketsystem.message");
                      }).catch(error=>{
                        console.log(error)
                        return interaction.reply("SORRY BUT YOUR TIME RAN OUT!")
                    })
                    })
                  break;
                  case "3":
                    let rrembed = new MessageEmbed()
                    .setColor(config.colors.yes)
                    .setFooter("Pick the INDEX NUMBER", config.AVATARURL)
                    .setThumbnail(config.AVATARURL)
                    .setTitle("Ping a Role now!")
                    .setDescription(`Just Ping the Role`)
                    interaction.channel.send({embeds: [rrembed]}).then(msg => {
                               msg.channel.awaitMessages(m=>m.author.id===interaction.author.id,{max:1,time:30000,errors:['time']}).then(collected=>{
                                 let role = collected.first().mentions.roles.first();
                                 if(!role) interaction.reply("CANCELLED, u didn't Pingged a valid Role")
                                 console.log(role)
                                 interaction.reply("Successfully **added**: `" + role.name + "` to the Admin-Roles");
                                 client.setups.push(interaction.guild.id, role.id, "ticketsystem.adminroles");
                                 console.log(client.setups.get(interaction.guild.id, "ticketsystem"));
                               }).catch(error=>{
                                console.log(error)
                                return interaction.reply("SORRY BUT YOUR TIME RAN OUT!")
                            })
                           })
                  break;
                  case "4":
                    let rrrembed = new MessageEmbed()
                    .setColor(config.colors.yes)
                    .setFooter("Pick the INDEX NUMBER", config.AVATARURL)
                    .setThumbnail(config.AVATARURL)
                    .setTitle("Ping a Role now!")
                    .setDescription(`Just Ping the Role`)
                           interaction.channel.send({embeds: [rrrembed]}).then(msg => {
                             msg.channel.awaitMessages(m=>m.author.id===interaction.author.id,{max:1,time:30000,errors:['time']}).then(collected=>{
                               let role = collected.first().mentions.roles.first();
                               if(!role) interaction.reply("CANCELLED, u didn't Pingged a valid Role")
                               console.log(role)
                               try{
                                client.setups.remove(interaction.guild.id, role.id, "ticketsystem.adminroles");
                                interaction.reply("Successfully **removed**: `" + role.name + "` from the Admin-Roles");
                               }catch{
                                interaction.reply("ERROR -> Resetted all Admin roles")
                                client.setups.set(interaction.guild.id, [], "ticketsystem.adminroles");
                               }
        
                               console.log(client.setups.get(interaction.guild.id, "ticketsystem"));
                             }).catch(error=>{
                              console.log(error)
                              return message.reply("SORRY BUT YOUR TIME RAN OUT!")
                          })
                           })
                    break;
                  case "5":
                    if(!client.setups.get(interaction.guild.id, "ticketsystem.enabled")) {
                      client.setups.set(interaction.guild.id, true, "ticketsystem.enabled");
                      interaction.reply("Succesfully enabled the Ticket-System")
                    }
                    else if(client.setups.get(interaction.guild.id, "ticketsystem.enabled")) {
                      client.setups.set(interaction.guild.id, false, "ticketsystem.enabled");
                      interaction.reply("Succesfully disabled the Ticket-System")
                    }
                    else{
                        interaction.reply("Something went wrong")
                    }
                    break;
                    default:
                        interaction.reply(String("SORRY, that Number does not exists :(\n Your Input:\n> " + collected.first().content).substr(0,1999))
                  break;
                }
              }).catch(error=>{
                console.log(error)
                return interaction.reply("SORRY BUT YOUR TIME RAN OUT!")
            })
          })
    },
};
