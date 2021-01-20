export function isNormalInteger(str) {
  var n = Math.floor(Number(str));
  return n !== Infinity && String(n) === str && n > 0;
}

export const percentCompleted = (Raised, Required) => {
  return (Raised * 100) / Required;
};
