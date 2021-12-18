const { Client, CommandInteraction } = require('discord.js');;

module.exports = {
    name: 'rank',
    description: 'setup ranking',
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
        let rembed = new MessageEmbed()
        .setTitle("What do u want to do?")
        .setDescription(`
     ${!client.setups.get(interaction.guild.id, "ranking.enabled") ?
     `**1.** \`Enable Ranking\` - *Enables the Ranking system for this Server*` :
     `**1.** \`Disable Ranking\` - *Disables the Ranking system for this Server*`}
     **2.** \`Change Background\` - *Changes the Background of the Rankcard*
     **3.** \`Reset\` - *Resets settings for Ranking System*
     `)
        .setFooter("Pick the INDEX NUMBER")
    interaction.channel.send({
        embeds: [rembed]
    }).then(msg => {
        msg.channel.awaitMessages({
            max: 1,
            errors:['time'],
            time: 30000
        }).then(collected => {
            switch(collected.first().content.toString()){
                case "1":
                  if(!client.setups.get(message.guild.id, "ranking.enabled")) {
                    client.setups.set(message.guild.id, true, "ranking.enabled");
                    interaction.reply({content: "Succesfully enable the Ranking System"})
                  }
                  else if(client.setups.get(message.guild.id, "ranking.enabled")) {
                    client.setups.set(message.guild.id, false, "ranking.enabled");
                    interaction.reply({content: "Succesfully disabled the Ranking System"})
                  }
                  else{
                    message.reply("Something went wrong")
                  }
                break;
                  case "2":
                    let rembed = new MessageEmbed()
                    .setTitle("What do u want to do?")
                    .setDescription(`
                 **1.** \`Disable\` - *Send 1 to disable it*
                 **2.** \`Enter Url\` - *Just Send the Url*
                 `)
                    .setFooter("Pick the INDEX NUMBER / send the IMAGE URl")
                    var url;
                interaction.channel.send({
                    embeds: [rembed]
                }).then(msg => {
                    msg.channel.awaitMessages({
                        max: 1,
                        time: 30000,
                        errors: ['time']
                    }).then(collected => {
                        switch(collected.first().content.toString()){
                            case "1":
                                client.setups.set(message.guild.id, "null", "ranking.backgroundimage")
                            break;
                            default: 
                            if(collected.first().attachments.size > 0){
                                if(collected.first().attachments.every(attachIsImage)){
                                    interaction.reply({
                                        content: "Successfully, set your Background Image! Please make sure to **not** delete your Image from the Channel!"
                                    })
                                    client.setups.set(interaction.guild.id, url, "ranking.backgroundimage")
                                }else{
                                    interaction.reply({
                                        content: "Could not your message as a backgroundimage"
                                    })
                                }
                            }
                            else if (collected.first().content.includes("https")||collected.first().content.includes("http")){
                                interaction.reply({
                                    content: "Successfully, set your Background Image! Please make sure to **not** delete your Image from the Channel!"
                                })
                                client.setups.set(message.guild.id, collected.first().content, "ranking.backgroundimage")
                            }
                            else{
                                interaction.reply({
                                    content: "Could not your message as a backgroundimage"
                                })
                            }
                            break;
                        }
                        function attachIsImage(msgAttach){
                            url = msgAttach.url;

                            return url.indexOf("png", url.length - "png".length /*or 3*/) !== -1 ||
                            url.indexOf("jpeg", url.length - "jpeg".length /*or 3*/) !== -1 ||
                            url.indexOf("jpg", url.length - "jpg".length /*or 3*/) !== -1;
                        }
                    })
                })
                break;
                case "3":
                    client.setups.set(message.guild.id, {
                        enabled: true,
                        backgroundimage: "null",
                    }, "ranking");
                    let allmembers = message.guild.members.cache.keyArray();
                    for(let i = 0; i < allmembers.length; i++) {
                      try{
                        let rankuser = message.guild.members.cache.get(allmembers[i]).user;
                        const key = `${message.guild.id}-${rankuser.id}`;
                        client.points.set(key, 1, `level`); //set level to 0
                        client.points.set(key, 0, `points`); //set the points to 0
                        client.points.set(key, 400, `neededpoints`) //set neededpoints to 0 for beeing sure
                        client.points.set(key, "", `oldmessage`); //set old message to 0
                      }catch{}
                    }
                    interaction.reply({
                        content: "Succesfully resetted the Ranking System"
                    })
                    break;
                    default: 
                    return
                    break;
            }
        })
    })
    },
};
