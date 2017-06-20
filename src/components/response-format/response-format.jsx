import React from 'react';
import { FormSection } from 'redux-form';

import ComponentSelectoryByTypeContainer from 'containers/widget/component-selector-by-type';
import ResponseFormatSimple from 'components/response-format/response-format-simple';
import ResponseFormatSingle from 'components/response-format/response-format-single';
import ResponseFormatMultiple from 'components/response-format/response-format-multiple';
import ResponseFormatTable from 'components/response-format/response-format-table';
import Dictionary from 'utils/dictionary/dictionary';
import { QUESTION_TYPE_ENUM } from 'constants/schema';

const { SIMPLE, SINGLE_CHOICE, MULTIPLE_CHOICE, TABLE } = QUESTION_TYPE_ENUM;

class ResponseFormat extends FormSection {
  static defaultProps = {
    name: 'responseFormat',
  };

  render() {
    const responseFormatTypes = [
      {
        label: Dictionary.responseFormatSimple,
        value: SIMPLE,
        content: <ResponseFormatSimple />,
      },
      {
        label: Dictionary.responseFormatSingle,
        value: SINGLE_CHOICE,
        content: <ResponseFormatSingle />,
      },
      {
        label: Dictionary.responseFormatMultiple,
        value: MULTIPLE_CHOICE,
        content: <ResponseFormatMultiple />,
      },
      {
        label: Dictionary.responseFormatTable,
        value: TABLE,
        content: <ResponseFormatTable />,
      },
    ];

    return (
      <ComponentSelectoryByTypeContainer
        label={Dictionary.responseFormats}
        components={responseFormatTypes}
        selectorPath="responseFormat"
      />
    );
  }
}

export default ResponseFormat;
