import { Store } from '@vue-storefront/Saussage-api';
import { AgnosticStore, UseStoreGetters } from '@vue-storefront/core';
import { UseStoreFilterParams } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems(stores: Store, criteria: UseStoreFilterParams = {}): AgnosticStore[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSelected(stores: Store): AgnosticStore | undefined {
  return null;
}

export const storeGetters: UseStoreGetters<Store, UseStoreFilterParams> = {
  getItems,
  getSelected
};
