/**
 * jsBarcode.options.
 */

import code128 from 'jsbarcode/lib/barcodes/CODE128/CODE128_AUTO';
import svgRenderer from 'jsbarcode/lib/renderers/svg';

const jsBarcodeOptions = {
  encoder: code128,
  renderer: svgRenderer,
  width: 2,
  height: 100,
  fontSize: 20,
  margins: 16,
};

export default jsBarcodeOptions;
