import {useAuth} from '@/core';
import {Home} from '@/screens';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';

export type AppStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const GoBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center mr-2">
      <View className="w-5 h-5 items-center scale-75">
        <View className="w-0.5 h-3 bg-gray-900 absolute top-0 left-2 rotate-45" />
        <View className="w-0.5 h-3 bg-gray-900 absolute bottom-0 left-2 -rotate-45" />
      </View>
    </TouchableOpacity>
  );
};

const SignOut = () => {
  const signOut = useAuth.use.signOut();

  return (
    <Pressable onPress={signOut}>
      <Text className="text-red-500">Sign Out</Text>
    </Pressable>
  );
};

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerLeft: () => <GoBack />,
          headerRight: () => <SignOut />,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Players List',
            headerTitleStyle: {color: '#505f96'},
            headerStyle: {
              backgroundColor: 'rgb(243 232 255)', // set your desired background color here
            },
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
