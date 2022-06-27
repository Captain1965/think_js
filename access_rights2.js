var formUser = {
 age: 35,
 paid: true,
 blocked: false,
 badUsername: false,
 isAdmin: false
}
if (formUser.isAdmin) 
  console.log('admitted')
else if ((formUser.age <= 35)
  &&(formUser.age >= 18)
  &&(formUser.paid)
  &&(!formUser.blocked)
  &&(!formUser.badUsername)) 
  console.log('admitted') 
else 
  console.log('no admitted')