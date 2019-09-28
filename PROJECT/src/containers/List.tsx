import * as React from 'react';
import { connect } from 'react-redux';
import { toggleMemo, deleteMemo } from '../actions';
import {Row, Col, Button, Checkbox} from 'antd'
export interface IProps{
  list:[{
    id:number,
    name:string,
    count:number,
    finished:boolean
  }],
  handleClick:(id:number)=>void,
  handleDel:(id:number)=>void
}
class List extends React.Component<IProps>{
  constructor(props:any){
    super(props);
  }
  render(){
    const { list,handleDel,handleClick }=this.props
    return(
      <ul>
        <h1>全部商品</h1>
        {list.map((memo: any) => // TODO
          
          <li  key={memo.id} >
            <Row>
                <Col span={3}>
                    <Checkbox checked={memo.finished}  onClick={() => handleClick(memo.id)}/>
                    <span style={{color:memo.finished ? 'red' : 'blue'}}>{memo.name}</span>
                    {" | "}
                    <span>{memo.count}</span>
                </Col>
               <Col>
                <Button type='primary' onClick={(event) => handleDel(memo.id)}>删除</Button>
               </Col>
            </Row>
          </li>
        )}
      </ul>
    )
  }
}


const mapStateToProps = (state: any) => ({
  list: state.memoList
})

const mapDispatchToProps = (dispatch: any) => ({
  handleClick: (memoId: number) => dispatch(toggleMemo(memoId)),
  handleDel:(memoId:number) => dispatch(deleteMemo(memoId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
