import "../App.css";
import Icon from '@mdi/react';
import { mdiMenuLeft } from '@mdi/js';

const Inventory = () => {
  return (
    <div className="inventory box">
      <div className="mainShirt">
        <div className="shirt miniBoxes">
          <span>Shirt<Icon path={mdiMenuLeft} size={1} /></span>
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

export default Inventory;
