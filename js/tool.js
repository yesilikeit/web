//垂直缓动动画封装
function slowTop(ele,target){
    //使用定时器,先清除定时器
    clearInterval(ele.timer);
    //绑定timer属性为定时器
    ele.timer = setInterval(function(){
        //每次走的步长为Math.ceil(目标值-当前值)/10
        var step = (target-ele.offsetTop)/10;
        //判断当前位置与目标位置
        step = step>0?Math.ceil(step):Math.floor(step);
        ele.style.top = ele.offsetTop + step + "px";
        //跳出条件
        if(Math.abs(target-ele.offsetTop)<=Math.abs(step)){
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    },30); 
}
//水平缓动动画封装
function slow(ele,target){
    //使用定时器,先清除定时器
    clearInterval(ele.timer);
    //绑定timer属性为定时器
    ele.timer = setInterval(function(){
        //每次走的步长为Math.ceil(目标值-当前值)/10
        var step = (target-ele.offsetLeft)/10;
        //判断当前位置与目标位置
        step = step>0?Math.ceil(step):Math.floor(step);
        ele.style.left = ele.offsetLeft + step + "px";
        //跳出条件
        if(Math.abs(target-ele.offsetLeft)<=Math.abs(step)){
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    },30); 
}
//scroll兼容封装
function scroll(){
    if(window.pageYOffset !== undefined){
        // var json = {
        //     "top":window.pageYOffset,
        //     "left":window.pageXOffset
        // }
        return {
            "top":window.pageYOffset,
            "left":window.pageXOffset
        }
    }else if(document.compatMode === "CSS1CompatMode"){
        return {
            "top":document.documentElement.scrollTop,
            "left":document.documentElement.scrollLeft
        }
    }else{
        return {
            "top":document.body.scrollTop,
            "left":document.body.scrollLeft
        }
    }
    //简单封装(实际工作用)
    // return {
    //     "top":window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
    //     "left":window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
    // }
}