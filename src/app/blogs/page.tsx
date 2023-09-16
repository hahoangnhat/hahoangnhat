import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Article from '@/components/Article'

export default function Blog() {
  const articles = [
    {
      articleId: "1",
      imgUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fG5hdHVyZXxlbnwwfHx8fDE2NzE0MzE3ODc&ixlib=rb-4.0.3&q=80&w=600",
      imgAlt: "jungle",
      title: "In all things of nature there is something of the marvelous",
      description: "Though thus elevated into fame, and conscious of uncommon powers, he had not that bustling confidence, or, I may rather say, that animated ambition, which one..."
    },
    {
      articleId: "2",
      imgUrl: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE5fHxvY2VhbnxlbnwwfHx8fDE2NzE0MzIyNzg&ixlib=rb-4.0.3&q=80&w=600",
      imgAlt: "turtle",
      title: "New tech innovation for low cost ocean cleanup",
      description: "Nearly a year later, in the month of October, London was startled by a crime of singular ferocity and rendered all the more notable by the high position of the victim. The details..."
    },
    {
      articleId: "3",
      imgUrl: "https://images.unsplash.com/photo-1506947411487-a56738267384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDN8fGRyb25lfGVufDB8fHx8MTY3MTQzMTcwMA&ixlib=rb-4.0.3&q=80&w=600",
      imgAlt: "flycam",
      title: "Amphibious drone are being used to send medicine to flooded area",
      description: "Another tragedy. Had single watch to-night, as crew too tired to double. When morning watch came on deck could find no one except steersman. Raised outcry, and all cam..."
    }
  ]

  return (
    <>
      <Header activeItem="2" />
      <main className="flex-grow-1 d-flex flex-col gap-20">
        {
          articles.map(article => {
            return (
              <Article
                key={article.articleId}
                imgUrl={article.imgUrl}
                imgAlt={article.imgAlt}
                title={article.title}
                description={article.description}
              />
            )
          })
        }
      </main>
      <Footer />
    </>
  )
}