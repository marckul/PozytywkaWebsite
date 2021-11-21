import * as React from 'react'
import { Link } from 'gatsby'
import { IsNotEmpty, IsNotEmpty as String_IsNotEmpty, Slugify } from '../../functions/stringTools'

import { Phone } from '../../components/components-bundle/components-bundle'


/** Prepares URL depends of given type of link
 * 
 * @param { object } blok 
 * @param { string } link_type one of [phone-number, story, url, email, anchor]
 */
function PrepareHrefBlok(blok, link_type) {
  // link_type: [phone-number, story, url, email, anchor]
  let HREF = undefined;
  if (link_type === "phone-number") {
    HREF =  `${blok.phone_number}` // tel: jest dodawane pózniej
  } 
  else if (link_type === "story") {
    const htmlId = Slugify(blok.link.anchor)
    HREF = `${blok.link.cached_url}#${htmlId}`
    // ADD ROOT
    if (HREF[0] !== "/") {
      HREF = `/${HREF}`
    }
  }
  else if (link_type === "url") {
    HREF = blok.link.cached_url
    const subStrings = HREF.split("://")
    if (subStrings.length === 1) {
      HREF = `http://${HREF}`
    }
  }
  else if (link_type === "email") {
    HREF = `mailto:${blok.link.email}`
  }
  else if (link_type === "anchor") {
    HREF = `#${Slugify(blok.anchor)}`
  }
  else if (link_type === "modal-link") {
    HREF = ''
  }
  return HREF
}

/** Prepares URL depends of given type of link for Rich Text
 * 
 * @param { object } blok 
 * @param { string } link_type one of [phone-number, story, url, email, anchor]
 */
function PrepareHref(link, link_type) {
  let HREF = undefined;
  if (link_type === "story") {
    const htmlId = !link.anchor ? '' : `#${Slugify(link.anchor)}`;
    HREF = `${link.href}${htmlId}`
    // ADD ROOT
    if (HREF[0] !== "/") {
      HREF = `/${HREF}`
    }
  }
  else if (link_type === "url") {
    HREF = link.href
    const subStrings = HREF.split("://")
    if (subStrings.length === 1) {
      HREF = `http://${HREF}`
    }
  }
  else if (link_type === "email") {
    HREF = `mailto:${link.email}`
  }
  return HREF
}


function AnchorLink({ to, children, link_type, ...props }) {
  let toHref = to !== "" ? to : undefined

  if ( ["story","anchor"].includes(link_type) ) {
    return <Link to={toHref} {...props}> {children} </Link>
  }

  if (link_type === "phone-number") {
    return(
      <Phone tel={toHref} {...props}>
        {toHref}
      </Phone>
    )
  }

  return(
    <a href={toHref} {...props}>
      {children} 
    </a>
  )
}


export {AnchorLink, PrepareHrefBlok, PrepareHref}