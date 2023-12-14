// Filename: elaborate_code.js
// Content: Complex JavaScript code implementation

// Define a class for a Book
class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  // Method to calculate the age of the book
  calculateAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.publicationYear;
  }
}

// Define a class for a Library
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  // Method to add books to the library
  addBook(book) {
    this.books.push(book);
  }

  // Method to search for a book by title
  searchByTitle(title) {
    const foundBooks = this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    return foundBooks.length > 0 ? foundBooks : "No matching books found.";
  }

  // Method to search for a book by author
  searchByAuthor(author) {
    const foundBooks = this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    return foundBooks.length > 0 ? foundBooks : "No matching books found.";
  }

  // Method to get the total number of books in the library
  getTotalBooks() {
    return this.books.length;
  }
}

// Create some book instances
const book1 = new Book("Iliad", "Homer", 700);
const book2 = new Book("Crime and Punishment", "Fyodor Dostoevsky", 1866);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

// Create a library instance
const library = new Library("Public Library");

// Add books to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Search for books by title and display the results
console.log(library.searchByTitle("kill"));
console.log(library.searchByTitle("crime"));

// Search for books by author and display the results
console.log(library.searchByAuthor("homer"));
console.log(library.searchByAuthor("lee"));

// Get the total number of books in the library
console.log("Total number of books:", library.getTotalBooks());

// Calculate the age of a book
console.log("Age of book:", book2.calculateAge());

// Extend the Book class
class FictionBook extends Book {
  constructor(title, author, publicationYear, genre) {
    super(title, author, publicationYear);
    this.genre = genre;
  }

  // Method to check if the book is a bestseller
  isBestseller() {
    return this.genre === "Mystery" || this.genre === "Thriller";
  }
}

// Create a fiction book instance
const fictionBook = new FictionBook("The Girl on the Train", "Paula Hawkins", 2015, "Thriller");

// Check if the fiction book is a bestseller
console.log("Is bestseller:", fictionBook.isBestseller());

// Export the library class
module.exports = Library;