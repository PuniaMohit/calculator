


function dis(a){	
    document.getElementById("ans").value+=a
}

function che(){
    var ans=document.getElementById("ans").value
    console.log(ans)
		var res = [];
		var answer;
		
		if(ans.includes("+")){
            console.log(ans)
		res = ans.split('+');
        console.log(res)
		return parseInt(res[0]) + parseInt(res[1]);
		}
		
		else if(ans.includes("-")){
		res = ans.split('-');
		return parseInt(res[0]) - parseInt(res[1]);
		}
		
		else if(ans.includes("/")){
		res = ans.split('/');
		return parseInt(res[0]) / parseInt(res[1]);
		}
		
		else{
		res = ans.split('*');
		return answer= parseInt(res[0]) * parseInt(res[1]);
		}
}
		
function solve(){	
var a = che()
console.log(a)
document.getElementById("ans").value = a; 
}
	
function clr(){
       document.getElementById("ans").value="";
			
	}



