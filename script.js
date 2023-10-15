let button=document.querySelectorAll("button")
let display=document.querySelector(".display")
button.forEach(item=>{
    item.addEventListener("click",()=>{
        if(item.classList.contains("AC")){
            display.value=""
        }
        else if(item.classList.contains("C")){
            let res=display.value.slice(0,-1)
            display.value=res
        }
        else if(item.classList.contains("sum")){
            display.value +="+"
        }
        else if(item.classList.contains("diff")){
            display.value +="-"
        }
        else if(item.classList.contains("mul")){
            display.value +="*"
        }
        else if(item.classList.contains("div")){
            display.value +="/"
        }
        else if(item.classList.contains("per")){
            display.value +="%"
        }
        else if(item.classList.contains("00")){
            display.value +="00"
        }
        else if(item.classList.contains(".")){
            display.value +="."
        }
        
        else if(item.classList.contains("equal")){
            display.value=eval(display.value)
        }
        
    })
})
