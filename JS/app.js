
let one = document.querySelector(".one");
let btn = document.querySelector(".btn");
let pera = document.querySelector(".pera");


btn.addEventListener("click", function(){
    if(one.value){
        if(one.value - 10){
            for(let i = 1; i <= 10; i++){
                document.write(one.value + " x " + i + " = " + one.value * i + "<br/>");    
            }
        }else{
            pera.style.color = "red";
            pera.innerHTML = "Plese Inter Your Number Value!"
            
        }
    }else{
        pera.style.color = "red";
        pera.innerHTML = "Plese Inter Your Value!"
    }
});

