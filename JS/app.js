'use strict'
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
document.getElementById("custTable").addEventListener("mousedown", Render);
document.getElementById("custTable").addEventListener("mouseup", RemoveRender);
var triggernum = true;
var trigeruser=false;

var nameUs = document.getElementById("nameField");
var minUs = document.getAnimations("minField");
var maxUs = document.getElementById("maxField");
var avgUs = document.getElementById("avgField")
var sub = document.getElementById("formID");

sub.addEventListener("submit", submitRun);



function cities(name, minPh, maxPh, avgCs) {
    this.cityname = name;
    this.minPh = minPh;
    this.maxPh = maxPh;
    this.avgCs = avgCs;
    this.Sales = [];

}
cities.prototype.randomCusNum = function () {
    var ResultRand = Math.floor(Math.random() * (this.maxPh - this.minPh + 1) + this.minPh);
    return ResultRand;
}
cities.prototype.SalePeHo = function () {
    var SalesPerHour = [];
    for (var x = 0; x < 14; x++) {
        SalesPerHour.push(Math.floor(this.randomCusNum() * this.avgCs));

    }
    this.Sales = SalesPerHour;

    //return [SalesPerHour];
}


function SetDubaiValu() {
    var dubai = new cities('Dubai', 11, 38, 3.7)
    dubai.randomCusNum();
    dubai.SalePeHo();
    return dubai;
}
function SetSeattleValu() {
    var seattle = new cities("Seattle", 23, 65, 6.3)
    seattle.randomCusNum();
    seattle.SalePeHo();
    return seattle;
}
function SetTokyoValu() {
    var tokyo = new cities("Tokyo", 3, 24, 1.2)
    tokyo.randomCusNum();
    tokyo.SalePeHo();
    return tokyo;
}

function SetParisValu() {
    var paris = new cities("Paris", 20, 38, 2.3)
    paris.randomCusNum();
    paris.SalePeHo();
    return paris;
}
function SetLimaValu() {
    var lima = new cities("Lima", 2, 16, 4.6)
    lima.randomCusNum();
    lima.SalePeHo();
    return lima;
}
function RemoveRender() {
    setTimeout(timeo, 8000)

    // $( "p" ).remove();
    //$(".seattle").remove();
    function timeo() {
        var myobj = document.getElementById("Table")
        while (myobj.lastChild) {
            triggernum = true;
            myobj.removeChild(myobj.lastChild);
        }
    }



}


