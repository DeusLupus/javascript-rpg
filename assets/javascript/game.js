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
		user = $(".character.name");
		console.log("user " + user);
		$("#pool").children().unbind("click", playerSelect);
		$("#pool").children().one("click", enemySelect);
	}

	//enemy select
	function enemySelect (event) {
		$("#cpu").html("<h3>CPU</h3>");
		$(this).appendTo("#cpu");
		var $battle = $("<button>").addClass("atkbtn btn btn-primary btn-lg").html("Attack!");
		$("#cpu").append($battle);
		$("#pool").children().unbind("click", enemySelect).hide();
	}

	//battle!!!
	$(".atkbtn").on("click", function () {
		if ($("#cpu"),children().length !==0){
			var atkmsg = "You attacked for "
		}
	});

	addplayers();
	})