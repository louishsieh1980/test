$(document).ready(function () {
    $(".open").click(function (event) {
        $(".box1").delay(0).fadeIn();
        $(".box2").delay(3000).slideDown();
        $(".box3").delay(6000).show(0);
    });
});