# 💿 Neon Beat | Музыкальный плеер

> Глитч, шум, неон и немного магии.  
> Веб-плеер, вдохновлённый атмосферой старых CD-дисков, ночных рейвов и цифрового хаоса.
> https://www.figma.com/design/LGECV03PUXfV3Fp27U0LSK/Untitled?node-id=18-51&t=ThxB0H4Z9bx4m3fJ-1

---
## Демонстрация 
  https://music-player-47e88.web.app

---

## 💡 Идея проекта

**Neon Beat** — это музыкальный плеер в эстетике 2000-х,  
где цифровое и живое пересекаются.  
Главная цель — создать ощущение старого проигрывателя,  
но с современными эффектами и плавными анимациями.

Здесь важно не только слушать музыку,  
но и чувствовать атмосферу — как будто запускаешь старый CD,  
и экран вспыхивает неоновыми бликами.

---

## 🧠 Концепт и вдохновение

Атмосфера проекта основана на:
- 💽 старых **CD-обложках** с кислотными цветами  
- 🪩 **неоновых клубах**, зеркалах, бликах, цепях  
- 📺 **глитч-эффектах**, шуме VHS и Y2K-графике  
- 🎧 ощущении “магии повседневного” — когда звук становится визуальным  

---

## 🧩 Основные функции (в процессе разработки)

- ▶️ Воспроизведение / пауза  
- ⏭️ Переключение треков  
- 🔊 Управление громкостью  
- 💿 Отображение обложек  
- 🌈 Анимация под ритм трека  
- ⚡ Минималистичный интерфейс без библиотек  

---

## 🖼️🎨 Moodboard

![Moodboard 1](https://github.com/user-attachments/assets/c191a339-e6df-4ed0-95ba-0638624c7685)

> Мудборд передаёт атмосферу — смесь неона, металла и glitch-энергии.  
> Всё крутится вокруг звука, света и цифровой эстетики.

---

## 🛠️ Используемые технологии

- **HTML5** — структура и аудиоплеер  
- **CSS3** — визуальные эффекты и анимации  
- **JavaScript (ES6)** — управление звуком и логикой  

---

## 👩‍💻 Команда

**Настя Демидасюк и Демчук Кристина**  
🎧 Разработка — JS, CSS, HTML  
🎨 Вдохновение — ночь, музыка и немного хаоса  

---
## USE-CASES
https://1drv.ms/w/c/b1c783ed48c4e249/EUszg1vq5G9EkJqoZjJxcFEBLh-8WG73MH83pkR10mtBww

---
## Структура проекта (Модульная архитектура):
<pre style="white-space: pre-wrap; word-break: break-word;">
src/
├─ modules/
│  ├─ landing/                  
│  │  ├─ pages/
│  │  │  └─ LandingPage.jsx      / Проверка токена + редирект
│  │  └─ components/
│  │     └─ Loader.jsx           
│  │
│  ├─ auth/                      / Авторизация и регистрация
│  │  ├─ pages/
│  │  │  ├─ LoginPage.jsx
│  │  │  └─ RegisterPage.jsx
│  │  ├─ components/
│  │  │  ├─ LoginForm.jsx
│  │  │  ├─ RegisterForm.jsx
│  │  │  └─ ConfirmCodeForm.jsx  
│  │  ├─ hooks/
│  │  │  └─ useAuth.js           / JWT, localStorage
│  │  └─ services/
│  │     └─ authApi.js           / register / confirmCode
│  │
│  ├─ music/                     / Музыка, жанры, альбомы
│  │  ├─ pages/
│  │  │  └─ HomePage.jsx
│  │  ├─ components/
│  │  │  ├─ TrackList.jsx
│  │  │  ├─ TrackItem.jsx
│  │  │  ├─ GenreList.jsx
│  │  │  └─ AlbumList.jsx
│  │  ├─ hooks/
│  │  │  └─ useMusic.js          / Загрузка треков и жанров
│  │  └─ services/
│  │     └─ musicApi.js
│  │
│  ├─ player/                    
│  │  ├─ components/
│  │  │  ├─ AudioPlayer.jsx
│  │  │  └─ PlayerControls.jsx
│  │  └─ hooks/
│  │     └─ usePlayer.js         
│  │
│  ├─ library/                   / Моя медиатека
│  │  ├─ pages/
│  │  │  └─ LibraryPage.jsx
│  │  ├─ components/
│  │  │  └─ LibraryList.jsx
│  │  ├─ hooks/
│  │  │  └─ useLibrary.js
│  │  └─ services/
│  │     └─ libraryApi.js
│  │
│  ├─ search/                    
│  │  ├─ components/
│  │  │  ├─ SearchBar.jsx
│  │  │  └─ SearchResults.jsx
│  │  ├─ hooks/
│  │  │  └─ useSearch.js
│  │  └─ services/
│  │     └─ searchApi.js
│  │
│  ├─ profile/                   / Профиль и настройки
│  │  ├─ pages/
│  │  │  └─ ProfilePage.jsx
│  │  ├─ components/
│  │  │  └─ ProfileSettings.jsx
│  │  ├─ hooks/
│  │  │  └─ useProfile.js
│  │  └─ services/
│  │     └─ profileApi.js
│  │
│  └─ pro/                       
│     ├─ components/
│     │  └─ BuyProButton.jsx
│     └─ services/
│        └─ paymentApi.js

├─ router/
│  └─ router.js                  / Все маршруты приложения

├─ shared/                       / Общее
│  ├─ api/
│  │  └─ apiClient.js
│  ├─ ui/
│  │  ├─ Button.jsx
│  │  ├─ Input.jsx
│  │  └─ Modal.jsx
│  └─ utils/
│     └─ helpers.js

</pre>


✨ ～♩～♬～♩～♬～♩～♬～♩～⚡
