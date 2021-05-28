import options from "./options.js";

const ChooseColour = ({ setActive, setColour }) => {
  return (
    <div className="flex flex-wrap align-middle justify-evenly pt-3">
      {options.map((colour, idx) => {
        return (
          <div
            className="cursor-pointer w-50 h-60 m-1"
            onClick={() => {
              setColour(colour.name);
              setActive(2);
            }}
            key={idx}
          >
            <div
              style={{
                backgroundColor: "#808080",
                color: "white",
                fontSize: "14px",
                padding: "12px",
                borderTopLeftRadius: "10px 10px",
                borderTopRightRadius: "10px 10px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              <p>{colour.name}</p>
            </div>
            <div
              className="flex justify-center flex-wrap p-4 bg-white"
              style={{
                borderBottomLeftRadius: "10px 10px",
                borderBottomRightRadius: "10px 10px",
              }}
            >
              <img src={colour.src} alt={colour.name} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChooseColour;
