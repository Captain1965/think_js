var data = document.getElementById('item1')
sample = {
  title: 'Hello world',
  description: 'The first program'
}

parseTemplate = function(data, sample) {
  children = data.childNodes
  for (let i = 0; i < children.length; i++) { 
    try {
      if (children[i].hasAttribute('data-field')) {
        for (let key in sample) {
          if (children[i].getAttribute('data-field') === key) {
         children[i].textContent = sample[key]
          }
          else {console.log('the object does not contain a mutable property' 
          )} 
        }
      }
    } 
    catch(err){
      console.log(err)
    }  
  }
}

parseTemplate(data,sample)


 