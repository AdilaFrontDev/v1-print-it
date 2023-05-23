const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
	}
]

// récupération DOM image de la bannière
const image = document.querySelector(".banner-img");
console.log(image);


// récupération des dots 
const bulletPoints = document.querySelectorAll(".dot");
console.log(bulletPoints);

//comme pour l'excercice de la calculatrice ajouter une boucle foreach pour chaque bullet et obtenir un event listener et .target


bulletPoints.forEach ((bulletPoint, index) => {
	bulletPoint.addEventListener("click", (e) => {
		for (let t = 0; t <= 3; t++) {
			bulletPoints[t].classList.remove("dot_selected");
		}
		changeSlideTextImage(index);
		bulletPoints[index].classList.add("dot_selected");
	})
})

let i = 0;

// let selectedBulletPoint = bulletPoint[i];
function changeSlideTextImage(a) {
	// Configuration de la source de l'image
	const fullUrl = './assets/images/slideshow/' + slides[a].image;
	console.log(fullUrl);
	image.src = fullUrl;
	// Changement du texte correspondant au nouveau slide
	document.getElementById("tag").innerHTML = slides[a].tagLine;
}

function nextSlide(){
	// suppression de la classe dot_selected pour le slide avant changement
	bulletPoints[i].classList.remove("dot_selected");
	if (i < slides.length - 1) {
		i++;
	} else {
		i = 0;
	}
	changeSlideTextImage(i);
	// Ajout classe dot_selected
	bulletPoints[i].classList.add("dot_selected");
}

function previousSlide(){
	// suppression de la classe dot_selected pour le slide avant changement
	bulletPoints[i].classList.remove("dot_selected");
	if (i >=1) {
		i--;
	} else {
		i = slides.length - 1;
	}
	changeSlideTextImage(i);
// Ajout classe dot_selected
bulletPoints[i].classList.add("dot_selected");	
}





//Récuperation de l'élément du DOM arrow_right
const arrowRigth = document.querySelector(".arrow_right");
// ajout d'un listener
arrowRigth.addEventListener("click", function (){
	console.log("arrowRigth");
    nextSlide();
});


//Récuperation de l'élément du DOM arrow_left 
const arrowLeft = document.querySelector(".arrow_left");
// ajout d'un listener
arrowLeft.addEventListener("click", function (){
    previousSlide();
});