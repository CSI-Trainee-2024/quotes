const fonts = [
  'Arial', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia', 
  'Palatino Linotype', 'Trebuchet MS', 'Impact', 'Comic Sans MS', 
  'Lucida Sans', 'Tahoma', 'Garamond'
];
fetch('trainees.json')
  .then(response => response.json())
  .then(data => {
      const container = document.getElementById('quotes-section'); 
      data.forEach((item, index) => {
          const font = fonts[Math.floor(Math.random() * fonts.length)]; 
          const quoteContainer = document.createElement('div');
          quoteContainer.className = 'quote-container';
          quoteContainer.style.fontFamily = font; 
          const quote = document.createElement('p');
          quote.className = 'quote';
          quote.innerText = `"${item.quote}"`;

          const name = document.createElement('p');
          name.className = 'name';
          name.innerText = `- ${item.name}`;

          const githubLink = document.createElement('a');
          githubLink.href = item.github;
          githubLink.innerText = 'GitHub Profile';
          githubLink.target = '_blank';
          githubLink.className = 'github-link'; 
          quoteContainer.appendChild(quote);
          quoteContainer.appendChild(name);
          quoteContainer.appendChild(githubLink);
          container.appendChild(quoteContainer);
      });
  })
  .catch(error => console.error('Error loading quotes:', error));
