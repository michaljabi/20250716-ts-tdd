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

import { screen, fireEvent } from '@testing-library/dom'
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
        likeBtnRef = screen.getByRole('button', { name: /Lubię/i });
        unlikeBtnRef = screen.getByRole('button', { name: /Nie podoba mi się/i });
        messageContainerRef = screen.getByText(/Masz 0 lajków/i);
    })

    afterEach(() => {
         document.body.innerHTML = '';
    })
    

    it('should increment like count when like button is clicked', () => {

        likeBtnRef.style.display = 'none'

       // console.log(likeBtnRef.style.display)

        fireEvent.click(likeBtnRef)
        fireEvent.click(likeBtnRef)

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