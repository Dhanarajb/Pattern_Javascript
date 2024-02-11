// SquarePattern.js
export function printSquareOfStars(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n; j++) {
      line += "* ";
    }
    result += line + "\n";
  }
  return result;
}
