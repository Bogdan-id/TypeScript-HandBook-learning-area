/*********/
//  var  
/*********/
// var declarations are accessible anywhere within their containing function, module, namespace, or global scope
function f(shouldInitialize: boolean) {
	if (shouldInitialize) {
			var x = 10;
	}
	return x
}

f(true)  // returns '10'
f(false) // returns 'undefined'