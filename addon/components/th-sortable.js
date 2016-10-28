import Ember from 'ember';
import layout from '../templates/components/th-sortable';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'th',
  classNameBindings: ['isSorted:sorted'],
  dasherizedField: Ember.computed('field', function() {
    return this.get('field').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }),
  /** 
      Inverses the sorting parameter
      E.g. inverseSorting('title') returns '-title'
           inverseSorting('-title') returns 'title'
  */
  _inverseSorting(sorting) {
    if (sorting.substring(0, 1) === '-') {
      return sorting.substring(1);
    } else {
      return "-" + sorting;
    }
  },
  isSorted: Ember.computed('dasherizedField', 'currentSorting', function() {
    return this.get('currentSorting') === this.get('dasherizedField') ||
      this.get('currentSorting') === this._inverseSorting(this.get('dasherizedField'));
  }),
  
  actions: {
    /**
       Sets the current sorting parameter.
       Note: the current sorting parameter may contain another field than the given field.
       In case the given field is currently used for sorting, inverse the sorting.
       Else, set the sorting to ascending on the given field.
     */
    inverseSorting() {
      if (this.get('isSorted')) {
        return this.set('currentSorting', this._inverseSorting(this.get('currentSorting')));
      } else { // if currentSorting is not set to this field
        return this.set('currentSorting', this.get('dasherizedField'));
      }
    }
  }

});
