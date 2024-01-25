import {
  View,
  Text,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import {Player} from '../../api';

export default function PlayerCard({
  player,
  onPress,
}: Readonly<{
  player: Player;
  onPress?: (event: GestureResponderEvent) => void;
}>) {
  return (
    <TouchableOpacity
      className="mb-2 p-4 bg-white rounded-2xl flex-row items-center"
      onPress={onPress}>
      <Image
        source={{uri: 'https://picsum.photos/100'}}
        className="rounded-xl w-16 h-16 mr-3"
      />
      <View className="flex-1">
        <View className="flex-row">
          <Text className="text-lg">{player.first_name} </Text>
          <Text className="text-lg">{player.last_name}</Text>
        </View>
        <Text className="text-sm text-gray-600">{player.team.full_name}</Text>
      </View>
      <TouchableOpacity>
        <View className="w-5 h-5 items-center scale-75">
          <View className="w-0.5 h-3 bg-gray-500 absolute top-0 right-0 -rotate-45" />
          <View className="w-0.5 h-3 bg-gray-500 absolute bottom-0 right-0 rotate-45" />
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
