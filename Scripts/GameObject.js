/*
 * Template class for all game objects. Should only be inherited, not to be used as itself
 * 
 * Constructor parameters:
 * skipUpdate: Used for skipping updates for this object
 * skipDraw: Used for skipping drawing for this object
 * skipTypeCheck: Skips parameter type validation if true. Should only be true in class constructors that inherit from this class
 * 
 * Functions:
 * Update: Used for processing updates for the game object. Inheriting classes which have no implementation of their own of this function will throw error if called.
 * Update parameters:
 * none
 * 
 * 
 * Draw: Used for drawing game objects on screen. Inheriting classes which have no implementation of their own of this function will throw error if called.
 * Draw parameters:
 * none
*/
class GameObject {
	constructor(skipUpdate = false, skipDraw = false, skipTypeCheck = false) {
		if (!skipTypeCheck) {
			const expectedParameterTypes = ["boolean", "boolean", "any"];
			ValidateParameterTypes(arguments, expectedParameterTypes);
		}

		this.skipUpdate = skipUpdate;
		this.skipDraw = skipDraw;
	}

	Update() {
		throw new Error("Class " + this.constructor.name + " has no Update function implemented!");
	}

	Draw() {
		throw new Error("Class " + this.constructor.name + " has no Draw function implemented!");
	}
}