var Bottles = /** @class */ (function () {
    function Bottles() {
        var _this = this;
        this.song = function () { return _this.verses(99, 0); };
        this.verses = function (hi, lo) {
            return _this.downTo(hi, lo).map(function (number) { return _this.verse(number); }).join('\n');
        };
        this.verse = function (number) {
            return ("".concat(number == 0 ? 'No more' : number, " bottle").concat(number == 1 ? '' : 's', " of beer on the wall, \n        ").concat(number == 0 ? 'No more' : number, " bottle").concat(number == 1 ? '' : 's', " of beer.\n\n        ").concat(number > 0 ? "Take ".concat(number > 1 ? 'one' : 'it', " down and pass it around") : 'Go to the store and buy some more', "\n        ").concat(number - 1 < 0 ? 99 : number - 1 === 0 ? 'no more' : number - 1, " bottle").concat(number - 1 == 1 ? '' : 's', "\n        of beer on the wall"));
        };
        this.downTo = function (max, min) {
            var numbers = [];
            for (var n = max; n >= min; n--) {
                numbers.push(n);
            }
            return numbers;
        };
    }
    return Bottles;
}());
var bottlesSong = new Bottles();
console.log(bottlesSong.song());
