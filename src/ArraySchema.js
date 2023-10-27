export default class ArraySchema {
	constructor() {
		this.l = null;
	}

	length(l) {
		this.l = l;
		return this;
	}

	isValid(value) {
		const validations = [
			Array.isArray(value),
			this.l !== null ? value?.length === this.l : true,
		];
		return !validations.includes(false);
	}
}