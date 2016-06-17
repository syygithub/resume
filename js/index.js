//->REM响应式布局
~function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(640);




//->设置滑屏
var step = 0;
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    direction: 'vertical',
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    onSlidePrevEnd: function () {
        step--;
        if (step <= 0) {
            step = 5;
        }

        change();
    },
    onSlideNextEnd: function () {
        step++;
        if (step >= 6) {
            step = 1;
        }
        change();
    }
});


function change() {
    var divList = document.querySelectorAll(".swiper-slide");
    [].forEach.call(divList, function (curDiv, index) {
        console.log(step);
        curDiv.id = index === step ? curDiv.getAttribute("trueId") : null;
    });
}

//->音频的自动播放
~function () {
    var audioBox = document.querySelector(".audio"),
        myAudio = audioBox.getElementsByTagName("audio")[0];

    //->延时播放音频文件,先让其他的内容加载
    window.setTimeout(function () {
        myAudio.play();
        myAudio.addEventListener("canplay", function () {
            //->当音频可以播放的时候触发这个事件
            audioBox.style.display = "block";
            audioBox.className += " audioMove";
        }, false);
    }, 1000);

    //->点击音乐图标,实现音频的暂停或者播放
    audioBox.addEventListener("click", function () {
        if (myAudio.paused) {//->当前是暂停的,我让其播放
            myAudio.play();
            audioBox.className = "audio audioMove";
            return;
        }
        //->当前是播放的,我让其暂停
        myAudio.pause();
        audioBox.className = "audio";
    }, false);
}();
//canvas绘图
/*
~function(){
    var drawing=document.querySelector("#drawing");
    if(drawing.getContext){
        var context=drawing.getContext("2d");
        context.beginPath();
        context.arc(50,100,49,0,2*Math.PI,false);
        context.moveTo(50,50);
        context.lineTo(120,0);
        context.moveTo(100,100);
        context.lineTo(125,100);
        context.moveTo(50,150);
        context.lineTo(125,200);
        context.strokeStyle="gold";
        context.stroke();
    }
}()*/
