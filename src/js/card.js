// listing vars here so they're in the global scope
var cards, nCards, cover, openContent, openContentText, pageIsOpen = false,
    openContentImage, closeContent, windowWidth, windowHeight, currentCard;

// initiate the process
initialize();

function initialize() {
  resize();
  selectElements();
  attachListeners();
}

// select all the elements in the DOM that are going to be used
function selectElements() {
  cards = document.getElementsByClassName('card'),
  nCards = cards.length,
  cover = document.getElementById('cover'),
  openContent = document.getElementById('open-content'),
  openContentText = document.getElementById('open-content-text'),
  openContentImage = document.getElementById('open-content-image')
  closeContent = document.getElementById('close-content');
}

/* Attaching three event listeners here:
  - a click event listener for each card
  - a click event listener to the close button
  - a resize event listener on the window
*/
function attachListeners() {
  for (var i = 0; i < nCards; i++) {
    attachListenerToCard(i);
  }
  closeContent.addEventListener('click', onCloseClick);
  window.addEventListener('resize', resize);
}

function attachListenerToCard(i) {
  cards[i].addEventListener('click', function(e) {
    var card = getCardElement(e.target);
    onCardClick(card, i);
  })
}

/* When a card is clicked */
function onCardClick(card, i) {
  // set the current card
  currentCard = card;
  // add the 'clicked' class to the card, so it animates out
  currentCard.className += ' clicked';
  // animate the card 'cover' after a 500ms delay
  setTimeout(function() {animateCoverUp(currentCard, i)}, 500);
  // animate out the other cards
  animateOtherCards(currentCard, true);
  // add the open class to the page content
  openContent.className += ' open';
}

/*
* This effect is created by taking a separate 'cover' div, placing
* it in the same position as the clicked card, and animating it to
* become the background of the opened 'page'.
* It looks like the card itself is animating in to the background,
* but doing it this way is more performant (because the cover div is
* absolutely positioned and has no children), and there's just less
* having to deal with z-index and other elements in the card
*/
function animateCoverUp(card, number) {
  // get the position of the clicked card
  var cardPosition = card.getBoundingClientRect();
  // get the style of the clicked card
  var cardStyle = getComputedStyle(card);
  setCoverPosition(cardPosition);
  setCoverColor(cardStyle);
  scaleCoverToFillWindow(cardPosition);
  // update the content of the opened page
  openContentText.innerHTML = '<h1>'+card.children[2].textContent+'</h1>'+paragraphText[number];
  openContentImage.src = card.children[1].src;
  setTimeout(function() {
    // update the scroll position to 0 (so it is at the top of the 'opened' page)
    window.scroll(0, 0);
    // set page to open
    pageIsOpen = true;
  }, 300);
  
}

function animateCoverBack(card) {
  var cardPosition = card.getBoundingClientRect();
  // the original card may be in a different position, because of scrolling, so the cover position needs to be reset before scaling back down
  setCoverPosition(cardPosition);
  scaleCoverToFillWindow(cardPosition);
  // animate scale back to the card size and position
  cover.style.transform = 'scaleX('+1+') scaleY('+1+') translate3d('+(0)+'px, '+(0)+'px, 0px)';
  setTimeout(function() {
    // set content back to empty
    openContentText.innerHTML = '';
    openContentImage.src = '';
    // style the cover to 0x0 so it is hidden
    cover.style.width = '0px';
    cover.style.height = '0px';
    pageIsOpen = false;
    // remove the clicked class so the card animates back in
    currentCard.className = currentCard.className.replace(' clicked', '');
  }, 301);
}

function setCoverPosition(cardPosition) {
  // style the cover so it is in exactly the same position as the card
  cover.style.left = cardPosition.left + 'px';
  cover.style.top = cardPosition.top + 'px';
  cover.style.width = cardPosition.width + 'px';
  cover.style.height = cardPosition.height + 'px';
}

function setCoverColor(cardStyle) {
  // style the cover to be the same color as the card
  cover.style.backgroundColor = cardStyle.backgroundColor;
}

function scaleCoverToFillWindow(cardPosition) {
  // calculate the scale and position for the card to fill the page,
  var scaleX = windowWidth / cardPosition.width;
  var scaleY = windowHeight / cardPosition.height;
  var offsetX = (windowWidth / 2 - cardPosition.width / 2 - cardPosition.left) / scaleX;
  var offsetY = (windowHeight / 2 - cardPosition.height / 2 - cardPosition.top) / scaleY;
  // set the transform on the cover - it will animate because of the transition set on it in the CSS
  cover.style.transform = 'scaleX('+scaleX+') scaleY('+scaleY+') translate3d('+(offsetX)+'px, '+(offsetY)+'px, 0px)';
}

/* When the close is clicked */
function onCloseClick() {
  // remove the open class so the page content animates out
  openContent.className = openContent.className.replace(' open', '');
  // animate the cover back to the original position card and size
  animateCoverBack(currentCard);
  // animate in other cards
  animateOtherCards(currentCard, false);
}

function animateOtherCards(card, out) {
  var delay = 100;
  for (var i = 0; i < nCards; i++) {
    // animate cards on a stagger, 1 each 100ms
    if (cards[i] === card) continue;
    if (out) animateOutCard(cards[i], delay);
    else animateInCard(cards[i], delay);
    delay += 100;
  }
}

// animations on individual cards (by adding/removing card names)
function animateOutCard(card, delay) {
  setTimeout(function() {
    card.className += ' out';
   }, delay);
}

function animateInCard(card, delay) {
  setTimeout(function() {
    card.className = card.className.replace(' out', '');
  }, delay);
}

