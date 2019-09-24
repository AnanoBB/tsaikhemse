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

  document.querySelector( "#activeB" ).addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });  

  document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    // lazyImage.srcset = lazyImage.dataset.srcset;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Possibly fall back to a more compatible method here
    }
});
