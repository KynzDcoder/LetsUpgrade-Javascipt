// 1. Program to search for a particular character in a string

let string = "abcdefghijklmnopqrstuvwxyz";
let pos = string.indexOf("j");
console.log("1. The position of j in a string is: "+pos);

// 2. Program to convert minutes to seconds

let minutes = "30";
let seconds = minutes * 60;
let time = `${minutes} minutes is equal to ${seconds} seconds`;
console.log("2. "+time);

// 3. Program to search for an element in an array of strings

let arr = ["laptop", "mouse", "keyboard", "monitor", "camera", "mobile"];
let arr_pos = arr.indexOf("keyboard");
console.log("3. The position of 'keyboard' in an array is: "+arr_pos);

// 4. Program to display only elements containing 'a' in them from an array

let data = ["laptop", "mouse", "keyboard", "monitor", "camera", "mobile"];

console.log("4. Elements containing 'a' in them are as follow:");
data.forEach(function(a)
{
	let ele = a.indexOf("a");
	if(ele != -1){
		console.log("-->"+a);
	}
});

//5. Print an array in reverse order

let rev_arr = ["laptop", "mouse", "keyboard", "monitor", "camera", "mobile"];
console.log("5. Array printed in regular order is as follow:");

rev_arr.forEach(function(a)
{
		console.log("-->"+a);
});
console.log("Array printed in reverse order is as follow:");
for(let i = rev_arr.length -1;i>=0;i--)
{
	console.log("-->"+rev_arr[i]);
}
