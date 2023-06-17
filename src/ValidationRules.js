export const phoneValidation = async (value) => {
  if (!value) {
    return 'رقم الهاتف مطلوب';
  }
  if (!/^\d{9}$/.test(value)) {
    return 'رقم الهاتف يجب أن يتكون من 9 أرقام';
  }
  return true;
};

export const requiredValidation = (value) => {
  if (!value) {
    return 'هذا الحقل مطلوب';
  }
  return true;
};

export const emailValidation = (value) => {
  if (!value) {
    return 'البريد الإلكتروني مطلوب';
  }
  // Add email validation logic here
  return true;
};

export const confirmedValidation = (value, { password }) => {
  if (!value) {
    return 'تأكيــد كلمة المرور مطلوبة';
  }
  // if (value !== password) {
  //   return 'كلمة المرور غير متطابقة';
  // }
  return true;
};