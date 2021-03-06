# Тестовое задание на позицию Frontend-разработчик

## ТЗ: Создать приложение для конвертации криптовалют.
### Две страницы:
### 1. Конвертер. 
- На странице поле ввода, в которое пользователь может вводить "2 btc in usd" и строка с расчетом.
### 2. Список из любых 10 криптовалют с указанием стоимости в USD/RUB
   
> - Будет плюсом красивый интерфейс и адаптивная верстка.
> - Для получения сведений используйте любое открытое API.
> - Используйте любые фреймворки и плагины, которые посчитаете нужными.




## Стек:
### Основа приложения: [Create React App](https://github.com/facebook/create-react-app)
+ Typescript: [https://www.typescriptlang.org/](https://typescriptlang.org/)


### Роутинг

+ React Router v6: [https://reactrouter.com/](https://reactrouter.com/)

### Стилизация компонентов

+ Material UI: [https://mui.com/](https://mui.com/)

### Линтер
+ ESLint: [https://eslint.org/](https://eslint.org/)

### Crypto-API
+ CryptoCompare [https://www.cryptocompare.com/](https://cryptocompare.com/)


## Для запуска:
1. `git clone https://github.com/Armgordon/test-warpoint.git`
2. `npm install`
3. `npm start`

## Комментарии
+ Получение данных с сервера. 
  + Ввиду того, что АPI не предоствляет набор данных по единому запросу - fetch данных вынесен в отдельный модуль.
  + Логика получения данных включает в себя 2 запроса на сервер и слияние данных в единый массив сущностей.
+ Создание адаптивной таблицы.
  + В MaterialUI не решен вопрос адаптации таблиц под различные разрешения. Код описания адаптивной таблицы для размещения его внутри компонента достаточно громоздок, поэтому вспомогательный код вынесен в отдельный .sccc документ.
 

