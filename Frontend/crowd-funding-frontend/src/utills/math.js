export function isNormalInteger(str) {
  var n = Math.floor(Number(str));
  return n !== Infinity && String(n) === str && n > 0;
}

export const percentCompleted = (Raised, Required) => {
  return (Raised * 100) / Required;
};

export const compare = (a, b) => {
  if (a.isActivated === b.isActivated) return 0;
  else if (a.isActivated === true) return -1;
  else if (b.isActivated === true) return 1;
  return 0;
};
