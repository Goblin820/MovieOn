
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

$(document).ready(function(){
    $('.theater-list-big').children().click(function(){
        if($(this).css("color") == "rgb(0, 0, 0)"){
            $(this).css("background-color", "rgb(66, 66, 66)");
            $(this).css("color", "rgb(255, 255, 255)");
        }
        else if($(this).css("color") == "rgb(255, 255, 255)"){
            $(this).css("background-color", "rgb(217, 226, 225)");
            $(this).css("color", "rgb(0, 0, 0)");
        }
    });
})

$(document).ready(function(){
    $('.theater-list-small').children().click(function(){
        if($(this).css("color") == "rgb(0, 0, 0)"){
            $(this).css("background-color", "rgb(66, 66, 66)");
            $(this).css("color", "rgb(255, 255, 255)");
        }
        else if($(this).css("color") == "rgb(255, 255, 255)"){
            $(this).css("background-color", "rgb(217, 226, 225)");
            $(this).css("color", "rgb(0, 0, 0)");
        }
    });
})

$(document).ready(function(){
    $('#time-list').children().click(function(){
        if($(this).css("color") == "rgb(0, 0, 0)"){
            $(this).css("background-color", "rgb(66, 66, 66)");
            $(this).css("color", "rgb(255, 255, 255)");
        }
        else if($(this).css("color") == "rgb(255, 255, 255)"){
            $(this).css("background-color", "rgb(217, 226, 225)");
            $(this).css("color", "rgb(0, 0, 0)");
        }
    });
})

// 캘린더 클릭 토글, 날짜 선택시 캘린더 navbar 조정
var MAX_DATE = '31-May-2021';
$(function(){
    $('.btn-calendar').datepicker({
        dateFormat: 'dd-MM-yy',
        minDate:0,
        maxDate:MAX_DATE,
        onSelect: function(dateStr){
            alert(dateStr + '를 선택하였습니다.'), $(this).hide();
            console.log(dateStr.substring(0,2));
            // console.log($(this).dateStr.getDate());
        }
    }).hide();
    $('#btn-calendar').click(function() {
        $('.btn-calendar').toggle();
    })
});

// 영화, 극장, 시간 렌더링
