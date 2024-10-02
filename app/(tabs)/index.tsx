import { StyleSheet, ScrollView } from 'react-native';

import HorizontalScroll from '@/components/HorizontalScroll';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '@/components/SearchBar';

export default function HomeScreen() {
  const eventsData =
    [
      {
        title: 'Auckland', images:
          [
            { title: 'Image 1', url: 'https://picsum.photos/100/200' },
            { title: 'Image 2', url: 'https://picsum.photos/200/400' },
            { title: 'Image 3', url: 'https://picsum.photos/300/600' },
            { title: 'Image 4', url: 'https://picsum.photos/400/800' }
          ]
      },
      {
        title: 'Canterbury', images:
          [
            { title: 'Image 1', url: 'https://picsum.photos/150/300' },
            { title: 'Image 2', url: 'https://picsum.photos/250/500' },
            { title: 'Image 3', url: 'https://picsum.photos/350/700' },
            { title: 'Image 4', url: 'https://picsum.photos/450/900' }
          ]
      },
      {
        title: 'Christchurch', images:
          [
            { title: 'Image 1', url: 'https://picsum.photos/120/240' },
            { title: 'Image 2', url: 'https://picsum.photos/220/440' },
            { title: 'Image 3', url: 'https://picsum.photos/320/640' },
            { title: 'Image 4', url: 'https://picsum.photos/420/840' }
          ]
      },
    ]

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <ThemedView style={styles.titleRow}>
          <ThemedText style={styles.title}>FOTION</ThemedText>
        </ThemedView>

        <SearchBar />

        {eventsData.map(item => (
          <ThemedView style={styles.scrollContainer} key={item.title}>
            <ThemedText style={styles.subtitle}>{item.title}</ThemedText>
            <HorizontalScroll title={item.title} images={item.images}
            />
          </ThemedView>
        ))}

      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  scrollContainer: {
    gap: 5,
    marginBottom: 20,
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
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 5,
  },
  verticalContent: {
    height: 200,
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

