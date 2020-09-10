const postTitle = document.querySelector("#post");
const postList = document.querySelector(".posts");
const postForm = document.querySelector("#post-form");

var newPosts = [];

if (postForm) {
  postForm.addEventListener("submit", savePost);
}

function savePost(e) {
  e.preventDefault();
  if (postTitle.value) {
    newPosts.push(postTitle.value);
    getPosts(newPosts);
  }
}

function getPosts(newPosts) {
  const li = document.createElement("li");

  if (newPosts) {
    for (var i = 0; i < newPosts.length; i++) {
      li.innerHTML = newPosts[i];
      postList.appendChild(li);
      deleteItems(li);
    }
  }
}

function deleteItems(li) {
  li.addEventListener("click", function () {
    li.remove();
  });
}
