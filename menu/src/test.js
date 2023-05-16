const ItemBaseData = {
  CLOTHING_SUITSHIRT: {
    label: 'Suit Shirt',
    size: [5, 4],
    description: 'This is a formal suit shirt.',
    type: 1,
  },
  paperbag: {
    label: 'Paper Bag',
    size: [4, 4],
    description: 'Just your classic paper bag.',
    type: 2,
  },
  banana: {
    label: 'Banana',
    size: [2, 1],
    description: 'Banana.',
    type: 0,
  },
  CLOTHING_JEANPANTS: {
    label: 'Jean Pants',
    size: [4, 4],
    description: 'The classic American style jean pants.',
    type: 1,
  },
  WEAPON_PISTOL: {
    label: 'Pistol',
    size: [3, 2],
    description: 'When you need something small but powerful.',
    type: 3,
  },
  CLOTHING_DUFFELBAG: {
    label: 'Duffel Bag',
    size: [10, 5],
    description: 'A large duffel bag to hold everything you need.',
    type: 1,
  },
  WEAPON_BROKENBOTTLE: {
    label: 'Broken Bottle',
    size: [1, 2],
    description: 'A bottle that has been broken so it can be used as a weapon.',
    type: 3,
  },
  beerbottle: {
    label: 'Beer Bottle',
    size: [1, 2],
    description: 'A bottle full of an alchoholic beverage.',
    type: 0,
  },
  waterbottle: {
    label: 'Bottled Water',
    size: [1, 3],
    description: 'Plain old water, in a bottle.',
    type: 0,
  },
  CLOTHING_POLICEVEST: {
    label: 'Police Vest',
    size: [4, 4],
    description: 'A standard issue bulletproof police vest.',
    type: 1,
  },
  AMMO_RIFLE: {
    label: 'Rifle Ammo',
    size: [1, 2],
    description: 'A magazine for your assault rifle.',
    type: 0,
  },
  fish: {
    label: 'Fish',
    size: [3, 1],
    description: 'What do you think this is?',
    type: 0,
  },
  WEAPON_FLASHLIGHT: {
    label: 'A Flashlight',
    size: [1, 2],
    description: 'Can be used to light up dark places.',
    type: 3,
  },
  WEAPON_SNIPERRIFLE: {
    label: 'Sniper Rifle',
    size: [9, 3],
    description: 'For when you need something deadly at a distance.',
    type: 3,
  },
  WEAPON_CARBINERIFLE: {
    label: 'Carbine Rifle',
    size: [7, 3],
    description: 'Your classic full auto killing machine.',
    type: 3,
  },
  burger: {
    label: 'Burger',
    size: [2, 2],
    description: 'A burger that has been cooked to perfection.',
    type: 0,
  },
  CLOTHING_CLOWNMASK: {
    label: 'Clown Mask',
    size: [3, 5],
    description: 'A creepy mask for halloween parties.',
    type: 1,
  },
  CLOTHING_WHITEGLOVES: {
    label: 'White Gloves',
    size: [3, 1],
    description: 'White gloves, nothing else.',
    type: 1,
  },
  CLOTHING_AIRFORCESHOES: {
    label: 'Air Force Shoes',
    size: [2, 2],
    description: 'Shoes made in that classic air force style.',
    type: 1,
  },
  CLOTHING_TIE: {
    label: 'Tie',
    size: [1, 3],
    description: 'A formal tie for a professional look.',
    type: 1,
  },
  CLOTHING_BUCKETHAT: {
    label: 'Suit Shirt',
    size: [3, 3],
    description: 'A bucket shaped hat.',
    type: 1,
  },
  CLOTHING_SUNGLASSES: {
    label: 'Sunglasses',
    size: [3, 1],
    description: 'Blocks out the sun.',
    type: 1,
  },
  CLOTHING_HEADPHONES: {
    label: 'Headphones',
    size: [2, 3],
    description: 'Music listening device.',
    type: 1,
  },
  CLOTHING_GOLDWATCH: {
    label: 'Gold Watch',
    size: [1, 1],
    description: 'A watch in the gold variety.',
    type: 1,
  },
  CLOTHING_BANGLE: {
    label: 'Silver Bangle',
    size: [2, 2],
    description: 'A silver coloured bangle.',
    type: 1,
  },
};


