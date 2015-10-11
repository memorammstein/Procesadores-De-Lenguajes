var evaluateString = function evaluate(string) {
  'use strict';
  let states = estados();
  let analyzer = analizador();
  let feed = analyzer.feeder(string + ' ');
  let currentState = states.initialState;
  for (let symbol of feed) {
    currentState = analyzer.automatonFeed(states.statesObjArr, currentState, symbol);
  }
  if (states.finalStates.indexOf(currentState) > -1) {
    window.alert("Tu cadena es válida");
  } else {
    window.alert("Tu cadena es inválida");
  }

};
