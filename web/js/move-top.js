<<<<<<< HEAD
!function(i){i.fn.UItoTop=function(o){var n=i.extend({text:"To Top",min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1e3,easingType:"linear"},o),e="#"+n.containerID,t="#"+n.containerHoverID;i("body").append('<a href="#" id="'+n.containerID+'">'+n.text+"</a>"),i(e).hide().on("click.UItoTop",function(){return i("html, body").animate({scrollTop:0},n.scrollSpeed,n.easingType),i("#"+n.containerHoverID,this).stop().animate({opacity:0},n.inDelay,n.easingType),!1}).prepend('<span id="'+n.containerHoverID+'"></span>').hover(function(){i(t,this).stop().animate({opacity:1},600,"linear")},function(){i(t,this).stop().animate({opacity:0},700,"linear")}),i(window).scroll(function(){var o=i(window).scrollTop();void 0===document.body.style.maxHeight&&i(e).css({position:"absolute",top:o+i(window).height()-50}),o>n.min?i(e).fadeIn(n.inDelay):i(e).fadeOut(n.Outdelay)})}}(jQuery);
=======
!function(i){i.fn.UItoTop=function(o){var n=i.extend({text:"To Top",min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1e3,easingType:"linear"},o),e="#"+n.containerID,t="#"+n.containerHoverID;i("body").append('<a href="#" id="'+n.containerID+'">'+n.text+"</a>"),i(e).hide().on("click.UItoTop",function(){return i("html, body").animate({scrollTop:0},n.scrollSpeed,n.easingType),i("#"+n.containerHoverID,this).stop().animate({opacity:0},n.inDelay,n.easingType),!1}).prepend('<span id="'+n.containerHoverID+'"></span>').hover(function(){i(t,this).stop().animate({opacity:1},600,"linear")},function(){i(t,this).stop().animate({opacity:0},700,"linear")}),i(window).scroll(function(){var o=i(window).scrollTop();void 0===document.body.style.maxHeight&&i(e).css({position:"absolute",top:o+i(window).height()-50}),o>n.min?i(e).fadeIn(n.inDelay):i(e).fadeOut(n.Outdelay)})}}(jQuery);
>>>>>>> f6fe5af342b7465d3796b32598c898a350ca454e
