/**
 * Shuffle and sort class which tales care of the functionality
 */
class ShuffleSort {

  // FE element ids
  cardsId = 'cards';
  sortId = 'sort-btn';
  lastCardId = 'last-card';
  shuffleId = 'shuffle-btn';

  // cards array
  cardsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  /**
   * Constructor
   */
  constructor() {
    window.addEventListener('load', event => {
      this.assignMethods();
      this.render();
    });
  }

  /**
   * Assigns unobstrusive methods to CTA buttons
   */
  assignMethods = () => {
    const sortBtn = document.getElementById(this.sortId);
    const shuffleBtn = document.getElementById(this.shuffleId);
    sortBtn.addEventListener('click', () => {
      this.sort();
    });
    shuffleBtn.addEventListener('click', () => {
      this.shuffle();
    });
  }
  
  /**
   * Shuffling functionality
   */
  shuffle = () => {
    let shuffledArray = [] ;
    const numbersLength = this.cardsArray.length;

    // loops through number of elements in the array
    // this can be achieved using inbuilt sort() JS api as well,
    // but doing this for the sake of interview
    for (let i = 0; i < numbersLength; i++) {

      // generates a random index to pick the element from remaining elements in
      // old array
      const randomId = Math.floor(Math.random() * this.cardsArray.length);

      // picks the random elements and merges it to new suffled array
      shuffledArray = [
        ...shuffledArray,
        ...this.cardsArray.splice(randomId, 1)
      ];
    }
    this.cardsArray = shuffledArray;

    // re-renders the UI
    this.render();
  }

  /**
   * Sorting functionality
   */
  sort = () => {

    // sorting the elements in the array;
    this.cardsArray = this.cardsArray.sort((max, min) => max - min);

    // re-rendering UI
    this.render();
  }

  /**
   * Renders the UI with the updates array elements.
   * This method is called in the constructor on page load
   * also after shuffle and sort functions are executed
   */
  render = () => {
    const cardsHolder = document.getElementById(this.cardsId);
    cardsHolder.innerHTML = '<div class="last-card"></div>';

    const lastCard = document.getElementById(this.lastCardId);

    this.cardsArray.forEach((cardNumber, i) => {
      const card = document.createElement('div');
      card.className = `card card-${cardNumber}`;
      card.textContent = cardNumber;
      cardsHolder.insertBefore(card, lastCard);
    });
  }

}

// creating an instance of the shuffle and sort application
new ShuffleSort();
