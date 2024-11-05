import { oneWay } from '@ember/object/computed';
import { alias } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'thead',
  sort: alias('data-table.sort'),
  fields: oneWay('data-table.parsedFields'),
});
