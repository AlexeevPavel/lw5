window.onload = function () {
	var tourName = $('.tour-name');
	var tourRating = $('.rating');
	var tourExpand = $('.expand');
	var tourPrice = $('.price');
	var tourImg = $('.img-tour');
	var tours =
		[{ id: 9, img: "img/tour_1.jpg", name: "Free tour Naples", rating: "4.9", expand: "The most popular Free tour we offer. This tour will bring you around the most important and ''must do and see'' highlights of the city of Rome. Highly recommended by many of our previous customers.", price: "€150" },
		{ id: 10, img: "img/tour_2.jpg", name: "Free city tour - Rome", rating: "4.4", expand: "We will start our free tour on Piazza Dante and make our way through the small streets of the center of Naples, you will see many highlights, like the Santa Chiara, the famous Spaccanapoli street, the Gesú with its strange worship of doctor Moscati.", price: "€250" },
		{ id: 11, img: "img/tour_3.jpg", name: "Free tour Istanbul", rating: "2.9", expand: "Our free city tour Istanbul starts Blue Mosque, aka Sultanahmet Mosque, the famous city gates to the old city. From here, your guide will take you around the greatest labyrinth of Istanbul called The Grand Bazaar, on the tour you will see mosques, markets, bazaars and much more...", price: "€290" },
		{ id: 12, img: "img/tour_4.jpg", name: "Free tour Lima", rating: "4.3", expand: "We will start our free tour on Piazza Dante and make our way through the small streets of the center of Naples, you will see many highlights, like the Santa Chiara, the famous Spaccanapoli street, the Gesú with its strange worship of doctor Moscati.", price: "€250" },
		{ id: 13, img: "img/tour_1.jpg", name: "Free tour Charli", rating: "4.9", expand: "We will start our free tour on Piazza Dante and make our way through the small streets of the center of Naples, you will see many highlights, like the Santa Chiara, the famous Spaccanapoli street, the Gesú with its strange worship of doctor Moscati.", price: "€250" }];
	$('#month td').click(function (event) {
		if (event.target.tagName == "TD") {
			for (var i = 0; tours[i] != undefined; i++) {
				if ($(this).html() == tours[i].id) {
					tourName.empty();
					tourName.append(tours[i].name);
					tourRating.empty();
					tourRating.append(tours[i].rating);
					tourExpand.empty();
					tourExpand.append(tours[i].expand);
					tourPrice.empty();
					tourPrice.append(tours[i].price);
					tourImg.empty();
					tourImg.attr("src", tours[i].img)
				}
			}
		}
	});

}