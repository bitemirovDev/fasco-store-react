export default function Sale() {
  return (
    <section className="sale">
      <div className="container">
        <div className="sale__grid">
          <div className="sale__grid-item"></div>
          <div className="sale__grid-item"></div>
          <div className="sale__grid-item">
            <div className="sale__text">
              <p className="sale__text-ultimate">ULTIMATE</p>
              <p className="sale__text-sale">SALE</p>
              <p className="sale__text-collection">New collection</p>
            </div>

            <div className="sale__btn">
              <button className="btn btn--medium">Shop now</button>
            </div>
          </div>
          <div className="sale__grid-item"></div>
          <div className="sale__grid-item"></div>
        </div>
      </div>
    </section>
  );
}
