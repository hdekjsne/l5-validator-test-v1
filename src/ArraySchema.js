export default class ArraySchema {
	constructor() {
		this.length = false;
	}

	isValid(value) {
		const validations = [
			Array.isArray(value),
		];
		return !validations.includes(false);
	}
}