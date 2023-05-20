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

const dummyPlayerInventory = {
  shirt: {
    id: 754788993,
    name: 'CLOTHING_SUITSHIRT',
    clothingData: {
      type: 0,
      component: 1,
      drawable: 128,
      texture: 0,
    },
    inventory: [
      {
        slot: 0,
        item: {
          id: 32356433567,
          name: 'paperbag',
          inventory: [
            {
              slot: 0,
              item: {
                id: 65877939030,
                name: 'banana',
                metadata: {},
                rotated: false,
              },
            },
          ],
          metadata: {},
          rotated: false,
        },
      },

      
    ],
    metadata: { wet: false },
  },
  pants: {
    id: 231212678,
    name: 'CLOTHING_JEANPANTS',
    clothingData: {
      type: 0,
      component: 1,
      drawable: 2,
      texture: 7,
    },
    inventory: [
      {
        slot: 0,
        item: {
          id: 65877939030,
          name: 'WEAPON_PISTOL',
          attachments: {},
          metadata: {},
          rotated: false,
        },
      },
    ],
    metadata: {},
  },
  bag: {
    id: 7854545765,
    name: 'CLOTHING_DUFFELBAG',
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
          name: 'WEAPON_BROKENBOTTLE',
          attachments: {},
          metadata: { durability: 10 },
          rotated: true,
        },
      },
      {
        slot: 8,
        item: {
          id: 758954321,
          name: 'beerbottle',
          description: 'A bottle that tastes like beer',
          metadata: {},
          rotated: true,
        },
      },
      {
        slot: 11,
        item: {
          id: 31231554,
          name: 'waterbottle',
          label: 'Deep Blue Water Bottle',
          metadata: {},
          rotated: false,
        },
      },
      {
        slot: 12,
        item: {
          id: 323136678,
          name: 'CLOTHING_SUITSHIRT',
          clothingData: {
            type: 0,
            component: 1,
            drawable: 128,
            texture: 0,
          },
          inventory: [],
          metadata: {},
        },
      }
    ],
    metadata: {},
  },
  vest: {
    id: 766565900,
    name: 'CLOTHING_POLICEVEST',
    clothingData: {
      type: 0,
      component: 3,
      drawable: 63,
      texture: 3,
    },
    inventory: [
      {
        slot: 0,
        item: {
          id: 31276454,
          name: 'AMMO_RIFLE',
          metadata: { bulletCount: 30 },
          rotated: false,
        },
      },
      {
        slot: 1,
        item: {
          id: 758954321,
          name: 'AMMO_RIFLE',
          metadata: { bulletCount: 10 },
          rotated: false,
        },
      },
    ],
    metadata: {},
  },
  pockets: [
    {
      slot: 0,
      item: {
        id: 7987654321,
        name: 'fish',
        metadata: { dead: false },
        rotated: false,
      },
    },
    {
      slot: 3,
      item: {
        id: 2367895489,
        name: 'WEAPON_FLASHLIGHT',
        attachments: {},
        metadata: { battery: true },
        rotated: true,
      },
    },
  ],
  front: {
    id: 6789564644,
    name: 'WEAPON_SNIPERRIFLE',
    attachments: {},
    metadata: {},
  },
  back: {
    id: 1234567890,
    name: 'WEAPON_CARBINERIFLE',
    attachments: {},
    metadata: {},
  },
  hands: {
    id: 894748444,
    name: 'burger',
    metadata: { toppings: ['bun', 'patty', 'lettuce', 'bun'] },
  },
  mask: {
    id: 75458999,
    name: 'CLOTHING_CLOWNMASK',
    clothingData: {
      type: 0,
      component: 4,
      drawable: 68,
      texture: 86,
    },
    metadata: {},
  },
  gloves: {
    id: 75688534,
    name: 'CLOTHING_WHITEGLOVES',
    clothingData: {
      type: 0,
      component: 5,
      drawable: 67,
      texture: 0,
    },
    metadata: {},
  },
  shoes: {
    id: 74439837436,
    name: 'CLOTHING_AIRFORCESHOES',
    clothingData: {
      type: 0,
      component: 6,
      drawable: 22,
      texture: 1,
    },
    metadata: {},
  },
  neckwear: {
    id: 32135545445,
    name: 'CLOTHING_TIE',
    clothingData: {
      type: 0,
      component: 7,
      drawable: 87,
      texture: 2,
    },
    metadata: {},
  },
  headwear: {
    id: 5656588565,
    name: 'CLOTHING_BUCKETHAT',
    clothingData: {
      type: 1,
      component: 2,
      drawable: 3,
      texture: 0,
    },
    metadata: {},
  },
  eyewear: {
    id: 23123213123,
    name: 'CLOTHING_SUNGLASSES',
    clothingData: {
      type: 1,
      component: 3,
      drawable: 1,
      texture: 2,
    },
    metadata: {},
  },
  earwear: {
    id: 767646575565,
    name: 'CLOTHING_HEADPHONES',
    clothingData: {
      type: 1,
      component: 4,
      drawable: 3,
      texture: 0,
    },
    metadata: {},
  },
  leftwrist: {
    id: 7545454343,
    name: 'CLOTHING_GOLDWATCH',
    clothingData: {
      type: 1,
      component: 5,
      drawable: 8,
      texture: 0,
    },
    metadata: {},
  },
  rightwrist: {
    id: 4346565777,
    name: 'CLOTHING_BANGLE',
    clothingData: {
      type: 1,
      component: 6,
      drawable: 54,
      texture: 9,
    },
    metadata: {},
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
  if (source.hasOwnProperty("inventory")) { // Check if the object has an inventory
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
  } else { // If the slot does not have an inventory
    console.log(`${source.name} is being emptied`);
    Object.keys(source).forEach((key) => delete source[key]);
  }
  // pushing the item to the ground for now
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
  if (destination.hasOwnProperty("clothingData")) { // If the destination is one of the clothing items with inventory
    if (destination.inventory[0].hasOwnProperty("size")) {
      const limit = 20; // based on [5,4] slots
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
    const limit = 10; // Based on [5,2] slots
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

function equip(mainObj,source, item, destination) {
  let src = mainObj[source]
  let dest = mainObj[destination]
  console.log(src);
  console.log(item);
  console.log(dest);
  console.log("BEFORE EQUIPING");
  if (dest.hasOwnProperty("inventory")) { // Check if slot has inventory
    if (canEquip(dest, item)) { // Check if it has spacce
      dest.inventory = [...dest.inventory, { ...item }];
      console.log("inside");
      unequip(src, item);
    } else {
      alert("NO SPACE");
    }
  } else { // Equiping an item with no inventory
    let isEmpty = true;
    for (const prop in dest) { // Check if the object is empty
      isEmpty = false;
      break;
    }
    if (isEmpty) {
      for (const prop in item) {
        dest[prop] = item[prop]; // Equip directly
      }
    } else {
      unequip(dest, item); // remove the existing data and push new item data
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

equip(dummyPlayerInventory,"front", back, "hands");

