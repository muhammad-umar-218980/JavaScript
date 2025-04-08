const URL = "https://api.thecatapi.com/v1/images/search";

const btn = document.querySelector(".btn");
const img = document.querySelector(".cat-img");
let hint = document.querySelector(".hint")

const getCatImage = async () => {
	try {
		const response = await fetch(URL);
		const data = await response.json();
		console.log(data); // for debugging
		img.src = data[0].url;

		if (hint) {
			hint.style.display = "none";
		}

	} catch (error) {
		console.error("Error fetching cat image:", error);
	}
};

btn.addEventListener("click", getCatImage);
