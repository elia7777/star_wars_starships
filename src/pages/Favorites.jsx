import CardDetail from "../components/CardDetail/CardDetail";

function Favorites({ favorites, onAddToFavorite }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.length ? (favorites.map((item) => (
          <CardDetail
            key={item.name}
            item={item}
            onAddToFavorite={onAddToFavorite}
          />
        ))) : ( 
        <span>Еще нет закладок...</span> ) }
        
      </div>
    </div>
  );
}

export default Favorites;
