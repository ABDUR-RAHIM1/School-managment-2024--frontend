export const validateEmail = (email) => {
    return email.endsWith("@gmail.com") && email.indexOf(".com") === email.length - 4;
};

