import { combineReducers } from "redux";
import { memoList } from './memo';
import { inputName, inputCount } from './input';

export default combineReducers(
  { memoList , inputName, inputCount} as any
);
