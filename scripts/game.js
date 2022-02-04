const scoreDisplay = document.querySelector('#score')
const startButton = document.querySelector('#start-button')
const grid = document.querySelector('.grid')
const matrix = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty


class Game {
    constructor(score = 0, squares = [], gameOverId = NaN, checkWinID = NaN) {
        this.score = score;
        this.squares = squares;
        this.gameOverId = gameOverId;
        this.checkWinId = checkWinID;
    }

    createBoard() {
        for (let row = 0; row < matrix.length; row++) {
            let newRow = [];
            this.squares.push(newRow)
            for (let col = 0; col < matrix[0].length; col++) {
                const square = document.createElement('div')
                grid.appendChild(square)
                if (matrix[row][col] === 0) {
                    square.classList.add('pac-dot')
                } else if (matrix[row][col] === 1) {
                    square.classList.add('wall')
                } else if (matrix[row][col] === 2) {
                    square.classList.add('ghost-lair')
                } else if (matrix[row][col] === 3) {
                    square.classList.add('power-pellet')
                }
                this.squares[row].push(square)
            }
        }
        function startGame() {
            pinky.movementAI();
            inky.movementAI();
            blinky.movementAI();
            clyde.movementAI();
            document.addEventListener('keyup', pacman.movePacman);
            const checkWinId = setInterval(game.checkForWin, 100)
            const gameOverId = setInterval(game.checkForGameOver, 100)
        }
        startButton.addEventListener('click', startGame)
    }

    isPacmanMovementAllowed(x, y) {
        return x >= 0 && x < matrix.length && y >= 0 && y < matrix[x].length && matrix[x][y] !== 1 && matrix[x][y] !== 2;
    }

    isGhostMovementAllowed(x, y) {
        return x >= 0 && x < matrix.length && y >= 0 && y < matrix[x].length && matrix[x][y] !== 1
            && !game.squares[x][y].classList.contains('ghost');
    }

    checkForGameOver() {
        if (game.squares[pacman.currentX][pacman.currentY].classList.contains('ghost') &&
            !game.squares[pacman.currentX][pacman.currentY].classList.contains('scared-ghost')) {
            // ghosts.forEach(ghost => clearInterval(ghost.timerId))
            clearInterval(blinky.timerId)
            clearInterval(pinky.timerId)
            clearInterval(clyde.timerId)
            clearInterval(inky.timerId)

            scoreDisplay.innerHTML = 'YOU LOSE!'
            grid.remove()
            startButton.remove()
            clearInterval(game.gameOverId)
            clearInterval(game.checkWinId)
        }
    }

    checkForWin() {
        if (game.score === 274) {
            scoreDisplay.innerHTML = 'YOU WIN!'
            document.removeEventListener('keyup', pacman.movePacman)
            grid.remove()
            startButton.remove()
            clearInterval(blinky.timerId)
            clearInterval(game.gameOverId)
            clearInterval(game.checkWinId)
        }
    }

}

class Pacman {
    constructor(squares, matrix) {
        this.currentX = 17;
        this.currentY = 14;
        this.squares = squares;
        this.matrix = matrix;
        this.rightId;
        this.leftId;
        this.upId;
        this.downId;
        this.direction = 'east'
        this.lastMove
        this.delay = 200
    }
    createPacman() {
        this.squares[this.currentX][this.currentY].classList.add('pac-man')
        this.squares[this.currentX][this.currentY].classList.add('pac-man-right')
    }
    removePacman() {
        game.squares[this.currentX][this.currentY].classList.remove('pac-man')
        game.squares[this.currentX][this.currentY].classList.remove('pac-man-right')
        game.squares[this.currentX][this.currentY].classList.remove('pac-man-left')
        game.squares[this.currentX][this.currentY].classList.remove('pac-man-down')
        game.squares[this.currentX][this.currentY].classList.remove('pac-man-up')
    }

