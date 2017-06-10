/**
 * Created by wangjie on 2017/3/6.
 */
$(function () {
   $(".content").html("hello new world !!!");
    $(".title").click(function () {
        $(this).addClass("curcol").next(".content").css("display","block");
    })
});

var flag=1;
$("#main17").click(function () {
    if (flag == 1) {
        main17.style.transition = '-webkit-transform 3s';
        main17.style.transform = 'rotate(80deg)';
        main16.style.transition = '-webkit-transform 3s';
        main16.style.transform = 'rotate(70deg)';
        main15.style.transition = '-webkit-transform 3s';
        main15.style.transform = 'rotate(60deg)';
        main14.style.transition = '-webkit-transform 3s';
        main14.style.transform = 'rotate(50deg)';
        main13.style.transition = '-webkit-transform 3s';
        main13.style.transform = 'rotate(40deg)';
        main12.style.transition = '-webkit-transform 3s';
        main12.style.transform = 'rotate(30deg)';
        main11.style.transition = '-webkit-transform 3s';
        main11.style.transform = 'rotate(20deg)';
        main10.style.transition = '-webkit-transform 3s';
        main10.style.transform = 'rotate(10deg)';
        main9.style.transition = '-webkit-transform 3s';
        main9.style.transform = 'rotate(0deg)';
        main8.style.transition = '-webkit-transform 3s';
        main8.style.transform = 'rotate(-10deg)';
        main7.style.transition = '-webkit-transform 3s';
        main7.style.transform = 'rotate(-20deg)';
        main6.style.transition = '-webkit-transform 3s';
        main6.style.transform = 'rotate(-30deg)';
        main5.style.transition = '-webkit-transform 3s';
        main5.style.transform = 'rotate(-40deg)';
        main4.style.transition = '-webkit-transform 3s';
        main4.style.transform = 'rotate(-50deg)';
        main3.style.transition = '-webkit-transform 3s';
        main3.style.transform = 'rotate(-60deg)';
        main2.style.transition = '-webkit-transform 3s';
        main2.style.transform = 'rotate(-70deg)';
        main1.style.transition = '-webkit-transform 3s';
        main1.style.transform = 'rotate(-80deg)';
        flag = 0;
    } else if (flag == 0) {
        main17.style.transition = '-webkit-transform 3s';
        main17.style.transform = 'rotate(0deg)';
        main16.style.transition = '-webkit-transform 3s';
        main16.style.transform = 'rotate(0deg)';
        main15.style.transition = '-webkit-transform 3s';
        main15.style.transform = 'rotate(0deg)';
        main14.style.transition = '-webkit-transform 3s';
        main14.style.transform = 'rotate(0deg)';
        main13.style.transition = '-webkit-transform 3s';
        main13.style.transform = 'rotate(0deg)';
        main12.style.transition = '-webkit-transform 3s';
        main12.style.transform = 'rotate(0deg)';
        main11.style.transition = '-webkit-transform 3s';
        main11.style.transform = 'rotate(0deg)';
        main10.style.transition = '-webkit-transform 3s';
        main10.style.transform = 'rotate(0deg)';
        main9.style.transition = '-webkit-transform 3s';
        main9.style.transform = 'rotate(0deg)';
        main8.style.transition = '-webkit-transform 3s';
        main8.style.transform = 'rotate(0deg)';
        main7.style.transition = '-webkit-transform 3s';
        main7.style.transform = 'rotate(0deg)';
        main6.style.transition = '-webkit-transform 3s';
        main6.style.transform = 'rotate(0deg)';
        main5.style.transition = '-webkit-transform 3s';
        main5.style.transform = 'rotate(0deg)';
        main4.style.transition = '-webkit-transform 3s';
        main4.style.transform = 'rotate(0deg)';
        main3.style.transition = '-webkit-transform 3s';
        main3.style.transform = 'rotate(0deg)';
        main2.style.transition = '-webkit-transform 3s';
        main2.style.transform = 'rotate(0deg)';
        main1.style.transition = '-webkit-transform 3s';
        main1.style.transform = 'rotate(0deg)';
        flag = 1;
    }

});
