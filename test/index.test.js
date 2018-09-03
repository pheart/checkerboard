import assert from 'assert';
import MockData from './mockData';
import * as Utils from '../src/utils';
import Index from '../src';

describe('# test checkerboard game', function() {

	it('# return the correct value, use player X', function() {
		var MockPlayXData = MockData.playX;
		MockPlayXData.forEach(function(item, index) {
			let targetList = item.name,
				expectList = item.expect,
				result = Index('x', targetList);  console.log(result)

			if (!expectList.length)	{
				assert.equal(result.length, 0);
			} else {
				assert.equal(Utils.isSamePoints(result, expectList), true);
			}
		})
	})

	it('# return the correct value, use player O', function() {
		var MockPlayXData = MockData.playO;
		MockPlayXData.forEach(function(item, index) {
			let targetList = item.name,
				expectList = item.expect,
				result = Index('o', targetList);  console.log(result)

			if (!expectList.length)	{
				assert.equal(result.length, 0);
			} else {
				assert.equal(Utils.isSamePoints(result, expectList), true);
			}
		})
	})

})