import { number } from "yargs";
import ShamelessGreenBottles from "../src/shamelessgreen";

var bottles:ShamelessGreenBottles;

beforeEach(() => {
    bottles = new ShamelessGreenBottles();
})


describe("Bottles()", () => {
    it("should render the first verse", () => {
        const expected = 
            `99 bottles of beer on the wall, ` +
            `99 bottles of beer.\n` +
            `Take one down and pass it around, ` +
            `98 bottles of beer on the wall.\n`

        expect(bottles.verse(99)).toBe(expected);
    })

    it("should expect another verse", () => {
        const expected = 
            `3 bottles of beer on the wall, ` +
            `3 bottles of beer.\n` +
            `Take one down and pass it around, ` +
            `2 bottles of beer on the wall.\n`

        expect(bottles.verse(3)).toBe(expected);
    })

    it("should render a verse with no more bottles when there's only one bottle left", () => {
        const expected = 
            `1 bottle of beer on the wall, ` +
            `1 bottle of beer.\n` +
            `Take it down and pass it around, ` +
            `no more bottles of beer on the wall.\n`

            expect(bottles.verse(1)).toBe(expected);
    })

    it("should prompt lyrics for when there are no more bottles left", () => {
        const expected = 
            `No more bottles of beer on the wall, ` +
            `no more bottles of beer.\n` +
            `Go to the store and buy some more, ` +
            `99 bottles of beer on the wall.\n`

        expect(bottles.verse(0)).toBe(expected);
    })

    it("should render a couple of verses from 99 to 98", () => {
        const expected = 
            `99 bottles of beer on the wall, ` +
            `99 bottles of beer.\n` +
            `Take one down and pass it around, ` +
            `98 bottles of beer on the wall.\n` +
            `\n` +
            `98 bottles of beer on the wall, ` +
            `98 bottles of beer.\n` +
            `Take one down and pass it around, ` +
            `97 bottles of beer on the wall.\n`

        expect(bottles.verses(99, 98)).toBe(expected);
    }) 

    it("should render a couple of verses from 2 to 0", () => {
        const expected = 
            `2 bottles of beer on the wall, ` +
            `2 bottles of beer.\n` +
            `Take one down and pass it around, ` +
            `1 bottle of beer on the wall.\n` +
            `\n` +
            `1 bottle of beer on the wall, ` +
            `1 bottle of beer.\n` +
            `Take it down and pass it around, ` +
            `no more bottles of beer on the wall.\n` +
            `\n` +
            `No more bottles of beer on the wall, ` +
            `no more bottles of beer.\n` +
            `Go to the store and buy some more, ` +
            `99 bottles of beer on the wall.\n`

        expect(bottles.verses(2, 0)).toBe(expected)
    }) 

    it('should return the whole song', () => {
        const expected = bottles.downTo(99, 0).map((i: number) => bottles.verse(i)).join('\n');
        expect(bottles.song()).toBe(expected);
    })
})