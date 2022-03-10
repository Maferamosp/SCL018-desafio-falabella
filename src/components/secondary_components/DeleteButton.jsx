import { doc, deleteDoc } from "firebase/firestore";
import db from "../../FirebaseConfig";
import Swal from "sweetalert2";

const DeleteButton = ({ id }) => {

    //Alerta para confirmar
    const alert = () => {
        Swal.fire({
            title: "¿Seguro deseas eliminar el perfil seleccionado?",
            icon: "warning",
            iconColor: "#F7B500",
            showCancelButton: true,
            confirmButtonColor: "#FF6200",
            cancelButtonText: "No",
            cancelButtonColor: "#495867",
            reverseButtons: true,
            color: "#4A4A4A",
            confirmButtonText: "Sí, eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: "success",
                    title: "Perfil eliminado correctamente",
                    showConfirmButton: false,
                    timer: 1500,
                });
                deleteProfile(id);
            }
        });
    };

    const deleteProfile = async (id) => {
        try {
            await deleteDoc(doc(db, "Users", id));
        } catch (error) {
            throw new Error("Error al borrar el pedido");
        }
    };

    return (
        <section className="w-72 flex justify-between">
            <button className="tex text-sm underline text-gc" onClick={() => alert()}>
                Eliminar
            </button>
            <button className="w-48 h-10 rounded-s bg-ev text-white">
                Editar perfil
            </button>
        </section>
    );
};

export default DeleteButton;
