// const {
//     MessageEmbed
// } = require("discord.js")
// const {
//     SEND
// } = require('../function/Logger')
// const client = require("..")
// client.on('channelCreate', async (channel) => {
//     SEND(channel.guild, client, `Channel: \`${channel.name}\` \n ${channel}`, 'CHANNEL CREATE')
// })
// client.on('channelDelete', async (channel) => {
//     SEND(channel.guild, client, `Channel: \`${channel.name}\` \n ${channel}`, "CHANNEL DELETE")
// })
// client.on('channelPinsUpdate', async (channel, time) => {
//     SEND(channel.guild, client, `Channel: \`${channel.name}\` \n ${channel} \n\nPinned at: ${time}`, "CHANNEL PINS UPDATE")
// })
// client.on('channelUpdate', async (OldChannel, NewChannel) => {
//     let NewCategory;
//     try {
//         NewCategory = NewChannel.parent.name;
//     } catch {
//         newCategory = "ERROR";
//     }
//     let GuildsChannel = NewChannel.guild;
//     if(!NewCategory) NewCategory = 'None';
//     if(!GuildsChannel || !GuildsChannel.available) return;

//     let types = {
//         text: 'Text channel',
//         voice: 'Voice channel',
//         null: 'None',
//         news: "News Channel",
//     };
//     if(OldChannel.name !== NewChannel.name){
//         SEND(OldChannel.guild, client, `__Channel: ${newChannel}__ \n\n**Before:** \`${oldChannel.name}\`
//         **After:** \`${newChannel.name}\`
//         **Channel type:** \`${types[newChannel.type]}\`
//         **Channel category:** \`${newCategory}\`
//         **Channel ID:** \`${newChannel.id}\``, "CHANNEL NAME CHANGED")
//     }
//     if(OldChannel.topic !== NewChannel.topic){
//         let oldc; let newc;
//         try{
//           newc = newChannel.topic.substr(0, 650); + "..."
//         } catch{
//           newc = "It is now Empty"
//         }
//         try{
//           oldc = oldChannel.topic.substr(0, 650); + "..."
//         } catch{
//           oldc = "It was Empty before"
//         }
//         SEND(oldChannel.guild, client, `__Channel: ${newChannel}__ \n\n**Before:** \`${oldc}\`
//         **After:** \`${newc}\`
//         **Channel type:** \`${types[newChannel.type]}\`
//         **Channel category:** \`${newCategory}\`
//         **Channel ID:** \`${newChannel.id}\``, "CHANNEL TOPIC CHANGED")

//       }
// })