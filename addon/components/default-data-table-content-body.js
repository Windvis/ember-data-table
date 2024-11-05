import { A } from '@ember/array';
import { computed } from '@ember/object';
import { oneWay } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  allFields: oneWay('data-table.parsedFields'),

  firstColumn: computed('data-table.parsedFields', function () {
    const parsedFields = A(this.get('data-table.parsedFields'));
    return parsedFields.get('firstObject');
  }),

  otherColumns: computed('data-table.parsedFields', function () {
    let fields;
    [, ...fields] = this.get('data-table.parsedFields');
    return fields;
  }),

  linkedRoute: oneWay('data-table.link'),
});
