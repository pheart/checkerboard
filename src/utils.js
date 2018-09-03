
/**
 * 是否数组
 * @params {*} o 
 * @return {Boolean}
 */
export function isArray(o) {
	return o instanceof Array;
}

/**
 * 是否可用的数组
 * @params {*} o 
 * @return {Boolean}
 */
export function isAvailableArray(o) {
	return !!(o && isArray(o) && o.length);
}

/**
 * 两个数组合成一个不重复的数组
 * @params {Array} o 参数可为多个数组
 * @return {Array}
 */
export function combineNoRepeatArray(o) {
	let result = [],
		argumentList = Array.prototype.slice.call(arguments, 0);

	if (isAvailableArray(argumentList)) {
		argumentList.forEach((argument, index) => {
			if (!isArray(argument)) return true;
			argument.forEach((item, i) => {
				if (!containInArray(item, result)) 
					result.push(item);
			})
		})
	}

	return result;
}

/**
 * 比较位置点 
 * 元素相同但位置不同，亦返回true, 比如  [1,2,3] & [2,1,3]
 * @params {Array} current 
 * @params {Array} source 对比数组
 * @return {Boolean}
 */
export function isSamePoints(current, source) {
	if (!isArray(current) || !this.isArray(source)) 
		return false;
	if (current.length != source.length) 
		return false;

	let number = 0;
	for (let i=0; i<current.length; i++) {
		if (this.containInArray(current[i], source))
			number++;
	}

	return number === current.length;
}

/**
 * 数组中是否包含此值
 * @params {*} current 
 * @params {Array} source 对比数组
 * @return {Boolean} 
 */
export function containInArray(current, source) {
	if (!isArray(source)) return false;
	
	for (let i=0; i<source.length; i++) {
		if (JSON.stringify(current) === JSON.stringify(source[i])) 
			return true;
	}

	return false;
}