import { isQuestion, isSequence, isSubSequence } from './component-utils';
import { COMPONENT_TYPE } from 'constants/pogues-constants';
const { QUESTION, SEQUENCE, SUBSEQUENCE } = COMPONENT_TYPE;

test(`should return true when calling isQuestion with a QUESTION as a parameter`, () => {
  expect(isQuestion({ type: QUESTION })).toBeTruthy();
});

test(`should return false when calling isQuestion without a QUESTION as a parameter`, () => {
  expect(isQuestion()).toBeFalsy();
});

test(`should return true when calling isSubSequence with a SUBSEQUENCE as a parameter`, () => {
  expect(isSubSequence({ type: SUBSEQUENCE })).toBeTruthy();
});

test(`should return false when calling isSubSequence without a SUBSEQUENCE as a parameter`, () => {
  expect(isSubSequence()).toBeFalsy();
});

test(`should return true when calling isSequence with a SEQUENCE as a parameter`, () => {
  expect(isSequence({ type: SEQUENCE })).toBeTruthy();
});

test(`should return false when calling isSequence without a SEQUENCE as a parameter`, () => {
  expect(isSequence()).toBeFalsy();
});
