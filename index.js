function BaseBilder (val) {
    this._value = val;
}

class IntBuilder extends BaseBilder{
    constructor(value = 0) {
        super(value);
    }
    log(methodName) {
        console.log(methodName + ' - ', this._value)
    }
    plus(...n) {
        this._value += n.reduce((n, p) => +n + +p, 0);
        this.log('plus');
        return this;
    }
    minus(...n) {
        this._value += n.reduce((n, p) => +n - +p, 0);
        this.log('minus');
        return this;
    }
    multiply(n) {
        this._value *= n;
        this.log('multiply');
        return this;
    }
    divide(n) {
        this._value = Math.floor(this._value / n);
        this.log('divide');
        return this;
    }
    mod(n) { 
        this._value = +this._value % n;
        this.log('mod');
        return this;
    }
    get() {
        this.log('get');
        return this;
    }
    static random(from, to) { 
        let res = Math.floor(Math.random() * (+to - +from)) + +from;
        console.log(`random - ${res}`);
        return res;
    }
}

function StringBuilder(value = '') {
    BaseBilder.call(this, value);
}
StringBuilder.prototype.log = function(methodName) {
    console.log(methodName + ' - ', this._value)
};
StringBuilder.prototype.plus = function (...n) {
    this._value = this._value.toString() + n.reduce((n, p) => n + p, '');
    this.log('plus');
    return this;
};
StringBuilder.prototype.minus = function (n) {
    this._value = this._value.toString().slice(0, -n);
    this.log('minus');
    return this;
};
StringBuilder.prototype.multiply = function (n) {
    this._value = this._value.repeat(n);
    this.log('multiply');
    return this;
};
StringBuilder.prototype.divide = function (n) {
    let k = Math.floor(this._value.length / n);
    this._value = this._value.slice(0, k);
    this.log('divide');
    return this;
};
StringBuilder.prototype.remove = function (n) {
    this._value = this._value.split('').filter(i => i !== n).join('');
    this.log('remove');
    return this;
};
StringBuilder.prototype.substr = function (from, n) {
    this._value = this._value.substr(from, n);
    this.log('substr');
    return this;
};
StringBuilder.prototype.get = function () {
    this.log('get');
    return this;
};

//ES6 class IntBuilder:
IntBuilder.random(10, 100);

let intBuld = new IntBuilder(10);
intBuld.plus(2, 3, 2)
.minus(1, 2)
.multiply(2)
.divide(4)
.mod(3)
.get();

//ES5 class StringBuilder
let strBuld = new StringBuilder('Hello');
strBuld.plus(' all', '!')
.minus(4)
.multiply(3)
.divide(4)
.remove('l')
.substr(1, 1)
.get();


//GETTERS & SETTERS
Object.defineProperty(intBuld, 'value', {
	get: function() {
		return this._value;
	},
	set: function(newValue) {
		this._value = newValue;
	}
});
Object.defineProperty(strBuld, 'value', {
	get: function() {
		return this._value;
	},
	set: function(newValue) {
		this._value = newValue;
	}
});
