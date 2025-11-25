function openNav() {

	var x = document.getElementById("navigation");

	if(x.className === "navigation"){
		x.className += " menujs";
		document.getElementById('threeline-icon').innerHTML = "&Cross;";

	}else{
		x.className = "navigation";
		document.getElementById('threeline-icon').innerHTML = "&#9776;";

	}

}

// Botão voltar ao topo
window.addEventListener('scroll', function() {
	var backToTop = document.querySelector('.back-to-top');
	if (backToTop) {
		if (window.pageYOffset > 300) {
			backToTop.classList.add('show');
		} else {
			backToTop.classList.remove('show');
		}
	}
});

// Animações de scroll
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
		}
	});
}, observerOptions);

// Aplicar animações aos elementos
document.addEventListener('DOMContentLoaded', function() {
	const fadeElements = document.querySelectorAll('.fade-in, .miniatura, .cv-section');
	fadeElements.forEach(el => {
		observer.observe(el);
	});
	
	// Adicionar classe fade-in aos elementos do portfólio
	const miniaturas = document.querySelectorAll('.miniatura');
	miniaturas.forEach((miniatura, index) => {
		miniatura.classList.add('fade-in');
		miniatura.style.transitionDelay = (index * 0.1) + 's';
	});
});

// Efeito de navegação ao scroll
let lastScroll = 0;
const navigation = document.getElementById('navigation');

window.addEventListener('scroll', function() {
	const currentScroll = window.pageYOffset;
	
	if (currentScroll > 100) {
		navigation.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
	} else {
		navigation.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
	}
	
	lastScroll = currentScroll;
});