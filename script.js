function shortcut(s1, s2) {
	if(s1.lenght === 0 || s2.length === 0) return "";
	let s1FirstLetter = s1[0];
	let s2FirstLetter = s2[0];
	return s1FirstLetter+s2FirstLetter;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
