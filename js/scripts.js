
// функция truncate(str, maxlength), которая проверяет
// длину строки str и, если она превосходит maxlength,
// заменяет конец str на "…"

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}


// длина строки в поле .login-user не должна превышать 19 символов:

// truncate(str, 19)
