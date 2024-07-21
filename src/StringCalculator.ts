// create a add function
export function add(numbers: string): number {
    //check for blank string
    if (numbers === "") {
      return 0;
    }
  // check for next line or comma
  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (delimiterMatch) {
      delimiter = new RegExp(delimiterMatch[1]);
      numbers = numbers.substring(delimiterMatch[0].length);
    }
  }
  // iterate through numbers
    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(n => n < 0);
    // add condition for negative numbers
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }
  // return the result
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  