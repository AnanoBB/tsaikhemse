let add_button = document.getElementsByClassName("menu_buttons");
console.log(add_button);

let scr = document.getElementById("more");

scr.addEventListener('click',function(){alert()});

// add_button.addEventListener("click",function(){alert()});

for (let i = 0; i < add_button.length;i++){
    add_button[i].addEventListener('click',function(){
        this.classList.toggle('added');
        
        if(this.classList.contains('added')){
            this.textContent = 'დამატებულია';
        } else{
            this.textContent = "დამატება";
        }
        
    })
}



function show_hide(){
    let click = document.getElementById("drop-content");
    if(click.style.display=="none"){
      click.style.display = "block";
    }
    else{
      click.style.display = 'none';
    }
  }

