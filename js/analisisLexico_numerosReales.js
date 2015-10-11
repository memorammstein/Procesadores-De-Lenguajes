function analizador() {
	'use strict';

	function* feeder (numberString) {
		for (let char of numberString) {
			yield char;
		}
	}

	//returns new state if valid, undefined if not
	function automatonFeed(statesObjArr, currentState, symbol) {
		let validStateObj = undefined;
		for (let stateObj of statesObjArr) {
			if (stateObj.state === currentState) {
				validStateObj = stateObj;
				break;
			}
		}
		if (validStateObj) {
			let defaultArc = undefined;
			for (let arc of validStateObj.arcs) {
				if (arc.canGoBy(symbol)) {
					return arc.to;
				}
				if (arc.canGoBy('other')) {
					defaultArc = arc;
				}
			}
			if (defaultArc) {
				return defaultArc.to;
			}
		}
		return undefined;
	}

	return {
		feeder: feeder,
		automatonFeed: automatonFeed
	};
};
