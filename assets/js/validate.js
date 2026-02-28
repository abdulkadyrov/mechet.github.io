function isPhoneLike(value){
  if(!value) return false;
  const v = value.trim();
  // Простая проверка "похоже на телефон", без строгой валидации
  return /^[+()\d\s-]{7,}$/.test(v);
}

export { isPhoneLike };