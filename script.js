window.onload=function(){
	var box=document.getElementById('divselect'),
	    title=box.getElementsByTagName('cite')[0],
	    menu=box.getElementsByTagName('ul')[0],
	    as=box.getElementsByTagName('a'),
        index=-1;
   
    // 点击三角时
    title.onclick=function(event){
        event = event||window.event;
      if(event.stopPropagation){
         event.stopPropagation(); 
      }else{
         event.cancelBubble = true;     
      }
      menu.style.display='block';
    }  
    
   // 滑过滑过、离开、点击每个选项时
   for (var i = 0; i < as.length; i++) {
     as[i].onmouseover=function(){
        this.style.background="#ccc";
     }
     as[i].onmouseout=function(){
        this.style.background="#fff";
     }
     as[i].onclick=function(e){
        var event=e||window.event;
        if (event.stopPropagation) {
          event.stopPropagation();
        }else{
          event.cancleBubble=true;
        }
        menu.style.display='none';
        title.innerHTML=this.innerHTML;
     }
   };
      
   

   // 点击页面空白处时
    document.onclick=function(){
      menu.style.display='none';
    }
 }