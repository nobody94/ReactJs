import { createSelector } from 'reselect';

const selectShop = (state) => state.shopData;

export const getShop = createSelector(
    [ selectShop ],
    shopData => shopData
);

