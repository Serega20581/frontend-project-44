### Hexlet tests and linter status:
[![Actions Status](https://github.com/Serega20581/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Serega20581/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/8a882168b0a893a55e11/maintainability)](https://codeclimate.com/github/Serega20581/frontend-project-44/maintainability)

### Подготовка проекта к работе:
- Для начала нужно проверить установлен ли ***nodejs*** с версией не ниже ***20.11.1***. Для проверки версии пропишите в терминале ```node -v```, если версия старая, не подходящая для требования, то обновите её.
- Для обовления версии ***nodejs***, пропишите в терминале данную команду:\
```sudo apt update```\
      ```sudo apt upgrade```\
      ```sudo apt install -y curl```\
      Данные команды позволят обновить вашу систему и установит ***curl**. Далее пропишите
      ```curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -```\
      Также пропишите ```sudo apt install -y nodejs```, теперь нужно  прописать ```node -v```, что бы убедиться что
      версия ***nodejs*** обновлённая.
- Далее пропишите команду ```make -v```, для того чтобы убедиться что у вас установлена утилита ***make***, если её нет, то установите.
- Установка утилиты ***make*** с помощью команды прописанной в терминале: ```sudo apt-get install make```.
- На следующем этапе подключаем все зависимости с помощью команды ```make install```
- И наконец выдайте всем файлам в директории ***bin*** права на запуск. Пропишите в корне проекта, для каждой игры ```chmod +x bin/brain-(имя игры).js```
### Запуск игр:
При условии что все шаги идеально выполнены поэтапно, прописываете в терминале ```brain-(имя игры)``` и запускаете игру.

<h1>Описание проекта:</h1>
<p>В данном проекте было реализовано 5 логических мини-игр, написанных на языке JavaScript.</p>

<h2>Описание игр:</h2>

<p>1. <b>brain-even</b> - игра включает в себя проверку числе на четность, игроку выводится случайное число ,и,ему надо определить является ли оно четным,или нет.</p>
<p>2. <b>brain-calc</b> - игра-калькулятор выводит случайный математическое выражение, после чего игрок должен дать ответ на данное пример.</p>
<p>3. <b>brain-gcd</b> - игра выводит два случайных числа и предлагает игроку найти их <ins>наибольший общий делитель (НОД)</ins>.</p>
<p>4. <b>brain-progression</b> - игра включается в себя арифмитическую прогрессию чисел с одним пропущенным элементом, предлагая пользователю определить значение данного элемента.</p>
<p>5. <b>brain-prime</b> - игра выводит случайное число и предлагает игроку определить, является ли оно простым.</p>

<h3>Демонстрация игр на работоспособность:</h3>

#### 1. [Brain-even asciinema](https://asciinema.org/a/wjUUKHGPqZhR5PGC9KpPWWmC0)

#### 2. [Brain-calc asciinema](https://asciinema.org/a/6oHoB54XxKDpj941f9qOzM5tS)

#### 3. [Brain-gcd asciinema](https://asciinema.org/a/gdtBAIVpbGchOh9C3UNX9toOZ)

#### 4. [Brain-progression asciinema](https://asciinema.org/a/yzHVFCS8mka51PmY3yCikx2x9)

#### 5. [Brain-prime asciinema](https://asciinema.org/a/rRqC1yTKoseEZHD03AKyfdhD1)
