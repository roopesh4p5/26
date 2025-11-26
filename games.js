// Game loader function
function loadGame(gameId, container) {
    container.innerHTML = '';
    
    switch(gameId) {
        case 1: return colorTheHeart(container);
        case 2: return memoryMatch(container);
        case 3: return monalisaPuzzle(container);
        case 4: return snakeGame(container);
        case 5: return spaceShooter(container);
        case 6: return catchTheHearts(container);
        case 7: return wordScramble(container);
        case 8: return patternMatch(container);
        case 9: return flappyBird(container);
        case 10: return connectTheDots(container);
        case 11: return simonSays(container);
        case 12: return numberPuzzle(container);
        case 13: return colorMixer(container);
        case 14: return balloonPop(container);
        case 15: return rhythmTap(container);
        case 16: return mazeRunner(container);
        case 17: return ticTacToe(container);
        case 18: return bubblePop(container);
        case 19: return cardFlip(container);
        case 20: return jigsawPuzzle(container);
        case 21: return whackAMole(container);
        case 22: return letterTrace(container);
        case 23: return quizGame(container);
        case 24: return heartUnlock(container);
        default: return simpleGame(container);
    }
}

// Game 1: Color the Heart - Tap to fill heart with color
function colorTheHeart(container) {
    container.innerHTML = `
        <div style="text-align: center;">
            <p style="margin-bottom: 20px;">Tap the heart 10 times to fill it!</p>
            <div id="heart-canvas" style="font-size: 150px; cursor: pointer; transition: all 0.3s;">♡</div>
            <p id="tap-count" style="font-weight: bold; margin-top: 15px;">Taps: 0 / 10</p>
        </div>
    `;
    
    let colorLevel = 0;
    const heart = container.querySelector('#heart-canvas');
    const tapCount = container.querySelector('#tap-count');
    const colors = ['#ffddee', '#ffccdd', '#ffbbcc', '#ffaacc', '#ff99bb', '#ff88bb', '#ff66aa', '#ff4499', '#ff2288', '#ff0088'];
    
    heart.addEventListener('click', function() {
        colorLevel++;
        tapCount.textContent = `Taps: ${colorLevel} / 10`;
        if (colorLevel < colors.length) {
            heart.style.color = colors[colorLevel];
        } else {
            heart.textContent = '♥';
            heart.style.color = '#ff0088';
            setTimeout(() => onGameComplete(), 500);
        }
    });
}

// Game 2: Memory Match - Match emoji pairs
function memoryMatch(container) {
    const emojis = ['🌸', '💝', '🎀', '✨', '💖', '🌺'];
    const cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
    let flipped = [];
    let matched = 0;
    
    container.innerHTML = `
        <p style="margin-bottom: 20px; text-align: center;">Match all 6 pairs!</p>
        <div id="memory-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;"></div>
    `;
    
    const grid = container.querySelector('#memory-grid');
    
    cards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.style.cssText = 'aspect-ratio: 1; background: #ffc4dd; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 40px; cursor: pointer;';
        card.dataset.emoji = emoji;
        card.dataset.index = index;
        card.textContent = '?';
        
        card.addEventListener('click', function() {
            if (flipped.length < 2 && !this.classList.contains('flipped')) {
                this.textContent = emoji;
                this.classList.add('flipped');
                flipped.push(this);
                
                if (flipped.length === 2) {
                    setTimeout(() => {
                        if (flipped[0].dataset.emoji === flipped[1].dataset.emoji) {
                            flipped[0].style.background = '#c597d8';
                            flipped[1].style.background = '#c597d8';
                            matched += 2;
                            if (matched === cards.length) {
                                setTimeout(() => onGameComplete(), 500);
                            }
                        } else {
                            flipped[0].textContent = '?';
                            flipped[1].textContent = '?';
                            flipped[0].classList.remove('flipped');
                            flipped[1].classList.remove('flipped');
                        }
                        flipped = [];
                    }, 500);
                }
            }
        });
        
        grid.appendChild(card);
    });
}

// Game 3: Mona Lisa Puzzle - 3x3 sliding tile puzzle
function monalisaPuzzle(container) {
    let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 0]; // 0 = empty
    const winState = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    
    // Shuffle (ensure solvable)
    for (let i = 0; i < 20; i++) {
        const emptyIndex = tiles.indexOf(0);
        const moves = getValidMoves(emptyIndex);
        const randomMove = moves[Math.floor(Math.random() * moves.length)];
        [tiles[emptyIndex], tiles[randomMove]] = [tiles[randomMove], tiles[emptyIndex]];
    }
    
    container.innerHTML = `
        <p style="margin-bottom: 20px; text-align: center;">Arrange the tiles in order!</p>
        <div id="puzzle-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; max-width: 300px; margin: 0 auto;"></div>
    `;
    
    function getValidMoves(emptyIndex) {
        const moves = [];
        const row = Math.floor(emptyIndex / 3);
        const col = emptyIndex % 3;
        
        if (row > 0) moves.push(emptyIndex - 3); // up
        if (row < 2) moves.push(emptyIndex + 3); // down
        if (col > 0) moves.push(emptyIndex - 1); // left
        if (col < 2) moves.push(emptyIndex + 1); // right
        
        return moves;
    }
    
    function render() {
        const grid = container.querySelector('#puzzle-grid');
        grid.innerHTML = '';
        
        tiles.forEach((tile, index) => {
            const div = document.createElement('div');
            div.style.cssText = 'aspect-ratio: 1; background: #ffc4dd; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: bold; cursor: pointer;';
            
            if (tile === 0) {
                div.style.background = '#ffe5f1';
                div.style.cursor = 'default';
            } else {
                div.textContent = tile;
                div.addEventListener('click', () => moveTile(index));
            }
            
            grid.appendChild(div);
        });
    }
    
    function moveTile(index) {
        const emptyIndex = tiles.indexOf(0);
        const validMoves = getValidMoves(emptyIndex);
        
        if (validMoves.includes(index)) {
            [tiles[emptyIndex], tiles[index]] = [tiles[index], tiles[emptyIndex]];
            render();
            
            if (JSON.stringify(tiles) === JSON.stringify(winState)) {
                setTimeout(() => onGameComplete(), 500);
            }
        }
    }
    
    render();
}

