const multiplyTable = require('../multiplyTable');

//createMultiplyTable的start<end测试
it ('should return null when invoke createMultiplyTable given start bigger than end', () => {
	//given
	const start = 3;
	const end = 1;
	//when
	const result = multiplyTable.createMultiplyTable(start,end);
	//then
    expect(result).toBe(null);
});

//isValid的start<end测试
it ('should return false when invoke isValid given start bigger than end', () => {
	//given
	const start = 3;
	const end = 1;
	//when
	const result = multiplyTable.isValid(start,end);
	//then
    expect(result).toBe(false);
});

//isValid正确输入测试
it ('should return true when invoke isValid given start is 3 and end is 7', () => {
	//given
	const start = 3;
	const end = 7;
	//when
	const result = multiplyTable.isValid(start,end);
	//then
    expect(result).toBe(true);
});


//printTable输出测试
it ('should return multiplyTable when invoke printTable given start is 2 and end is 4', () => {
	//given
	const start = 2;
	const end = 4;
	//when
	const result = multiplyTable.printTable(start,end);
	//then
    expect(result).toEqual('2*2=4\n2*3=6\t3*3=9\n2*4=8\t3*4=12\t4*4=16\n');
});

//createMultiplyTable输出测试
it ('should return multiplyTable when invoke createMultiplyTable given start is 2 and end is 4', () => {
	//given
	const start = 2;
	const end = 4;
	//when
	const result = multiplyTable.createMultiplyTable(start,end);
	//then
    expect(result).toEqual('2*2=4\n2*3=6\t3*3=9\n2*4=8\t3*4=12\t4*4=16\n');
});