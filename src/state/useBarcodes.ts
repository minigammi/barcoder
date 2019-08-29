/**
 * useBarcodes.
 */

import { useReducer, useEffect, useState, useRef } from 'react';


export type Barcode = {
  readonly id: number,
  code: string,
  comment: string,
}

export type Project = {
  barcodes: Barcode[],
}

export type State = Barcode[];

type Action =
  | { type: 'clear' }
  | { type: 'change' | 'remove' | 'add', payload: Barcode }
  | { type: 'switchProject', payload: Barcode[] }


const storageKey: string = 'barcodes';

function getBarcodes(projectIndex: number): Barcode[] {
  const data = localStorage.getItem(storageKey);
  const projects = data ? JSON.parse(data) : [];

  if (!projects || projects.length === 0) {
    return [];
  }

  // If it barcodes list, not project.
  if (projects[0].id) {
    return projects;
  }

  const project: Project = projects[projectIndex];
  if (!project) return [];

  return project.barcodes || [];
}

function saveBarcodes(barcodes: Barcode[], projectIndex: number) {
  const data = localStorage.getItem(storageKey);
  const projects = data ? JSON.parse(data) : [];

  if (projects && projects[0] && projects[0].id) {
    localStorage.setItem(storageKey, JSON.stringify([{ barcodes }]))
  }
  else {
    projects[projectIndex] = { barcodes };
    localStorage.setItem(storageKey, JSON.stringify(projects))
  }
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
    case 'switchProject': return action.payload;
    default: return state;
  }
}


function useBarcodes() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [barcodes, dispatch] = useReducer(barcodesReducer, getBarcodes(projectIndex));
  const barcodeRef = useRef(barcodes);
  const prevIndexRef = useRef(projectIndex);

  const actions = {
    clear: () => dispatch({ type: 'clear' }),
    change: (barcode: Barcode) => dispatch({ type: 'change', payload: barcode }),
    remove: (barcode: Barcode) => dispatch({ type: 'remove', payload: barcode }),
    add: () => dispatch({ type: 'add', payload: createNewBarcode() }),
  };

  useEffect(() => {
    barcodeRef.current = barcodes;
  }, [barcodes]);

  useEffect(() => {
    dispatch({ type: 'switchProject', payload: getBarcodes(projectIndex) });
    prevIndexRef.current = projectIndex;
    return () => {
      saveBarcodes(barcodeRef.current, prevIndexRef.current);
    };
  }, [projectIndex]);

  return { barcodes, actions, projectIndex, setProjectIndex };
}

export default useBarcodes;
