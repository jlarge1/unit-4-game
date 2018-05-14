// variables =============================
var randomNum = Math.floor(Math.random() * 101) + 19;
var crystalValue = [];
var crystalCount = 4
var playerTotal = 0;
var crystal0Hover = [
    "assets/media/0/000.svg",
    "assets/media/0/030.svg",
    "assets/media/0/060.svg",
    "assets/media/0/090.svg",
    "assets/media/0/120.svg",
    "assets/media/0/150.svg",
    "assets/media/0/180.svg",
    "assets/media/0/210.svg",
    "assets/media/0/240.svg",
    "assets/media/0/270.svg",
    "assets/media/0/300.svg",
    "assets/media/0/330.svg",
    "assets/media/0/000.svg",
]
var crystal1Hover = [ 
    "assets/media/1/000.svg",
    "assets/media/1/030.svg",
    "assets/media/1/060.svg",
    "assets/media/1/090.svg",
    "assets/media/1/120.svg",
    "assets/media/1/150.svg",
    "assets/media/1/180.svg",
    "assets/media/1/210.svg",
    "assets/media/1/240.svg",
    "assets/media/1/270.svg",
    "assets/media/1/300.svg",
    "assets/media/1/330.svg",
    "assets/media/1/000.svg",
]
var crystal2Hover = [ 
    "assets/media/2/000.svg",
    "assets/media/2/030.svg",
    "assets/media/2/060.svg",
    "assets/media/2/090.svg",
    "assets/media/2/120.svg",
    "assets/media/2/150.svg",
    "assets/media/2/180.svg",
    "assets/media/2/210.svg",
    "assets/media/2/240.svg",
    "assets/media/2/270.svg",
    "assets/media/2/300.svg",
    "assets/media/2/330.svg",
    "assets/media/2/000.svg",
]
var crystal3Hover = [ 
    "assets/media/3/000.svg",
    "assets/media/3/030.svg",
    "assets/media/3/060.svg",
    "assets/media/3/090.svg",
    "assets/media/3/120.svg",
    "assets/media/3/150.svg",
    "assets/media/3/180.svg",
    "assets/media/3/210.svg",
    "assets/media/3/240.svg",
    "assets/media/3/270.svg",
    "assets/media/3/300.svg",
    "assets/media/3/330.svg",
    "assets/media/3/000.svg",
]





// functions =============================
function initialize(x) {
    $("#playerTotal").text(playerTotal);
    $("#num").text(x);


    crystalVal();
}

function crystalVal() {
    for (var i = 0; i < crystalCount; i++) {
        var rand = Math.floor(Math.random() * 12) + 1;
        crystalValue.push(rand);
    }
}

function game(x) {
    $(".crystal").on("click", function () {
        var crystal = ($(this).attr("id"));
        playerTotal += crystalValue[crystal];
        $("#playerTotal").text(playerTotal);
        console.log(x, playerTotal);

        if (playerTotal > x) {
            $("#playerTotal").attr("style", "font-size: 4vw;");
            $("#playerTotal").text("You lost");
            setTimeout(function () { window.location.reload(true); }, 1500);

        } else if (playerTotal == x) {
            $("#playerTotal").attr("style", "font-size: 4vw;");
            $("#playerTotal").text("You win!");
            setTimeout(function () { window.location.reload(true); }, 1500);

        }
    });

}

function reset() {
    console.log("reset");
    var x = Math.floor(Math.random() * 101) + 19;
    crystalValue = [];
    playerTotal = 0;
    main(x);
}



function main(x) {
    initialize(x);
    game(x);

}

// run ===================================
main(randomNum);

$("#instruct").on("click", function () {
    //$("#instructions").animate({ scrollTop: "300px" });
    $("#instructions").fadeIn();
    // $("#content").fadeOut();
});
$("#close").on("click", function () {
    $("#instructions").fadeOut();
    //  $("#content").fadeIn();
});

$("#c0").mouseover(function () {
    var counter = 0,
        timer = setInterval(function() {
            $("#c0").attr("src", crystal0Hover[counter]);
            counter++
            if (counter == crystal0Hover.length) {
                clearInterval(timer);
            }
        }, 50);
});
$("#c1").mouseover(function () {
    var counter = 0,
        timer = setInterval(function() {
            $("#c1").attr("src", crystal3Hover[counter]);
            counter++
            if (counter == crystal3Hover.length) {
                clearInterval(timer);
            }
        }, 50);
});
$("#c2").mouseover(function () {
    var counter = 0,
        timer = setInterval(function() {
            $("#c2").attr("src", crystal2Hover[counter]);
            counter++
            if (counter == crystal2Hover.length) {
                clearInterval(timer);
            }
        }, 50);
});
$("#c3").mouseover(function () {
    var counter = 0,
        timer = setInterval(function() {
            $("#c3").attr("src", crystal1Hover[counter]);
            counter++
            if (counter == crystal1Hover.length) {
                clearInterval(timer);
            }
        }, 50);
});



//There will be four crystals displayed as buttons on the page.
//The player will be shown a random number at the start of the game.

//When the player clicks on a crystal, it will add a specific 
//      amount of points to the player's total score. 


//Your game will hide this amount until the player clicks a crystal.
//When they do click one, update the player's score counter.


//The player wins if their total score matches the random 
//  number from the beginning of the game.
//The player loses if their score goes above the random number.

//The game restarts whenever the player wins or loses.


//When the game begins again, the player should see a new random 
//  number. Also, all the crystals will have four new hidden values. 
//  f course, the user's score (and score counter) will reset to zero.


//The app should show the number of games the player wins and loses. 
//  To that end, do not refresh the page as a means to restart the game.