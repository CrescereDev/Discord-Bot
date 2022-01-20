const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

const prefix = "!";

client.on("ready", () => {
  console.clear()
  console.log(`${client.user.tag} is now online!`)
    function randomStatus() {
        let status = [
          `🌏 ${client.guilds.cache.size.toLocaleString()} servers`,
          `👥 ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users`,
          `👋 My current prefix is ${prefix}`
        ]; // You can change it whatever you want.
        let rstatus = Math.floor(Math.random() * status.length);
    
        // client.user.setActivity(status[rstatus], {type: "WATCHING"});
        // You can change the "WATCHING" into STREAMING, LISTENING, and PLAYING.
    
        client.user.setActivity(status[rstatus], {
          type: "WATCHING"
        });
      }
      setInterval(randomStatus, 30000);
    });

    client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (message.author.bot) {
        return;
    } else if (!message.content.startsWith(prefix)) {
        return;
    } else if (message.channel.type === "dm") {
        return;
    }

    if (command === "invite") {
        let embed = new MessageEmbed()
        .setTitle(`Bot Invitation - Invite Discord Bot to your Discord Server!`)
        .setDescription("**:link: https://discord.gg/fyf6UspcPs**")
        .setTimestamp()
        .setColor("#FF5733")
        message.channel.send(embed)
    }
});

client.login(config.token);