    goLeft() {
        clearInterval(pacman.rightId)
        clearInterval(pacman.upId)
        clearInterval(pacman.downId)
        pacman.leftId = setInterval(function () {
            if (pacman.currentX === 13 && pacman.currentY === 0) {
                pacman.removePacman();
                pacman.currentX = 13, pacman.currentY = 27;
            }
            if (!game.isPacmanMovementAllowed(pacman.currentX, pacman.currentY - 1)) {
                clearInterval(this.leftId)
            }
            else {
                pacman.removePacman()
                pacman.currentY -= 1;
                pacman.pacDotEaten()
                pacman.powerPelletEaten()
                pacman.direction = 'west';
            }
            game.squares[pacman.currentX][pacman.currentY].classList.add('pac-man')
            game.squares[pacman.currentX][pacman.currentY].classList.add('pac-man-left')
        }, 200)
    }

    goRight() {
        clearInterval(pacman.leftId)
        clearInterval(pacman.upId)
        clearInterval(pacman.downId)
        pacman.rightId = setInterval(function () {
            if (pacman.currentX === 13 && pacman.currentY === 27) {
                pacman.removePacman();
                pacman.currentX = 13, pacman.currentY = 0;
            }
            if (!game.isPacmanMovementAllowed(pacman.currentX, pacman.currentY + 1)) {
                clearInterval(this.rightId)
            } else {
                pacman.removePacman()
                pacman.currentY += 1;
                pacman.pacDotEaten()
                pacman.powerPelletEaten()
                pacman.direction = 'east';
            }
            game.squares[pacman.currentX][pacman.currentY].classList.add('pac-man')
            game.squares[pacman.currentX][pacman.currentY].classList.add('pac-man-right')
        }, 200)
    }

    goUp() {
        clearInterval(pacman.rightId)
        clearInterval(pacman.leftId)
        clearInterval(pacman.downId)
        pacman.upId = setInterval(function () {
            if (!game.isPacmanMovementAllowed(pacman.currentX - 1, pacman.currentY)) {
                clearInterval(this.upId)
            } else {
                pacman.removePacman()
                pacman.currentX -= 1;
                pacman.pacDotEaten()
                pacman.powerPelletEaten()
                pacman.direction = 'north';
            }
            game.squares[pacman.currentX][pacman.currentY].classList.add('pac-man')
            game.squares[pacman.currentX][pacman.currentY].classList.add('pac-man-up')
        }, 200)
    }

    goDown() {
        clearInterval(pacman.rightId)
        clearInterval(pacman.upId)
        clearInterval(pacman.leftId)
        pacman.downId = setInterval(function () {
            if (!game.isPacmanMovementAllowed(pacman.currentX + 1, pacman.currentY)) {
                clearInterval(this.downId)
            } else {
                pacman.removePacman()
                pacman.currentX += 1
                pacman.pacDotEaten()
                pacman.powerPelletEaten()
                pacman.direction = 'south';
            }
            game.squares[pacman.currentX][pacman.currentY].classList.add('pac-man')
            game.squares[pacman.currentX][pacman.currentY].classList.add('pac-man-down')
        }, 200)
    }

    movePacman(e) {
        if (this.lastMove >= (Date.now() - this.delay)) return;
        this.lastMove = Date.now()
        switch (e.keyCode) {
            case 37:
                this.goLeft()
                break
            case 38:
                this.goUp()
                break
            case 39:
                this.goRight()
                break
            case 40:
                this.goDown()
                break
        }
    }

    pacDotEaten() {
        if (game.squares[pacman.currentX][pacman.currentY].classList.contains('pac-dot')) {
            game.score++
            scoreDisplay.innerHTML = game.score
            game.checkForWin();
            game.squares[pacman.currentX][pacman.currentY].classList.remove('pac-dot')
            game.squares[pacman.currentX][pacman.currentY].innerHTML = ''
        }
    }

    powerPelletEaten() {
        if (game.squares[pacman.currentX][pacman.currentY].classList.contains('power-pellet')) {
            game.score += 10;
            // ghosts.forEach(ghost => ghost.isScared = true)
            // setTimeout(unScareGhosts, 10000)
            game.squares[pacman.currentX][pacman.currentY].classList.remove('power-pellet');
        }
    }

}

class Ghost {
    constructor(name, currentX, currentY, speed) {
        this.name = name;
        this.currentX = currentX;
        this.currentY = currentY;
        this.speed = speed;
        this.isScared = false;
    }

