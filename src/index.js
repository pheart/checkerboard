import * as Utils from './utils';

/** 
 * 棋盘size
 * @params {Array} board 棋盘
 * @return {Number} 
 */
function getBoardSize(board) {
	return board[0].length;
}

/** 
 * 获取另外一个玩家名
 * @params {String} o  当前玩家名
 * @return {String} 
 */
function getOtherPlayer(o) {
	let players = ['x', 'o'];
	return o === players[0] ? players[1] : players[0];
}

/** 
 * 根据坐标点获取二维数组中对应的数值
 * @params {Array} point  点坐标
 * @params {Array} board  棋盘
 * @return {String} 某坐标点数值
 */
function getValueFromPoint(point, board) {
	return board[point[0]][point[1]];
}

/** 
 * 某一横排的坐标点集合
 * @params {Number} x    第x行
 * @params {Number} size 
 * @return {Array}  坐标点集合
 */
function getHorizontalPoints(x, size) {
	let points = [];
	for (let y=0; y<size; y++) {
		points.push([x, y]);
	}

	return points;
}

/** 
 * 某一竖排的坐标点集合
 * @params {Number} y    第y列
 * @params {Number} size 
 * @return {Array}  坐标点集合
 */
function getVerticalPoints(y, size) {
	let points = [];
	for (let x=0; x<size; x++) {
		points.push([x, y]);
	}
	return points;
}

/** 
 * 正对角的坐标点集合
 * @params {Number} size 
 * @return {Array} 坐标点集合
 */
function getPositiveSlantPoints(size) {
	let points = [], i = 0;
	while(i<size) {
		points.push([i, i]);
		i++;
	}

	return points;
}

/** 
 * 反对角的坐标点集合
 * @params {Number} size 
 * @return {Array} 坐标点集合
 */
function getNegativeSlantPoints(size) {
	let points = [], i = 0;
	while(i<size) {
		points.push([i, size-1-i]);
		i++;
	}

	return points;
}
 
/**
 * 从坐标点集合中获取可获胜的集合点坐标
 * @params {String} player 玩家
 * @params {Array}  points 坐标点集合 
 * @params {Array}  board  棋盘
 * @return {Array} 坐标点
 */
function getWinPointFromPoints(player, points, board) {
	let otherPlayer = getOtherPlayer(player),
		canPlayPoint = [],
		playerCount = 0,
		size = board[0].length;

	points.forEach((point, index) => {
		let value = getValueFromPoint(point, board);
		if (value != player && value != otherPlayer) 
			canPlayPoint.push(point);
		if (value === player) 
			playerCount++;
	});

	if (canPlayPoint.length === 1 && playerCount === size-1) 
		return canPlayPoint;
	return [];
}

/**
 * 从某个坐标点取可获胜的坐标点集合
 * @params {Array}  point  坐标点 [0,0]
 * @params {String} player 玩家 'x'
 * @params {Array}  board  棋盘  [[], []]
 * @return {Array} 坐标点集合
 */
function getResultFromPoint(point, player, board) {
	var result = [],
		size = getBoardSize(board),
		x = point[0],
		y = point[1];

	if (y === 0) {
		let results = getWinPointFromPoints(player, getHorizontalPoints(x, size), board);
		if (Utils.isAvailableArray(results)) result = result.concat(results);
	}

	if (x === 0) {
		let results = getWinPointFromPoints(player, getVerticalPoints(y, size), board);
		if (Utils.isAvailableArray(results)) result = result.concat(results); 
	}

	if (x === 0 && y === 0) {
		let results = getWinPointFromPoints(player, getPositiveSlantPoints(size), board);
		if (Utils.isAvailableArray(results)) result = result.concat(results);
	}

	if (x === 0 && y === size-1) {
		let results = getWinPointFromPoints(player, getNegativeSlantPoints(size), board);
		if (Utils.isAvailableArray(results)) result = result.concat(results);
	}

	return result;
}

/**
 * 入口
 * @params {String} player 玩家名字
 * @params {Array}  board  棋盘
 * @return {Array}         返回所有可获胜的结果
 */
function start(player, board) {
	let n = board[0].length,
		result = [];

	for (let row=0; row<n; row++) {
		for (let col=0; col<n; col++) {
			result = Utils.combineNoRepeatArray(getResultFromPoint([row, col], player, board), result);
		}
	}
	return result;
}

export default start;