// Game 4: Snake Game - Classic snake with easy controls
function snakeGame(container) {
    container.innerHTML = `
        <p style="margin-bottom: 10px; text-align: center;">Collect 8 hearts!</p>
        <canvas id="snake-canvas" width="300" height="300" style="border: 2px solid #ffc4dd; border-radius: 10px; display: block; margin: 0 auto;"></canvas>
        <div style="text-align: center; margin-top: 10px;">
            <div style="display: inline-grid; grid-template-columns: repeat(3, 60px); gap: 5px;">
                <div></div>
                <button onclick="snakeDir('up')" style="padding: 10px; border-radius: 5px; border: 2px solid #ffc4dd; background: white; cursor: pointer;">↑</button>
                <div></div>
                <button onclick="snakeDir('left')" style="padding: 10px; border-radius: 5px; border: 2px solid #ffc4dd; background: white; cursor: pointer;">←</button>
                <div></div>
                <button onclick="snakeDir('right')" style="padding: 10px; border-radius: 5px; border: 2px solid #ffc4dd; background: white; cursor: pointer;">→</button>
                <div></div>
                <button onclick="snakeDir('down')" style="padding: 10px; border-radius: 5px; border: 2px solid #ffc4dd; background: white; cursor: pointer;">↓</button>
                <div></div>
            </div>
        </div>
    `;
    
    const canvas = container.querySelector('#snake-canvas');
    const ctx = canvas.getContext('2d');
    const gridSize = 15;
    const tileSize = canvas.width / gridSize;
    
    let snake = [{x: 7, y: 7}];
    let direction = {x: 1, y: 0};
    let food = {x: 10, y: 10};
    let score = 0;
    let gameLoop;
    
    window.snakeDir = function(dir) {
        switch(dir) {
            case 'up': if (direction.y === 0) direction = {x: 0, y: -1}; break;
            case 'down': if (direction.y === 0) direction = {x: 0, y: 1}; break;
            case 'left': if (direction.x === 0) direction = {x: -1, y: 0}; break;
            case 'right': if (direction.x === 0) direction = {x: 1, y: 0}; break;
        }
    };
    
    function placeFood() {
        food = {
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize)
        };
    }
    
    function update() {
        const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
        
        // Wrap around walls
        if (head.x < 0) head.x = gridSize - 1;
        if (head.x >= gridSize) head.x = 0;
        if (head.y < 0) head.y = gridSize - 1;
        if (head.y >= gridSize) head.y = 0;
        
        snake.unshift(head);
        
        if (head.x === food.x && head.y === food.y) {
            score++;
            if (score >= 8) {
                clearInterval(gameLoop);
                setTimeout(() => onGameComplete(), 500);
                return;
            }
            placeFood();
        } else {
            snake.pop();
        }
        
        draw();
    }
    
    function draw() {
        ctx.fillStyle = '#ffe5f1';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw snake
        ctx.fillStyle = '#ff9ec7';
        snake.forEach(segment => {
            ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize - 2, tileSize - 2);
        });
        
        // Draw food (heart)
        ctx.fillStyle = '#ff0088';
        ctx.font = `${tileSize}px Arial`;
        ctx.fillText('♥', food.x * tileSize, (food.y + 1) * tileSize);
    }
    
    gameLoop = setInterval(update, 200);
    draw();
}

// Game 5: Space Shooter - Shoot falling asteroids
function spaceShooter(container) {
    container.innerHTML = `
        <p style="margin-bottom: 10px; text-align: center;">Shoot 10 targets!</p>
        <canvas id="shooter-canvas" width="300" height="400" style="border: 2px solid #ffc4dd; border-radius: 10px; display: block; margin: 0 auto; cursor: crosshair;"></canvas>
        <p id="shooter-score" style="text-align: center; margin-top: 10px; font-weight: bold;">Score: 0 / 10</p>
    `;
    
    const canvas = container.querySelector('#shooter-canvas');
    const ctx = canvas.getContext('2d');
    const scoreDisplay = container.querySelector('#shooter-score');
    
    let score = 0;
    let targets = [];
    let gameActive = true;
    
    function createTarget() {
        if (!gameActive) return;
        targets.push({
            x: Math.random() * (canvas.width - 30),
            y: -30,
            speed: 1 + Math.random()
        });
        if (gameActive) {
            setTimeout(createTarget, 1000);
        }
    }
    
    function update() {
        if (!gameActive) return;
        
        ctx.fillStyle = '#ffe5f1';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw targets
        targets = targets.filter(target => {
            target.y += target.speed;
            
            if (target.y > canvas.height) return false;
            
            ctx.fillStyle = '#ffc4dd';
            ctx.beginPath();
            ctx.arc(target.x + 15, target.y + 15, 15, 0, Math.PI * 2);
            ctx.fill();
            
            return true;
        });
        
        requestAnimationFrame(update);
    }
    
    canvas.addEventListener('click', function(e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        targets = targets.filter(target => {
            const distance = Math.sqrt(Math.pow(x - (target.x + 15), 2) + Math.pow(y - (target.y + 15), 2));
            if (distance < 15) {
                score++;
                scoreDisplay.textContent = `Score: ${score} / 10`;
                if (score >= 10) {
                    gameActive = false;
                    setTimeout(() => onGameComplete(), 500);
                }
                return false;
            }
            return true;
        });
    });
    
    createTarget();
    update();
}

// Game 6: Catch the Hearts - Catch falling hearts
function catchTheHearts(container) {
    container.innerHTML = `
        <p style="margin-bottom: 10px; text-align: center;">Catch 10 hearts!</p>
        <canvas id="catch-canvas" width="300" height="400" style="border: 2px solid #ffc4dd; border-radius: 10px; display: block; margin: 0 auto;"></canvas>
        <p id="catch-score" style="text-align: center; margin-top: 10px; font-weight: bold;">Caught: 0 / 10</p>
    `;
    
    const canvas = container.querySelector('#catch-canvas');
    const ctx = canvas.getContext('2d');
    const scoreDisplay = container.querySelector('#catch-score');
    
    let basketX = canvas.width / 2 - 25;
    let hearts = [];
    let score = 0;
    let gameActive = true;
    
    function createHeart() {
        if (!gameActive) return;
        hearts.push({
            x: Math.random() * (canvas.width - 20),
            y: -20,
            speed: 2
        });
        if (gameActive) {
            setTimeout(createHeart, 800);
        }
    }
    
    function update() {
        if (!gameActive) return;
        
        ctx.fillStyle = '#ffe5f1';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw basket
        ctx.fillStyle = '#ff9ec7';
        ctx.fillRect(basketX, canvas.height - 30, 50, 20);
        
        // Update hearts
        hearts = hearts.filter(heart => {
            heart.y += heart.speed;
            
            if (heart.y > canvas.height) return false;
            
            // Check collision
            if (heart.y + 20 >= canvas.height - 30 &&
                heart.x + 20 >= basketX && heart.x <= basketX + 50) {
                score++;
                scoreDisplay.textContent = `Caught: ${score} / 10`;
                if (score >= 10) {
                    gameActive = false;
                    setTimeout(() => onGameComplete(), 500);
                }
                return false;
            }
            
            ctx.fillStyle = '#ff0088';
            ctx.font = '20px Arial';
            ctx.fillText('♥', heart.x, heart.y + 20);
            
            return true;
        });
        
        requestAnimationFrame(update);
    }
    
    canvas.addEventListener('mousemove', function(e) {
        const rect = canvas.getBoundingClientRect();
        basketX = Math.max(0, Math.min(canvas.width - 50, e.clientX - rect.left - 25));
    });
    
    canvas.addEventListener('touchmove', function(e) {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        basketX = Math.max(0, Math.min(canvas.width - 50, e.touches[0].clientX - rect.left - 25));
    });
    
    createHeart();
    update();
}

// Game 7: Word Scramble - Unscramble love words
function wordScramble(container) {
    const words = [
        {word: 'LOVE', scrambled: 'EVOL'},
        {word: 'HEART', scrambled: 'TERAH'},
        {word: 'SMILE', scrambled: 'LIMES'},
        {word: 'SWEET', scrambled: 'WEEST'}
    ];
    const puzzle = words[Math.floor(Math.random() * words.length)];
    
    container.innerHTML = `
        <div style="text-align: center;">
            <p style="margin-bottom: 20px;">Unscramble the word!</p>
            <div style="font-size: 40px; font-weight: bold; color: #ff9ec7; margin-bottom: 30px;">${puzzle.scrambled}</div>
            <input type="text" id="word-input" style="padding: 15px; font-size: 18px; border: 2px solid #ffc4dd; border-radius: 10px; text-align: center; width: 200px;" placeholder="Type here...">
            <button onclick="checkWord()" style="display: block; margin: 20px auto; padding: 15px 30px; background: #ff9ec7; color: white; border: none; border-radius: 25px; cursor: pointer; font-size: 16px; font-weight: bold;">Submit</button>
        </div>
    `;
    
    const input = container.querySelector('#word-input');
    input.focus();
    
    window.checkWord = function() {
        if (input.value.toUpperCase() === puzzle.word) {
            onGameComplete();
        } else {
            input.style.borderColor = '#ff4444';
            setTimeout(() => {
                input.style.borderColor = '#ffc4dd';
                input.value = '';
            }, 500);
        }
    };
    
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            window.checkWord();
        }
    });
}

