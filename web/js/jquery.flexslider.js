
!function(C){C.flexslider=function(p,e){var m=C(p),v=C.extend({},C.flexslider.defaults,e),d=v.namespace,u="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,i=u?"touchend":"click",f="vertical"===v.direction,g=v.reverse,h=0<v.itemWidth,S="fade"===v.animation,x=""!==v.asNavFor,y={};C.data(p,"flexslider",m),y={init:function(){m.animating=!1,m.currentSlide=v.startAt,m.animatingTo=m.currentSlide,m.atEnd=0===m.currentSlide||m.currentSlide===m.last,m.containerSelector=v.selector.substr(0,v.selector.search(" ")),m.slides=C(v.selector,m),m.container=C(m.containerSelector,m),m.count=m.slides.length,m.syncExists=0<C(v.sync).length,"slide"===v.animation&&(v.animation="swing"),m.prop=f?"top":"marginLeft",m.args={},m.manualPause=!1,m.transitions=!v.video&&!S&&v.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(void 0!==e.style[t[n]])return m.pfx=t[n].replace("Perspective","").toLowerCase(),m.prop="-"+m.pfx+"-transform",!0;return!1}(),""!==v.controlsContainer&&(m.controlsContainer=0<C(v.controlsContainer).length&&C(v.controlsContainer)),""!==v.manualControls&&(m.manualControls=0<C(v.manualControls).length&&C(v.manualControls)),v.randomize&&(m.slides.sort(function(){return Math.round(Math.random())-.5}),m.container.empty().append(m.slides)),m.doMath(),x&&y.asNav.setup(),m.setup("init"),v.controlNav&&y.controlNav.setup(),v.directionNav&&y.directionNav.setup(),v.keyboard&&(1===C(m.containerSelector).length||v.multipleKeyboard)&&C(document).bind("keyup",function(e){var t,n=e.keyCode;m.animating||39!==n&&37!==n||(t=39===n?m.getTarget("next"):37===n&&m.getTarget("prev"),m.flexAnimate(t,v.pauseOnAction))}),v.mousewheel&&m.bind("mousewheel",function(e,t,n,a){e.preventDefault();var i=t<0?m.getTarget("next"):m.getTarget("prev");m.flexAnimate(i,v.pauseOnAction)}),v.pausePlay&&y.pausePlay.setup(),v.slideshow&&(v.pauseOnHover&&m.hover(function(){m.manualPlay||m.manualPause||m.pause()},function(){m.manualPause||m.manualPlay||m.play()}),0<v.initDelay?setTimeout(m.play,v.initDelay):m.play()),u&&v.touch&&y.touch(),(!S||S&&v.smoothHeight)&&C(window).bind("resize focus",y.resize),setTimeout(function(){v.start(m)},200)},asNav:{setup:function(){m.asNav=!0,m.animatingTo=Math.floor(m.currentSlide/m.move),m.currentItem=m.currentSlide,m.slides.removeClass(d+"active-slide").eq(m.currentItem).addClass(d+"active-slide"),m.slides.click(function(e){e.preventDefault();var t=C(this),n=t.index();C(v.asNavFor).data("flexslider").animating||t.hasClass("active")||(m.direction=m.currentItem<n?"next":"prev",m.flexAnimate(n,v.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){m.manualControls?y.controlNav.setupManual():y.controlNav.setupPaging()},setupPaging:function(){var e,t="thumbnails"===v.controlNav?"control-thumbs":"control-paging",n=1;if(m.controlNavScaffold=C('<ol class="'+d+"control-nav "+d+t+'"></ol>'),1<m.pagingCount)for(var a=0;a<m.pagingCount;a++)e="thumbnails"===v.controlNav?'<img src="'+m.slides.eq(a).attr("data-thumb")+'"/>':"<a>"+n+"</a>",m.controlNavScaffold.append("<li>"+e+"</li>"),n++;m.controlsContainer?C(m.controlsContainer).append(m.controlNavScaffold):m.append(m.controlNavScaffold),y.controlNav.set(),y.controlNav.active(),m.controlNavScaffold.delegate("a, img",i,function(e){e.preventDefault();var t=C(this),n=m.controlNav.index(t);t.hasClass(d+"active")||(m.direction=n>m.currentSlide?"next":"prev",m.flexAnimate(n,v.pauseOnAction))}),u&&m.controlNavScaffold.delegate("a","click touchstart",function(e){e.preventDefault()})},setupManual:function(){m.controlNav=m.manualControls,y.controlNav.active(),m.controlNav.live(i,function(e){e.preventDefault();var t=C(this),n=m.controlNav.index(t);t.hasClass(d+"active")||(n>m.currentSlide?m.direction="next":m.direction="prev",m.flexAnimate(n,v.pauseOnAction))}),u&&m.controlNav.live("click touchstart",function(e){e.preventDefault()})},set:function(){var e="thumbnails"===v.controlNav?"img":"a";m.controlNav=C("."+d+"control-nav li "+e,m.controlsContainer?m.controlsContainer:m)},active:function(){m.controlNav.removeClass(d+"active").eq(m.animatingTo).addClass(d+"active")},update:function(e,t){1<m.pagingCount&&"add"===e?m.controlNavScaffold.append(C("<li><a>"+m.count+"</a></li>")):1===m.pagingCount?m.controlNavScaffold.find("li").remove():m.controlNav.eq(t).closest("li").remove(),y.controlNav.set(),1<m.pagingCount&&m.pagingCount!==m.controlNav.length?m.update(t,e):y.controlNav.active()}},directionNav:{setup:function(){var e=C('<ul class="'+d+'direction-nav"><li><a class="'+d+'prev" href="#">'+v.prevText+'</a></li><li><a class="'+d+'next" href="#">'+v.nextText+"</a></li></ul>");m.controlsContainer?(C(m.controlsContainer).append(e),m.directionNav=C("."+d+"direction-nav li a",m.controlsContainer)):(m.append(e),m.directionNav=C("."+d+"direction-nav li a",m)),y.directionNav.update(),m.directionNav.bind(i,function(e){e.preventDefault();var t=C(this).hasClass(d+"next")?m.getTarget("next"):m.getTarget("prev");m.flexAnimate(t,v.pauseOnAction)}),u&&m.directionNav.bind("click touchstart",function(e){e.preventDefault()})},update:function(){var e=d+"disabled";1===m.pagingCount?m.directionNav.addClass(e):v.animationLoop?m.directionNav.removeClass(e):0===m.animatingTo?m.directionNav.removeClass(e).filter("."+d+"prev").addClass(e):m.animatingTo===m.last?m.directionNav.removeClass(e).filter("."+d+"next").addClass(e):m.directionNav.removeClass(e)}},pausePlay:{setup:function(){var e=C('<div class="'+d+'pauseplay"><a></a></div>');m.controlsContainer?(m.controlsContainer.append(e),m.pausePlay=C("."+d+"pauseplay a",m.controlsContainer)):(m.append(e),m.pausePlay=C("."+d+"pauseplay a",m)),y.pausePlay.update(v.slideshow?d+"pause":d+"play"),m.pausePlay.bind(i,function(e){e.preventDefault(),C(this).hasClass(d+"pause")?(m.manualPause=!0,m.manualPlay=!1,m.pause()):(m.manualPause=!1,m.manualPlay=!0,m.play())}),u&&m.pausePlay.bind("click touchstart",function(e){e.preventDefault()})},update:function(e){"play"===e?m.pausePlay.removeClass(d+"pause").addClass(d+"play").text(v.playText):m.pausePlay.removeClass(d+"play").addClass(d+"pause").text(v.pauseText)}},touch:function(){var a,i,o,s,r,l,c=!1;function d(e){r=f?a-e.touches[0].pageY:a-e.touches[0].pageX,(!(c=f?Math.abs(r)<Math.abs(e.touches[0].pageX-i):Math.abs(r)<Math.abs(e.touches[0].pageY-i))||500<Number(new Date)-l)&&(e.preventDefault(),!S&&m.transitions&&(v.animationLoop||(r/=0===m.currentSlide&&r<0||m.currentSlide===m.last&&0<r?Math.abs(r)/s+2:1),m.setProps(o+r,"setTouch")))}function u(e){var t,n;p.removeEventListener("touchmove",d,!1),m.animatingTo!==m.currentSlide||c||null===r||(n=0<(t=g?-r:r)?m.getTarget("next"):m.getTarget("prev"),m.canAdvance(n)&&(Number(new Date)-l<550&&50<Math.abs(t)||Math.abs(t)>s/2)?m.flexAnimate(n,v.pauseOnAction):S||m.flexAnimate(m.currentSlide,v.pauseOnAction,!0)),p.removeEventListener("touchend",u,!1),o=r=i=a=null}p.addEventListener("touchstart",function(e){m.animating?e.preventDefault():1===e.touches.length&&(m.pause(),s=f?m.h:m.w,l=Number(new Date),o=h&&g&&m.animatingTo===m.last?0:h&&g?m.limit-(m.itemW+v.itemMargin)*m.move*m.animatingTo:h&&m.currentSlide===m.last?m.limit:h?(m.itemW+v.itemMargin)*m.move*m.currentSlide:g?(m.last-m.currentSlide+m.cloneOffset)*s:(m.currentSlide+m.cloneOffset)*s,a=f?e.touches[0].pageY:e.touches[0].pageX,i=f?e.touches[0].pageX:e.touches[0].pageY,p.addEventListener("touchmove",d,!1),p.addEventListener("touchend",u,!1))},!1)},resize:function(){!m.animating&&m.is(":visible")&&(h||m.doMath(),S?y.smoothHeight():h?(m.slides.width(m.computedW),m.update(m.pagingCount),m.setProps()):f?(m.viewport.height(m.h),m.setProps(m.h,"setTotal")):(v.smoothHeight&&y.smoothHeight(),m.newSlides.width(m.computedW),m.setProps(m.computedW,"setTotal")))},smoothHeight:function(e){var t;f&&!S||(t=S?m:m.viewport,e?t.animate({height:m.slides.eq(m.animatingTo).height()},e):t.height(m.slides.eq(m.animatingTo).height()))},sync:function(e){var t=C(v.sync).data("flexslider"),n=m.animatingTo;switch(e){case"animate":t.flexAnimate(n,v.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}}},m.flexAnimate=function(e,t,n,a,i){if(x&&1===m.pagingCount&&(m.direction=m.currentItem<e?"next":"prev"),!m.animating&&(m.canAdvance(e,i)||n)&&m.is(":visible")){if(x&&a){var o=C(v.asNavFor).data("flexslider");if(m.atEnd=0===e||e===m.count-1,o.flexAnimate(e,!0,!1,!0,i),m.direction=m.currentItem<e?"next":"prev",o.direction=m.direction,Math.ceil((e+1)/m.visible)-1===m.currentSlide||0===e)return m.currentItem=e,m.slides.removeClass(d+"active-slide").eq(e).addClass(d+"active-slide"),!1;m.currentItem=e,m.slides.removeClass(d+"active-slide").eq(e).addClass(d+"active-slide"),e=Math.floor(e/m.visible)}var s,r,l,c;m.animating=!0,m.animatingTo=e,v.before(m),t&&m.pause(),m.syncExists&&!i&&y.sync("animate"),v.controlNav&&y.controlNav.active(),h||m.slides.removeClass(d+"active-slide").eq(e).addClass(d+"active-slide"),m.atEnd=0===e||e===m.last,v.directionNav&&y.directionNav.update(),e===m.last&&(v.end(m),v.animationLoop||m.pause()),S?u?(m.slides.eq(m.currentSlide).css({opacity:0,zIndex:1}),m.slides.eq(e).css({opacity:1,zIndex:2}),m.slides.unbind("webkitTransitionEnd transitionend"),m.slides.eq(m.currentSlide).bind("webkitTransitionEnd transitionend",function(){v.after(m)}),m.animating=!1,m.currentSlide=m.animatingTo):(m.slides.eq(m.currentSlide).fadeOut(v.animationSpeed,v.easing),m.slides.eq(e).fadeIn(v.animationSpeed,v.easing,m.wrapup)):(s=f?m.slides.filter(":first").height():m.computedW,c=h?(r=v.itemWidth>m.w?2*v.itemMargin:v.itemMargin,(l=(m.itemW+r)*m.move*m.animatingTo)>m.limit&&1!==m.visible?m.limit:l):0===m.currentSlide&&e===m.count-1&&v.animationLoop&&"next"!==m.direction?g?(m.count+m.cloneOffset)*s:0:m.currentSlide===m.last&&0===e&&v.animationLoop&&"prev"!==m.direction?g?0:(m.count+1)*s:g?(m.count-1-e+m.cloneOffset)*s:(e+m.cloneOffset)*s,m.setProps(c,"",v.animationSpeed),m.transitions?(v.animationLoop&&m.atEnd||(m.animating=!1,m.currentSlide=m.animatingTo),m.container.unbind("webkitTransitionEnd transitionend"),m.container.bind("webkitTransitionEnd transitionend",function(){m.wrapup(s)})):m.container.animate(m.args,v.animationSpeed,v.easing,function(){m.wrapup(s)})),v.smoothHeight&&y.smoothHeight(v.animationSpeed)}},m.wrapup=function(e){S||h||(0===m.currentSlide&&m.animatingTo===m.last&&v.animationLoop?m.setProps(e,"jumpEnd"):m.currentSlide===m.last&&0===m.animatingTo&&v.animationLoop&&m.setProps(e,"jumpStart")),m.animating=!1,m.currentSlide=m.animatingTo,v.after(m)},m.animateSlides=function(){m.animating||m.flexAnimate(m.getTarget("next"))},m.pause=function(){clearInterval(m.animatedSlides),m.playing=!1,v.pausePlay&&y.pausePlay.update("play"),m.syncExists&&y.sync("pause")},m.play=function(){m.animatedSlides=setInterval(m.animateSlides,v.slideshowSpeed),m.playing=!0,v.pausePlay&&y.pausePlay.update("pause"),m.syncExists&&y.sync("play")},m.canAdvance=function(e,t){var n=x?m.pagingCount-1:m.last;return!!t||(x&&m.currentItem===m.count-1&&0===e&&"prev"===m.direction||(!x||0!==m.currentItem||e!==m.pagingCount-1||"next"===m.direction)&&((e!==m.currentSlide||x)&&(!!v.animationLoop||(!m.atEnd||0!==m.currentSlide||e!==n||"next"===m.direction)&&(!m.atEnd||m.currentSlide!==n||0!==e||"next"!==m.direction))))},m.getTarget=function(e){return"next"===(m.direction=e)?m.currentSlide===m.last?0:m.currentSlide+1:0===m.currentSlide?m.last:m.currentSlide-1},m.setProps=function(e,t,n){var a,i=(a=e||(m.itemW+v.itemMargin)*m.move*m.animatingTo,-1*function(){if(h)return"setTouch"===t?e:g&&m.animatingTo===m.last?0:g?m.limit-(m.itemW+v.itemMargin)*m.move*m.animatingTo:m.animatingTo===m.last?m.limit:a;switch(t){case"setTotal":return g?(m.count-1-m.currentSlide+m.cloneOffset)*e:(m.currentSlide+m.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return g?e:m.count*e;case"jumpStart":return g?m.count*e:e;default:return e}}()+"px");m.transitions&&(i=f?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",n=void 0!==n?n/1e3+"s":"0s",m.container.css("-"+m.pfx+"-transition-duration",n)),m.args[m.prop]=i,!m.transitions&&void 0!==n||m.container.css(m.args)},m.setup=function(e){var t,n;S?(m.slides.css({width:"100%",float:"left",marginRight:"-100%",position:"relative"}),"init"===e&&(u?m.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+v.animationSpeed/1e3+"s ease",zIndex:1}).eq(m.currentSlide).css({opacity:1,zIndex:2}):m.slides.eq(m.currentSlide).fadeIn(v.animationSpeed,v.easing)),v.smoothHeight&&y.smoothHeight()):("init"===e&&(m.viewport=C('<div class="'+d+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(m).append(m.container),m.cloneCount=0,m.cloneOffset=0,g&&(n=C.makeArray(m.slides).reverse(),m.slides=C(n),m.container.empty().append(m.slides))),v.animationLoop&&!h&&(m.cloneCount=2,m.cloneOffset=1,"init"!==e&&m.container.find(".clone").remove(),m.container.append(m.slides.first().clone().addClass("clone")).prepend(m.slides.last().clone().addClass("clone"))),m.newSlides=C(v.selector,m),t=g?m.count-1-m.currentSlide+m.cloneOffset:m.currentSlide+m.cloneOffset,f&&!h?(m.container.height(200*(m.count+m.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){m.newSlides.css({display:"block"}),m.doMath(),m.viewport.height(m.h),m.setProps(t*m.h,"init")},"init"===e?100:0)):(m.container.width(200*(m.count+m.cloneCount)+"%"),m.setProps(t*m.computedW,"init"),setTimeout(function(){m.doMath(),m.newSlides.css({width:m.computedW,float:"left",display:"block"}),v.smoothHeight&&y.smoothHeight()},"init"===e?100:0))),h||m.slides.removeClass(d+"active-slide").eq(m.currentSlide).addClass(d+"active-slide")},m.doMath=function(){var e=m.slides.first(),t=v.itemMargin,n=v.minItems,a=v.maxItems;m.w=m.width(),m.h=e.height(),m.boxPadding=e.outerWidth()-e.width(),h?(m.itemT=v.itemWidth+t,m.minW=n?n*m.itemT:m.w,m.maxW=a?a*m.itemT:m.w,m.itemW=m.minW>m.w?(m.w-t*n)/n:m.maxW<m.w?(m.w-t*a)/a:v.itemWidth>m.w?m.w:v.itemWidth,m.visible=Math.floor(m.w/(m.itemW+t)),m.move=0<v.move&&v.move<m.visible?v.move:m.visible,m.pagingCount=Math.ceil((m.count-m.visible)/m.move+1),m.last=m.pagingCount-1,m.limit=1===m.pagingCount?0:v.itemWidth>m.w?(m.itemW+2*t)*m.count-m.w-t:(m.itemW+t)*m.count-m.w-t):(m.itemW=m.w,m.pagingCount=m.count,m.last=m.count-1),m.computedW=m.itemW-m.boxPadding},m.update=function(e,t){m.doMath(),h||(e<m.currentSlide?m.currentSlide+=1:e<=m.currentSlide&&0!==e&&--m.currentSlide,m.animatingTo=m.currentSlide),v.controlNav&&!m.manualControls&&("add"===t&&!h||m.pagingCount>m.controlNav.length?y.controlNav.update("add"):("remove"===t&&!h||m.pagingCount<m.controlNav.length)&&(h&&m.currentSlide>m.last&&(--m.currentSlide,--m.animatingTo),y.controlNav.update("remove",m.last))),v.directionNav&&y.directionNav.update()},m.addSlide=function(e,t){var n=C(e);m.count+=1,m.last=m.count-1,f&&g?void 0!==t?m.slides.eq(m.count-t).after(n):m.container.prepend(n):void 0!==t?m.slides.eq(t).before(n):m.container.append(n),m.update(t,"add"),m.slides=C(v.selector+":not(.clone)",m),m.setup(),v.added(m)},m.removeSlide=function(e){var t=isNaN(e)?m.slides.index(C(e)):e;--m.count,m.last=m.count-1,isNaN(e)?C(e,m.slides).remove():f&&g?m.slides.eq(m.last).remove():m.slides.eq(e).remove(),m.doMath(),m.update(t,"remove"),m.slides=C(v.selector+":not(.clone)",m),m.setup(),v.removed(m)},y.init()},C.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}},C.fn.flexslider=function(a){if(void 0===a&&(a={}),"object"==typeof a)return this.each(function(){var e=C(this),t=a.selector?a.selector:".slides > li",n=e.find(t);1===n.length?(n.fadeIn(400),a.start&&a.start(e)):null==e.data("flexslider")&&new C.flexslider(this,a)});var e=C(this).data("flexslider");switch(a){case"play":e.play();break;case"pause":e.pause();break;case"next":e.flexAnimate(e.getTarget("next"),!0);break;case"prev":case"previous":e.flexAnimate(e.getTarget("prev"),!0);break;default:"number"==typeof a&&e.flexAnimate(a,!0)}}}(jQuery);

