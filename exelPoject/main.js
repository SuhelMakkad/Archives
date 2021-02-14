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
  let cellNames = getDetails(numberOfRows, worksheet)
  $(".count p").html(cellNames.length);

  //adding details to html
  addDetailsAll(topHeadings, headings, cellNames, worksheet);

  let sortType1;
  let sortType2;
  let sortType3;


  //soring according to toggle
  $("li").click( (e) => {

    let sortBy = e.target.innerText.charAt(0) + e.target.innerText.charAt(1);
    let li = e.target;
    console.log(sortBy);
    
    
    if(sortBy === "Id") {

      $("li").removeClass("selected");
      $(li).addClass("selected");
      sortType = "id";
      newCellNames =  sortDetails(sortType, cellNames, worksheet);
      //adding details to html
      addDetailsAll(topHeadings, headings, newCellNames, worksheet);
      $(".count p").html(newCellNames.length);
      cellNames = newCellNames;

    }

    if(sortBy === "As") {

      $("li").removeClass("selected");
      $(li).addClass("selected");
      sortType = "ascending";
      newCellNames =  sortDetails(sortType, cellNames, worksheet);
      //adding details to html
      addDetailsAll(topHeadings, headings, newCellNames, worksheet);
      $(".count p").html(newCellNames.length);
      cellNames = newCellNames;

    }

    else if(sortBy === "De") {

      $("li").removeClass("selected");
      $(li).addClass("selected");
      sortType = "descending"; 
      newCellNames =  sortDetails(sortType, cellNames, worksheet);
      //adding details to html
      addDetailsAll(topHeadings, headings, newCellNames, worksheet);
      $(".count p").html(newCellNames.length);
      cellNames = newCellNames;

    }

    
    if (sortBy === "Fi") {
      $("form").addClass("form-active");
      $("body").addClass("active");
    }

    //
    
  });

  //for filter 

  $("td").click( (e) => {
      let td = e.target;
      let text = td.innerText;
      let finalCellNames = cellNames;

      $(td).addClass("selected-cell");
      if(text === "Male") {
          sortType1 = "male";
          $("#female").removeClass("selected-cell");
      } else if (text === "Female") {
          sortType1 = "female";
          $("#male").removeClass("selected-cell");
      }
      if (text === "Kutchi") {
          sortType2 = "kutchi";
          $("#bavisi").removeClass("selected-cell");
          $("#halai").removeClass("selected-cell");
      }else if (text === "Bavisi") {
          sortType2 = "bavisi";
          $("#kutchi").removeClass("selected-cell");
          $("#halai").removeClass("selected-cell");
      }else if (text === "Halai") {
          sortType2 = "halai";
          $("#bavisi").removeClass("selected-cell");
          $("#kutchi").removeClass("selected-cell");
      }
      if (text === "Unmarried") {
          sortType3 = "unmarried";
          console.log();
          $("#divorcee").removeClass("selected-cell");
          $("#widow").removeClass("selected-cell");
      }else if (text === "Divorcee") {
          sortType3 = "divorcee";
          $("#unmarried").removeClass("selected-cell");
          $("#widow").removeClass("selected-cell");
      }else if (text === "Widow") {
          sortType3 = "widow";
          $("#unmarried").removeClass("selected-cell");
          $("#divorcee").removeClass("selected-cell");
      }

      if (text === "Apply") {
          console.log(sortType1, sortType2, sortType3);
          $("form").removeClass("form-active");
          $("body").removeClass("active");
          //

          if(sortType1 === "male") {

            sortType = "male";
            newCellNames =  sortDetails(sortType, finalCellNames, worksheet);
            console.log(newCellNames);
            finalCellNames = newCellNames;
      
          }
      
          else if(sortType1 === "female") {
      
            sortType = "female";
            newCellNames =  sortDetails(sortType, finalCellNames, worksheet);
            finalCellNames = newCellNames;
      
          } else {

          }
      
          
          if(sortType2 === "kutchi") { 
      
            sortType = "kutchi";
            console.log(sortType);
            newCellNames =  sortDetails(sortType, finalCellNames, worksheet);
            finalCellNames = newCellNames;
      
          }
      
          else if(sortType2 === "bavisi") { 
      
            sortType = "bavisi";
            console.log(sortType);
            newCellNames =  sortDetails(sortType, finalCellNames, worksheet);
            finalCellNames = newCellNames;
      
          }
      
          else if(sortType2 === "halai") { 
      
            sortType = "halai";
            console.log(sortType);
            newCellNames =  sortDetails(sortType, finalCellNames, worksheet);
            console.log(newCellNames);
            finalCellNames = newCellNames;
            console.log("this", finalCellNames);
      
          }
      
          if(sortType3 === "unmarried") { 
            
            sortType = "unmarried";
            console.log(sortType);
            newCellNames =  sortDetails(sortType, finalCellNames, worksheet);
            finalCellNames = newCellNames;
      
          }
      
          else if(sortType3 === "divorcee") { 
      
            sortType = "divorcee";
            console.log(sortType);
            newCellNames =  sortDetails(sortType, finalCellNames, worksheet);
            finalCellNames = newCellNames;
      
          }
      
          else if(sortType3 === "widow") { 
      
            sortType = "widow";
            console.log(sortType);
            newCellNames =  sortDetails(sortType, finalCellNames, worksheet);
            console.log(newCellNames);
          
            finalCellNames = newCellNames;
      
          }

          
            //adding details to html
            addDetailsAll(topHeadings, headings, finalCellNames, worksheet);
            $(".count p").html(finalCellNames.length);
            console.log(finalCellNames);


          //
      } else if (text === "Reset") {
          $("td").removeClass("selected-cell");
          sortType1 = undefined;
          sortType2 = undefined;
          sortType3 = undefined;
      } else if (text === "close") {
        $("form").removeClass("form-active");
        $("body").removeClass("active");
      }
  
      
  } );



 console.log(sortDetails("id", cellNames, worksheet)); 


}
oReq.send();


