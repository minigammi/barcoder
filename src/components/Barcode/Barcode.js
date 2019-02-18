/**
 * Barcode.
 */

import React, { useRef, useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import JsBarcode from 'jsbarcode';
import jsBarcodeOptions from './jsBarcode.options';
import styles from './Barcode.module.css';


function Space({ children }) {
  const margin = 16;
  const height = jsBarcodeOptions.height
    + (jsBarcodeOptions.margins * 2)
    + (jsBarcodeOptions.fontSize / 2)
    - (margin * 2);

  return (
    <div style={{ height, margin }} className={styles.BarcodeSpace}>
      {children}
    </div>
  );
}

function getSvgStyle(showSvgNode) {
  return {
    display: showSvgNode ? 'block' : 'none',
  };
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
  const [error, setError] = useState('');

  const showSvgNode = !error && (!svgRef || (svgRef && barcode.code));

  useEffect(
    () => {
      if (barcode.code) {
        try {
          JsBarcode(svgRef.current, barcode.code, jsBarcodeOptions);
          if (error) setError('');
        }
        catch (e) {
          setError('invalid input')
        }
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
      <svg
        ref={svgRef}
        className={styles.BarcodeSvg}
        style={getSvgStyle(showSvgNode)}
      />
      {!showSvgNode && <Space>{error || 'empty'}</Space>}
      <label className={styles.BarcodeInput}>
        <input
          type="text"
          id={`bci_${barcode.id}`}
          value={barcode.code}
          onChange={e => onChange({ ...barcode, code: e.target.value })}
          maxLength={25}
          placeholder="Code..."
        />
        <span />
      </label>
      <label className={`${styles.BarcodeInput} ${styles.BarcodeComment}`}>
        <input
          type="text"
          id={`bcc_${barcode.id}`}
          value={barcode.comment}
          onChange={e => onChange({ ...barcode, comment: e.target.value })}
          maxLength={25}
          placeholder="Comment..."
        />
        <span />
      </label>
    </div>
  );
}

Barcode.propTypes = propTypes;


function compareProps(prev, next) {
  return prev.barcode === next.barcode;
}

export default memo(Barcode, compareProps);
