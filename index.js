function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
  console.log("I was called!");
}
console.log(say("Howdy", "partner"));
function say(greeting, firstName) {
  console.log("I was called!");
  return `${greeting}, ${firstName}!`;
}