


const IS_BROWSER = typeof window !== "undefined"

/** Checks if string is empty, that means if contains only spaces, tabs, newlines
 * @param { string } string 
 */
const ContainsOnlySpaces = (string) => {
  // https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces/50971250
  return string.replace(/\s/g, '').length === 0 
}


/** Returns root path of fullPath
 * @param { string } fullPath
 */
const RootPath = (fullPath) => {
  // const rootPath = fullPath.split("/")[0]
  return fullPath.split("/")[0]
}



// "aktualnosci/post/szablon-artykulu"

exports.ContainsOnlySpaces = ContainsOnlySpaces
exports.RootPath = RootPath

if (IS_BROWSER) {
  window.StringTools = {
    RootPath,
    ContainsOnlySpaces
  }  
}