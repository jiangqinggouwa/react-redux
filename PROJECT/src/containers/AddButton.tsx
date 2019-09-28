import React from 'react';
import { connect } from 'react-redux';
import { addMemo, clearInput } from '../actions';
export interface IProps{
  handleClick:(inputCount:number,inputName:string)=>void,
  inputName:string,
  inputCount:number
}
export interface IState{
  inputName:string,
  inputCount:number
}
class AddButton extends React.Component<IProps>{
  constructor(props:IProps){
    super(props)
  }
  render(){
    const {handleClick,inputCount,inputName} = this.props 
    return(
      <div>
        <button onClick={(event) => handleClick(inputCount,inputName)}>ADD</button>
      </div>
    )
  }
}
const mapStateToProps = (state:IState) => ({
  inputName: state.inputName,
  inputCount: state.inputCount,
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  handleClick: (inputCount,inputName) => {
    dispatch( addMemo(inputCount,inputName) );
    dispatch( clearInput() );
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);
