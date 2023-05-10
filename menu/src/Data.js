// // Resent whenever an item is added or removed so items can grab the base data they need
// interface ItemBaseData {
//   [key: string]: { // The name of the item
//     label: string;
//     size: [number, number]; // x by y size
//     description: string;
//     type: 0 | 1 | 2 | 3; // Defines the type of item
//   };
// }

// interface InventoryItem {
//   slot: number; // This is the start slot (where the first square of the item is placed)
//   item: Item | ContainerItem | WeaponItem | ComponentClothingItem | PropClothingItem;
// }
// interface Item { // Type 0 (General Item)
//   id: number; // Epoch number that is unique and based on when the item was first created
//   name: string; // This is used to define the item, e.g two cell phones could have different metadata but would have the same name ('phone')
//   label?: string; // Used to override the items base label
//   description?: string; // Used to override the items base description
//   metadata: object;
//   rotated: boolean; // Used to define whether an item is rotated, a rotated item would just be the inversion of the size
//   image?: string; // Used to override the items base image location of lycus.network/assets/icons/items/{name}
// }
// interface ComponentClothingItem extends Item { // Type 1
//   clothingData: {
//     type: 0;
//     component: number;
//     drawable: number;
//     texture: number;
//   };
//   inventory?: InventoryItem[];
// }
// interface PropClothingItem extends Item { // Type 1
//   clothingData: {
//     type: 1;
//     component: number;
//     drawable: number;
//     texture: number;
//   };
// }
// interface ContainerItem extends Item { // Type 2
//   inventory?: InventoryItem[];
// }
// interface WeaponItem extends Item { // Type 3
//   attachments: object; // Can probably be made into an interface in the future
// }


// // Item type layouts
// const GeneralItem: Item = {
//   id: 0,
//   name: '',
//   metadata: {},
//   rotated: false,
// };
// const ComponentClothingItemWithInventory: ComponentClothingItem = {
//   id: 0,
//   name: '',
//   clothingData: { type: 0, component: 0, drawable: 0, texture: 0 },
//   inventory: [],
//   metadata: {},
//   rotated: false,
// };
// const ComponentClothingItem: ComponentClothingItem = {
//   id: 0,
//   name: '',
//   clothingData: { type: 0, component: 0, drawable: 0, texture: 0 },
//   metadata: {},
//   rotated: false,
// };
// const PropClothingItem: PropClothingItem = {
//   id: 0,
//   name: '',
//   clothingData: { type: 1, component: 0, drawable: 0, texture: 0 },
//   metadata: {},
//   rotated: false,
// };
// const ContainerItem: ContainerItem = {
//   id: 0,
//   name: '',
//   inventory: [],
//   metadata: {},
//   rotated: false,
// };
// const WeaponItem: WeaponItem = {
//   id: 0,
//   name: '',
//   attachments: {},
//   metadata: {},
//   rotated: false,
// };


// const PlayerInventory = {
//   shirt: ComponentClothingItemWithInventory,
//   pants: ComponentClothingItemWithInventory,
//   bag: ComponentClothingItemWithInventory,
//   vest: ComponentClothingItemWithInventory,
//   pockets: [] as InventoryItem[], // Array of inventory items
//   front: WeaponItem, // A single weapon item
//   back: WeaponItem, // A single weapon item
//   hands: {} as InventoryItem['item'], // A single item
//   mask: ComponentClothingItem,
//   gloves: ComponentClothingItem,
//   shoes: ComponentClothingItem,
//   neckwear: ComponentClothingItem,
//   headwear: PropClothingItem,
//   eyewear: PropClothingItem,
//   earwear: PropClothingItem,
//   leftwrist: PropClothingItem,
//   rightwrist: PropClothingItem,
// };


// // Components:
// // 1: Mask\ 3: Gloves\ 6: Shoes\ 7: Neckwear\
// // Components with inventories:
// // 4: Pants\ 5: Bag (also includes parachutes)\ 9: Vest\ 11: Shirt
// // Props:
// // 0: Headwear\ 1: Eyewear\ 2: Earwear\ 6: Left Wrist\ 7: Right Wrist

