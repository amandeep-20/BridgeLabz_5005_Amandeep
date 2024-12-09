function display(){
  let c=0;
  function count(){
    c++;
    return c;
  }
  return count;
}
let ans = display();
console.log(ans); // return all the function with data. means lexicall scope 
console.log(ans()); 


function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
      console.log(`Outer Variable: ${outerVariable}`);
      console.log(`Inner Variable: ${innerVariable}`);
    };
}
  
const newFunction = outerFunction("outside");
newFunction("inside");


function secretKeeper(secret) {
    return {
        getSecret: function () {
        return secret;
      },
      setSecret: function (newSecret) {
        secret = newSecret;
        }
    };
}
  
const secret = secretKeeper("my secret");
console.log(secret.getSecret()); // Output: my secret
secret.setSecret("new secret");
console.log(secret.getSecret()); // Output: new secret