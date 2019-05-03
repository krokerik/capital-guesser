var countries = [
{ name: "Abkhazia", capital: "Sukhumi" },
{ name: "Afghanistan", capital: "Kabul" },
{ name: "Albania", capital: "Tirana" },
{ name: "Algeria", capital: "Algiers" },
{ name: "Andorra", capital: "Andorra la Vella" },
{ name: "Angola", capital: "Luanda" },
{ name: "Antigua and Barbuda", capital: "St. John's" },
{ name: "Argentina", capital: "Buenos Aires" },
{ name: "Armenia", capital: "Yerevan" },
{ name: "Australia", capital: "Canberra" },
{ name: "Austria", capital: "Vienna" },
{ name: "Azerbaijan", capital: "Baku" },
{ name: "Bahamas", capital: "Nassau" },
{ name: "Bahrain", capital: "Manama" },
{ name: "Bangladesh", capital: "Dhaka" },
{ name: "Barbados", capital: "Bridgetown" },
{ name: "Belarus", capital: "Minsk" },
{ name: "Belgium", capital: "Brussels" },
{ name: "Belize", capital: "Belmopan" },
{ name: "Benin", capital: "Porto-Novo" },
{ name: "Bhutan", capital: "Thimphu" },
{ name: "Bolivia", capital: "La Paz" },
{ name: "Bosnia and Herzegovina", capital: "Sarajevo" },
{ name: "Botswana", capital: "Gaborone" },
{ name: "Brazil", capital: "Brasília" },
{ name: "Brunei", capital: "Bandar Seri Begawan" },
{ name: "Bulgaria", capital: "Sofia" },
{ name: "Burkina Faso", capital: "Ouagadougou" },
{ name: "Burundi", capital: "Bujumbura" },
{ name: "Cambodia", capital: "Phnom Penh" },
{ name: "Cameroon", capital: "Yaoundé" },
{ name: "Canada", capital: "Ottawa" },
{ name: "Cape Verde", capital: "Praia" },
{ name: "Central African Republic", capital: "Bangui" },
{ name: "Chad", capital: "N'Djamena" },
{ name: "Chile", capital: "Santiago" },
{ name: "China", capital: "Beijing" },
{ name: "Colombia", capital: "Bogotá" },
{ name: "Comoros", capital: "Moroni" },
{ name: "Congo-Brazzaville", capital: "Brazzaville" },
{ name: "Congo-Kinshasa", capital: "Kinshasa" },
{ name: "Cook Islands", capital: "Avarua" },
{ name: "Costa Rica", capital: "San José" },
{ name: "Croatia", capital: "Zagreb" },
{ name: "Cuba", capital: "Havana" },
{ name: "Cyprus", capital: "Nicosia" },
{ name: "Czech Republic", capital: "Prague" },
{ name: "Denmark", capital: "Copenhagen" },
{ name: "Djibouti", capital: "Djibouti" },
{ name: "Dominica", capital: "Roseau" },
{ name: "Dominican Republic", capital: "Santo Domingo" },
{ name: "East Timor", capital: "Dili" },
{ name: "Ecuador", capital: "Quito" },
{ name: "Egypt", capital: "Cairo" },
{ name: "El Salvador", capital: "San Salvador" },
{ name: "Equatorial Guinea", capital: "Malabo" },
{ name: "Eritrea", capital: "Asmara" },
{ name: "Estonia", capital: "Tallinn" },
{ name: "Ethiopia", capital: "Addis Ababa" },
{ name: "Fiji", capital: "Suva" },
{ name: "Finland", capital: "Helsinki" },
{ name: "France", capital: "Paris" },
{ name: "Gabon", capital: "Libreville" },
{ name: "Gambia", capital: "Banjul" },
{ name: "Georgia", capital: "Tbilisi" },
{ name: "Germany", capital: "Berlin" },
{ name: "Ghana", capital: "Accra" },
{ name: "Greece", capital: "Athens" },
{ name: "Grenada", capital: "St. George's" },
{ name: "Guatemala", capital: "Guatemala City" },
{ name: "Guinea", capital: "Conakry" },
{ name: "Guinea-Bissau", capital: "Bissau" },
{ name: "Guyana", capital: "Georgetown" },
{ name: "Haiti", capital: "Port-au-Prince" },
{ name: "Honduras", capital: "Tegucigalpa" },
{ name: "Hungary", capital: "Budapest" },
{ name: "Iceland", capital: "Reykjavík" },
{ name: "India", capital: "New Delhi" },
{ name: "Indonesia", capital: "Jakarta" },
{ name: "Iran", capital: "Teheran" },
{ name: "Iraq", capital: "Baghdad" },
{ name: "Ireland", capital: "Dublin" },
{ name: "Israel", capital: "Jerusalem" },
{ name: "Italy", capital: "Rome" },
{ name: "Ivory Coast", capital: "Yamoussoukro" },
{ name: "Jamaica", capital: "Kingston" },
{ name: "Japan", capital: "Tokyo" },
{ name: "Jordan", capital: "Amman" },
{ name: "Kazakhstan", capital: "Astana" },
{ name: "Kenya", capital: "Nairobi" },
{ name: "Kiribati", capital: "Tarawa" },
{ name: "Kosovo", capital: "Pristina" },
{ name: "Kuwait", capital: "Kuwait City" },
{ name: "Kyrgyzstan", capital: "Bishkek" },
{ name: "Laos", capital: "Vientiane" },
{ name: "Latvia", capital: "Riga" },
{ name: "Lebanon", capital: "Beiru" },
{ name: "Lesotho", capital: "Maseru" },
{ name: "Liberia", capital: "Monrovia" },
{ name: "Libya", capital: "Tripoli" },
{ name: "Liechtenstein", capital: "Vaduz" },
{ name: "Lithuania", capital: "Vilnius" },
{ name: "Luxembourg", capital: "Luxembourg" },
{ name: "Macedonia", capital: "Skopje" },
{ name: "Madagascar", capital: "Antananarivo" },
{ name: "Malawi", capital: "Lilongwe" },
{ name: "Malaysia", capital: "Kuala Lumpur" },
{ name: "Maldives", capital: "Malé" },
{ name: "Mali", capital: "Bamako" },
{ name: "Malta", capital: "Valetta" },
{ name: "Marshall Islands", capital: "Majuro" },
{ name: "Mauritania", capital: "Nouakchott" },
{ name: "Mauritius", capital: "Port Louis" },
{ name: "Mexico", capital: "Mexico City" },
{ name: "Micronesia", capital: "Palikir" },
{ name: "Moldova", capital: "Chișinău" },
{ name: "Monaco", capital: "Monaco" },
{ name: "Mongolia", capital: "Ulaanbaatar" },
{ name: "Montenegro", capital: "Podgorica" },
{ name: "Morocco", capital: "Rabat" },
{ name: "Mozambique", capital: "Maputo" },
{ name: "Myanmar", capital: "Naypyidaw" },
{ name: "Nagorno-Karabakh", capital: "Stepanakert" },
{ name: "Namibia", capital: "Windhoek" },
{ name: "Nauru", capital: "Yaren" },
{ name: "Nepal", capital: "Kathmandu" },
{ name: "Netherlands", capital: "Amsterdam" },
{ name: "New Zealand", capital: "Wellington" },
{ name: "Nicaragua", capital: "Managua" },
{ name: "Niger", capital: "Niamey" },
{ name: "Nigeria", capital: "Abuja" },
{ name: "Niue", capital: "Alofi" },
{ name: "Northern Cyprus", capital: "Nicosia" },
{ name: "North Korea", capital: "Pyongyang" },
{ name: "Norway", capital: "Oslo" },
{ name: "Oman", capital: "Muscat" },
{ name: "Pakistan", capital: "Islamabad" },
{ name: "Palau", capital: "Ngerulmud" },
{ name: "Palestine", capital: "Jerusalem" },
{ name: "Panama", capital: "Panama City" },
{ name: "Papua New Guinea", capital: "Port Moresby" },
{ name: "Paraguay", capital: "Asunción" },
{ name: "Peru", capital: "Lima" },
{ name: "Philippines", capital: "Manila" },
{ name: "Poland", capital: "Warsaw" },
{ name: "Portugal", capital: "Lisbon" },
{ name: "Qatar", capital: "Doha" },
{ name: "Romania", capital: "Bucharest" },
{ name: "Russia", capital: "Moscow" },
{ name: "Rwanda", capital: "Kigali" },
{ name: "Sahrawi Republic", capital: "El Aioun" },
{ name: "Saint Kitts and Nevis", capital: "Basseterre" },
{ name: "Saint Lucia", capital: "Castries" },
{ name: "Saint Vincent and the Grenadines", capital: "Kingstown" },
{ name: "Samoa", capital: "Apia" },
{ name: "San Marino", capital: "San Marino" },
{ name: "São Tomé and Príncipe", capital: "São Tomé" },
{ name: "Saudi Arabia", capital: "Riyadh" },
{ name: "Senegal", capital: "Dakar" },
{ name: "Serbia", capital: "Belgrade" },
{ name: "Seychelles", capital: "Victoria" },
{ name: "Sierra Leone", capital: "Freetown" },
{ name: "Singapore", capital: "Singapore" },
{ name: "Slovakia", capital: "Bratislava" },
{ name: "Slovenia", capital: "Ljubljana" },
{ name: "Solomon Islands", capital: "Honiara" },
{ name: "Somalia", capital: "Mogadishu" },
{ name: "Somaliland", capital: "Hargeisa" },
{ name: "South Africa", capital: "Pretoria" },
{ name: "South Korea", capital: "Seoul" },
{ name: "South Ossetia", capital: "Tskhinvali" },
{ name: "South Sudan", capital: "Juba" },
{ name: "Spain", capital: "Madrid" },
{ name: "Sri Lanka", capital: "Sri Jayawardenepura Kotte" },
{ name: "Sudan", capital: "Khartoum" },
{ name: "Suriname", capital: "Paramaribo" },
{ name: "Swaziland", capital: "Lobamba" },
{ name: "Sweden", capital: "Stockholm" },
{ name: "Switzerland", capital: "Bern" },
{ name: "Syria", capital: "Damascus" },
{ name: "Taiwan", capital: "Taipei" },
{ name: "Tajikistan", capital: "Dushanbe" },
{ name: "Tanzania", capital: "Dodoma" },
{ name: "Thailand", capital: "Bangkok" },
{ name: "Togo", capital: "Lomé" },
{ name: "Tonga", capital: "Nukuʻalofa" },
{ name: "Transnistria", capital: "Tiraspol" },
{ name: "Trinidad and Tobago", capital: "Port of Spain" },
{ name: "Tunisia", capital: "Tunis" },
{ name: "Turkey", capital: "Ankara" },
{ name: "Turkmenistan", capital: "Ashgabat" },
{ name: "Tuvalu", capital: "Funafuti" },
{ name: "Uganda", capital: "Kampala" },
{ name: "Ukraine", capital: "Kiev" },
{ name: "United Arab Emirates", capital: "Abu Dhabi" },
{ name: "United Kingdom", capital: "London" },
{ name: "United States", capital: "Washington, D.C." },
{ name: "Uruguay", capital: "Montevideo" },
{ name: "Uzbekistan", capital: "Tashkent" },
{ name: "Vanuatu", capital: "Port Vila" },
{ name: "Vatican City", capital: "Vatican City" },
{ name: "Venezuela", capital: "Caracas" },
{ name: "Vietnam", capital: "Hanoi" },
{ name: "Yemen", capital: "Sana'a" },
{ name: "Zambia", capital: "Lusaka" },
{ name: "Zimbabwe", capital: "Harare" }
]
window.onload = function(){
	for (var pair in countries) {
		var shorter, longer;
		if(countries[pair].name.length>=countries[pair].capital.length) {
			longer  = countries[pair].name.toUpperCase();
			shorter = countries[pair].capital.toUpperCase();
		} else {
			longer  = countries[pair].capital.toUpperCase();
			shorter = countries[pair].name.toUpperCase();
		}
		countries[pair].needlemanWunsch = needlemanWunsch(shorter,longer);
		countries[pair].hamming = hammingDistance(longer,shorter);
	}

	countries.sort(resCompare);

	var table = document.getElementById("result");
	for (var pair in countries) {
		var row = document.createElement("tr");
		var pos = document.createElement("td");
		var needlemanWunschScore = document.createElement("td");
		var hamming = document.createElement("td");
		var country = document.createElement("td");
		var capital = document.createElement("td");
		pos.appendChild(document.createTextNode(pair));
		needlemanWunschScore.appendChild(document.createTextNode(countries[pair].needlemanWunsch));
		hamming.appendChild(document.createTextNode(countries[pair].hamming));
		country.appendChild(document.createTextNode(countries[pair].name));
		capital.appendChild(document.createTextNode(countries[pair].capital));
		row.appendChild(pos);
		row.appendChild(needlemanWunschScore);
		row.appendChild(hamming);
		row.appendChild(country);
		row.appendChild(capital);
		table.appendChild(row);
	}
}

