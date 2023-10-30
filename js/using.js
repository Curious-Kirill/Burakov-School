'use strict';
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i < j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i=0; i < nb_videos; i++) {
        // Находим постер для видео, зная ID нашего видео
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);
        videos[i].onclick = function() {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
});
$(document).ready(function() {
var owl = $('.owl-carousel');
owl.owlCarousel({
center: true,
nav: true,
items:3,
loop:true,
margin:12,
responsive:{
0:{
items:1
},
600:{
items:2
},
1270:{
items:3
}
}
});
var scroll = 0;
var end_scroll = 1;
window.onscroll = function(ev) {
if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
if (end_scroll==1) {
end_scroll = 0;
ym(67583203,'reachGoal','scroll-end');
}
}
else{ }
};
setTimeout(function(){
$(document).mouseleave(function(){
if(scroll == 0){
scroll ++;
var form_name = $('#name').val();
var form_phone = $('#phone').val();
var form_name_2 = $('#name-2').val();
var form_phone_2 = $('#phone-2').val();
var form_name_3 = $('#name-3').val();
var form_phone_3 = $('#phone-3').val();
if(form_name != "" || form_phone != "" || form_name_2 != "" || form_phone_2 != "" || form_name_3 != "" || form_phone_3){
ym(67583203,'reachGoal','form-enter');
}
$('.exit-modal').fadeIn(300);
}
else{}
  });
},5000);
$('.exit-modal, .close').click(function(){
$('.exit-modal').fadeOut(300);
});
      });