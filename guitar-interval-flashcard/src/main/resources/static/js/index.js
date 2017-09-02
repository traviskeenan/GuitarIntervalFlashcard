var slideSpeed = 300;
	var noteToShow = "All";
	var correctAnswer = "";
	var canClick = true;
	
	var noteNumbers = [
		'1', 'b2', '2', 'b3', '3', '4', 'b5', 'b6', '6', 'b7', '7'
	]

	var notes = {
		e: ['5','b6','6','b7','7','1','b2','2','b3','3','4','b5','5'],
		a: ['1','b2','2','b3','3','4','b5','5','b6','6','b7','7','1'],
		d: ['4','b5','5','b6','6','b7','7','1','b2','2','b3','3','4'],
		g: ['b7','7','1','b2','2','b3','3','4','b5','5','b6','6','b7'],
		b: ['2','b3','3','4','b5','5','b6','6','b7','7','1','b2','2']
}

	for (var i=0; i < notes.e.length; i++){
		$('.mask.low-e ul').append('<li note='+notes.e[i]+'>'+notes.e[i]+'</li>')
		$('.mask.a ul').append('<li note='+notes.a[i]+'>'+notes.a[i]+'</li>')
		$('.mask.d ul').append('<li note='+notes.d[i]+'>'+notes.d[i]+'</li>')
		$('.mask.g ul').append('<li note='+notes.g[i]+'>'+notes.g[i]+'</li>')
		$('.mask.b ul').append('<li note='+notes.b[i]+'>'+notes.b[i]+'</li>')
		$('.mask.high-e ul').append('<li note='+notes.e[i]+'>'+notes.e[i]+'</li>')
	}

	$('.controls a.down').click(function(){
		if(!canClick){return false;}
		canClick = false;

		$('.mask').each(function(){
			var el = $(this);
			var nextNote = el.find('li:nth-child(12)').text();

			el.animate({right: -268}, slideSpeed);
			setTimeout(function(){
				el.find('ul').prepend( "<li note="+nextNote+">"+nextNote+"</li>" );
				el.find('li:last-child').remove();
				el.css({right: -189});
			}, slideSpeed+20)
		});

		setTimeout(function(){
			changeOpenNotes();
			showNotes(noteToShow);
			canClick = true;
		}, slideSpeed+20)
		
		return false;
	});

	$('.controls a.up').click(function(){
		if(!canClick){return false;}
		canClick = false;

		$('.mask').each(function(){
			var el = $(this);
			var nextNote = el.find('li:nth-child(2)').text();

			$( "<li note="+nextNote+">"+nextNote+"</li>" ).appendTo(el.find('ul'));
			el.css({right: -268});
			el.find('li:first-child').remove();
			el.animate({right: -189}, slideSpeed);
			
		});

		changeOpenNotes();
		showNotes(noteToShow);

		setTimeout(function(){
			canClick = true;
		}, slideSpeed+20)
		return false;
	});

	$('.controls li').click(function(){
		noteToShow = $(this).text();
		showNotes(noteToShow);
	});

	function showNotes(noteToShow){
		if(noteToShow == "All"){
			$('.guitar-neck .notes li').animate({opacity:1}, 500);
		} else {
			if(correctAnswer != "") {
				if(noteToShow == correctAnswer) {
					$.alert({
						type: 'green',
						useBootstrap: false,
						animation: 'none',
						boxWidth: '25%',
						title: 'Correct',
						content: 'Correct!',
						
					});
					// $.dialog('Just to let you know'); 
				} else {
					$.alert({
						type: 'red',
						useBootstrap: false,
						animation: 'none',
						boxWidth: '25%',
						title: 'SORRY',
						content: "The correct answer is: " + correctAnswer,
						
					});
				}
			}

			noteToShow = noteNumbers[Math.floor((Math.random() * 10) + 1)];
			correctAnswer = noteToShow;
			// alert("Random noteToShow: " + noteToShow);
			$('.guitar-neck .notes li').not('[note="'+noteToShow+'"]').animate({opacity:0}, 500);
			$('.guitar-neck .notes li').not('[note="'+"1"+'"]').animate({opacity:0}, 500);
			$('.guitar-neck .notes li[note="'+"1"+'"]').animate({opacity:1}, 500);
			$('.guitar-neck .notes li[note="'+"1"+'"]').css("background-color", "red");
			$('.guitar-neck .notes li[note="'+"1"+'"]').css("color", "red");
			$('.guitar-neck .notes li[note="'+noteToShow+'"]').animate({opacity:1}, 500);
			$('.guitar-neck .notes li[note="'+noteToShow+'"]').css("background-color", "black");
			$('.guitar-neck .notes li[note="'+noteToShow+'"]').css("color", "black");
		}	
	}

	function changeOpenNotes(){
		$('.notes .mask').each(function(){
			var el = $(this);
			var elClass = el.attr('class').split(' ')[1];
			var note = el.find('li:last-child').text();

			$('.open-notes .'+elClass).text(note);
		});
	}