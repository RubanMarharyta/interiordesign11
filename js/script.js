// Manipulations with active states

	  // Header Block
const header = document.querySelector('.header'),
	  headerHeight = getHeightOf(header),
	  burger = document.querySelector('.header__burger'),
	  navLinks = document.querySelectorAll('.nav__link'),
	  logos = document.querySelectorAll('.header__logo'),
	  nav = document.querySelector('.header__nav'),

	  // Body
	  body = document.querySelector('body'),

	  // Preview Block
	  preview = document.querySelector('.preview'),
	  previewHeight = getHeightOf(preview),

	  // Price Block
	  priceLinks = document.querySelectorAll('.price');
	  


burger.addEventListener('click', () => {
	if (isActive(burger)) {
		disactivate(burger)
		disactivate(nav)
		unlock(body)
	} else {
		activate(burger)
		activate(nav)
		lock(body)
	}
})


logos.forEach(logo => {
	logo.addEventListener('click', e => {
		e.preventDefault();

		window.scroll({
			top: 0,
			behavior: 'smooth',
		})
	})
})


priceLinks.forEach(link => {
	link.addEventListener('click', function(e) {
		e.preventDefault();

		if (isActive(link)) {
			disactivate(link)
		} else {
			massiveDisactivate(priceLinks)
			activate(this)
		}
	})
})



//  BAD CODE...


navLinks.forEach(link => {
	link.addEventListener('click', function(e) {
		e.preventDefault();

		const scrollTo = document.querySelector(`${link.dataset.scrollto}`)

		window.scroll({
			top: getOffsetOf(scrollTo).top - headerHeight,
			behavior: 'smooth',
		})

	})
})


let documentScrolledTop = getDocumentScrolledTop();

toggleFixationOnHeader();


document.addEventListener('scroll',	toggleFixationOnHeader);
document.addEventListener('orientationchange',	toggleFixationOnHeader);
document.addEventListener('resize',	toggleFixationOnHeader);


function toggleFixationOnHeader() {
	
	if (documentScrolledTop >= (previewHeight - headerHeight - 20)) {
		makeFixed(header);
	} else {
		makeAbsolute(header);
	}

	documentScrolledTop = getDocumentScrolledTop();
}


// Modules

// Lock element

function lock(element) {
	element.classList.add('_lock');
};


function unlock(element) {
	element.classList.remove('_lock');
};

// Fixed state

function makeAbsolute(element) {
	element.style.position = "absolute"
}

function makeFixed(element) {
	element.style.position = "fixed";
}


// Active state

function massiveDisactivate(mass) {
	mass.forEach(link => {
		disactivate(link);
	})
}

function isActive(element) {
	if (element.classList.contains('_active')) {
		return true;
	} else {
		return false;
	};
}


function activate(element) {
	element.classList.add('_active');
};


function disactivate(element) {
	element.classList.remove('_active');
};;


function getHeightOf(element) {
	return element.offsetHeight
}


function getOffsetOf(el) {
	const rect = el.getBoundingClientRect(),
		  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		  
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
}


function getDocumentScrolledTop() {
	return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}
;
// WEBP format 

function testWebP(callback) {

	var webP = new Image()
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2)
	}
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
};