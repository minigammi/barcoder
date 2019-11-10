/**
 * Barcode.
 */

import { observable } from 'mobx';
import generateId from '../utils/generateId';

class Barcode {

  readonly id: string;
  @observable code: string;
  @observable comment: string;

  constructor(code: string = '', comment: string = '', id?: string) {
    this.id = id || generateId();
    this.code = code;
    this.comment = comment;
  }

}

export default Barcode;
