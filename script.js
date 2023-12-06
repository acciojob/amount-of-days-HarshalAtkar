//your JS code here. If required.
let y=prompt("gg");
function daysOfAYear (y){
    if (year % 4 == 0||(year % 100 != 0 &&year % 400 == 0))
{
	return 365;
}else{
	return 366;
}
};