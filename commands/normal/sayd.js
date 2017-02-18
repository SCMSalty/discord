const commando = require("discord.js-commando")
const fs = require("fs"); //these two lines are needed for EVERY command, by the way
class sayd extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'sayd',
            group: 'normal',
            memberName: 'sayd',
            description: 'Has the bot say a line, then deletes the command you typed.',
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
        message.delete().catch(console.error);//deletes the message
    }
}

module.exports = sayd; //stays at bottom of program