import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";

function Main({ weatherData, handleCardClick, clothingItems }) {
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="card__text">
          Today is {weatherData.temp.F} &deg; F / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
