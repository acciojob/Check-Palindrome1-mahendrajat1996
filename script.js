// complete the given function

function palindrome(str){
	let start = 0;
   let end = s.length - 1;

   while (end > start) {
   if (s[start] !== s[end]) {
    return false;
    }
    start++;
   end--;
}

return true;

}
module.exports = palindrome
