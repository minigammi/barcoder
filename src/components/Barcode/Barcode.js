/**
 * Barcode.
 */

import React, { useRef, useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import JsBarcode from 'jsbarcode';
import Input from '../Input';
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

  const className = classNames(styles.Barcode, !showSvgNode && styles.Hidden);

  return (
    <div className={className}>
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
      <Input
        className={styles.BarcodeCodeInput}
        id={`bci_${barcode.id}`}
        value={barcode.code}
        onChange={e => onChange({ ...barcode, code: e.target.value })}
        label="Code"
      />
      <Input
        id={`bcc_${barcode.id}`}
        value={barcode.comment}
        onChange={e => onChange({ ...barcode, comment: e.target.value })}
        label="Comment"
        visibleOnPrint
      />
    </div>
  );
}

Barcode.propTypes = propTypes;


function compareProps(prev, next) {
  return prev.barcode === next.barcode;
}

export default memo(Barcode, compareProps);