// this function searches up the DOM tree until it reaches the card element that has been clicked
function getCardElement(el) {
  if (el.className.indexOf('card ') > -1) return el;
  else return getCardElement(el.parentElement);
}

// resize function - records the window width and height
function resize() {
  if (pageIsOpen) {
    // update position of cover
    var cardPosition = currentCard.getBoundingClientRect();
    setCoverPosition(cardPosition);
    scaleCoverToFillWindow(cardPosition);
  }
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
}

var paragraphText = [
                        '<p>Our brain immediately responds to all external stimuli, and the sound of music is one of them. The concert stimulates the part of the brain that produces dopamine hormone. This hormone affects emotional behavior and mood. The influence of music is behavioral and neurological. In other words, this means that music not only affects emotions, but also affects things that we cannot control.<br><br>Understanding how music affects your mood is important for several reasons. In this way, you can change your perception of what kind of music you listen to and understand how it affects you.<br><br>If you feel anxious and irritable, it may be because of your favorite music. Maybe it\'s time to start listening to more calm music, it can lift the spirits and increase energy. On the contrary, if you feel that you need more simplicity or creativity to complete a difficult task, then right, the best music may add some coping ability to you.</p>',
                        '<p>In most existing music emotion classification methods, the emotions of songs are classified according to the traditional emotion model of psychologist Robert Thayer. The model classifies songs as happy, sad, calm, and energetic according to energy and stress. The eight categories created by the Thayer model include the extremes of two straight lines and every possible intersection of the straight lines (for example, happy, energetic, or sad peace).<img src="./src/image/mood2.jpg" class="mood2"/><br>Faster tempo is associated with high-energy songs, and slower tempo is associated with lower energy and poorer songs. The loudness or intensity of the song may be associated with anger, while softer songs suggest softness, sadness or fear . A higher overall pitch can indicate happiness,  arefree, and relaxed emotions in a song, while a lower pitch indicates a darker, sad, and serious pitch. Timbre is a tonal component produced by harmonics and is a curious indicator of emotions. A team of researchers from the BNM Institute of Technology in Bangalore,  ndia stated: “The tone stimulates human energy levels and has nothing  to do with rhythm or harmonic saturation. A sound source with a simple  harmonic profile has a “darker” tone and tends to Soothe human emotion  ". The same group of researchers generated correlation tables of intensity, timbre, pitch, and rhythm to identify various emotions.<br><br><br><table cellspacing="0" class="mtable" cellpadding="2"><tbody><tr><th width="20%">Mood</th><th width="20%">Intensity</th><th width="20%">Timbre</th><th width="20%">Pitch</th><th width="20%">Rhythm</th></tr><tr><td class="rowheader01">Happy</td><td style="text-align: right">Medium</td><td style="text-align: right">Medium</td><td style="text-align: right">Very High</td><td style="text-align: right">Very High</td></tr><tr><td class="rowheader01">Exuberant</td><td style="text-align: right">High</td><td style="text-align: right">Medium</td><td style="text-align: right">High</td><td style="text-align: right">High</td></tr><tr><td class="rowheader01">Energetic</td><td style="text-align: right">Very High</td><td style="text-align: right">Medium</td><td style="text-align: right">Medium</td><td style="text-align: right">High</td></tr><tr><td class="rowheader01">Frantic</td><td style="text-align: right">High</td><td style="text-align: right">Very High</td><td style="text-align: right">Low</td><td style="text-align: right">Very High</td></tr><tr><td class="rowheader01">Anxious/Sad</td><td style="text-align: right">Medium</td><td style="text-align: right">Very Low</td><td style="text-align: right">Very Low</td><td style="text-align: right">Low</td></tr><tr><td class="rowheader01">Depression</td><td style="text-align: right">Low</td><td style="text-align: right">Low</td><td style="text-align: right">Low</td><td style="text-align: right">Low</td></tr><tr><td class="rowheader01">Calm</td><td style="text-align: right">Very Low</td><td style="text-align: right">Very Low</td><td style="text-align: right">Medium</td><td style="text-align: right">Very Low</td></tr><tr><td class="rowheader01">Contentment</td><td style="text-align: right">Low</td><td style="text-align: right">Low</td><td style="text-align: right">High</td><td style="text-align: right">Low</td></tr></tbody></table></p>',
                        '<p><br><b>Music can help you solve problems bette</b><br>You may have noticed this from your own experience – music provides power to solve problems and relieve the soul without harming your mental state, while sad music evokes a person’s compassion, and this person starts to feel The emotion of the lyrics produces compassion. At this time, the human brain regulates our emotional background. This can eliminate negative emotions and experiences without harming a person\'s mental health.<br><br><b>Music affects dopamine production</b><br> Dopamine is responsible for a person\'s good mood. It usually happens when you do what you like to do, participate in sports, or achieve your goals. Music also affects the production of this hormone.  Listening to your favorite music activates the production of this hormone in the brain.  Therefore, listening to music often can cheer you up in a short time,  and playing sports with the music will double your mood. <br> <br><b>Music relaxes you</b><br>The increase in cortisol levels is a problem in modern society. In short, this is a stress hormone, and reducing stress can be a challenge. However, playing the right music in the morning or at the end of the day can normalize the level of this hormone. Music can relieve stress. However, not all types of music are suitable for this purpose. It is believed that classical music such as Chopin’s masterpieces have especially beneficial effects on reducing blood cortisol and overall relaxation of body and mind.',
                        '<p>Some3body once told me the world is gonna roll me. I ain\'t the sharpest to',
                        
];