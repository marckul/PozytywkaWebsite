import * as React from 'react'

import Layout from '../components/layout'
import {NavbarSpace} from '../components/header'

import '../components/article/article.css'
import ImagePlaceholder from '../assets/images/artykul-zdjecie.jpg'
import ImagePlaceholder2 from '../assets/images/offer-page-hero--prod.jpg'
import ImagePlaceholder3 from '../assets/images/spacer-w--gorach--30.jpg'
import { Figure } from '../components/components-bundle/components-bundle'




function Layout2({children, ...props}) {
  return(
    <Layout {...props} topSpace={true} mainClassName="" >
      {children}
    </Layout>
  )
  
}







const ArticleTemplate = () => {
  return(
    <Layout2 header="light">
      <div className="container">
        <div className="article-container row">
            <article className="article readable-width col-md-12 pt-3">
              <div className="article-header">
                <h1 className="h2" >Tytuł tego artykułu</h1>
                <p className="lead pb-3">
                  Tutaj krótki wstęp omawiający o czym jest artykuł, wprowadzający do tematu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <p className="">Wtorek, 10 sierpnia 2021   -   Czas czytania: 3 minuty</p>
                <Figure
                  src={ImagePlaceholder}
                  caption="A caption for the above image."
                  alt="A caption for the above image."
                />
              </div>
              <h2 className="h4"> Nagłówek Pierwszy </h2>
              <p className="drop-cap">
                Tekst dziełowy inaczej nazywany również głównym lub rzadziej chlebowym jest kwintesencją każdej publikacji. Kupujemy książki właśnie z uwagi na interesującą treść, która zajmuje w strukturze książki największą jej część. Aby tekst dziełowy stanowił zgrabną i przejrzystą strukturę musi być podporządkowany pewnym zasadom kompozycyjnym. Podstawową jednostką kompozycji w tekście jest akapit, czasem zwany ustępem. Pomaga on czytelnikowi właściwie odczytać i rozumieć cały tekst.
                Akapit składa się z wierszy. Ustalono wygodną dla czytelnika długość wiersza akapitu w układzie jednołamowym, złożonego szeryfowym krojem pisma w stopniu tekstowym. Przyjrzyjmy się poniższemu wyszczególnieniu:
              </p>
              <Figure
                src={ImagePlaceholder2}
                caption="A caption for the above image."
                alt="A caption for the above image."
                indented={true}
              />
              <h2 className="h4"> Drugi Nagłówek </h2>
              <p>Laborum ipsum debitis amet nam natus. Fuga repudiandae expedita quisquam odio reprehenderit in est nam non nobis asperiores quam placeat, aliquid dolores doloremque quasi enim voluptate magni fugiat et consectetur dolore excepturi ea tempore quidem. Voluptates illo aliquam dolor adipisci assumenda aperiam, vitae in id placeat et deserunt minus nobis obcaecati maiores ducimus suscipit, aspernatur esse ad modi perferendis. Animi dolores tempore delectus. Velit quisquam dignissimos nobis voluptatem inventore animi architecto aut est quos deserunt praesentium, officia ex recusandae repellendus asperiores doloremque reiciendis aliquid maiores! Animi assumenda eaque consequuntur cumque quam placeat doloribus quae tempore quia debitis id consectetur dolorum, pariatur dolore excepturi fugit nulla soluta esse quasi delectus quaerat illum dolorem itaque quas. Quia fuga nemo dolorem laudantium sapiente minus expedita perspiciatis beatae perferendis, nostrum eaque voluptas ab harum, dicta nobis reiciendis nam ipsum corporis sit! Beatae excepturi, laudantium ut delectus suscipit neque modi cumque explicabo numquam ipsum magni illum. Optio animi rerum magnam nulla nesciunt? Dicta delectus ex reiciendis illo. Nemo alias iusto doloremque totam, accusantium amet, architecto et pariatur vel quaerat eaque at. Alias illo nesciunt vitae dignissimos eaque qui, fuga voluptatem, aspernatur magni at nam porro sed! Natus ea perspiciatis sit ratione fugit quibusdam, dolorum error nisi quisquam harum reprehenderit labore perferendis suscipit ducimus aperiam inventore enim quos eos quo dolor. Officiis esse laudantium unde sapiente nihil maiores amet voluptates sequi praesentium. Aspernatur vel tempora ad, quod atque voluptates ratione ea exercitationem vitae velit ut quae consectetur! Sequi esse distinctio quis id perferendis error repellendus, necessitatibus illum suscipit? Consequatur similique modi illo quos sequi qui quas odio dignissimos impedit at repudiandae maxime quae aliquam fugit reprehenderit sit quaerat perferendis, consectetur vel rerum dolorem?</p>
              <Figure
                src={ImagePlaceholder3}
                caption="A caption for the above image."
                alt="A caption for the above image."
                indented={true}
              />
              <h2 className="h4"> Kolejna sprawa </h2>
              <p>Quam cum possimus tempore, exercitationem facere rem quaerat cupiditate modi commodi ipsum, repellendus quidem impedit sunt aut ex et incidunt officiis, dolore nostrum inventore! Perspiciatis facere nesciunt totam suscipit placeat vitae, animi consectetur nulla sint? Culpa impedit consectetur, doloribus blanditiis rerum quasi? Doloremque nesciunt vitae mollitia, cum atque aperiam unde maiores voluptas architecto labore similique veniam quasi! Soluta quaerat totam odio aliquid sequi quibusdam tenetur reiciendis amet odit accusantium ex doloremque deleniti facere dignissimos minus aliquam id ad necessitatibus tempore, iure perferendis assumenda, explicabo magni? Unde beatae nostrum sint labore minima temporibus a, officiis facilis molestias eos, ut ea architecto velit iste alias atque! Iure error blanditiis eveniet molestias quisquam ducimus possimus at. Excepturi earum ut dicta voluptatum. Natus optio consequuntur ut eius dicta asperiores, quasi ab perspiciatis libero eaque doloremque cupiditate nam corrupti aperiam delectus, nulla magni animi? Nobis minus fugit neque! Hic earum aspernatur dolores quibusdam fuga dolor omnis maiores veritatis aperiam, ut voluptatem in suscipit minus quisquam ducimus, accusamus, doloribus ab quae odio a accusantium excepturi! Minus nam ea ratione velit rem repellendus soluta voluptas ad, consequatur, recusandae, ipsam tempora sit odio ipsum suscipit facilis est fugiat accusamus quas impedit? Nostrum hic ab, ipsa labore temporibus eaque vitae saepe, nobis consequatur sit facere incidunt autem nam itaque velit ut laudantium tenetur deserunt ratione reprehenderit maiores. Illum, rerum expedita. Inventore incidunt obcaecati iste omnis quas repellat dolorem iusto ut placeat fuga facilis, blanditiis laboriosam tempora, consequuntur odit autem commodi repudiandae eius quis dolorum corrupti enim accusamus! Sed voluptates expedita fugit. Iusto rem provident totam, et cumque vero excepturi perspiciatis tenetur libero, corporis ratione adipisci consectetur deleniti sapiente architecto nobis dolor amet quas reprehenderit magni dolore nulla suscipit enim! Qui exercitationem minima quisquam quidem officiis ipsam earum culpa eligendi, quam tenetur accusamus, libero fugit mollitia. Recusandae ipsam temporibus error ipsa ut obcaecati quae dolor maxime illum placeat enim et, omnis, alias odio, aliquid a molestias! Similique sint animi repellat voluptate obcaecati quod earum fugit aut deleniti voluptatem quos temporibus iusto omnis sequi qui voluptatibus eaque repellendus molestias at, deserunt aperiam? Nam asperiores cupiditate rem esse iste sed impedit eligendi ipsam delectus. Itaque repudiandae, accusantium, libero ipsum hic possimus excepturi, quo sed similique enim ipsam odit. Nihil molestiae neque fugiat unde aperiam necessitatibus amet porro rerum quas! Culpa, ipsam et repellat consequuntur possimus corporis in veritatis id voluptatum voluptatibus numquam consectetur! Commodi quisquam laudantium provident? Pariatur vitae voluptate corporis dolore a laborum suscipit repudiandae eveniet, enim impedit distinctio quasi, autem asperiores neque maiores nemo facilis. Similique error non tempora vitae accusantium dignissimos vero beatae illo eligendi ad, ratione provident fugiat atque recusandae voluptatibus repellendus cumque! In possimus accusamus enim non et qui nemo aliquam vel. Totam officiis ipsa nemo est, eaque ullam ad velit? Asperiores magnam ratione illum ut dicta hic adipisci, maxime nobis eum, et aperiam placeat ducimus alias. Magnam natus itaque maxime asperiores at? Voluptas minus iusto illum natus, dolore laboriosam culpa, sequi temporibus numquam consectetur, expedita nesciunt aut a.</p>
            </article>
        </div>
      </div>
    </Layout2>
  )
}

export default ArticleTemplate

