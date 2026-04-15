function isOfAge(age) {
	return age >= 21;
}

module.exports = {
	...(typeof isOfAge !== "undefined" && { isOfAge }),
};

console.log(isOfAge("63"));
