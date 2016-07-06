$(document).ready(function(){
    $("#skills").hover(function(){
        $(this).css("background-color" , "blue");
    },function(){
        $(this).css("background-color", "#484848");
    });
});

$(document).ready(function(){
    var hide_work_details = true;
    $("#workExperience").click(function(){
        if (hide_work_details === true){
            $(".work-entry").show();
            hide_work_details = false;
        }
        else{
            $(".work-entry").hide();
            hide_work_details = true;
        }
    });
});

