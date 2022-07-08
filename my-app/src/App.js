import React from'./index.js';


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="cards">
          <div className="card">
            <img src={'/img/Pizza.png'}></img>
            <h1 className="">Pepperoni Pizza</h1>
            <p className="">Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce.</p>
            <div className="info">
              <h1 className="info-span-one">265 Cal</h1>
              <h1 className="info-span-two">P/F/C: 12/10/31</h1>
              <h1 className="info-span-tree">53.8 °C</h1>
            </div>
            <div className="price">
              <h1>$23.90</h1>
              <h2>$29.90</h2>
              <a href="#">ORDER</a>
            </div>
          </div>
          <div className="card">
          <img src={'/img/Tortellini.png'}></img>
            <h1 className="">Tortellini</h1>
            <p className="">Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce.</p>
            <div className="info">
              <h1 className="info-span-one">265 Cal</h1>
              <h1 className="info-span-two">P/F/C: 12/10/31</h1>
              <h1 className="info-span-tree">53.8 °C</h1>
            </div>
            <div className="price">
              <h1>$23.90</h1>
              <h2>$29.90</h2>
              <a href="#">ORDER</a>
            </div>
          </div>
          <div className="card">
            <img src='/img/Strawberry.png'></img>
            <h1 className="">Strawberry Cake</h1>
            <p className="">Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.</p>
            <div className="info">
              <h1 className="info-span-one">265 Cal</h1>
              <h1 className="info-span-two">P/F/C: 12/10/31</h1>
              <h1 className="info-span-tree">53.8 °C</h1>
            </div>
            <div className="price">
              <h1>$23.90</h1>
              <h2>$29.90</h2>
              <a className="btn-price" href="#">ORDER</a>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default App
