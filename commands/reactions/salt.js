const commando = require("discord.js-commando")
const fs = require("fs"); //these two lines are needed for EVERY command, by the way
class salt extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'salt',
            group: 'reactions',
            memberName: 'salt',
            description: 'Salt image.'
        });
    }
    async run(message, args)
    {
       message.delete()
            .then(msg => console.log("Deleted message."))
            .catch(console.error);
        let attachment = fs.readFileSync('./images/taiga/salt.jpeg');
        message.channel.sendFile(attachment, "salt.jpeg");
    }
}

module.exports = salt; //stays at bottom of program