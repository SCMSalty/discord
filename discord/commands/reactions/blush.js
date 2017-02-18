const commando = require("discord.js-commando")
const fs = require("fs"); //these two lines are needed for EVERY command, by the way
class blush extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'blush',
            group: 'reactions',
            memberName: 'blush',
            description: 'Blush image.'
        });
    }
    async run(message, args)
    {
       message.delete()
            .then(msg => console.log("Deleted message."))
            .catch(console.error);
        let attachment = fs.readFileSync('./images/taiga/blush.jpg');
        message.channel.sendFile(attachment, "blush.jpg");
    }
}

module.exports = blush; //stays at bottom of program