/**
 * index.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { autorun } from 'mobx';
import * as serviceWorker from './serviceWorker';
import ProjectsList from './models/ProjectsList';
import ProjectsService from './models/ProjectsService';
import App from './App';
import './index.css';

const projectsList = new ProjectsList(ProjectsService.getProjects());
autorun(() => ProjectsService.saveProjects(projectsList.list));

ReactDOM.render(<App projectsList={projectsList}/>, document.getElementById('root'));

serviceWorker.register();
