export class LikeCounter extends HTMLDivElement {

    likeBtn = document.createElement("button");
    unlikeBtn = document.createElement("button");
    messageContainer = document.createElement("h2");

    state = {
        noOfLikes: 0,
    }

    likeFormatter = {
        1: 'lajk',
        '2-4': 'lajki',
        '5+': 'lajków',
    }

    constructor () {
        super();

        this.#appendStyle();

        this.likeBtn.textContent = 'Lubię to 👍';
        this.likeBtn.className = 'like-btn';
        this.likeBtn.addEventListener('click', this.likeBtnClick.bind(this));

        this.unlikeBtn.textContent = 'Nie podoba mi się 👎';
        this.unlikeBtn.className = 'unlike-btn';
        this.unlikeBtn.addEventListener('click', this.unlikeBtnClick.bind(this));

        this.messageContainer.textContent = `You have ${this.state.noOfLikes} likes`;

        const buttons = document.createElement('div');
        buttons.style.display = 'flex';
        buttons.style.gap = '.5em';

        buttons.append(
            this.unlikeBtn,
            this.likeBtn
        )

        this.append(
            this.messageContainer,
            buttons
        )
    }

    #appendStyle() {
        this.style.padding = '20px';
        this.style.border = '1px solid #ccc';
        this.style.display = 'flex';
        this.style.flexDirection = 'column';
        this.style.alignItems = 'center';
        this.style.gap = '2em';
    }

    get formatLikes() {
        const {noOfLikes} = this.state;
        return noOfLikes === 1 ? this.likeFormatter[1] :
            noOfLikes >= 2 && noOfLikes <= 4 ? this.likeFormatter['2-4'] :
            this.likeFormatter['5+'];
    }

    connectedCallback() {
        console.log('LikeCounter component mounted');
        this.render();
    }

    disconnectedCallback() {
        console.log('LikeCounter component unmounted');
    }

    likeBtnClick() {
        this.state.noOfLikes++;
        this.render();
    }

    unlikeBtnClick() {
        if( this.state.noOfLikes > 0 ) {
            this.state.noOfLikes--;
        }
        this.render();
    }

    render () {
        this.messageContainer.textContent = `Masz ${this.state.noOfLikes} ${this.formatLikes}`;
    }
}
customElements.define('like-counter', LikeCounter, { extends: 'div' });