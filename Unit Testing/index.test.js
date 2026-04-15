const { isOfAge } = require("./index");

describe("Age Verification", () => {
	const mercy = 25;
	const amina = 21;
	const kisoi = 18;
	const steve = -7;
	const josh = 0;
	const kimberly = "my age is 63";

	test("returns true if age is 21 or older", () => {
		const age = isOfAge(mercy);

		expect(age).toBe(true);
	});
	test("returns true if age is 21 or older", () => {
		const age = isOfAge(amina);

		expect(age).toBe(true);
	});
	test("returns false if age less than 21", () => {
		const age = isOfAge(kisoi);

		expect(age).toBe(false);
	});
	test("returns false if age less than 21", () => {
		const age = isOfAge(steve);

		expect(age).toBe(false);
	});
	test("returns false if age is a negative number", () => {
		const age = isOfAge(josh);

		expect(age).toBe(false);
	});
	test("returns false if age is not a number", () => {
		const age = isOfAge(kimberly);

		expect(age).toBe(false);
	});
});
