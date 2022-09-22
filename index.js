    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//
    //                  © Source Development                         //
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//

const { Client, Collection, MessageEmbed } = require("discord.js");
const db = require('quick.db');
const Distube = require('distube');
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const client = new Client({
    restTimeOffset: 0,
    intents: [32767],
    partials: [
      'CHANNEL',
  ]
  });
module.exports = client;

if (!Array.isArray(db.get('giveaways'))) db.set('giveaways', []);

const { GiveawaysManager } = require('discord-giveaways');
const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {
    async getAllGiveaways() {
        return db.get('giveaways');
    }
    async saveGiveaway(messageId, giveawayData) {
        db.push('giveaways', giveawayData);
        return true;
    }

    async editGiveaway(messageId, giveawayData) {
        const giveaways = db.get('giveaways');
        const newGiveawaysArray = giveaways.filter((giveaway) => giveaway.messageId !== messageId);
        newGiveawaysArray.push(giveawayData);
        db.set('giveaways', newGiveawaysArray);
        return true;
    }
    async deleteGiveaway(messageId) {
        const giveaways = db.get('giveaways');
        const newGiveawaysArray = giveaways.filter((giveaway) => giveaway.messageId !== messageId);
        db.set('giveaways', newGiveawaysArray);
        return true;
    }
};

const manager = new GiveawayManagerWithOwnDatabase(client, {
    default: {
        botsCanWin: false,
        embedColor: '#FF0000',
        embedColorEnd: '#000000',
        reaction: '🎉'
    }
});

client.giveawaysManager = manager;

let spotifyoptions = {
    parallel: true,
    emitEventsAfterFetching: true,
}

client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
client.distube = new Distube.default(client, {
    leaveOnEmpty: false,
    leaveOnFinish: true,
    leaveOnStop: true,
    updateYouTubeDL: true,
    youtubeDL: false,
    plugins: [
        new SpotifyPlugin(spotifyoptions),
        new SoundCloudPlugin(),
    ]

})

require("./handler")(client);
require("./handler/embed")(client);;
require("./handler/index")(client);

client.login(client.config.token);


client.distube
    .on("playSong", (queue, song) => {
        let autoplay = queue.autoplay ? "Yes" : "No";
        let repeatMode = queue.repeatMode ? "On" : "Off";
        let embed = new MessageEmbed()
            .setTitle(`✅ • Success!`)
            .setDescription(`Started Playing [${song.name}](${song.url})!`)
            .addFields(
                {
                    name: "Requested By:", value: `<@!${song.user.id}>`, inline: true
                },
                {
                    name: `Song Length:`, value: `\`${song.formattedDuration}\``, inline: true
                },
                {
                    name: `Song Views:`, value: `\`${song.views}\``, inline: true
                },
                {
                    name: "Autoplay", value: `\`${autoplay}\``, inline: true
                },
                {
                    name: "Repeatmode", value: `\`${repeatMode}\``, inline: true
                },
                {
                    name: "Download Link:", value: `[Download](${song.streamURL})`, inline: true
                }
            )
            .setThumbnail(song.thumbnail)
            .setColor(client.config.embeds.Color)
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024 }) })
            .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024 }) })
            .setTimestamp()

        queue.textChannel.send({ embeds: [embed] })
    })
    .on("addSong", (queue, song) => {
        const embed = new MessageEmbed()
            .setTitle(`✅ • Success!`)
            .setDescription(`Added \`${song.name}\` - \`${song.formattedDuration}\` to the queue!`)
            .setColor(client.config.embeds.Color)
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024 }) })
            .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024 }) })
            .setTimestamp()
        queue.textChannel.send({ embeds: [embed] })
    })
    .on("addList", (queue, playlist) => {
        const embed = new MessageEmbed()
            .setTitle(`✅ • Success!`)
            .setDescription(`Added \`${playlist.name}\` with \`${playlist.songs.length}\` songs to the queue!`)
            .setColor(client.config.embeds.Color)
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024 }) })
            .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024 }) })
            .setTimestamp()

        queue.textChannel.send({ embeds: [embed] })
    })
    .on("finishSong", queue => {
        const embed = new MessageEmbed()
            .setTitle(`✅ • Success!`)
            .setColor(client.config.embeds.Color)
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024 }) })
            .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024 }) })
            .setTimestamp()
            .setDescription(`Finished playing \`${queue.songs[0].name}\``)
        queue.textChannel.send({ embeds: [embed] })
    })
    .on("empty", queue => {
        const embed = new MessageEmbed()
            .setDescription("The channel was empty! Leaving channel...")
            .setColor(client.config.embeds.Color)
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024 }) })
            .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024 }) })
            .setTimestamp()
        queue.textChannel.send({ embeds: [embed] })
    })


console.log(
    "\x1b[31m","Thanks for using This bot from Source development\n All rights are reserved,", "\x1b[30m", "You may not claim this as you own or resell it", "\x1b[0m"
)
// © Source Development 2022