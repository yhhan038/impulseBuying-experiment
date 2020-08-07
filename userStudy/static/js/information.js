
function getAge(age) {
$("#age").val(age);
//console.log(age);
}

var result = bowser.getParser(window.navigator.userAgent);
var browser = result.parsedResult.browser.name +" ver."+ result.parsedResult.browser.version;
var s_height = window.screen.height;
var s_width = window.screen.width;
var windowSize = s_height + " x " + s_width;

$("#btn-show-individual").click(function(){
    $("#age-feedback").css("display", "none");
    $("#gender-feedback").css("display", "none");
    $("#frequency-feedback").css("display", "none");
    $("#situation-feedback").css("display", "none");
    $("#cnotrol-feedback").css("display", "none");
     $("#copang-feedback").css("display", "none");
     $('#situation').val($('#situation-txt').val());


    var valid = true;

     if($("#age").val().length == 0  || $("#age").val() == 'Age'){
        valid = false;
        $("#age-feedback").css("display", "block");
    }
     if($("#gender").val().length == 0){
        valid = false;
        $("#gender-feedback").css("display", "block");
    }
    if ($('#ck-full').is(":checked") != true && $('#ck-part').is(":checked") !=true && $('#ck-look').is(":checked") != true &&
    $('#ck-rest').is(":checked") != true && $('#ck-parent').is(":checked") !=true && $('#ck-student').is(":checked") != true &&
    $('#ck-soldier').is(":checked") != true && $('#ck-cantwork').is(":checked") != true) {
        valid = false;
        $("#employee-feedback").css("display", "block");
    }
    if ($("#income").val().length == 0){
        valid = false;
        $("#income-feedback").css("display", "block");
    }
     if ($("#control").val().length == 0){
        valid = false;
        $("#control-feedback").css("display", "block");
    }
     if ($("#coupang").val().length == 0){
        valid = false;
        $("#coupang-feedback").css("display", "block");
    }
    if ($("#situation-txt").val().length == 0){
        valid = false;
        $("#situation-feedback").css("display", "block");
    }
    /*
    if($('#ibt1').val() ==0 || $('#ibt2').val() ==0 || $('#ibt3').val() ==0 || $('#ibt4').val() ==0 || $('#ibt5').val() ==0) {
        valid = false;
        $("#ibt-feedback").css("display", "block");
    }
    if (valid == true) {
        $("#info-form").submit();
        console.log(valid);
    }*/
    if (valid == true ) {

        $('#employee').val(employee);

        $('#demographic').css("display", "none");
        $('#individual-traits').css("display", "block");

    }
    console.log(valid);
});