let front = {
  id: 6789564644,
  name: "WEAPON_SNIPERRIFLE",
  attachments: {},
  metadata: {},
};
let back = {
  id: 1234567890,
  name: 'WEAPON_CARBINERIFLE',
  attachments: {},
  metadata: {},
}

let bag = {
  id: 7854545765,
  name: "CLOTHING_DUFFELBAG",
  clothingData: {
    type: 0,
    component: 2,
    drawable: 23,
    texture: 0,
  },
  inventory: [
    {
      slot: 2,
      item: {
        id: 765885656,
        name: "WEAPON_BROKENBOTTLE",
        attachments: {},
        metadata: { durability: 10 },
        rotated: true,
      },
    },
    {
      slot: 8,
      item: {
        id: 758954321,
        name: "beerbottle",
        description: "A bottle that tastes like beer",
        metadata: {},
        rotated: true,
      },
    },
    {
      slot: 11,
      item: {
        id: 31231554,
        name: "waterbottle",
        label: "Deep Blue Water Bottle",
        metadata: {},
        rotated: false,
      },
    },
    {
      slot: 12,
      item: {
        id: 323136678,
        name: "CLOTHING_SUITSHIRT",
        clothingData: {
          type: 0,
          component: 1,
          drawable: 128,
          texture: 0,
        },
        inventory: [],
        metadata: {},
      },
    },
  ],
  metadata: {},
};

function unequip(source, item) {
  console.log(Object.keys(ItemBaseData).length)
  if (source.hasOwnProperty("inventory")) {
    const inventory = source.inventory;
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].item.name === item.name) {
        inventory.splice(i, 1);
        console.log(
          `${item.name} has been removed from ${source.name}'s inventory`
        );
        return;
      }
    }
    console.log(`${item.name} is not in ${source.name}'s inventory`);
  } else {
    console.log(`${source.name} is being emptied`);
    Object.keys(source).forEach((key) => delete source[key]);
  }
  // pushing the item the ground for now
  ItemBaseData[item.name] = {
    ...item
  }
  console.log(Object.keys(ItemBaseData).length)
}

let obj = {
  id: 765885656,
  name: "WEAPON_BROKENBOTTLE",
  attachments: {},
  metadata: { durability: 10 },
  rotated: true,
};

// unequip(bag, obj);

function canEquip(destination, item) {
  if (destination.hasOwnProperty("clothingData")) {
    if (destination.inventory[0].hasOwnProperty("size")) {
      const limit = 20;
      let itemSize = item.size[0] * item.size[1];
      let current_capacity = null;
      const inventory = destination.inventory;
      inventory.map((e) => {
        current_capacity += e.item.size;
      });
      if (current_capacity < limit && current_capacity + itemSize) {
        return true;
      } else {
        return false;
      }
    } else {
      console.log("no size prop");
      return true;
    }
  } else {
    // pockets
    const limit = 10;
    let itemSize = item.size[0] * item.size[1];
    let current_capacity = null;
    const inventory = destination.inventory;
    inventory.map((e) => {
      current_capacity += e.item.size;
    });
    if (current_capacity < limit && current_capacity + itemSize) {
      return true;
    } else {
      return false;
    }
  }
}

// console.log(canEquip(bag, obj));

function equip(src, item, dest) {
  console.log(src);
  console.log(item);
  console.log(dest);
  console.log("BEFORE EQUIPING");
  if (dest.hasOwnProperty("inventory")) {
    if (canEquip(dest, item)) {
      dest.inventory = [...dest.inventory, { ...item }];
      console.log("inside");
      unequip(src, item);
    } else {
      alert("NO SPACE");
    }
  } else {
    let isEmpty = true;
    for (const prop in dest) {
      isEmpty = false;
      break;
    }
    if (isEmpty) {
      //   unequip(src, item);
      for (const prop in item) {
        dest[prop] = item[prop];
      }
    } else {
      // unequip(src, item);
      unequip(dest, item);
      for (const prop in item) {
        dest[prop] = item[prop];
      }
    }
  }
  unequip(src, item);
  console.log(src);
  console.log(item);
  console.log(dest);
  console.log("AFTER EQUIPING");
}

let hands =  {
  id: 894748444,
  name: 'burger',
  metadata: { toppings: ['bun', 'patty', 'lettuce', 'bun'] },
}

equip(front, back, hands);

