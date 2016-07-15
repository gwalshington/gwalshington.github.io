module.exports = function(robot) {

        robot.hear(/dog/i, function(res) {
                return res.send("Where is Wilson?!");
        })

        // robot.hear(/cat/i, function(res)	{
        // 	return res.send("meooooow");
        // })

        // robot.respond(/how are you/i, function(res)	{
        // 	return res.send("I am amazing!");
        // })

        robot.hear(/day|date|time/i, function(res)	{
        	day = new Date();
        	return res.send("It is " + day);
        })

        robot.hear(/catify (.*)/i, function(res)	{
        	var site = res.match[1];
        	return res.send("http://cats." + site + ".meowbify.com/#gws_rd=ssl");
        })
        
        // robot.respond(/my name is (.*)/i, function(res)	{
        // 	var name = res.match;

        // 	res.reply('Hello, ' + name);
        // })

        // robot.hear(/add (.*) and (.*)/i, function(res)	{
        // 	var x = parseInt(res.match[1]);
        // 	var y = parseInt(res.match[2]);
        // 	var sum = x + y;
        // 	return res.reply(x + " plus " + y + " = " + sum);
        // })

        // robot.hear()

    }

