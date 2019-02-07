const Discord = require('discord.js');
const moment = require('moment')
const client = new Discord.Client();
const fs = require('fs')
const settings = require('./settings.json');
require('./util/eventLoader')(client);
require('dotenv/config')
const http = require('http')
const port = process.env.PORT
http.createServer().listen(port)

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    const props = require(`./commands/${f}`);
    log(`Loading Command: ${props.help.name}. 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.elevation = message => {
  let permlvl = 0;
  const play_role = message.guild.roles.find(role => role.name === "Player");
  if (play_role && message.member.roles.has(play_role.id)) permlvl = 1;
  const bot_role = message.guild.roles.find(role => role.name === settings.botrole);
  const mod_role = message.guild.roles.find(role => role.name === settings.modrolename);
  if (message.author.bot) permlvl = 3
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  const admin_role = message.guild.roles.find(role => role.name === settings.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  if (bot_role && message.member.roles.has(bot_role.id)) permlvl = 3;
  if (message.author.id === settings.ownerid) permlvl = 4;
  return permlvl;
};


const config = require('./settings.json')

client.on("ready", async () => {
  console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);

});


client.on("message", async message => {
if(message.channel.type === "dm") return;

})

client.login(process.env.TOKEN);
