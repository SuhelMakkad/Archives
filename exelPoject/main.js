/* set up XMLHttpRequest */
const url = "./MK-Milap-Candidates.xlsx"; /* src link here */
const oReq = new XMLHttpRequest();

oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";

oReq.onload = function(e) {
  var arraybuffer = oReq.response;

  /* convert data to binary string */
  const data = new Uint8Array(arraybuffer);
  const arr = new Array();
  for(let i = 0; i != data.length; ++i) {
    arr[i] = String.fromCharCode(data[i]);
  }
  let bstr = arr.join("");

  /* Call XLSX */
  let workbook = XLSX.read(bstr, {type:"binary"});

  /* DO SOMETHING WITH workbook HERE */
  let first_sheet_name = workbook.SheetNames[0];

  /* Get worksheet */
  const worksheet = workbook.Sheets[first_sheet_name];
  const jsonData = XLSX.utils.sheet_to_json(worksheet,{raw:true});
  const numberOfRows = jsonData.length;

  const topHeadings =   [worksheet['B1'].v, worksheet['M1'].v, worksheet['O1'].v];
  const headings =   [worksheet['A2'].v, worksheet['B2'].v, worksheet['C2'].v, worksheet['D2'].v, worksheet['E2'].v, worksheet['F2'].v, worksheet['G2'].v, worksheet['H2'].v, worksheet['I2'].v, worksheet['J2'].v, worksheet['K2'].v, worksheet['L2'].v, worksheet['M2'].v, worksheet['N2'].v, worksheet['O2'].v, worksheet['P2'].v];
 
  
  //to get cell names
  let cellNames = getDetails(numberOfRows, worksheet);

  $(".count p").html(cellNames.length);


  //adding details to html
  addDetailsAll(topHeadings, headings, cellNames, worksheet);

  //soring according to toggle
  $("#id").click(() => {

    let check = $("#id").prop("checked");
    if(check) {
      sortType = "id";
    } else {
      sortType = "";
    }
    let newCellNames =  sortDetails(sortType, cellNames, worksheet);

    //adding details to html
    addDetailsAll(topHeadings, headings, newCellNames, worksheet);

    $(".count p").html(newCellNames.length);

    
  });
  
  $("#mail").click(() => {

    let check = $("#mail").prop("checked");
    if(check) {
      sortType = "mail";
    } else {
      sortType = "";
    }
    let newCellNames =  sortDetails(sortType, cellNames, worksheet);

    //adding details to html
    addDetailsAll(topHeadings, headings, newCellNames, worksheet);

    $(".count p").html(newCellNames.length);


  });

  $("#femail").click(() => {

    let check = $("#femail").prop("checked");
    if(check) {
      sortType = "femail";
    } else {
      sortType = "";
    }
    let newCellNames =  sortDetails(sortType, cellNames, worksheet);

    //adding details to html
    addDetailsAll(topHeadings, headings, newCellNames, worksheet);

    $(".count p").html(newCellNames.length);


  });

}
oReq.send();


function sortDetails(sortType, cellNames, worksheet) {

  let idArray = [];
  let mailArary = [];
  let femailArray = [];
  let temp;
  let tempCellName;
  let NewCellNames = cellNames;

  if(sortType === "id") { //according to ids

    $('#mail').prop('checked', false);
    $('#femail').prop('checked', false);

    for(let i = 0; i < (cellNames.length - 1); i++) {
      idArray.push(checkUndefined(worksheet[cellNames[i][0]]).v);
    }
    
    for (let a = 0; a < (idArray.length - 1); a++) {
    for (let b = a + 1; b < idArray.length; b++) {
      if (idArray[b] < idArray[a]) {
        tempCellName = NewCellNames[a]; //shorting cell names on basis of id
        NewCellNames[a] = NewCellNames[b];
        NewCellNames[b] = tempCellName;
  
        temp = idArray[a]; //shorting id 
        idArray[a] = idArray[b]; 
        idArray[b] = temp; 
        }     
      }
    }

    return NewCellNames;

  } else if(sortType === "mail") { //showing inly mail

    $('#id').prop('checked', false);
    $('#femail').prop('checked', false);
    
    for(let i = 0; i < (cellNames.length - 1); i++) {
      let gender = checkUndefined(worksheet[cellNames[i][1]]).v.charAt(0);
      if( gender == "M") {
        mailArary.push( cellNames[i] );
      }
    }
    return mailArary;
  } else if(sortType === "femail") { //showing inly mail

    $('#id').prop('checked', false);
    $('#mail').prop('checked', false);
    
    for(let i = 0; i < (cellNames.length - 1); i++) {
      let gender = checkUndefined(worksheet[cellNames[i][1]]).v.charAt(0);
      if( gender == "F") {
        femailArray.push( cellNames[i] );
      }
    }
    return femailArray;
  } else {

    return cellNames;
  }

}



