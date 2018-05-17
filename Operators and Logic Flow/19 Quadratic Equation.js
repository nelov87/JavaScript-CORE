function quadraticEquation(a, b, c) {
	a = Number(a);
	b = Number(b);
	c = Number(c);

	let d = (Math.pow(b, 2) - (4 * a * c));
	let x1 = (-b + Math.sqrt(d)) / (2*a);
	let x2 = (-b - Math.sqrt(d)) / (2*a);

    if (d < 0) {
        console.log("No");
    } else if (d === 0) {
        console.log(x1);
    } else {
        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    } 
}