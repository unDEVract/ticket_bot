const client = require("../../index");
const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js')
const { createTranscript } = require('discord-html-transcripts');

client.on("interactionCreate", async (interaction) => {

    // require the logs
    const logChannel = interaction.guild.channels.cache.get(client.config.tickets.logs)


    if (interaction.isSelectMenu()) {

        if (interaction.values[0] === 'partner_option') {

            const everyrole = interaction.guild.roles.cache.find(x => x.name === "@everyone").id;
            interaction.guild.channels.create(`🤝・partner・${interaction.user.username}`, {
                type: 'text',
                parent: client.config.tickets.partner_cat,
                topic: interaction.user.id,
                permissionOverwrites: [
                    {
                        id: everyrole,
                        deny: ['VIEW_CHANNEL']
                    },
                    {
                        id: client.config.tickets.support,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    },
                    {
                        id: interaction.user.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    }
                ],
            }).then(async c => {

                     const embed = new MessageEmbed()
                    .setTitle(client.config.titles.succes)
                    .setDescription(`Uw ticket is met succes geopend! <#${c.id}>`)
                    .setColor(client.config.embeds.Color)
                    .setFooter("©️ MirrorHosting")
                    .setTimestamp();

                await interaction.reply({ embeds: [embed], ephemeral: true })

                const embed1 = new MessageEmbed()
                    .setTitle('🎫・New Ticket!')
                    .setDescription(`<@${interaction.user.id}>, Het support team help je zo snel mogelijk!\n🔒・Close\n✋・Claim`)
                    .addField('📃・Opener:', `<@${interaction.user.id}>`)
                    .addField('❓・Reden:', 'Wilt partner worden')
                    .setColor(client.config.embeds.Color)
                    .setFooter("©️ MirrorHosting")
                    .setTimestamp();

                const row1 = new MessageActionRow()
                    .addComponents(
                        new MessageSelectMenu()
                            .setCustomId('options_ticket_menu')
                            .setPlaceholder('❌・Niets geselecteerd')
                            .addOptions([
                                {
                                    label: 'Close',
                                    description: 'Close the ticket',
                                    value: 'close_option',
                                    emoji: '🔒'
                                },
                                {
                                    label: 'Claim',
                                    description: 'Claim a ticket',
                                    value: 'claim_option',
                                    emoji: '👋'
                                },
                            ]),
                    )
                await c.send({ content: `${interaction.user}, <@&${client.config.tickets.support}>` })
                await c.send({ embeds: [embed1], components: [row1] })
            }
            )
        }

        if (interaction.values[0] === 'algemeen_option') {

            const everyrole = interaction.guild.roles.cache.find(x => x.name === "@everyone").id;
            interaction.guild.channels.create(`❓・algemeen・${interaction.user.username}`, {
                type: 'text',
                parent: client.config.tickets.algemeen_cat,
                topic: interaction.user.id,
                permissionOverwrites: [
                    {
                        id: everyrole,
                        deny: ['VIEW_CHANNEL']
                    },
                    {
                        id: client.config.tickets.support,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    },
                    {
                        id: interaction.user.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    }
                ],
            }).then(async c => {

                const embed = new MessageEmbed()
                    .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                    .setTitle(client.config.titles.succes)
                    .setDescription(`Uw ticket is met succes geopend! <#${c.id}>`)
                    .setColor(client.config.embeds.Color)
                    .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                    .setTimestamp();

                await interaction.reply({ embeds: [embed], ephemeral: true })

                const embed1 = new MessageEmbed()
                    .setTitle('🎫・New Ticket!')
                    .setDescription(`<@${interaction.user.id}>, Het support team help je zo snel mogelijk!\n🔒・Close\n✋・Claim`)
                    .addField('📃・Opener:', `<@${interaction.user.id}>`)
                    .addField('❓・Reden:', 'Heeft support nodig')
                    .setColor(client.config.embeds.Color)
                    .setFooter("©️ MirrorHosting")
                    .setTimestamp();

                const row1 = new MessageActionRow()
                    .addComponents(
                        new MessageSelectMenu()
                            .setCustomId('options_ticket_menu')
                            .setPlaceholder('❌・Niets geselecteerd')
                            .addOptions([
                                {
                                    label: 'Close',
                                    description: 'Close the ticket',
                                    value: 'close_option',
                                    emoji: '🔒'
                                },
                                {
                                    label: 'Claim',
                                    description: 'Claim a ticket',
                                    value: 'claim_option',
                                    emoji: '👋'
                                },
                            ]),
                    )
                await c.send({ content: `${interaction.user}, <@&${client.config.tickets.support}>` })
                await c.send({ embeds: [embed1], components: [row1] })
            }
            )
        }

        if (interaction.values[0] === 'sales_option') {

            const everyrole = interaction.guild.roles.cache.find(x => x.name === "@everyone").id;
            interaction.guild.channels.create(`💰・sales・${interaction.user.username}`, {
                type: 'text',
                parent: client.config.tickets.sales_cat,
                topic: interaction.user.id,
                permissionOverwrites: [
                    {
                        id: everyrole,
                        deny: ['VIEW_CHANNEL']
                    },
                    {
                        id: client.config.tickets.support,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    },
                    {
                        id: interaction.user.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    }
                ],
            }).then(async c => {

                     const embed = new MessageEmbed()
                    .setTitle(client.config.titles.succes)
                    .setDescription(`Uw ticket is met succes geopend! <#${c.id}>`)
                    .setColor(client.config.embeds.Color)
                    .setFooter("©️ MirrorHosting")
                    .setTimestamp();

                await interaction.reply({ embeds: [embed], ephemeral: true })

                const embed1 = new MessageEmbed()
                    .setTitle('🎫・New Ticket!')
                    .setDescription(`<@${interaction.user.id}>, Het support team help je zo snel mogelijk!\n🔒・Close\n✋・Claim`)
                    .addField('📃・Opener:', `<@${interaction.user.id}>`)
                    .addField('❓・Reden:', 'Heeft sales support nodig')
                    .setColor(client.config.embeds.Color)
                    .setFooter("©️ MirrorHosting")
                    .setTimestamp();

                const row1 = new MessageActionRow()
                    .addComponents(
                        new MessageSelectMenu()
                            .setCustomId('options_ticket_menu')
                            .setPlaceholder('❌・Niets geselecteerd')
                            .addOptions([
                                {
                                    label: 'Close',
                                    description: 'Close the ticket',
                                    value: 'close_option',
                                    emoji: '🔒'
                                },
                                {
                                    label: 'Claim',
                                    description: 'Claim a ticket',
                                    value: 'claim_option',
                                    emoji: '👋'
                                },
                            ]),
                    )
                await c.send({ content: `${interaction.user}, <@&${client.config.tickets.support}>` })
                await c.send({ embeds: [embed1], components: [row1] })
            }
            )
        }

        if (interaction.values[0] === 'technisch_option') {

            const everyrole = interaction.guild.roles.cache.find(x => x.name === "@everyone").id;
            interaction.guild.channels.create(`💻・technisch・${interaction.user.username}`, {
                type: 'text',
                parent: client.config.tickets.tech_cat,
                topic: interaction.user.id,
                permissionOverwrites: [
                    {
                        id: everyrole,
                        deny: ['VIEW_CHANNEL']
                    },
                    {
                        id: client.config.tickets.support,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    },
                    {
                        id: interaction.user.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                    }
                ],
            }).then(async c => {

                const embed = new MessageEmbed()
                    .setTitle(client.config.titles.succes)
                    .setDescription(`Uw ticket is met succes geopend! <#${c.id}>`)
                    .setColor(client.config.embeds.Color)
                    .setFooter("©️ MirrorHosting")
                    .setTimestamp();

                await interaction.reply({ embeds: [embed], ephemeral: true })

                const embed1 = new MessageEmbed()
                    .setTitle('🎫・New Ticket!')
                    .setDescription(`<@${interaction.user.id}>, Het support team help je zo snel mogelijk!\n🔒・Close\n✋・Claim`)
                    .addField('📃・Author:', `<@${interaction.user.id}>`)
                    .addField('❓・Subject:', 'Heeft technisch support nodig')
                    .setColor(client.config.embeds.Color)
                    .setFooter("©️ MirrorHosting")
                    .setTimestamp();

                const row1 = new MessageActionRow()
                    .addComponents(
                        new MessageSelectMenu()
                            .setCustomId('options_ticket_menu')
                            .setPlaceholder('❌・Nothing Selected')
                            .addOptions([
                                {
                                    label: 'Close',
                                    description: 'Close the ticket',
                                    value: 'close_option',
                                    emoji: '🔒'
                                },
                                {
                                    label: 'Claim',
                                    description: 'Claim a ticket',
                                    value: 'claim_option',
                                    emoji: '👋'
                                },
                            ]),
                    )
                await c.send({ content: `${interaction.user}, <@&${client.config.tickets.support}>` })
                await c.send({ embeds: [embed1], components: [row1] })
            }
            )
        }
    }


    //=================== Ticket Select Menu ========================

    if (interaction.isSelectMenu()) {

        if (interaction.values[0] === "claim_option") {

            const embed_claim = new MessageEmbed()
                .setTitle('✋・Claimed')
                .setDescription(`Je wordt nu geholpen door: ${interaction.user}`)
                .setColor(client.config.embeds.Color)
                .setFooter("©️ MirrorHosting")
                .setTimestamp();

            interaction.deferUpdate()
            interaction.channel.send({ embeds: [embed_claim] })

                        // send the logs
                        const logEmbed = new MessageEmbed()
                        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                        .setTitle("✋・Claimed")
                        .setDescription("Een ticket heeft geclaimd!")
                        .addFields(
                            {
                                name: `📃・Claimed door:`,
                                value: `<@${interaction.user.id}>`
                            },
                            {
                                name: "❓・Channel",
                                value: `${interaction.channel.name}`
                            })
                            .setColor(client.config.embeds.Color)
                            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
                            .setTimestamp();
            
                        logChannel.send({ embeds: [logEmbed] })

        }

        if (interaction.values[0] === "close_option") {

            // make the transcript
            const transcriptFile = await createTranscript(interaction.channel, {
                limit: -1,
                fileName: `${interaction.channel.name}.html`,
                returnBuffer: false
            });

            // send a succes message
            client.succes({ succes: `Ticket is gesloten door <@${interaction.user.id}> en wordt in 5 seconden verwijderd!`}, interaction)

            const user = interaction.channel.topic
            const us = interaction.guild.members.cache.get(user)

            const user_embed = new MessageEmbed()
                .setTitle('🗑・Closed')
                .setDescription(`Uw ticket is gesloten!`)
                .addField(`🌐・Server:`, `${interaction.guild}`)
                .addField(`📃・gesloten Door:`, `<@${interaction.user.id}>`)
                .setColor(client.config.embeds.Color)
                .setFooter("©️ MirrorHosting")
                .setTimestamp();

            us.send({ embeds: [user_embed] })
            us.send({ files: [transcriptFile] })

            // send the logs
            const logEmbed = new MessageEmbed()
            .setTitle("🗑・closed")
            .setDescription("Een ticket is gesloten!")
            .addFields(
                {
                    name: `📃・Gesloten Door:`,
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


});
