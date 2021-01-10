



var Seattle = {
    
minPh:23,
maxPh:65,
avgCs:6.3,
Sales:[],
 randomCusNum:function () {
     
     var ResultRand= Math.floor(Math.random()*(Seattle.maxPh-Seattle.minPh +1)+Seattle.minPh);
return ResultRand;
},

SalePeHo:function () {
    var SalesPerHour=[];
for(x=0;x<14;x++){
SalesPerHour.push(Math.floor(Seattle.randomCusNum()*Seattle.avgCs));

}
Seattle.Sales=SalesPerHour;
//return [SalesPerHour];
}
};
Seattle.SalePeHo();
seatlelist();

function seatlelist(){
    var 
    var ULlist= document.getElementById("UL");
    var hours=6;
for(x=0;x<14;x++){
 var list=document.createElement("li");

var displayhour;
var PMorAM;
if (hours>0&&hours<12){
    PMorAM="AM";
    displayhour=hours;
}else if (hours>12){
    PMorAM="PM";
    displayhour=hours-12;
} else if (hours=12){
    PMorAM="PM";
    displayhour=12;
}
list.textContent=displayhour+" "+PMorAM+":  "+Seattle.Sales[x]+" coockies";
ULlist.appendChild(list);
hours++;
}

}

