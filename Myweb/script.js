

var animateIn = 'animate__animated animate__fadeInDown'
var animateList = 'animate__animated ';
var animateMap = 'animate__animated animate__shakeX';
var effects = 'animate__animated animate__rubberBand';
var effectList = 'animate__animated animate__zoomOutLeft'
var effectContact = 'animate__animated animate__bounce'
var effectsEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';


$("#name").addClass(animateIn);

$('.mainName').hover(function() {
	$(this).addClass(effects).one(effectsEnd, function() {
		$(this).removeClass(effects);
	});
});

$('.list-animate').click(function() {
	if ( this.innerHTML == "CONTACT") {
		$('.footer-icon div.insta').addClass(effectContact).one(effectsEnd, function() {
			$('.footer-icon div.insta').removeClass(effectContact);
		});

		setTimeout(function() {
			$('.footer-icon div.twitter').addClass(effectContact).one(effectsEnd,
				function() {
					$('.footer-icon div.twitter').removeClass(effectContact);
			}
		)}, 50);

		setTimeout(function() {
			$('.footer-icon div.linkd').addClass(effectContact).one(effectsEnd,
				function() {
					$('.footer-icon div.linkd').removeClass(effectContact);
			}
		)}, 100);

		setTimeout(function() {
			$('.footer-icon div.mail').addClass(effectContact).one(effectsEnd,
				function() {
					$('.footer-icon div.mail').removeClass(effectContact);
			}
		)}, 150);

	}
	else {
		$(this).addClass(effectList).one(effectsEnd, function() {
			$(this).removeClass(effectList);
			window.location = this.innerHTML  + '.html';
		});
	}
});

$('.card-title').click(function () {
	$(this).addClass(animateMap).one(effectsEnd, function() {
		$(this).removeClass(animateMap);
	});
});
