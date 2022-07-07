var formUser = {
 age: 18,
 paid: true,
 blocked: false,
 badUsername: false,
 isAdmin: false
}
var administrationTerms = formUser.isAdmin && (formUser.age <=35 && formUser.age >= 18)
  administrationTerms? console.log('admitted'): (formUser.age >= 18 
                                              && formUser.age <= 35 
                                              &&(formUser.paid)
                                              &&(!formUser.blocked)
                                              &&(!formUser.badUsername))? console.log('admitted') : console.log('no admitted');
