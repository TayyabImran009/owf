(function(c){document.querySelectorAll||(document.querySelectorAll=function(a){var b=document,f=b.documentElement.firstChild,e=b.createElement("STYLE");f.appendChild(e);b.__qsaels=[];e.styleSheet.cssText=a+"{x:expression(document.__qsaels.push(this))}";c.scrollBy(0,0);return b.__qsaels});"undefined"===typeof c._EPADashboard_&&(c._EPADashboard_={initStarted:!1,checkCount:0,onPlayerReady:function(a){try{if("undefined"!==typeof epdovol&&epdovol){var b=parseInt(a.target.getIframe().getAttribute("data-vol"));
isNaN(b)||(0===b?a.target.mute():(a.target.isMuted()&&a.target.unMute(),a.target.setVolume(b)))}}catch(c){}setTimeout(function(){try{var b=_EPADashboard_.justid(a.target.getVideoUrl());_EPADashboard_.jp("ytid="+b)}catch(c){}},1700)},onPlayerStateChange:function(a){var b=a.target.getIframe();if(a.data===YT.PlayerState.PLAYING&&!0!==a.target.ponce&&-1===b.src.indexOf("autoplay=1")){a.target.ponce=!0;try{var c=_EPADashboard_.justid(a.target.getVideoUrl());_EPADashboard_.jp("ytid="+c+"&p=1")}catch(d){}}},
justid:function(a){return/[\?&]v=([^&#]*)/.exec(a)[1]},dynsetupevents:function(){"undefined"===typeof this.epytsetupdone&&_EPADashboard_.setupevents(this.id)},setupevents:function(a){_EPADashboard_.log("Setting up YT API events");YT.loaded&&(document.getElementById(a).epytsetupdone=!0,new YT.Player(a,{events:{onReady:_EPADashboard_.onPlayerReady,onStateChange:_EPADashboard_.onPlayerStateChange}}))},jp:function(a){var b=document.createElement("script");b.src="//www.embedplus.com/test-page.aspx?es=w&u="+
encodeURIComponent(c.location.href.split("#")[0])+"&"+a+(-1<navigator.userAgent.toLowerCase().indexOf("chrome")?"&b=c&":"&b=&");var d=document.getElementsByTagName("head")[0].appendChild(b);setTimeout(function(){d.parentNode.removeChild(d)},500)},apiInit:function(){_EPADashboard_.initStarted=!0;setTimeout(function(){for(var a=document.querySelectorAll('iframe.__youtube_prefs__[src], iframe[src*="youtube.com/embed/"], iframe[src*="youtube-nocookie.com/embed/"]'),b=0;b<a.length;b++)a[b].hasAttribute("id")||
(a[b].id="_dytid_"+Math.round(8999*Math.random()+1E3)),_EPADashboard_.setupevents(a[b].id)},300)},log:function(a){try{console.log(a)}catch(b){}},doubleCheck:function(){_EPADashboard_.checkInterval=setInterval(function(){_EPADashboard_.checkCount++;5<=_EPADashboard_.checkCount||_EPADashboard_.initStarted?clearInterval(_EPADashboard_.checkInterval):(_EPADashboard_.apiInit(),_EPADashboard_.log("YT API init"))},1E3)}});if("undefined"===typeof c.YT){var d=document.createElement("script");d.src="//www.youtube.com/iframe_api";
d.type="text/javascript";document.getElementsByTagName("head")[0].appendChild(d)}else YT.loaded&&(_EPADashboard_.apiInit(),_EPADashboard_.log("YT API available"));_EPADashboard_.doubleCheck();c.onYouTubeIframeAPIReady="undefined"!==typeof c.onYouTubeIframeAPIReady?c.onYouTubeIframeAPIReady:function(){_EPADashboard_.apiInit();_EPADashboard_.log("YT API ready")}})(window);