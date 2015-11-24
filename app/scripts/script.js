$(function() {
var sharelink = Object.create(Share);
sharelink.init('.share-links');

/* variables*/
var $w = $(window);

var headerHeight = $('header.header').height();
var viewportHeight = $(window).height() - headerHeight;

var $scrollmation = $('.scrollmation');
var $textOverMedia = $('.text-over-media');
var $scrollBackground = $('.scrollmation-background');
var $scrollTwoColumn = $('.scrollmation-two-column');

/* Generate navigation */
var $tocNav = $('.toc-nav').eq(0);
var $sections = $('.story').eq(0).find('section');
var $tocList = $('<ul/>', {
	'class': 'toc-list'
});

/*==Add Navigation=========*/
$sections.each(function(i) {
	$link = $('<a/>', {
		'href': '#section-' + (i+1)
	}).text(i+1);
	$li = $('<li/>').append($link);
	$tocList.append($li);
});
$tocNav.append($tocList);

/* Show/Hide Navigation */
var $smallMenu = $('.small-menu');
var $body = $('body');
$body.on('load click touch', function() {
	$tocNav.addClass('hide');
});
$smallMenu.on('click touch', function(e) {
	$tocNav.toggleClass('hide');
	e.stopPropagation();
});

$textOverMedia.each(function(index) {
	$(this).height(viewportHeight);
});

/*==================*/

var source1 = Rx.Observable.fromEvent($w, 'load');
var subscription1 = source1.subscribe(
	function (e) {
  	console.log($(e.currentTarget).height());
  	setHeight($scrollBackground, $scrollTwoColumn);
  	var watersheds = getHeight($scrollmation);
  	scrollmation(watersheds);
  	$w.on('scroll', function() {
  		scrollmation(watersheds);
  	})
	}
);

var source2 = Rx.Observable.fromEvent($w, 'resize');
var subscription2 = source2.subscribe(
	function (e) {
  	setHeight($scrollBackground, $scrollTwoColumn);
  	var watersheds = getHeight($scrollmation);
  	scrollmation(watersheds);
  	$w.on('scroll', function() {
  		scrollmation(watersheds);
  	})
	}
);

//Get the image source of `.story-cover` and put it as the background of `.story-header` so that the picture could flow with resizing while `wechat` could capture this image as thumbnail.
	$('.story-header').css('background-image', function() {
		return 'url(' + $('.story-cover').attr('src') + ')';
	});
});

function halfPadding (elmA, elmB) {
	 return elmA.innerHeight() < elmB.innerHeight() ? elmB.innerHeight() / 2 : undefined;
}

function setHeight ($bkg, $two) {
	var headerHeight = $('header.header').height();
	var viewportWidth = $(window).width();	
	var viewportHeight = $(window).height() - headerHeight;

	$bkg.each(function() {
		var $stickyElm = $(this).find('.sticky-element');
		var $flowElm = $(this).find('.flow-element');
//set min-hegiht on scrollmation-background element.
		$(this).css('min-height', viewportHeight);

		if (viewportWidth > 768) {
//set sticky-element as high as the viewport.
			$stickyElm.height(viewportHeight);

			if ($stickyElm.length > 0 && $flowElm.length > 0 && $flowElm.innerHeight() < $stickyElm.innerHeight()) {
				$flowElm.css({
					'padding-top': function() {
						return halfPadding($flowElm, $stickyElm);
					},
					'padding-bottom': function() {
						return halfPadding($flowElm, $stickyElm);
					}
				});
			}					
		} else {
			$stickyElm.removeAttr('style');
		}
	});

/**/
	$two.each(function() {
		var $flowElm = $(this).find('.flow-element');
		var $stickyElm = $flowElm.find('.sticky-element');	
		var flowElmHeight = $flowElm.innerHeight();
		var stickyElmHeight = $stickyElm.height();
		if ($stickyElm.length > 0 && flowElmHeight < stickyElmHeight) {
			$flowElm.css('min-height', stickyElmHeight);
		}	
	});
}

function getHeight($scrollmation) {
	var watersheds = [];
	$scrollmation.each(function() {
		var $flowElm = $(this).find('.flow-element');
		var $stickyElm = $(this).find('.sticky-element');
		var flowElmHeight = $flowElm.innerHeight();
		var stickyElmHeight = $stickyElm.height();
		var topLine = $flowElm.offset().top;
		var crossLine = topLine + flowElmHeight - stickyElmHeight;
		watersheds.push({
			$stickyElm: $stickyElm,
			$flowElm: $flowElm,
			flowElmHeight: flowElmHeight,
			stickyElmHeight: stickyElmHeight,
			topLine: topLine,
			crossLine: crossLine
		});
	});
	return watersheds;
}

function scrollmation (scroll) {
	var headerHeight = $('header.header').height()
	var scrollTop = $(window).scrollTop() + headerHeight;
	var viewportWidth = $(window).width();

	$.each(scroll, function() {
		if (viewportWidth > 768) {
			if (scrollTop <= this.topLine) {
				this.$stickyElm
						.removeClass('sticky-centered sticky-bottom')
						.addClass('sticky-top');
			} else if (scrollTop > this.topLine && scrollTop < this.crossLine) {
				this.$stickyElm
					.removeClass('sticky-top sticky-bottom')
					.addClass('sticky-centered');
			} else if (scrollTop >= this.crossLine) {
				this.$stickyElm
					.removeClass('sticky-top sticky-centered')
					.addClass('sticky-bottom');
			}	
		} else {
			this.$stickyElm.removeClass('sticky-top sticky-centered sticky-bottom');
		}
	});
}