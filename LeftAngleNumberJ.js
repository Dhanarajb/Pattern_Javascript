export function LeftAngleNumberJ(n) {
  let result = "";
  for (let i = 1; i < n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j + " ";
    }
    result += line + "\n";
  }
  return result;
}
