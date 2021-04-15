document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino')
    let isJumping = false
    let gravity = 0.9

    function control(e) {
        if (e.keyCode === 32) {
            // Code of action if spacebar pressed
            if (!isJumping) {
                isJumping = true
                jump()
            }
        }
    }

    document.addEventListener('keyup', control)


    let position = 0

    function jump() {
        let timerId = setInterval(function () {

            // move down
            if (position === 150) {
                clearInterval(timerId)
                console.log('down')
                let downTimerId = setInterval(function () {
                    if (position === 0) {
                        clearInterval(downTimerId)
                        isJumping = false
                    }
                    position -= 30
                    dino.style.bottom = position + 'px'
                }, 20)
            }


            //move up
            console.log('up')
            position += 30
            dino.style.bottom = position + 'px'
        }, 20)
    }


})