$('#info-button').click(function() {
    var valid = true;

    $("#iby-feedback").css("display", "none");
    $("#inp-feedback").css("display", "none");
    $("#sus-feedback").css("display", "none");
    if($('#ibt1').val() ==0 || $('#ibt2').val() ==0 || $('#ibt3').val() ==0 || $('#ibt4').val() ==0 || $('#ibt5').val() ==0) {
        valid = false;
        $("#ibt-feedback").css("display", "block");
    }
    if($('#imp1').val() ==0 || $('#imp2').val() ==0 || $('#imp3').val() ==0 || $('#imp4').val() ==0 ) {
        valid = false;
        $("#imp-feedback").css("display", "block");
    }
        if($('#sus1').val() ==0 || $('#sus2').val() ==0 || $('#sus3').val() ==0 || $('#sus4').val() ==0 || $('#sus5').val() ==0 ||
        $('#sus6').val() ==0 || $('#sus7').val() ==0 || $('#sus8').val() ==0 || $('#sus9').val() ==0 || $('#sus10').val() ==0 ||
        $('#sus11').val() ==0 || $('#sus12').val() ==0 ) {
        valid = false;
        $("#sus-feedback").css("display", "block");
    }

    if (valid == true) {
        $("#info-form").submit();
        console.log(valid);
    }

});

    $("#introduction").css("display", "none");
    $('#gender-btn button').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        $("#gender").val($(this).text());
        console.log($(this).text());
    });


    $('#frequency-btn button').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        val = $(this).text();
        console.log(val);
        if (val=="거의 하지 않는다")
            $("#frequency").val(1);
        else if (val=="한달에 1번")
            $("#frequency").val(2);
        else if (val=="2주일에 1번")
            $("#frequency").val(3);
        else if (val=="일주일에 1번")
            $("#frequency").val(4);
        else if (val=="일주일에 2~4번")
            $("#frequency").val(5);
        else if (val=="일주일에 5번 이상")
            $("#frequency").val(6);
    });

     $('#income-btn button').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        val = $(this).text();
        console.log(val);
        if (val=="50만원 미만")
            $("#income").val(1);
        else if (val=="50만원 이상 100만원 미만")
            $("#income").val(2);
        else if (val=="100만원 이상 200만원 미만")
            $("#income").val(3);
        else if (val=="200만원 이상 300만원 미만")
            $("#income").val(4);
        else if (val=="300만원 이상")
            $("#income").val(5);
    });


    $('#coupang-btn button').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        val = $(this).text();
        if (val=="거의 이용하지 않는다")
            $("#coupang").val(1);
        else if (val=="한달에 1번")
            $("#coupang").val(2);
        else if (val=="2주일에 1번")
            $("#coupang").val(3);
        else if (val=="일주일에 1번")
            $("#coupang").val(4);
        else if (val=="일주일에 2~4번")
            $("#coupang").val(5);
        else if (val=="일주일에 5번 이상")
            $("#coupang").val(6);
    });

    $('#control-btn button').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        val = $(this).text();
        if (val=="전혀 필요하지 않다고 느낌")
            $("#control").val(1);
        else if (val=="필요하지 않다고 느낌")
            $("#control").val(2);
        else if (val=="필요하지 않다는 편에 더 가까움")
            $("#control").val(3);
        else if (val=="필요하다는 편에 더 가까움")
            $("#control").val(4);
        else if (val=="필요하다고 느낌")
            $("#control").val(5);
        else if (val=="매우 필요하다고 느낌")
            $("#control").val(6);
    });


$('#ibt1-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#ibt1').val($(this).text());
});
$('#ibt2-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#ibt2').val($(this).text());
});
$('#ibt3-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#ibt3').val($(this).text());
});
$('#ibt4-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#ibt4').val($(this).text());
});
$('#ibt5-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#ibt5').val($(this).text());
});


$('#imp1-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#imp1').val($(this).text());
});
$('#imp2-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#imp2').val($(this).text());
});
$('#imp3-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#imp3').val($(this).text());
});
$('#imp4-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#imp4').val($(this).text());
});


$('#sus1-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#sus1').val($(this).text());
});
$('#sus2-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#sus2').val($(this).text());
});
$('#sus3-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#sus3').val($(this).text());
});
$('#sus4-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#sus4').val($(this).text());
});
$('#sus5-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#sus5').val($(this).text());
});
$('#sus6-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#sus6').val($(this).text());
});
$('#sus7-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#sus7').val($(this).text());
});
$('#sus8-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#sus8').val($(this).text());
});
$('#sus9-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#sus9').val($(this).text());
});
$('#sus10-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#sus10').val($(this).text());
});
$('#sus11-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#sus11').val($(this).text());
});
$('#sus12-btn button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('#sus12').val($(this).text());
});



    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
};



var employee = [];
$('#ck-full').click(function() {
    if ($(this).is(":checked") == true)
        employee.push($(this).val());
    else
        employee.pop($(this).val());
});
$('#ck-part').click(function() {
    if ($(this).is(":checked") == true)
        employee.push($(this).val());
    else
        employee.pop($(this).val());
});
$('#ck-look').click(function() {
    if ($(this).is(":checked") == true)
        employee.push($(this).val());
    else
        employee.pop($(this).val());
});
$('#ck-rest').click(function() {
    if ($(this).is(":checked") == true)
        employee.push($(this).val());
    else
        employee.pop($(this).val());
});
$('#ck-parent').click(function() {
    if ($(this).is(":checked") == true)
        employee.push($(this).val());
    else
        employee.pop($(this).val());
});
$('#ck-student').click(function() {
    if ($(this).is(":checked") == true)
        employee.push($(this).val());
    else
        employee.pop($(this).val());
});
$('#ck-soldier').click(function() {
    if ($(this).is(":checked") == true)
        employee.push($(this).val());
    else
        employee.pop($(this).val());
});
$('#ck-cantwork').click(function() {
    if ($(this).is(":checked") == true)
        employee.push($(this).val());
    else
        employee.pop($(this).val());
});
