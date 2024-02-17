export function ReverseLeftAngleNumI(n) {
  let result = "";
  for (let i = 1; i < n; i++) {
    let line = "";
    for (let j = 1; j < n - i + 1; j++) {
      line += i + " ";
    }
    result += line + "\n";
  }
  return result;
}
