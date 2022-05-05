let elStart = document.getElementById('start'),
	elReset = document.getElementById('reset'),
	elMoney = document.getElementById('money'),
	elCount = document.getElementById('count'),
	elPrint = document.querySelectorAll('.print');

let increase = 8000,
	decrease = -1000;

elStart.onclick = () => {
	let numbers = '',
		jackpot = '';

	// random
	elPrint.forEach((element) => {
		let random = Math.floor(Math.random() * 3);
		element.innerHTML = random;
		numbers += random;
	});

	// jackpot
	elPrint.forEach((element) => {
		jackpot += numbers[0];
	});

	if (numbers === jackpot) {
		elMoney.innerHTML = parseInt(elMoney.innerHTML) + increase;
		elCount.innerHTML = parseInt(elCount.innerHTML) + 1;
	} else {
		elMoney.innerHTML = parseInt(elMoney.innerHTML) + decrease;
	}
}; // end of elStart

elReset.onclick = () => {
	elMoney.innerHTML = 0;
	elCount.innerHTML = 0;
	elPrint.forEach((element) => (element.innerHTML = 0));
}; // end of elReset