function Render() {

    if (triggernum) {

        var seattle = SetSeattleValu();
        var dubai = SetDubaiValu();
        var tokyo = SetTokyoValu();
        var paris = SetParisValu();
        var lima = SetLimaValu();


        TableVer();
        TableHorz();
        function TableVer() {
            var Total = 0;
            var Table = document.getElementById("Table");
            var TR = document.createElement("tr");
            Table.appendChild(TR);
            TR.id = "trigger"
            var Citynames = document.createElement("th")
            Citynames.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
            Citynames.textContent = "City Name"
            TR.appendChild(Citynames);

            var hours = 6;

            for (var x = 0; x < 14; x++) {
                var th = document.createElement("th");
                th.className = "dubai"
                var displayhour;
                var PMorAM;
                if (hours > 0 && hours < 12) {
                    PMorAM = "AM";
                    displayhour = hours;
                } else if (hours > 12) {
                    PMorAM = "PM";
                    displayhour = hours - 12;
                } else if (hours = 12) {
                    PMorAM = "PM";
                    displayhour = 12;
                }
                th.textContent = displayhour + " " + PMorAM
                th.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                TR.appendChild(th);
                //th.textContent=displayhour+" "+PMorAM+":  "+dubai.Sales[x]+" coockies";



                hours++;
            }
            var TotalText = document.createElement("th");
            TotalText.textContent = "Daily Location Total";
            TotalText.setAttribute("style", "border-bottom:4px inset      rgb(109, 167, 161);")
            TR.appendChild(TotalText);
        }
        function TableHorz() {
            var Table = document.getElementById("Table")
            var TRS = document.createElement("tr");
            Table.appendChild(TRS);
            TRS.id = "trs"
            var SeattleH = document.createElement("td");
            SeattleH.setAttribute("style", "padding-left:20px;border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
            SeattleH.textContent = "Seattle"
            var totalforeach = 0;
            TRS.appendChild(SeattleH);

            for (var x = 0; x < seattle.Sales.length; x++) {
                var seattSalVal = document.createElement("th");
                seattSalVal.textContent = seattle.Sales[x];

                totalforeach += seattle.Sales[x];
                seattSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                TRS.appendChild(seattSalVal);


            }
            var seattSalVal = document.createElement("th");
            seattSalVal.textContent = totalforeach;
            seattSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");

            TRS.appendChild(seattSalVal);
            //---------------------------------------
            totalforeach = 0;
            var TRT = document.createElement("tr");
            Table.appendChild(TRT);
            TRT.id = "trt"
            var TokyoH = document.createElement("td");
            TokyoH.textContent = "Tokyo"
            TokyoH.setAttribute("style", "padding-left:20px;border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
            TRT.appendChild(TokyoH);
            for (var x = 0; x < tokyo.Sales.length; x++) {
                totalforeach += tokyo.Sales[x];
                var tokyotSalVal = document.createElement("th");
                tokyotSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                tokyotSalVal.textContent = tokyo.Sales[x];
                TRT.appendChild(tokyotSalVal);

            }
            var tokyotSalVal = document.createElement("th");
            tokyotSalVal.textContent = totalforeach;
            tokyotSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");

            TRT.appendChild(tokyotSalVal);
            //------------------------------------------
            totalforeach = 0;
            var TRD = document.createElement("tr");
            Table.appendChild(TRD);
            TRD.id = "trd"
            var DubatiH = document.createElement("td");
            DubatiH.textContent = "Dubai"


            DubatiH.setAttribute("style", "padding-left:20px;border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
            TRD.appendChild(DubatiH);
            for (var x = 0; x < dubai.Sales.length; x++) {
                totalforeach += dubai.Sales[x];
                var dubaiSalVal = document.createElement("th");
                dubaiSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                dubaiSalVal.textContent = dubai.Sales[x];
                TRD.appendChild(dubaiSalVal);

            }
            var dubaiSalVal = document.createElement("th");
            dubaiSalVal.textContent = totalforeach;
            dubaiSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");

            TRD.appendChild(dubaiSalVal);
            //-------------------------------------------
            totalforeach = 0;
            var TRP = document.createElement("tr");
            Table.appendChild(TRP);
            TRP.id = "trp"
            var ParisH = document.createElement("td");
            ParisH.textContent = "Paris"
            ParisH.setAttribute("style", "padding-left:20px;border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
            TRP.appendChild(ParisH);
            for (var x = 0; x < paris.Sales.length; x++) {
                totalforeach += paris.Sales[x];
                var parisSalVal = document.createElement("th");
                parisSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                parisSalVal.textContent = paris.Sales[x];
                TRP.appendChild(parisSalVal);

            }
            var parisSalVal = document.createElement("th");
            parisSalVal.textContent = totalforeach;
            parisSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");

            TRP.appendChild(parisSalVal);
            //-------------------------------------------
            totalforeach = 0;

            var TRL = document.createElement("tr");
            Table.appendChild(TRL);
            TRL.id = "trl"
            var LimaH = document.createElement("td");
            LimaH.textContent = "Lima"
            LimaH.setAttribute("style", "padding-left:20px;border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
            TRL.appendChild(LimaH);
            for (var x = 0; x < lima.Sales.length; x++) {
                totalforeach += lima.Sales[x];
                var limaSalVal = document.createElement("th");
                limaSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                limaSalVal.textContent = lima.Sales[x];
                TRL.appendChild(limaSalVal);

            }
            var limaSalVal = document.createElement("th");
            limaSalVal.textContent = totalforeach;
            limaSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");

            TRL.appendChild(limaSalVal);
            //-------------------------------------------
            var totally = 0;
            var TRT = document.createElement("tr");
            Table.appendChild(TRT);
            TRT.id = "trT"
            var TotalH = document.createElement("td");
            TotalH.textContent = "Totals"
            TotalH.setAttribute("style", "padding-left:20px;border-right:4px inset  rgb(109, 167, 161);");
            TRT.appendChild(TotalH);
            for (var x = 0; x < lima.Sales.length; x++) {
                var Totalcell = document.createElement("th");
                var sum = lima.Sales[x] + paris.Sales[x] + seattle.Sales[x] + dubai.Sales[x] + tokyo.Sales[x];
                totally += sum;
                Totalcell.textContent = sum;
                Totalcell.setAttribute("style", "border-right:4px inset  rgb(109, 167, 161);");
                TRT.appendChild(Totalcell)
            }
            var Totallycell = document.createElement("th");
            Totallycell.textContent = totally;
            Totallycell.setAttribute("style", "border-top:4px inset      rgb(109, 167, 161);")
            TRT.appendChild(Totallycell)
            triggernum = false;
            //-------------------------------------------
        }
    }
}
function seattlerun() {
    var Seattle = {

        minPh: 23,
        maxPh: 65,
        avgCs: 6.3,
        Sales: [],
        randomCusNum: function () {

            var ResultRand = Math.floor(Math.random() * (Seattle.maxPh - Seattle.minPh + 1) + Seattle.minPh);
            return ResultRand;
        },

        SalePeHo: function () {
            var SalesPerHour = [];
            for (var x = 0; x < 14; x++) {
                SalesPerHour.push(Math.floor(Seattle.randomCusNum() * Seattle.avgCs));

            }
            Seattle.Sales = SalesPerHour;
            //return [SalesPerHour];
        }
    };
    Seattle.SalePeHo();
    seatlelist();
    function seatlelist() {
        var Total = 0;
        var ULlist = document.getElementById("UL");
        var hours = 6;
        for (var x = 0; x < 14; x++) {
            var list = document.createElement("li");
            list.className = "seattle"
            var displayhour;
            var PMorAM;
            if (hours > 0 && hours < 12) {
                PMorAM = "AM";
                displayhour = hours;
            } else if (hours > 12) {
                PMorAM = "PM";
                displayhour = hours - 12;
            } else if (hours = 12) {
                PMorAM = "PM";
                displayhour = 12;
            }
            list.textContent = displayhour + " " + PMorAM + ":  " + Seattle.Sales[x] + " coockies";
            ULlist.appendChild(list);
            hours++;
        }
        for (var x = 0; x < Seattle.Sales.length; x++) {

            Total = Total + Seattle.Sales[x];
        }
        var list = document.createElement("li");
        list.textContent = "Total: " + Total;
        ULlist.appendChild(list);
    }
}
function RemoveSea() {
    // $( "p" ).remove();
    //$(".seattle").remove();
    var myobj = document.getElementById("UL");
    while (myobj.firstChild) {
        myobj.removeChild(myobj.firstChild);
    }
}
function RemoveTokyo() {
    // $( "p" ).remove();
    //$(".seattle").remove();
    var myobj = document.getElementById("TokyoUL");
    while (myobj.firstChild) {
        myobj.removeChild(myobj.firstChild);
    }
}
function Removedubai() {
    // $( "p" ).remove();
    //$(".seattle").remove();
    var myobj = document.getElementById("dubaiUL");
    while (myobj.firstChild) {
        myobj.removeChild(myobj.firstChild);
    }
}
function Removeparis() {
    // $( "p" ).remove();
    //$(".seattle").remove();
    var myobj = document.getElementById("parisUL");
    while (myobj.firstChild) {
        myobj.removeChild(myobj.firstChild);
    }
}
function Removelima() {
    // $( "p" ).remove();
    //$(".seattle").remove();
    var myobj = document.getElementById("limaUL");
    while (myobj.firstChild) {
        myobj.removeChild(myobj.firstChild);
    }
}


function TokyoRun() {
    var Tokyo = {

        minPh: 3,
        maxPh: 24,
        avgCs: 1.2,
        Sales: [],
        randomCusNum: function () {

            var ResultRand = Math.floor(Math.random() * (this.maxPh - this.minPh + 1) + this.minPh);
            return ResultRand;
        },

        SalePeHo: function () {
            var SalesPerHour = [];
            for (var x = 0; x < 14; x++) {
                SalesPerHour.push(Math.floor(this.randomCusNum() * this.avgCs));

            }
            this.Sales = SalesPerHour;
            //return [SalesPerHour];
        }
    };

    Tokyo.SalePeHo();

    tokyolist();
    function tokyolist() {
        var Total = 0;
        var ULlist = document.getElementById("TokyoUL");
        var hours = 6;
        for (var x = 0; x < 14; x++) {
            var list = document.createElement("li");
            list.className = "tokyo"
            var displayhour;
            var PMorAM;
            if (hours > 0 && hours < 12) {
                PMorAM = "AM";
                displayhour = hours;
            } else if (hours > 12) {
                PMorAM = "PM";
                displayhour = hours - 12;
            } else if (hours = 12) {
                PMorAM = "PM";
                displayhour = 12;
            }
            list.textContent = displayhour + " " + PMorAM + ":  " + Tokyo.Sales[x] + " coockies";
            ULlist.appendChild(list);
            hours++;
        }
        for (var x = 0; x < Tokyo.Sales.length; x++) {

            Total = Total + Tokyo.Sales[x];
        }
        var list = document.createElement("li");
        list.textContent = "Total: " + Total;
        ULlist.appendChild(list);
    }

}

function dubaiRun() {
    var Dubai = {

        minPh: 11,
        maxPh: 38,
        avgCs: 3.7,
        Sales: [],
        randomCusNum: function () {

            var ResultRand = Math.floor(Math.random() * (this.maxPh - this.minPh + 1) + this.minPh);
            return ResultRand;
        },

        SalePeHo: function () {
            var SalesPerHour = [];
            for (var x = 0; x < 14; x++) {
                SalesPerHour.push(Math.floor(this.randomCusNum() * this.avgCs));

            }
            this.Sales = SalesPerHour;
            //return [SalesPerHour];
        }
    };

    Dubai.SalePeHo();

    dubaiolist();
    function dubaiolist() {

        var ULlist = document.getElementById("dubaiUL");
        var hours = 6;
        var Total = 0;
        for (var x = 0; x < 14; x++) {

            var list = document.createElement("li");
            list.className = "dubai"
            var displayhour;
            var PMorAM;
            if (hours > 0 && hours < 12) {
                PMorAM = "AM";
                displayhour = hours;
            } else if (hours > 12) {
                PMorAM = "PM";
                displayhour = hours - 12;
            } else if (hours = 12) {
                PMorAM = "PM";
                displayhour = 12;
            }
            list.textContent = displayhour + " " + PMorAM + ":  " + Dubai.Sales[x] + " coockies ";
            ULlist.appendChild(list);
            hours++;
        }
        for (var x = 0; x < Dubai.Sales.length; x++) {

            Total = Total + Dubai.Sales[x];
        }
        var list = document.createElement("li");
        list.textContent = "Total: " + Total;
        ULlist.appendChild(list);
    }

}
function parisRun() {
    var Paris = {

        minPh: 20,
        maxPh: 38,
        avgCs: 2.3,
        Sales: [],
        randomCusNum: function () {

            var ResultRand = Math.floor(Math.random() * (this.maxPh - this.minPh + 1) + this.minPh);
            return ResultRand;
        },

        SalePeHo: function () {
            var SalesPerHour = [];
            for (var x = 0; x < 14; x++) {
                SalesPerHour.push(Math.floor(this.randomCusNum() * this.avgCs));

            }
            this.Sales = SalesPerHour;
            //return [SalesPerHour];
        }
    };

    Paris.SalePeHo();

    Parislist();
    function Parislist() {

        var ULlist = document.getElementById("parisUL");
        var hours = 6;
        var Total = 0;
        for (var x = 0; x < 14; x++) {

            var list = document.createElement("li");
            list.className = "paris"
            var displayhour;
            var PMorAM;
            if (hours > 0 && hours < 12) {
                PMorAM = "AM";
                displayhour = hours;
            } else if (hours > 12) {
                PMorAM = "PM";
                displayhour = hours - 12;
            } else if (hours = 12) {
                PMorAM = "PM";
                displayhour = 12;
            }
            list.textContent = displayhour + " " + PMorAM + ":  " + Paris.Sales[x] + " coockies ";
            ULlist.appendChild(list);
            hours++;
        }
        for (var x = 0; x < Paris.Sales.length; x++) {

            Total = Total + Paris.Sales[x];
        }
        var list = document.createElement("li");
        list.textContent = "Total: " + Total;
        ULlist.appendChild(list);
    }

}
function limaRun() {
    var Lima = {

        minPh: 2,
        maxPh: 16,
        avgCs: 4.6,
        Sales: [],
        randomCusNum: function () {

            var ResultRand = Math.floor(Math.random() * (this.maxPh - this.minPh + 1) + this.minPh);
            return ResultRand;
        },

        SalePeHo: function () {
            var SalesPerHour = [];
            for (var x = 0; x < 14; x++) {
                SalesPerHour.push(Math.floor(this.randomCusNum() * this.avgCs));

            }
            this.Sales = SalesPerHour;
            //return [SalesPerHour];
        }
    };

    Lima.SalePeHo();

    Limalist();
    function Limalist() {

        var ULlist = document.getElementById("limaUL");
        var hours = 6;
        var Total = 0;
        for (var x = 0; x < 14; x++) {

            var list = document.createElement("li");
            list.className = "paris"
            var displayhour;
            var PMorAM;
            if (hours > 0 && hours < 12) {
                PMorAM = "AM";
                displayhour = hours;
            } else if (hours > 12) {
                PMorAM = "PM";
                displayhour = hours - 12;
            } else if (hours = 12) {
                PMorAM = "PM";
                displayhour = 12;
            }
            list.textContent = displayhour + " " + PMorAM + ":  " + Lima.Sales[x] + " coockies ";
            ULlist.appendChild(list);
            hours++;
        }
        for (var x = 0; x < Lima.Sales.length; x++) {

            Total = Total + Lima.Sales[x];
        }
        var list = document.createElement("li");
        list.textContent = "Total: " + Total;
        ULlist.appendChild(list);
    }

}

function submitRun(event) {

    event.preventDefault();

    // var nameinput=nameUs.value
    // var mininput=minUs.event.targe
    // var maxinput=maxUs.value
    // var avginput=avgUs.value
    var name = event.target.nameField.value
    var minu = parseInt(event.target.minField.value)
    var maxu = parseInt(event.target.maxField.value)
    var avgi = parseInt(event.target.avgField.value)


    function SetUserValu() {
        var userinfo = new cities(name, minu, maxu, avgi)

        userinfo.randomCusNum();
        userinfo.SalePeHo();
        return userinfo;
    }

    var userinfo = SetUserValu()



    Render();
    function Render() {

        
        if (triggernum) {

            var seattle = SetSeattleValu();
            var dubai = SetDubaiValu();
            var tokyo = SetTokyoValu();
            var paris = SetParisValu();
            var lima = SetLimaValu();


            TableVer();
            TableHorz();
            function TableVer() {
                var Total = 0;
                var Table = document.getElementById("Table");
                var TR = document.createElement("tr");
                Table.appendChild(TR);
                TR.id = "trigger"
                var Citynames = document.createElement("th")
                Citynames.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                Citynames.textContent = "City Name"
                TR.appendChild(Citynames);

                var hours = 6;

                for (var x = 0; x < 14; x++) {
                    var th = document.createElement("th");
                    th.className = "dubai"
                    var displayhour;
                    var PMorAM;
                    if (hours > 0 && hours < 12) {
                        PMorAM = "AM";
                        displayhour = hours;
                    } else if (hours > 12) {
                        PMorAM = "PM";
                        displayhour = hours - 12;
                    } else if (hours = 12) {
                        PMorAM = "PM";
                        displayhour = 12;
                    }
                    th.textContent = displayhour + " " + PMorAM
                    th.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                    TR.appendChild(th);
                    //th.textContent=displayhour+" "+PMorAM+":  "+dubai.Sales[x]+" coockies";



                    hours++;
                }
                var TotalText = document.createElement("th");
                TotalText.textContent = "Daily Location Total";
                TotalText.setAttribute("style", "border-bottom:4px inset      rgb(109, 167, 161);")
                TR.appendChild(TotalText);
            }
            function TableHorz() {
                var totalforeach = 0;
                var Table = document.getElementById("Table")
                var TRU = document.createElement("tr");
                Table.appendChild(TRU);
                TRU.id = "tru"
                var cityU = document.createElement("td");
                cityU.setAttribute("style", "padding-left:20px;border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                cityU.textContent = name

                TRU.appendChild(cityU);

                for (var x = 0; x < userinfo.Sales.length; x++) {
                    var userVal = document.createElement("th");
                    userVal.textContent = userinfo.Sales[x];

                    totalforeach += userinfo.Sales[x];
                    userVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                    TRU.appendChild(userVal);


                }
                var userVal = document.createElement("th");
                userVal.textContent = totalforeach;
                userVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");

                TRU.appendChild(userVal);
                //---------------------------------------
                //-----------------------------------------
                var TRS = document.createElement("tr");
                Table.appendChild(TRS);
                TRS.id = "trs"
                var SeattleH = document.createElement("td");
                SeattleH.setAttribute("style", "padding-left:20px;border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                SeattleH.textContent = "Seattle"
                var totalforeach = 0;
                TRS.appendChild(SeattleH);

                for (var x = 0; x < seattle.Sales.length; x++) {
                    var seattSalVal = document.createElement("th");
                    seattSalVal.textContent = seattle.Sales[x];

                    totalforeach += seattle.Sales[x];
                    seattSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                    TRS.appendChild(seattSalVal);


                }
                var seattSalVal = document.createElement("th");
                seattSalVal.textContent = totalforeach;
                seattSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");

                TRS.appendChild(seattSalVal);
                //---------------------------------------
                totalforeach = 0;
                var TRT = document.createElement("tr");
                Table.appendChild(TRT);
                TRT.id = "trt"
                var TokyoH = document.createElement("td");
                TokyoH.textContent = "Tokyo"
                TokyoH.setAttribute("style", "padding-left:20px;border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                TRT.appendChild(TokyoH);
                for (var x = 0; x < tokyo.Sales.length; x++) {
                    totalforeach += tokyo.Sales[x];
                    var tokyotSalVal = document.createElement("th");
                    tokyotSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                    tokyotSalVal.textContent = tokyo.Sales[x];
                    TRT.appendChild(tokyotSalVal);

                }
                var tokyotSalVal = document.createElement("th");
                tokyotSalVal.textContent = totalforeach;
                tokyotSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");

                TRT.appendChild(tokyotSalVal);
                //------------------------------------------
                totalforeach = 0;
                var TRD = document.createElement("tr");
                Table.appendChild(TRD);
                TRD.id = "trd"
                var DubatiH = document.createElement("td");
                DubatiH.textContent = "Dubai"


                DubatiH.setAttribute("style", "padding-left:20px;border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                TRD.appendChild(DubatiH);
                for (var x = 0; x < dubai.Sales.length; x++) {
                    totalforeach += dubai.Sales[x];
                    var dubaiSalVal = document.createElement("th");
                    dubaiSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                    dubaiSalVal.textContent = dubai.Sales[x];
                    TRD.appendChild(dubaiSalVal);

                }
                var dubaiSalVal = document.createElement("th");
                dubaiSalVal.textContent = totalforeach;
                dubaiSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");

                TRD.appendChild(dubaiSalVal);
                //-------------------------------------------
                totalforeach = 0;
                var TRP = document.createElement("tr");
                Table.appendChild(TRP);
                TRP.id = "trp"
                var ParisH = document.createElement("td");
                ParisH.textContent = "Paris"
                ParisH.setAttribute("style", "padding-left:20px;border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                TRP.appendChild(ParisH);
                for (var x = 0; x < paris.Sales.length; x++) {
                    totalforeach += paris.Sales[x];
                    var parisSalVal = document.createElement("th");
                    parisSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                    parisSalVal.textContent = paris.Sales[x];
                    TRP.appendChild(parisSalVal);

                }
                var parisSalVal = document.createElement("th");
                parisSalVal.textContent = totalforeach;
                parisSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");

                TRP.appendChild(parisSalVal);
                //-------------------------------------------
                totalforeach = 0;

                var TRL = document.createElement("tr");
                Table.appendChild(TRL);
                TRL.id = "trl"
                var LimaH = document.createElement("td");
                LimaH.textContent = "Lima"
                LimaH.setAttribute("style", "padding-left:20px;border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                TRL.appendChild(LimaH);
                for (var x = 0; x < lima.Sales.length; x++) {
                    totalforeach += lima.Sales[x];
                    var limaSalVal = document.createElement("th");
                    limaSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");
                    limaSalVal.textContent = lima.Sales[x];
                    TRL.appendChild(limaSalVal);

                }
                var limaSalVal = document.createElement("th");
                limaSalVal.textContent = totalforeach;
                limaSalVal.setAttribute("style", "border-right:4px inset      rgb(109, 167, 161);border-bottom:4px inset      rgb(109, 167, 161);");

                TRL.appendChild(limaSalVal);
                //-------------------------------------------
                var totally = 0;
                var TRT = document.createElement("tr");
                Table.appendChild(TRT);
                TRT.id = "trT"
                var TotalH = document.createElement("td");
                TotalH.textContent = "Totals"
                TotalH.setAttribute("style", "padding-left:20px;border-right:4px inset  rgb(109, 167, 161);");
                TRT.appendChild(TotalH);
                for (var x = 0; x < lima.Sales.length; x++) {
                    var Totalcell = document.createElement("th");
                    var sum = lima.Sales[x] + paris.Sales[x] + seattle.Sales[x] + dubai.Sales[x] + tokyo.Sales[x] + userinfo.Sales[x];
                    totally += sum;
                    Totalcell.textContent = sum;
                    Totalcell.setAttribute("style", "border-right:4px inset  rgb(109, 167, 161);");
                    TRT.appendChild(Totalcell)
                }
                var Totallycell = document.createElement("th");
                Totallycell.textContent = totally;
                Totallycell.setAttribute("style", "border-top:4px inset      rgb(109, 167, 161);")
                TRT.appendChild(Totallycell)
                triggernum = false;
                //-------------------------------------------
            }
        }
    }


  
}