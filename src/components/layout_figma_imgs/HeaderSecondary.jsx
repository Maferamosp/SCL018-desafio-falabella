import geofinder from '../../img/geofinder.png'
import links from '../../img/links.png'

const HeaderSecondary = () => {
    return (
        <nav className="flex items-center justify-around nav shadow-bt sm:w-screen h-12">
            <div>
                <img src={geofinder} width="203" height="40" alt="geofinder" />
            </div>
            <div>
                <img src={links} width="393" height="17" alt="links aux" />
            </div>
        </nav>
    );
}

export default HeaderSecondary;