var num = 0;

var autoBanner = setInterval(function(){
    middleGate();
    
}, 5000);

function middleGate(){
    num++;
    doBanner();
}


function doBanner(){
    var list = $("#bannerList").children("li");
    var len = list.length;
    if(num<0){
        num = len-1;
    }else if(num > len-1){
        num = 0;
    }
    list.eq(num).fadeIn(300);
    list.eq(num).siblings().fadeOut(300);
    
    $("#bannerBullet").children("li").eq(num).addClass("on")
    .siblings().removeClass("on");
}
$(".prevBtn").click(function(){
    if(!$(".bannerPlay").hasClass("off")){  //자동함수 실행도중 "off"가 없음
                                            //off가 없으면 동작중 --> false
       clearInterval(autoBanner);
    }
    
    num--;   
    doBanner();
    if(!$(".bannerPlay").hasClass("off")){
        autoBanner = setInterval(function(){
                        middleGate();

                        }, 5000);
    }
});
$(".nextBtn").click(function(){
    if(!$(".bannerPlay").hasClass("off")){
        clearInterval(autoBanner);
    }
    num++;     
    doBanner();
    
    if(!$(".bannerPlay").hasClass("off")){
        autoBanner = setInterval(function(){
                        middleGate();

                    }, 5000);
    }
});

/* 썸네일 클릭 */
$("#bannerBullet").children("li").click(function(){
    if(!$(".bannerPlay").hasClass("off")){
        clearInterval(autoBanner);
    }
    
    //집합객체.eq(번지수)는 번지수에 해당하는 객체 return
    //단일객체.index()는 단일객체가 집합객체에 속해있는 번지수 return
    num = $(this).index();
    doBanner();
    if(!$(".bannerPlay").hasClass("off")){
        autoBanner = setInterval(function(){
                        middleGate();

                    }, 5000);
    }
});


/* 자동함수 */
$(".bannerPlay").click(function(){
    var _this = $(this);
    
    _this.toggleClass("off");
    
    //jQuery요소객체.hasClass("클래스명") html요소가 클래스를 갖고 있는지를 boolean으로 return
    
    if(_this.hasClass("off")){ //자동함수 멈추기
        
        clearInterval(autoBanner); //setTimeout은 setTimeout을 삭제시킨다.
       
    }else{ //자동함수 실행
        
       autoBanner = setInterval(function(){
                        middleGate();

                    }, 5000);
    }
    
});













