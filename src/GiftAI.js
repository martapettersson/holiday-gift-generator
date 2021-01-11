const giftDict = {
	aaa: "Cool T-Shirt",
	baa: "Cool Hoody",
	caa: "Warm Socks",
	aba: "Star Wars figure",
	bba: "Marvel T-Shirt",
	cba: "Smart Home Component",
	aca: "Coloring Book",
	bca: "Screwdriver",
	cca: "Knitting Kit",
	aab: "Fashionable Clothing",
	bab: "Branded Jewellry",
	cab: "Nice Hat",
	abb: "Something from Teknikmagasinet",
	bbb: "Something from Webhallen",
	cbb: "Something from Mediamarkt",
	acb: "Something from Panduro",
	bcb: "Something from a store located in Södermalm",
	ccb: "Crafts Table",
	aac: "Something from Glitter",
	bac: "Something from Rituals",
	cac: "Something from Guldfynd",
	abc: "RC Car",
	bbc: "Smart Home Sockets",
	cbc: "Wifi Lamps",
	acc: "Get started with Molding Kit",
	bcc: "Sewing Kit",
	ccc: "A bag of cement",
};

/* 
Här är objektet GiftAI som innehåller funktionen calculate 
som vi definerar där på en gång.

calculate hämtar ut det som ligger på key:n i giftDict.
I ResultPage importerar jag in objektet GiftAI 
skriver .calculate(code) , alltså skickar in code som parameter,
och mha syntaxen object[key] så kan man komma åt värdet key:n innehåller
Det vi gör är alltså att kikar in i objektet giftDict 
och kollar på platsen som är samma som code´s värde
*/

export const GiftAI = {
	calculate: (code) => {
		return giftDict[code];
	},
};
