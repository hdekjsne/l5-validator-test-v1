function checkKeys() {}

export default class ObjectSchema {
	constructor() {
		this.example = null;
	}

	shape(obj) {
		this.example = obj;
		return this;
	}

	isValid(obj) {
		const checkedKeys = Object.entries(this.example)
			.map(([key, condition]) => condition.isValid(obj[key]));
		const validations = [
			this.example !== null ? Object.keys(obj).length === Object.keys(this.example).length : true,
			...checkedKeys,
		];
		return !validations.includes(false);
	}
}