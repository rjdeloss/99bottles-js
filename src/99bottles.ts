
class  Bottles {
    song = (): string => this.verses(99, 0);
    
    verses = (hi:number, lo:number): string => {
        return this.downTo(hi, lo).map(number => this.verse(number)).join('\n');
    }

    verse = (number: number): string => {
        return (`${number == 0 ? 'No more' : number} bottle${number == 1 ? '' : 's'} of beer on the wall, 
        ${number == 0 ? 'No more' : number} bottle${number == 1 ? '' : 's'} of beer.\n
        ${number > 0 ? `Take ${number > 1 ? 'one' : 'it'} down and pass it around` : 'Go to the store and buy some more'}
        ${number-1 < 0 ? 99 : number-1 === 0 ? 'no more' : number-1} bottle${number- 1 == 1 ? '' : 's'}
        of beer on the wall`)
    }

    downTo = (max: number, min: number): number[] => {
        const numbers: number[] = [];
        for (let n: number = max; n >= min; n--) {
            numbers.push(n)
        }
        return numbers;
    }
}


const bottlesSong: Bottles = new Bottles();
console.log(bottlesSong.song())