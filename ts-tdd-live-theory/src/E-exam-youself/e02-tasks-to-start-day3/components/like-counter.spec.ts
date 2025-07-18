/*
*
* Zadanie na start dnia 1:
*
* Napisz testy dla komponentu LikeCounter.
* samodzielnie zdecyduj, co i jak potrzeba przetestować.
* 
* 
* // pamiętajmy o:
* @vitest-environment jsdom
* */

import { LikeCounter } from "./like-counter"


describe('LikeCounter', () => {

    let likeCounter: LikeCounter;
    let domRef: HTMLDivElement;

    let likeBtnRef: HTMLButtonElement;
    let unlikeBtnRef: HTMLButtonElement;
    let messageContainerRef: HTMLHeadingElement;


    beforeEach(() => {
         likeCounter = new LikeCounter();
         document.body.innerHTML = '';
         document.body.append(likeCounter);
    })

    // GIVEN
    beforeEach(() => {
        domRef = document.body.querySelector('div') as HTMLDivElement;
        // const likeBtnRef = domRef.querySelector<HTMLButtonElement>('button.like-btn');
        likeBtnRef = domRef.querySelector('button.like-btn') as HTMLButtonElement;
        unlikeBtnRef = domRef.querySelector('button.unlike-btn') as HTMLButtonElement;
        // const messageContainerRef = domRef.querySelector<HTMLHeadingElement>('h2');
        messageContainerRef = domRef.querySelector('h2') as HTMLHeadingElement;
    })
    

    it('should render', () => {
        // const domRef = document.body.querySelector('div');
        
        // console.log(domRef?.innerHTML)
        
        expect(domRef).not.toBeNull();
    })

    it('should increment like count when like button is clicked', () => {

        likeBtnRef?.click();
        likeBtnRef?.click();

        expect(messageContainerRef?.textContent).toContain('2 lajki')
    })

    it('should decrement amount of likes on button.unlike-btn clicked', () => {
        // GIVEN
        likeBtnRef.click();
        likeBtnRef.click();
        likeBtnRef.click();
        likeBtnRef.click();

        // When
        unlikeBtnRef.click();

        // Then
        // ZAWSZE chcesz zapalić asercję na czerwono najpierw ! żeby nie było tzw. false positive
        // expect(messageContainerRef?.textContent).toContain('2 lajki')
        expect(messageContainerRef?.textContent).toContain('3 lajki')
    })

    it('should not decrement likes below 0 when unlike button is clicked and amount of likes is 0', () => {
         // GIVEN
        expect(messageContainerRef?.textContent).toContain(' 0 lajków')

         // When
        unlikeBtnRef.click();
        unlikeBtnRef.click();

        expect(messageContainerRef?.textContent).toContain('Masz 0 lajków')
    })

    it('should contain message according to counted likes {langualization / pluralization}', () => {
        // GIVEN
        expect(messageContainerRef?.textContent).toContain(' 0 lajków')

        likeBtnRef.click();
        expect(messageContainerRef?.textContent).toContain(' 1 lajk')

        likeBtnRef.click();
        expect(messageContainerRef?.textContent).toContain(' 2 lajki');

        likeBtnRef.click();
        likeBtnRef.click();
        likeBtnRef.click();
        expect(messageContainerRef?.textContent).toContain(' 5 lajków')

        likeBtnRef.click();
        likeBtnRef.click();
        expect(messageContainerRef?.textContent).toContain(' 7 lajków')
    })
})