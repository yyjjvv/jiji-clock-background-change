window.onload = function () {
    setInterval(clock, 1000);
    function clock() {
        let now = new Date();
        let hr = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        let hNum, mNum, sNum;
        let $hour = document.querySelector(".hour");
        let $min = document.querySelector(".min");
        let $sec = document.querySelector(".sec");

        if (hr < 10) {
            hNum = "0" + hr;
        } else {
            hNum = hr;
        };

        if (min < 10) {
            mNum = "0" + min;
        } else {
            mNum = min;
        };

        if (sec < 10) {
            sNum = "0" + sec;
        } else {
            sNum = sec;
        };

        $hour.innerHTML = hNum;
        $min.innerHTML = mNum;
        $sec.innerHTML = sNum;
    };

    //     //배경변경:6~11, 12~16, 17~22, 23~24+1~5
    //     let nowBg=new Date();
    //     let hrBg=nowBg.getHours();
    //     let $wrap=document.querySelector("#wrap");
    //     let timeOfTheDay=document.querySelectorAll(".timeOfTheDay");
    //     let link=document.querySelector(".link");
    //     if(hrBg>=5 && hrBg<12){
    //         $wrap.className = '';
    //         link.className = '';
    //         $wrap.classList.add("morning");
    //         timeOfTheDay[0].children("a").classList.add("on");
    //     }else if(hrBg>=12 && hrBg<17){
    //         $wrap.className = '';
    //         link.className = '';
    //         $wrap.classList.add("afternoon");
    //         timeOfTheDay[1].children("a").classList.add("on");
    //     }else if(hrBg>=17 && hrBg<23){
    //         $wrap.className = '';
    //         link.className = '';
    //         $wrap.classList.add("evening");
    //         timeOfTheDay[2].children("a").classList.add("on");
    //     }else{
    //         $wrap.className = '';
    //         link.className = '';
    //         $wrap.classList.add("night");
    //         timeOfTheDay[3].children("a").classList.add("on");
    //     };

    //     link.addEventListener("click", (e)=>{
    //         e.preventDefault();
    //         let className=this.innerHTML;
    //         link.className = '';
    //         $wrap.classList.add(className);
    //         this.classList.add("on");
    //     });
};
$(function () {
    //배경변경:6~11, 12~16, 17~22, 23~24+1~5
    let nowBg = new Date();
    let hrBg = nowBg.getHours();
    if (hrBg >= 5 && hrBg < 12) {
        $("#wrap, .bottom_menu .menu li a").removeClass();
        $("#wrap").addClass("morning");
        $(".bottom_menu .menu li").eq(0).children().addClass("on");
    } else if (hrBg >= 12 && hrBg < 17) {
        $("#wrap, .bottom_menu .menu li a").removeClass();
        $("#wrap").addClass("afternoon");
        $(".bottom_menu .menu li").eq(1).children().addClass("on");
    } else if (hrBg >= 17 && hrBg < 23) {
        $("#wrap, .bottom_menu .menu li a").removeClass();
        $("#wrap").addClass("evening");
        $(".bottom_menu .menu li").eq(2).children().addClass("on");
    } else {
        $("#wrap, .bottom_menu .menu li a").removeClass();
        $("#wrap").addClass("night");
        $(".bottom_menu .menu li").eq(3).children().addClass("on");
    };

    $(".bottom_menu a").click(function (e) {
        e.preventDefault();
        let className = $(this).text();
        console.log(className);
        $("#wrap, .bottom_menu a").removeClass();
        $("#wrap").addClass(className);
        $(this).addClass("on");
    });
});