/**
 * useBarcodes.
 */

import { useReducer, useEffect } from 'react';


export type Barcode = {
  readonly id: number,
  code: string,
  comment: string,
}

export type State = Barcode[];

type Action =
  | { type: 'clear' }
  | { type: 'change' | 'remove' | 'add', payload: Barcode }


const storageKey: string = 'barcodes';

function getBarcodes(): Barcode[] {
  const items = localStorage.getItem(storageKey);
  return items ? JSON.parse(items) : [];
}

function saveBarcodes(barcodes: Barcode[]) {
  localStorage.setItem(storageKey, JSON.stringify(barcodes))
}

function createNewBarcode(): Barcode {
  return {
    id: Date.now(),
    code: '',
    comment: '',
  };
}



function barcodesReducer(state: State = [], action: Action): State {
  switch (action.type) {
    case 'clear': return [];
    case 'change': return state.map(bc => bc.id === action.payload.id ? action.payload : bc);
    case 'remove': return state.filter(bc => bc.id !== action.payload.id);
    case 'add': return [...state, action.payload];
    default: return state;
  }
}


function useBarcodes() {
  const [barcodes, dispatch] = useReducer(barcodesReducer, getBarcodes());
  const actions = {
    clear: () => dispatch({ type: 'clear' }),
    change: (barcode: Barcode) => dispatch({ type: 'change', payload: barcode }),
    remove: (barcode: Barcode) => dispatch({ type: 'remove', payload: barcode }),
    add: () => dispatch({ type: 'add', payload: createNewBarcode() }),
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
