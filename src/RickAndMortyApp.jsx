import React, { useEffect, useState } from "react";
import CardCharacter from "./components/CardCharacter";
import InputSearch from "./components/InputSearch";
import LocationInfo from "./components/LocationInfo";
import useLocationApi from "./hooks/useLocationApi";

const RickAndMortyApp = () => {
  const [searchLocation, setSearchLocation] = useState();

  console.log(searchLocation);

  const location = useLocationApi(searchLocation);

  return (
    <>
      <div className="App">
        <div className="head">
          <div className="header">
            <img
              src="https://images-ext-2.discordapp.net/external/ZHXv4HFTs4oc0GdPGAUYaa7XxmVrCXwCgoB2e-iohaM/https/i.redd.it/o6cwlzg3exk41.png?width=960&height=250"
              alt=""
            />
          </div>
        </div>
        <div className="input">
          <InputSearch setSearchLocation={setSearchLocation} />
        </div>
        <div>
          <LocationInfo location={location} />
          <div>
            {location?.residents.map((resident) => (
              <CardCharacter resident={resident} key={resident} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RickAndMortyApp;
