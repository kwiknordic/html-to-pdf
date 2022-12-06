# CV from HTML to PDF

Live version hittas på: https://kwikapp.netlify.app/assets/CV-Mervin-Bratic.pdf

# Om projektet

Jag behövde ett aktuellt CV för framtida jobbansökan och kom till insikt att jag ville skapa layouten med CSS, och fylla innehållet med HTML. Lösningen är byggd med Node.js och använder npm-paketet Puppeteer för konverteringen till PDF.

# Höjdpunkter
- Puppeteer-bibliotektet för att skapa PDF:en i Node.js
- Bredd/höjd enligt A4-format i CSS
- Flexbox och Grid för att positionerna layouten 

# Hur man använder
- Redigera template-filerna för att få till innehållet
- Lägg till ett CSS-block { border: 1px solid red } på body-elementet för att ha en visuell A4-brytpunkt
- Starta live-server i VS-code med template-filen så att Puppeteer har åtkomst till dokumentet genom URL:en
- Navigera till mappen "puppeteer" och kör kommandot "node index.js" i terminalen för att bygga PDF:en
