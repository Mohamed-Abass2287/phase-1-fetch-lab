// Function to fetch books from the Game of Thrones API
function fetchBooks() {
  // Make a fetch request to the API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json()) // Convert response to JSON
    .then((books) => renderBooks(books)) // Pass the JSON data to renderBooks
    .catch((error) => console.error("Error fetching books:", error)); // Handle errors
}

// Function to render book titles in the DOM
function renderBooks(books) {
  const mainElement = document.querySelector("main"); // Select the <main> element
  books.forEach((book) => {
    const bookElement = document.createElement("h2"); // Create an <h2> for each book
    bookElement.textContent = book.name; // Set the book title
    mainElement.appendChild(bookElement); // Append the title to <main>
  });
}

// Call fetchBooks when the page loads
document.addEventListener("DOMContentLoaded", fetchBooks);