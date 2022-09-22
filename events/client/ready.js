const client = require("../../index");

client.on("ready", async (client) => {

    console.log(`\u001b[0m`)
    console.log(`\x1b[30m\x1b[32mBot >> \x1b[37mOnline!\x1b[37m\u001b[0m`)
    console.log(`\u001b[0m`)


    let statuttext = [`Maked by unDEVract`, `Good Deelopment`, `💬・Nice bot!`];
    const randomText = statuttext[Math.floor(Math.random() * statuttext.length)];

    client.user.setPresence({
        activities: [
            {
                name: randomText,
                type: "STREAMING",
                url: "https://www.twitch.tv/discord"
            }
        ]
    });

    const invites = new Map();
    client.invites = invites
    // A pretty useful method to create a delay without blocking the whole script.
    const wait = require("timers/promises").setTimeout;
    // "ready" isn't really ready. We need to wait a spell.
    await wait(1000);
    // Loop over all the guilds
    client.guilds.cache.forEach(async (guild) => {
        // Fetch all Guild Invites
        const firstInvites = await guild.invites.fetch();
        // Set the key as Guild ID, and create a map which has the invite code, and the number of uses
        client.invites.set(guild.id, new Map(firstInvites.map((invite) => [invite.code, invite.uses])));

    });
})
client.on("inviteDelete", (invite) => {
    // Delete the Invite from Cache
    client.invites.get(invite.guild.id).delete(invite.code);
});

client.on("inviteCreate", (invite) => {
    // Update cache on new invites
    client.invites.get(invite.guild.id).set(invite.code, invite.uses);
});