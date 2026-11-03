// Menu mobile
function openNav() {
	var nav = document.getElementById("navigation");
	var icon = document.getElementById("threeline-icon");
	var aberto = nav.classList.toggle("menujs");

	icon.innerHTML = aberto ? "&times;" : "&#9776;";
	icon.setAttribute("aria-expanded", aberto ? "true" : "false");
}

document.addEventListener("DOMContentLoaded", function () {
	var navigation = document.getElementById("navigation");
	var backToTop = document.querySelector(".back-to-top");

	// Sombra na navegação e botão voltar ao topo
	function onScroll() {
		var y = window.pageYOffset;

		if (navigation) {
			navigation.classList.toggle("scrolled", y > 40);
		}
		if (backToTop) {
			backToTop.classList.toggle("show", y > 400);
		}
	}

	window.addEventListener("scroll", onScroll, { passive: true });
	onScroll();

	// Fecha o menu mobile ao clicar em um link
	document.querySelectorAll(".navigation ul a").forEach(function (link) {
		link.addEventListener("click", function () {
			if (navigation.classList.contains("menujs")) {
				openNav();
			}
		});
	});

	// Animações de entrada
	var fadeElements = document.querySelectorAll(".fade-in");

	if ("IntersectionObserver" in window) {
		var observer = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
		);

		fadeElements.forEach(function (el) {
			observer.observe(el);
		});
	} else {
		fadeElements.forEach(function (el) {
			el.classList.add("visible");
		});
	}

	// Filtro de projetos (portfolio.html)
	var filtros = document.querySelectorAll(".filter");
	var projetos = document.querySelectorAll(".projects [data-tags]");

	filtros.forEach(function (botao) {
		botao.addEventListener("click", function () {
			var alvo = botao.getAttribute("data-filter");

			filtros.forEach(function (b) {
				b.classList.toggle("active", b === botao);
			});

			projetos.forEach(function (projeto) {
				var tags = projeto.getAttribute("data-tags").split(" ");
				var mostrar = alvo === "todos" || tags.indexOf(alvo) !== -1;

				projeto.classList.toggle("hidden", !mostrar);
				if (mostrar) {
					projeto.classList.add("visible");
				}
			});
		});
	});

	// Ano atual no rodapé
	document.querySelectorAll("[data-ano]").forEach(function (el) {
		el.textContent = new Date().getFullYear();
	});
});
