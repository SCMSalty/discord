const commando = require("discord.js-commando")
const fs = require("fs"); //these two lines are needed for EVERY command, by the way
class ehe extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'ehe',
            group: 'reactions',
            memberName: 'ehe',
            description: 'Ehe image.'
        });
    }
    async run(message, args)
    {
       message.delete()
            .then(msg => console.log("Deleted message."))
            .catch(console.error);
        let attachment = fs.readFileSync('./images/taiga/ehe.jpg');
        message.channel.sendFile(attachment, "ehe.jpg");
    }
}

module.exports = ehe; //stays at bottom of program