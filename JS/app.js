
document.getElementById("seatlefun").addEventListener("mousedown", seattlerun);
document.getElementById("seatlefun").addEventListener("mouseup", RemoveSea);
document.getElementById("Tokyo").addEventListener("mousedown", TokyoRun);
document.getElementById("Tokyo").addEventListener("mouseup", RemoveTokyo);
document.getElementById("paris").addEventListener("mousedown", parisRun);
document.getElementById("paris").addEventListener("mouseup", Removeparis);
document.getElementById("lima").addEventListener("mousedown", limaRun);
document.getElementById("lima").addEventListener("mouseup", Removelima);
document.getElementById("dubai").addEventListener("mousedown", dubaiRun);
document.getElementById("dubai").addEventListener("mouseup", Removedubai);
function seattlerun(){
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
        var Total=0;
        var ULlist= document.getElementById("UL");
        var hours=6;
    for(x=0;x<14;x++){
     var list=document.createElement("li");
    list.className="seattle"
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
    for(x=0;x<Seattle.Sales.length;x++){
    
        Total=Total+Seattle.Sales[x];  
    }
    list.textContent="Total: "+Total;
    ULlist.appendChild(list);
    }
}
function RemoveSea(){
   // $( "p" ).remove();
    //$(".seattle").remove();
    var myobj = document.getElementById("UL");
    while (myobj.firstChild) {
        myobj.removeChild(myobj.firstChild);
    }
}
    function RemoveTokyo(){
        // $( "p" ).remove();
         //$(".seattle").remove();
         var myobj = document.getElementById("TokyoUL");
         while (myobj.firstChild) {
             myobj.removeChild(myobj.firstChild);
         }
        }
        function Removedubai(){
            // $( "p" ).remove();
             //$(".seattle").remove();
             var myobj = document.getElementById("dubaiUL");
             while (myobj.firstChild) {
                 myobj.removeChild(myobj.firstChild);
             }
            }
            function Removeparis(){
                // $( "p" ).remove();
                 //$(".seattle").remove();
                 var myobj = document.getElementById("parisUL");
                 while (myobj.firstChild) {
                     myobj.removeChild(myobj.firstChild);
                 }
                }
                function Removelima(){
                    // $( "p" ).remove();
                     //$(".seattle").remove();
                     var myobj = document.getElementById("limaUL");
                     while (myobj.firstChild) {
                         myobj.removeChild(myobj.firstChild);
                     }
                    }
    
      
function TokyoRun(){
    var Tokyo = {
    
    minPh:3,
    maxPh:24,
    avgCs:1.2,
    Sales:[],
     randomCusNum:function () {
         
         var ResultRand= Math.floor(Math.random()*(this.maxPh-this.minPh +1)+this.minPh);
    return ResultRand;
    },
    
    SalePeHo:function () {
        var SalesPerHour=[];
    for(x=0;x<14;x++){
    SalesPerHour.push(Math.floor(this.randomCusNum()*this.avgCs));
    
    }
    this.Sales=SalesPerHour;
    //return [SalesPerHour];
    }
    };

Tokyo.SalePeHo();

tokyolist();
function tokyolist(){
      var Total=0;  
    var ULlist= document.getElementById("TokyoUL");
    var hours=6;
for(x=0;x<14;x++){
 var list=document.createElement("li");
list.className="tokyo"
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
list.textContent=displayhour+" "+PMorAM+":  "+Tokyo.Sales[x]+" coockies";
ULlist.appendChild(list);
hours++;
}
for(x=0;x<Tokyo.Sales.length;x++){
    
    Total=Total+Tokyo.Sales[x];  
}
list.textContent="Total: "+Total;
ULlist.appendChild(list);
}

}

function dubaiRun(){
    var Dubai = {
    
    minPh:11,
    maxPh:38,
    avgCs:3.7,
    Sales:[],
     randomCusNum:function () {
         
         var ResultRand= Math.floor(Math.random()*(this.maxPh-this.minPh +1)+this.minPh);
    return ResultRand;
    },
    
    SalePeHo:function () {
        var SalesPerHour=[];
    for(x=0;x<14;x++){
    SalesPerHour.push(Math.floor(this.randomCusNum()*this.avgCs));
    
    }
    this.Sales=SalesPerHour;
    //return [SalesPerHour];
    }
    };

Dubai.SalePeHo();

dubaiolist();
function dubaiolist(){
        
    var ULlist= document.getElementById("dubaiUL");
    var hours=6;
    var Total=0;
for(x=0;x<14;x++){
    
 var list=document.createElement("li");
list.className="dubai"
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
list.textContent=displayhour+" "+PMorAM+":  "+Dubai.Sales[x]+" coockies ";
ULlist.appendChild(list);
hours++;
}
for(x=0;x<Dubai.Sales.length;x++){
    
    Total=Total+Dubai.Sales[x];  
}
list.textContent="Total: "+Total;
ULlist.appendChild(list);
}

}
function parisRun(){
    var Paris = {
    
    minPh:20,
    maxPh:38,
    avgCs:2.3,
    Sales:[],
     randomCusNum:function () {
         
         var ResultRand= Math.floor(Math.random()*(this.maxPh-this.minPh +1)+this.minPh);
    return ResultRand;
    },
    
    SalePeHo:function () {
        var SalesPerHour=[];
    for(x=0;x<14;x++){
    SalesPerHour.push(Math.floor(this.randomCusNum()*this.avgCs));
    
    }
    this.Sales=SalesPerHour;
    //return [SalesPerHour];
    }
    };

Paris.SalePeHo();

Parislist();
function Parislist(){
        
    var ULlist= document.getElementById("parisUL");
    var hours=6;
    var Total=0;
for(x=0;x<14;x++){
    
 var list=document.createElement("li");
list.className="paris"
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
list.textContent=displayhour+" "+PMorAM+":  "+Paris.Sales[x]+" coockies ";
ULlist.appendChild(list);
hours++;
}
for(x=0;x<Paris.Sales.length;x++){
    
    Total=Total+Paris.Sales[x];  
}
list.textContent="Total: "+Total;
ULlist.appendChild(list);
}

}
function limaRun(){
    var Lima = {
    
    minPh:2,
    maxPh:16,
    avgCs:4.6,
    Sales:[],
     randomCusNum:function () {
         
         var ResultRand= Math.floor(Math.random()*(this.maxPh-this.minPh +1)+this.minPh);
    return ResultRand;
    },
    
    SalePeHo:function () {
        var SalesPerHour=[];
    for(x=0;x<14;x++){
    SalesPerHour.push(Math.floor(this.randomCusNum()*this.avgCs));
    
    }
    this.Sales=SalesPerHour;
    //return [SalesPerHour];
    }
    };

Lima.SalePeHo();

Limalist();
function Limalist(){
        
    var ULlist= document.getElementById("limaUL");
    var hours=6;
    var Total=0;
for(x=0;x<14;x++){
    
 var list=document.createElement("li");
list.className="paris"
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
list.textContent=displayhour+" "+PMorAM+":  "+Lima.Sales[x]+" coockies ";
ULlist.appendChild(list);
hours++;
}
for(x=0;x<Lima.Sales.length;x++){
    
    Total=Total+Lima.Sales[x];  
}
list.textContent="Total: "+Total;
ULlist.appendChild(list);
}

}




