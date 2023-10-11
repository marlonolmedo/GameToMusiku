const {
    SlashCommandBuilder,
    EmbedBuilder
} = require("discord.js");
const { QueryType } = require("discord-player");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('paly')
        .setDescription('Plays a song')
        .addSubcommand(subcommand =>
            subcommand
                .setName("search")
                .setDescription(`Searches for a song.`)
                .addStringOption(option =>
                    option
                        .setName("searchterms")
                        .setDescription('search keywords')
                        .setRequired(true)
                )
        ).addSubcommand(subcommand =>
            subcommand
                .setName("song")
                .setDescription("play song from YT")
                .addStringOption(option =>
                    option
                        .setName("url")
                        .setDescription("url of the song")
                        .setRequired(true)
                )
        ),
    async execute(interaction, client) {
        if (!interaction.member.voice.channel) {
            await interaction.reply("You must be in a voice channel to use this command.");
        }
        // const queue = await client.player.createQueue(interaction.guild);

        // if(!queue.connection){
        //     await queue.connect(interaction.member.voice.channel)
        // }

        let embed = new EmbedBuilder();
        if (interaction.options.getSubcommand() == "song") {
            let url = interaction.options.getString("url");
            try {
                const { track } = await client.player.play(interaction.member.voice.channel, url, {
                    nodeOptions: {
                        // nodeOptions are the options for guild node (aka your queue in simple word)
                        metadata: interaction // we can access this metadata object using queue.metadata later on
                    }
                });
                await interaction.reply({
                    content: `**${track.title}** enqueued!`
                })
            } catch (error) {
                // console.log(error);
                await interaction.reply({
                    content: `Something went wrong: ${error}`
                })
            }
            // const song = result.tracks[0];
            // await queue.addTrack(song);

            // embed
            //     .setDescription(`Added **[${song.title}](${song.url})** to the queue.`)
            //     .setThumbnail(song.thumbnail)
            //     .setFooter({ text: `Duration: ${song.duration}` })
        }
    }
}