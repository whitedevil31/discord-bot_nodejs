const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

const { Client, WebhookClient } = require("discord.js");
const client = new Client();
const PREFIX = "!";

console.log(process.env.WEB_HOOK_TOKEN);

// const webHook = new WebhookClient(
//   process.env.WEB_HOOK,
//   process.env.WEB_HOOK_TOKEN
// );
// client.on("ready", () => {
//   console.log(`${client.user.username} has logged in`);
// });
// // client.on("message", (message) => {
//   if (message.author.bot) return;
//   if (message.content.startsWith(PREFIX)) {
//     const [command, ...args] = message.content
//       .substring(PREFIX.length)
//       .trim()
//       .split(/\s/);

//     console.log(args);
//     if (command === "kick") {
//       if (!message.member.hasPermission("KICK_MEMBERS"))
//         return message.reply("You don't have any permission to kick out");
//       if (args.length === 0) {
//         return message.reply("please provide ID");
//       }
//       const member = message.guild.members.cache.get(args[0]);
//       console.log(member);

//       if (member) {
//         member
//           .kick()
//           .then((member) => message.channel.send(`${member} was kicked out `))
//           .catch((err) =>
//             message.channel.send("Vaipila raja I dont have enough power")
//           );
//       } else {
//         message.channel.send("Member not found ");
//       }
//     }
//       else if (CMD_NAME === 'ban') {
//       if (!message.member.hasPermission('BAN_MEMBERS'))
//         return message.reply("You do not have permissions to use that command");
//       if (args.length === 0) return message.reply("Please provide an ID");
//       try {
//         const user = await message.guild.members.ban(args[0]);
//         message.channel.send('User was banned successfully');
//       } catch (err) {
//         console.log(err);
//         message.channel.send('An error occured. Either I do not have permissions or the user was not found');
//       }
//     }

//   }
// });

// client.login(process.env.DISCORD_TOKEN);

//  if (message.content === "amuku dumuku amal dumal dhan") {
//     message.channel.send("Inna thala !");
//   }
