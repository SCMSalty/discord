const commando = require("discord.js-commando")
const fs = require("fs"); //these two lines are needed for EVERY command, by the way
class smug extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'smug',
            group: 'reactions',
            memberName: 'smug',
            description: 'Smug image.'
        });
    }
    async run(message, args)
    {
       message.delete()
            .then(msg => console.log("Deleted message."))
            .catch(console.error);
        let attachment = fs.readFileSync('./images/taiga/smug.jpg');
        message.channel.sendFile(attachment, "smug.jpg");
    }
}

module.exports = smug; //stays at bottom of program