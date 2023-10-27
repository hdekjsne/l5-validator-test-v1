export default class NumberSchema {
	constructor() {
		this.opts = {
			even: false, // чётное
			odd: false, // нечётное
		}
	}

	even() {
		this.opts.even = true;
		this.opts.odd = false;
		return this;
	}

	odd() {
		this.opts.odd = true;
		this.opts.even = false;
		return this;
	}

	isValid(value) {
		const validations = [
			typeof value === 'number',
			this.opts.even ? value % 2 === 0 : true,
			this.opts.odd ? value % 2 !== 0 : true,
		]
		return !validations.includes(false);
	}
}