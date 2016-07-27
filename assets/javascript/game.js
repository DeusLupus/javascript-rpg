$(document).ready(function() {
	//set up array of characters
	var characters = [
		{
			name: "Magneto",
			img: "assets/images/magneto.jpg",
			HP: "200",
			ATK: "20",
			CATK: "20"
		},
		{
			name: "Apocalypse",
			img: "assets/images/apocalypse.jpg",
			HP: "200",
			ATK: "20",
			CATK: "20"
		},
		{
			name: "Mr Sinister",
			img: "assets/images/sinister.jpg",
			HP: "200",
			ATK: "20",
			CATK: "20"
		},
		{
			name: "Holocaust",
			img: "assets/images/holocaust.png",
			HP: "200",
			ATK: "20",
			CATK: "20"
		}
	];
	//set variables for user and cpu when starting game
	var user;
	var cpu;

	//add characters to html
	var addplayers = function () {
		$("#pool").html("<h3>Choose your player!</h3>");
		$.each(characters, function (index, value) {
			var $characterName = $("<p>").addClass("name text-center").html(characters[index].name);

			var $characterPic = $("<img>").addClass("pic").attr("src", characters[index].img);

			var $hitpoints = $("<p>").addClass("hitpoints text-center").html("HP: " + characters[index].HP);

			var $attack = $("<p>").addClass("atkpwr text-center").html("ATK: " + characters[index].ATK);

			var $counter = $("<p>").addClass("counter text-center").html("Counter: " + characters[index].CATK);

			var $characterDiv = $("<div>").addClass("character col-sm-3")
								.append($characterPic, $characterName, $hitpoints, $attack, $counter)
								.one("click", playerSelect);

			$("#pool").append($characterDiv);
		})
	};

	//player select
	function playerSelect (event) {
		$("#user").html("Player 1");
		$(this).appendTo("#user");
		$("#pool").children().unbind("click", playerSelect);
		$("#pool").children().one("click", enemySelect);
	}

	//enemy select
	function enemySelect (event) {
		$("#cpu").html("CPU")
		$(this).appendTo("#cpu");
		$("#pool").children().unbind("click", enemySelect);
	}

	addplayers();
	})