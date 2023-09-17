import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Article from '@/components/Article'

export default function Blog() {
  const articles = [
    {
      articleId: "1",
      imgUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDl8fG5hdHVyZXxlbnwwfHx8fDE2NzE0MzE3ODc&ixlib=rb-4.0.3&q=80&w=600",
      imgAlt: "jungle",
      title: "In all things of nature there is something of the marvelous thus elevated into fame, and conscious of uncommon powers, he had not that",
      description: "Though thus elevated into fame, and conscious of uncommon powers, he had not that bustling confidence, or, I may rather say, that animated ambition, which one might have supposed would have urged him to endeavour at rising in life. But such was his inflexible dignity of character, that he could not stoop to court the great; without which, hardly any man has made his way to a high station.",
      updateDate: new Date().toLocaleString()
    },
    {
      articleId: "2",
      imgUrl: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE5fHxvY2VhbnxlbnwwfHx8fDE2NzE0MzIyNzg&ixlib=rb-4.0.3&q=80&w=600",
      imgAlt: "turtle",
      title: "New tech innovation for low cost ocean cleanup",
      description: "Nearly a year later, in the month of October, London was startled by a crime of singular ferocity and rendered all the more notable by the high position of the victim. The details were few and startling. A maid servant living alone in a house not far from the river, had gone upstairs to bed about eleven. Although a fog rolled over the city in the small hours, the early part of the night was cloudless, and the lane, which the maid’s window overlooked, was brilliantly lit by the full moon. It seems she was romantically given, for she sat down upon her box, which stood immediately under the window, and fell into a dream of musing.",
      updateDate: new Date().toLocaleString()
    },
    {
      articleId: "3",
      imgUrl: "https://images.unsplash.com/photo-1506947411487-a56738267384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDN8fGRyb25lfGVufDB8fHx8MTY3MTQzMTcwMA&ixlib=rb-4.0.3&q=80&w=600",
      imgAlt: "flycam",
      title: "Amphibious drone are being used to send medicine to flooded area",
      description: "Another tragedy. Had single watch to-night, as crew too tired to double. When morning watch came on deck could find no one except steersman. Raised outcry, and all came on deck. Thorough search, but no one found. Are now without second mate, and crew in a panic. Mate and I agreed to go armed henceforth and wait for any sign of cause. 30 July.--Last night. Rejoiced we are nearing England. Weather fine, all sails set. Retired worn out; slept soundly; awaked by mate telling me that both man of watch and steersman missing. Only self and mate and two hands left to work ship.",
      updateDate: new Date().toLocaleString()
    }
  ]

  return (
    <>
      <Header activeItem="2" />
      <main>
        {
          articles.map(article => {
            return (
              <Article
                key={article.articleId}
                imgUrl={article.imgUrl}
                imgAlt={article.imgAlt}
                title={article.title}
                description={article.description}
                updateDate={article.updateDate}
              />
            )
          })
        }
      </main>
      <Footer />
    </>
  )
}