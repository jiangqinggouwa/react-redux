import * as React from 'react';
export interface IProps{
  handleChange:(value:number | string)=>any,
  type:string,
  inputValue:number | string
}
export default class Input extends React.Component<IProps>{
  constructor(props:IProps){
    super(props)
  }
  render(){
    const {type,inputValue,handleChange}=this.props
    return(
      <input
        type={type}
        value={inputValue}
        onChange={(event) => handleChange(event.target.value)}
      />
    )
  }
}

