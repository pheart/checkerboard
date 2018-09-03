export default {
	playX: [
		{
			name: [ ['o', 'e', 'e'],
					['o', 'x', 'o'],
	  				['x', 'x', 'e' ]],
	  		expect: [ [2, 2], [0, 1], [0, 2] ]		
		},
		{
			name: [ ['x', 'o', 'o'],
					['x', 'x', 'e'],
					['e', 'o', 'e' ]],
			expect: [ [2, 2], [1, 2], [2, 0] ]
		},
		{
			name: [ ['x', 'x', 'o'],
	  				['e', 'e', 'e'],
	  				['e', 'e', 'e' ]],
	  		expect: []
		},
		{
			name: [ ['o', 'o', 'o'],
	  				['e', 'e', 'e'],
	  				['e', 'e', 'e' ]],
	  		expect: []		
		},
		{
			name: [ ['o', 'e'], ['x', 'e']],
			expect: [ [1, 1], [0, 1]]
		},
		{
			name: [ ['x', 'e', 'x', 'x'], ['o', 'x', 'e', 'e'], ['o', 'e', 'x', 'e'], ['o', 'o', 'o', 'e']],
			expect: [[0, 1], [3,3]]
		}
	],
	playO: [
		{
			name: [ ['o', 'e', 'e'],
					['o', 'x', 'o'],
	  				['x', 'x', 'e' ]],
	  		expect: []		
		},
		{
			name: [ ['x', 'o', 'o'],
					['x', 'e', 'x'],
					['e', 'o', 'e' ]],
			expect: [[1, 1]]
		},
		{
			name: [ ['x', 'x', 'o'],
	  				['e', 'e', 'e'],
	  				['e', 'e', 'e' ]],
	  		expect: []
		},
		{
			name: [ ['o', 'o', 'o'],
	  				['e', 'e', 'e'],
	  				['e', 'e', 'e' ]],
	  		expect: []		
		},
		{
			name: [ ['o', 'e'], ['x', 'e']],
			expect: [ [1, 1], [0, 1]]
		},
		{
			name: [ ['x', 'e', 'x', 'x'], ['o', 'x', 'e', 'e'], ['o', 'e', 'x', 'e'], ['o', 'o', 'o', 'e']],
			expect: [[3,3]]
		}
	]
}