/**
 * jsBarcode.options.
 */

import { BaseOptions } from 'jsbarcode';
import code128 from 'jsbarcode/lib/barcodes/CODE128/CODE128_AUTO';
import svgRenderer from 'jsbarcode/lib/renderers/svg';

type ExtendedOptions = BaseOptions & {
  encoder: Function,
  renderer: Function,
  margins: number,
  height: number,
  fontSize: number,
};

const jsBarcodeOptions: ExtendedOptions = {
  encoder: code128,
  renderer: svgRenderer,
  width: 1.2,
  height: 100,
  fontSize: 20,
  margins: 16,
};

export default jsBarcodeOptions;
