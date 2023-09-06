import { FlatList, Pressable, Text, View, useColorScheme } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Record from '../components/Record';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { BASE_URL, PUBLIC_KEY } from '@env';

interface MetaData {
  url: string;
}
interface MediaArray {
  'media-metadata': [MetaData];
}

interface RecordData {
  id: string;
  title: string;
  byline: string; // added this for subtitle
  media: [MediaArray]; // added this for uri
  published_date: string;
  source: string; // added this as it was used in the Record component
}

interface FetchResult {
  results: RecordData[];
}

interface ArticlesListViewProps {
  navigation: DrawerNavigationProp<any, any>;
}

const ArticlesListView: React.FC<ArticlesListViewProps> = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [data, setData] = useState<RecordData[]>([]); // Explicit type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null); // Explicit type

  useEffect(() => {
    fetch(
      BASE_URL +
        '/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=' +
        PUBLIC_KEY
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result: FetchResult) => {
        setData(result.results); // Extracting 'results' from the fetched data
        setLoading(false);
      })
      .catch((error: Error) => {
        console.log(
          BASE_URL +
            '/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=' +
            PUBLIC_KEY
        );
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}
    >
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>{error.message}</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigation.navigate('Article_Details', {
                  article: {
                    ...item,
                    customUrl: item.media?.[0]?.['media-metadata']?.[0]?.url,
                  },
                });
              }}
            >
              <Record
                title={item.title}
                byLine={item.byline}
                imageUrl={item.media?.[0]?.['media-metadata']?.[0]?.url}
                date={item.published_date}
                source={item.source}
              />
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default ArticlesListView;