// Game 8: Pattern Match - Replicate color pattern
function patternMatch(container) {
    const colors = ['#ff9ec7', '#ffc4dd', '#c597d8', '#ffe5f1', '#e5d4f0', '#ff66aa'];
    const pattern = [];
    for (let i = 0; i < 6; i++) {
        pattern.push(colors[Math.floor(Math.random() * colors.length)]);
    }
    let playerPattern = [];
    
    container.innerHTML = `
        <div style="text-align: center;">
            <p style="margin-bottom: 20px;">Match the pattern!</p>
            <div id="pattern-display" style="display: flex; gap: 10px; justify-content: center; margin-bottom: 30px;"></div>
            <p style="margin-bottom: 15px;">Your pattern:</p>
            <div id="player-pattern" style="display: flex; gap: 10px; justify-content: center; margin-bottom: 30px; min-height: 60px;"></div>
            <div id="color-buttons" style="display: flex; gap: 10px; justify-content: center;"></div>
        </div>
    `;
    
    const patternDisplay = container.querySelector('#pattern-display');
    const playerDisplay = container.querySelector('#player-pattern');
    const buttonContainer = container.querySelector('#color-buttons');
    
    pattern.forEach(color => {
        const div = document.createElement('div');
        div.style.cssText = `width: 60px; height: 60px; background: ${color}; border-radius: 10px;`;
        patternDisplay.appendChild(div);
    });
    
    colors.forEach(color => {
        const button = document.createElement('button');
        button.style.cssText = `width: 60px; height: 60px; background: ${color}; border: 2px solid white; border-radius: 10px; cursor: pointer;`;
        button.addEventListener('click', function() {
            if (playerPattern.length < 6) {
                playerPattern.push(color);
                const div = document.createElement('div');
                div.style.cssText = `width: 60px; height: 60px; background: ${color}; border-radius: 10px;`;
                playerDisplay.appendChild(div);
                
                if (playerPattern.length === 6) {
                    setTimeout(() => {
                        if (JSON.stringify(playerPattern) === JSON.stringify(pattern)) {
                            onGameComplete();
                        } else {
                            playerPattern = [];
                            playerDisplay.innerHTML = '';
                        }
                    }, 500);
                }
            }
        });
        buttonContainer.appendChild(button);
    });
}

// Game 9: 2048 Puzzle - Merge tiles to reach 128
function flappyBird(container) {
    container.innerHTML = `
        <p style="margin-bottom: 10px; text-align: center;">Merge tiles to reach 128!</p>
        <div id="game-2048" style="width: 280px; height: 280px; background: #bbada0; border-radius: 10px; margin: 0 auto; position: relative; padding: 10px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;"></div>
        <p id="score-2048" style="text-align: center; margin-top: 10px; font-weight: bold;">Score: 0</p>
        <div style="text-align: center; margin-top: 10px;">
            <button onclick="reset2048()" style="padding: 8px 15px; background: #8f7a66; color: white; border: none; border-radius: 5px; cursor: pointer;">Reset</button>
        </div>
    `;
    
    const gridContainer = container.querySelector('#game-2048');
    const scoreDisplay = container.querySelector('#score-2048');
    let grid = Array(16).fill(0);
    let score = 0;
    
    function createTile(value, index) {
        const tile = document.createElement('div');
        tile.className = 'tile-2048';
        tile.textContent = value || '';
        tile.style.cssText = `
            background: ${getTileColor(value)};
            color: ${value <= 4 ? '#776e65' : '#f9f6f2'};
            font-weight: bold;
            font-size: ${value > 100 ? '24px' : '30px'};
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            transition: all 0.1s ease;
        `;
        return tile;
    }
    
    function getTileColor(value) {
        const colors = {
            0: '#cdc1b4',
            2: '#eee4da',
            4: '#ede0c8',
            8: '#f2b179',
            16: '#f59563',
            32: '#f67c5f',
            64: '#f65e3b',
            128: '#edcf72',
            256: '#edcc61'
        };
        return colors[value] || '#edc22e';
    }
    
    function render() {
        gridContainer.innerHTML = '';
        grid.forEach(value => {
            gridContainer.appendChild(createTile(value));
        });
        scoreDisplay.textContent = `Score: ${score}`;
    }
    
    function addRandomTile() {
        const emptyIndices = grid.map((v, i) => v === 0 ? i : -1).filter(i => i !== -1);
        if (emptyIndices.length > 0) {
            const index = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
            grid[index] = Math.random() < 0.9 ? 2 : 4;
        }
    }
    
    function move(direction) {
        let moved = false;
        const size = 4;
        
        // Helper to process a line (row or col)
        const processLine = (line) => {
            let newLine = line.filter(v => v !== 0); // Remove zeros
            for (let i = 0; i < newLine.length - 1; i++) {
                if (newLine[i] === newLine[i+1]) {
                    newLine[i] *= 2;
                    score += newLine[i];
                    newLine.splice(i+1, 1);
                    if (newLine[i] === 128) setTimeout(() => onGameComplete(), 500);
                }
            }
            while (newLine.length < size) newLine.push(0); // Pad with zeros
            return newLine;
        };

        if (direction === 'left' || direction === 'right') {
            for (let i = 0; i < size; i++) {
                let row = grid.slice(i*size, (i+1)*size);
                if (direction === 'right') row.reverse();
                let newRow = processLine(row);
                if (direction === 'right') newRow.reverse();
                
                for (let j = 0; j < size; j++) {
                    if (grid[i*size + j] !== newRow[j]) moved = true;
                    grid[i*size + j] = newRow[j];
                }
            }
        } else {
            for (let i = 0; i < size; i++) {
                let col = [grid[i], grid[i+size], grid[i+size*2], grid[i+size*3]];
                if (direction === 'down') col.reverse();
                let newCol = processLine(col);
                if (direction === 'down') newCol.reverse();
                
                for (let j = 0; j < size; j++) {
                    if (grid[i + j*size] !== newCol[j]) moved = true;
                    grid[i + j*size] = newCol[j];
                }
            }
        }
        
        if (moved) {
            addRandomTile();
            render();
            if (grid.filter(v => v === 0).length === 0) {
                // Check game over (simplified)
            }
        }
    }
    
    window.reset2048 = function() {
        grid = Array(16).fill(0);
        score = 0;
        addRandomTile();
        addRandomTile();
        render();
    };
    
    // Controls
    let touchStart = {x: 0, y: 0};
    gridContainer.addEventListener('touchstart', e => {
        touchStart.x = e.touches[0].clientX;
        touchStart.y = e.touches[0].clientY;
        e.preventDefault();
    });
    
    gridContainer.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchStart.x;
        const dy = e.changedTouches[0].clientY - touchStart.y;
        if (Math.abs(dx) > Math.abs(dy)) {
            if (Math.abs(dx) > 30) move(dx > 0 ? 'right' : 'left');
        } else {
            if (Math.abs(dy) > 30) move(dy > 0 ? 'down' : 'up');
        }
    });
    
    // Initial setup
    reset2048();
}

