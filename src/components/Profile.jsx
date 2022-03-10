// import { Link } from "react-router-dom";
import ProfileList from "./ProfileList";

const Profile = () => {
    return ( 
        <section className="profile flex flex-col justify-center items-center shadow-am h-563 w-auto mt-6 ml-5 mr-20">
            <ProfileList />
            {/* <Link to="/basicInformation">
                <button className="h-10 w-295 m-4 text-sl bg-og rounded-3xl">Crear Nuevo Perfil</button>
            </Link> */}
        </section>
    );
}

export default Profile;
