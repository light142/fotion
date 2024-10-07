import { StyleSheet, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useEffect, useState } from 'react';
import ImageSlider from '@/components/ImageSlider';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
}

const EventDetails = () => {

  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("fetching data");
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const local = useLocalSearchParams();
  const eventData =
  {
    title: local.eventId + " Free Food",
    images:
      [
        "https://picsum.photos/300/200",
        "https://picsum.photos/600/400",
        "https://picsum.photos/900/600"
      ]
  };

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.titleRow}>
        <ThemedText style={styles.title}>{eventData.title}</ThemedText>
      </ThemedView>
      <ImageSlider images={eventData.images} />
      <ThemedView style={styles.titleRow}>

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ThemedView>
            <ThemedText>{item.title}</ThemedText>
          </ThemedView>
        )}
      />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default EventDetails;

