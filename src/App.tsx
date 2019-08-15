/**
 * App.
 */

import React, { Fragment, ReactElement } from 'react';
import useBarcodes from './state/useBarcodes';
import Button from './components/Button';
import Container from './components/Container';
import Header from './components/Header';
import Barcode from './components/Barcode';
import AddButton from './components/AddButton';

function App(): ReactElement {
  const { barcodes, actions } = useBarcodes();

  return (
    <Fragment>
      <Header>
        <Button onClick={actions.clear}>Clear</Button>
        <Button onClick={() => window.print()}>Print</Button>
      </Header>
      <Container>
        {barcodes.map(barcode => (
          <Barcode
            key={barcode.id}
            barcode={barcode}
            onChange={actions.change}
            onRemove={actions.remove}
          />
        ))}
        <AddButton onClick={actions.add} />
      </Container>
    </Fragment>
  );
}

export default App;
