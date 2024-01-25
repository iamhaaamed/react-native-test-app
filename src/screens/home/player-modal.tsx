import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  NativeSyntheticEvent,
} from 'react-native';
import {Player} from '../../api';

export default function PlayerModal({
  visible,
  selectedPlayer,
  onRequestClose,
}: Readonly<{
  visible?: boolean;
  selectedPlayer?: Player;
  onRequestClose?: (event: NativeSyntheticEvent<any>) => void;
}>) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onRequestClose}>
      <TouchableOpacity
        className="flex-1 justify-center items-center bg-black/50"
        onPress={onRequestClose}>
        <TouchableOpacity
          activeOpacity={1}
          className="bg-white p-5 cursor-none flex-1 w-3/4 my-20 rounded-lg">
          <TouchableOpacity onPress={onRequestClose} className="self-end">
            <Text className="text-red-500">X</Text>
          </TouchableOpacity>

          <View className="justify-center flex-row">
            <Text className="font-bold text-lg">
              {selectedPlayer?.first_name}{' '}
            </Text>
            <Text className="font-bold text-lg">
              {selectedPlayer?.last_name}
            </Text>
          </View>

          <Image
            source={{uri: 'https://picsum.photos/100'}}
            className="w-full h-40 rounded-xl my-5"
            resizeMode="cover"
          />

          <View className="justify-center">
            <View className="flex-row">
              <Text className="font-bold">Team name: </Text>
              <Text>{selectedPlayer?.team.full_name}</Text>
            </View>

            <View className="flex-row">
              <Text className="font-bold">Team city: </Text>
              <Text>{selectedPlayer?.team.city}</Text>
            </View>

            {selectedPlayer?.position ? (
              <View className="flex-row">
                <Text className="font-bold">Position: </Text>
                <Text>{selectedPlayer?.position}</Text>
              </View>
            ) : null}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}
