let allPosts = [];

const postsContainer = document.querySelector("#posts-container");
const loadingMessage = document.querySelector("#loading-message");
const errorMessage = document.querySelector("#error-message");
const emptyMessage = document.querySelector("#empty-message");
const searchInput = document.querySelector("#search-input");
const retryButton = document.querySelector("#retry-button");

async function fetchPosts() {
	loadingMessage.hidden = false;
	errorMessage.hidden = true;
	postsContainer.innerHTML = "";

	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		if (!response.ok) throw new Error("The server returned an error.");
		allPosts = await response.json();
		loadingMessage.hidden = true;
		displayPosts(allPosts);
	} catch (error) {
		loadingMessage.hidden = true;
		errorMessage.hidden = false;
		console.error("Could not fetch posts:", error);
	}
}

function displayPosts(posts) {
	postsContainer.innerHTML = "";
	emptyMessage.hidden = posts.length !== 0;

	posts.forEach((post, index) => {
		const card = document.createElement("article");
		card.className = "post-card";
		card.style.animationDelay = `${Math.min(index, 8) * 40}ms`;
		card.innerHTML = `
			<span class="post-number">${String(post.id).padStart(2, "0")}</span>
			<h3>${post.title}</h3>
			<p>${post.body}</p>
			<div class="post-footer"><span>5 min read</span><span class="read-link" aria-label="Read story">&#8594;</span></div>
		`;
		postsContainer.appendChild(card);
	});
}

function searchPosts(event) {
	const searchTerm = event.target.value.toLowerCase().trim();
	const matchingPosts = allPosts.filter((post) => {
		return post.title.toLowerCase().includes(searchTerm) || post.body.toLowerCase().includes(searchTerm);
	});
	displayPosts(matchingPosts);
}

document.querySelector("#signup-form").addEventListener("submit", (event) => {
	event.preventDefault();
	document.querySelector("#signup-success").hidden = false;
	event.target.reset();
});

searchInput.addEventListener("input", searchPosts);
retryButton.addEventListener("click", fetchPosts);
fetchPosts();
