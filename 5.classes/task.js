class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name,
        this.releaseDate = releaseDate,
        this.pagesCount = pagesCount,
        this._state = state,
        this.type = type
    }

    fix () {
        this.state = this.state * 1.5;
    }
    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = 'magazine') {
        super(name, releaseDate, pagesCount, state, type )
    }

}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "book") {
        super(name, releaseDate, pagesCount, state, type)
        this.author = author;
    }

}

 class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "novel") {
        super(author, name, releaseDate, pagesCount, state, type)
    }

}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic") {
        super(author, name, releaseDate, pagesCount, state, type)
    }

}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "detective") {
        super(author, name, releaseDate, pagesCount, state, type)
    }

}


class Library {
    constructor(name) {
        this.name = name,
        this.books = []
    }
    addBook(book) {
        if(book.state > 30) {
            this.books.push(book)
        }
    }
    findBookBy(type, value) {
        return this.books.find(item => item[type] === value ) || null;
    }
    giveBookByName(bookName) {
         let book = this.books.find(item => item.name === bookName) || null;
         if (book) {this.books = this.books.filter(item => item.name != bookName)}
         return book;
    }
}