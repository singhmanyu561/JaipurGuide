import React from 'react';
import SearchAppBar from './MyPages/SearchAppBar';
import SearchAppBarLogout from './MyPages/SearchAppBarLogout';
import JaipurIntro from './MyPages/JaipurIntro';
// import Navigation from './Navigation'


const Home = () => {




    return (
        <>
            <div style={{}}>

                {console.log(typeof(localStorage.getItem('login')))}
                
                {localStorage.getItem('login') === 'true' ? <SearchAppBarLogout /> : <SearchAppBar /> }
                <JaipurIntro />
                

            </div>


        </>
    );
}


export default Home;