export interface InventorySet {
  location_id?: number;
  inventory_item_id?: number;
  available?: number;
}

export interface InventoryItemUpdate {
  tracked?: boolean;
}

export interface InventoryLocation {
  id: string;
}
