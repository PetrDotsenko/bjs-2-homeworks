class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
		this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;		
	}
    fix(){
        this.state * 1.5;
    }
    set state(state) {
        if (state < 0){
            state = 0;
        } else if (state > 100){
            state = 100;
        } else {
            this._state = state;
        }
    }
    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100){
		super(name);
        super(releaseDate);
        super(pagesCount);
        super(state);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100){
    super(name);
    super(releaseDate);
    super(pagesCount);
    super(state);
    this.type = "book";
    this.author;
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state) {
    super(name);
    super(releaseDate);
    super(pagesCount);
    super(state);
    this.type = "novel";
    this.author;
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state) {
    super(name);
    super(releaseDate);
    super(pagesCount);
    super(state);
    this.type = "fantastic";
    this.author;
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state) {
    super(name);
    super(releaseDate);
    super(pagesCount);
    super(state);
    this.type = "detective";
    this.author;
    }
}