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
                    `No more bottles of beer on the wall, ` +
                    `no more bottles of beer.\n` +
                    `Go to the store and buy some more, ` +
                    `99 bottles of beer on the wall.\n`
                ); 
            case 1:
                return (
                    `1 bottle of beer on the wall, ` +
                    `1 bottle of beer.\n` +
                    `Take ${this.pronoun(number)} down and pass it around, ` +
                    `no more bottles of beer on the wall.\n`
                );
            default:
                return (
                    `${number} bottles of beer on the wall, ` +
                    `${number} bottles of beer.\n` +
                    `Take ${this.pronoun(number)} down and pass it around, ` +
                    `${number - 1} ${this.container(number - 1)} of beer on the wall.\n`
                );
        }
    }

    container = (number: number):string => number === 1 ? "bottle" : "bottles";

    pronoun = (number : number ):string => number === 1 ? "it" : "one";
}

export default ShamelessGreenBottles;