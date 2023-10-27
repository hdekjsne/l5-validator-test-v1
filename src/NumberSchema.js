export class NumberSchema {
	constructor() {}

	isValid(value) {
		return typeof value === 'number';
	}
}