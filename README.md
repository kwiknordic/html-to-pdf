# CV from HTML to PDF

Live version hittas på: https://kwikapp.netlify.app/assets/CV-Mervin-Bratic.pdf

# Om projektet

Jag behövde ett CV vid jobbansökan och ansåg att ville då skapa hela CV:et med kod.

# Höjdpunkter
- Puppeteer-bibliotektet för att skapa PDF:en i Node.js
- Bredd/höjd enligt A4-format i CSS
- Flexbox och Grid för att positionerna layouten 

# Hur man använder
- Redigera template-filerna för att få till innehållet
- Lägg till ett CSS-block { border: 1px solid red } på body-elementet för att ha en visuell A4-brytpunkt
- Navigera till mappen "puppeteer" och kör kommandot "node index.js" i terminalen för att bygga PDF:en
