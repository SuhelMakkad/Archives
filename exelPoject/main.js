const url = "./MK-Milap-Candidates.xlsx"; /* src link here */
const oReq = new XMLHttpRequest(); /* set up XMLHttpRequest */

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

  /* For multiple sheets in one excel file */
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

  // //search 
  // $(".search-input").change( (e) => {
  //   let searchTerm = $(".search-input").val();
  //   console.log(searchTerm);
  //   search(searchTerm, cellNames, worksheet);
  // });

  //soring according to toggle

  $("li").click( (e) => {
    let sortBy = e.target.innerText.charAt(0) + e.target.innerText.charAt(1);

    if(sortBy === "Id") {
    sortType = "id";
    newCellNames =  sortDetails(sortType, cellNames, worksheet);
    //adding details to html
    addDetailsAll(topHeadings, headings, newCellNames, worksheet);
    $(".count p").html(newCellNames.length);
    cellNames = newCellNames;

    }

    if(sortBy === "Ma") {
    sortType = "male";
    newCellNames =  sortDetails(sortType, cellNames, worksheet);
    //adding details to html
    addDetailsAll(topHeadings, headings, newCellNames, worksheet);
    $(".count p").html(newCellNames.length);
    }

    if(sortBy === "Fe") {
    sortType = "female";
    newCellNames =  sortDetails(sortType, cellNames, worksheet);
    //adding details to html
    addDetailsAll(topHeadings, headings, newCellNames, worksheet);
    $(".count p").html(newCellNames.length);
    }

    if(sortBy === "As") {
    sortType = "ascending";
    newCellNames =  sortDetails(sortType, cellNames, worksheet);
    //adding details to html
    addDetailsAll(topHeadings, headings, newCellNames, worksheet);
    $(".count p").html(newCellNames.length);
    cellNames = newCellNames;
    }

    if(sortBy === "De") {
    sortType = "descending"; 
    newCellNames =  sortDetails(sortType, cellNames, worksheet);
    //adding details to html
    addDetailsAll(topHeadings, headings, newCellNames, worksheet);
    $(".count p").html(newCellNames.length);
    cellNames = newCellNames;
    }

    if(sortBy === "Ku") { 
    sortType = "kutchi";
    console.log(sortType);
    newCellNames =  sortDetails(sortType, cellNames, worksheet);
    //adding details to html
    addDetailsAll(topHeadings, headings, newCellNames, worksheet);
    $(".count p").html(newCellNames.length);
    }

    if(sortBy === "Ba") { 
    sortType = "bavisi";
    console.log(sortType);
    newCellNames =  sortDetails(sortType, cellNames, worksheet);
    //adding details to html
    addDetailsAll(topHeadings, headings, newCellNames, worksheet);
    $(".count p").html(newCellNames.length);
    }

    if(sortBy === "Ha") { 
    sortType = "halai";
    console.log(sortType);
    newCellNames =  sortDetails(sortType, cellNames, worksheet);
    //adding details to html
    addDetailsAll(topHeadings, headings, newCellNames, worksheet);
    $(".count p").html(newCellNames.length);
    }

    if(sortBy === "Un") { 
    sortType = "unmarried";
    console.log(sortType);
    newCellNames =  sortDetails(sortType, cellNames, worksheet);
    //adding details to html
    addDetailsAll(topHeadings, headings, newCellNames, worksheet);
    $(".count p").html(newCellNames.length);
    }

    if(sortBy === "Di") { 
    sortType = "divorcee";
    console.log(sortType);
    newCellNames =  sortDetails(sortType, cellNames, worksheet);
    //adding details to html
    addDetailsAll(topHeadings, headings, newCellNames, worksheet);
    $(".count p").html(newCellNames.length);
    }

    if(sortBy === "Wi") { 
    sortType = "widow";
    console.log(sortType);
    newCellNames =  sortDetails(sortType, cellNames, worksheet);
    //adding details to html
    addDetailsAll(topHeadings, headings, newCellNames, worksheet);
    $(".count p").html(newCellNames.length);
    }

  });



}
oReq.send();


