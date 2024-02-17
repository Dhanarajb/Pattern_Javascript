export function LeftAngleNumberJ(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
      line += j + " ";
    }
    result += line + "\n";
  }
  return result;
}
