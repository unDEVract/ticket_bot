const Discord = require("discord.js")
const { createTranscript } = require('discord-html-transcripts')

module.exports = {
    name: 'close',
    description: 'Sluit een ticket',
    type: 'CHAT_INPUT',
    UserPerms: ['SEND_MESSAGES'],
    BotPerms: ["SEND_MESSAGES"],
    ticket: true,
    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
    run: async (client, interaction, args) => {

            // require the logs
            const logChannel = interaction.guild.channels.cache.get(client.config.tickets.logs)
        
            // make the transcript
            const transcriptFile = await createTranscript(interaction.channel, {
                limit: -1,
                fileName: `${interaction.channel.name}.html`,
                returnBuffer: false
            });

            // send a succes message
            client.succes({ succes: `Ticket is gesloten door <@${interaction.user.id}> en wordt in 5 seconden verwijderd!`}, interaction)


            // send the logs
            const logEmbed = new Discord.MessageEmbed()
            .setTitle("🗑・Gesloten")
            .setDescription("Een ticket is gesloten!")
            .addFields(
                {
                    name: `📃・Gesloten door:`,
                    value: `<@${interaction.user.id}>`
                },
                {
                    name: "❓・Channel",
                    value: `${interaction.channel.name}`
                })
                .setColor(client.config.embeds.Color)
                .setFooter("©️ MirrorHosting")
                .setTimestamp();

            logChannel.send({ embeds: [logEmbed] })
            logChannel.send({ files: [transcriptFile] })

            setTimeout(function () {
                interaction.channel.delete()
            }, 5000);
        }
    }