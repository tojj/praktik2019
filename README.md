## Code Convention

Verktyg/Bibliotek/NPM-Paket m.m:

React,
React-feather (Används om vi ska ha ikoner som vi själva inte skapat),
React-slick,
Axios,
Prop-types,
Redux,
Node.JS,
MongoDB,
Mongoose,
Express,
Git,
Bcrypt,
SASS,
React-Router-DOM,



Regler:

### GIT STRUKTUR:
master - pull request
develop - pull request
feature/<feature-branches> - fritt fram

1. Alla console.loggar ska tas bort innan man gör en Pull Request.

2. Komponenter eller dylikt som importeras och sedan inte används ska tas bort innan man gör en Pull Request det får alltså inte stå x is imported but never used (Inga react errors får finnas med)

3. Alla imports ska hanteras så här om du importerar mer än 1 sak, 

Fel: import {xxx, xxx, xxx, xxx,} from ./ xxxx

Rätt:  import {
		xxx,
		xxx,
		xxx,
		} from ./ xxxx

4. För att göra luft mellan varje funktion som görs och för att det ska se snyggare ut samt andra utvecklare ska förstå vad din funktion gör ska det skrivas information om funktionen över den likt så här (enligt javascript comment docs):




/**
*
* Siffra 7 kommer upp när denna funktionen körs.
*
*/

Funktion SkapaKlickEvent () {

5. Vettiga commit messege, dela upp commits så de blir tydliga.

6. Alltid 2 spaces INTE mer eller mindre i alla olika filtyper.

7. Håll din branch uppdaterad. 


Struktur:

Components: Src -> Components -> StartPage -> SASS, JS, Underkomponentsmapp -> SASS, JS

Images: Public


8. Alla classnamn och dylikt ska skrivas i kebab-case  tex: (header-wrapper)


