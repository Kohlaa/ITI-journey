let images = document.querySelectorAll('.image');
let animationInterval;
let isAnimationStopped = false;

function changeBrightness() {
    let currentIndex = 0;

    function animate() {
        if (!isAnimationStopped) {
            images.forEach((image, index) => {
                if (index === currentIndex) {
                    let brightSrc = image.getAttribute('data-bright');
                    image.setAttribute('src', brightSrc);
                } else {
                    let normalSrc = image.getAttribute('data-normal');
                    image.setAttribute('src', normalSrc);
                }
            });

            currentIndex = (currentIndex + 1) % images.length;
        }
    }

    animationInterval = setInterval(animate, 1000); 

    images.forEach((image) => {
        image.addEventListener('mouseover', () => {
            isAnimationStopped = true;
            clearInterval(animationInterval);
        });

        image.addEventListener('mouseout', () => {
            isAnimationStopped = false;
            animationInterval = setInterval(animate, 1000);
        });
    });
}

changeBrightness();

