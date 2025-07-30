import Link from 'next/link';
import Style from './index.module.css';

export default function Header() {
    return (
        <header>
            {/* Menu Superior */}
            <div className={Style.conteiner_menu_sup}>
                <nav className={Style.nav_menu_sup}>
                    <Link href="/produtos" className={Style.link}>
                        Produtos
                    </Link>
                    <Link href="/about" className={Style.link}>
                        Quem Somos
                    </Link>
                    <Link href="/galeria" className={Style.link}>
                        Galeria
                    </Link>
                    <Link href="/contato" className={Style.link}>
                        Contato
                    </Link>
                </nav>
            </div>

            {/* Logo */}
            <div className={Style.conteiner_img}>
                <Link href="/">
                    <img className={Style.img} src="/images/2022BC.png" alt="Logo" />
                </Link>
            </div>

            {/* Menu Inferior */}
            <div className={Style.conteiner_menu_inf}>
                <nav className={Style.nav_menu_inf}>
                    <Link href="/produtos" className={Style.link}>
                        Todos
                    </Link>
                    <Link href="/category/lancamentos" className={Style.link}>
                        Lançamentos
                    </Link>
                    <Link href="/category/pendentes" className={Style.link}>
                        Pendentes
                    </Link>
                    <Link href="/category/arandelas" className={Style.link}>
                        Arandelas
                    </Link>
                    <Link href="/category/abajures" className={Style.link}>
                        Abajures
                    </Link>
                    <Link href="/category/colunas" className={Style.link}>
                        Colunas
                    </Link>
                    <Link href="/category/lanternas" className={Style.link}>
                        Lanternas
                    </Link>
                </nav>
            </div>
        </header>
    );
}
