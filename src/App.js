import React, { useState } from "react";
import "./App.css";

import TabsComponent from "./components/Tabs/TabsComponent";
import ChooseColour from "./components/ChooseColour/ChooseColour";
import ChooseStyle from "./components/ChooseStyle/ChooseStyle";
import ChooseSize from "./components/ChooseSize/ChooseSize";
import Basket from "./components/Basket/Basket";

function App() {
  const [active, setActive] = useState(1);
  const [colour, setColour] = useState("");
  const [style, setStyle] = useState("");

  const tabItems = [
    {
      id: 1,
      title: "Colour",
      content: <ChooseColour setActive={setActive} setColour={setColour} />,
    },
    {
      id: 2,
      title: "Style",
      content: (
        <ChooseStyle
          setActive={setActive}
          setStyle={setStyle}
          colour={colour}
        />
      ),
    },
    {
      id: 3,
      title: "Size",
      content: <ChooseSize />,
    },
    {
      id: 4,
      title: "Panels",
      content: "step 3 content",
    },
    {
      id: 5,
      title: "Frames and Features",
      content: "step 4 content",
    },
    {
      id: 6,
      title: "Accessories",
      content: "step 4 content",
    },
    {
      id: 7,
      title: "Hinges, Drawers and Internals",
      content: "step 4 content",
    },
    {
      id: 8,
      title: "Checkout",
      content: "step 4 content",
    },
  ];

  return (
    <div className="container mx-auto mt-2 flex flex-wrap justify-between max-w-screen-lg">
      <div className="w-full lg:w-10/12">
        <TabsComponent
          tabItems={tabItems}
          active={active}
          setActive={setActive}
        />
      </div>
      <div className="w-0 lg:w-2/12">
        <Basket />
      </div>
    </div>
  );
}

export default App;
