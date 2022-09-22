const Discord = require("discord.js")
const { createTranscript } = require('discord-html-transcripts')

module.exports = {
    name: 'transcript',
    description: 'Transcript een ticket',
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
        
            // make the transcript
            const transcriptFile = await createTranscript(interaction.channel, {
                limit: -1,
                fileName: `${interaction.channel.name}.html`,
                returnBuffer: false
            });

            // send the transcript and a succes message
            client.succes({ succes: `Met succes het transcript gemaakt van <#${interaction.channel.id}> `}, interaction)
            interaction.channel.send({ files: [transcriptFile] })
        }
    }