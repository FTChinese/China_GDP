/* Dimensions */
function getScrollOffset(w) {
	w = w || window;
	if (w.pageXOffset != null) {
		return {x: pageXOffset, y: w.pageYOffset};
	}
	var d = w.document;
	if (document.compatMode == 'CSS1Compat') {
		return {x: d.documentElement.scrollLeft, y: d.documentElement.scrollTop};
	}
	return {x: d.body.scrollLeft, y: d.body.scrollTop};
}

function getViewportSize(w) {
	w = w || window;
	if (w.innerWidth != null) {
		return {w: w.innerWidth, h: w.innerHeight};
	}
	var d = w.document;
	if (document.compatMode == 'CSS1Compat') {
		return {
			w: d.documentElement.clientWidth,
			h: d.documentElement.clientHeight
		};
	}
	return {w: d.body.clientWidth, h: body.clientHeight};
}
function getElementPosition(e) {
	var x = 0;
	var y = 0;
	while (e != null) {
		x += e.offsetLeft;
		y += e.offsetTop;
		e = e.offsetParent;
	}
	return {x: x, y: y};
}