/*--------*/
/*index.js*/
/*--------*/

const prefix = "\\"
const Discord = require('discord.js');
const client = new Discord.Client();
client.login('ODE0NDA3OTEwNTk1MjMxNzc1.YDdaeA.qqayOYmzUrG2WHwbvRoFGjQV4aE');

/*------*/
/*Events*/
/*------*/

client.on('ready',connectDiscord)
client.on('message',gotMessage);

/*---------*/
/*Functions*/
/*---------*/

function connectDiscord(){
	console.log("Discord Connected");
}

function gotMessage(msg){
	if(msg.content.startsWith(prefix) && msg.content.includes("marc")){
		msg.channel.send(msg.channel);
		msg.channel.send("Waking Marc up...");
		var childProcess = require('child_process');
		childProcess.exec('start marc.py', function(err,stdout,stderr){
			if(err){
				console.log(err);
			}
			console.log(stdout);
		})
	}

	else if (msg.content.startsWith(prefix) && msg.content.includes("screen")){
		msg.channel.send("Showing your screen...");
		var childProcess = require('child_process');
		childProcess.exec('start screen.py', function(err,stdout,stderr){
			if(err){
				console.log(err);
			}
			console.log(stdout);
		})
	}

	else if (msg.content.startsWith(prefix) && msg.content.includes("leave")){
		msg.channel.send("Well, that ain't ni.....");
		setTimeout(() => {process.kill(process.pid, 'SIGTERM');; }, 100);
	}

	else if(msg.content.startsWith(prefix)){
		msg.channel.send("Whoops, that command doesn't exist yet...");
	}
}