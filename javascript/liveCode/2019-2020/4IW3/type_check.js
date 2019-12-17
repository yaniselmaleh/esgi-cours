function type_check_v1(value, type) {
  if ( type === "null") return value === null;
  if (type === "object" && Array.isArray(value)) return false;
  if (type === "object" && value === null) return false;
  if (type === "array" && !Array.isArray(value)) return false;
  
  return typeof value === type;

  switch(typeof value) {
    case 'object':
      if(Array.isArray(value)) return type === "array";
      if(value === null) return type === "null";
    default:
      return typeof value === type;
  }
}

function type_check_v2(value, conf) {
  for(key in conf) {
    switch(key) {
      case 'type':
        if (!type_check_v1(value, conf[key])) return false;
      case 'value':
        ... return false;
      case 'enum':
        ... return false;
    }
  }

  return true;
}