/**
 * generateId.
 */

function generateId(): string {
  return `new_${(Math.floor((Math.random() * 1e8))).toString(16)}`;
}

export default generateId;

