import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import SLaunch from "@/app/components/SLaunch"

export default function NotFound() {
return (
    <>
    <Header/>
    <div className="flex items-center justify-center text-black flex-col">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="mt-2 text-lg">Desculpe, não conseguimos encontrar o que você procura.</p>
    </div>
    <SLaunch/>
    <Footer/>
    </>
  );
}
