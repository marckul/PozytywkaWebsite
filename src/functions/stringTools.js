

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




/** Function that slugify text
 * @param {*} text 
 * 
 * https://stackoverflow.com/questions/54743952/javascript-slug-working-for-non-latin-characters-also
 */
function Slugify(text) {
  text = text.toString().toLowerCase().trim();

  const sets = [
    {to: 'a', from: '[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶἀ]'},
    {to: 'c', from: '[ÇĆĈČ]'},
    {to: 'd', from: '[ÐĎĐÞ]'},
    {to: 'e', from: '[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]'},
    {to: 'g', from: '[ĜĞĢǴ]'},
    {to: 'h', from: '[ĤḦ]'},
    {to: 'i', from: '[ÌÍÎÏĨĪĮİỈỊ]'},
    {to: 'j', from: '[Ĵ]'},
    {to: 'ij', from: '[Ĳ]'},
    {to: 'k', from: '[Ķ]'},
    {to: 'l', from: '[ĹĻĽŁ]'},
    {to: 'm', from: '[Ḿ]'},
    {to: 'n', from: '[ÑŃŅŇ]'},
    {to: 'o', from: '[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]'},
    {to: 'oe', from: '[Œ]'},
    {to: 'p', from: '[ṕ]'},
    {to: 'r', from: '[ŔŖŘ]'},
    {to: 's', from: '[ßŚŜŞŠȘ]'},
    {to: 't', from: '[ŢŤ]'},
    {to: 'u', from: '[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]'},
    {to: 'w', from: '[ẂŴẀẄ]'},
    {to: 'x', from: '[ẍ]'},
    {to: 'y', from: '[ÝŶŸỲỴỶỸ]'},
    {to: 'z', from: '[ŹŻŽ]'},
    {to: '-', from: '[·/_,:;\']'},
    {to: '', from: '[?]'}
  ];

  sets.forEach(set => {
    text = text.replace(new RegExp(set.from,'gi'), set.to)
  });

  return text
    .replace(/\s+/g, '-')    // Replace spaces with -
    //.replace(/[^-a-zа-я\u0370-\u03ff\u1f00-\u1fff]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-')    // Replace multiple - with single -
    .replace(/^-+/, '')      // Trim - from start of text
    .replace(/-+$/, '')      // Trim - from end of text
}




// "aktualnosci/post/szablon-artykulu"



export { 
  ContainsOnlySpaces, 
  IsNotEmpty, 
  FormatDate, 
  WordsSentenceCase, 
  GetRelativePath, 
  Slugify 
}

if (IS_BROWSER) {
  window.StringTools = {
    RootPath,
    ContainsOnlySpaces,
    IsNotEmpty,
    GetRelativePath,
    Slugify 
  }  
}