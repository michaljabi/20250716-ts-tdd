    import { prepareGame } from './rps-game';   
    import type { TheRPSGame } from './rps-game'

    
    describe('game state', () => {

        let gameState = prepareGameState();
        let rpsGame: TheRPSGame;


        beforeEach(() => {
            rpsGame = prepareGame();
            gameState = prepareGameState();
        })
   

        it.each([

            ['WIN', 'paper', 'rock', 'WYGRANA - wybór komputera: rock'],
            ['LOSSE', 'rock', 'scissors', 'PRZEGRANA - wybór komputera: scissors']

        ])('should display proper game state interpretation [RQ-7]', (result, myChoice, cpuChoice, expectMessage) => {
        
            const message = gameState.newRound(result, myChoice, cpuChoice);

            expect(message).toBe(expectMessage)
        })

        // it('should show proper game state after round', () => {
        //     const myChoice = 'rock';
        //     const cpuChoice = 'scissors'
        //     const result = rpsGame.playRound(myChoice, cpuChoice);

        //     const message = gameState.newRound(result, myChoice, cpuChoice);

        //     expect(message).toBe('WYGRANA - wybór komputera: scissors')
        // })


        it('should track the game state, win/ loose / draw count for EndUser [RQ-8]', () => {

            gameState.newRound('WIN', 'paper', 'rock');
            gameState.newRound('WIN','paper', 'rock');

            gameState.newRound('LOOSE', 'rock', 'paper');

            gameState.newRound('DRAW', 'scissors', 'scissors');


            const {playerScore, rounds} = gameState.getState();

            expect(rounds).toBe(3);
            expect(playerScore).toBe(1);
        })
    })


    // 2 ścieżki:

    // rozwój rock-paper-scissors-lizard-spock

    // rozwój -> react-app + komponent do grania (implementacja logiki gry ba UI)