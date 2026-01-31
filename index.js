const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log("Bot is Online!");
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === "!basicpanel") {
    const embed = new EmbedBuilder()
      .setTitle("Free Fire : Basic Panel")
      .setColor(0xff0000) // red side line
      .setDescription(
        "**Functions :**\n\n" +
        "• Aimbot External\n" +
        "• Aimbot Hot Key System\n" +
        "• Chams Moco\n" +
        "• Stream Mode\n" +
        "• Mute Sound\n" +
        "• Chams Menu\n\n" +
        "**Price :**\n\n" +
        "• 7 Day 100 INR\n" +
        "• 15 Day 170 INR\n" +
        "• 30 Day 300 INR"
      )
      .setFooter({ text: "Attacker Cheats" });

    message.channel.send({ embeds: [embed] });
  }
});

client.login("MTQ2NzIxMTMzNTIwMzgxNTU1NQ.GBKafx.41-nEosW1fD7CHHXrXY4ab4UI8T5yhp-yaQecg");
