# React Native Test App

This React Native project focuses on implementing an authentication flow using [DummyJSON Auth API](https://dummyjson.com/docs/auth) and displaying a list of players from the [Balldontlie API](https://www.balldontlie.io/).

<p align="center" >
    <img title="Login" height='500' src="https://i.imgur.com/GXkq0ve.png">
    <img title="Home" height='500' src="https://i.imgur.com/hn3dwWk.png">
     <img title="Modal" height='500' src="https://i.imgur.com/xNrCuhw.png">
</p>

## key Features
-  [TypeScript](https://www.typescriptlang.org/) for type checking, to help you catch bugs and improve code quality.
-  A minimal UI kit built with [tailwindcss](https://www.nativewind.dev/), which provides a range of pre-defined classes for styling your app.
-  An auth flow with [zustand](https://github.com/pmndrs/zustand) and [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) as a storage solution to save sensitive data.
-  A simple workflow for building, releasing, and distributing your app using [Github action](https://github.com/features/actions).
-  [React Query](https://react-query.tanstack.com/) and [axios](https://github.com/axios/axios) for fetching data, to help you build efficient and performant apps.
-  A good approach for handling forms with [react-hook-form](https://react-hook-form.com/) and [zod](https://github.com/colinhacks/zod) for validation + keyboard handling.
-  Absolute Import and Path Alias — Import components using @/ prefix

##  Libraries used

- [React Navigation](https://reactnavigation.org/)
- [Nativewind](https://www.nativewind.dev/)
- [React Query](https://tanstack.com/query/v4)
- [Axios](https://axios-http.com/docs/intro)
- [React Hook Form](https://react-hook-form.com/)
- [zustand](https://github.com/pmndrs/zustand)
- [React Native MMKV](https://github.com/mrousavy/react-native-mmkv)



# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
