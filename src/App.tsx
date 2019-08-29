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
  const { barcodes, actions, projectIndex, setProjectIndex } = useBarcodes();

  return (
    <Fragment>
      <Header>
        <Button onClick={actions.clear}>Clear</Button>
        <Button primary onClick={() => window.print()}>Print</Button>
      </Header>
      <Container>
        <Button primary={projectIndex === 0} onClick={() => setProjectIndex(0)}>1</Button>
        <Button primary={projectIndex === 1} onClick={() => setProjectIndex(1)}>2</Button>
        <Button primary={projectIndex === 2} onClick={() => setProjectIndex(2)}>3</Button>
      </Container>
      <Container>
        {barcodes.map(barcode => (
          <Barcode
            key={barcode.id}
            barcode={barcode}
            onChange={actions.change}
            onRemove={actions.remove}
          />
        ))}
      </Container>
      <AddButton onClick={actions.add} />
    </Fragment>
  );
}

export default App;
