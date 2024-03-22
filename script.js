const makeChange = (c) => {
  // your name here

	let change={
		"q":0,
		"d":0,
		"n":0,
	    "p":0,
	}
	let count=0
	while (c>=25) {
		change.q= ++count;
		c= c-25;
	}
	count=0;
	while (c>=10) {
		change.d= ++count;
		c= c-10;
	}
	count=0;
	while (c>=5) {
		change.n= ++count;
		c= c-5;
	}
	count=0;
	while (c>=1) {
		change.p= ++count;
		c= c-1;
	}
	return change;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
