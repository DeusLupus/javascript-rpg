$(document).ready(function() {
	//set up array of characters
	var characters = [
		{
			name: "Magneto",
			img: "assets/images/magneto.jpg",
			HP: "100",
			ATK: "14",
			CATK: "5"
		},
		{
			name: "Apocalypse",
			img: "assets/images/apocalypse.jpg",
			HP: "180",
			ATK: "7",
			CATK: "25"
		},
		{
			name: "Mr Sinister",
			img: "assets/images/sinister.jpg",
			HP: "120",
			ATK: "8",
			CATK: "15"
		},
		{
			name: "Holocaust",
			img: "assets/images/holocaust.png",
			HP: "150",
			ATK: "8",
			CATK: "20"
		}
	];
	//set variables for user and cpu when starting game
	var user;
	var cpu;
	var atk;
	var userHP;
	var cpuHP;
	var cpuatk;

	//add characters to html
	var addplayers = function () {
		$("#pool").html("<h3>Available Players</h3>");
		$.each(characters, function (index, value) {
			var $characterName = $("<p>").addClass("name text-center").html(characters[index].name);

			var $characterPic = $("<img>").addClass("pic").attr("src", characters[index].img);

			var $hitpoints = $("<p>").addClass("hitpoints text-center").html("HP: " + characters[index].HP);

			var $attack = $("<p>").addClass("atkpwr text-center").html("ATK: " + characters[index].ATK);

			var $counter = $("<p>").addClass("counter text-center").html("Counter: " + characters[index].CATK);

			var $characterDiv = $("<div>").addClass("character col-sm-3 clearfix")
								.append($characterPic, $characterName, $hitpoints, $attack, $counter)
								.one("click", playerSelect);

			$("#pool").append($characterDiv);
		})
	};

	//player select
	function playerSelect (event) {
		$("#user").html("<h3>Player 1</h3>");
		$(this).appendTo("#user");
		// use $(this).find*('.name')
		// This is the element that was clicked.
		user = $(this).find(".name").html();
		console.log("user " + user);
		// set user variables for atk and hp
		var atkdata = $("#user").find(".atkpwr").text();
		atk = atkdata.split(":").pop();
		console.log("atk " + atk);
		var hpdata = $("#user").find(".hitpoints").text();
		userHP = hpdata.split(":").pop();
		console.log("User HP " + userHP);
		$("#pool").children().unbind("click", playerSelect);
		$("#pool").children().one("click", enemySelect);
	}

	//enemy select
	function enemySelect (event) {
		$("#cpu").html("<h3>CPU</h3>");
		$(this).appendTo("#cpu");
		cpu = $(this).find(".name").html();
		console.log("cpu " + cpu);
		// set cpu atk and hp
		var atkdata = $("#cpu").find(".counter").text();
		cpuatk = atkdata.split(":").pop();
		console.log("Counter " + cpuatk);
		var hpdata = $("#cpu").find(".hitpoints").text();
		cpuHP = hpdata.split(":").pop();
		console.log("CPU HP " + cpuHP);
		var $battle = $("<button>").addClass("atkbtn btn btn-primary btn-lg").html("Attack!");
		$("#cpu").append($battle);
		$("#pool").children().unbind("click", enemySelect).hide();

		//battle!!!
		$(".atkbtn").on("click", function () {
			if (userHP > 0 ) {	
				var atkmsg = "You attacked " + cpu + " for " + atk;
				//console.log(atkmsg);
				var catkmsg = cpu + " countered for " + cpuatk;
				$("#results").removeClass("hidden").addClass("shown").find;
				$("#m1").html(atkmsg);
				$("#m2").html(catkmsg);
			}
		});
	}

	addplayers();
	})