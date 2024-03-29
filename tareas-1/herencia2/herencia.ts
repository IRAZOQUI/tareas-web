class Person {
    private name: string;
    constructor(theName: string) {
    this.name = theName;
    }
    introduceSelf() {
    console.log("Hi, I am " + this.name + "!");
    }
    }
    class Friend extends Person {
    yearsKnown: number;
    constructor(name: string, yearsKnown: number) {
    super(name);
    this.yearsKnown = yearsKnown;
    }
    timeKnown() {
    console.log("We have been friends for " + this.yearsKnown + " years.")
    }
    }
    let friendA = new Friend("Jacob", 6);
    // Prints: Hi, I am Jacob!
    friendA.introduceSelf();
    // Prints: We have been friends for 6 years.
    friendA.timeKnown();