function sortDetails(sortType, cellNames, worksheet) {

  let tempArray = [];
  let temp;
  let tempCellName; 

  if(sortType === "id") { //according to ids  
    console.log("helo");

    for(let i = 0; i < (cellNames.length - 1); i++) {
      tempArray.push(checkUndefined(worksheet[cellNames[i][0]]).v);
    }
    
    for (let a = 0; a < (tempArray.length - 1); a++) {
    for (let b = a + 1; b < tempArray.length; b++) {
      if (tempArray[b] < tempArray[a]) {
        tempCellName = cellNames[a]; //shorting cell names on basis of id
        cellNames[a] = cellNames[b];
        cellNames[b] = tempCellName;
  
        temp = tempArray[a]; //shorting id 
        tempArray[a] = tempArray[b]; 
        tempArray[b] = temp; 
        }     
      }
    }

    return cellNames ;

  } else if(sortType === "descending") { 
    
    for(let i = 0; i < (cellNames.length - 1); i++) {
      tempArray.push(checkUndefined(worksheet[cellNames[i][3]]).v);
    }

    for (let a = 0; a < (tempArray.length - 1); a++) {
      for (let b = a + 1; b < tempArray.length; b++) {
        if (tempArray[b] > tempArray[a]) {
          tempCellName = cellNames[a]; //shorting cell names on basis of id
          cellNames[a] = cellNames[b];
          cellNames[b] = tempCellName;
    
          temp = tempArray[a]; //shorting id 
          tempArray[a] = tempArray[b]; 
          tempArray[b] = temp; 
          }     
        }
      }
    return cellNames;
  } 
  
  else if(sortType === "ascending") { 
    
    for(let i = 0; i < (cellNames.length - 1); i++) {
      tempArray.push(checkUndefined(worksheet[cellNames[i][3]]).v);
    }

    for (let a = 0; a < (tempArray.length - 1); a++) {
      for (let b = a + 1; b < tempArray.length; b++) {
        if (tempArray[b] < tempArray[a]) {
          tempCellName = cellNames[a]; //shorting cell names on basis of id
          cellNames[a] = cellNames[b];
          cellNames[b] = tempCellName;
    
          temp = tempArray[a]; //shorting id 
          tempArray[a] = tempArray[b]; 
          tempArray[b] = temp; 
          }     
        }
      }
    return cellNames;
  } 
  
  else if(sortType === "female") { 

    for(let i = 0; i < (cellNames.length - 1); i++) {
      let gender = checkUndefined(worksheet[cellNames[i][1]]).v.charAt(0);
      if( gender == "F") {
        tempArray.push( cellNames[i] );
      }
    }
    return tempArray;
  } else if(sortType === "male") { //showing only male
    
    for(let i = 0; i < (cellNames.length - 1); i++) {
      let gender = checkUndefined(worksheet[cellNames[i][1]]).v.charAt(0);
      if( gender == "M") {
        tempArray.push( cellNames[i] );
      }
    }
    return tempArray;
  } 
  
  else if(sortType === "kutchi") { 

    for(let i = 0; i < (cellNames.length - 1); i++) {
      let type = checkUndefined(worksheet[cellNames[i][2]]).v.charAt(0);
      if( type == "K") {
        tempArray.push( cellNames[i] );
      }
    }
    return tempArray;
  } 
  else if(sortType === "bavisi") {  

    for(let i = 0; i < (cellNames.length - 1); i++) {
      let type = checkUndefined(worksheet[cellNames[i][2]]).v.charAt(0) + checkUndefined(worksheet[cellNames[i][2]]).v.charAt(1);
      if( type === "Ba") {
        tempArray.push( cellNames[i] );
      } else if( type === "Kh") {
        tempArray.push( cellNames[i] );
      }
    }
    return tempArray;
  } 
  else if(sortType === "halai") {  

    for(let i = 0; i < (cellNames.length - 1); i++) {
      let type = checkUndefined(worksheet[cellNames[i][2]]).v.charAt(0);
      if( type == "H") {
        tempArray.push( cellNames[i] );
      }
    }
    return tempArray;
  } 
  
  else if(sortType === "unmarried") { 

    for(let i = 0; i < (cellNames.length - 1); i++) {
      let status = checkUndefined(worksheet[cellNames[i][4]]).v.charAt(0);
      if( status == "U") {
        tempArray.push( cellNames[i] );
      }
    }
    return tempArray;
  } 
  
  else if(sortType === "divorcee") { 

    for(let i = 0; i < (cellNames.length - 1); i++) {
      let status = checkUndefined(worksheet[cellNames[i][4]]).v.charAt(0);
      if( status == "D") {
        tempArray.push( cellNames[i] );
      }
    }
    return tempArray;
  } 
  
  else if(sortType === "widow") { 

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

  let length = cellNames.length - 1;

  //adding details
  if(length == 0) {
    length = 1;
  }

  for(let i = 0; i < length; i++) {    

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
    htmlToAppend += "<section class='entry'> <div class='top-heading-1'>" + topHeadingArray[0] + "</div> <div class='heading-details " + backgroundColor + "'>";
    for(let j = 0; j < 12; j++) {
      htmlToAppend +=
        "<div class='container'> <div class='heading-1'>" + headings[j] + "</div>" +
        "<div class='details-1'>" + checkUndefined(worksheet[cellNames[i][j]]).v+ "</div></div><hr>";
    }
    //second heading
    htmlToAppend += "</div><div class='lower-headings " + backgroundColor + "'> <div> <div class='top-heading-2'>" + topHeadingArray[1] + "</div> <div class='heading-details-2 " + backgroundColor + "'>";
    for(let j = 12; j < 14; j++) {
      htmlToAppend +=
        "<div class='container'><div class='heading-1'>" + headings[j] + "</div>" +
        "<div class='details-1'>" + checkUndefined(worksheet[cellNames[i][j]]).v+ "</div></div><hr>";
    }
    //third heading
    htmlToAppend += "</div></div> <div> <div class='top-heading-3'>" + topHeadingArray[2] + "</div><div class='heading-details-3 " + backgroundColor + "'>";
    for(let j = 14; j < 16; j++) {
      htmlToAppend +=
        "<div class='container'><div class='heading-1'>" + headings[j] + "</div>" +
        "<div class='details-1'>" + checkUndefined(worksheet[cellNames[i][j]]).v+ "</div></div><hr>";
    }
    htmlToAppend += "</div></div></div> </section>";

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