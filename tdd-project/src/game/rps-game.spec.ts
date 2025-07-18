import { it, expect, describe } from 'vitest'
import { prepareGame } from './rps-game';
import type { TheRPSGame } from './rps-game'


describe('RPS game', () => {

    let rpsGame: TheRPSGame;

    beforeEach(() => {
        rpsGame = prepareGame();
    })
   
    
    it('should have 3 choices rock, paper, scissors in game [RQ-1, RQ-4]', () => {
        const gameChoices = rpsGame.getChoices()


        expect(gameChoices).toEqual(['rock', 'paper', 'scissors'])
    });


    it.each([
        ['rock'] as const,
        ['paper'] as const,
        ['scissors'] as const
    ])('should result in game state `DRAW` if both player have same choices [RQ-5, RQ-6]', (sameChoice) => {

        const result = rpsGame.playRound(sameChoice, sameChoice);

        expect(result).toBe('DRAW')
    })

    it.each([
        ['rock', 'scissors'] as const,
        ['paper', 'rock'] as const,
        ['scissors', 'paper'] as const
    ])('should result in game state `WIN` if 1st player choice is %s and 2nd player choice is %s [RQ-5, RQ-6]', (p1Choice, p2Choice) => {
        const result = rpsGame.playRound(p1Choice, p2Choice);

        expect(result).toBe('WIN')
    })

    it.each([
        ['rock', 'paper'] as const,
        ['paper', 'scissors'] as const,
        ['scissors', 'rock'] as const,
    ])('should result in game state `LOOSE` if 1st player choice is %s and 2nd player choice is %s [RQ-5, RQ-6]', (p1Choice, p2Choice) => {
        const result = rpsGame.playRound(p1Choice, p2Choice);

        expect(result).toBe('LOOSE')
    })


    it('should provide a CPU choice [RQ-2]', () => {
        const gameChoices = rpsGame.getChoices()
        const result = rpsGame.getPickFromCPU(); 

        expect(gameChoices).toContain(result);
    })


    it('should randomize CPU choice [RQ-2] only valid choices (rock,paper,scissors) shoud be given from CPU', () => {
        const gameChoices = rpsGame.getChoices()
        
        const cpuResults = new Array(30).fill('').map(() => rpsGame.getPickFromCPU());

        // expect(cpuResults).toContain('rock')
        // expect(cpuResults).toContain('paper')
        // expect(cpuResults).toContain('scissors')

        expect(new Set(cpuResults).values().toArray().sort()).toEqual(['paper', 'rock', 'scissors'])
        // lub krócej 🤣:
        // @ts-ignore
        expect(cpuResults).toEqual(expect.arrayContaining(gameChoices))
        expect(new Set(cpuResults).size).toBe(gameChoices.length);
    })
})