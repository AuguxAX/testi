
const Discord = require("discord.js");
const fs = require ("fs")
let points = require("../points.json");

exports.run = (client, message, args) => {

let cant = message.content.split(" ").slice(1)

if(!points[message.author.id]){
  points[message.author.id] = {
    points: 0
  };
}

let upoints = points[message.author.id].points;
let coinEmbed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#00FF00")
.addField("💸", upoints);

if(!coins[message.author.id]){
  coins[message.author.id] = {
    coins: 0
  };
}

let coinAmt = Math.floor(Math.random() * 15) + 1;
let baseAmt = Math.floor(Math.random() * 15) + 1;
console.log(`${coinAmt} ; ${baseAmt}`);

if(coinAmt === baseAmt){
  coins[message.author.id] = {
    coins: coins[message.author.id].coins + coinAmt
  };
fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
  if (err) console.log(err)
});
let coinEmbed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#0000FF")
.addField("💸", `${coinAmt} coins added!`);

message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 2,
  aliases: [],
};

exports.help = {
  name: 'padd',
  description: 'Cuenta atras en minutos.',
  usage: 'm [time]'
};
