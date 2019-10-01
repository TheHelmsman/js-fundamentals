/**
 * Run followin code in jsfiddle.net
 */
function loadScript() {
  
  return new Promise(function(resolve, reject) {

		// Loading the jQuery code
    request = new XMLHttpRequest();
    request.open("GET", "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js", true);
    request.send(null);

    request.onreadystatechange = function() {
      if(request.readyState === 4) { // What does this even mean?
        if(request.status === 200) {
          console.log(request.responseText);
          alert("Done using XHR!");
          resolve(request.statusText);
        } else {
        	reject(new Error(`Script load error for ${src}`));
        }
      }
    }

    console.log('new Promise');
  });
}

let promise = loadScript();

promise.then(
  script => console.log(`${script} is loaded!`),
  error => console.log(`Error: ${error.message}`)
);

promise.then(script => console.log('Another handler...'));
