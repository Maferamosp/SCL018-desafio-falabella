import React, {useState} from 'react';
import {collection, addDoc } from "firebase/firestore";
import db from "../FirebaseConfig"

//Creamos contexto global
const Context = React.createContext();

//Componente proveedor de las propiedades 
const Provider = ({children}) => {

    //Estado global para capturar el nombre de la persona favorita
    const [favoritePerson, setFavoritePerson] = useState("");

    //Estado global para capturar el valor del boton del parentesco
    const [selectFamily, setSelectFamily] = useState("");

    //Estado global para capturar el valor del boton del sexo
    const [selectSex, setSelectSex] = useState("")

    //Estado global para guardar la fecha de nacimiento
    const [selectDate, setSelectDate] = useState("");

    //Estado global para cambiar el estado del form de evento
    const [state, setState] = useState(false)

    //estado global que captura el valor del evento
    const [events, setEvents] = useState("");

    //estado global que captura el valor de los intereses
    const [interests, setInterests] = useState([])

    //estado global que captura el valor de sugerencias
    const [suggestion, setSuggestion] = useState("");

    //Funcion para cambiar el estado y mostrar el form de evento
    const clickAddEvent = () =>{
        if(!state)
        {
        setState(true)
        return;
        }setState(false)        
    }


    //Función para guardar el nuevo perfil en la base de datos
    const newProfile = async () =>{
        try{ 
            await addDoc(collection(db, "Users"),
            {
                name: favoritePerson,
                family: selectFamily,
                sex: selectSex,
                date: selectDate,
                events: events,
                interests: interests,
                suggestion: suggestion

            });
        } catch(error){
            throw new Error("Error al guardar el nuevo perfil");
        }
    }


    const props = {
        favoritePerson,
        setFavoritePerson,
        newProfile,
        selectFamily, 
        setSelectFamily,
        selectSex, 
        setSelectSex,
        selectDate, 
        setSelectDate,
        state, 
        setState,
        clickAddEvent,
        interests, 
        setInterests,
        events, 
        setEvents,
        suggestion, 
        setSuggestion

    };

    return <Context.Provider value={props}>{children}</Context.Provider>
}
 
export {Context, Provider};