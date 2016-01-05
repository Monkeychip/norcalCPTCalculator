
<script>
//SRCUP
var FSGlobal = {};

jQuery(document).ready(function($){

  //SOUTH
    FSGlobal.$SFreshGirlsTotal =  [18,17,15,17,17,19]; // race 1,2,3,4,5, states
    FSGlobal.$SFreshBoysD1Total = [34,30,28,26,32,37] ; // race 1,2,3,4,5, states
    FSGlobal.$SFreshBoysD2Total = [29,35,27,30,28,38] ; // race 1,2,3,4,5, states
    FSGlobal.$SSophGirlsTotal =  [14,13,10,11,12,15]; // from here forward put correct amounts
    FSGlobal.$SSophBoysD1Total = [32,32,30,29,28,37] ; // race 1,2,3,4,5, states
    FSGlobal.$SSophBoysD2Total = [25,25,25,24,28,35] ; // race 1,2,3,4,5, states
    FSGlobal.$SJVGirlsTotal =  [20,17,14,13,16,23]; // race 1,2,3,4,5, states
    FSGlobal.$SJVBoysD1Total = [32,29,24,27,27,37] ; // race 1,2,3,4,5, states
    FSGlobal.$SJVBoysD2Total = [47,47,37,37,33,52] ; // race 1,2,3,4,5, states
    FSGlobal.$SVarsityGirlsTotal =  [6,6,6,6,6,6]; // race 1,2,3,4,5, states
    FSGlobal.$SVarsityBoysTotal = [20,21,18,17,19,22] ; // race 1,2,3,4,5, states
  //NORTH ALL #S NEED TO BE CHANGED
    FSGlobal.$NFreshGirlsTotal =  [24,23,22,22,25,26]; 
    FSGlobal.$NFreshBoysD1Total = [47,43,44,42,42,53] ; 
    FSGlobal.$NFreshBoysD2Total = [44,49,33,45,40,56] ; 
    FSGlobal.$NSophGirlsTotal =  [29,27,22,20,23,32]; 
    FSGlobal.$NSophBoysD1Total = [34,32,29,28,33,35] ; 
    FSGlobal.$NSophBoysD2Total = [53,59,49,55,49,64] ; 
    FSGlobal.$NJVGirlsTotal =  [24,26,21,17,20,29]; 
    FSGlobal.$NJVBoysD1Total = [36,35,33,35,32,46] ; 
    FSGlobal.$NJVBoysD2Total = [76,66,68,60,65,87] ; 
    FSGlobal.$NVarsityGirlsTotal =  [11,10,11,11,11,13]; 
    FSGlobal.$NVarsityBoysTotal = [27,25,22,21,26,30] ; 

    FSGlobal.$race1 = $("#field38448661");  //race 1
    FSGlobal.$race2 = $("#field38448672");
    FSGlobal.$race3 = $("#field38448674");  
    FSGlobal.$race4 = $("#field38448676");  
    FSGlobal.$race5 = $("#field38448677");
    FSGlobal.$race6 = $("#field38448678");
    FSGlobal.raceResults = [];

    FSGlobal.$conference = $("input[name='field38448668']:checked"); //to get value just .val() returns the conference selected
    FSGlobal.$category = $("#field38448578"); //returns category they were in
    FSGlobal.$grade = $("#field38448658");
    FSGlobal.$CPT = $("#field38448966"); //where the magic happens

    FSGlobal.$nxtBtn = $("#fsNextButton2220344");
    FSGlobal.$previousBtn = $("#fsPreviousButton2220344");
    FSGlobal.$submitBtn = $("#fsSubmitButton2220344");

    FSGlobal.secondLowest;
    FSGlobal.min;
    FSGlobal.overall;

//Hide certain categories depending on Gender
function categoriesList(){
    gender = $("input[name='field38449801']:checked").val();
    
    if(gender == "Female"){
        $("#field38448578 option:contains('Freshman Boys D1')").attr("disabled","disabled");
        $("#field38448578 option:contains('Freshman Boys D2')").attr("disabled","disabled");
        $("#field38448578 option:contains('Sophomore Boys D1')").attr("disabled","disabled");
        $("#field38448578 option:contains('Sophomore Boys D2')").attr("disabled","disabled");
        $("#field38448578 option:contains('JV Boys D1')").attr("disabled","disabled");
        $("#field38448578 option:contains('JV Boys D2')").attr("disabled","disabled");
        $("#field38448578 option:contains('Varsity Boys')").attr("disabled","disabled");
        $("#field38448578 option:contains('Freshman Girls')").attr("disabled",false);
        $("#field38448578 option:contains('Sophomore Girls')").attr("disabled",false);
        $("#field38448578 option:contains('JV Girls')").attr("disabled",false);
        $("#field38448578 option:contains('Varsity Girls')").attr("disabled",false);
    }
    if(gender == "Male"){
        $("#field38448578 option:contains('Freshman Girls')").attr("disabled","disabled");
        $("#field38448578 option:contains('Sophomore Girls')").attr("disabled","disabled");
        $("#field38448578 option:contains('JV Girls')").attr("disabled","disabled");
        $("#field38448578 option:contains('Varsity Girls')").attr("disabled","disabled");
        $("#field38448578 option:contains('Freshman Boys D1')").attr("disabled", false);
        $("#field38448578 option:contains('Freshman Boys D2')").attr("disabled", false);
        $("#field38448578 option:contains('Sophomore Boys D1')").attr("disabled", false);
        $("#field38448578 option:contains('Sophomore Boys D2')").attr("disabled", false);
        $("#field38448578 option:contains('JV Boys D1')").attr("disabled", false);
        $("#field38448578 option:contains('JV Boys D2')").attr("disabled", false);
        $("#field38448578 option:contains('Varsity Boys')").attr("disabled", false);
    }
}
//contains Internet Explorer warning
$(".msieWarning").html(
      "<h3><span style=\"color: #ff0000;\">Browser warning.</span></h3>" +
      "<p>" +
      "You are using a browser which poorly implements HTML features used by this form. In order to continue, you must use a different browser " +
      "such as any of the following: <a href=\"http://www.google.com/chrome\">Google Chrome</a>, " +
      "<a href=\"http://www.apple.com/safari/\">Apple Safari</a>, <a href=\"http://www.mozilla.com/\">Mozilla Firefox</a> or " +
      "<a href=\"http://www.opera.com/browser/download/\">Opera</a>." +
      "</p>"
    ); 
    ///////////////////////////////////////////////
    // INITIALIZATION BASED ON INTERNET EXPLORER //
    ///////////////////////////////////////////////

    if(!MSIE()) {
        console.log("not msie");
    }else{ //if MSIE = true
        $(".msieWarning").show();
        $("#registrationForm").empty().hide();
    }

    //Returns TRUE if the browser is MSIE
    function MSIE(){
        return navigator.userAgent.match(/msie/i);
    }


//returning the second highest results.  
function secondLowest(){
    var arr = FSGlobal.raceResults.slice(0,-1); // Do not include overall.  
    var arrSorted = arr.sort(function(a,b){return a-b;}); //sorts in ascending order the object
    FSGlobal.secondLowest = arrSorted.slice(1,2);
    FSGlobal.min = arrSorted.slice(0,1);
    FSGlobal.overall = FSGlobal.raceResults.slice(-1);
}

function CPT(grade, secondLowest, min, overall, gender, category){ 

    gender = $("input[name='field38449801']:checked").val(); //not sure why it won't capture before hand
    //take off the D1 and D2
    if(FSGlobal.$category.val().indexOf("D1") > -1 ){  
        var string = FSGlobal.$category.val();
        category = string.substring(0,string.length - 3);
    }else if(FSGlobal.$category.val().indexOf("D2") > -1 ){  
        var string = FSGlobal.$category.val();
        category = string.substring(0,string.length - 3);
    }else{ category = FSGlobal.$category.val();}

    console.log(grade,secondLowest,min,overall,gender,category);
    
//previous 9th grade girls
    if(grade == "9th Grade" && gender == "Female"){

        if(category =="Freshman Girls"){ //They are 10th graders now and race freshman last year
            if(secondLowest <= 0.2){
                FSGlobal.$CPT.val("JV Girls");
            }else if(min <= 0.2 && overall  <= 0.2){
                FSGlobal.$CPT.val("JV Girls");
            }else{FSGlobal.$CPT.val("Sophomore Girls");}
        }else if(category == "Sophomore Girls"){
            if(secondLowest <= 0.1){
                FSGlobal.$CPT.val("Varisty Girls");
            }else if(min <= 0.1 && overall <= 0.1){
                FSGlobal.$CPT.val("Varisty Girls");
            }else{
                FSGlobal.$CPT.val("Sophomore Girls"); //NOT SUREON THIS ONE, SHOULD IT BE JV>  
            }
        }else if(category =="JV Girls"){
            if(secondLowest <= 0.3){
                FSGlobal.$CPT.val("Varisty Girls");
            }else if(min <= 0.3 && overall <= 0.3){
                FSGlobal.$CPT.val("Varisty Girls");
            }else{
                FSGlobal.$CPT.val("JV Girls");
            }
        }else{FSGlobal.$CPT.val("Varisty Girls");}
    }
// previous 10 grade females
    if(grade == "10th Grade" && gender == "Female"){
        if(category == "Freshman Girls"){
            if(secondLowest <= 0.2){
                FSGlobal.$CPT.val("JV Girls");
            }else if(min <= 0.2 && overall <= 0.2){
                FSGlobal.$CPT.val("JV Girls");
            }else{
                FSGlobal.$CPT.val("Sophomore Girls"); //not likely.   
            }
       }else if(category == "Sophomore Girls"){
            if(secondLowest <= 0.1){
                FSGlobal.$CPT.val("Varisty Girls");
            }else if(min <= 0.1 && overall <= 0.1){
                FSGlobal.$CPT.val("Varisty Girls");
            }else{
                FSGlobal.$CPT.val("JV Girls"); //NOT SUREON THIS ONE, SHOULD IT BE JV>  
            }
        }else if(category =="JV Girls"){
            if(secondLowest <= 0.3){
                FSGlobal.$CPT.val("Varisty Girls");
            }else if(min <= 0.3 && overall <= 0.3){
                FSGlobal.$CPT.val("Varisty Girls");
            }else{
                FSGlobal.$CPT.val("JV Girls");
            }
        }else{FSGlobal.$CPT.val("Varisty Girls");}
    }
// previous 11 grade females
    if(grade == "11th Grade" && gender == "Female"){ //can't be 11th grade and race SOPHOMORE
        console.log("testing");
        if(category =="JV Girls"){
            if(secondLowest <= 0.3){
                FSGlobal.$CPT.val("Varisty Girls");
            }else if(min <= 0.3 && overall <= 0.3){
                FSGlobal.$CPT.val("Varisty Girls");
            }else{
                FSGlobal.$CPT.val("JV Girls");
            }
        }else{FSGlobal.$CPT.val("Varisty Girls");}
    }
//BOYS//
//previous 9th grade Boys
    if(grade == "9th Grade" && gender == "Male"){

        if(category =="Freshman Boys"){ 
            if(secondLowest <= 0.1){
                FSGlobal.$CPT.val("JV Boys");
            }else if(min <= 0.1 && overall  <= 0.1){
                FSGlobal.$CPT.val("JV Boys");
            }else{FSGlobal.$CPT.val("Sophomore Boys");};
        }else if(category == "Sophomore Boys"){
            if(secondLowest <= 0.05){
                FSGlobal.$CPT.val("Varisty Boys");
            }else if(min <= 0.05 && overall <= 0.05){
                FSGlobal.$CPT.val("Varisty Boys");
            }else{
                FSGlobal.$CPT.val("Sophomore Boys"); //NOT SUREON THIS ONE, SHOULD IT BE JV>  
            }
        }else if(category =="JV Boys"){
            if(secondLowest <= 0.15){
                FSGlobal.$CPT.val("Varisty Boys");
            }else if(min <= 0.15 && overall <= 0.15){
                FSGlobal.$CPT.val("Varisty Boys");
            }else{
                FSGlobal.$CPT.val("JV Boys");
            }
        }else{FSGlobal.$CPT.val("Varisty Boys");}
    }
// previous 10 grade boys
    if(grade == "10th Grade" && gender == "Male"){
 
       if(category =="Freshman Boys"){
         FSGlobal.$CPT.val("Data Entry error:  You cannot have been a 10th Grader racing in the Freshman Category");
       }else if(category == "Sophomore Boys"){
            if(secondLowest <= 0.05){
                FSGlobal.$CPT.val("Varisty Boys");
            }else if(min <= 0.05 && overall <= 0.05){
                FSGlobal.$CPT.val("Varisty Boys");
            }else{
                FSGlobal.$CPT.val("JV Boys"); //NOT SUREON THIS ONE, SHOULD IT BE JV>  
            }
        }else if(category =="JV Boys"){
            if(secondLowest <= 0.15){
                FSGlobal.$CPT.val("Varisty Boys");
            }else if(min <= 0.15 && overall <= 0.15){
                FSGlobal.$CPT.val("Varisty Boys");
            }else{
                FSGlobal.$CPT.val("JV Boys");
            }
        }else{FSGlobal.$CPT.val("Varisty Boys");}
    }
// previous 11 grade males
    if(grade == "11th Grade" && gender == "Males"){ //can't be 11th grade and race SOPHOMORE

        if(category =="JV Boys"){
            if(secondLowest <= 0.15){
                FSGlobal.$CPT.val("Varisty Boys");
            }else if(min <= 0.15 && overall <= 0.15){
                FSGlobal.$CPT.val("Varisty Boys");
            }else{
                FSGlobal.$CPT.val("JV Boys");
            }
        }else{FSGlobal.$CPT.val("Varisty Boys");}
    }

    
}

function calc(place,total){
    var result ;
    if( $.isNumeric( place )){
        if(place >= total){
            result = 99;
        }else{ result = place/total;}
    }else{ result = 99;}
    FSGlobal.raceResults.push(result);
}


//SOUTH//
//race 1 calc
function race1(){
    var race1place = FSGlobal.$race1.val();

    if(FSGlobal.$category.val() == "Freshman Girls"){
        calc(race1place,FSGlobal.$SFreshGirlsTotal[0]); //works
    }else if(FSGlobal.$category.val() == "Freshman Boys D1"){
        calc(race1place,FSGlobal.$SFreshBoysD1Total[0]);
    }else if(FSGlobal.$category.val() == "Freshman Boys D2"){
        calc(race1place,FSGlobal.$SFreshBoysD2Total[0]);
    }else if(FSGlobal.$category.val() == "Sophomore Girls"){
        calc(race1place,FSGlobal.$SSophGirlsTotal[0]);
    }else if(FSGlobal.$category.val() == "Sophomore Boys D1"){
        calc(race1place,FSGlobal.$SSophBoysD1Total[0]);
     }else if(FSGlobal.$category.val() == "Sophomore Boys D2"){
        calc(race1place,FSGlobal.$SSophBoysD2Total[0]);
     }else if(FSGlobal.$category.val() == "JV Girls"){
        calc(race1place,FSGlobal.$SJVGirlsTotal[0]);
     }else if(FSGlobal.$category.val() == "JV Boys D1"){
        calc(race1place,FSGlobal.$SJVBoysD1Total[0]);
     }else if(FSGlobal.$category.val() == "JV Boys D2"){
        calc(race1place,FSGlobal.$SJVBoysD2Total[0]);
    }else if(FSGlobal.$category.val() == "Varsity Girls"){
        calc(race1place,FSGlobal.$SVarsityGirlsTotal[0]);
    }else{ calc(race1place,FSGlobal.$SVarsityBoysTotal[0]);}
    
}

//race 2 calc
function race2(){
    var race2place = FSGlobal.$race2.val();

    if(FSGlobal.$category.val() == "Freshman Girls"){
        calc(race2place,FSGlobal.$SFreshGirlsTotal[1]); //works
    }else if(FSGlobal.$category.val() == "Freshman Boys D1"){
        calc(race2place,FSGlobal.$SFreshBoysD1Total[1]);
    }else if(FSGlobal.$category.val() == "Freshman Boys D2"){
        calc(race2place,FSGlobal.$SFreshBoysD2Total[1]);
    }else if(FSGlobal.$category.val() == "Sophomore Girls"){
        calc(race2place,FSGlobal.$SSophGirlsTotal[1]);
    }else if(FSGlobal.$category.val() == "Sophomore Boys D1"){
        calc(race2place,FSGlobal.$SSophBoysD1Total[1]);
     }else if(FSGlobal.$category.val() == "Sophomore Boys D2"){
        calc(race2place,FSGlobal.$SSophBoysD2Total[1]);
     }else if(FSGlobal.$category.val() == "JV Girls"){
        calc(race2place,FSGlobal.$SJVGirlsTotal[1]);
     }else if(FSGlobal.$category.val() == "JV Boys D1"){
        calc(race2place,FSGlobal.$SJVBoysD1Total[1]);
     }else if(FSGlobal.$category.val() == "JV Boys D2"){
        calc(race2place,FSGlobal.$SJVBoysD2Total[1]);
    }else if(FSGlobal.$category.val() == "Varsity Girls"){
        calc(race2place,FSGlobal.$SVarsityGirlsTotal[1]);
    }else{ calc(race2place,FSGlobal.$SVarsityBoysTotal[1]);}
    
}

//race 2 calc
function race3(){
    var race3place = FSGlobal.$race3.val();

    if(FSGlobal.$category.val() == "Freshman Girls"){
        calc(race3place,FSGlobal.$SFreshGirlsTotal[2]); //works
    }else if(FSGlobal.$category.val() == "Freshman Boys D1"){
        calc(race3place,FSGlobal.$SFreshBoysD1Total[2]);
    }else if(FSGlobal.$category.val() == "Freshman Boys D2"){
        calc(race3place,FSGlobal.$SFreshBoysD2Total[2]);
    }else if(FSGlobal.$category.val() == "Sophomore Girls"){
        calc(race3place,FSGlobal.$SSophGirlsTotal[2]);
    }else if(FSGlobal.$category.val() == "Sophomore Boys D1"){
        calc(race3place,FSGlobal.$SSophBoysD1Total[2]);
     }else if(FSGlobal.$category.val() == "Sophomore Boys D2"){
        calc(race3place,FSGlobal.$SSophBoysD2Total[2]);
     }else if(FSGlobal.$category.val() == "JV Girls"){
        calc(race3place,FSGlobal.$SJVGirlsTotal[2]);
     }else if(FSGlobal.$category.val() == "JV Boys D1"){
        calc(race3place,FSGlobal.$SJVBoysD1Total[2]);
     }else if(FSGlobal.$category.val() == "JV Boys D2"){
        calc(race3place,FSGlobal.$SJVBoysD2Total[2]);
    }else if(FSGlobal.$category.val() == "Varsity Girls"){
        calc(race3place,FSGlobal.$SVarsityGirlsTotal[2]);
    }else{ calc(race3place,FSGlobal.$SVarsityBoysTotal[2]);}
    
}

function race4(){
    var race4place = FSGlobal.$race4.val();

    if(FSGlobal.$category.val() == "Freshman Girls"){
        calc(race4place,FSGlobal.$SFreshGirlsTotal[3]); //works
    }else if(FSGlobal.$category.val() == "Freshman Boys D1"){
        calc(race4place,FSGlobal.$SFreshBoysD1Total[3]);
    }else if(FSGlobal.$category.val() == "Freshman Boys D2"){
        calc(race4place,FSGlobal.$SFreshBoysD2Total[3]);
    }else if(FSGlobal.$category.val() == "Sophomore Girls"){
        calc(race4place,FSGlobal.$SSophGirlsTotal[3]);
    }else if(FSGlobal.$category.val() == "Sophomore Boys D1"){
        calc(race4place,FSGlobal.$SSophBoysD1Total[3]);
     }else if(FSGlobal.$category.val() == "Sophomore Boys D2"){
        calc(race4place,FSGlobal.$SSophBoysD2Total[3]);
     }else if(FSGlobal.$category.val() == "JV Girls"){
        calc(race4place,FSGlobal.$SJVGirlsTotal[3]);
     }else if(FSGlobal.$category.val() == "JV Boys D1"){
        calc(race4place,FSGlobal.$SJVBoysD1Total[3]);
     }else if(FSGlobal.$category.val() == "JV Boys D2"){
        calc(race4place,FSGlobal.$SJVBoysD2Total[3]);
    }else if(FSGlobal.$category.val() == "Varsity Girls"){
        calc(race4place,FSGlobal.$SVarsityGirlsTotal[3]);
    }else{ calc(race4place,FSGlobal.$SVarsityBoysTotal[3]);}
    
}

function race5(){
    var race5place = FSGlobal.$race5.val();

    if(FSGlobal.$category.val() == "Freshman Girls"){
        calc(race5place,FSGlobal.$SFreshGirlsTotal[4]); //works
    }else if(FSGlobal.$category.val() == "Freshman Boys D1"){
        calc(race5place,FSGlobal.$SFreshBoysD1Total[4]);
    }else if(FSGlobal.$category.val() == "Freshman Boys D2"){
        calc(race5place,FSGlobal.$SFreshBoysD2Total[4]);
    }else if(FSGlobal.$category.val() == "Sophomore Girls"){
        calc(race5place,FSGlobal.$SSophGirlsTotal[4]);
    }else if(FSGlobal.$category.val() == "Sophomore Boys D1"){
        calc(race5place,FSGlobal.$SSophBoysD1Total[4]);
     }else if(FSGlobal.$category.val() == "Sophomore Boys D2"){
        calc(race5place,FSGlobal.$SSophBoysD2Total[4]);
     }else if(FSGlobal.$category.val() == "JV Girls"){
        calc(race5place,FSGlobal.$SJVGirlsTotal[4]);
     }else if(FSGlobal.$category.val() == "JV Boys D1"){
        calc(race5place,FSGlobal.$SJVBoysD1Total[4]);
     }else if(FSGlobal.$category.val() == "JV Boys D2"){
        calc(race5place,FSGlobal.$SJVBoysD2Total[4]);
    }else if(FSGlobal.$category.val() == "Varsity Girls"){
        calc(race5place,FSGlobal.$SVarsityGirlsTotal[4]);
    }else{ calc(race5place,FSGlobal.$SVarsityBoysTotal[4]);}
    
}

function race6(){
    var race6place = FSGlobal.$race6.val();

    if(FSGlobal.$category.val() == "Freshman Girls"){
        calc(race6place,FSGlobal.$SFreshGirlsTotal[5]); //works
    }else if(FSGlobal.$category.val() == "Freshman Boys D1"){
        calc(race6place,FSGlobal.$SFreshBoysD1Total[5]);
    }else if(FSGlobal.$category.val() == "Freshman Boys D2"){
        calc(race6place,FSGlobal.$SFreshBoysD2Total[5]);
    }else if(FSGlobal.$category.val() == "Sophomore Girls"){
        calc(race6place,FSGlobal.$SSophGirlsTotal[5]);
    }else if(FSGlobal.$category.val() == "Sophomore Boys D1"){
        calc(race6place,FSGlobal.$SSophBoysD1Total[5]);
    }else if(FSGlobal.$category.val() == "Sophomore Boys D2"){
        calc(race6place,FSGlobal.$SSophBoysD2Total[5]);
    }else if(FSGlobal.$category.val() == "JV Girls"){
        calc(race6place,FSGlobal.$SJVGirlsTotal[5]);
    }else if(FSGlobal.$category.val() == "JV Boys D1"){
        calc(race6place,FSGlobal.$SJVBoysD1Total[5]);
    }else if(FSGlobal.$category.val() == "JV Boys D2"){
        calc(race6place,FSGlobal.$SJVBoysD2Total[5]);
    }else if(FSGlobal.$category.val() == "Varsity Girls"){
        calc(race6place,FSGlobal.$SVarsityGirlsTotal[5]);
    }else{ calc(race6place,FSGlobal.$SVarsityBoysTotal[5]);}
    
}


//NORTH//
//race 1 calc
function Nrace1(){
    var race1place = FSGlobal.$race1.val();

    if(FSGlobal.$category.val() == "Freshman Girls"){
        calc(race1place,FSGlobal.$NFreshGirlsTotal[0]); //works
    }else if(FSGlobal.$category.val() == "Freshman Boys D1"){
        calc(race1place,FSGlobal.$NFreshBoysD1Total[0]);
    }else if(FSGlobal.$category.val() == "Freshman Boys D2"){
        calc(race1place,FSGlobal.$NFreshBoysD2Total[0]);
    }else if(FSGlobal.$category.val() == "Sophomore Girls"){
        calc(race1place,FSGlobal.$NSophGirlsTotal[0]);
    }else if(FSGlobal.$category.val() == "Sophomore Boys D1"){
        calc(race1place,FSGlobal.$NSophBoysD1Total[0]);
     }else if(FSGlobal.$category.val() == "Sophomore Boys D2"){
        calc(race1place,FSGlobal.$NSophBoysD2Total[0]);
     }else if(FSGlobal.$category.val() == "JV Girls"){
        calc(race1place,FSGlobal.$NJVGirlsTotal[0]);
     }else if(FSGlobal.$category.val() == "JV Boys D1"){
        calc(race1place,FSGlobal.$NJVBoysD1Total[0]);
     }else if(FSGlobal.$category.val() == "JV Boys D2"){
        calc(race1place,FSGlobal.$NJVBoysD2Total[0]);
    }else if(FSGlobal.$category.val() == "Varsity Girls"){
        calc(race1place,FSGlobal.$NVarsityGirlsTotal[0]);
    }else{ calc(race1place,FSGlobal.$NVarsityBoysTotal[0]);}
    
}

//race 2 calc
function Nrace2(){
    var race2place = FSGlobal.$race2.val();

    if(FSGlobal.$category.val() == "Freshman Girls"){
        calc(race2place,FSGlobal.$NFreshGirlsTotal[1]); //works
    }else if(FSGlobal.$category.val() == "Freshman Boys D1"){
        calc(race2place,FSGlobal.$NFreshBoysD1Total[1]);
    }else if(FSGlobal.$category.val() == "Freshman Boys D2"){
        calc(race2place,FSGlobal.$NFreshBoysD2Total[1]);
    }else if(FSGlobal.$category.val() == "Sophomore Girls"){
        calc(race2place,FSGlobal.$NSophGirlsTotal[1]);
    }else if(FSGlobal.$category.val() == "Sophomore Boys D1"){
        calc(race2place,FSGlobal.$NSophBoysD1Total[1]);
     }else if(FSGlobal.$category.val() == "Sophomore Boys D2"){
        calc(race2place,FSGlobal.$NSophBoysD2Total[1]);
     }else if(FSGlobal.$category.val() == "JV Girls"){
        calc(race2place,FSGlobal.$NJVGirlsTotal[1]);
     }else if(FSGlobal.$category.val() == "JV Boys D1"){
        calc(race2place,FSGlobal.$NJVBoysD1Total[1]);
     }else if(FSGlobal.$category.val() == "JV Boys D2"){
        calc(race2place,FSGlobal.$NJVBoysD2Total[1]);
    }else if(FSGlobal.$category.val() == "Varsity Girls"){
        calc(race2place,FSGlobal.$NVarsityGirlsTotal[1]);
    }else{ calc(race2place,FSGlobal.$NVarsityBoysTotal[1]);}
    
}

//race 2 calc
function Nrace3(){
    var race3place = FSGlobal.$race3.val();

    if(FSGlobal.$category.val() == "Freshman Girls"){
        calc(race3place,FSGlobal.$NFreshGirlsTotal[2]); //works
    }else if(FSGlobal.$category.val() == "Freshman Boys D1"){
        calc(race3place,FSGlobal.$NFreshBoysD1Total[2]);
    }else if(FSGlobal.$category.val() == "Freshman Boys D2"){
        calc(race3place,FSGlobal.$NFreshBoysD2Total[2]);
    }else if(FSGlobal.$category.val() == "Sophomore Girls"){
        calc(race3place,FSGlobal.$NSophGirlsTotal[2]);
    }else if(FSGlobal.$category.val() == "Sophomore Boys D1"){
        calc(race3place,FSGlobal.$NSophBoysD1Total[2]);
     }else if(FSGlobal.$category.val() == "Sophomore Boys D2"){
        calc(race3place,FSGlobal.$NSophBoysD2Total[2]);
     }else if(FSGlobal.$category.val() == "JV Girls"){
        calc(race3place,FSGlobal.$NJVGirlsTotal[2]);
     }else if(FSGlobal.$category.val() == "JV Boys D1"){
        calc(race3place,FSGlobal.$NJVBoysD1Total[2]);
     }else if(FSGlobal.$category.val() == "JV Boys D2"){
        calc(race3place,FSGlobal.$NJVBoysD2Total[2]);
    }else if(FSGlobal.$category.val() == "Varsity Girls"){
        calc(race3place,FSGlobal.$NVarsityGirlsTotal[2]);
    }else{ calc(race3place,FSGlobal.$NVarsityBoysTotal[2]);}
    
}

function Nrace4(){
    var race4place = FSGlobal.$race4.val();

    if(FSGlobal.$category.val() == "Freshman Girls"){
        calc(race4place,FSGlobal.$NFreshGirlsTotal[3]); //works
    }else if(FSGlobal.$category.val() == "Freshman Boys D1"){
        calc(race4place,FSGlobal.$NFreshBoysD1Total[3]);
    }else if(FSGlobal.$category.val() == "Freshman Boys D2"){
        calc(race4place,FSGlobal.$NFreshBoysD2Total[3]);
    }else if(FSGlobal.$category.val() == "Sophomore Girls"){
        calc(race4place,FSGlobal.$NSophGirlsTotal[3]);
    }else if(FSGlobal.$category.val() == "Sophomore Boys D1"){
        calc(race4place,FSGlobal.$NSophBoysD1Total[3]);
     }else if(FSGlobal.$category.val() == "Sophomore Boys D2"){
        calc(race4place,FSGlobal.$NSophBoysD2Total[3]);
     }else if(FSGlobal.$category.val() == "JV Girls"){
        calc(race4place,FSGlobal.$NJVGirlsTotal[3]);
     }else if(FSGlobal.$category.val() == "JV Boys D1"){
        calc(race4place,FSGlobal.$NJVBoysD1Total[3]);
     }else if(FSGlobal.$category.val() == "JV Boys D2"){
        calc(race4place,FSGlobal.$NJVBoysD2Total[3]);
    }else if(FSGlobal.$category.val() == "Varsity Girls"){
        calc(race4place,FSGlobal.$NVarsityGirlsTotal[3]);
    }else{ calc(race4place,FSGlobal.$NVarsityBoysTotal[3]);}
    
}

function Nrace5(){
    var race5place = FSGlobal.$race5.val();

    if(FSGlobal.$category.val() == "Freshman Girls"){
        calc(race5place,FSGlobal.$NFreshGirlsTotal[4]); //works
    }else if(FSGlobal.$category.val() == "Freshman Boys D1"){
        calc(race5place,FSGlobal.$NFreshBoysD1Total[4]);
    }else if(FSGlobal.$category.val() == "Freshman Boys D2"){
        calc(race5place,FSGlobal.$NFreshBoysD2Total[4]);
    }else if(FSGlobal.$category.val() == "Sophomore Girls"){
        calc(race5place,FSGlobal.$NSophGirlsTotal[4]);
    }else if(FSGlobal.$category.val() == "Sophomore Boys D1"){
        calc(race5place,FSGlobal.$NSophBoysD1Total[4]);
     }else if(FSGlobal.$category.val() == "Sophomore Boys D2"){
        calc(race5place,FSGlobal.$NSophBoysD2Total[4]);
     }else if(FSGlobal.$category.val() == "JV Girls"){
        calc(race5place,FSGlobal.$NJVGirlsTotal[4]);
     }else if(FSGlobal.$category.val() == "JV Boys D1"){
        calc(race5place,FSGlobal.$NJVBoysD1Total[4]);
     }else if(FSGlobal.$category.val() == "JV Boys D2"){
        calc(race5place,FSGlobal.$NJVBoysD2Total[4]);
    }else if(FSGlobal.$category.val() == "Varsity Girls"){
        calc(race5place,FSGlobal.$NVarsityGirlsTotal[4]);
    }else{ calc(race5place,FSGlobal.$NVarsityBoysTotal[4]);}
    
}

function Nrace6(){
    var race6place = FSGlobal.$race6.val();

    if(FSGlobal.$category.val() == "Freshman Girls"){
        calc(race6place,FSGlobal.$NFreshGirlsTotal[5]); //works
    }else if(FSGlobal.$category.val() == "Freshman Boys D1"){
        calc(race6place,FSGlobal.$NFreshBoysD1Total[5]);
    }else if(FSGlobal.$category.val() == "Freshman Boys D2"){
        calc(race6place,FSGlobal.$NFreshBoysD2Total[5]);
    }else if(FSGlobal.$category.val() == "Sophomore Girls"){
        calc(race6place,FSGlobal.$NSophGirlsTotal[5]);
    }else if(FSGlobal.$category.val() == "Sophomore Boys D1"){
        calc(race6place,FSGlobal.$NSophBoysD1Total[5]);
    }else if(FSGlobal.$category.val() == "Sophomore Boys D2"){
        calc(race6place,FSGlobal.$NSophBoysD2Total[5]);
    }else if(FSGlobal.$category.val() == "JV Girls"){
        calc(race6place,FSGlobal.$NJVGirlsTotal[5]);
    }else if(FSGlobal.$category.val() == "JV Boys D1"){
        calc(race6place,FSGlobal.$NJVBoysD1Total[5]);
    }else if(FSGlobal.$category.val() == "JV Boys D2"){
        calc(race6place,FSGlobal.$NJVBoysD2Total[5]);
    }else if(FSGlobal.$category.val() == "Varsity Girls"){
        calc(race6place,FSGlobal.$NVarsityGirlsTotal[5]);
    }else{ calc(race6place,FSGlobal.$NVarsityBoysTotal[5]);}
    
}
/////////////////
//event triggers//
//////////////////

FSGlobal.$nxtBtn.click(function(){
    if(FSGlobal.$conference.val()=="South Conference"){
    race1();
    race2();
    race3();
    race4();
    race5();
    race6();
    secondLowest(); //find second highest of the results
    CPT(FSGlobal.$grade.val(),FSGlobal.secondLowest,FSGlobal.min,FSGlobal.overall); //pass through category and grade values
    }else{
    Nrace1();
    Nrace2();
    Nrace3();
    Nrace4();
    Nrace5();
    Nrace6();
    secondLowest();
    CPT(FSGlobal.$grade.val(),FSGlobal.secondLowest,FSGlobal.min,FSGlobal.overall); //pass through category and grade values
    }
});

FSGlobal.$previousBtn.click( function(){FSGlobal.raceResults = []; FSGlobal.$CPT.val("")}); //clear the object if someone presses the previous button.



$('input:radio[name="field38449801"]').on("change", categoriesList);

});

</script>

