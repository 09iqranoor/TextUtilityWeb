function convertToUpper() {
    const text = document.getElementById('inputText').value;
    const uppertext = text.toUpperCase();
    document.getElementById('output').innerText = uppertext;
  }
  

 
  function convertToLower(){


    const lower = document.getElementById('inputText').value;
    
     const  lowercase = lower.toLowerCase();

     document.getElementById('output').innerText = lowercase;
  }
  
//   function countWords() {
//     const text = document.getElementById('inputText').value;
//     const count = text.trim().split(/\s+/); 
//     const wordcount = count.length;
//     document.getElementById('output').innerText = `Word count: ${wordcount}`;
//   }
  
   
  function countwords(){
      const  count = document.getElementById('inputText').value;

      const countword = count.trim().split(/\s+/);

      const  totalword = countword.length;
      document.getElementById('output').innerHTML = `word Count : <span style="color:green; background:yellow">${totalword}</span>`;
  }


  function countChar(){
    const text = document.getElementById('inputText').value;
     const trimmed = text.trim();
     const noSpace = trimmed.replace(/\s/g, '');
     
    const totalwords = noSpace.length;

   

    document.getElementById('output').innerText = `Total Words: ${totalwords}`;
   
}

//   function highlightDuplicates() {
//     const text = document.getElementById('inputText').value;
//     // Convert text to lowercase to catch case-insensitive duplicates
//     const words = text.trim().toLowerCase().split(/\s+/);
//     // Track duplicates
//     const duplicates = words.filter((word, index, self) => self.indexOf(word) !== index);
//    // Split original (not lowercase) text
//  const originalWords = text.trim().split(/\s+/);
//  // Highlight duplicates using original casing
//     const highlighted = originalWords.map((word) => {
//       if (duplicates.includes(word.toLowerCase())) {
//         return `<span style="color: red; font-weight: bold;  border:2px solid; padding:2px solid; background:yellow">${word}</span>`;
//       }
//       return word;
//     }).join(" "); 
  
//     document.getElementById('output').innerHTML = highlighted;
//   }


 

function highlightDuplicates(){
    const text = document.getElementById('inputText').value;

    const trimmed = text.trim().toLowerCase().split(/\s+/);

    const dublicate = trimmed.filter((word , index , self )=>  self.indexOf(word) !== index );

    const originalvalue = text.trim().split(/\s+/);


    const dublicatevalue = originalvalue.map((word)=>{
  if(dublicate.includes(word.toLowerCase())){
    return `<span style="background:red; font-weight:bold">${word} </span>`

  } 
  return word;
           }).join(" ");

           document.getElementById('output').innerHTML = dublicatevalue;
}
 
  

// Search words



  function searchWord(){
    const text5 = document.getElementById('inputText').value;
     
    const trimed = text5.trim().split(/\s+/);

    const searchItem =  document.getElementById('searchWords').value;

    const foundWord = trimed.find(word => word === searchItem );
 
    if(foundWord){  
    const searchw =  `Word  <span style="background:red">${searchItem}</span>  found in the text`;
    document.getElementById('search').innerHTML = searchw;
    return searchw; 
    }
     
    else {
        const searchwor =  `Word  "<span style="  background-color: rgb(226, 202, 114);; padding:3px;   color: rgb(101, 100, 100);">${searchItem}</span>" not found `;
    document.getElementById('search').innerHTML = searchwor;
   
        // alert(`Word ${searchItem} " not found`);
    }
   
  }


//   function countWordOccurrences(){
  
//     const countword= document.getElementById('inputText').value;

//     const trimword = countword.trim().split(/ \s+/);

//      const wordcount = trimword.reduce((acc, word)=>{
//         acc[word] = (acc[word] || 0)+1;
//         return acc;
//      }, {});



//   }


function countWordsOccurances(){
    const text = document.getElementById('inputText').value;

    const trimtext= text.trim().split(/\s+/);

    const  totalwords = trimtext.reduce((acc, word) =>{
           
           acc[word] = (acc[word] || 0)+1;

           return acc;

    },{})
    
    // document.getElementById('output').innerText =JSON.stringify(totalwords , null ,2);
   



    const output = Object.entries(totalwords).map(([word, count]) => `${word} : ${count}`).join('\n');
    document.getElementById("output").innerText = output;

}



// function removeDublicates(){

//     const text = document.getElementById('inputText').value;

//     const words= text.trim().split(/\s+/);

//    ;
//     const uniquewords = words.filter((currentword, index , self) => {
//         return self.indexOf(currentword) === index;
//     })
//     document.getElementById('output').innerText =  uniquewords.join(" ");
// }


// function removeDublicates(){

//     const text = document.getElementById('inputText').value;

//     const words= text.trim().split(/\s+/);

//     const unique = new Set([words]);
     
//     const uniquewords = [...unique];
//     document.getElementById('output').innerText =  uniquewords.join(" ");

// }


function removeDublicates(){

    const text = document.getElementById('inputText').value;

    const words= text.trim().split(/\s+/);
    
    const unique = new Set(words);
     
    const uniquewords = [...unique];
    document.getElementById('output').innerText =  uniquewords.join(" ");

}


// function sortWords(){
//     const text = document.getElementById('inputText').value;

//     const words= text.trim().toLowerCase().split(/\s+/);
     
      
//     const sortWords = words.sort( )
    
//     document.getElementById('output').innerText =  sortWords.join(" ");

// }

function sortWords(){
    const text = document.getElementById('inputText').value;

    const words= text.trim().split(/\s+/);
     
      
    const sortWords = words.sort(   (a,b) => a.toLowerCase().localeCompare(b.toLowerCase()) );
    
    document.getElementById('output').innerText =  sortWords.join(" ");

}
 


function sliceText(){
    const text = document.getElementById('inputText').value;

    const words= text.trim().split(/\s+/);

     const wordslengt = words.length;
     
     const extract = words.slice(0,10).join(" ")+ "...";
     document.getElementById('output').innerText = extract;
   


    }    


function saveText(){
    const text = document.getElementById('inputText').value;

     localStorage.setItem("savedtext", text);
     alert("saved Succesfully 💾");  
      

}

function loadSavedText(){
    
  const saved =  localStorage.getItem("savedtext");
   
   if(saved){
    document.getElementById('savedText').innerText= `${saved}`;
   
   }

   else{
    alert("No saved text found");
   }
   
    

}



function clearText(){
    document.getElementById('inputText').value = '';
    localStorage.removeItem('savedText');
    document.getElementById('output').innerText = '';
     document.getElementById('savedText').innerText = '';  
    
}
 

