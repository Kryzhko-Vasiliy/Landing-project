import replace from "gulp-replace";  //поиск и замена
import plumber from "gulp-plumber";    //Обработка ошибок
import notify from "gulp-notify";   //Сообщение (подсказки)
import browsersync from "browser-sync";  //Локальный сервер
import newer from "gulp-newer";     //Проверка обновления
import ifPlugin from "gulp-if";     //Условное ветвление

//экспортируем обьект
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if:ifPlugin
}