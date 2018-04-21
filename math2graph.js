class Formula
{
	constructor()
	{
		this.attr = "";
		this.value = "";
		this.child = [];
	}
}

class Token
{
	constructor(attr,str)
	{
		this.attr = attr;
		this.str = str;
	}
}

class TokenList()
{
	constructor()
	{
		this.array = new Array();
	}
}

window.onload = function()
{
	document.getElementById("run").onclick = function()
	{
		var str = document.getElementById("math_txt").value;
		//var result = parse(str);
		document.getElementById("test").innerHTML = getInTex(str);
	};
};

var commands = {

};
function parse(str)
{

}

function getBetween(str,reg0,reg1)
{
	var start = exeRegs(str,reg0)[0];
	var end_list = exeRegs(str,reg1);
	var end = end_list[end_list.length-1];

	var start_point = start.index+start[0].length;
	var end_point = end.index;

	return str.slice(start_point,end_point);
}

function getInTex(str)
{
	var reg0 = new RegExp('\\(\\$','g');
	var reg1 = new RegExp('\\$\\)','g');
	return getBetween(str,reg0,reg1);
}


function exeRegs(str,reg)
{
	var i=0;
	var result = new Array();
	while(hoge = reg.exec(str))
	{
		result.push(hoge);
	}
	return result;
}


function trush()
{

	var users = 'user-g,user-a,user-k,user-d,user-z,user-m';
	 
	//a〜cの値を持つユーザーIDを抽出する
	var pattern = new RegExp( 'user' );
	var result = users.match( pattern );
	console.log( result );


}
