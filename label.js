/*label 的用法
  适合在循环嵌套里跳出内部循环，
*/

//label continue

console.log('========first - 1==========')
loop1:
  for(var i=0; i<3; i++){
    loop2:
    for(var j=0; j<3; j++){
      if(i==1 && j==1) {
        continue loop1 
      } 
      console.log('i=' + i, ' j=' + j)
    }
  }

console.log('========first - 2 ==========')
//这里continue 后面默认跟loop2
loop1:
  for(var i=0; i<3; i++){
    loop2:
    for(var j=0; j<3; j++){
      if(i==1 && j==1) {
        continue loop2 
      } 
      console.log('i=' + i, ' j=' + j)
    }
  }


//label break
console.log('========second==========')
loop1:
  for(var i=0; i<3; i++){
    loop2:
    for(var j=0; j<3; j++){
      if(i==1 && j==1) {
        break loop1 
      } 
      console.log('i=' + i, ' j=' + j)
    }
  }
