SAMMANFATTNING:
I det stora hela har jag försökt på lärarens begäran göra min sida så identisk till den skiss vi skulle utgå ifrån. Den uppfyller alla kraven och jag har försökt förhålla mig till de mått som är använt på referenssidan. Små nuggets är utplacerade för att sätta min egen prägel på den. Ingenting är i princip kopierat förutom vissa färger utan till bästa mån efterliknat via ögonmått. Jag har även slängt in en extra funktion där jag faktist använt JS, vilket är att man kan klicka på "hamburgerikonen" för att fälla in navigationen i headern. Detta gick förstås att göra i CSS men gjorde det hela mer osemantiskt. Och då det inte var ett krav att kunna toggla så gjorde jag det som en extra feature i JS. Det var utmanande utan att få använda JS och i de fall som "light/dark" så är det omständigt och mycket css-skrivande om man ska hålla det semantiskt och utan JS. Vad gäller brister så är det för mig ganska tidskrävande om man bara ska använda CSS, fastän man kan åstakomma mycket, och det är mer effektivt och mindre att hålla koll på om man får lägga in JS. Men i det hela så har det gått ganska smidigt. Jag tycker dock det kan vara svårt med BEM pga ovana. Det är också svårt med så många och långa klassnamn att exempelvis snabbt hitta överblickande struktur i andras kod. Förståeligt en vanesak. länk till netlify: https://portfoliosimonkane.netlify.app/

---

1.Vad är HTML och dess roll inom frontend? Vad menas med semantiskt html?

     HTML står för Hypertext markup language och är grunden för Front end. Det är själva strukturen och ramen för en websida eller applikation. Man använder sig av olika element eller taggar för att strukturera upp innehållet i en sida. Dessa taggar är en grundstruktur som man sedan kan ändra och styla. Detta görs genom möjligheten att koppla ihop annat som en CSS-fil för att kunna styla de olika elementen eller en Javascript-fil för att kunna bestämma funktionen och dynamiskt kunna ändra en sida. Semantisk html innebär att användandet av element ska vara ganska självförklarande. DVS att använda rätt element och tag på rätt ställe. Exempelvis om man ska göra en "header" så använder man sig just av elementet <header>, och inte exempelvis <div class="header">. Detta för att underlätta för andra att förstå din uppbyggnad, men också för att skärmläsare ska ha lättare att gå igenom din kod och förstå den. Det underlättar också SEO att ha en bra semantik på sin sida.

2.Vad är CSS och dess roll inom frontend?

    CSS står för Cascading style sheet och är det som kopplas ihop med en HTML för att kunna styla och göra olika layouts för sidan. Det används alltså för att visa hur olika saker som finns i HTML ska presenteras. Man tar en tag eller element, via antingen elementens riktiga namn eller så fördelar man själv ett klassnamn, och deklararen den i sin CSS-fil. Där kan man sedan ändra storlek, färg, beteende och massa andra olika saker. Man kan exempelvis använda CSS för att göra en sida responsiv samt göra olika animationer som bestämmer hur ett element ska bete sig eller röra sig. Det är via CSS man gör en hemsida presentabel och snygg för användaren. Det ska tilläggas att man även kan styla sina element direkt i HTML via att lägga in attribut i taggen.

3. Vad menas med responsiv design samt med vilka metoder man kan utveckla responsiva sidor?

   Att en sida har responsiv design innebär att den beter sig olika och passar oavsett på vad för enhet eller storlek på skärm som användaren brukar. En layout kan se annorlunda ut på en datorskärm kontra en mobilskärm, trots att det är samma sida man är inne på. Man kan ha olika mått som bestämmer olika lägen elementen på sidan ska presenteras på. Detta görs via breaking points. Man kan också göra en mer flytande layout där elementen ändrar sig succesivt då man ändrar storlek på rutan som sidan visas i. Metoder för att utveckla responsiva sidor varierar. Media Queries är ett sätt att deklarera just olika "breaking points" i css där man skriver olika regler för olika element beroende på storleken på skärm. Man kan också göra just en mer flytande layout där man i css använder sig av %, em eller rem som enheter för att få elementen att anpassa sig efter sina föräldraelement eller rentav sidans storlek beroende på skärm. Det finns också frameworks för detta, så som bootstrap som underlättar responsiviteten genom att man kan ge sina element i sin HTML olika namn som avgör hur de ska presentera sig och bete sig på sidan. I HTML finns även en tag som ser till att sidan skalas och på olika enheter. Det är en <meta>-tag: <meta name="viewport" content="width=device-width, initial-scale=1.0">.
