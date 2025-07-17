

export enum RoundResult {
  WIN = 'WIN',
  LOOSE = 'LOOSE',
  DRAW = 'DRAW' 
}

export type TheRPSGame = ReturnType<typeof prepareGame>;

export function prepareGame() {

    const gamePicks =  ['rock', 'paper', 'scissors'] as const;
    type GameChoices = typeof gamePicks[number];
    
    const winConditions: Record<GameChoices, GameChoices> = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    return {
        getChoices(): readonly GameChoices[] {
            return gamePicks
        },
        playRound(choice1st: GameChoices, choice2nd: GameChoices) {
            if(choice1st === choice2nd) {
                return RoundResult.DRAW
            }
            return winConditions[choice1st] === choice2nd ? RoundResult.WIN :  RoundResult.LOOSE;
        },
        getPickFromCPU(): GameChoices {
            return gamePicks[Math.floor(Math.random() * gamePicks.length)]
        }
    }
}