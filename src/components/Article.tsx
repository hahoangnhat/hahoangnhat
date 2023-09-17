import Image from 'next/image'

export default function Article({
  imgUrl,
  imgAlt,
  title,
  description,
  updateDate
}: {
  imgUrl: string,
  imgAlt: string,
  title: string,
  description: string,
  updateDate: string
}) {
  return (
    <article>
      <div>
        <a href="">
          <Image src={imgUrl} width={200} height={200} alt={imgAlt} />
        </a>
      </div>
      <div>
        <div><a href="">{title}</a></div>
        <div>
          <div>{description}</div>
        </div>
        <div>{updateDate}</div>
      </div>
    </article>
  )
}