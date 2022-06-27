var formUser = {
 age: 18,
 paid: true,
 blocked: false,
 badUsername: false,
 isAdmin: false
}
 formUser.isAdmin? console.log('admitted'): (formUser.age >= 18 
                                              && formUser.age <= 35 
                                              &&(formUser.paid)
                                              &&(!formUser.blocked)
                                              &&(!formUser.badUsername))? console.log('admitted') : console.log('no admitted');
