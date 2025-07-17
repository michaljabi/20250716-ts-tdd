import { it, expect, describe } from 'vitest'


describe('RPS game', () => {

    let rpsGame = prepareGame();

    beforeEach(() => {
        rpsGame = prepareGame();
    })
   
    
    it('should have 3 choices rock, paper, scissors in game [RQ-1, RQ-4]', () => {
        const gameChoices = rpsGame.getChoices()


        expect(gameChoices).toEqual(['rock', 'paper', 'scissors'])
    });


    it.each([
        ['rock'],
        ['paper'],
        ['scissors']
    ])('should result in game state `DRAW` if both player have same choices [RQ-5, RQ-6]', (sameChoice) => {

        const result = rpsGame.playRound(sameChoice, sameChoice);

        expect(result).toBe('DRAW')
    })

    it.each([
        ['rock', 'scissors'],
        ['paper', 'rock'],
        ['scissors', 'paper']
    ])('should result in game state `WIN` if 1st player choice is %s and 2nd player choice is %s [RQ-5, RQ-6]', (p1Choice, p2Choice) => {
            const result = rpsGame.playRound(p1Choice, p2Choice);

        expect(result).toBe('WIN')
    })

    it.each([
        ['rock', 'paper'],
        ['paper', 'scissors'],
        ['scissors', 'rock']
    ])('should result in game state `LOOSE` if 1st player choice is %s and 2nd player choice is %s [RQ-5, RQ-6]', (p1Choice, p2Choice) => {
        const result = rpsGame.playRound(p1Choice, p2Choice);

        expect(result).toBe('LOOSE')
    })



})