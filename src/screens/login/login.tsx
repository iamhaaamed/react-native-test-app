import {zodResolver} from '@hookform/resolvers/zod';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import * as z from 'zod';

import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Alert,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '@/core';
import {useSingIn} from '@/api';

const schema = z.object({
  username: z.string().min(1, {message: 'Username is required'}),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;

export const Login = () => {
  const {navigate} = useNavigation();
  const signIn = useAuth.use.signIn();
  const {mutate, isPending} = useSingIn();

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormType) => {
    console.log(data);
    mutate(
      {...data},
      {
        onSuccess: d => {
          signIn({access: d.token, refresh: ''});
        },
        onError: e => {
          Alert.alert('Error', e.message);
        },
      },
    );
  };

  return (
    <View className="flex-1 items-center justify-center bg-blue-950">
      <View
        className={`rounded-full justify-center bg-slate-500 w-3/4 mb-4 ${
          Platform.OS === 'ios' ? 'p-4' : ' px-2'
        }`}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              className="text-white"
              placeholder="Username"
              placeholderTextColor={'#bbb'}
              onBlur={onBlur}
              onChangeText={v => onChange(v)}
              value={value}
              autoCapitalize={'none'}
            />
          )}
          name="username"
          defaultValue=""
        />
      </View>

      {errors.username && (
        <Text className="text-red-500 mb-3">{errors.username.message}</Text>
      )}

      <View
        className={`rounded-full justify-center bg-slate-500 w-3/4 mb-4 ${
          Platform.OS === 'ios' ? 'p-4' : ' px-2'
        }`}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              className="text-white"
              placeholder="Password"
              placeholderTextColor={'#bbb'}
              secureTextEntry
              onBlur={onBlur}
              onChangeText={v => onChange(v)}
              value={value}
              autoCapitalize={'none'}
            />
          )}
          name="password"
          defaultValue=""
        />
      </View>

      {errors.password && (
        <Text className="text-red-500 mb-3">{errors.password.message}</Text>
      )}

      <TouchableOpacity
        disabled={isPending}
        className={`w-3/4 items-center justify-center bg-amber-700 rounded-full p-4 mb-4 mt-6 ${
          isPending && 'bg-gray-200/10'
        }`}
        onPress={handleSubmit(onSubmit)}>
        <Text className="text-white font-bold">
          {isPending ? <ActivityIndicator /> : 'LOGIN'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Register')}>
        <Text className="text-white">Register</Text>
      </TouchableOpacity>
    </View>
  );
};
