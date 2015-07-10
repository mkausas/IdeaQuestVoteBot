// run every few seconds
setInterval(
    function(){
        vote();
    }, 5000);


function vote() {

    // Titles
    var title1 = $('#ideaCard1 .ideaDetails .idea-title-container .title .dotdotdot h2').text();
    var title2 = $('#ideaCard2 .ideaDetails .idea-title-container .title .dotdotdot h2').text();

    if (title1 != "" && title2 != "") { 
        if (title1 == "MobileMD") {
            console.log("Card 1 is mine");
            var button = $('#ideaCard1 .ideaDetails div .speuiSpriteButton a');
            button.click();
        } 

        else if (title2 == "MobileMD") {
            console.log("Card 2 is mine");
            var button = $('#ideaCard2 .ideaDetails div .speuiSpriteButton a');
            button.click();
        }

        // Not mine!
        else {
            console.log("Not");
            var button = $('#ideaCard2 .ideaDetails div .speuiSpriteButton a');
            button.click();
        }
    }
}