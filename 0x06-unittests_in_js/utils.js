class Utils {
  static calculateNumber(type, a, b) {
    const aRounded = Math.round(a);
    const bRounded = Math.round(b);

    if (type === 'SUM') {
      return aRounded + bRounded;
    }

    if (type === 'SUBTRACT') {
      return aRounded - bRounded;
    }

    if (type === 'DIVIDE') {
      if (bRounded !== 0) {
        return aRounded / bRounded;
      }
    }

    return 'Error';
  }
}

module.exports = Utils;
