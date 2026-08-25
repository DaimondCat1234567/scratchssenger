const genTranslations = (language) => {
    switch (language) {
        case "russian":
            return {
                "login.label": "Вход",
                "login.button": "Войти",
                "login.regbutton": "Создать аккаунт",
                "register.label": "Регестрация",
                "register.button": "Зарегестрироваться",
                "register.loginbutton": "Войти в аккаунт"
            }
    }
}

export default genTranslations