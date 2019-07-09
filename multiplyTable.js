function createMultiplyTable (start, end) {
	if(isValid(start, end))
		return printTable(start,end);
    return null;
}
function isValid(start, end){
	return start<end&&start>0&&end<1000;
}
function printTable(start, end){
	var result = "";
	for(var i=start;i<=end;i++){
		for(var j=start;j<=i;j++)
			result += j+"*"+i+"="+j*i+(j==i?"\n":"\t");
	}
	return result;
}
module.exports = {
	createMultiplyTable, isValid, printTable
}