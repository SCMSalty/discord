const commando = require("discord.js-commando")
const fs = require("fs"); //these two lines are needed for EVERY command, by the way
class panic extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'panic',
            group: 'reactions',
            memberName: 'panic',
            description: 'pANIC GIF.'
        });
    }
    async run(message, args)
    {
       message.delete()
            .then(msg => console.log("Deleted message."))
            .catch(console.error);
        let attachment = fs.readFileSync('./images/taiga/panic.gif');
        message.channel.sendFile(attachment, "panic.gif");
    }
}

module.exports = panic; //stays at bottom of program