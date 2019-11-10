/**
 * Barcode.
 */

import React, { useRef, useEffect, useState, ReactNode, ReactElement } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import JsBarcode from 'jsbarcode';
import BarcodeModel from '../../models/Barcode';
import Input from '../Input';
import Button from '../Button';
import jsBarcodeOptions from './jsBarcode.options';
import styles from './Barcode.module.css';
import circleButtonStyles from '../../styles/CircleButton.module.css';


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
  barcode: BarcodeModel,
  onRemove: (barcode: BarcodeModel) => void,
};

function Barcode(props: PropTypes): ReactElement {
  const { barcode, onRemove } = props;

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
  }, [barcode.code, error]);

  const className = classNames(styles.Barcode, !showSvgNode && styles.Hidden);

  return (
    <div className={className}>
      <Button
        className={`${styles.BarcodeRemove} ${circleButtonStyles.CircleButton}`}
        onClick={() => onRemove(barcode)}
        type="button"
        title="Remove barcode"
      >
        +
      </Button>
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
        onChange={e => barcode.code = e.target.value}
        label="Code"
      />
      <Input
        id={`bcc_${barcode.id}`}
        value={barcode.comment}
        onChange={e => barcode.comment = e.target.value}
        label="Comment"
        visibleOnPrint
      />
    </div>
  );
}

export default observer(Barcode);
