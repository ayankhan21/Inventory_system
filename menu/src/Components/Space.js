import "../App.css";
const Space = () => {
  return (
    <div className="space box">
      <div className="mainShirt">
        <div className="shirt miniBoxes">
          <span>Shirt</span>
        </div>
        <div className="shirtStorage"></div>
      </div>
      <div className="mainPants">
        <div className="pants miniBoxes">
          <span>Pants</span>
        </div>
        <div className="pantsStorage"></div>
      </div>

      <div className="bag miniBoxes">
        <span>Bag</span>
      </div>
      <div className="vest miniBoxes">
        <span>Vest</span>
      </div>
      <div className="pockets miniBoxes">
        <span>Pockets</span>
        <div className="pocketsStorage"></div>
      </div>
    </div>
  );
};

export default Space;
