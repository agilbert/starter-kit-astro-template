import { allWidgets } from "../../lib/helpers/area-widgets.js";

export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Rows Layout',
    icon: 'view-column-icon',
    description: 'Create row and column-based layouts for your content.',
    previewImage: 'svg'
  },
  fields: {
    add: {
      columnLayout: {
        type: 'select',
        label: 'Column Layout',
        help: 'Choose how to divide your content across columns',
        def: 'two-equal',
        choices: [
          {
            label: 'Two Equal Columns (50/50)',
            value: 'two-equal'
          },
          {
            label: 'Three Equal Columns (33/33/33)',
            value: 'three-equal'
          },
          {
            label: 'Four Equal Columns (25/25/25/25)',
            value: 'four-equal'
          },
          {
            label: 'Narrow + Wide (33/66)',
            value: 'one-third-two-thirds'
          },
          {
            label: 'Wide + Narrow (66/33)',
            value: 'two-thirds-one-third'
          },
          {
            label: 'Narrow + Wide + Narrow (25/50/25)',
            value: 'quarter-half-quarter'
          }
        ]
      },
      maxWidth: {
        type: 'select',
        label: 'Maximum Content Width',
        choices: [
          { label: 'Full Width', value: '' },
          { label: 'Extra Narrow (768px)', value: 'max-width-768' },
          { label: 'Narrow (960px)', value: 'max-width-960' },
          { label: 'Medium (1152px)', value: 'max-width-1152' },
          { label: 'Wide (1344px)', value: 'max-width-1344' }
        ],
        def: ''
      },
      spacing: {
        type: 'select',
        label: 'Space Between Columns',
        def: 'normal',
        choices: [
          { label: 'None', value: 'none' },
          { label: 'Tight', value: 'tight' },
          { label: 'Normal', value: 'normal' },
          { label: 'Wide', value: 'wide' }
        ]
      },
      verticalAlignment: {
        type: 'select',
        label: 'Vertical Alignment',
        def: 'top',
        choices: [
          { label: 'Top', value: 'top' },
          { label: 'Center', value: 'center' },
          { label: 'Bottom', value: 'bottom' }
        ]
      },
      // The relevant parts of the schema with fixed conditionals
      columnOneContent: {
        type: 'area',
        label: 'First Column',
        options: {
          widgets: allWidgets
        },
        if: {
          $or: [
            { columnLayout: 'two-equal' },
            { columnLayout: 'three-equal' },
            { columnLayout: 'four-equal' },
            { columnLayout: 'one-third-two-thirds' },
            { columnLayout: 'two-thirds-one-third' },
            { columnLayout: 'quarter-half-quarter' }
          ]
        }
      },
      columnTwoContent: {
        type: 'area',
        label: 'Second Column',
        options: {
          widgets: allWidgets
        },
        if: {
          $or: [
            { columnLayout: 'two-equal' },
            { columnLayout: 'three-equal' },
            { columnLayout: 'four-equal' },
            { columnLayout: 'one-third-two-thirds' },
            { columnLayout: 'two-thirds-one-third' },
            { columnLayout: 'quarter-half-quarter' }
          ]
        }
      },
      columnThreeContent: {
        type: 'area',
        label: 'Third Column',
        options: {
          widgets: allWidgets
        },
        if: {
          $or: [
            { columnLayout: 'three-equal' },
            { columnLayout: 'four-equal' },
            { columnLayout: 'quarter-half-quarter' }
          ]
        }
      },
      columnFourContent: {
        type: 'area',
        label: 'Fourth Column',
        options: {
          widgets: allWidgets
        },
        if: {
          columnLayout: 'four-equal'
        }
      }
    }
  }
};