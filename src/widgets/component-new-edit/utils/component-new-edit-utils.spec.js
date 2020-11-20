import { checkVaribleNumberStart } from './component-new-edit-utils';

describe('checkVaribleNumberStart', () => {
  test('should validate the form', () => {
    const variables = [
      {
        BOOLEAN: {},
        DATE: { minimum: '', maximum: '', format: '' },
        DURATION: {
          minimum: '',
          maximum: '',
          mihours: '',
          miminutes: '',
          mihundhours: '',
        },
        NUMERIC: { minimum: '', maximum: '', decimals: '', unit: '' },
        TEXT: { maxLength: 255, pattern: '' },
        id: 'khq9vamv',
        label: '1QUESTION label',
        mandatory: false,
        name: '1QUESTION',
        type: 'TEXT',
      },
    ];
    const result = checkVaribleNumberStart(variables);
    expect(result).toEqual(true);
  });
});
