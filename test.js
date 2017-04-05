
$(function() {
    


"use strict";

var $obj = {};

var $obj2 = {};

var err;

$obj2.first = localStorage.getItem('first');
$obj2.second = localStorage.getItem('second');
$obj2.third = localStorage.getItem('third');


		$(".checkBox1 input:checkbox").change(function () {

			$obj.first = ($(this).val());

		});


		$(".checkBox2 input:checkbox").change(function () {

			$obj.second = ($(this).val());

		});

		$(".checkBox3 input:checkbox").change(function () {

			$obj.third = ($(this).val());

		});


	$( "input:submit" ).on( "click", function() {


			try {

    			if ($obj.first == $obj2.first && $obj.second == $obj2.second && $obj.third == $obj2.third) {

    				
				var ddd = document.createElement('div');

				ddd.className = "ddd";

				ddd.innerHTML = "<span>Все верно!!! <p><a href=\"\">ok</a></p></span>";

				document.body.appendChild(ddd);


			} else if (!$obj.first) {

				throw new SyntaxError("Вы не ответили на 1 вопрос");


				} else if (!$obj.second) {

				throw new SyntaxError("Вы не ответили на 2 вопрос");

				} else if (!$obj.third) {

				throw new SyntaxError("Вы не ответили на 3 вопрос");


    			} else{

    				
    				var ddd = document.createElement('div');

					ddd.className = "ddd";

					ddd.innerHTML = "<span>Вы где то ошиблись(((<p><a href=\"\">ok</a></p></span>";

					document.body.appendChild(ddd);

					//throw new SyntaxError("Данные некорректны");


    			}

			} catch (e) {
  		
  				err = e.message;

  				alert(err);
			}			

	});

});

