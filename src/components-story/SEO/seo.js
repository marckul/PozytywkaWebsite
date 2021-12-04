

import { useStaticQuery, graphql } from 'gatsby'
import { IsEmpty, IsNotEmpty } from '../../functions/stringTools'

function GetSEO(story) {
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
      storyblokEntry(full_slug: {eq: "start-dontRenderPage"}) {
        content
        name
      }
    }
  `)

  let fallback;
  if (storyblokEntry) {
    fallback = JSON.parse(storyblokEntry.content)?.seo_metadata
  }

  /* make title template for pages without metadata title */
  if (story && IsEmpty(seo_metadata?.title)) {
    seo_metadata.title = `${story.name} - ${site.siteMetadata.title}`
  }

  if (fallback) {
    
    for (const key in fallback) {
      if (Object.hasOwnProperty.call(fallback, key)) {

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
  
  return seo_metadata
}


export { GetSEO }