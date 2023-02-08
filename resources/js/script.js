function showEmail() {
  let showEmail = document.getElementById('email');
  if (showEmail.style.display === 'none') {
    document.getElementById('email').style.display = 'inline-block';
  } else {
    document.getElementById('email').style.display = 'none';
  } 
};

document.getElementById('show-email').onclick = showEmail;

function showBooks() {
  let showEmail = document.getElementById('books-list');
  if (showEmail.style.display === 'none') {
    document.getElementById('books-list').style.display = 'block';
  } else {
    document.getElementById('books-list').style.display = 'none';
  } 
};

document.getElementById('show-books').onclick = showBooks;

function showYT() {
  let showEmail = document.getElementById('yt-list');
  if (showEmail.style.display === 'none') {
    document.getElementById('yt-list').style.display = 'block';
  } else {
    document.getElementById('yt-list').style.display = 'none';
  } 
};

document.getElementById('show-yt').onclick = showYT;

function showJoke() {
  let showJoke = document.getElementById('joke');
  if (showJoke.style.display === 'none') {
    showJoke.style.display = 'block';
  } else {
    showJoke.style.display = 'none';
  }
}

