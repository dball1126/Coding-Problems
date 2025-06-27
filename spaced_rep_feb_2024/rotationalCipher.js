// Add any extra import statements you may need here


// Add any helper functions you may need here


function rotationalCipher(input, rotationFactor) {
    let result = '';
    let diff1 = rotationFactor % 26;
    let diff2 = rotationFactor % 10;

    for (let c of input) {

        if (c >= "a" && c <= "z") {

            let val = c.charCodeAt() + diff1;

            if (val <= "z".charCodeAt()) {
                result += String.fromCharCode(val);
            } else {
                result += String.fromCharCode(val - 26)
            }

        } else if (c >= "A" && c <= "Z") {

            let val = c.charCodeAt() + diff1;

            if (val <= "Z".charCodeAt()) {
                result += String.fromCharCode(val);
            } else {
                result += String.fromCharCode(val - 26)
            }

        } else if (c >= "0" && c <= "9") {

            
            let val = c.charCodeAt() + diff2;

            if (val <= "9".charCodeAt()) {
                result += String.fromCharCode(val);
            } else {
                result += String.fromCharCode(val - 10)
            }

        } else {
            result += c
        }
        
    }


    return result;
  }
  
  console.log(rotationalCipher("abcdefghijklmNOPQRSTUVWXYZ0123456789", 39))
  
  
  
  
  