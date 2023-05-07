import '../App.css';

const Player = () => {
  return (
    <div>
  <div className="player box">
    <div className="headwear miniBoxes">
      <span>Headwear</span>
    </div>
    <div className="layer">
      <div className="earwear miniBoxes">
        <span>Earwear</span>
      </div>
      <div className="mask miniBoxes">
        <span>Mask</span>
      </div>
      <div className="eyewear miniBoxes">
        <span>Eyewear</span>
      </div>
    </div>
    <div className="layer">
      <div className="leftWrist miniBoxes">
        <span>Left Wrist</span>
      </div>
      <div className="neckwear miniBoxes">
        <span>Neckwear</span>
      </div>
      <div className="rightWrist miniBoxes">
        <span>Right Wrist</span>
      </div>
    </div>
    <div className="layer">
      <div className="gloves miniBoxes">
        <span>Gloves</span>
      </div>
      <div className="shoes miniBoxes">
        <span>Shoes</span>
      </div>
    </div>
    <div className="layer">
      <div className="front miniBoxes">
        <span>Front</span>
      </div>
      <div className="hands miniBoxes">
        <span>Hands</span>
      </div>
      <div className="back miniBoxes">
        <span>Back</span>
      </div>
    </div>
  </div>
</div>

  )
}

export default Player