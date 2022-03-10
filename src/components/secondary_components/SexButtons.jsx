import { useContext } from "react";
import { Context } from "../../context/Context";

const SexButtons = ({ sexInformation }) => {

    const globalContext = useContext(Context);

    const handleClick = (button) => {
        globalContext.setSelectSex(button);
    };

    return (
        <div className="flex flex-row flex-wrap">
            {sexInformation.map((item) => (
                <button
                    className={`h-8 w-auto p-2 m-2 text-xs text-bd border border-ft rounded-xs 
                                focus:shadow-outline ${globalContext.selectSex === item.name ? "highlight" : ""}`}
                    key={item.id}
                    onClick={() => handleClick(item.name)}
                >
                    {item.name}{" "}
                </button>
            ))}
        </div>
    );
}

export default SexButtons;