import logo_f from '../../img/logo_f.png'
import searcher from '../../img/searcher.png'
import menu from '../../img/menu.png'
import cart from '../../img/cart.png'
import header_mobile from '../../img/header_mobile.png'


const HeaderPrimary = () => {
    return (
            <header className="flex flex-row justify-between items-center header sm:w-screen h-70 bg-header">
                    <div className=''>
                        <img src={logo_f} width="243" height="70" alt="logo f.com" />
                    </div>
                    <div className=''>
                        <img src={menu} width="110" height="48" alt="menu header" />
                    </div>
                    <div className=''>
                        <img src={searcher} width="608" height="46" alt="searcher input" />
                    </div>
                    <div className=''>
                        <img src={cart} width="338" height="52" alt="menu header" />
                    </div>
            </header>
    );
}

export default HeaderPrimary;