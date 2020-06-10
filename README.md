

# Coś się kończy, coś zaczyna czyli Instalacja

Aby uzyskać dostęp do aplikacji, potrzebujemy najpierw posiadać zainstalowane api, (Node.js) a potem najzwyczajniej dodać ją do włączonego edytora kodu (polecany, Visual Studio Code), po czym potrzebujemy:

 - Włączyć terminal (skrót Ctrl+Shift+`)
 - Wpisać i aktywować komendę "npm install"
 - Poczekać aż zostaną ściągnięte automatycznie dodatkowe pliki, umożliwiające poprawne działanie aplikacji
 - Następnie, wpisać komendę "npm start" która zainicjuje odpalenie się dodatkowej karty, w naszej domyślnej przeglądarce. W wypadku gdy ta się nie otworzy, jest to "localhost:3000"


# I made an .App, not a tragedy.

Moja prosta aplikacja, stworzona przy użyciu głównie języków webowych i ich istniejących komponentów (html, css, jsc, node.js, react-js) służy wyświetlaniu prostych pomysłów na potrawy. Ściąga ona informacje z już istniejącej bazy internetowej, wyświetla nazwę, obrazek prezentujący (jeżeli jest zamieszczony) potrawę, jej kaloryczność, listę wymaganych składników oraz to, ile osób będziemy w stanie wyżywić z jednego przyrządzenia. Do tego, na dole wyświetla się też link do pełnego opisu, źródła oraz sposobu przyrządzania.

Aplikacja nie jest dostępna offline, oraz nie ma planów by taką ją czynić.


# Nie od razu aplikację (lub Rzym) zbudowano - coś o budowie.

**App.js** - Serce aplikacji, komponent zbierający dane ze strony internetowej (https://www.edamam.com/) znajduje się właśnie tutaj, oraz cała programistyczna magia która utrzymuje całość mojej prywatnej wieży Babel w formie zdatnej do użytku.

**Recipe.js** - Tutaj znajdziemy cały model strony, szkielet który trzyma całość funkcjonalności na własnych, w znoju ociosanych barkach. 

**App.css** - Tutaj znajdziemy komponenty odpowiedzialne za wygląd strony jako podstawy.

**recipe.module.css** - Tutaj znajdziemy elementy języka CSS odpowiedzialne za wygląd poszczególnych bloków, zawierających dane na temat przepisów.








------------------------------------------------------------------------------------------------------------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
