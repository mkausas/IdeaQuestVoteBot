// run every few seconds
setInterval(
    function(){
        vote();
    }, 5000);


function vote() {

    console.log("Working...")

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
            console.log("Our card isn't up, vote for the lower ranked card");

            var rows = $('.template_content')[0].children;
            for (var i = 0; i < rows.length; i++) {
                var rowTitle = $('.template_content')[0].children[i].children[1].children[0].title;

                // First card is ranked higher, vote second card
                if (rowTitle == title1) {
                    console.log("voting for the second card");
                    var button = $('#ideaCard2 .ideaDetails div .speuiSpriteButton a');
                    button.click();
                } 
                
                // Second card is ranked higher, vote first card
                else if (rowTitle == title2) {
                    console.log("voting for the first card");
                    var button = $('#ideaCard1 .ideaDetails div .speuiSpriteButton a');
                    button.click(); 
               } 
                
                console.log(rowTitle);
            }

            // something went wront, move on
            // var button = $('#ideaCard1 .ideaDetails div .speuiSpriteButton a');
            // button.click(); 
        }
    }
}