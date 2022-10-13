var getNum0a255 = function () { return Math.floor(Math.random() * 256); };
var Color = /** @class */ (function () {
    function Color(num1, num2, num3) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
    }
    Color.prototype.get = function () {
        var color = "rgb(".concat(this.num1, ",").concat(this.num2, ",").concat(this.num3, ")");
        return color;
    };
    return Color;
}());
var nuevoColor = new Color(getNum0a255(), getNum0a255(), getNum0a255());
console.log(nuevoColor.get());
