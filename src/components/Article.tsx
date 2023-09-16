import Image from 'next/image'

export default function Article({
  imgUrl,
  imgAlt,
  title,
  description
}: {
  imgUrl: string,
  imgAlt: string,
  title: string,
  description: string
}) {
  return (
    <article className="white-bg border-radius-10 p-10">
      <div className="img-container">
        <a href="">
          <Image className="border-radius-10" src={imgUrl} width={500} height={500} alt={imgAlt} />
        </a>
      </div>
      <div className="article-body">
        <div className="article-title">{title}</div>
        <div className="article-description">{description}</div>
      </div>
    </article>
  )
}