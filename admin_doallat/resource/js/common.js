//숫자 앞에 '0'채우기
function pad(n, width) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

//검색기간(등록일자, 최근일자) 양식 자동완성
function auto_date_format( e, oThis )
{
	var num_arr = [
		97, 98, 99, 100, 101, 102, 103, 104, 105, 96,
		48, 49, 50, 51, 52, 53, 54, 55, 56, 57
	]

	var key_code = ( e.which ) ? e.which : e.keyCode;
	if( num_arr.indexOf( Number( key_code ) ) != -1 )
	{
		var len = oThis.value.length;
		if( len == 4 ) oThis.value += "-";
		if( len == 7 ) oThis.value += "-";
	}
}
