import { useEffect, useState } from "react";
import db from "../FirebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import DeleteButton from "./secondary_components/DeleteButton";
import { Link } from "react-router-dom";

const ProfileList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        onSnapshot(
            query(collection(db, "Users"), orderBy("date", "asc")),
            (snapshot) => {
                const profiles = snapshot.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id };
                });
                setUsers(profiles);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    return users.length > 0 ? (
        <article className="flex flex-col h-screen pt-6">
            <h1 className="text text-2xl ml-8 mb-7 text-bd">Mis personas favoritas</h1>
            <h2 className="text text-xl ml-8 mb-3 text-bd">
                Revisa los eventos que tienen:
            </h2>
{/* //             <div className="flex flex-row w-873 items-center mb-2 ml-5">
//                 <input
//                     type="checkbox"
//                     name="controlled"
//                     className="ml ml-3 mr-3 w-5 h-5 rounded-xs"
//                 ></input>
//                 <label className="text text-sm text-rg">Seleccionar todo</label>
//             </div> */}
            {users.map((item) => (
                <section className="flex flex-row border border-bc rounded-xs h-20 m-2 mx-8 items-center mb-2" key={item.id}>
{/* //                     <input
//                         type="checkbox"
//                         name="controlled"
//                         className="ml ml-3 mr-3 w-5 h-5 rounded-xs"
//                     ></input> */}
                    <div
                        className="flex flex-row justify-between w-810 mx-5"
                    >
                        <div className="">
                            <p className="tex text-sm font-bold text-bd">{item.name}</p>
                            <p className="tex text-sm text-gd">{item.events}</p>
                        </div>
                        <DeleteButton
                            id={item.id} />
                    </div>
                </section>
            ))}
            <div className="flex justify-end w-auto mx-4">
                <Link to="/basicInformation">
                    <button className="h-10 w-243 m-4 text-sl bg-og rounded-3xl">Crear Nuevo Perfil</button>
                </Link>
            </div>
        </article>
    ) : (
        <section className="profile flex flex-col justify-center h-563 w-auto mt-6 ml-5 mr-20">
            <h1 className="text-fp">
                Comienza a crear el perfil de tu persona favorita
            </h1>
            <Link to="/basicInformation">
                <button className="h-10 w-243 m-4 text-sl bg-og rounded-3xl">Crear Nuevo Perfil</button>
            </Link>
        </section>
    );
};

export default ProfileList;
