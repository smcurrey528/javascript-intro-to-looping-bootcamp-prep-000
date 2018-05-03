for ([initialization];
[condition]; [iteration]) {
  [loopBody]
}
// i is set equal to 1
// as long as i is less than 100 execute the code in the loopBody
// - which is print "Hello World"; increment i each time the code in loopBody is executed
 
for (var i = 1; i < 100; i++) {
  console.log( "Hello World the " + i + " time" );
}
 
// The above prints:
// Hello World the 1 time
// Hello World the 2 time
// Hello World the 3 time