function sortDetails(sortType, cellNames, worksheet) {


  let idArray = [];
  let birthYear = [];
  let tempArray = [];
  let ageArray = [];
  let temp;
  let tempCellName;
  let tempCellName2;
  let NewCellNames = cellNames;

  if(sortType === "id") { //according to ids   
    $("#sort-by").text("Id");
    $("#filter-by").text("Filter by");

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

  } else if(sortType === "male") { //showing only male
    $("#filter-by").text("Male");
    
    for(let i = 0; i < (cellNames.length - 1); i++) {
      let gender = checkUndefined(worksheet[cellNames[i][1]]).v.charAt(0);
      if( gender == "M") {
        tempArray.push( cellNames[i] );
      }
    }
    return tempArray;
  } else if(sortType === "female") { 
    $("#filter-by").text("Female");

    for(let i = 0; i < (cellNames.length - 1); i++) {
      let gender = checkUndefined(worksheet[cellNames[i][1]]).v.charAt(0);
      if( gender == "F") {
        tempArray.push( cellNames[i] );
      }
    }
    return tempArray;
  } else if(sortType === "ascending") { 
    $("#sort-by").text("Ascending");
    $("#filter-by").text("Filter by");
    
    for(let i = 0; i < (cellNames.length - 1); i++) {
      birthYear.push(checkUndefined(worksheet[cellNames[i][3]]).v);
    }

    for (let a = 0; a < (birthYear.length - 1); a++) {
      for (let b = a + 1; b < birthYear.length; b++) {
        if (birthYear[b] < birthYear[a]) {
          tempCellName2 = NewCellNames[a]; //shorting cell names on basis of id
          NewCellNames[a] = NewCellNames[b];
          NewCellNames[b] = tempCellName2;
    
          temp = birthYear[a]; //shorting id 
          birthYear[a] = birthYear[b]; 
          birthYear[b] = temp; 
          }     
        }
      }
    return NewCellNames;
  } else if(sortType === "descending") { 
    $("#sort-by").text("Descending");
    $("#filter-by").text("Filter by");
    
    for(let i = 0; i < (cellNames.length - 1); i++) {
      birthYear.push(checkUndefined(worksheet[cellNames[i][3]]).v);
    }

    for (let a = 0; a < (birthYear.length - 1); a++) {
      for (let b = a + 1; b < birthYear.length; b++) {
        if (birthYear[b] > birthYear[a]) {
          tempCellName2 = NewCellNames[a]; //shorting cell names on basis of id
          NewCellNames[a] = NewCellNames[b];
          NewCellNames[b] = tempCellName2;
    
          temp = birthYear[a]; //shorting id 
          birthYear[a] = birthYear[b]; 
          birthYear[b] = temp; 
          }     
        }
      }
    return NewCellNames;
  } else if(sortType === "kutchi") { 
    $("#filter-by").text("Kutchi");

    for(let i = 0; i < (cellNames.length - 1); i++) {
      let type = checkUndefined(worksheet[cellNames[i][2]]).v.charAt(0);
      if( type == "K") {
        tempArray.push( cellNames[i] );
      }
    }
    return tempArray;
  } else if(sortType === "bavisi") {  
    $("#filter-by").text("Bavisi");

    for(let i = 0; i < (cellNames.length - 1); i++) {
      let type = checkUndefined(worksheet[cellNames[i][2]]).v.charAt(0) + checkUndefined(worksheet[cellNames[i][2]]).v.charAt(1);
      if( type === "Ba") {
        tempArray.push( cellNames[i] );
      } else if( type === "Kh") {
        tempArray.push( cellNames[i] );
      }
    }
    return tempArray;
  } else if(sortType === "halai") {  
    $("#filter-by").text("Halai");

    for(let i = 0; i < (cellNames.length - 1); i++) {
      let type = checkUndefined(worksheet[cellNames[i][2]]).v.charAt(0);
      if( type == "H") {
        tempArray.push( cellNames[i] );
      }
    }
    return tempArray;
  } else if(sortType === "unmarried") { 
    $("#filter-by").text("Unmarried");

    for(let i = 0; i < (cellNames.length - 1); i++) {
      let status = checkUndefined(worksheet[cellNames[i][4]]).v.charAt(0);
      if( status == "U") {
        tempArray.push( cellNames[i] );
      }
    }
    return tempArray;
  } else if(sortType === "divorcee") { 
    $("#filter-by").text("Divorcee");

    for(let i = 0; i < (cellNames.length - 1); i++) {
      let status = checkUndefined(worksheet[cellNames[i][4]]).v.charAt(0);
      if( status == "D") {
        tempArray.push( cellNames[i] );
      }
    }
    return tempArray;
  } else if(sortType === "widow") { 
    $("#filter-by").text("Widow");

    for(let i = 0; i < (cellNames.length - 1); i++) {
      let status = checkUndefined(worksheet[cellNames[i][4]]).v.charAt(0);
      if( status == "W") {
        tempArray.push( cellNames[i] );
      }
    }
    return tempArray;
  } else {

    return console.log("Somting Wemt wrong during sorting");;
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


// function search(searchText, cellNames, worksheet) {

//   //adding details
//   let answer;
//   let error;
//   let matchTo;

//   outer_loop: 
//   for(let i = 0; i < (cellNames.length - 1); i++) {
//     for(let j = 0; j < 16; j++) {
//       matchTo = "" + checkUndefined(worksheet[cellNames[i][j]]).v + "";
//       if( searchText == matchTo.split(" ") ) {
//         answer = "Match found";
//         console.log(i , j , "done");
//         break outer_loop;
//       }else { 
//         answer = "Error";
//       }
      
//     }
//   }
//   console.log(searchText, answer);
// }