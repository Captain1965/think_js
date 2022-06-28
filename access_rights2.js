var formUser = {
 age: 17,
 paid: true,
 blocked: false,
 badUsername: false,
 isAdmin: true
}
if (formUser.isAdmin && (formUser.age <=35 && formUser.age >= 18))
  console.log('admitted')
else if ((formUser.age <= 35)
  &&(formUser.age >= 18)
  &&(formUser.paid)
  &&(!formUser.blocked)
  &&(!formUser.badUsername)) 
  console.log('admitted') 
else 
  console.log('no admitted')