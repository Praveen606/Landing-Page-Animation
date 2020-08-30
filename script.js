function fadeOut(){
    TweenMax.to(".button",1,{
        y : -200,
        opacity :0
    })
    
    TweenMax.to("#h1",1,{
    y : -200,
    opacity :0,
    delay :1
    })
    TweenMax.to("#one",1,{
    y : -200,
    opacity :0,
    delay :2
    })
    TweenMax.to("#two",1,{
    y : -200,
    opacity :0,
    delay :3
    })
}
