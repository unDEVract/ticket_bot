const client = require("../../index");

client.on("interactionCreate", async (interaction) => {

    if (interaction.isCommand()) {
        const cmd = client.slashCommands.get(interaction.commandName);


        if (!cmd)
        // Check if the command is in a guild
        if (!interaction.guild) return interaction.user.send({ content: "You can't use commands here!" })

        if(cmd) {

            // user perms
            if (!interaction.member.permissions.has(cmd.UserPerms || [])) return client.userPerms({ perms: `${cmd.UserPerms}`}, interaction)

            // Bot Perms
            if (!interaction.guild.me.permissions.has(cmd.BotPerms || [])) return client.botPerms({ perms: `${cmd.BotPerms}`}, interaction)

        }

        if (cmd.ticket) {

            if (interaction.channel.parentId !== client.config.tickets.category) return client.error({ error: "You are not in a ticket" }, interaction)

        }

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);
        cmd.run(client, interaction, args);
    }



    // Context Menu Handling

    if (interaction.isContextMenu()) {
        await interaction.deferReply();
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }
});