export const countryCodeValidation = (value) => {
    if (!value) {
      return 'كود الدولــة مطلوب';
    }
    return true;
  };
  
  export const phoneValidation = async (value) => {
    if (!value) {
      return 'رقم الهاتف مطلوب';
    }
    if (!/^\d{9}$/.test(value)) {
      return 'رقم الهاتف يجب أن يتكون من 9 أرقام';
    }
    return true;
  };
  
  
  export const passwordValidation = (value) => {
    if (!value) {
      return 'كلمة المرور مطلوبة';
    }
    return true;
  };