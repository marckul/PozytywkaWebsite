

const IS_BROWSER = typeof window !== "undefined"

/** Checks if string is empty, that means if contains only spaces, tabs, newlines
 * @param { string } string 
 */
const ContainsOnlySpaces = (string) => {
  // https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces/50971250
  return string.replace(/\s/g, '').length === 0 
}


/** Checks if string is not empty, that means if contains something besides spaces, tabs, newlines
 * @param { string } string 
 */
const IsNotEmpty = (string) => {
  if (typeof string === "undefined" || string === null) {
    return false    
  }
  // https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces/50971250
  
  return  string.replace(/\s/g, '').length !== 0 
}


/** Returns root path of fullPath
 * @param { string } fullPath
 */
const RootPath = (fullPath) => {
  // const rootPath = fullPath.split("/")[0]
  return fullPath.split("/")[0]
}




/**
 * 
 * @param {string} dateString 
 */
function WordsSentenceCase(dateString) {
  const allWords = dateString.split(" ")
  const allWordsUpper = allWords.map( word => {
    let wordUpper = word
    if (word !== "") {
      wordUpper = word[0].toUpperCase() + word.slice(1)
    }
    return wordUpper
  })

  return allWordsUpper.join(" ")    
}
function FormatDate(publish_date) {

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let formattedDate = new Date(publish_date);
  let dateString = formattedDate.toLocaleDateString("pl-PL", options);

  return WordsSentenceCase(dateString);
}


/**
 * 
 * @param { string } fullPath 
 * @param { string } rootPath 
 */
function GetRelativePath(fullPath, rootPath) {
  const start = fullPath.substr(0, rootPath.length)
  if (start !== rootPath) {
    console.warn(`URL don't contain provided root path`)    
    return ""
  }

  const relativePathLength = fullPath.length - rootPath.length
  return fullPath.substr(rootPath.length, relativePathLength)
  
  
  
}





// "aktualnosci/post/szablon-artykulu"



export { ContainsOnlySpaces, IsNotEmpty, FormatDate, WordsSentenceCase, GetRelativePath }

if (IS_BROWSER) {
  window.StringTools = {
    RootPath,
    ContainsOnlySpaces,
    IsNotEmpty,
    GetRelativePath
  }  
}