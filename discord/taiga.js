const commando = require("discord.js-commando");
const config = require("./config.json");
const fs = require("fs");
const client = new commando.Client(
{
    owner: config.ownerid,
    commandPrefix: config.prefix
});
client.login(config.token);
client.on('ready', () =>
{
    console.log("Taiga-sama has arrived.");
    client.user.setGame("with feelings.");
}); //This bit is the login text/"playing with" text
client.registry.registerGroup('normal', "Random Commands"); //Makes groups of commands for reference
client.registry.registerGroup('reactions', "Reaction Images");
client.registry.registerDefaults(); //Registers basic commands (help command etc)
client.registry.registerCommandsIn(__dirname + "/commands"); //Registers every command