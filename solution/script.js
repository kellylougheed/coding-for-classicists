window.onload = function() {
	// Your JavaScript goes below
	var submitButton = document.getElementById("submitButton");
	var inputBox = document.getElementById("inputBox");
	var wordSearched = document.getElementById("wordSearched");
	var results = document.getElementById("results");
	var results2 = document.getElementById("results2");
	submitButton.addEventListener("click", function() {
		// Do stuff!
		var latinWord = inputBox.value;
		wordSearched.innerText = latinWord;

		$.ajax({
        	url: "https://glosbe.com/gapi/translate?from=la&dest=eng&format=json&phrase="+latinWord,
        	dataType: 'jsonp',
	    	success: function(json) {
	    		// Do stuff!
	    		results.innerText = "";
	    		results2.innerText = "";
	    		if (json.tuc.length < 1) {
	    			results.innerText = "Sorry, no results were found. Please try searching a different word.";
	    		} else {
	    			// Do stuff!
	    			if (json.tuc[0].phrase) {
						results.innerText = json.tuc[0].phrase.text;
					}
					if (json.tuc[0].meanings[0].text) {
						results2.innerHTML = json.tuc[0].meanings[0].text;
					}
	    		}
	    	}
		});
	});

}
