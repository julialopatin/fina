import "/header.css"

const header = () => {
  return (
    <><><><><div className="header"></div>
          <div className="headerContainer"></div>
          <div className="headerList"></div>
          <div className="headerListItems"></div></>
          <span>Little Lemon</span>
          <span>image</span></>
          <div>
              <h1 className="headerTitel">Little Lemon</h1>
              <p className="headerDesc">Chicago</p>
              <p1 className="headerDesc1">We are a Mediteranian restaurant, focused on traditional recipes served with a modern twist</p1>
              <button className="headerBtn">Reserv a table</button>
          </div></><div>
            <img className="img" src={require('restaurantfood.jpg')} alt='restaurantfood'></img>
          </div></>
  );
};

export default header

