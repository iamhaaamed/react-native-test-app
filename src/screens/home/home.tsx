import React, {useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {Player, usePlayers} from '../../api';
import PlayerModal from './player-modal';
import PlayerCard from './player-card';

export const Home = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | undefined>();

  const closeModal = () => {
    setSelectedPlayer(undefined);
  };

  const {data, isLoading, fetchNextPage, isFetchingNextPage} = usePlayers({
    select: d => ({
      ...d,
      pages: d.pages.flatMap(page => page.data),
    }),
  });

  const handleLoadMore = () => {
    if (!isLoading && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const renderFooter = () => {
    if (isLoading) {
      return (
        <View className="my-10">
          <ActivityIndicator size="small" color="gray" />
        </View>
      );
    }

    return null;
  };

  const renderItem = ({item}: {item: Player}) => {
    return <PlayerCard player={item} onPress={() => setSelectedPlayer(item)} />;
  };

  return (
    <View className="flex-1 p-4 bg-purple-100">
      <PlayerModal
        selectedPlayer={selectedPlayer}
        visible={!!selectedPlayer}
        onRequestClose={closeModal}
      />
      <FlatList
        data={data?.pages}
        renderItem={renderItem}
        keyExtractor={index => index.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.9}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};
