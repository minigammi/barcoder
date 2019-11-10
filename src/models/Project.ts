/**
 * Project.
 */

import { action, observable } from 'mobx';
import Barcode from './Barcode';
import generateId from '../utils/generateId';

class Project {

  readonly id: string;
  @observable name: string;
  @observable barcodes: Barcode[];

  constructor(name: string = '', barcodes: Barcode[] = [], id?: string) {
    this.id = id || generateId();
    this.name = name;
    this.barcodes = barcodes;
  }

  @action.bound clear(): this {
    this.barcodes = [];
    return this;
  }

  @action.bound addBarcode(): this {
    this.barcodes.push(new Barcode());
    return this;
  }

  removeBarcode(barcode: Barcode): this {
    this.barcodes = this.barcodes.filter(b => b !== barcode);
    return this;
  }

}

export default Project;
