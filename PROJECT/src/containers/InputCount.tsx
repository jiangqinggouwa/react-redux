import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { inputCount } from '../actions';
import Input from '../components/Input';
import { Dispatch } from 'redux';
export interface IState{
    inputCount:number,
    type:string
}

const mapStateToProps = (state:IState):{value:number,type:string} => ({
  value: state.inputCount,
  type: 'number',
})

const mapDispatchToProps = (dispatch:any) => ({
  handleChange: (count: number) => dispatch(inputCount(count)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(Input)
