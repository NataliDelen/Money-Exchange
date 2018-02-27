// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	var coins = currency;
	var obj = {};
	
	if (coins <= 0) return obj;
	if (coins > 10000) return obj = {error: "You are rich, my friend! We don't have so much coins for exchange"};

	if (coins >= 50){
		var hkey = Math.floor(coins / 50);
		coins = coins - 50 * hkey;
		obj["H"] = hkey;
	}

	if (coins >= 25){
		var qkey = Math.floor(coins / 25);
		coins = coins - 25 * qkey;
		obj["Q"] = qkey;
	}

	if (coins >= 10){
		var dkey = Math.floor(coins / 10);
		coins = coins - 10 * dkey;
		obj["D"] = dkey;
	}

	if (coins >= 5){
		var nkey = Math.floor(coins / 5);
		coins = coins - 5 * nkey;
		obj["N"] = nkey;
	}

	if (coins < 5 && coins > 0){
		var pkey = coins;
		obj["P"] = pkey;
	}

	return obj;
}
