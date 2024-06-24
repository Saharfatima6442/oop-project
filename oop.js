#!/bin/usr/env Node
class Person {
    Personality;
    constructor(Personality) {
        this.Personality = "2";
    }
}
;
class getPersonality extends Person {
    result() {
        if (this.Personality === "1") {
            console.log("Extrovert!");
        }
        else {
            console.log("Introvert!");
        }
        this.Personality;
    }
}
let P1 = new getPersonality("1");
P1.result();
export {};
