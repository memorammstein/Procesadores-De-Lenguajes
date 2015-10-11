function estados() {
  'use strict';

  let states = [
		{
			state: '12',
			arcs: [
				{
					to: '13',
					canGoBy: symbol => isDigit(symbol)
				}
			]
		},
    {
			state: '13',
			arcs: [
				{
					to: '13',
					canGoBy: symbol => isDigit(symbol)
				},
        {
					to: '14',
					canGoBy: symbol => symbol == '.' ? true : false
				},
        {
					to: '16',
					canGoBy: symbol => symbol == 'E' || symbol == 'e' ? true : false
				},
        {
					to: '20',
					canGoBy: symbol => symbol == 'other' ? true : false
				}
			]
		},
    {
			state: '14',
			arcs: [
				{
					to: '15',
					canGoBy: symbol => isDigit(symbol)
				}
			]
		},
    {
			state: '15',
			arcs: [
				{
					to: '15',
					canGoBy: symbol => isDigit(symbol)
				},
        {
					to: '16',
					canGoBy: symbol => symbol == 'E' || symbol == 'e' ? true : false
				},
        {
					to: '21',
					canGoBy: symbol => symbol == 'other' ? true : false
				}
			]
		},
    {
			state: '16',
			arcs: [
        {
					to: '17',
					canGoBy: symbol => symbol == '+' || symbol == '-' ? true : false
				},
        {
					to: '18',
					canGoBy: symbol => isDigit(symbol)
				}
			]
		},
    {
			state: '17',
			arcs: [
				{
					to: '18',
					canGoBy: symbol => isDigit(symbol)
				}
			]
		},
    {
			state: '18',
			arcs: [
				{
					to: '18',
					canGoBy: symbol => isDigit(symbol)
				},
        {
					to: '19',
					canGoBy: symbol => symbol == 'other' ? true : false
				}
			]
		},
    {
			state: '19',
			arcs: [
				{
					to: '19',
					canGoBy: symbol => symbol ? true : false
				}
			]
		},
    {
			state: '20',
			arcs: [
				{
					to: '20',
					canGoBy: symbol => symbol ? true : false
				}
			]
		},
    {
			state: '21',
			arcs: [
				{
					to: '21',
					canGoBy: symbol => symbol ? true : false
				}
			]
		}
	];

  function isDigit(symbol) {
    'use strict';
    let n = parseInt(symbol);
		return n >= 0 && n <= 9 ? true : false;
	}

  return {
    statesObjArr: states,
    initialState: '12',
    finalStates: ['19', '20', '21']
  };
};
