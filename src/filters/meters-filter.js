module.exports = function metersFilter(meters) {
	const intMeters = meters * 0.001;
	return Math.round(intMeters * 1000) / 1000;
}
