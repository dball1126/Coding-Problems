/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// O(n * m)
function multiply(num1, num2) {
    if (num1 === "0" || num2 === "0") {
      return "0";
    }
  
    const m = num1.length - 1;
    const n = num2.length - 1;
    let carry = 0;
    let product = "";
  
    // Loop through each digit position in the result (including carry)
    for (let i = 0; i <= m + n || carry; ++i) {
      let digit = 0;
  
      // Inner loop to multiply digits at corresponding positions from num1 and num2
      // and add any carry from previous calculations
      for (let j = Math.max(0, i - n); j <= Math.min(i, m); ++j) {
        digit += (parseInt(num1[m - j], 10) * parseInt(num2[n - i + j], 10));
      }
  
      // Add carry from previous calculation
      digit += carry;
  
      // Extract the ones digit of the current digit
      product += (digit % 10).toString();
  
      // Update carry for the next iteration
      carry = Math.floor(digit / 10);
    }
  
    // Reverse the product string to get the correct order
    return product.split("").reverse().join("");
  }
/**
 * 10
 * 10 value = 1
 *  zeros = 10
 *  1 * 10
 * "0"
 * 
 */