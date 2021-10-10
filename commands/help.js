//jshint esversion:8
const execute = async (client,msg,args) => {
    msg.delete(true);
    let commands =  client.commands;
    if(!args.length){
        let adminHelp = '�7�8�1�5 *Administration*\n\n';
        let infoHelp = '�7�8�1�5 *Info*\n\n';
        let pluginHelp = '�7�8�1�5 *Plugins*\n\n';
        commands.forEach((command) => {
            if(!command.isDependent){
                if(command.commandType === 'admin')
                    adminHelp += `�7�9�1�5 *${command.name} (${command.command})*  - ${command.description}\n`;
                if(command.commandType === 'info')
                    infoHelp += `�7�9�1�5 *${command.name} (${command.command})*  - ${command.description}\n`;
                if(command.commandType === 'plugin')
                    pluginHelp += `�7�9�1�5 *${command.name} (${command.command})*  - ${command.description}\n`;
            }
                
        });
        let help = `${adminHelp}\n${infoHelp}\n${pluginHelp}\n${commands.get('help').help}`;
        await client.sendMessage(msg.to, help);
    }

    else if(commands.has(args[0])){
        await client.sendMessage(msg.to, commands.get(args[0]).help);
    }

    else {
        await client.sendMessage(msg.to, `No command with the name *${args[0]}*...`);
    }
    
};

module.exports = {
    name: 'help',
    description: 'get information about available commands',
    command: '!help',
    commandType: 'info',
    isDependent: false,
    help: 'To get more info use ```!help [command]```. Ex: ```!help ping```',
    execute};