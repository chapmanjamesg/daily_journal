const verifier = {
    verifyAlphaNumeric: (entries) => {
        const letterNumber = /^[0-9a-zA-Z]+$/;
        if((entries.value.match(letterNumber))){
            return true
        }else {
            alert("You used an invalid character!")
            return false
        }
    }
}
export default verifier