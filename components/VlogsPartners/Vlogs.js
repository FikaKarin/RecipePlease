import React from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

const YouTubeVideos = () => {
  const videos = [
    {
      id: 1,
      title: 'Video 1',
      thumbnail: 'https://img.youtube.com/vi/T-1uZLzQeb8/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=T-1uZLzQeb8&t=3s',
    },
    {
      id: 2,
      title: 'Video 2',
      thumbnail: 'https://img.youtube.com/vi/ah7qeA0oUAE/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=ah7qeA0oUAE',
    },
    {
      id: 3,
      title: 'Video 3',
      thumbnail: 'https://img.youtube.com/vi/mq_N6Uk1yjY/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=mq_N6Uk1yjY',
    },
    {
      id: 4,
      title: 'Video 4',
      thumbnail: 'https://img.youtube.com/vi/XGkMBpmYlYg/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=XGkMBpmYlYg',
    },
    {
      id: 5,
      title: 'Video 5',
      thumbnail: 'https://img.youtube.com/vi/CfACBO_tT_4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=CfACBO_tT_4',
    },
    {
      id: 6,
      title: 'Video 6',
      thumbnail: 'https://img.youtube.com/vi/5EITj6TIHOU/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=5EITj6TIHOU',
    },
  ];

  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView horizontal={true}>
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 4,
          borderLeftWidth: 0.5,
          borderBottomWidth: 0.8,
          borderTopWidth: 0.5,
          borderRightWidth: 0.0,
        }}
      >
        {videos.map((video) => (
          <TouchableOpacity
            key={video.id}
            onPress={() => handlePress(video.url)}
          >
            <Image
              source={{ uri: video.thumbnail }}
              style={{ width: 200, height: 150, margin: 10 }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default YouTubeVideos;
