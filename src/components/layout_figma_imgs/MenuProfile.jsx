import profile_icon from '../../img/profile_icon.png'
import profile_info from '../../img/profile_info.png'

const MenuProfile = () => {
    return ( 
        <section className="welcome shadow-mp h-24 ml-20 mr-20 mt-23">
            <div className='flex flex-row ml-12'>
            <div className='m-1 mt-5'>
                <img src={profile_icon} width="59" height="59" alt="client icon" />
            </div>
            <div className='m-1 mt-6'>
                <img src={profile_info} width="231" height="57" alt="client info" />
            </div>
            </div>
        </section>
    );
}
 
export default MenuProfile;