// Game 10: Connect the Dots - Draw specific patterns
function connectTheDots(container) {
    container.innerHTML = `
        <p style="margin-bottom: 20px; text-align: center;">Connect all dots in order!</p>
        <canvas id="dots-canvas" width="300" height="300" style="border: 2px solid #ffc4dd; border-radius: 10px; display: block; margin: 0 auto; cursor: pointer;"></canvas>
    `;
    
    const canvas = container.querySelector('#dots-canvas');
    const ctx = canvas.getContext('2d');
    
    const dots = [
        {x: 150, y: 50, num: 1},
        {x: 250, y: 150, num: 2},
        {x: 150, y: 250, num: 3},
        {x: 50, y: 150, num: 4}
    ];
    
    let connected = [0];
    
    function draw() {
        ctx.fillStyle = '#ffe5f1';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections
        ctx.strokeStyle = '#ff9ec7';
        ctx.lineWidth = 3;
        ctx.beginPath();
        connected.forEach((dotIndex, i) => {
            const dot = dots[dotIndex];
            if (i === 0) {
                ctx.moveTo(dot.x, dot.y);
            } else {
                ctx.lineTo(dot.x, dot.y);
            }
        });
        ctx.stroke();
        
        // Draw dots
        dots.forEach((dot, i) => {
            ctx.fillStyle = connected.includes(i) ? '#ff9ec7' : '#ffc4dd';
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, 20, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = 'white';
            ctx.font = 'bold 20px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(dot.num, dot.x, dot.y);
        });
    }
    
    canvas.addEventListener('click', function(e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        dots.forEach((dot, i) => {
            const distance = Math.sqrt(Math.pow(x - dot.x, 2) + Math.pow(y - dot.y, 2));
            if (distance < 20 && !connected.includes(i) && i === connected[connected.length - 1] + 1) {
                connected.push(i);
                draw();
                
                if (connected.length === dots.length) {
                    setTimeout(() => onGameComplete(), 500);
                }
            }
        });
    });
    
    draw();
}

// Game 11: Simon Says - Memory sequence game
function simonSays(container) {
    const colors = [
        {name: 'pink', color: '#ff9ec7'},
        {name: 'purple', color: '#c597d8'},
        {name: 'light-pink', color: '#ffc4dd'},
        {name: 'light-purple', color: '#e5d4f0'}
    ];
    
    let sequence = [];
    let playerSequence = [];
    let level = 0;
    let canPlay = false;
    
    container.innerHTML = `
        <div style="text-align: center;">
            <p style="margin-bottom: 20px;">Remember the sequence!</p>
            <p id="simon-level" style="font-weight: bold; margin-bottom: 20px;">Level: 1</p>
            <div style="display: grid; grid-template-columns: repeat(2, 120px); gap: 10px; justify-content: center;">
                ${colors.map((c, i) => `<div id="simon-${i}" style="width: 120px; height: 120px; background: ${c.color}; border-radius: 15px; cursor: pointer; transition: all 0.2s;"></div>`).join('')}
            </div>
        </div>
    `;
    
    const levelDisplay = container.querySelector('#simon-level');
    
    function playSequence() {
        canPlay = false;
        sequence.push(Math.floor(Math.random() * 4));
        level = sequence.length;
        levelDisplay.textContent = `Level: ${level}`;
        
        let i = 0;
        const interval = setInterval(() => {
            if (i < sequence.length) {
                flashButton(sequence[i]);
                i++;
            } else {
                clearInterval(interval);
                canPlay = true;
                playerSequence = [];
            }
        }, 600);
    }
    
    function flashButton(index) {
        const button = container.querySelector(`#simon-${index}`);
        button.style.opacity = '0.5';
        setTimeout(() => {
            button.style.opacity = '1';
        }, 300);
    }
    
    colors.forEach((c, i) => {
        const button = container.querySelector(`#simon-${i}`);
        button.addEventListener('click', function() {
            if (!canPlay) return;
            
            flashButton(i);
            playerSequence.push(i);
            
            const currentIndex = playerSequence.length - 1;
            if (playerSequence[currentIndex] !== sequence[currentIndex]) {
                // Wrong - restart
                setTimeout(() => {
                    sequence = [];
                    playerSequence = [];
                    level = 0;
                    playSequence();
                }, 1000);
                return;
            }
            
            if (playerSequence.length === sequence.length) {
                if (level >= 5) {
                    setTimeout(() => onGameComplete(), 500);
                } else {
                    setTimeout(() => playSequence(), 1000);
                }
            }
        });
    });
    
    setTimeout(() => playSequence(), 500);
}

// Additional games will continue in next part due to length...
// Game 12-24 implementations

// Game 12: Number Puzzle
function numberPuzzle(container) {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 0]; // 0 = empty
    const winState = [1, 2, 3, 4, 5, 6, 7, 0];
    
    // Shuffle
    for (let i = 0; i < 15; i++) {
        const emptyIndex = numbers.indexOf(0);
        const moves = [];
        if (emptyIndex >= 4) moves.push(emptyIndex - 4);
        if (emptyIndex < 4) moves.push(emptyIndex + 4);
        if (emptyIndex % 4 !== 0) moves.push(emptyIndex - 1);
        if (emptyIndex % 4 !== 3) moves.push(emptyIndex + 1);
        const randomMove = moves[Math.floor(Math.random() * moves.length)];
        [numbers[emptyIndex], numbers[randomMove]] = [numbers[randomMove], numbers[emptyIndex]];
    }
    
    container.innerHTML = `
        <p style="margin-bottom: 20px; text-align: center;">Arrange in order!</p>
        <div id="number-grid" style="display: grid; grid-template-columns: repeat(4, 70px); gap: 5px; justify-content: center;"></div>
    `;
    
    function render() {
        const grid = container.querySelector('#number-grid');
        grid.innerHTML = '';
        
        numbers.forEach((num, index) => {
            const div = document.createElement('div');
            div.style.cssText = 'width: 70px; height: 70px; background: #ffc4dd; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 30px; font-weight: bold; cursor: pointer;';
            
            if (num === 0) {
                div.style.background = '#ffe5f1';
            } else {
                div.textContent = num;
                div.addEventListener('click', () => {
                    const emptyIndex = numbers.indexOf(0);
                    const canMove = (
                        (index === emptyIndex - 1 && index % 4 !== 3) ||
                        (index === emptyIndex + 1 && index % 4 !== 0) ||
                        index === emptyIndex - 4 ||
                        index === emptyIndex + 4
                    );
                    
                    if (canMove) {
                        [numbers[emptyIndex], numbers[index]] = [numbers[index], numbers[emptyIndex]];
                        render();
                        
                        if (JSON.stringify(numbers) === JSON.stringify(winState)) {
                            setTimeout(() => onGameComplete(), 500);
                        }
                    }
                });
            }
            
            grid.appendChild(div);
        });
    }
    
    render();
}

