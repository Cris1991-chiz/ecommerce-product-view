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


const btnLeft = document.getElementById('slideleft');

const btnRight = document.getElementById('slideright');

    btnLeft.addEventListener('click', function() {
        document.getElementById('productslider').scrollLeft -= 110;
    });

    btnRight.addEventListener('click', function() {
        document.getElementById('productslider').scrollLeft += 110;
    });


function description() {
    document.getElementById('col-description').style.display = "block";
    document.getElementById('col-reviews').style.display = "none";
};

function reviews() {
    document.getElementById('col-description').style.display = "none";
    document.getElementById('col-reviews').style.display = "block";
};
        
    
   
    

    
