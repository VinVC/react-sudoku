export const CREATE_NEW = 'CREATE_NEW'
export const SHOW_ANSWER = 'SHOW_ANSWER'
export const SET_VAL = 'SET_VAL'
export const VERIFY = 'VERIFY'

export function createNew() {
  return {
    type: CREATE_NEW
  }
}

export function showAnswer() {
  return {
    type: SHOW_ANSWER
  }
}

export function setVal(row, col, val) {
  return {
    type: SET_VAL,
    payload: {
      row,
      col,
      val
    }
  }
}

export function verify() {
  return {
    type: VERIFY
  }
}