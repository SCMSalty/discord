const commando = require("discord.js-commando")
const fs = require("fs"); //these two lines are needed for EVERY command, by the way
class smug2 extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'smug2',
            group: 'reactions',
            memberName: 'smug2',
            description: 'Smug2 image.'
        });
    }
    async run(message, args)
    {
       message.delete()
            .then(msg => console.log("Deleted message."))
            .catch(console.error);
        let attachment = fs.readFileSync('./images/taiga/smug2.jpg');
        message.channel.sendFile(attachment, "smug2.jpg");
    }
}

module.exports = smug2; //stays at bottom of program