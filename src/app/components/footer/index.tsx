import Style from "./index.module.css"
export default function Footer(){
    return(
        <footer>
            <div className={Style.footer}>
                <div className={Style.conteiner}>
                    <div className={Style.conteiner_filho}>
                        <div >
                            <h2 className={Style.h2}><u>Institucional</u></h2>
                            <ul>
                                <li>&gt; Quem Somos</li>
                                <li>&gt; Galeria</li>
                                <li>&gt; Contato</li>
                                <li>&gt; Produtos</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className={Style.h2}><u>Categorias</u></h2>
                            <ul>
                                <li>&gt; Todos</li>
                                <li>&gt; Lançamento</li>
                                <li>&gt; Pendentes</li>
                                <li>&gt; Arandelas</li>
                                <li>&gt; Abajures</li>
                                <li>&gt; Colunas</li>
                                <li>&gt; Lanternas</li>
                            </ul>
                        </div>
                    </div>
                    <div className={Style.conteiner_filho}>
                        <h2 className={Style.h2}><u>Siga-nos no Instagram</u></h2>
                    </div>
                    <div className={Style.conteiner_filho}>
                        <h2 className={Style.h2}><u>Newsletter</u></h2>
                        <h2 className={Style.h2}><u>Contato</u></h2>
                        <p className={Style.p}>Tel: (19) 3893-5477<br></br>
                            comercial01@3dluzedesign.com.br<br></br>
                            Av: Papa João XXIII,77 - Centro<br></br>
                            Pedreira\ Sp<br></br>
                            Cep: 13920-000</p>
                    </div>
                </div>
            </div>
                <div className={Style.conteiner_copy}>
                    <h3 className={Style.copy}>3D WOOD By RUSSO & FARIA COM. MAT. ELETRICO LTDA Since 2018</h3>
                </div>  
           
        </footer>
    
    )
}