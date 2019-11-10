/**
 * ProjectsService.
 */

import Barcode from './Barcode';
import Project from './Project';

class ProjectsService {

  private static storageKey: string = 'barcodes';

  static saveProjects(projects: Project[]): void {
    localStorage.setItem(ProjectsService.storageKey, JSON.stringify(projects))
  }

  static getProjects(): Project[] {
    const dataString = localStorage.getItem(ProjectsService.storageKey);
    const data = dataString ? JSON.parse(dataString) : [];

    if (!data || data.length === 0) {
      return [
        new Project(),
        new Project(),
        new Project(),
      ];
    }

    const plainDataToBarcode = (b: Barcode) => new Barcode(b.code, b.comment, b.id);
    const plainDataToProject = (p: Project) => new Project(p.name, p.barcodes.map(plainDataToBarcode), p.id);

    // Parse legacy version of storage where was only barcodes.
    if (data[0].code || data[0].comment) {
      return [
        new Project('', data[0].map(plainDataToBarcode)),
        new Project(),
        new Project(),
      ];
    }

    return data.map(plainDataToProject);
  }

}

export default ProjectsService;