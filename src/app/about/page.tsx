import Header from "../components/header"
import Footer from "../components/footer"
import Style from "./page.module.css"

export default function About(){
    return(
        <>
        <Header />  
            <div className={Style.container}>
                <div>
                    <h2 className={Style.h2}>3D Wood</h2>
                </div>
                <div className={Style.container_filho}>
                    <p className={Style.p}>Desde 2016 a 3D Wood vem atuando no mercado de iluminação decorativa, contamos com uma extensa linha de produtos, alguns projetados com design exclusivo, outros seguem os formatos que atendem as tendências do mercado de iluminação.
                        <br></br>
                        <br></br>
                        Nossas peças são cortadas a laser, envernizadas e montadas uma a uma à mão, mesmo que artesanal, utilizamos materiais de alta qualidade, não abrindo mão de uma produção sustentável e ecologicamente correta.
                        <br></br>
                        <br></br>
                        Temos como principal patrimônio da empresa, nossos clientes. Por isso estamos sempre dispostos a atendê-los nos pedidos e no pós-vendas. 
                    </p>
                </div>
                <div className={Style.container_filho}>
                    <p className={Style.p} >
                    <strong>Contatos:</strong><br></br>
                    Tel: (19) 3893-5477 <br></br>
                    Email:comercial01@3dluzedesign.com.br<br></br>
                    Endereço:<strong>Av: Papa João XXIII,77 – Centro, Pedreira /Sp</strong> 
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}