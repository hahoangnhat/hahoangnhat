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
    <article className="d-flex gap-20 white-bg border-radius-10 p-20">
      <div>
        <a href="">
          <Image className="border-radius-10" src={imgUrl} width={200} height={200} alt={imgAlt} />
        </a>
      </div>
      <div className="d-flex flex-col h-200-px">
        <div className="font-weight-600 font-size-30 pb-15"><a href="" className="link limit-txt-line-2">{title}</a></div>
        <div className="flex-grow-1">
          <div className="limit-txt-line-4">{description}</div>
        </div>
        <div>{updateDate}</div>
      </div>
    </article>
  )
}