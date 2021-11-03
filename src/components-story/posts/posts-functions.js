import { IsNotEmpty } from '../../functions/stringTools'


function GetPublishDate(post, content) {
  
  // const content = JSON.parse(post.content)
  // post.content = JSON.parse(post.content)
  /**
   * TODO: Robię właśnie wybór daty publikacji
   * Jesli jest to wybór
   * 1. Daty publikacji z ustawień (publish_date)
   * 2. Data publikacji postu
   * 3. Data stworzenia postu
   *
   * Dodanie przełącznika żeby pokazać wstęp
   */
  // const story = { }
  let publish_date = null

  if (IsNotEmpty(content.publish_date)) {
    publish_date = content.publish_date

  }
  else if (IsNotEmpty(post.published_at)) {
    publish_date = post.published_at
  }
  else {
    publish_date = post.created_at
  }
  
  // story.content = story.content
  // post.full_slug = post.full_slug


  // if (story.slug === "post-czwarty") {
  //   debugger
  // }
  return publish_date
}

export { GetPublishDate }