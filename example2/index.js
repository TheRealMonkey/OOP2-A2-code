const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
var books = require('./books.json');
class Book {
  constructor(title, author, publisher, date) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.date = date;
    this.uuid = uuidv4()
  }
}
updatedBooks=[]

books['books']['book'].forEach((item)=>{updatedBooks.push( new Book(item.title,item.author,item.publisher,item.date))})
console.log(updatedBooks)



fs.writeFile('./booksWithUUID.json', JSON.stringify(updatedBooks, null, "\t"), err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
  