document.addEventListener('DOMContentLoaded', function () {
    const player = document.getElementById('player');
    const obstacle = document.querySelector('.obstacle');
    let isJumping = false;

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            movePlayerRight();
        } else if (event.key === 'Arrowup' && !isJUmping) {
            isJumping();
        }
    });

    function movePlayerRight() {
        const currentPosition = parseInt(window.getComputedStyle(player).left);
        player.style.left = currentPosition + 10 + 'px';

        checkCollision();
    }

    function jump() {
        isJumping = true;
        let jumpCount = 0;

        function performJump() {
            const currentPosition = parseInt(windo.getComputedStyle(player).bottom);

            if(jumpCount >= 20) {
                isJumping = false;
                return;
            }

            player.style.bottom = currentPosition + 10 + 'px';
            jumpCount++;

            checkCollision();

            requestAnimationFrame(performJump);
        }

        performJump();
    }

    function checkCollision() {
        const playerRect = player.getBoundingClientRect();
        const obstacleReact = obstacle.getBoundingClientRect();

        if(
            playerRect.bottom > obstacleReact.top &&
            playerRect.top < obstacleReact.bottom &&
            playerRect.right > obstacleReact.left &&
            playerRect.left < obstacleReact.right
        ) {
            alert("Gamer Over!");
            resetGame();
        }

        function resetGame() {
            player.style.bottom = '0';
            obstacle.style.left = '300px'
        }
    }
});