    createGhost() {
        game.squares[this.currentX][this.currentY].classList.add(this.name)
        game.squares[this.currentX][this.currentY].classList.add('ghost')
    }

    unScareGhosts() {
        this.isScared = false;
    }
}

class Blinky extends Ghost {
    constructor(name, currentX, currentY, speed) {
        super(name, currentX, currentY, speed)
        this.isScared = false
        this.timerId = null;
    }

    findNeighbors(start) {
        let row = start[0]
        let col = start[1]

        let neighbors = []
        if (game.isGhostMovementAllowed([row - 1], [col])) {
            neighbors.push([row - 1, col])
        }
        if (game.isGhostMovementAllowed([row + 1], [col])) {
            neighbors.push([row + 1, col])
        }
        if (game.isGhostMovementAllowed([row], [col - 1])) {
            neighbors.push([row, col - 1])
        }
        if (game.isGhostMovementAllowed([row], [col + 1])) {
            neighbors.push([row, col + 1])
        }
        return neighbors;
    }

    buildPath(traversalTree, target) {
        let path = [target];
        let parent = traversalTree[target];
        while (parent) {
            path.push(parent);
            parent = traversalTree[parent];
        }
        return path.reverse()
    }

    bfs(start, target) {
        let traversalTree = [];
        let visited = new Set;
        let queue = [];
        queue.push(start)
        while (queue.length) {
            let current = queue.shift();
            visited.add(current.toString());
            if (current.toString() === target.toString()) return blinky.buildPath(traversalTree, target)
            for (let neighbor of blinky.findNeighbors(current, matrix)) {
                if (!visited.has(neighbor.toString())) {
                    traversalTree[neighbor] = current;
                    queue.push(neighbor);
                }
            }
        }
    }

    movementAI() {
        const timerId = setInterval(function () {
            let targetLocation = [pacman.currentX, pacman.currentY]
            let currentLocation = [blinky.currentX, blinky.currentY]
            let path = blinky.bfs(currentLocation, targetLocation)
            let nextMove = path[1]
            game.squares[blinky.currentX][blinky.currentY].classList.remove(blinky.name)
            game.squares[blinky.currentX][blinky.currentY].classList.remove('ghost', 'scared-ghost')
            blinky.currentX = nextMove[0];
            blinky.currentY = nextMove[1];
            game.squares[blinky.currentX][blinky.currentY].classList.add(blinky.name, 'ghost')

        }, this.speed)
    }
}

class Pinky extends Ghost {
    constructor(name, currentX, currentY, speed) {
        super(name, currentX, currentY, speed)
        this.isScared = false
        this.timerId = null;
    }

    findNeighbors(start) {
        let row = start[0]
        let col = start[1]

        let neighbors = []
        if (game.isGhostMovementAllowed([row - 1], [col])) {
            neighbors.push([row - 1, col])
        }
        if (game.isGhostMovementAllowed([row + 1], [col])) {
            neighbors.push([row + 1, col])
        }
        if (game.isGhostMovementAllowed([row], [col - 1])) {
            neighbors.push([row, col - 1])
        }
        if (game.isGhostMovementAllowed([row], [col + 1])) {
            neighbors.push([row, col + 1])
        }
        return neighbors;
    }

    buildPath(traversalTree, target) {
        let path = [target];
        let parent = traversalTree[target];
        while (parent) {
            path.push(parent);
            parent = traversalTree[parent];
        }
        return path.reverse()
    }

    bfs(start, target) {
        let traversalTree = [];
        let visited = new Set;
        let queue = [];
        queue.push(start)
        while (queue.length) {
            let current = queue.shift();
            visited.add(current.toString());
            if (current.toString() === target.toString()) return pinky.buildPath(traversalTree, target)
            for (let neighbor of pinky.findNeighbors(current, matrix)) {
                if (!visited.has(neighbor.toString())) {
                    traversalTree[neighbor] = current;
                    queue.push(neighbor);
                }
            }
        }
    }

