module.exports = function reverse (n) {
  if(n<0){
      n*=-1;
  }
  n+='';
  let reverseStr=n.split('').reverse().join('');
  return reverseStr;
}
