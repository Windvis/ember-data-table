import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
  classNames: ['data-table-content'],
  tableClass: alias('data-table.tableClass'),
});
