/* eslint-disable no-unused-vars */
const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;}

// eslint-disable-next-line func-names
Book.prototype.info = function(){
    return(`${this.title  } by ${  this.author  }, ${  this.pages  }, ${  this.read}`) };




const starWars = new Book("Star Wars", "George Lucas", "2560 pages", "not read yet");
// eslint-disable-next-line no-console
console.log(starWars.info());

