import CardModal from "./CardModal";
const styles = require("./styles");

const ChooseStyle = ({ colour, setStyle, setActive }) => {
  // this function takes in the colour that was picked on the previous tab and goes through the styles array and finds the colour. It then returns that colour and all the images relevant to that colour
  const findColour = (colour, styles) => {
    for (let i = 0; i < styles.length; i++) {
      if (colour === styles[i].name) {
        return styles[i];
      }
    }
  };

  // Find the right colour and assigns it to a variable which can be mapped through
  const relevantStyles = findColour(colour, styles);

  // If no colour picked on previous screen, the page will show nothing
  if (colour.length === 0) {
    return <div></div>;
  }

  return (
    <div className="flex flex-wrap align-middle justify-evenly pt-3">
      {relevantStyles.images.map((style, idx) => {
        return <CardModal image={style} key={idx} setStyle={setStyle} />;
      })}
    </div>
  );
};

export default ChooseStyle;
