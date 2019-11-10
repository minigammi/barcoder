/**
 * App.
 */

import React, { ReactElement } from 'react';
import { observer } from 'mobx-react';
import ProjectsList from './models/ProjectsList';
import AddButton from './components/AddButton';
import Barcode from './components/Barcode';
import Button from './components/Button';
import Container from './components/Container';
import Header from './components/Header';
import ProjectsMenu from './components/ProjectsMenu';

type PropTypes = {
  projectsList: ProjectsList
}

function App(props: PropTypes): ReactElement {
  const { projectsList } = props;

  return (
    <>
      <Header>
        <Button onClick={projectsList.selectedProject.clear}>Clear</Button>
        <Button primary onClick={() => window.print()}>Print</Button>
      </Header>
      <Container>
        <ProjectsMenu>
          {projectsList.list.map((project, index) => (
            <Button
              key={index}
              primary={index === projectsList.selectedIndex}
              onClick={() => projectsList.selectedIndex = index}
            >
              {index + 1}
            </Button>
          ))}
        </ProjectsMenu>
      </Container>
      <Container>
        {projectsList.selectedProject.barcodes.map(barcode => (
          <Barcode
            key={barcode.id}
            barcode={barcode}
            onRemove={() => projectsList.selectedProject.removeBarcode(barcode)}
          />
        ))}
      </Container>
      <AddButton onClick={projectsList.selectedProject.addBarcode}/>
    </>
  );
}

export default observer(App);
