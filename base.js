const nestedList = ['item1', ['item2', ['item3', ['item4']]]] 
convert = function(array) {
    if (typeof array[0] === 'string') {
     ul = document.createElement('ul')
          document.body.appendChild(ul)
          li = document.createElement('li')
          ul.appendChild(li)
          li.innerHTML = array[0] 
          array = array.flat()
          array.shift()
          convert(array)
    }
  }
convert(nestedList)  