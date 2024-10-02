import { StyleSheet, ScrollView } from 'react-native';

import HorizontalScroll from '@/components/HorizontalScroll';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '@/components/SearchBar';

export default function HistoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <ThemedView style={styles.titleRow}>
          <ThemedText style={styles.title}>History</ThemedText>
        </ThemedView>

        <SearchBar />

      </ScrollView>
    </SafeAreaView>
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

