// script.js

// Get DOM elements
const postForm = document.getElementById('post-form');
const postsContainer = document.getElementById('posts-container');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

// Array to store posts
let posts = [];

// Function to render posts
function renderPosts() {
  postsContainer.innerHTML = ''; // Clear current posts
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    `;
    postsContainer.appendChild(postElement);
  });
}

// Function to handle form submission
postForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Create new post object
  const newPost = {
    title: titleInput.value,
    content: contentInput.value,
  };

  // Add the new post to the array
  posts.push(newPost);

  // Clear the form
  titleInput.value = '';
  contentInput.value = '';

  // Render posts
  renderPosts();
});

// Initial rendering of posts
renderPosts();
