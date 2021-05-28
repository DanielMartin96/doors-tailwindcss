import React from "react";

const ChooseSize = () => {
  return (
    <div className="p-4">
      <h1 className="text-5xl font-bold">Choose your door size:</h1>
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="flex flex-wrap flex-col p-4 w-full sm:w-3/6">
          <label for="height">Choose a height:</label>
          <select
            id="height"
            name="height"
            style={{
              backgroundColor: "#C2B59C",
              padding: "10px 20px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            <option value="volvo">100mm</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="flex flex-wrap flex-col p-4 w-full sm:w-3/6">
          <label for="height">Choose a width:</label>
          <select
            id="width"
            name="width"
            style={{
              backgroundColor: "#C2B59C",
              padding: "10px 20px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            <option value="volvo">300mm</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <div className="px-4">
        <label for="customSize" className="mr-2">
          Do you need custom sizes?
        </label>
        <input type="checkbox" id="customSize" name="customSize" value="Yes" />
      </div>
      <div className="flex flex-wrap flex-col sm:flex-row  justify-between">
        <div className="flex flex-wrap flex-row p-4 w-full sm:w-3/6">
          <input
            type="number"
            style={{
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              width: "80%",
              padding: "10px",
            }}
            placeholder="Height"
          />
          <div
            style={{
              backgroundColor: "#58595B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
              padding: "10px",
              width: "20%",
            }}
          >
            <p>mm</p>
          </div>
        </div>

        <div className="flex flex-wrap flex-row p-4 w-full sm:w-3/6">
          <input
            type="number"
            style={{
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              width: "80%",
              padding: "10px",
            }}
            placeholder="Width"
          />
          <div
            style={{
              backgroundColor: "#58595B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
              padding: "0 10px",
              width: "20%",
            }}
          >
            <p>mm</p>
          </div>
        </div>
      </div>
      <div className="px-4">
        <label for="customSize" className="mr-2">
          Do you need hinge drilling?
        </label>
        <input type="checkbox" id="customSize" name="customSize" value="Yes" />
      </div>
      <div className="flex flex-wrap flex-col p-4 w-full sm:w-3/6">
        <label for="height">Orientation:</label>
        <select
          id="height"
          name="height"
          style={{
            backgroundColor: "#C2B59C",
            padding: "10px 20px",
            borderRadius: "5px",
            color: "white",
          }}
        >
          <option value="volvo">Left Side Door</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="flex flex-wrap flex-col sm:flex-row  justify-between">
        <div className="flex flex-wrap flex-row p-4 w-full sm:w-3/6">
          <input
            type="number"
            style={{
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              width: "80%",
              padding: "10px",
            }}
            placeholder="Top Hole"
          />
          <div
            style={{
              backgroundColor: "#58595B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
              padding: "10px",
              width: "20%",
            }}
          >
            <p>mm</p>
          </div>
        </div>

        <div className="flex flex-wrap flex-row p-4 w-full sm:w-3/6">
          <input
            type="number"
            style={{
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              width: "80%",
              padding: "10px",
            }}
            placeholder="Bottom Hole"
          />
          <div
            style={{
              backgroundColor: "#58595B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
              padding: "0 10px",
              width: "20%",
            }}
          >
            <p>mm</p>
          </div>
        </div>
      </div>
      <div className="px-4">
        <label for="customSize" className="mr-2">
          Add Extra Hinge Holes
        </label>
        <input type="checkbox" id="customSize" name="customSize" value="Yes" />
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-wrap flex-row p-4 w-full sm:w-4/6">
          <input
            type="number"
            style={{
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              width: "80%",
              padding: "10px",
            }}
            placeholder="Extra Hole"
          />
          <div
            style={{
              backgroundColor: "#58595B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
              padding: "0 10px",
              width: "20%",
            }}
          >
            <p>mm</p>
          </div>
        </div>
        <div className="flex flex-wrap flex-col p-4 w-full sm:w-2/6">
          <select
            id="height"
            name="height"
            style={{
              backgroundColor: "#C2B59C",
              padding: "15px 20px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            <option value="volvo">From The Top</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="flex flex-wrap flex-col p-4 w-full">
          <input
            type="number"
            style={{
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              width: "100%",
              padding: "15px",
            }}
            placeholder="Quantity"
          />
        </div>
        <div className="px-4">
          <p className="text-3xl mb-2">
            Price: <span className="font-bold">£346.78</span>
          </p>
          <button
            style={{
              backgroundColor: "#C2B59C",
              padding: "10px 60px",
              borderRadius: "5px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Add To Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseSize;
