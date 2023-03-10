import operations from './operate';

const checknum = (item) => !!item.match(/[0-9]+/);

export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (checknum(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }
    if (obj.operation) {
      if (obj.next && obj.next !== '0') {
        return { ...obj, next: obj.next + buttonName };
      }
      return { ...obj, next: buttonName };
    }
    if (obj.next && obj.next !== '0') {
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }
  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { ...obj, next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { ...obj, next: `${obj.total}.` };
    }
    return { ...obj, next: '0.' };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operations(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    }
    // '=' with no operation, nothing to do
    return {};
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }
  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: buttonName };
  }
  if (obj.operation) {
    if (obj.total && !obj.next) {
      return { ...obj, operation: buttonName };
    }

    if (!obj.total) {
      return { total: 0, operation: buttonName };
    }

    return {
      total: operations(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }
  if (!obj.next) {
    return { operation: buttonName };
  }

  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
