class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }
  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  }
  printFavoriteBooks() {
    console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
    for (let bookName of this.favoriteBooks) {
      console.log(String(bookName));
    }
  }
}

function loadBooks(bookshelfInstance) {
  fakeAjax(BOOK_API, function(booklist) {
    for (let i = 0; i < booklist.length; i++) {
      bookshelfInstance.addFavoriteBook(booklist[i]);
	}
	bookshelfInstance.printFavoriteBooks();
  });
}

var BOOK_API = "https://some.url/api";
var myBookshelf = new Bookshelf();
loadBooks(myBookshelf);

// calling myBookshelf.printFavoriteBooks(); will not work on the global scope, because of context

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS"
    ]);
  }, 500);
}

