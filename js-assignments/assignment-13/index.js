console.log(window.navigator);
let postsEl = document.getElementById("posts");
let selectEl = document.getElementById("selectUser");
let users = fetch("https://5e686472d426c00016b7cf8d.mockapi.io/api/v1/users")
	.then(response => response.json())
	.then(users => {
		postsEl.innerHTML = "Please select username to view posts"
		users.forEach(user => {
			selectEl.innerHTML += `<option value=${user.name} id=${user.userId}>${user.name}</option>`;
		})
	});

postsEl.innerHTML = "Loading.....";
selectEl.onchange = () => {
	postsEl.innerHTML = "loading...";
	fetch(`https://5e686472d426c00016b7cf8d.mockapi.io/api/v1/users/${selectEl.options[selectEl.selectedIndex].id}/posts`)
		.then(response => response.json())
		.then(posts => {
			postsEl.innerHTML = "";
			posts.forEach(post => {
				let dataDivision = `<div class="dataDivision"><h2>${post.title}</h2><hr><p>${post.body}</p><p>${post.noOfComments} comments</p></div>`;
				postsEl.innerHTML += dataDivision;
			});
		})
}
