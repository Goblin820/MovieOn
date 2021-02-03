// movie list toggle
$(document).ready(function(){
    $('#movie-list').children().click(function(){
        if($(this).css("color") == "rgb(0, 0, 0)"){
            $(this).css("background-color", "rgb(66, 66, 66)");
            $(this).css("color", "rgb(255, 255, 255)");
        }
        else if($(this).css("color") == "rgb(255, 255, 255)"){
            $(this).css("background-color", "rgb(217, 226, 225)");
            $(this).css("color", "rgb(0, 0, 0)");
        }
    });
});

