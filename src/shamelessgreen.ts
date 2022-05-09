class ShamelessGreenBottles {
    song = (): string => {
        
        return this.verses(99, 0);
    }

    verses = (upper: number, lower: number): string  => {
        return this.downTo(upper, lower).map(i => this.verse(i)).join('\n');
    }

    downTo = (max: number, min: number): number[] => {
        const numbers: number[] = [];
        for (let n: number = max; n >= min; n--) {
            numbers.push(n)
        }
        return numbers;
    }

    verse = (number: number):string => {
        switch (number) {
            case 0:
                return (
                    `${this.capitalize(this.quantity(number))} ${this.container(number)} of beer on the wall, ` +
                    `${this.quantity(number)} ${this.container(number)} of beer.\n` +
                    `${this.action(number)}` +
                    `99 bottles of beer on the wall.\n`
                ); 
            default:
                return (
                    `${this.capitalize(this.quantity(number))} ${this.container(number)} of beer on the wall, ` +
                    `${this.quantity(number)} ${this.container(number)} of beer.\n` +
                    `${this.action(number)}` +
                    `${this.quantity(number - 1)} ${this.container(number - 1)} of beer on the wall.\n`
                );
        }
    }

    container = (number: number):string => number === 1 ? "bottle" : "bottles";

    pronoun = (number : number ):string => number === 1 ? "it" : "one";

    quantity = (number: number) : string => number === 0 ? "no more" : `${number}`;

    capitalize = (phrase: string) : string => phrase = phrase[0].toUpperCase() + phrase.slice(1);

    action = (number : number) : string => number === 0 ?
        `Go to the store and buy some more, ` :
        `Take ${this.pronoun(number)} down and pass it around, `;
}

export default ShamelessGreenBottles;