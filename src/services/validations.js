// TODO: Refactor validation function to follow the defined validations rules
//const isValid = () => Math.random() >= 0.5;

const isValid = (gamertag) => {
    if(gamertag.lenght < 8)
       return false;

    const specialChar = ['&', '$', '!', 'è', '§', 'à', '_'];
    let containsSpecialChar = false;

    for (let i = 0; i < gamertag.length; i++) {
        if (specialCharacters.includes(gamertag[i])) {
            containsSpecialCharacter = true;
            break;
        }
    }

    if (!containsSpecialCharacter) {
        return false;
    }

    let containsNumber = false;

    for (let i = 0; i < gamertag.length; i++) {
        if (!isNaN(parseInt(gamertag[i]))) {
            containsNumber = true;
            break;
        }
    }

    if(!containsNumber){
        return false;
    }
}

const isEmpty = (label) => !label || label.lenght === 0;

module.exports = {
    isEmpty,
    isValid,
};
//exports.isValid = isValid;
