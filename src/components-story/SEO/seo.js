

import { useStaticQuery, graphql } from 'gatsby'
import { IsNotEmpty } from '../../functions/stringTools'


/* 
Pozytywka ODT - Diagnoza i Terapia autyzmu
*/

/** Checks if string is empty, that means if contains only spaces, tabs, newlines or is undefined
 * 
 * @param { string } string 
 * @returns { boolean } boolean
 */
function IsEmpty(string) {
  return !IsNotEmpty(string)
}

function GetSEO(story) {
  // debugger
  let seo_metadata = story?.content?.seo_metadata
  if (!seo_metadata) {
    seo_metadata = {}    
  }

  const { site, storyblokEntry } = useStaticQuery(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
      storyblokEntry(full_slug: {eq: "start"}) {
        content
        name
      }
    }
  `)

  const fallback = JSON.parse(storyblokEntry.content)?.seo_metadata

  /* make title template for pages without metadata title */
  if (IsEmpty(seo_metadata?.title)) {
    seo_metadata.title = `${story.name} - ${site.siteMetadata.title}`
  }

  if (fallback) {
    
    for (const key in fallback) {
      if (Object.hasOwnProperty.call(fallback, key)) {
        // debugger

        const emptyMetadata = IsEmpty(seo_metadata[key])
        if ( emptyMetadata && IsNotEmpty(fallback[key])) {
          console.log(key);
          console.log(fallback[key]);
          seo_metadata[key] = fallback[key]
        } 
      }
    }
  } 
  
  
  if (IsEmpty(seo_metadata.description)) {
    seo_metadata.description = site.siteMetadata.description
  }
  
  // debugger

  
  
  // const query = useStaticQuery(graphql`
  //   query SEOQuery {
  //     storyblokEntry(full_slug: {eq: "start"}) {
  //       content
  //       name
  //     }
  //   }
  // `)
return seo_metadata
}


export { GetSEO }