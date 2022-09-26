import React from 'react';
// import Home from './Components/Home';
import Navigation from './Components/Navigation'
import ScrollButton from './Components/MyPages/ScrollButton'
import { Provider} from 'react-redux'
import store from './Store/Store'

const App = () => {

  store.subscribe(() => {
    localStorage.setItem('reduxStore', JSON.stringify(store.getState()));
    // console.log(store.getState().login.data.token)
  })


  return (
    <>

      <Provider store={store}>
        <Navigation />
        <ScrollButton />
      </Provider>
     
    
     
    </>
  );
}


export default App;