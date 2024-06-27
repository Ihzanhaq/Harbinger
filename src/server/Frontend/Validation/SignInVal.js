function Validation(values){
    let errors = {}
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/

    if(values.username === ''){
        errors.username = 'Name should not be empty'
    }
}

export default Validation;
