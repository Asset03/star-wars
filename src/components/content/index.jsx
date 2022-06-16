import { useState } from "react";

import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";

import { ItemSpisok } from "../sw-item-spisok";

import { ItemLists } from "../sw-items-lists";

export const Content = ({mode}) => {
  const [selector, setSelector] = useState("Characters");

  const handleSelectorChange = (event) => {
    setSelector(event.target.value);
  };

  return (
    <div className={`content-layout ${mode}`}>
      <select
        value={selector}
        placeholder="Choose your path"
        className="select-item"
        onChange={handleSelectorChange}
      >
        <option>Characters</option>
        <option>Planets</option>
        <option>Starships</option>
      </select>

      {selector === "Characters" &&
        swCharacters.map((character) => (
          <ItemLists key={character.name} item={character} type="chars" mode = {mode}>
            <ItemSpisok>gender: {character.gender}</ItemSpisok>
            <ItemSpisok>birthday: {character.birth_year}</ItemSpisok>
            <ItemSpisok>Height: {character.height}</ItemSpisok>
            <ItemSpisok>Mass: {character.mass}</ItemSpisok>
            <ItemSpisok>Skin-color: {character.skin_color}</ItemSpisok>
            <ItemSpisok>Eye-color: {character.eye_color}</ItemSpisok>
            <ItemSpisok>Hair-color: {character.hair_color}</ItemSpisok>
          </ItemLists>
        ))}

      {selector === "Planets" &&
        swPlanets.map((planet) => (
          <ItemLists key={planet.name} item={planet} type="planets">
            <ItemSpisok>Rotation Period: {planet.rotation_period}</ItemSpisok>
            <ItemSpisok>Orbital Period: {planet.orbital_period}</ItemSpisok>
            <ItemSpisok>Diameter: {planet.diameter}</ItemSpisok>
            <ItemSpisok>Climate: {planet.climate}</ItemSpisok>
          </ItemLists>
        ))}

      {selector ==="Starships" && 
        swStarships.map((star) =>(
          <ItemLists key={star.name} item={star} type="stars" >
            <ItemSpisok>Model: {star.model}</ItemSpisok>
            <ItemSpisok>Manufacturer: {star.manufacturer}</ItemSpisok>
            <ItemSpisok>Length: {star.length}</ItemSpisok>
            <ItemSpisok>Passengers: {star.passengers}</ItemSpisok>
          </ItemLists>
        ))
      }
        
    </div>
  );
};