fetch('https://cat-fact.herokuapp.com/facts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .then(data => {
    const catFactsContainer = document.getElementById('catFactsContainer');
    data.forEach(fact => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.textContent = fact.text;
      catFactsContainer.appendChild(card);

      //  event listeners 
      card.addEventListener('click', () => {
        handleCardClick(fact);
      });

      card.addEventListener('mouseenter', () => {
        handleCardMouseEnter(card);
      });

      card.addEventListener('mouseleave', () => {
        handleCardMouseLeave(card);
      });
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Function to handle card click event
function handleCardClick(fact) {
  console.log('Clicked on card:', fact);
 
}

// Function to handle card mouse enter event
function handleCardMouseEnter(card) {
  card.classList.add('highlight');
 
}

// Function to handle card mouse leave event
function handleCardMouseLeave(card) {
  card.classList.remove('highlight');
  
}
