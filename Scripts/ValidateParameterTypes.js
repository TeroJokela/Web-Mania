/*
 * Validates parameter types of a function using given list of valid types per parameter
 * 
 * Function parameters:
 * parameters: array of parameters of the function that needs checking
 * expectedParameterTypes: array of expected parameter types of the function that needs checking. See list of acceptable string in TypeOf.js. You can check for multiple types by nesting an array inside the array which contains the type strings for the single parameter
 * 
 * Return value: none
 * 
 * Throws TypeError exception if validation fails
*/
function ValidateParameterTypes(parameters, expectedParameterTypes) {
	for (let i = 0; i < expectedParameterTypes.length; i++) {
		let isValid = false;

		if (TypeOf(expectedParameterTypes[i] == "array")) {
			for (let j = 0; j < expectedParameterTypes[i].length; j++) {
				if (TypeOf(parameters[i]) == expectedParameterTypes[i][j]) {
					isValid = true;
					break;
				}
			}
		}
		else {
			if (parameters[i] == expectedParameterTypes[i]) {
				isValid = true;
			}
		}

		if (!isValid) {
			throw new TypeError(GenerateTypeErrorString(parameters, expectedParameterTypes));
		}
	}
}