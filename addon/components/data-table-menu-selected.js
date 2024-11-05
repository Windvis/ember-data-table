import { action } from '@ember/object';
import { reads } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({
  init: function () {
    this._super(...arguments);
    this.set('data-table.enableSelection', true);
  },

  selectionCount: reads('data-table.selection.length'),

  clearSelection: action(function () {
    this.get('data-table').clearSelection();
  }),
});
