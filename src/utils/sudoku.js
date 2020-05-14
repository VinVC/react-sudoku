// 生成一个数独

// 每个cell的可取值
const validNums = new Array(9).fill(0).map((e,i) => i+1)

export function createNewSudoku() {
  const sudokuArr = [
    new Array(9).fill(''),new Array(9).fill(''),new Array(9).fill(''),
    new Array(9).fill(''),new Array(9).fill(''),new Array(9).fill(''),
    new Array(9).fill(''),new Array(9).fill(''),new Array(9).fill('')
  ]
  dfs(sudokuArr, 0, 0)
  return sudokuArr
}

//深度优先搜索可取值
function dfs(sudokuArr, row, col) {
  if(col === 9) return dfs(sudokuArr, row+1, 0)
  if(row === 9) return true
  for (let i = row; i< 9; i++) {
    for (let j = col; j< 9; j++) {
      let nums = validNums.slice().sort(() => Math.random() - 0.5)
      for(let index=0; index<9; index++) {
        if(!isValid(sudokuArr, i, j, nums[index])) continue
        sudokuArr[i][j] = nums[index]
        if(dfs(sudokuArr, i, j+1)) return true
        sudokuArr[i][j] = ''
      }
      return false
    }
    return false
  }
}

function isValid(sudokuArr, row, col, num) {
  for(let i=0; i<9; i++) {
    if(sudokuArr[row][i] === num) return false
    if(sudokuArr[i][col] === num) return false
    if(sudokuArr[Math.floor(row/3)*3 + Math.floor(i / 3)][Math.floor(col/3)*3 + i%3] === num) return false
  }
  return true
}

/**
 * 产生一个只有36个cell的布局
 */
export function generate36Cells(sudokuArr) {
  const partialSudoku = JSON.parse(JSON.stringify(sudokuArr))
  const centerNums = [[1,1],[1,4],[1,7],[4,1],[4,4],[4,7],[7,1],[7,4],[7,7]]
  for(let i=0; i<9; i++) {
    let row = centerNums[i][0],col = centerNums[i][1]
    let options = ['-1', '00', '01']
    let set = new Set()
    while (set.size < 5) {
      let a = options[Math.floor(Math.random()*3)]
      let b = options[Math.floor(Math.random()*3)]
      set.add(a+b)
    }
    for(let val of set) {
      let rowOption = parseInt(val.substring(0,2))
      let colOption = parseInt(val.substring(2))
      partialSudoku[row+rowOption][col+colOption] = ''
    }
  }

  return partialSudoku

}

//判断当前的输入是否合规
export function verifySudoku(sudokuArr) {
  for(let i=0; i<9; i++) {
    for(let j=0; j<9; j++) {
      if(sudokuArr[i][j] == 0) {
        alert(`第${i+1}行，第${j+1}列未输入`) 
        return
      }
      if(!isVerify(sudokuArr, i, j, sudokuArr[i][j])) {
        alert(`第${i+1}行，第${j+1}列和其他有重复`) 
        return
      }
    }
  }
  alert('恭喜你，已完成')
  return
}

//判断当前坐标的值是否合规
function isVerify(sudokuArr, row, col, num) {
  for(let i=0; i<9; i++) {
    if(sudokuArr[row][i] === num) {
      if(i !== col) {
        return false
      }
    }
    if(sudokuArr[i][col] === num) {
      if(i !== row) {
        return false
      }
    }
    if(sudokuArr[Math.floor(row/3)*3 + Math.floor(i / 3)][Math.floor(col/3)*3 + i%3] === num) {
      if((Math.floor(row/3)*3 + Math.floor(i / 3)) !== row && (Math.floor(col/3)*3 + i%3) !==col) {
        return false
      }
    }
  }
  return true
}