import 'react-native-gesture-handler';

import React from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {hydrateAuth} from './src/core';
import {RootNavigator} from './src/navigation';
import {APIProvider} from './src/api';

hydrateAuth();

const App = () => {
  return (
    <GestureHandlerRootView className="flex-1">
      <APIProvider>
        <RootNavigator />
      </APIProvider>
    </GestureHandlerRootView>
  );
};

export default App;
