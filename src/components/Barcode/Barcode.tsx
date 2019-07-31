/**
 * Barcode.
 */

import React, { useRef, useEffect, useState, memo, ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import JsBarcode from 'jsbarcode';
import Input from '../Input';
import jsBarcodeOptions from './jsBarcode.options';
import styles from './Barcode.module.css';
import { Barcode as BarcodeType } from '../../state/useBarcodes';


function Space({ children }: { children: ReactNode }): ReactElement {
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

function getSvgStyle(showSvgNode: boolean): { display: string } {
  return {
    display: showSvgNode ? 'block' : 'none',
  };
}


type PropTypes = {
  barcode: BarcodeType,
  onChange: (barcode: BarcodeType) => void,
  onRemove: (barcode: BarcodeType) => void,
};

function Barcode(props: PropTypes): ReactElement {
  const { barcode, onChange, onRemove } = props;

  const svgRef = useRef(null);
  const [error, setError] = useState('');

  const showSvgNode = !error && (!svgRef || (svgRef && !!barcode.code));

  useEffect(() => {
    if (barcode.code) {
      try {
        JsBarcode(svgRef.current, barcode.code, jsBarcodeOptions);
        if (error) setError('');
      } catch (e) {
        setError('invalid input')
      }
    }
  }, [barcode]);

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


function compareProps(prev: PropTypes, next: PropTypes) {
  return prev.barcode === next.barcode;
}

export default memo(Barcode, compareProps);
