

export function prepareGame() {

    const gamePicks =  ['rock', 'paper', 'scissors'];

    return {
        getChoices() {
            return gamePicks
        },
        playRound(choice1st: string, choice2nd: string) {
            if(choice1st === choice2nd) {
                return 'DRAW'
            }
            if(
                choice1st === 'rock' && choice2nd === 'scissors'
                ||
                 choice1st === 'paper' && choice2nd === 'rock'
                 || 
                 choice1st === 'scissors' && choice2nd === 'paper'
            ) {
                return 'WIN'
            }
            return 'LOOSE'
        },
        getPickFromCPU() {
            return gamePicks[Math.floor(Math.random() * gamePicks.length)]
        }
    }
}