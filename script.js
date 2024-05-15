
function calculateAge(birthDate) {
    var currentDate = new Date();
    var years = currentDate.getFullYear() - birthDate.getFullYear();
    var months = currentDate.getMonth() - birthDate.getMonth();
    var days = currentDate.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && currentDate.getDate() < birthDate.getDate())) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        var prevMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, birthDate.getDate());
        days = Math.floor((currentDate - prevMonthDate) / (1000 * 60 * 60 * 24));
    }

    return { years: years, months: months, days: days };
}
$("#image").on("click", function() {
    var dayValue = $('#day').val();
    var monthValue = $('#month').val();
    var yearValue = $('#year').val();
    dayValue = parseInt(dayValue);
    monthValue = parseInt(monthValue);
    yearValue = parseInt(yearValue);
    var date = new Date(yearValue, monthValue - 1, dayValue); 
    var age = calculateAge(date);
    var q = true;
    var thirtyDays = [4, 6, 9, 11];
    if (isNaN(dayValue) || isNaN(monthValue) || isNaN(yearValue)) {
        errorempty();
        q=false;
    }
    else{
        for(i=0; i<thirtyDays.length; i++) {
            if (thirtyDays[i] === monthValue && dayValue >30){
                    invalidinput();
                    $(".span1").text("--");
                    $(".span2").text("--");
                    $(".span3").text("--"); 
                    q = false;
                    break;
                }
            }
        };
    if(q){
        $(".span1").text(age.years);
        $(".span2").text(age.months);
        $(".span3").text(age.days); 
        $(".flex-item3 *").css("display","none")
        $("#a").css('color',"hsl(0, 1%, 44%)");
        $("#b").css('color',"hsl(0, 1%, 44%)");
        $("#c").css('color',"hsl(0, 1%, 44%)");
        $("#day").css("border","groove 2px");
        $("#month").css("border","groove 2px");
        $("#year").css("border","groove 2px");
        $("#day").css("border-radius", "2px");
        $("#month").css("border-radius", "2px");
        $("#year").css("border-radius", "2px");


    }
            
    
});

function errorempty(){
    $("#a").css('color',"hsl(0, 100%, 67%)");
    $("#b").css('color',"hsl(0, 100%, 67%)");
    $("#c").css('color',"hsl(0, 100%, 67%)");
    $("#day").css("border", "solid red");
    $("#day").css("border-radius", "2px");
    $("#month").css("border", "solid red");
    $("#month").css("border-radius", "2px");
    $("#year").css("border", "solid red");
    $("#year").css("border-radius", "2px");
    $(".flex-item3 *").css("display","flex")
}
function invaliddate(){
    $("e").css("display","none");
    $("f").css("display","none");
    $("#d").text("Must be a valid date");
    $("#d").css("display","flex");
}

