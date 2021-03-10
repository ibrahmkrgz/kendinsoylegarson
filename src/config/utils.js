export const emailValidator = email => {
    const re = /\S+@\S+\.\S+/;

    if (!email || email.length <= 0) return 'Email boş olamaz.';
    if (!re.test(email)) return 'Doğru bir email adresi giriniz.';

    return '';
};

export const passwordValidator = password => {
    if (!password || password.length <= 0) return 'Şifre boş olamaz.';

    return '';
};

export const nameValidator = name => {
    if (!name || name.length <= 0) return 'Kullanıcı adı boş olamaz.';

    return '';
};

export const phoneValidator = phoneNumber => {
    const re = /(05|5)[0-9][0-9][1-9]([0-9]){6}/gms

    if (!phoneNumber || phoneNumber.length <= 0) return 'Telefon numarası boş olamaz.';
    if (!re.test(phoneNumber)) return 'Doğru bir telefon numarası giriniz.';

    return '';

}
