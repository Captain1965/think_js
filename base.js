const nestedList = ['item1', ['item2', ['item3', ['item4']]]]
convert = function(array) {
  array = array.flat(Infinity)
  array.forEach(item => {
    let listUl = document.querySelectorAll('ul')
    if (listUl.length === 0) {
      li = document.createElement('li')
      ul = document.createElement('ul')
      li.innerHTML = item      
      ul.appendChild(li)
      document.body.appendChild(ul)
    } else { let liAlt = document.createElement('li')
             let ulAlt = document.createElement('ul')
             liAlt.innerHTML = item
             ulAlt.appendChild(liAlt)
             listUl[--listUl.length].insertAdjacentElement('beforeend',ulAlt)
    }
  })
}
 convert(nestedList)