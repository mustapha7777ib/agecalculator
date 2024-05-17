var date1 = currentDate();
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
                $("#e").css("visibility","hidden");
                $("#f").css("visibility","hidden");
                invaliddate();
                $(".span1").text("--");
                $(".span2").text("--");
                $(".span3").text("--"); 
                q = false;
                break;
            }
        }
        if (yearValue > 2024 || yearValue<0) {
            invalidyear();
            $(".span1").text("--");
            $(".span2").text("--");
            $(".span3").text("--"); 
            q = false;
        }
        if(monthValue > 12 || monthValue < 1){
            invalidmonth();
            $(".span1").text("--");
            $(".span2").text("--");
            $(".span3").text("--"); 
            q = false;
        }
        if(dayValue > 31 || dayValue < 1){
            invaliddate();
            $(".span1").text("--");
            $(".span2").text("--");
            $(".span3").text("--"); 
            q = false;
        }
        if(monthValue === 2 && dayValue > 29){
            invaliddate();
            $(".span1").text("--");
            $(".span2").text("--");
            $(".span3").text("--"); 
            q = false;
        }
        if(monthValue === 2 && dayValue === 29 && yearValue % 4!== 0){
            invaliddate();
            $(".span1").text("--");
            $(".span2").text("--");
            $(".span3").text("--"); 
            q = false;
        }
        if (date1.mm == monthValue && date1.dd < dayValue && yearValue >= date1.yyyy){
            invalidyear();
            $(".span1").text("--");
            $(".span2").text("--");
            $(".span3").text("--"); 
            q = false;
        }
        if(date1.mm < monthValue && date1.yyyy <= yearValue){
            invalidyear();
            $(".span1").text("--");
            $(".span2").text("--");
            $(".span3").text("--"); 
            q = false;
        }
        if(date1.yyyy < yearValue){
            invalidyear();
            $(".span1").text("--");
            $(".span2").text("--");
            $(".span3").text("--"); 
            q = false;
        }
        
        };
    if(q){
        $(".span1").text(age.years);
        $(".span2").text(age.months);
        $(".span3").text(age.days); 
        $(".flex-item2 p").css("visibility","hidden")
        $("#a").css('color',"hsl(0, 1%, 44%)");
        $("#b").css('color',"hsl(0, 1%, 44%)");
        $("#c").css('color',"hsl(0, 1%, 44%)");
        $("#day").css("border","groove 2px");
        $("#month").css("border","groove 2px");
        $("#year").css("border","groove 2px");
        $("#day").css("border-radius", "2px");
        $("#month").css("border-radius", "2px");
        $("#year").css("border-radius", "2px");
        currentDate();


    }
            
    
});

function errorempty(){
    $("#a").css('color',"hsl(0, 100%, 67%)");
    $("#b").css('color',"hsl(0, 100%, 67%)");
    $("#c").css('color',"hsl(0, 100%, 67%)");
    $("#day").css("border", "1px solid red");
    $("#day").css("border-radius", "2px");
    $("#month").css("border", "1px solid red");
    $("#month").css("border-radius", "2px");
    $("#year").css("border", "1px solid red");
    $("#year").css("border-radius", "2px");
    $(".flex-item2 p").css("visibility","visible")
}
function invaliddate(){
    $("#a").css('color',"hsl(0, 100%, 67%)");
    $("#day").css("border", "1px solid red");
    $("#day").css("border-radius", "2px");
    $("#d").text("Must be a valid date");
    $("#d").css("visibility","visible");
}
function invalidyear(){
    $("#c").css('color',"hsl(0, 100%, 67%)");
    $("#year").css("border", "1px solid red");
    $("#year").css("border-radius", "2px");
    $("#f").text("Must be in the past ");
    $("#f").css("visibility","visible");
}
function invalidmonth(){
    $("#b").css('color',"hsl(0, 100%, 67%)");
    $("#month").css("border", "1px solid red");
    $("#month").css("border-radius", "2px");
    $("#e").text("Must be a valid month");
    $("#e").css("visibility","visible");
}
function currentDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    dd = parseInt(dd);
    mm = parseInt(mm);
    yyyy = parseInt(yyyy);
    return { dd, mm, yyyy };
}


