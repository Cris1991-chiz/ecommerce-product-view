//Hover images
const thumbnails = document.getElementsByClassName('thumbnail')

const activeImages = document.getElementsByClassName('active')

    for(var i=0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('mouseover', function() {

            if(activeImages.length > 0) {
                activeImages[0].classList.remove('active')
            }

            this.classList.add('active');
            document.getElementById('featured').src = this.src;
        });
    };

//Image slider arrow buttons
const btnLeft = document.getElementById('slideleft');

const btnRight = document.getElementById('slideright');

    btnLeft.addEventListener('click', function() {
        document.getElementById('productslider').scrollLeft -= 110;
    });

    btnRight.addEventListener('click', function() {
        document.getElementById('productslider').scrollLeft += 110;
    });

//More Descriptions Button
function description() {
    document.getElementById('col-description').style.display = "block";
    document.getElementById('col-reviews').style.display = "none";
};

function reviews() {
    document.getElementById('col-description').style.display = "none";
    document.getElementById('col-reviews').style.display = "block";
};

//Drop-down Menu
const iconBars = document.querySelector('.bars-icon');
const dropMenu = document.querySelector('.drop-menu-container');
const btnBars = document.getElementById('btn-bars');

iconBars.addEventListener('click', () => {
    
        dropMenu.classList.toggle('responsive');
});
        
    
   
    

    
