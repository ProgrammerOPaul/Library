let myLibrary = [];

book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return(title + ' by ' + author + ', ' + pages + ', ' + read) 
    }
}

const starWars = new book("Star Wars", "George Lucas", "2560 pages", "not read yet");
console.log(starWars.info());