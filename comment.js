window.onload = function(){
    const container=document.querySelector('.container');
    var boxes=[];
    
    var i=0;
    function shift() {
        boxes=document.querySelectorAll('.box');
        boxes[0].style.gridArea='1/1/2/3'
        let temp = boxes[i];
        container.insertBefore(temp, boxes[0]); 
        i= (i+1)% 9 ;
    }
    
    
    setInterval(shift,1000);
};