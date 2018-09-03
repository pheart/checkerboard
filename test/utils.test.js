import assert from 'assert';
import * as Utils  from '../src/utils';

describe('# test utils', () => {
	let dataArr, dataArr1;

	before(() => {
		dataArr = [1,2];
		dataArr1 = [[2,2], [3,4], [5,6]];
	})

	it('# Utils isAvailableArray', () => {
		assert.equal(Utils.isAvailableArray([1]), true);
		assert.equal(Utils.isAvailableArray([]), false);
		assert.equal(Utils.isAvailableArray(''), false);
	})

	it('# Utils combineNoRepeatArray', () => {
		assert.equal(Utils.isSamePoints(Utils.combineNoRepeatArray([1,2,3], [3,4,5]),
										[1,2,3,4,5]), true);
	})

	it('# Utils containInArray', () => {
		assert.equal(Utils.containInArray(dataArr[0], dataArr), true);
		assert.equal(Utils.containInArray(dataArr1[1], dataArr1), true);
		assert.equal(Utils.containInArray([1,0], dataArr1), false);
	})

	it('# Utils isSamePoints', () => {
		assert.equal(Utils.isSamePoints([[2,2], [3,4], [5,6]], dataArr1), true);
		assert.equal(Utils.isSamePoints([[2,2], [3,4]], dataArr1), false);
		assert.equal(Utils.isSamePoints([[2,2], [3,4], [5,5]], dataArr1), false);
	})

}) 