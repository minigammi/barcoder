/**
 * ProjectsList.
 */

import { computed, observable } from 'mobx';
import Project from './Project';

class ProjectsList {

  @observable list: Project[] = [];
  @observable selectedIndex: number = 0;

  constructor(list: Project[], index: number = 0) {
    this.list = list;
    this.selectedIndex = index;
  }

  @computed get selectedProject(): Project {
    return this.list[this.selectedIndex];
  }

}

export default ProjectsList;
