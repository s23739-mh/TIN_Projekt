

document.addEventListener("DOMContentLoaded", function(event) { 
    var myUrl=document.URL;
    var name="";
    if(myUrl.includes("html#"))
    {
        for(var i = myUrl.indexOf("#")+1;i<myUrl.length;i++)
        {
            name=name+myUrl.charAt(i);
        }
        seeTrick(name);
    }
  });

function myCredentials(){

    var x = document.getElementById('myEmail');
    var styl = window.getComputedStyle(x);
    var z = styl.getPropertyValue('display');

    if(z=="none"){
        x.style.display="inline";
    }
    else{
        x.style.display="none";
    }

}



function seeTrick(trick){

    if(document.URL.includes("skateboard.html"))
    {
     window.open("tricks.html#"+trick,'_blank');
        return;
    }
    

    var chosen = document.getElementById(trick);
    var stylChosen = window.getComputedStyle(chosen);
    var cssChosen = stylChosen.getPropertyValue('display');
    var trickButtons = document.querySelector(".trickButtons");
    var allChosen = document.querySelectorAll(".tricksList div");
    var image = document.querySelector(".tricksScreen img");

    window.scroll(0,(getOffset(document.querySelector(".learnPart")).top));

    for( i of allChosen)
    {
        if(i!=trickButtons){
        i.style.display="none";
        }
    }
    if(cssChosen="none"){
        chosen.style.display="inline";
        image.src="tricks/"+trick+".gif";
    }
    
}

window.onload = function()
{
document.querySelector(".tricksScreen").addEventListener("click", animation);

function animation()
{
    var x = document.querySelector(".tricksScreen img");

        x.src="tricks/Idle.gif";
        var trickButtons = document.querySelector(".trickButtons");
        var allChosen = document.querySelectorAll(".tricksList div");
       
        for( i of allChosen)
        {
            if(i!=trickButtons){
            i.style.display="none";
            }
        }

}
}


function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }