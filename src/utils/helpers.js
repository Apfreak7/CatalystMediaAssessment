export function capitalize(str) {
    if (str === '') return str;
  
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }
  
  export function classNames(...classes) {
    if (!Array.isArray(classes)) return '';
  
    return classes.filter(Boolean).join(' ');
  }
  