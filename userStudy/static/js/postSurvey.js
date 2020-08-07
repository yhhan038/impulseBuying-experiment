$('#btn-start-eval').click(function() {
    if ($('#reason-task2').val().length != 0 && $('#buyTask2').val() != 0) {
        $('#postQuestion').css("display", "none");
        $('#functionality').css("display", "block");
        $('#reasonTask2').val($('#reason-task2').val());
    }
    else
        alert("모든 질문에 답해주세요.");
});

$('#btn-done-func').click(function() {
    if (validCheck1()) {
        $('#functionality').css("display", "none");
        $('#preference').css("display", "block");
    }
    else
        alert("모든 질문에 답해주세요.");
})
$('#btn-done-pref').click(function() {
    if (validCheck2()) {
        $('#preference').css("display", "none");
        $('#usability').css("display", "block");
    }
    else
        alert("모든 질문에 답해주세요.");
})
$('#btn-done-use').click(function() {
    if (validCheck3()) {
        $('#ans-form-post').submit();
    }
    else
        alert("모든 질문에 답해주세요.");
})


$('#btn-func-rank1 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#funcRank1").val($(this).text());
});
$('#btn-func-rank2 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#funcRank2").val($(this).text());
});
$('#btn-func-rank3 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#funcRank3").val($(this).text());
});
$('#btn-func-rank4 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#funcRank4").val($(this).text());
});
$('#btn-func-s1 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#funcS1").val($(this).text());
});
$('#btn-func-r1 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#funcR1").val($(this).text());
});
$('#btn-func-p1 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#funcP1").val($(this).text());
});
$('#btn-func-d1 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#funcD1").val($(this).text());
});
$('#btn-func-s2 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#funcS2").val($(this).text());
});
$('#btn-func-r2 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#funcR2").val($(this).text());
});
$('#btn-func-p2 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#funcP2").val($(this).text());
});
$('#btn-func-d2 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#funcD2").val($(this).text());
});


$('#btn-pref-rank1 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#prefRank1").val($(this).text());
});
$('#btn-pref-rank2 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#prefRank2").val($(this).text());
});
$('#btn-pref-rank3 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#prefRank3").val($(this).text());
});
$('#btn-pref-rank4 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#prefRank4").val($(this).text());
});
$('#btn-pref-s1 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#prefS1").val($(this).text());
});
$('#btn-pref-r1 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#prefR1").val($(this).text());
});
$('#btn-pref-p1 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#prefP1").val($(this).text());
});
$('#btn-pref-d1 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#prefD1").val($(this).text());
});
$('#btn-pref-s2 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#prefS2").val($(this).text());
});
$('#btn-pref-r2 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#prefR2").val($(this).text());
});
$('#btn-pref-p2 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#prefP2").val($(this).text());
});
$('#btn-pref-d2 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#prefD2").val($(this).text());
});



$('#btn-use-rank1 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#useRank1").val($(this).text());
});
$('#btn-use-rank2 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#useRank2").val($(this).text());
});
$('#btn-use-rank3 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#useRank3").val($(this).text());
});
$('#btn-use-rank4 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#useRank4").val($(this).text());
});
$('#btn-use-s1 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#useS1").val($(this).text());
});
$('#btn-use-r1 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#useR1").val($(this).text());
});
$('#btn-use-p1 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#useP1").val($(this).text());
});
$('#btn-use-d1 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#useD1").val($(this).text());
});
$('#btn-use-s2 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#useS2").val($(this).text());
});
$('#btn-use-r2 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#useR2").val($(this).text());
});
$('#btn-use-p2 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#useP2").val($(this).text());
});
$('#btn-use-d2 button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $("#useD2").val($(this).text());
});



function validCheck1() {
    var valid = true;
    if ($('#funcRank1').val() == 0 || $('#funcRank2').val() == 0 || $('#funcRank3').val() == 0 || $('#funcRank4').val() == 0)
        valid = false;
    if ($('#funcS1').val() == 0 || $('#funcR1').val() == 0 || $('#funcP1').val() == 0 || $('#funcD1').val() == 0)
        valid = false;
    if ($('#funcS2').val() == 0 || $('#funcR2').val() == 0 || $('#funcP2').val() == 0 || $('#funcD2').val() == 0)
        valid = false;

    return valid;

}
function validCheck2() {
    var valid = true;
    if ($('#prefRank1').val() == 0 || $('#prefRank2').val() == 0 || $('#prefRank3').val() == 0 || $('#prefRank4').val() == 0)
        valid = false;
    if ($('#prefS1').val() == 0 || $('#prefR1').val() == 0 || $('#prefP1').val() == 0 || $('#prefD1').val() == 0)
        valid = false;
    if ($('#prefS2').val() == 0 || $('#prefR2').val() == 0 || $('#prefP2').val() == 0 || $('#prefD2').val() == 0)
        valid = false;

    return valid;

}
function validCheck3() {
    var valid = true;
    if ($('#useRank1').val() == 0 || $('#useRank2').val() == 0 || $('#useRank3').val() == 0 || $('#useRank4').val() == 0)
        valid = false;
    if ($('#useS1').val() == 0 || $('#useR1').val() == 0 || $('#useP1').val() == 0 || $('#useD1').val() == 0)
        valid = false;
    if ($('#useS2').val() == 0 || $('#useR2').val() == 0 || $('#useP2').val() == 0 || $('#useD2').val() == 0)
        valid = false;

    return valid;

}