// Game 13: Heartbeat Sync - Tap in rhythm with the heartbeat
function colorMixer(container) {
    let taps = 0;
    let isBeating = false;
    
    container.innerHTML = `
        <div style="text-align: center;">
            <p style="margin-bottom: 20px;">Tap the heart when it beats! 💓</p>
            <div id="heart-beat" style="font-size: 120px; cursor: pointer; transition: all 0.3s; user-select: none; margin: 30px 0;">💗</div>
            <p id="tap-count" style="font-weight: bold; font-size: 18px;">Taps: 0 / 5</p>
            <p id="feedback" style="margin-top: 10px; min-height: 24px; font-size: 16px; color: #ff9ec7;"></p>
        </div>
    `;
    
    const heart = container.querySelector('#heart-beat');
    const tapCount = container.querySelector('#tap-count');
    const feedback = container.querySelector('#feedback');
    let beatInterval;
    
    // Start heartbeat animation
    function startBeating() {
        beatInterval = setInterval(() => {
            isBeating = true;
            heart.style.transform = 'scale(1.3)';
            heart.style.color = '#ff0088';
            
            setTimeout(() => {
                isBeating = false;
                heart.style.transform = 'scale(1)';
                heart.style.color = '#ff9ec7';
            }, 400);
        }, 1200);
    }
    
    heart.addEventListener('click', function() {
        if (isBeating) {
            taps++;
            tapCount.textContent = `Taps: ${taps} / 5`;
            feedback.textContent = '💕 Perfect timing!';
            feedback.style.color = '#00cc00';
            
            if (taps >= 5) {
                clearInterval(beatInterval);
                setTimeout(() => onGameComplete(), 500);
            }
        } else {
            feedback.textContent = '❌ Wait for the beat!';
            feedback.style.color = '#ff4444';
        }
        
        setTimeout(() => {
            feedback.textContent = '';
        }, 1000);
    });
    
    startBeating();
}

// Game 14: Balloon Pop
function balloonPop(container) {
    let popped = 0;
    const colors = ['#ff9ec7', '#ffc4dd', '#c597d8', '#e5d4f0'];
    
    container.innerHTML = `
        <p style="margin-bottom: 20px; text-align: center;">Pop 10 balloons!</p>
        <div id="balloon-container" style="position: relative; height: 350px; border: 2px solid #ffc4dd; border-radius: 15px; overflow: hidden; background: #ffe5f1;"></div>
        <p id="balloon-score" style="text-align: center; margin-top: 10px; font-weight: bold;">Popped: 0 / 10</p>
    `;
    
    const balloonContainer = container.querySelector('#balloon-container');
    const scoreDisplay = container.querySelector('#balloon-score');
    
    function createBalloon() {
        if (popped >= 10) return;
        
        const balloon = document.createElement('div');
        balloon.style.cssText = `
            position: absolute;
            bottom: -60px;
            left: ${Math.random() * 250}px;
            width: 50px;
            height: 60px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
            cursor: pointer;
            transition: bottom 3s linear;
        `;
        
        balloon.addEventListener('click', function() {
            this.remove();
            popped++;
            scoreDisplay.textContent = `Popped: ${popped} / 10`;
            if (popped >= 10) {
                setTimeout(() => onGameComplete(), 500);
            }
        });
        
        balloonContainer.appendChild(balloon);
        
        setTimeout(() => {
            balloon.style.bottom = '350px';
        }, 10);
        
        setTimeout(() => {
            balloon.remove();
        }, 3000);
        
        // Keep creating balloons until 10 are popped
        if (popped < 10) {
            setTimeout(createBalloon, 600);
        }
    }
    
    createBalloon();
}

// Game 15: Rhythm Tap
function rhythmTap(container) {
    let score = 0;
    let sequence = [];
    
    container.innerHTML = `
        <div style="text-align: center;">
            <p style="margin-bottom: 20px;">Tap when the circles align!</p>
            <canvas id="rhythm-canvas" width="300" height="150" style="border: 2px solid #ffc4dd; border-radius: 10px;"></canvas>
            <p id="rhythm-score" style="margin-top: 15px; font-weight: bold;">Score: 0 / 3</p>
            <button id="tap-button" style="margin-top: 15px; padding: 20px 40px; background: #ff9ec7; color: white; border: none; border-radius: 50%; cursor: pointer; font-size: 18px; font-weight: bold;">TAP!</button>
        </div>
    `;
    
    const canvas = container.querySelector('#rhythm-canvas');
    const ctx = canvas.getContext('2d');
    const scoreDisplay = container.querySelector('#rhythm-score');
    const tapButton = container.querySelector('#tap-button');
    
    let targetX = canvas.width / 2;
    let circleX = 0;
    let speed = 2;
    let gameActive = true;
    
    function update() {
        if (!gameActive) return;
        
        ctx.fillStyle = '#ffe5f1';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw target
        ctx.strokeStyle = '#c597d8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(targetX, canvas.height / 2, 30, 0, Math.PI * 2);
        ctx.stroke();
        
        // Draw moving circle
        ctx.fillStyle = '#ff9ec7';
        ctx.beginPath();
        ctx.arc(circleX, canvas.height / 2, 25, 0, Math.PI * 2);
        ctx.fill();
        
        circleX += speed;
        
        if (circleX > canvas.width + 30) {
            circleX = -30;
        }
        
        requestAnimationFrame(update);
    }
    
    tapButton.addEventListener('click', function() {
        const distance = Math.abs(circleX - targetX);
        if (distance < 40) {
            score++;
            scoreDisplay.textContent = `Score: ${score} / 3`;
            if (score >= 3) {
                gameActive = false;
                setTimeout(() => onGameComplete(), 500);
            }
        }
    });
    
    update();
}

// Games 16-24 continue...
// Due to length constraints, implementing simplified versions

function mazeRunner(container) {
    simpleClickGame(container, "Navigate the maze!", 5, "Reached!", "exits reached");
}

function ticTacToe(container) {
    container.innerHTML = `
        <p style="margin-bottom: 20px; text-align: center;">Get 3 in a row!</p>
        <div id="ttt-grid" style="display: grid; grid-template-columns: repeat(3, 80px); gap: 5px; justify-content: center;"></div>
    `;
    
    let board = Array(9).fill('');
    let currentPlayer = 'X';
    const grid = container.querySelector('#ttt-grid');
    
    function checkWin() {
        const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        return wins.some(combo => {
            return combo.every(i => board[i] === 'X');
        });
    }
    
    function render() {
        grid.innerHTML = '';
        board.forEach((cell, i) => {
            const div = document.createElement('div');
            div.style.cssText = 'width: 80px; height: 80px; background: #ffc4dd; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: bold; cursor: pointer;';
            div.textContent = cell;
            
            div.addEventListener('click', function() {
                if (!cell && currentPlayer === 'X') {
                    board[i] = 'X';
                    if (checkWin()) {
                        setTimeout(() => onGameComplete(), 500);
                        return;
                    }
                    currentPlayer = 'O';
                    render();
                    
                    // Simple AI
                    setTimeout(() => {
                        const empty = board.map((c, i) => c === '' ? i : null).filter(i => i !== null);
                        if (empty.length > 0) {
                            board[empty[Math.floor(Math.random() * empty.length)]] = 'O';
                            currentPlayer = 'X';
                            render();
                        }
                    }, 500);
                }
            });
            
            grid.appendChild(div);
        });
    }
    
    render();
}

function bubblePop(container) {
    simpleClickGame(container, "Pop all bubbles!", 8, "Bubbles", "popped");
}

