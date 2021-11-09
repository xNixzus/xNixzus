module.exports = {
    name: 'embed',
    description: "Embed Testing!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
	    .setColor('#1c1c1c')
	    .setTitle('**Roles and Guild Information**')
	    .setDescription('Here we will be explaining the requirements to enter the guild and the ranks and roles of the guild and discord server.')
	    .setThumbnail('https://i.imgur.com/B6XJKUW.jpg')
	    .addFields(
	        { name: `Requirements`, value: `You must have *500 Senither Weight* to enter the guild.
            To check your weight, go to [Sky Crypt](<https://sky.shiiyu.moe/>) and enter your username, then under your player stats theres a thing called *Senither Weight*.`},
	        { name: '__**Discord and Guild Staff**__', value: `**Guild Master:** Nixzus
            **Co-Owner:** Darkslide1
            \u200B`},
	        { name: 'Roles', value: `\u200B
            <@&907357182780117113> : 500+ Senither Weight
            <@&907357331615002654> : 750+ Senither Weight
            <@&907357455690907678> : 1000+ Senither Weight
            <@&907677089149378590> : 30+ Skill Average
            <@&907677484978429962> : 40+ Skill Average
            \u200B
            <@&895996968344637440> : Member of The Guild
            <@&904288188456108042> : Staff of The Guild/Discord Server
            \u200B
            <@&907678052098654282> : Friend of Staff Team(Can bypass requirements)`},
	    )
        .setFooter('Error101', 'https://i.imgur.com/B6XJKUW.jpg');

        message.channel.send({embeds: [newEmbed]})

    }

}