function addDetailsAll(topHeadingArray, headings, cellNames, worksheet) {
   
  
  let backgroundColor;
  let htmlToAppend = "";
  let sortType;

  //removing previous data
  $(".all-candidates-details").html(htmlToAppend);


  

  //adding details
  for(let i = 0; i < (cellNames.length - 1); i++) {    

    //setting background color
    let gender = checkUndefined(worksheet[cellNames[i][1]]).v.charAt(0);
    if( gender == "F") {
      backgroundColor = "pink";
    } else if ( gender == "M") {
      backgroundColor = "blue";
    } else {
      console.log("Gender Feild not defiend properly at cell number " + cellNames[i][1]);
    }


    //first heading 
    htmlToAppend += "<section class='entry'> <div class='top-heading-1'>" + topHeadingArray[0] + "</div>";
    for(let j = 0; j < 12; j++) {
      htmlToAppend +=
        "<div class='container " + backgroundColor + "'> <div class='heading-1'>" + headings[j] + "</div>" +
        "<div class='details-1'>" + checkUndefined(worksheet[cellNames[i][j]]).v+ "</div></div><hr>";
    }
    //second heading
    htmlToAppend += "<div class='top-heading-2'>" + topHeadingArray[1] + "</div>";
    for(let j = 12; j < 14; j++) {
      htmlToAppend +=
        "<div class='container " + backgroundColor +  "'><div class='heading-1'>" + headings[j] + "</div>" +
        "<div class='details-1'>" + checkUndefined(worksheet[cellNames[i][j]]).v+ "</div></div><hr>";
    }
    //third heading
    htmlToAppend += "<div class='top-heading-3'>" + topHeadingArray[2] + "</div>";
    for(let j = 14; j < 16; j++) {
      htmlToAppend +=
        "<div class='container " + backgroundColor + "'><div class='heading-1'>" + headings[j] + "</div>" +
        "<div class='details-1'>" + checkUndefined(worksheet[cellNames[i][j]]).v+ "</div></div><hr>";
    }
    htmlToAppend += "</section>";

    $(".all-candidates-details").append(htmlToAppend);
    htmlToAppend = ""; // Empltying Sting for next entry

   }
 

}
function checkUndefined(element) {
  let handle = {
    "v" : "-"
  }
  if(element == null) {
    return handle;
  } else {
    return element;
  }
}


function getDetails(length, worksheet) {
  let nameOfCells = [];
  const alphbates = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']; // number of columbes
  for(let i = 0; i < length; i++) {
    nameOfCells.push([]);
  }  //creating 2d array to strore details

  for(let i = 0; i < length; i++) {
    for(let j = 0; j < 16; j++) {
      nameOfCells[i].push(alphbates[j] + (i + 3));
      // console.log(checkUndefined(worksheet[nameOfCells[i][j]]).v);
    }
  }
  return nameOfCells;
}

function checkGender(cellNames, worksheet) {
  for(let i = 0; i < (cellNames.length - 1); i++) {
    if( checkUndefined(worksheet[cellNames[i][1]]).v == "Female (સ્ત્રી)") {
      console.log("femail");
      $(".container").addClass("pink");
    } else if ( checkUndefined(worksheet[cellNames[i][1]]).v == "Male (પુરુષ)") {
      console.log("mail");
      $(".container").addClass("blue");
    } else {
      console.log("Empty");
    }
  }
}

function search(searchText, cellNames, worksheet) {

  //adding details
  let answer;
  let error;
  let matchTo;

  outer_loop: 
  for(let i = 0; i < (cellNames.length - 1); i++) {
    for(let j = 0; j < 16; j++) {
      matchTo = checkUndefined(worksheet[cellNames[i][j]]).v;
      let re = new RegExp(matchTo, '/');
      if((searchText).match(/re/) ) {
        answer = "Match found";
        console.log(i , j + " " + "done");
        break outer_loop;
      }else { 
        answer = "Error";
      }
      
    }
  }
  console.log(searchText, answer);
}