    findTarget() {
        let targetLocation
        if (pinky.currentX === pacman.currentX && pinky.currentY - 2 === pacman.currentY || pinky.currentY - 1 === pacman.currentY)
            targetLocation = [pacman.currentX, pacman.currentY]
        else if (pinky.currentX === pacman.currentX && pinky.currentY + 2 === pacman.currentY || pinky.currentY + 1 === pacman.currentY)
            targetLocation = [pacman.currentX, pacman.currentY]

        else if (pinky.currentY === pacman.currentY && pinky.currentX - 2 === pacman.currentX || pinky.currentX - 1 === pacman.currentY)
            targetLocation = [pacman.currentX, pacman.currentY]

        else if (pinky.currentY === pacman.currentY && pinky.currentX + 2 === pacman.currentX || pinky.currentX + 1 === pacman.currentY)
            targetLocation = [pacman.currentX, pacman.currentY]

        else if (pacman.direction === 'west' && game.isGhostMovementAllowed(pacman.currentX, pacman.currentY - 2)
            && pacman.currentY > 0) {
            targetLocation = [pacman.currentX, pacman.currentY - 2]
        }
        else if (pacman.direction === 'south' && game.isGhostMovementAllowed(pacman.currentX + 2, pacman.currentY)
            && pacman.currentX > 0) {
            targetLocation = [pacman.currentX + 2, pacman.currentY]
        }
        else if (pacman.direction === 'north' && game.isGhostMovementAllowed(pacman.currentX - 2, pacman.currentY)
            && pacman.currentX < matrix.length - 1) {
            targetLocation = [pacman.currentX - 2, pacman.currentY]
        }
        else if (pacman.direction === 'east' && game.isGhostMovementAllowed(pacman.currentX, pacman.currentY + 2)
            && pacman.currentY < matrix.length - 1) {
            targetLocation = [pacman.currentX, pacman.currentY + 2]
        }
        else {
            targetLocation = [pacman.currentX, pacman.currentY]
        }
        return targetLocation
    }

    movementAI() {
        const timerId = setInterval(function () {
            let currentLocation = [pinky.currentX, pinky.currentY]
            let targetLocation = pinky.findTarget()
            let path = pinky.bfs(currentLocation, targetLocation)
            console.log(path)
            let nextMove = path[1]
            game.squares[pinky.currentX][pinky.currentY].classList.remove(pinky.name)
            game.squares[pinky.currentX][pinky.currentY].classList.remove('ghost', 'scared-ghost')
            pinky.currentX = nextMove[0];
            pinky.currentY = nextMove[1];
            game.squares[pinky.currentX][pinky.currentY].classList.add(pinky.name, 'ghost')

        }, this.speed)
    }

}

class Clyde extends Ghost {
    constructor(name, currentX, currentY, speed) {
        super(name, currentX, currentY, speed)
        this.isScared = false
        this.timerId = null;
    }

    movementAI() {
        const directions = [-1, 1, 0, 0]
        let nextMove = [clyde.currentX + directions[Math.floor(Math.random() * directions.length)],
        clyde.currentY + directions[Math.floor(Math.random() * directions.length)]];
        clyde.timerId = setInterval(function () {
            if (game.isGhostMovementAllowed(nextMove[0], nextMove[1])) {
                game.squares[clyde.currentX][clyde.currentY].classList.remove(clyde.name)
                game.squares[clyde.currentX][clyde.currentY].classList.remove('ghost', 'scared-ghost')
                clyde.currentX = nextMove[0];
                clyde.currentY = nextMove[1];
                game.squares[clyde.currentX][clyde.currentY].classList.add(clyde.name, 'ghost')
            } else {
                nextMove = [clyde.currentX + directions[Math.floor(Math.random() * directions.length)],
                clyde.currentY + directions[Math.floor(Math.random() * directions.length)]];
            }
            // if (clyde.isScared) {
            //     squares[clyde.currentX][clyde.currentY].classList.add('scared-ghost')
            // }
        }, this.speed)
    }

    sayHello() {
        console.log('hello')
    }
}

class Inky extends Ghost {
    constructor(name, currentX, currentY, speed) {
        super(name, currentX, currentY, speed)
        this.isScared = false
        this.timerId = null;
    }

