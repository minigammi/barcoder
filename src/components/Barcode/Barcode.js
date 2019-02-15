/**
 * Barcode.
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import JsBarcode from 'jsbarcode';
import jsBarcodeOptions from './jsBarcode.options';
import styles from './Barcode.module.css';


function Space() {
  const margin = 16;
  const height = jsBarcodeOptions.height
    + (jsBarcodeOptions.margins * 2)
    + (jsBarcodeOptions.fontSize / 2)
    - (margin * 2);

  return (
    <div style={{ height, margin }} className={styles.BarcodeSpace}>
      empty
    </div>
  );
}


const propTypes = {
  barcode: PropTypes.shape({
    id: PropTypes.number.isRequired,
    code: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

function Barcode(props) {
  const { barcode, onChange, onRemove } = props;
  const svgRef = useRef(null);
  const showSvgNode = !svgRef || (svgRef && barcode.code);
  useEffect(
    () => {
      if (barcode.code) {
        JsBarcode(svgRef.current, barcode.code, jsBarcodeOptions)
      }
    },
    [barcode]
  );

  return (
    <div className={styles.Barcode}>
      <button
        className={styles.BarcodeRemove}
        onClick={() => onRemove(barcode)}
        type="button"
        title="Remove barcode"
      >
        +
      </button>
      {showSvgNode && <svg ref={svgRef} className={styles.BarcodeSvg}/>}
      {!showSvgNode && <Space />}
      <label className={styles.BarcodeInput}>
        <input
          type="text"
          id={`bci_${barcode.id}`}
          value={barcode.code}
          onChange={e => onChange({ ...barcode, code: e.target.value })}
          placeholder=" "
        />
        <span />
      </label>
    </div>
  );
}

Barcode.propTypes = propTypes;


export default Barcode;
