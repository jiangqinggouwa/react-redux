import * as React from 'react';
import { connect } from 'react-redux';
import { inputName } from '../actions';
import Input from '../components/Input';
export interface IState{
  inputName:string 
}
const mapStateToProps = (state: IState):{value:string,type:string} => ({
  value: state.inputName,
  type: 'text',
})

const mapDispatchToProps = (dispatch: any) => ({
  handleChange: (name: string) => dispatch(inputName(name)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
