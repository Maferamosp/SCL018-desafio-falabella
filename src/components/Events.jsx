import Union from '../img/Union.png'
import { Context } from "../context/Context";
import { useContext } from "react";

const Events = ({ eventsData, interestsData, suggestionData }) => {
    const globalContext = useContext(Context);

    const handleClick = (button) => {
        globalContext.setEvents(button);
    };
    const handleClickB = (button) => {
        if (globalContext.interests.includes(button)) {
            const newInterests = globalContext.interests.filter(interest => interest !== button )
            globalContext.setInterests(newInterests);
        } else {
            globalContext.setInterests([...globalContext.interests, button])
        }
    };

    const handleClickC = (button) => {
        globalContext.setSuggestion(button);
    };

    return (
        <main>
            <section className='flex flex-col shadow-am w-full h-563 mr-20 mt-4'>
                <h1 className="text-2xl mt-6 ml-8">Eventos e intereses</h1>
                <div className="bg-db h-439 mt-5 ml-7 mr-8">
                    <div className='flex flex-row items-center p-4 mb-2'>
                        <img src={Union} alt="calendar" />
                        <h2 className='ml-1.5'>Agregar Celebración</h2>
                    </div>
                    <label htmlFor="name" className='mt-6 ml-4'>Estamos celebrando:</label>
                    <div className='flex flex-row mt-2'>
                        {eventsData.map((element) => (
                            <button
                                className={`h-16 w-20 m-1 ml-4 text-xs text-bd 
                        border border-ft rounded-xs 
                        focus:shadow-outline flex flex-col justify-center items-center  ${globalContext.events === element.name ? "highlight" : ""}`}
                                key={element.id} onClick={() => handleClick(element.name)}>
                                <img src={element.img} alt={element.name} className="" />
                                {element.name}
                            </button>
                        ))}
                    </div>
                    <p className='mt-5 ml-4 pb-2'>Sus intereses son:</p>
                    <div>
                        {interestsData.map((item) => (
                            <button className={`h-8 w-auto p-2 m-1 ml-4 text-xs text-bd 
                            border border-ft rounded-xs 
                            focus:shadow-outline ${globalContext.interests.includes(item.name) ? "highlight" : ""}`}
                                key={item.id} onClick={() => handleClickB(item.name)}>
                                {item.name}
                            </button>
                        ))}
                    </div>
                    <p className='mt-5 ml-4 pb-2'>Quiero recibir sugerencias de regalo:</p>
                    <div>
                        {suggestionData.map((e) => (
                            <button className={`h-8 w-28 m-1 ml-4 text-xs text-bd 
                            border border-ft rounded-xs 
                            focus:shadow-outline ${globalContext.suggestion === e.name ? "highlight" : ""}`}
                                key={e.id} onClick={() => handleClickC(e.name)}>
                                {e.name}
                            </button>
                        ))}
                    </div>
                    <section className='flex justify-end'>
                    {/* <button className=" underline text-gc" onClick={() => deleteForm()}>Cancelar</button>
                    <button className="rounded rounded-sr h-10 w-48 text-sl ml-8 bg-ev">Agregar evento</button> */}
                    </section>
                </div>
            </section>
        </main>
    );
}

export default Events;