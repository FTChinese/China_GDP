
var wHeight = window.innerHeight;
var headerHeight = document.querySelector('header.header').offsetHeight;
var yOffset = window.pageYOffset + headerHeight;
var scrollContainers = document.querySelectorAll('.scrollmation');
var textOverMedia = document.querySelectorAll('.text-over-media');
var topY = [];
var crossY = [];
var stickyElms = [];

/* set height of text-over-media */
for (var i = 0; i < textOverMedia.length; i++) {
	textOverMedia[i].style.height = wHeight - headerHeight + 'px';
}

for (var j = 0; j < scrollContainers.length; j++) {
	var scrollContainer = scrollContainers[j];
	var stickyElm = scrollContainer.querySelector('.sticky-element');
	var flowElm = scrollContainer.querySelector('.flow-element');

	if (stickyElm && flowElm) {
		if (scrollContainer.classList.contains('scrollmation-background')) {
	/* set minimum height for scrollmation*/
			scrollContainer.style.minHeight = wHeight - headerHeight + 'px';
	/* set sticky element as high as the viewport */
			stickyElm.style.height = wHeight - headerHeight + 'px';

			var tempFlowElmHeight = flowElm.offsetHeight;
			var tempStickyElmHeight = stickyElm.offsetHeight;
	/* if flow element is lower than sticky element, then add padding*/
			if (tempFlowElmHeight < tempStickyElmHeight) {
				var flowElmPad = stickyElmHeight / 2 + 'px';
				flowElm.style.paddingTop = flowElmPad;
				flowElm.style.paddingBottom = flowElmPad;
			}
		}
	// refresh height values 
		var flowElmHeight = flowElm.offsetHeight;
		var stickyElmHeight = stickyElm.offsetHeight;
	// If flow element is lower than sticky element, then we do not need to apply scrollmation 
		if (flowElmHeight > stickyElmHeight) {
			// The getElementPosition function comes from utilities.js
			stickyElms.push(stickyElm);

			var pos = getElementPosition(flowElm);
			topY.push(pos.y);
			crossY.push(pos.y + flowElmHeight - stickyElmHeight);				
		}
	}
}

for (var i = 0; i < stickyElms.length; i++) {
	var stickyElement = stickyElms[i];
	if (yOffset <= topY[i]) {
		stickyElement.classList.add('sticky-top');
		stickyElement.classList.remove('sticky-centered', 'sticky-bottom');
		
	} else if (yOffset > topY[i] && yOffset < crossY[i]) {
		stickyElement.classList.add('sticky-centered');
		stickyElement.classList.remove('sticky-top', 'sticky-bottom');
	} else if (yOffset >= crossY[i]) {
		stickyElement.classList.add('sticky-bottom');
		stickyElement.classList.remove('sticky-top', 'sticky-centered');
	}	
}

window.addEventListener('scroll', function() {
	for (var i = 0; i < stickyElms.length; i++) {
		var stickyElement = stickyElms[i];

		var yOffset = window.pageYOffset + headerHeight;

		if (yOffset <= topY[i]) {
			stickyElement.classList.add('sticky-top');
			stickyElement.classList.remove('sticky-centered', 'sticky-bottom');
			
		} else if (yOffset > topY[i] && yOffset < crossY[i]) {
			stickyElement.classList.add('sticky-centered');
			stickyElement.classList.remove('sticky-top', 'sticky-bottom');
		} else if (yOffset >= crossY[i]) {
			stickyElement.classList.add('sticky-bottom');
			stickyElement.classList.remove('sticky-top', 'sticky-centered');
		}
	}
});



/*


var sb = document.querySelectorAll('.scrollmation')[0];
console.log(sb);

var fe = sb.querySelector('.flow-element');
var se = sb.querySelector('.sticky-element');

var feh = fe.offsetHeight;
console.log('flow element height: ' + feh);
var seh = se.offsetHeight;
console.log('stikcy element height: ' + seh);

var pos = getElementPosition(fe);
console.log(pos);

var topY = pos.y;
console.log('top: ' + topY);
var gap = feh - seh;
console.log('gap: ' + gap);
var cross = topY + (feh - seh);
console.log('middle: ' + cross);
var bottomY = topY + feh;
console.log('bottom: ' + bottomY);

console.log('static offset: ' + window.pageYOffset);

window.addEventListener('scroll', function() {
	var yOffset = window.pageYOffset + headerHeight;
	console.log('scrolled yOffset: ' + yOffset);
	if (yOffset <= topY) {
		console.log('should be top aligned');
		se.classList.add('sticky-top');
		se.classList.remove('sticky-centered', 'sticky-bottom');
	} else if (yOffset > topY && yOffset < cross) {
		console.log('should be fixed');
		se.classList.add('sticky-centered');
		se.classList.remove('sticky-top', 'sticky-bottom');
	} else if (yOffset >= cross) {
		console.log('should be bottom aligned');
		se.classList.add('sticky-bottom');
		se.classList.remove('sticky-top', 'sticky-centered');
	}
});
*/