/**
 * useBarcodes.
 */

import { useReducer, useEffect } from 'react';

/**
 * @typedef {Object} BarcodeType
 * @property {number} id
 * @property {string} code
 * @property {string} comment
 */

const storageKey = 'barcodes';

/**
 * @return {BarcodeType[]}
 */
function getBarcodes() {
  return JSON.parse(localStorage.getItem(storageKey)) || [];
}

/**
 * @param {BarcodeType[]} barcodes
 */
function saveBarcodes(barcodes) {
  localStorage.setItem(storageKey, JSON.stringify(barcodes))
}

function createNewBarcode() {
  return {
    id: Date.now(),
    code: '',
    comment: '',
  };
}

// Actions.

const types = {
  clear: 'clear',
  change: 'change',
  remove: 'remove',
};

const mapTypesToReactions = {
  [types.clear]: () => [],
  [types.change]: (state, action) => state.map(bc => bc.id === action.payload.id ? action.payload : bc),
  [types.remove]: (state, action) => state.filter(bc => bc.id !== action.payload.id),
  [types.add]: (state, action) => [...state, action.payload],
};

function barcodesReducer(state, action) {
  const reaction = mapTypesToReactions[action.type];
  return reaction ? reaction(state, action) : state;
}

/**
 * @return {{barcodes: BarcodeType[], actions: {clear: Function, change: function(BarcodeType),
 *   remove: function(BarcodeType), add: Function}}}
 */
function useBarcodes() {
  const [barcodes, dispatch] = useReducer(barcodesReducer, getBarcodes());
  const actions = {
    clear: () => dispatch({ type: types.clear }),
    change: barcode => dispatch({ type: types.change, payload: barcode }),
    remove: barcode => dispatch({ type: types.remove, payload: barcode }),
    add: () => dispatch({ type: types.add, payload: createNewBarcode() }),
  };

  useEffect(
    () => {
      saveBarcodes(barcodes);
    },
    [barcodes],
  );

  return { barcodes, actions };
}

export default useBarcodes;
