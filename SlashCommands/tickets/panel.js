const Discord = require("discord.js")

module.exports = {
    name: 'panel',
    description: 'Stuur het ticketpaneel',
    type: 'CHAT_INPUT',
    UserPerms: ['ADMINISTRATOR'],
    BotPerms: ["ADMINISTRATOR"],
    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
    run: async (client, interaction, args) => {

            const embed = new Discord.MessageEmbed()
                .setTitle(':zap:▕▏SuperShop - Tickets')
                .setDescription('Heeft u vragen, heeft u support nodig? Maak dan een ticket!\n\n**:question:・Hoe kan ik een ticket maken?\n**Klik op het dropdown menu en kies voor wat u een ticket wilt maken. Wanneer u op de optie klikt, creëert hij meteen een ticket!\n\n**:exclamation: · Opgelet**\nMaak geen onnodige tickets of meerdere tickets!')
                .setColor(client.config.embeds.Color)
                .setFooter("©️ MirrorHosting")
                .setTimestamp();

            const row = new Discord.MessageActionRow()
                .addComponents(
                    new Discord.MessageSelectMenu()
                        .setCustomId('ticket_menu')
                        .setPlaceholder('❌・Niks geselecteerd')
                        .addOptions([
                            {
                                label: 'Partner Aanvraag',
                                description: 'Partner',
                                value: 'partner_option',
                                emoji: '🤝'
                            },
                            {
                                label: 'Algemene Support',
                                description: 'Krijg algemene suppory',
                                value: 'algemeen_option',
                                emoji: '❓'
                            },
                            {
                                label: 'Technische Support',
                                description: 'Krijg technisch support',
                                value: 'technisch_option',
                                emoji: '💻'
                            },
                            {
                                label: 'Sales Support',
                                description: 'Krijg sales suppory',
                                value: 'sales_option',
                                emoji: '💰'
                            },
                        ]),
                );

            interaction.reply({ embeds: [embed], components: [row] })

    }
}