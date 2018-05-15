'use strict'

window.onload = function () {
	var tourName = $('.tour-name');
	var tourRating = $('.rating');
	var tourExpand = $('.expand');
	var tourPrice = $('.price');
	var tourImg = $('.img-tour');
	var tour = $('.books');
	var nine = [{ img: "img/tour_1.jpg", name: "Free tour Naples", rating: "2.9", expand: "Our free city tour Istanbul starts Blue Mosque, aka Sultanahmet Mosque, the famous city gates to the old city. From here, your guide will take you around the greatest labyrinth of Istanbul called The Grand Bazaar, on the tour you will see mosques, markets, bazaars and much more...", price: "€290" },
	{ img: "img/tour_2.jpg", name: "Free city tour - Rome", rating: "4.4", expand: "We will start our free tour on Piazza Dante and make our way through the small streets of the center of Naples, you will see many highlights, like the Santa Chiara, the famous Spaccanapoli street, the Gesú with its strange worship of doctor Moscati.", price: "€250" },
	{ img: "img/tour_3.jpg", name: "Free tour Istanbul", rating: "2.9", expand: "Our free city tour Istanbul starts Blue Mosque, aka Sultanahmet Mosque, the famous city gates to the old city. From here, your guide will take you around the greatest labyrinth of Istanbul called The Grand Bazaar, on the tour you will see mosques, markets, bazaars and much more...", price: "€290" }];
	var ten = [{ img: "img/tour_4.jpg", name: "Free tour Lima", rating: "4.3", expand: "Our guides are more then happy to show you around and give you all the info you need to have a pleasant stay in the always alive city in Peru.	Let our guides show you around and get lots of information about where to go and what to do in Lima.", price: "€250" },
	{ img: "img/tour_5.jpg", name: "Free tour Bkk", rating: "3", expand: "Our guides are more then happy to show you around and give you all the info you need to have a pleasant stay in the land of the smile. Let us show you a different side of Bangkok through our local residents who live and spend most of their time living in BKK", price: "€450" }];
	var eleven = 0;
	var twelve = [{ img: "img/tour_2.jpg", name: "Free city tour - Rome", rating: "4.4", expand: "We will start our free tour on Piazza Dante and make our way through the small streets of the center of Naples, you will see many highlights, like the Santa Chiara, the famous Spaccanapoli street, the Gesú with its strange worship of doctor Moscati.", price: "€250" },
	{ img: "img/tour_3.jpg", name: "Free tour Istanbul", rating: "2.9", expand: "Our free city tour Istanbul starts Blue Mosque, aka Sultanahmet Mosque, the famous city gates to the old city. From here, your guide will take you around the greatest labyrinth of Istanbul called The Grand Bazaar, on the tour you will see mosques, markets, bazaars and much more...", price: "€290" }];
	var thirteen = [{ img: "img/tour_1.jpg", name: "Free tour Naples", rating: "2.9", expand: "Our free city tour Istanbul starts Blue Mosque, aka Sultanahmet Mosque, the famous city gates to the old city. From here, your guide will take you around the greatest labyrinth of Istanbul called The Grand Bazaar, on the tour you will see mosques, markets, bazaars and much more...", price: "€290" },
	{ img: "img/tour_2.jpg", name: "Free city tour - Rome", rating: "4.4", expand: "We will start our free tour on Piazza Dante and make our way through the small streets of the center of Naples, you will see many highlights, like the Santa Chiara, the famous Spaccanapoli street, the Gesú with its strange worship of doctor Moscati.", price: "€250" },
	{ img: "img/tour_3.jpg", name: "Free tour Istanbul", rating: "2.9", expand: "Our free city tour Istanbul starts Blue Mosque, aka Sultanahmet Mosque, the famous city gates to the old city. From here, your guide will take you around the greatest labyrinth of Istanbul called The Grand Bazaar, on the tour you will see mosques, markets, bazaars and much more...", price: "€290" },
	{ img: "img/tour_4.jpg", name: "Free tour Lima", rating: "4.3", expand: "Our guides are more then happy to show you around and give you all the info you need to have a pleasant stay in the always alive city in Peru.	Let our guides show you around and get lots of information about where to go and what to do in Lima.", price: "€250" },
	{ img: "img/tour_5.jpg", name: "Free tour Bkk", rating: "3", expand: "Our guides are more then happy to show you around and give you all the info you need to have a pleasant stay in the land of the smile. Let us show you a different side of Bangkok through our local residents who live and spend most of their time living in BKK", price: "€450" }];
	var tours = [{ id: 9, date: nine },
	{ id: 10, date: ten },
	{ id: 11, date: eleven },
	{ id: 12, date: twelve },
	{ id: 13, date: thirteen }];
	var info = ' ';

	$('.button-book').click(function (event) {
		var save = { tourName, tourRating, tourExpand, tourPrice, tourImg }
		sessionStorage.setItem('tour', save);
		alert('Tour booking');
	});

	$('#month td').click(function (event) {
		if (event.target.tagName == "TD") {
			for (var i = 0; tours[i] != undefined; i++) {
				if ($(this).html() == tours[i].id) {
					var f = tours[i].date;					
					if (f != 0) {
						tour.empty();						
						for (var j = 0; f[j] != undefined; j++){	
							var info = '<div id="one-tour">' +
								'<div class="tour-name">' +
								'		' + tours[i].id + ' May, 2018   ' + f[j].name + '' +
								'</div>' +
								'<div class="info">' +
								'	<div>' +
								'	<div class="text">' +
								'			<div class="info-tour">' +
								'				<label>Language:</label>' +
								'				<div class="lang"> English</div>' +
								'				<label>Rating: </label>' +
								'				<div class="rating">' + f[j].rating + '</div>' +
								'				<label>Price: </label>' +
								'				<div class="price">' + f[j].price + '</div>' +
								'			</div>' +
								'			<div class="expand">' + f[j].expand + '</div>' +
								'		</div>' +
								'		<input class="button-book" type="button" value="Buy">' +
								'	</div>' +
								'	<img src="' + f[j].img + '" alt="" class="img-tour">' +
								'</div>' +
								'</div>';					
							tour.append(info);}
					}
					else
						tour.empty();
				};
			};
		};
	});
}