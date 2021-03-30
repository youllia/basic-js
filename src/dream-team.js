const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
    if (!Array.isArray(arr)) {
  		return false;
  	}

  	let team = [];
  	for (let elem of arr) {
      if (typeof elem !== 'string') {
        continue;
      }

      const chr = elem.trim().substr(0, 1).toUpperCase();
      if (!/^[A-Z]{1}$/.test(chr)) {
        continue;
      }

  		team.push(chr);

  	}
  	return team.sort().join('');
};
