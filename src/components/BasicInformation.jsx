import { Link } from "react-router-dom";
import AddEvent from "./AddEvent";
import data from "../Arrays.json";
import FamilyButtons from "./secondary_components/FamilyButtons";
import { Context } from "../context/Context";
import { useContext } from "react";
import ButtonSendProfile from "./secondary_components/ButtonSendProfile";
import SexButtons from "./secondary_components/SexButtons";
import Date from "./secondary_components/Date";
import Events from "./Events";
import fav_people from "../img/icons/fav_people.png";


const BasicInformation = () => {
	const globalContext = useContext(Context);
	const familyData = data.family;
	const sexData = data.sex;
	const eventsData = data.events;
	const interestsData = data.interests;
	const suggestionData = data.suggestion;

	//Función para capturar el nombre
	const onChange = (e) => {
		const regex = /^[a-zA-Z\s]*$/;
		if (e.target.name === "name" && regex.test(e.target.value)) {
			globalContext.setFavoritePerson(e.target.value);
		}
	};

	return (
		<main className="profile flex flex-col w-auto mt-6 ml-5 mr-20">
			<section className="shadow-am w-full mr-20">
				<h1 className="text-2xl mt-6 ml-8 pb-2">Mi persona favorita</h1>
				<Link to="/" className="text-fp underline ml-8">Volver a personas favoritas</Link>
				<div className="bg-db h-320 mt-5 ml-7 mb-5 mr-8">
					<div className="flex flex-row items-center p-4">
						<img src={fav_people} width="32" height="32" alt="favourite people icon" />
						<h2>Datos básicos</h2>
					</div>
					<label htmlFor="name" className="whitespace-pre ml-6">Nombre de tu persona favorita:  </label>
					<input
						type="text"
						className="text-sm ml-2 border-b border-b-gr bor w-52"
						placeholder="Escriba su nombre"
						name="name"
						value={globalContext.favoritePerson}
						onChange={onChange}>
					</input>
					<div className="m-4 ml-6">
						<p className="pb-2">Esta persona es mi:</p>
						<FamilyButtons familyData={familyData} />
					</div>
					<p className="ml-6">Sexo</p>
					<div className="flex flex-row items-center mt-1 ml-6">
						<SexButtons sexInformation={sexData} />
						<label className="whitespace-pre ml-10">Fecha de nacimiento:   </label>
						<Date />
					</div>
				</div>
			</section>
			<section>
				{globalContext.state ? <Events
					eventsData={eventsData}
					interestsData={interestsData}
					suggestionData={suggestionData} /> : <AddEvent />}
			</section>
			<ButtonSendProfile />
		</main>
	);
};

export default BasicInformation;
