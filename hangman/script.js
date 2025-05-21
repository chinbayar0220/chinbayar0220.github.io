
    const words = [
        { word: "ТЭМҮЖИН", hint: "Чингис хааны бага насны нэр" },
        { word: "ЧИНГИС", hint: "Их Монгол Улсыг үндэслэгч" },
        { word: "БӨРТЭ", hint: "Тэмүжиний анхны хатан" },
        { word: "ӨЭЛҮН", hint: "Чингис хааны эх" },
        { word: "ЕСҮХЭЙ", hint: "Тэмүжиний эцэг" },
        { word: "ЖАМУХА", hint: "Тэмүжиний анд бөгөөд өрсөлдөгч" },
        { word: "ХАСАР", hint: "Чингис хааны мэргэн харваач дүү" },
        { word: "СҮБЭЭДЭЙ", hint: "Чингис хааны алдарт жанжин" },
        { word: "БООРЧУ", hint: "Тэмүжиний анхны нөхөр, есөн өрлөгийн нэг" },
        { word: "ЗЭЛМЭ", hint: "Урианхайн отгон зарц, жанжин" },
        { word: "ХИЯД", hint: "Чингис хааны төрөлх овог" },
        { word: "БОРЖИГИН", hint: "Их хааны алтан ураг" },
        { word: "МЭРГИД", hint: "Бөртэг булаасан дайсагнагч аймаг" },
        { word: "ТАЙЧУУД", hint: "Тэмүжинийг барьж байсан овог" },
        { word: "ХЭРЭЙД", hint: "Тоорил вангийн удирддаг байсан аймаг" },
        { word: "НАЙМАН", hint: "Монголын баруун талын хүчирхэг аймаг" },
        { word: "ТАТАР", hint: "Есүхэй баатрыг хорлосон аймаг" },
        { word: "ХОНГИРАД", hint: "Өэлүн үжин, Бөртэ үжин нарын гаралтай аймаг" },
        { word: "ОНОН", hint: "Тэмүжиний төрсөн газрын ойролцоох гол" },
        { word: "БУРХАН_ХАЛДУН", hint: "Чингис хааны шүтээн уул" },
        { word: "ДЭЛҮҮН_БОЛДОГ", hint: "Их хааны мэндэлсэн газар" },
        { word: "ИХ_ХУРАЛДАЙ", hint: "Монголын ихэс ноёдын чуулган" },
        { word: "ГЭР", hint: "Монголчуудын уламжлалт сууц" },
        { word: "БЭЛГҮДЭЙ", hint: "Чингис хааны эх нэгт дүү" },
        { word: "ТЭМҮГЭ", hint: "Чингис хааны отгон дүү, Отчигин ноён" },
        { word: "МУХУЛАЙ", hint: "Чингис хааны итгэлт жанжин, го ван" },
        { word: "ЗҮЧИ", hint: "Чингис хааны ууган хүү" },
        { word: "ЦАГААДАЙ", hint: "Чингис хааны хоёрдугаар хүү" },
        { word: "ӨГӨӨДЭЙ", hint: "Чингис хааны гуравдугаар хүү бөгөөд дараагийн Их Хаан" },
        { word: "ТУЛУЙ", hint: "Чингис хааны отгон хүү" },
        { word: "ТЭМҮЛҮН", hint: "Чингис хааны охин дүү" },
        { word: "СОРХАГТАН_БЭХИ", hint: "Тулуйн хатан, Мөнх, Хубилай, Хүлэгү, Аригбөх нарын эх" },
        { word: "ШИХИХУТАГ", hint: "Чингис хааны өргөмөл дүү, Их Засаг хуулийг бичсэн гэгддэг" },
        { word: "ТООРИЛ_ВАН", hint: "Хэрэйдийн хан, Тэмүжиний эцгийн анд, хожмын өрсөлдөгч" },
        { word: "ГҮЮГ", hint: "Өгөөдэй хааны хүү, гурав дахь Их Хаан" },
        { word: "МӨНХ", hint: "Тулуйн хүү, дөрөв дэх Их Хаан" },
        { word: "ХУБИЛАЙ", hint: "Тулуйн хүү, тав дахь Их Хаан, Юань гүрнийг үндэслэгч" },
        { word: "АРИГБӨХ", hint: "Тулуйн хүү, Хубилайн эсрэг хаан ширээний төлөө тэмцэгч" },
    ];

    const nicknameModal = document.getElementById('nickname-modal');
    const gameOverModal = document.getElementById('game-over-modal');
    const nicknameInput = document.getElementById('nickname-input');
    const startGameBtn = document.getElementById('start-game');
    const playAgainBtn = document.getElementById('play-again');
    const viewScoresBtn = document.getElementById('view-scores');
    const letterContainer = document.getElementById('letter-container');
    const keyboardEl = document.getElementById('keyboard');
    const timeRemainingEl = document.getElementById('time-remaining');
    const scoreEl = document.getElementById('score');
    const hintTextEl = document.getElementById('hint-text'); 
    const gameOverTitle = document.getElementById('game-over-title');
    const gameOverMessage = document.getElementById('game-over-message');
    const finalScoreEl = document.getElementById('final-score');
    const scoresBody = document.getElementById('scores-body');
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const wordStatusEl = document.getElementById('word-status');
    const clearScoresBtn = document.getElementById('clear-scores-btn');
    const correctSound = document.getElementById('correct-sound');
    const wrongSound = document.getElementById('wrong-sound');

    const hangmanParts = [
        document.getElementById('head'), document.getElementById('body'),
        document.getElementById('left-arm'), document.getElementById('right-arm'),
        document.getElementById('left-leg'), document.getElementById('right-leg')
    ];

    let nickname = '';
    let currentWord = '';
    let currentHint = '';
    let guessedLetters = [];
    let wrongGuesses = 0;
    let score = 0;
    let timeRemaining = 60; 
    let timerInterval;
    let isGameActive = false;
    let canRevealLetter = true;

    const mongolianKeyboard = [
        ['Ф', 'Ц', 'У', 'Ж', 'Э', 'Н', 'Г', 'Ш', 'Ү', 'З', 'К', 'Ъ'],
        ['Й', 'Ы', 'Б', 'Ө', 'А', 'Х', 'Р', 'О', 'Л', 'Д', 'П'],
        ['Я', 'Ч', 'Ё', 'С', 'М', 'И', 'Т', 'Ь', 'В', 'Ю', 'Е']
    ];
    
    function playSound(sound) {
        sound.currentTime = 0;
        sound.play().catch(error => console.log("Дуу тоглуулахад алдаа гарлаа:", error));
    }

    function init() {
        const savedNickname = getCookie('hangman_nickname');
        if (savedNickname) {
            nickname = savedNickname;
            nicknameModal.style.display = 'none';
        } else {
            nicknameModal.style.display = 'flex'; 
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById(`${tabId}-tab`).classList.add('active');
                
                if (tabId === 'scores') {
                    updateScoreboard();
                } else if (tabId === 'game') {
                    if (!isGameActive && !nickname) {
                        nicknameModal.style.display = 'flex';
                    } else if (!isGameActive && nickname) {
                        resetGame(); 
                        startGame();
                    }
                }
            });
        });

        startGameBtn.addEventListener('click', () => {
            if (nicknameInput.value.trim() !== '') {
                nickname = nicknameInput.value.trim();
                setCookie('hangman_nickname', nickname, 30); 
                nicknameModal.style.display = 'none';
                resetGame(); 
                startGame();
            } else {
                alert("Нэрээ оруулна уу!");
            }
        });
        playAgainBtn.addEventListener('click', () => {
            gameOverModal.style.display = 'none';
            resetGame();
            startGame();
        });

        viewScoresBtn.addEventListener('click', () => {
            gameOverModal.style.display = 'none';
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            document.querySelector('[data-tab="scores"]').classList.add('active');
            document.getElementById('scores-tab').classList.add('active');
            updateScoreboard();
        });


        clearScoresBtn.addEventListener('click', () => {
            if (confirm("Та дээд оноонуудыг арилгахдаа итгэлтэй байна уу?")) {
                localStorage.removeItem('hangman_scores');
                updateScoreboard();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (isGameActive && nicknameModal.style.display === 'none' && gameOverModal.style.display === 'none') {
                const key = event.key.toUpperCase();
                if (/^[А-ЯЁҮӨЪЬ]$/i.test(key) || ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Ү', 'З', 'Х', 'Ъ', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', 'Ё'].includes(key)) {
                    handleGuess(key);
                }
            }
        });
        updateScoreboard(); 
        if (!nickname){
            document.getElementById('game-tab').classList.remove('active');
            document.querySelector('[data-tab="game"]').classList.remove('active');
             if(!document.querySelector('.tab.active')){
                document.querySelector('[data-tab="scores"]').classList.add('active');
                document.getElementById('scores-tab').classList.add('active');
             }
        } else {
             if(document.getElementById('game-tab').classList.contains('active')){
                resetGame();
                startGame();
             }
        }
    }

    function startGame() {
        if (!nickname) {
            nicknameModal.style.display = 'flex';
            return;
        }
        isGameActive = true;
        scoreEl.textContent = score;
        timeRemaining = 60;
        wordStatusEl.textContent = '';
        updateTimer();
        
        if(timerInterval) clearInterval(timerInterval); 
        timerInterval = setInterval(() => {
            timeRemaining--;
            updateTimer();
            if (timeRemaining <= 0) {
                endGame(); 
            }
        }, 1000);
        
        createKeyboard(); 
        pickRandomWord(); 
        revealLetterBtn.disabled = false;
    }

    function resetGame() {
        wrongGuesses = 0;
        guessedLetters = [];
        hangmanParts.forEach(part => part.style.display = 'none');
        wordStatusEl.textContent = ''; 
        if (timerInterval) clearInterval(timerInterval); 
        isGameActive = false; 
    }
    function resetScoreForNewSession() {
        score = 0;
        scoreEl.textContent = score;
    }


    function pickRandomWord() {
        resetGameForNewWordInternal(); 
        const randomIndex = Math.floor(Math.random() * words.length);
        currentWord = words[randomIndex].word.toUpperCase(); 
        currentHint = words[randomIndex].hint;
        
        hintTextEl.textContent = `Тайлбар: ${currentHint}`;
        createLetterBoxes();
        resetKeyboardVisuals(); 
        canRevealLetter = true;
    }

    function resetGameForNewWordInternal(){
        wrongGuesses = 0;
        guessedLetters = [];
        hangmanParts.forEach(part => part.style.display = 'none');
        wordStatusEl.textContent = '';
    }


    function createLetterBoxes() {
        letterContainer.innerHTML = '';
        for (let i = 0; i < currentWord.length; i++) {
            const letterBox = document.createElement('div');
            letterBox.classList.add('letter-box');
            if (currentWord[i] === '_') {
                letterBox.style.border = 'none'; 
                letterBox.textContent = ' '; 
            }
            letterContainer.appendChild(letterBox);
        }
    }

    function createKeyboard() {
        keyboardEl.innerHTML = '';
        mongolianKeyboard.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.style.display = 'flex';
            rowDiv.style.justifyContent = 'center';
            rowDiv.style.margin = '5px 0';
            row.forEach(letter => {
                const key = document.createElement('button');
                key.textContent = letter;
                key.classList.add('key');
                key.setAttribute('data-letter', letter);
                key.addEventListener('click', () => {
                    if (isGameActive && !key.classList.contains('used')) {
                        handleGuess(letter);
                    }
                });
                rowDiv.appendChild(key);
            });
            keyboardEl.appendChild(rowDiv);
        });
    }

    function resetKeyboardVisuals() {
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.classList.remove('used', 'correct', 'wrong');
            key.disabled = false;
        });
    }

    function handleGuess(letter) {
        if (!isGameActive || guessedLetters.includes(letter) || wrongGuesses >= hangmanParts.length) {
            return;
        }
        
        guessedLetters.push(letter);
        const keyButton = document.querySelector(`.key[data-letter="${letter}"]`);
        if (keyButton) {
            keyButton.classList.add('used');
            keyButton.disabled = true;
        }

        if (currentWord.includes(letter)) {
            playSound(correctSound);
            if(keyButton) keyButton.classList.add('correct');
            updateLetterBoxes();
            if (checkWinCondition()) {
                score+=currentWord.length;
                scoreEl.textContent = score;
                wordStatusEl.textContent = 'Зөв таалаа!';
                isGameActive = false; 
                setTimeout(() => {
                    if(timeRemaining > 0) { 
                        isGameActive = true;
                        pickRandomWord();
                    } else {
                        endGame();
                    }
                }, 1500); 
            }
        } else {
            playSound(wrongSound);
            if(keyButton) keyButton.classList.add('wrong');
            wrongGuesses++;
            if (wrongGuesses <= hangmanParts.length) {
                hangmanParts[wrongGuesses - 1].style.display = 'block';
            }
            if (wrongGuesses >= hangmanParts.length) {
                endGame(); 
            }
        }
    }
    
    function updateLetterBoxes() {
        const letterBoxes = letterContainer.querySelectorAll('.letter-box');
        for (let i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === '_' || guessedLetters.includes(currentWord[i])) {
                letterBoxes[i].textContent = currentWord[i] === '_' ? ' ' : currentWord[i];
            }
        }
    }

    function checkWinCondition() {
        for (let i = 0; i < currentWord.length; i++) {
            if (currentWord[i] !== '_' && !guessedLetters.includes(currentWord[i])) {
                return false; 
            }
        }
        return true; 
    }



    function updateTimer() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timeRemainingEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function endGame() { 
        isGameActive = false;
        clearInterval(timerInterval);
        saveScore(nickname, score);
        
        revealLetterBtn.disabled = true; 

        if (wrongGuesses >= hangmanParts.length) { 
            gameOverTitle.textContent = 'Дүүжлэгдлээ!';
            gameOverMessage.textContent = `Таны таах ёстой байсан үг: "${currentWord}".`;
        } else if (timeRemaining <= 0) { 
             gameOverTitle.textContent = 'Хугацаа дууслаа!';
             gameOverMessage.textContent = `Тоглох хугацаа дууслаа. Таах ёстой байсан үг: "${currentWord}".`;
        }
        else if (!checkWinCondition()){
            gameOverTitle.textContent = 'Тоглоом дууслаа';
            gameOverMessage.textContent = `Таны таах ёстой байсан үг: "${currentWord}".`;
        }


        finalScoreEl.textContent = `Таны оноо: ${score}`;
        const highScores = getHighScores();
        const isTopPlayer = highScores.slice(0, 5).some(s => s.nickname === nickname && s.score === score);

        if (isTopPlayer && score > 0) { 
            finalScoreEl.textContent += ' - Баяр хүргэе! Та шилдэг 5 тоглогчийн нэгт багтлаа!';
        }
        gameOverModal.style.display = 'flex';
    }
    function updateScoreboard() {
        const highScores = getHighScores();
        scoresBody.innerHTML = '';
        if (highScores.length === 0) {
            const row = scoresBody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 3;
            cell.textContent = 'Онооны самбар хоосон байна.';
            cell.style.textAlign = 'center';
        } else {
            highScores.forEach((s, index) => {
                const row = scoresBody.insertRow();
                row.insertCell().textContent = index + 1;
                row.insertCell().textContent = s.nickname;
                row.insertCell().textContent = s.score;
            });
        }
    }

    function saveScore(currentNickname, currentScore) {
        if (currentScore <= 0 && currentNickname === '') return; // Don't save zero/negative scores, or if no nickname
        let highScores = getHighScores();
        highScores.push({ nickname: currentNickname, score: currentScore });
        highScores.sort((a, b) => b.score - a.score); 
        highScores = highScores.slice(0, 10); 
        localStorage.setItem('hangman_scores', JSON.stringify(highScores));
    }

    function getHighScores() {
        const scoresData = localStorage.getItem('hangman_scores'); // Renamed for clarity
        return scoresData ? JSON.parse(scoresData) : [];
    }

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;SameSite=Lax`;
    }

    function getCookie(name) {
        const cookieName = `${name}=`;
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookies = decodedCookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return '';
    }
    startGameBtn.addEventListener('click', () => {
        if (nicknameInput.value.trim() !== '') {
            nickname = nicknameInput.value.trim();
            setCookie('hangman_nickname', nickname, 30);
            nicknameModal.style.display = 'none';
            resetScoreForNewSession(); // Reset score for a new session
            resetGame(); 
            startGame();
        } else {
            alert("Нэрээ оруулна уу!");
        }
    });

    // Event listener for playAgainBtn (modified for score reset)
    playAgainBtn.addEventListener('click', () => {
        gameOverModal.style.display = 'none';
        resetScoreForNewSession(); // Reset score for a new session
        resetGame();
        startGame();
    });


    window.addEventListener('load', init);