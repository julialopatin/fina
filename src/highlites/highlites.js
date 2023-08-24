import "/highlites.css"

const highlites = () => {
  return (
    <><><><div className="header"></div>
          <div className="headerContainer"></div>
          <div className="headerList"></div>
          <div className="headerListItems"></div></>
          <span>Little Lemon</span>
          <span>image</span></>
          <div>
              <h1 className="headerTitel">Specials</h1>
              <button className="headerBtn">Online Meny</button>
              <img src={require('greek salad.jpg')} alt='greeksalad'></img>
              <p1 className="headerDesc1">Greek Salad</p1>
              <img src={require('bruchetta.png')} alt='bruchetta'></img>
              <p2 className="headerDesc2">Bruchetta</p2>
              <img src={require('lemon dessert.jpg')} alt='lemondessert'></img>
              <p3 className="headerDesc3">Lemon Dessert</p3>
          </div></>
  );
};

export default highlites