function resCompare(a,b) {
	return a.needlemanWunsch - b.needlemanWunsch;
}

function needlemanWunsch(reference, candidate){
	const correct    = 0;
	const wrong      = 4;
	const create_gap = 2;
	const extend_gap = 3;

	var matrix = new Array(candidate.length+2);

	for(var i=0; i<matrix.length; i++) {
		matrix[i] = new Array(reference.length+2);
		if(i == 0) {
			matrix[i][0] = ' ';
			matrix[i][1] = '-';
			for(var j=2; j<matrix[i].length; j++) {
				matrix[i][j] = reference[j-2];
			}
		} else if(i == 1) {
			matrix[i][0] = '-';
			// Initialize first row.
			for(var j=1; j<matrix[i].length; j++) {
				matrix[i][j] = 0;
			}
		} else {
			matrix[i][0] = candidate[i-2];
			matrix[i][1] = i-1; // Initialize first column.

			for(var j=2; j<matrix[i].length; j++) {
				var score, temp;
				// 1) the penalty score on comparing the characters in the two strings,
				//    plus the value in the diagonally up-left element.
				score = (matrix[i][0] == matrix[0][j]?correct:wrong) + matrix[i-1][j-1];
				// 2) The penalty to introduce or extend a gap, plus the value in the
				//    element above.
				temp  = create_gap + matrix[i-1][j];
				score = temp<score?temp:score;
				// 3) The penalty to introduce or extend a gap, plus the value in the
				//    element to the left.
				temp  = extend_gap + matrix[i][j-1];
				score = temp<score?temp:score;

				matrix[i][j]=score;
			}
		}
	}
	var min = matrix[matrix.length-1][1]
	for(var i=1; i<matrix[matrix.length-1].length; i++) {
		min = matrix[matrix.length-1][i]<min?matrix[matrix.length-1][i]:min;
	}
	return min;
}

//Only works on strings of equal length normally
function hammingDistance(longer,shorter) {
	var sum = 0;

	for(var i=0; i<shorter.length; i++) {
		if(longer[i]!=shorter[i]) {
			sum++;
		}
	}

	return sum;
}