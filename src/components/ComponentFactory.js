import BaseComponent from './BaseComponent/BaseComponent';
import TextFieldComponent from './TextFieldComponent/TextFieldComponent';
import NumberComponent from './NumberComponent/NumberComponent';
import FieldsetComponent from './FieldsetComponent/FieldsetComponent';
import DatagridComponent from './DatagridComponent/DatagridComponent';
import ColumnsComponent from './ColumnsComponent/ColumnsComponent';
import EditgridComponent from './EditgridComponent/EditgridComponent';
import TableComponent from './TableComponent/TableComponent';

export default function ComponentFactory(component) {
  switch (component.type) {
    case 'textfield':
      return TextFieldComponent({component: component});

    case 'number':
      return NumberComponent({component: component});

    case 'fieldset':
      return FieldsetComponent({component: component});

    case 'datagrid':
      return DatagridComponent({component: component});

    case 'columns':
      return ColumnsComponent({component: component});

    case 'editgrid':
      return EditgridComponent({component: component});

    case 'table':
      return TableComponent({component: component});

    default:
      return BaseComponent({component: component});
  }
};