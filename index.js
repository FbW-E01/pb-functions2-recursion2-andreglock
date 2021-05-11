/* function reverse(string) {
    let revString = '';
    for (let i = 0; i < string.length; i++) {
        revString = string[i] + revString;
    }
    return revString;
}; */ //Non Recursive function

function reverse(string) {
    if (string.length === 0) {return ''}
    const lastLetter = string.split('').splice(string.length - 1, string.length);
    string = string.split('').splice(0, string.length - 1).join('');
    return lastLetter + reverse(string);
};

let string="hello world";

console.log(reverse(string));  // return dlrow olleh