    findNeighbors(start) {
        let row = start[0]
        let col = start[1]

        let neighbors = []
        if (game.isGhostMovementAllowed([row - 1], [col])) {
            neighbors.push([row - 1, col])
        }
        if (game.isGhostMovementAllowed([row + 1], [col])) {
            neighbors.push([row + 1, col])
        }
        if (game.isGhostMovementAllowed([row], [col - 1])) {
            neighbors.push([row, col - 1])
        }
        if (game.isGhostMovementAllowed([row], [col + 1])) {
            neighbors.push([row, col + 1])
        }
        return neighbors;
    }

    buildPath(traversalTree, target) {
        let path = [target];
        let parent = traversalTree[target];
        while (parent) {
            path.push(parent);
            parent = traversalTree[parent];
        }
        return path.reverse()
    }

    bfs(start, target) {
        let traversalTree = [];
        let visited = new Set;
        let queue = [];
        queue.push(start)
        while (queue.length) {
            let current = queue.shift();
            visited.add(current.toString());
            if (current.toString() === target.toString()) return inky.buildPath(traversalTree, target)
            for (let neighbor of inky.findNeighbors(current, matrix)) {
                if (!visited.has(neighbor.toString())) {
                    traversalTree[neighbor] = current;
                    queue.push(neighbor);
                }
            }
        }
    }

    findTarget() {
        let targetLocation
        if (inky.currentX === pacman.currentX && inky.currentY - 2 === pacman.currentY || inky.currentY - 1 === pacman.currentY)
            targetLocation = [pacman.currentX, pacman.currentY]
        else if (inky.currentX === pacman.currentX && inky.currentY + 2 === pacman.currentY || inky.currentY + 1 === pacman.currentY)
            targetLocation = [pacman.currentX, pacman.currentY]

        else if (inky.currentY === pacman.currentY && inky.currentX - 2 === pacman.currentX || inky.currentX - 1 === pacman.currentY)
            targetLocation = [pacman.currentX, pacman.currentY]

        else if (inky.currentY === pacman.currentY && inky.currentX + 2 === pacman.currentX || inky.currentX + 1 === pacman.currentY)
            targetLocation = [pacman.currentX, pacman.currentY]

        else if (pacman.direction === 'west' && game.isGhostMovementAllowed(pacman.currentX, pacman.currentY - 2)
            && pacman.currentY > 0) {
            targetLocation = [pacman.currentX, pacman.currentY - 2]
        }
        else if (pacman.direction === 'south' && game.isGhostMovementAllowed(pacman.currentX + 2, pacman.currentY)
            && pacman.currentX > 0) {
            targetLocation = [pacman.currentX + 2, pacman.currentY]
        }
        else if (pacman.direction === 'north' && game.isGhostMovementAllowed(pacman.currentX - 2, pacman.currentY)
            && pacman.currentX < matrix.length - 1) {
            targetLocation = [pacman.currentX - 2, pacman.currentY]
        }
        else if (pacman.direction === 'east' && game.isGhostMovementAllowed(pacman.currentX, pacman.currentY + 2)
            && pacman.currentY < matrix.length - 1) {
            targetLocation = [pacman.currentX, pacman.currentY + 2]
        }
        else {
            targetLocation = [pacman.currentX, pacman.currentY]
        }
        return targetLocation
    }

    movementAI() {
        const timerId = setInterval(function () {
            let currentLocation = [inky.currentX, inky.currentY]
            let targetLocation = inky.findTarget()
            let path = inky.bfs(currentLocation, targetLocation)
            let nextMove = path[1]
            game.squares[inky.currentX][inky.currentY].classList.remove(inky.name)
            game.squares[inky.currentX][inky.currentY].classList.remove('ghost', 'scared-ghost')
            inky.currentX = nextMove[0];
            inky.currentY = nextMove[1];
            game.squares[inky.currentX][inky.currentY].classList.add(inky.name, 'ghost')

        }, this.speed)
    }
}

const game = new Game();
const pacman = new Pacman(game.squares, game.matrix);
const blinky = new Blinky('blinky', 12, 12, 400)
const pinky = new Pinky('pinky', 14, 15, 300)
const clyde = new Clyde('clyde', 14, 12, 300)
const inky = new Inky('inky', 12, 15, 500)

game.createBoard();
pacman.createPacman();
blinky.createGhost();
pinky.createGhost();
clyde.createGhost();
inky.createGhost();


pacman.movePacman = pacman.movePacman.bind(pacman)
