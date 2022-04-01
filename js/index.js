function hide(sth){
    var obj=document.getElementById(sth)
    obj.style.display = 'none';
}
function show(sth){
    var obj=document.getElementById(sth)
    obj.style.display = 'block';
}
function hideandshow(sth1,sth2){
    var obj=document.getElementById(sth1)
    obj.style.display = 'none';
    var obj1=document.getElementById(sth2)
    obj1.style.display = 'block';
}
function openweb(url){
    window.open(url)
}
var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
    isMobile = isIphone || isAndroid;
if(isMobile) {undefined
    location.href = 'https://www.nllq.xyz/mobile.html';
}
//或者单独判断iphone或android
if(isIphone){undefined
    console.log("iphone访问");
}else if(isAndroid){undefined
    console.log("Android访问");
}else{undefined
    console.log("非iphone或Android访问");
}