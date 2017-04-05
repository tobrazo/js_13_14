
var header = document.createElement('div');

header.className = "headerText";

header.innerHTML = "<h2>Тест по программированию</h2>";

document.body.insertBefore(header, document.body.firstChild);


	var query1 = document.createElement('div');

	query1.className = "queryText";

	query1.innerHTML = "<p>1. В каком году был создан JavaScript?</p>";

	document.body.appendChild(query1);

	var checkFirst = document.createElement('div');

	checkFirst.className = "checkBox1";

	checkFirst.innerHTML = "<p><input type=\"checkbox\" name=\"\" value=\"1\">1995<br><input type=\"checkbox\" name=\"\" value=\"2\">1991<br><input type=\"checkbox\" name=\"\" value=\"3\">1988<br></p>";

	document.body.appendChild(checkFirst);


	var query2 = document.createElement('div');

	query2.className = "queryText";

	query2.innerHTML = "<p>2. Кем был написан JavaScript?</p>";

	document.body.appendChild(query2);

	var checkSec = document.createElement('div');

	checkSec.className = "checkBox2";

	checkSec.innerHTML = "<p><input type=\"checkbox\" name=\"\" value=\"4\">Брендан Эйх<br><input type=\"checkbox\" name=\"\" value=\"5\">Адольф Гитлер<br><input type=\"checkbox\" name=\"\" value=\"6\">Марк Аврелий<br></p>";


	document.body.appendChild(checkSec);


	var query3 = document.createElement('div');

	query3.className = "queryText";

	query3.innerHTML = "<p>3. Библиотека JavaScript?</p>";


	document.body.appendChild(query3);

	var checkThird = document.createElement('div');

	checkThird.className = "checkBox3";

	
	checkThird.innerHTML = "<p><input type=\"checkbox\" name=\"\" value=\"7\">jQuery<br><input type=\"checkbox\" name=\"\" value=\"8\">Zend<br><input type=\"checkbox\" name=\"\" value=\"9\">Django<br></p>";


	document.body.appendChild(checkThird);


		var button = document.createElement('div');

		button.className = "buttonResult";

		button.innerHTML = "<p><input type=\"submit\" value=\"Проверить мои результаты\"></p>";

		document.body.appendChild(button);

