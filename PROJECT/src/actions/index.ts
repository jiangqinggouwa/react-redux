import { ADD_MEMO,TOGGLE_MEMO,INPUT_COUNT,INPUT_NAME,CLEAR_INPUT, DELETE_MEMO } from '../constans'
export const addMemo = (count:number,name:string) => ({
  type: ADD_MEMO,
  count,
  name
})
export const deleteMemo = (id:number) => ({
  type:DELETE_MEMO,
  id
})
export const inputName = (name: string) => ({
  type: INPUT_NAME,
  name
})

export const inputCount = (count: number) => ({
  type: INPUT_COUNT,
  count
})

export const toggleMemo = (id: number) => ({
  type: TOGGLE_MEMO,
  id
})


export const clearInput = () => ({
  type: CLEAR_INPUT
})