// Game 19: Tetris - Stack blocks
function cardFlip(container) {
    container.innerHTML = `
        <p style="margin-bottom: 10px; text-align: center;">Clear 3 lines!</p>
        <canvas id="tetris-canvas" width="240" height="400" style="border: 2px solid #ffc4dd; border-radius: 10px; display: block; margin: 0 auto; background: #000;"></canvas>
        <div style="text-align: center; margin-top: 10px;">
            <button onclick="tetrisMove(-1)" style="padding: 10px 20px; margin: 0 5px;">←</button>
            <button onclick="tetrisRotate()" style="padding: 10px 20px; margin: 0 5px;">↻</button>
            <button onclick="tetrisMove(1)" style="padding: 10px 20px; margin: 0 5px;">→</button>
            <button onclick="tetrisDrop()" style="padding: 10px 20px; margin: 0 5px;">↓</button>
        </div>
        <p id="tetris-score" style="text-align: center; margin-top: 10px; font-weight: bold;">Lines: 0 / 3</p>
    `;
    
    const canvas = container.querySelector('#tetris-canvas');
    const ctx = canvas.getContext('2d');
    const scoreDisplay = container.querySelector('#tetris-score');
    
    const ROWS = 20;
    const COLS = 12;
    const BLOCK = 20;
    let board = Array(ROWS).fill().map(() => Array(COLS).fill(0));
    let lines = 0;
    
    const SHAPES = [
        [[1,1,1,1]], // I
        [[1,1],[1,1]], // O
        [[1,1,1],[0,1,0]], // T
        [[1,1,1],[1,0,0]], // L
        [[1,1,1],[0,0,1]], // J
        [[1,1,0],[0,1,1]], // Z
        [[0,1,1],[1,1,0]]  // S
    ];
    
    let piece = {
        shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
        x: 4,
        y: 0,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`
    };
    
    let dropCounter = 0;
    let lastTime = 0;
    let gameActive = true;
    
    function draw() {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Board
        board.forEach((row, y) => {
            row.forEach((val, x) => {
                if (val) {
                    ctx.fillStyle = val;
                    ctx.fillRect(x * BLOCK, y * BLOCK, BLOCK - 1, BLOCK - 1);
                }
            });
        });
        
        // Piece
        piece.shape.forEach((row, y) => {
            row.forEach((val, x) => {
                if (val) {
                    ctx.fillStyle = piece.color;
                    ctx.fillRect((piece.x + x) * BLOCK, (piece.y + y) * BLOCK, BLOCK - 1, BLOCK - 1);
                }
            });
        });
    }
    
    function collide(p, ox, oy) {
        for (let y = 0; y < p.shape.length; ++y) {
            for (let x = 0; x < p.shape[y].length; ++x) {
                if (p.shape[y][x] !== 0 &&
                   (board[y + p.y + oy] && board[y + p.y + oy][x + p.x + ox]) !== 0) {
                    return true;
                }
            }
        }
        return false;
    }
    
    function merge() {
        piece.shape.forEach((row, y) => {
            row.forEach((val, x) => {
                if (val) {
                    board[y + piece.y][x + piece.x] = piece.color;
                }
            });
        });
    }
    
    function sweep() {
        let rowCount = 0;
        outer: for (let y = board.length - 1; y > 0; --y) {
            for (let x = 0; x < board[y].length; ++x) {
                if (board[y][x] === 0) {
                    continue outer;
                }
            }
            const row = board.splice(y, 1)[0].fill(0);
            board.unshift(row);
            ++y;
            rowCount++;
        }
        if (rowCount > 0) {
            lines += rowCount;
            scoreDisplay.textContent = `Lines: ${lines} / 3`;
            if (lines >= 3) {
                gameActive = false;
                setTimeout(() => onGameComplete(), 500);
            }
        }
    }
    
    function resetPiece() {
        piece.shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
        piece.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
        piece.y = 0;
        piece.x = 4;
        if (collide(piece, 0, 0)) {
            board = Array(ROWS).fill().map(() => Array(COLS).fill(0));
            lines = 0;
            scoreDisplay.textContent = `Lines: 0 / 3`;
        }
    }
    
    window.tetrisMove = function(dir) {
        if (!gameActive) return;
        if (!collide(piece, dir, 0)) {
            piece.x += dir;
            draw();
        }
    };
    
    window.tetrisRotate = function() {
        if (!gameActive) return;
        const rotated = piece.shape[0].map((_, i) => piece.shape.map(row => row[i]).reverse());
        const prevShape = piece.shape;
        piece.shape = rotated;
        if (collide(piece, 0, 0)) {
            piece.shape = prevShape;
        }
        draw();
    };
    
    window.tetrisDrop = function() {
        if (!gameActive) return;
        if (!collide(piece, 0, 1)) {
            piece.y++;
            dropCounter = 0;
        } else {
            merge();
            sweep();
            resetPiece();
        }
        draw();
    };
    
    function update(time = 0) {
        if (!gameActive) return;
        const deltaTime = time - lastTime;
        lastTime = time;
        dropCounter += deltaTime;
        if (dropCounter > 1000) {
            tetrisDrop();
        }
        draw();
        requestAnimationFrame(update);
    }
    
    update();
}

// Game 20: Snake Adventure - Obstacles
function jigsawPuzzle(container) {
    container.innerHTML = `
        <p style="margin-bottom: 10px; text-align: center;">Collect 5 apples! Avoid walls.</p>
        <canvas id="snake-adv-canvas" width="300" height="300" style="border: 2px solid #ffc4dd; border-radius: 10px; display: block; margin: 0 auto; background: #e8f5e9;"></canvas>
        <div style="text-align: center; margin-top: 10px;">
            <div style="display: inline-grid; grid-template-columns: repeat(3, 50px); gap: 5px;">
                <div></div>
                <button onclick="snakeAdvDir(0, -1)" style="padding: 10px;">↑</button>
                <div></div>
                <button onclick="snakeAdvDir(-1, 0)" style="padding: 10px;">←</button>
                <div></div>
                <button onclick="snakeAdvDir(1, 0)" style="padding: 10px;">→</button>
                <div></div>
                <button onclick="snakeAdvDir(0, 1)" style="padding: 10px;">↓</button>
                <div></div>
            </div>
        </div>
    `;
    
    const canvas = container.querySelector('#snake-adv-canvas');
    const ctx = canvas.getContext('2d');
    const gridSize = 15;
    const tileCount = 20;
    
    let snake = [{x: 10, y: 10}];
    let velocity = {x: 0, y: 0};
    let apple = {x: 15, y: 15};
    let obstacles = [
        {x: 5, y: 5}, {x: 5, y: 6}, {x: 5, y: 7},
        {x: 15, y: 5}, {x: 15, y: 6}, {x: 15, y: 7}
    ];
    let score = 0;
    let gameLoop;
    
    window.snakeAdvDir = function(x, y) {
        if ((x !== 0 && velocity.x === 0) || (y !== 0 && velocity.y === 0)) {
            velocity = {x, y};
        }
    };
    
    function update() {
        const head = {x: snake[0].x + velocity.x, y: snake[0].y + velocity.y};
        
        // Wall collision
        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
            resetGame();
            return;
        }
        
        // Obstacle collision
        if (obstacles.some(obs => obs.x === head.x && obs.y === head.y)) {
            resetGame();
            return;
        }
        
        // Self collision
        if (snake.some(s => s.x === head.x && s.y === head.y)) {
            resetGame();
            return;
        }
        
        snake.unshift(head);
        
        if (head.x === apple.x && head.y === apple.y) {
            score++;
            if (score >= 5) {
                clearInterval(gameLoop);
                setTimeout(() => onGameComplete(), 500);
                return;
            }
            apple = {
                x: Math.floor(Math.random() * tileCount),
                y: Math.floor(Math.random() * tileCount)
            };
            // Ensure apple doesn't spawn on snake or obstacles
            while (snake.some(s => s.x === apple.x && s.y === apple.y) || 
                   obstacles.some(o => o.x === apple.x && o.y === apple.y)) {
                apple = {
                    x: Math.floor(Math.random() * tileCount),
                    y: Math.floor(Math.random() * tileCount)
                };
            }
        } else {
            snake.pop();
        }
        
        draw();
    }
    
    function draw() {
        ctx.fillStyle = '#e8f5e9';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Obstacles
        ctx.fillStyle = '#795548';
        obstacles.forEach(obs => {
            ctx.fillRect(obs.x * gridSize, obs.y * gridSize, gridSize - 2, gridSize - 2);
        });
        
        // Snake
        ctx.fillStyle = '#4CAF50';
        snake.forEach(s => {
            ctx.fillRect(s.x * gridSize, s.y * gridSize, gridSize - 2, gridSize - 2);
        });
        
        // Apple
        ctx.fillStyle = '#f44336';
        ctx.fillRect(apple.x * gridSize, apple.y * gridSize, gridSize - 2, gridSize - 2);
        
        // Score
        ctx.fillStyle = 'black';
        ctx.font = '16px Arial';
        ctx.fillText(`Score: ${score} / 5`, 10, 20);
    }
    
    function resetGame() {
        snake = [{x: 10, y: 10}];
        velocity = {x: 0, y: 0};
        score = 0;
    }
    
    gameLoop = setInterval(update, 150);
    draw();
}

// Game 21: Fruit Slicer - Ninja Style
function whackAMole(container) {
    container.innerHTML = `
        <p style="margin-bottom: 10px; text-align: center;">Slice 10 fruits! Avoid bombs.</p>
        <canvas id="fruit-canvas" width="300" height="400" style="border: 2px solid #ffc4dd; border-radius: 10px; display: block; margin: 0 auto; background: #333;"></canvas>
        <p id="fruit-score" style="text-align: center; margin-top: 10px; font-weight: bold;">Score: 0 / 10</p>
    `;
    
    const canvas = container.querySelector('#fruit-canvas');
    const ctx = canvas.getContext('2d');
    const scoreDisplay = container.querySelector('#fruit-score');
    
    let fruits = [];
    let particles = [];
    let score = 0;
    let gameActive = true;
    let mousePath = [];
    
    function createFruit() {
        if (!gameActive) return;
        const isBomb = Math.random() < 0.2;
        fruits.push({
            x: Math.random() * (canvas.width - 40) + 20,
            y: canvas.height,
            vx: (Math.random() - 0.5) * 4,
            vy: -(Math.random() * 5 + 8),
            radius: 20,
            color: isBomb ? '#000' : `hsl(${Math.random() * 360}, 70%, 50%)`,
            isBomb: isBomb,
            sliced: false
        });
        
        setTimeout(createFruit, 1000 + Math.random() * 1000);
    }
    
    function update() {
        if (!gameActive) return;
        
        ctx.fillStyle = 'rgba(51, 51, 51, 0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw trail
        if (mousePath.length > 1) {
            ctx.beginPath();
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 3;
            ctx.moveTo(mousePath[0].x, mousePath[0].y);
            for (let i = 1; i < mousePath.length; i++) {
                ctx.lineTo(mousePath[i].x, mousePath[i].y);
            }
            ctx.stroke();
            // Fade trail
            mousePath.shift();
        }
        
        fruits = fruits.filter(f => {
            f.x += f.vx;
            f.y += f.vy;
            f.vy += 0.2; // Gravity
            
            if (!f.sliced) {
                ctx.beginPath();
                ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
                ctx.fillStyle = f.color;
                ctx.fill();
                if (f.isBomb) {
                    ctx.strokeStyle = 'red';
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    ctx.fillStyle = 'red';
                    ctx.font = '20px Arial';
                    ctx.fillText('💣', f.x - 10, f.y + 5);
                }
                
                // Check slice
                mousePath.forEach(p => {
                    const dist = Math.hypot(p.x - f.x, p.y - f.y);
                    if (dist < f.radius) {
                        f.sliced = true;
                        if (f.isBomb) {
                            score = Math.max(0, score - 3);
                            scoreDisplay.textContent = `Score: ${score} / 10`;
                            // Flash red
                            ctx.fillStyle = 'rgba(255,0,0,0.5)';
                            ctx.fillRect(0,0,canvas.width,canvas.height);
                        } else {
                            score++;
                            scoreDisplay.textContent = `Score: ${score} / 10`;
                            // Particles
                            for(let i=0; i<5; i++) {
                                particles.push({
                                    x: f.x, y: f.y,
                                    vx: (Math.random()-0.5)*10,
                                    vy: (Math.random()-0.5)*10,
                                    color: f.color,
                                    life: 1
                                });
                            }
                            if (score >= 10) {
                                gameActive = false;
                                setTimeout(() => onGameComplete(), 500);
                            }
                        }
                    }
                });
            }
            
            return f.y < canvas.height + 50;
        });
        
        // Particles
        particles = particles.filter(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.05;
            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI*2);
            ctx.fill();
            ctx.globalAlpha = 1;
            return p.life > 0;
        });
        
        requestAnimationFrame(update);
    }
    
    const trackMouse = (x, y) => {
        mousePath.push({x, y});
        if (mousePath.length > 10) mousePath.shift();
    };
    
    canvas.addEventListener('mousemove', e => {
        const rect = canvas.getBoundingClientRect();
        trackMouse(e.clientX - rect.left, e.clientY - rect.top);
    });
    
    canvas.addEventListener('touchmove', e => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        trackMouse(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
    });
    
    createFruit();
    update();
}

// Game 22: Typing Speed - Falling words
function letterTrace(container) {
    const words = ['LOVE', 'HEART', 'KISS', 'HUG', 'GIFT', 'CAKE', 'WISH', 'JOY', 'SMILE', 'DREAM'];
    container.innerHTML = `
        <p style="margin-bottom: 10px; text-align: center;">Type words before they fall!</p>
        <div id="typing-area" style="height: 300px; width: 300px; border: 2px solid #ffc4dd; border-radius: 10px; position: relative; overflow: hidden; margin: 0 auto; background: #fff0f5;"></div>
        <input type="text" id="type-input" style="display: block; margin: 10px auto; padding: 10px; font-size: 18px; text-align: center; width: 200px; border: 2px solid #ff9ec7; border-radius: 5px;" placeholder="Type here..." autofocus>
        <p id="type-score" style="text-align: center; margin-top: 10px; font-weight: bold;">Score: 0 / 8</p>
    `;
    
    const area = container.querySelector('#typing-area');
    const input = container.querySelector('#type-input');
    const scoreDisplay = container.querySelector('#type-score');
    
    let activeWords = [];
    let score = 0;
    let gameActive = true;
    
    function spawnWord() {
        if (!gameActive) return;
        const wordText = words[Math.floor(Math.random() * words.length)];
        const el = document.createElement('div');
        el.textContent = wordText;
        el.style.cssText = `
            position: absolute;
            top: 0;
            left: ${Math.random() * 200}px;
            font-weight: bold;
            color: #ff0088;
            font-size: 20px;
            transition: top 4s linear;
        `;
        area.appendChild(el);
        
        // Force reflow
        el.offsetHeight;
        el.style.top = '300px';
        
        activeWords.push({text: wordText, el: el});
        
        setTimeout(() => {
            if (el.parentNode) {
                el.remove();
                activeWords = activeWords.filter(w => w.el !== el);
            }
        }, 4000);
        
        setTimeout(spawnWord, 1500);
    }
    
    input.addEventListener('input', () => {
        const val = input.value.toUpperCase();
        const matchIndex = activeWords.findIndex(w => w.text === val);
        
        if (matchIndex !== -1) {
            const match = activeWords[matchIndex];
            match.el.style.color = '#4CAF50';
            match.el.style.transform = 'scale(1.5)';
            setTimeout(() => match.el.remove(), 200);
            activeWords.splice(matchIndex, 1);
            input.value = '';
            score++;
            scoreDisplay.textContent = `Score: ${score} / 8`;
            
            if (score >= 8) {
                gameActive = false;
                setTimeout(() => onGameComplete(), 500);
            }
        }
    });
    
    input.focus();
    spawnWord();
}

// Game 23: Memory Matrix - Grid pattern
function quizGame(container) {
    container.innerHTML = `
        <p style="margin-bottom: 20px; text-align: center;">Repeat the pattern!</p>
        <div id="matrix-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; width: 240px; margin: 0 auto;"></div>
        <p id="matrix-level" style="text-align: center; margin-top: 20px; font-weight: bold;">Level: 1 / 5</p>
    `;
    
    const grid = container.querySelector('#matrix-grid');
    const levelDisplay = container.querySelector('#matrix-level');
    
    let sequence = [];
    let playerSeq = [];
    let level = 1;
    let canPlay = false;
    
    // Create grid
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.id = `cell-${i}`;
        cell.style.cssText = `
            aspect-ratio: 1;
            background: #e0e0e0;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.2s;
        `;
        cell.onclick = () => handleInput(i);
        grid.appendChild(cell);
    }
    
    function playSequence() {
        canPlay = false;
        sequence = [];
        for (let i = 0; i < level + 2; i++) {
            sequence.push(Math.floor(Math.random() * 9));
        }
        
        let i = 0;
        const interval = setInterval(() => {
            if (i >= sequence.length) {
                clearInterval(interval);
                canPlay = true;
                return;
            }
            flash(sequence[i]);
            i++;
        }, 600);
    }
    
    function flash(index) {
        const cell = document.getElementById(`cell-${index}`);
        cell.style.background = '#ff0088';
        setTimeout(() => {
            cell.style.background = '#e0e0e0';
        }, 300);
    }
    
    function handleInput(index) {
        if (!canPlay) return;
        flash(index);
        playerSeq.push(index);
        
        if (playerSeq[playerSeq.length - 1] !== sequence[playerSeq.length - 1]) {
            // Wrong
            levelDisplay.textContent = "Wrong! Try again.";
            playerSeq = [];
            setTimeout(() => {
                levelDisplay.textContent = `Level: ${level} / 5`;
                playSequence();
            }, 1000);
            return;
        }
        
        if (playerSeq.length === sequence.length) {
            level++;
            playerSeq = [];
            if (level > 5) {
                setTimeout(() => onGameComplete(), 500);
            } else {
                levelDisplay.textContent = `Level: ${level} / 5`;
                setTimeout(playSequence, 1000);
            }
        }
    }
    
    setTimeout(playSequence, 1000);
}

// Game 24: The Final Boss - Bullet Hell Heart
function heartUnlock(container) {
    container.innerHTML = `
        <p style="margin-bottom: 10px; text-align: center;">Protect the Heart! Dodge bullets for 15s.</p>
        <canvas id="boss-canvas" width="300" height="400" style="border: 2px solid #ff0088; border-radius: 10px; display: block; margin: 0 auto; background: #000;"></canvas>
        <p id="boss-timer" style="text-align: center; margin-top: 10px; font-weight: bold; color: #ff0088;">Time: 15.0s</p>
    `;
    
    const canvas = container.querySelector('#boss-canvas');
    const ctx = canvas.getContext('2d');
    const timerDisplay = container.querySelector('#boss-timer');
    
    let player = {x: 150, y: 200, r: 10};
    let bullets = [];
    let timeLeft = 15;
    let gameActive = true;
    let angle = 0;
    
    function update() {
        if (!gameActive) return;
        
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Player Heart
        ctx.fillStyle = '#ff0088';
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.r, 0, Math.PI * 2);
        ctx.fill();
        
        // Spawn bullets
        if (Math.random() < 0.2) {
            const side = Math.floor(Math.random() * 4);
            let b = {x:0, y:0, vx:0, vy:0, r: 5};
            if (side === 0) { b.x = Math.random()*300; b.y = 0; }
            if (side === 1) { b.x = 300; b.y = Math.random()*400; }
            if (side === 2) { b.x = Math.random()*300; b.y = 400; }
            if (side === 3) { b.x = 0; b.y = Math.random()*400; }
            
            const angle = Math.atan2(player.y - b.y, player.x - b.x);
            b.vx = Math.cos(angle) * 3;
            b.vy = Math.sin(angle) * 3;
            bullets.push(b);
        }
        
        // Update bullets
        bullets = bullets.filter(b => {
            b.x += b.vx;
            b.y += b.vy;
            
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
            ctx.fill();
            
            // Collision
            const dist = Math.hypot(player.x - b.x, player.y - b.y);
            if (dist < player.r + b.r) {
                // Hit!
                ctx.fillStyle = 'red';
                ctx.fillRect(0,0,300,400);
                timeLeft = 15; // Reset time
                bullets = [];
            }
            
            return b.x > -10 && b.x < 310 && b.y > -10 && b.y < 410;
        });
        
        // Timer
        timeLeft -= 0.016;
        timerDisplay.textContent = `Time: ${Math.max(0, timeLeft).toFixed(1)}s`;
        
        if (timeLeft <= 0) {
            gameActive = false;
            setTimeout(() => onGameComplete(), 500);
        }
        
        requestAnimationFrame(update);
    }
    
    canvas.addEventListener('touchmove', e => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        player.x = e.touches[0].clientX - rect.left;
        player.y = e.touches[0].clientY - rect.top;
    });
    
    canvas.addEventListener('mousemove', e => {
        const rect = canvas.getBoundingClientRect();
        player.x = e.clientX - rect.left;
        player.y = e.clientY - rect.top;
    });
    
    update();
}

// Helper function for simple click games
function simpleClickGame(container, title, target, itemName, actionName) {
    let count = 0;
    
    container.innerHTML = `
        <div style="text-align: center;">
            <p style="margin-bottom: 20px;">${title}</p>
            <div id="click-area" style="display: grid; grid-template-columns: repeat(3, 80px); gap: 10px; justify-content: center; margin-bottom: 20px;"></div>
            <p id="count-display" style="font-weight: bold;">${itemName} ${actionName}: 0 / ${target}</p>
        </div>
    `;
    
    const area = container.querySelector('#click-area');
    const display = container.querySelector('#count-display');
    
    for (let i = 0; i < target; i++) {
        const item = document.createElement('div');
        item.style.cssText = 'width: 80px; height: 80px; background: #ffc4dd; border-radius: 15px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 30px;';
        item.textContent = '♥';
        
        item.addEventListener('click', function() {
            if (!this.classList.contains('clicked')) {
                this.classList.add('clicked');
                this.style.background = '#c597d8';
                count++;
                display.textContent = `${itemName} ${actionName}: ${count} / ${target}`;
                
                if (count === target) {
                    setTimeout(() => onGameComplete(), 500);
                }
            }
        });
        
        area.appendChild(item);
    }
}
