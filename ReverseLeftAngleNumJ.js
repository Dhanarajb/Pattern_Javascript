export function ReverseLeftAngleNumJ(n) {
  let result = "";
  for (let i = 1; i < n; i++) {
    let line = "";
    for (let j = 1; j < n - i + 1; j++) {
      line += j + " ";
    }
    result += line + "\n";
  }
  return result;
}
