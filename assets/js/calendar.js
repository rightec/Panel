/**
 * calendar.js
 * Build a calendar to be used in HTML file
 * Calendar is build as a div frame that contains an header and a body
 * In the header are three inline  block (aside): two arrows button image to change the current month
 * and a central text field to keep the current data expressed in month and year
 * The body is a matrix whit 6 row and 7 columns. The first row is dedicated to the title.
 * The remaining matrix 5x7 is used to represent the day of the month. Every cell is a day
 */

 //Some useful function to extract info from a date
function findCurrentDayInMonth(){
    let day = currentDate.getDate();
    console.log("current day is",day);
    return day;
}

function findCurrentMonth(){
    let month = currentDate.getMonth();
    console.log("current month is",month);
    let options = { month: 'long'};
    let displayData = new Intl.DateTimeFormat('en-US', options).format(currentDate);
    return displayData;
}

function findCurrentYear(){
    let year = currentDate.getFullYear();
    console.log("current year is",year);
    return year;
}

function findCurrentDayInWeek(){
    let day = currentDate.getDay();
    console.log("current day is",day);
    return day;
}

function createClass(name,rules){
    var style = document.createElement('style');
    //style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if(!(style.sheet||{}).insertRule) 
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name+"{"+rules+"}",0);
}

function getCalendar(){
    /*
    let prova = document.createElement("p");
    calendar.append(prova);
    prova.innerHTML="PROVA DI CALENDARIO";
    */
  return(calendar);
}

function getHeader(){
    //build the header
    let header=document.createElement("div"); //this is the main container
    header.id = "calendHeadId";
    calendar.append(header);
    let leftArrow=document.createElement("img");
    leftArrow.src="assets/img/leftArrow.png";
    header.append(leftArrow);
    let currentViewData= document.createElement("span");
    currentViewData.textContent = findCurrentMonth() + " " + findCurrentYear();
    header.append(currentViewData);
    let rightArrow=document.createElement("img");
    rightArrow.src="assets/img/rightArrow.png";
    header.append(rightArrow);
    
    
    createClass(".headerPrintEdit","border-color: black");
    createClass(".headerPrintEdit","border-style: solid");
    createClass(".headerPrintEdit","border-width: 3px");
    createClass(".headerPrintEdit","padding: 6px");
    createClass('.headImage',"margin: 0 20px 0 20px");
    createClass('.headImage',"width: 20px;");
    createClass(".dataPrintEdit","vertical-align: super");
    leftArrow.classList.add("headImage");
    rightArrow.classList.add("headImage");
    currentViewData.classList.add("dataPrintEdit");
    header.classList.add("headerPrintEdit");
}

function getTheFirst(){
    //Get the first day of the current month.
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let day = 1;
    //Set the first day of the current month
    let firstDay = new Date(year, month, day);
    //console.log(firstDay);
    return firstDay.getDay();
}

function getBody(){
    let bodyHeaderArray=[];
    let bodyHeader=document.createElement("div");
    /*let prova = document.createElement("p");
    bodyHeader.append(prova);
    prova.innerHTML="PROVA DI CALENDARIO";*/
    //bodyHeader.classList.add("headerPrintEdit");
    calendar.append(bodyHeader);
    
    //bodyHeader class specification
    createClass(".bodyHeader","border-color: red");
    createClass(".bodyHeader","display: inline-block");
    createClass(".bodyItem","width: 15px");
    createClass(".bodyItem","margin: 10px");


    let theFirstIs = getTheFirst();

    for (let i=0;i<arrayDays.length;i++){
        //Create the box as div
        bodyHeaderArray[i] = document.createElement("div");
        //Associate the right text
        if (i + theFirstIs < arrayDays.length ){
            bodyHeaderArray[i].textContent = arrayDays[i+theFirstIs];
        }else{
            bodyHeaderArray[i].textContent = arrayDays[i+theFirstIs - arrayDays.length];
        }
        //Insert element in the dom
        bodyHeader.append(bodyHeaderArray[i]);
        bodyHeaderArray[i].classList.add("bodyHeader"); //Apply class
        bodyHeaderArray[i].classList.add("bodyItem"); //Apply class
    }

    let bodyContainer = document.createElement("div");
    bodyHeader.after(bodyContainer);

    let row = 5;
    let coloumn = 7;
 
    let bodyRows=[];
    let bodyItems=[];
    
    for (let i=0; i<row; i++){
        //i rows
        bodyRows[i]=document.createElement("div");
        bodyContainer.append(bodyRows[i]);
        bodyItems[i] = [];
        for (let j=0; j<coloumn;j++){
            bodyItems[i][j]= document.createElement("div");
            bodyRows[i].append(bodyItems[i][j]);
            bodyItems[i][j].textContent = (j+1)+(i*coloumn);
            console.log((j+1)+(i*coloumn));
            bodyItems[i][j].classList.add("bodyHeader"); //Apply class
            bodyItems[i][j].classList.add("bodyItem"); //Apply class
        }
    }
    
    
}

//Global var for this module
let currentDate = new Date(); //Keep the calendar current date
let arrayDays=["Son","Mon", "Tue", "Wed", "Thu", "Fri","Sat"];  //First day is monday
let calendar=document.createElement("div");  //Main div to pass to the function caller
let headCalendar=getHeader();
let bodyCalendar=getBody();
