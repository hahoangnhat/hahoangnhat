import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header activeItem="1" />
      <main className="flex-grow-1">
        <h1>Hello, NextJS!</h1>
      </main>
      <Footer />
    </>
  )
}
