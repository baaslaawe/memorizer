function specialCharBoxKeyDown(evt, input) {
}

function specialCharBoxKeyPress(evt, input) {
}

/*
' (APOSTROPHE)  	C  	�
'(APOSTROPHE) 	e, y, u, i, o, a , �, �, �, �, �
"(QUOTATION MARK) 	e, u, i, o, a 	�, �, �, �, �
`(ACCENT GRAVE) 	e, u, i, o 	�, �, �, �
~(TILDE) 	o, n 	�, �
^(CARET) 	e, u, i, o, a 	�, �, �, �, �
$(DOLLAR) s �
*/
function specialCharBoxKeyUp(evt, input) {
  var substs = [
		["'C", "�"],
		["'e", "�"],
		["'y", "�"],
		["'u", "�"],
		["'i", "�"],								
		["'o", "�"],			
		["'a", "�"],		
		['"e', '�'],		
		['"u', '�'],
		['"U', '�'],
		['"i', '�'],		
		['"o', '�'],
		['"O', '�'],
		['"a', '�'],
		['"A', '�'],
		['`e', '�'],		
		['`u', '�'],		
		['`i', '�'],		
		['`o', '�'],
		['~o', '�'],		
		['~n', '�'],		
		['^e', '�'],		
		['^u', '�'],
		['^i', '�'],
		['^o', '�'],
		['^a', '�'],						
		['$s', '�']
	];
  
	var lastChars = input.value.substring(input.value.length - 2, input.value.length);

	var i;
	for (i = 0; i < substs.length; i++) {
	  if (substs[i] != undefined && lastChars == substs[i][0]) {
	    input.value = input.value.substring(0, input.value.length - substs[i][0].length) + substs[i][1];
	    break;
	  }
	}
}