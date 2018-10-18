$(function() {
	$('#noteButton').click(function() {
		//Vérifier que les notes sont des notes
		note1 = parseInt($('#note1').val());
		note2 = parseInt($('#note2').val());
		note3 = parseInt($('#note3').val());
		note4 = parseInt($('#note4').val());
		note5 = parseInt($('#note5').val());
		erreurQuelquePart = false;
		/*for (var i = 0 ; i < 5; i++) {
			if (isNaN(note[i]) || 'note'+i < 0 || 'note'+i > 0) {
				console.log(note[i])
				console.log('erreur');
			} else {
				console.log(note[i])
				console.log('Dans le else');
			}
		}*/
		if (isNaN(note1) || note1 < 0 || note1 > 20) {
			erreurQuelquePart = true;
		} else if (isNaN(note2) || note2 < 0 || note2 > 20) {
			erreurQuelquePart = true;
		} else if (isNaN(note3) || note3 < 0 || note3 > 20) {
			erreurQuelquePart = true;
		} else if (isNaN(note4) || note4 < 0 || note4 > 20) {
			erreurQuelquePart = true;
		} else if (isNaN(note5) || note5 < 0 || note5 > 20) {
			erreurQuelquePart = true;
		} else {
			average = (note1+note2+note3+note4+note5)/5;
			console.log('average = '+average);
			switch (true) {
				case (average < 10):
					$('#message').text('Vous avez une moyenne de '+average+'.\nC\'est en dessous de la moyenne.').css('color','#F00');
					break;
				case (average >= 10 && average < 13):
					$('#message').text('Vous avez une moyenne de '+average+'.\nC\'est moyen.').css('color','#F80');
					break;
				case (average >= 13 && average < 16):
					$('#message').text('Vous avez une moyenne de '+average+'.\nC\'est bien.').css('color','#0B0');
					break;
				case (average >= 16 && average < 20):
					$('#message').text('Vous avez une moyenne de '+average+'.\nC\'est très bien !').css('color','#4F4');
					break;
				case (average == 20):
					$('#message').text('Vous avez une moyenne de '+average+'.\nC\'est excellent !').css('color','#FF0');
					break;
			}
		}
		if (erreurQuelquePart) {
			$('#message').text('Veuillez rentrez 5 notes entre 0 et 20').css('color','#F00');
		}
	});
});