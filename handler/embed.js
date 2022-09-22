const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {

    console.log(`\u001b[0m`)
    console.log(`\x1b[30m\x1b[32mloading embed handler\x1b[37m...\x1b[37m\u001b[0m`)
    console.log(`\u001b[0m`)

    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//
    //                        ERROR EMBED                            //
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//

    // This is an error embed //

    client.simpleEmbed = async function ({ text: text }, channel) {

        let embed = new Discord.MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setDescription(`${text}`)
            .setColor(client.config.embeds.Color)
            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setTimestamp();

        return await channel.reply({ embeds: [embed] });
    }

    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//
    //                        ERROR EMBED                            //
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//

    // This is an error embed //

    client.error = async function ({ error: error }, channel) {

        let embed = new Discord.MessageEmbed()
            .setTitle(client.config.titles.error)
            .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setDescription(`${error}`)
            .setColor(client.config.embeds.Color)
            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setTimestamp();

        return await channel.reply({ embeds: [embed] });
    }

    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//
    //                       SUCCES EMBED                            //
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//


    client.succes = async function ({ succes: succes }, channel) {

        let embed = new Discord.MessageEmbed()
            .setTitle(client.config.titles.succes)
            .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setDescription(`${succes}`)
            .setColor(client.config.embeds.Color)
            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setTimestamp();

        return await channel.reply({ embeds: [embed] });
    }

    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//
    //                       User Perms                              //
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//


    client.userPerms = async function ({ perms: perms }, channel) {

        let embed = new Discord.MessageEmbed()
            .setTitle(client.config.titles.error)
            .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setDescription(`You are not allowed to do this!`)
            .addField("Requierd Permissions:", `\`${perms}\``)
            .setColor(client.config.embeds.Color)
            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setTimestamp();

        return await channel.reply({ embeds: [embed] });
    }

    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//
    //                       Bot Perms                               //
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//


    client.botPerms = async function ({ perms: perms }, channel) {

        let embed = new Discord.MessageEmbed()
            .setTitle(client.config.titles.error)
            .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setDescription(`I don't have the correct permissions!`)
            .addField("Required permissions", `\`${perms}\``)
            .setColor(client.config.embeds.Color)
            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setTimestamp();

        return await channel.reply({ embeds: [embed] });
    }

    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//
    //                       review                                  //
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//


    client.review = async function ({ user: user, stars: stars, message: message }, channel) {

        let embed = new Discord.MessageEmbed()
            .setTitle("⭐・Review")
            .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setDescription(`A new review by ${user} has arrived!`)
            .addField("🔢・Stars", `${stars}` )
            .addField("💬・Message", `${message}` )
            .setColor(client.config.embeds.Color)
            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setTimestamp();

        return await channel.send({ embeds: [embed] });
    }

    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//
    //                       Suggestion                              //
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//


    client.suggestion = async function ({ user: user, message: message }, channel) {

        let embed = new Discord.MessageEmbed()
            .setTitle("📬・Review")
            .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setDescription(`A new suggestion by ${user} has arrived!`)
            .addField("💬・Suggestion", `${message}` )
            .setColor(client.config.embeds.Color)
            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setTimestamp();

        return await channel.send({ embeds: [embed] });
    }

        //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//
       //                          poll                                 //
      //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//


    client.poll = async function ({ user: user, message: message }, channel) {

        let embed = new Discord.MessageEmbed()
            .setTitle("🗳️・Poll")
            .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setDescription(`A new poll has arrived!`)
            .addField("💬・Suggestion", `${message}` )
            .setColor(client.config.embeds.Color)
            .setFooter({ text: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
            .setTimestamp();

        return await channel.send({ embeds: [embed] });
    }
    client.noChannel = async function ({ }, channel) {

        let embed = new Discord.MessageEmbed()
            .setTitle(`❌ • Error!`)
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024 }) })
            .setDescription(`You must be in a voice channel to use this command!`)
            .setColor(client.config.colors.error)
            .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024 }) })
            .setTimestamp();

        return await channel.reply({ embeds: [embed] });
    }

    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//
    //                     No Queue Embed                            //
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//


    client.nothingPlaying = async function ({ }, channel) {

        let embed = new Discord.MessageEmbed()
            .setTitle(`❌ • Error!`)
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024 }) })
            .setDescription(`There is nothing playing right now!`)
            .setColor(client.config.colors.error)
            .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024 }) })
            .setTimestamp();

        return await channel.reply({ embeds: [embed] });
    }


}