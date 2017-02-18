const commando = require("discord.js-commando")
const fs = require("fs"); //these two lines are needed for EVERY command, by the way
class say extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'say',
            group: 'normal',
            memberName: 'say',
            description: 'Has the bot say a line.',
            args:
            [
                {
                    key: 'text',
                    prompt: 'What do you want me to say?',
                    type: 'string'
                }
            ]
        });
    }
    async run(message, args)
    {
        message.channel.sendMessage(args.text);//sends the message
    }
}

module.exports = say; //stays at bottom of program