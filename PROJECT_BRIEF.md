### React Native Env Setup

Please follow instruction in `Setting up the development environment`

- [React Native Get Start](https://reactnative.dev/)
- [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)

### Run on IOS (M1 Chip)

1. Remove exisitng Podfile.lock, Pods folder, build and .xcworkspace file
2. Uninstall node_modelus and install again
3. Use the folllowing instruction for pod instalation

Mac M1 architecture is not directly compatible with Cocoapods. If you encounter issues when installing pods, you can solve it by running:

- sudo arch -x86_64 gem install ffi
- arch -x86_64 pod install

These commands install the ffi package, to load dynamically-linked libraries and let you run the pod install properly, and runs pod install with the proper architecture.
[Read More](https://reactnative.dev/docs/environment-setup)

If Non of above did not work please copy and create new terminal and Open it using _Rosetta_

### Run on android (M1 Chip)

1. Please check your android home path is set with zsh, bash ..etc
2. Home path for android

```
export ANDROID_HOME=/Users/$USER/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

#### Developer Tools And Env

- Xcode (Version 13.3)
- Android Studio (Chipmunk | 2021.2.1)
- macOS 12.3.1
- VSCode (Version: 1.67.1)
  1. Extenstions: ESLint
  2. Extenstions: Prettier - Code formatter
  3. React-Native/React/Redux snippets for es6/es7
- Node (v14.17.3)
- Npm (6.14.13)

#### Third party libraries

| library                                                               | Summary                                                                                                                                                                     |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ESlint](https://eslint.org/)                                         | Easy way to identify developer mistake.                                                                                                                                     |
| [Prettier](https://prettier.io)                                       | Help you to format your code.                                                                                                                                               |
| [Husky](https://typicode.github.io/husky)                             | Help you to lint your commit messages, run tests, lint code, etc... when you commit or push.                                                                                |
| [prop-types](https://www.npmjs.com/package/prop-types)                | Runtime type checking for React props and similar objects.                                                                                                                  |
| [Config variables](https://www.npmjs.com/package/react-native-config) | Help you to work with same env variables set in native android ios or inside react native javascript code.                                                                  |
| [React Navigation](https://reactnavigation.org)                       | Routing and navigation for your React Native apps, based on new React Native Navigation API. ['How to' Guide &rarr;](https://reactnavigation.org/docs/getting-started.html) |
| [Jest](https://jestjs.io)                                             | Jest is a JavaScript test runner, that help you to ensure correctness of any JavaScript codebase                                                                            |
| [Enzyme](https://enzymejs.github.io/enzyme/)                          | Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output                                     |

Other support libraries

- eslint-config-prettier - Prevent prettier and eslint conflicts

#### Understanding the File Structure

```
gif-react-native-thuyiya
│
└───src
│   └───assets
│   │   └───fonts
│   │   └───images
│   │       └───icons
│   └───components
│   └───constants
│   └───contexts
│   └───hooks
│   └───models
│   └───navigations
│   └───scenes
│   └───services
│   └───styles
│   └───utils
│   │   App.js
│   │
│
│   .eslintrc
│   .editorconfig
│   index.js
│   app.json
```

#### Overall app architecture

1. Separate Individual Components
   - age-badge
   - gif-card
   - icon
   - notification-bar
   - page-layout
   - progressive-image
   - search-bar
   - search-grid-item
   - skeleton
2. Create Aliases
   - All the following folders you can acces using defined alies
   ```
   {
        "_assets": "./src/assets",
        "_contexts": "./src/contexts",
        "_hooks": "./src/hooks",
        "_constants": "./src/constants",
        "_models": "./src/models",
        "_components": "./src/components",
        "_navigations": "./src/navigations",
        "_scenes": "./src/scenes",
        "_services": "./src/services",
        "_styles": "./src/styles",
        "_utils": "./src/utils"
    }
   ```
3. Sort The Imports
    - Seprate export to make it easy import
4. Component props validation
    - This will help you to validate props 
5. Separate The Styles
    - Common style guide separation like `size`, `spacing` and `colors`
    - Keep the style file inside of the component
6. Create Components as Hook
    - All the project compoent buid as hooks
7. State Manage
    - Use react context to share state between components
8. Testing
    - Used Snapshot test and Unit testing
9. Progressive Image Load
    - load immediately first with a low resolution
10. Style and Prettier guide
    - Prettier and Eslint help to improve code readability
11. Work with both Android and IOS platform
    - When delivering a feature, Test the application run with both android and ios platform
    - Test the application on real devices

#### Get Started

1. create `.env.development` and `.env.production` file with

```
API_TOKEN=
BASE_URL=
```

2. For run the project execute these command `npm run ios` or `npm run android` in your root directory

- If you found any problems with running commnd with ios or android feel free to run the project using xcode and android studio

##### Documented By _Thusitha Jayalath_
