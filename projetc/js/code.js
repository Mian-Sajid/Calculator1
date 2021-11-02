let buttons = document.querySelectorAll('button');
let result=document.getElementById('result');


for(let i=1; i<buttons.length; i++){

       buttons[i].addEventListener("click", function(){
        
        if(this.innerHTML=="="){
            result.innerHTML=eval(result.innerHTML);
        }else if(this.innerHTML=='C'){
            result.innerHTML="";
        }
        else if(this.innerHTML=="Back"){
            result.innerHTML= result.innerHTML.slice(0,-1);
        }
       
        else{
          
          result.innerHTML +=this.innerHTML;
        }

      
        
    });
}

  