import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import Router from './src/Navigations/Router';



// import RentScreen from './src/Screens/RentScreen/RentScreen';

// import {
//   Colors
// } from 'react-native/Libraries/NewAppScreen';

// import Home from './src/Screens/Home/Home';
// import SearchResults from './src/Screens/SıeachResults/SearchResults';


// import Post from './src/Components/Post/Post';
// import post from './Assets/post';
// import SearchDestination from './src/Screens/SearchDestination/SearchDestination'
// const post1 = post[0]
// const post2 = post[1]

// import Router from './src/Navigations/Router'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <Router/>
  );
}

export default App;
