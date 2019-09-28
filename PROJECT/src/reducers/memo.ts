import { ADD_MEMO,TOGGLE_MEMO, DELETE_MEMO } from '../constans/index'
import { Z_MEM_ERROR } from 'zlib';
const initial = [
  {id: 1, name: 'milk', count: 1, finished: false},
  {id: 2, name: 'coffe', count: 2, finished: true}
];
interface IState{
  list:[{
    id:number,
    name:string,
    count:number,
    finished:boolean
  }]
}
export const memoList = (state = initial, action: any) => {
  switch(action.type){
    case ADD_MEMO: {
      const newMemo: object = {
        id: Math.round(Math.random()*1000),
        name: action.name,
        count: action.count,
        finished: false,
      };
      return [...state, newMemo];
    }

    case TOGGLE_MEMO:
      return state.map(memo => {
        memo.finished =
          memo.id === action.id
            ? !memo.finished
            : memo.finished
        console.log('toggle')
        return memo;
      });
    
    case DELETE_MEMO:
        const newState = JSON.parse(JSON.stringify(state));
        newState.filter(memo=>memo.id !== action.id);
        return newState;
        
    default:
      return state;
  }
}
