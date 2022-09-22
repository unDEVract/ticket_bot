const Discord = require("discord.js")

module.exports = {
    name: 'claim',
    description: 'Claim een ticket',
    type: 'CHAT_INPUT',
    UserPerms: ['MANAGE_MESSAGES'],
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

        // make the embed
        const embed_claim = new Discord.MessageEmbed()
        .setTitle('✋・Geclaimd')
        .setDescription(`Je wordt nu geholpen door: ${interaction.user}`)
        .setColor(client.config.embeds.Color)
        .setFooter("©️ MirrorHosting")
        .setTimestamp();

        //send the embed
        interaction.reply({ embeds: [embed_claim] })

                // send the logs
                const logEmbed = new Discord.MessageEmbed()
                .setTitle("✋・Geclaimd")
                .setDescription("Een ticket heeft geclaimd!")
                .addFields(
                    {
                        name: `📃・Geclaimd door:`,
                        value: `<@${interaction.user.id}>`
                    },
                    {
                        name: "❓・Kanaal",
                        value: `${interaction.channel.name}`
                    })
                    .setColor(client.config.embeds.Color)
                    .setFooter("©️ MirrorHosting")
                    .setTimestamp();
    
                logChannel.send({ embeds: [logEmbed] })

   }
}
