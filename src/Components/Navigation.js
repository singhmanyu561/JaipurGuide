import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // eslint-disable-next-lineLink
} from "react-router-dom";

import Register from './MyPages/Register';
import Login from './MyPages/Login';
import HotelBooking from './MyPages/HotelBooking';
import HotelBooking2 from './MyPages/HotelBooking2';
import Package from './MyPages/Packages';
import PackageBooking from './MyPages/PackageBooking'
//===========================================================================================================
import Home from './Home';
import Hotels from './Hotels/Hotels';
import Malls from './Malls/Malls';
import Museums from './Museums/Museums';
import Monuments from './Monuments/Monuments';
import Travels from './Travels/Travels';
import Religious from './Religious/Religious';


//=============================================Museums==========================================================

import AlbertHall from './Museums/AlbertHall'
import AnokhiMuseum from './Museums/AnokhiMuseum'
import HawaMahal from './Museums/HawaMahal'
import GemNJewellery from './Museums/GemNJewellery'
import Amrapali from './Museums/Amrapali'
import WaxMuseum from './Museums/WaxMuseum'
import SculpturePark from './Museums/SculpturePark'
import LegaciesMuseum from './Museums/LegaciesMuseum'


//=============================================Monuments========================================================

import AbhaneriStepFall from './Monuments/AbhaneriStepFall'
import AmerFort from './Monuments/AmerFort'
import BirlaTemple from './Monuments/BirlaTemple'
import CityPalace from './Monuments/CityPalace'
import JaigarhFort from './Monuments/JaigarhFort'
import JalMahal from './Monuments/JalMahal'
import JantarMantar from './Monuments/JantarMantar'
import NahargarhFort from './Monuments/NahargarhFort'


//=============================================Hotels==============================================================

import FernResidency from './Hotels/FernResidency'
import GrandChanakya from './Hotels/GrandChanakya'
import HiltonJaipur from './Hotels/HiltonJaipur'
import JaiMahal from './Hotels/JaiMahal'
import PearlPalaceHeritage from './Hotels/PearlPalaceHeritage'
import RadisonBlue from './Hotels/RadisonBlue'
import RambaghPalace from './Hotels/RambaghPalace'
import TridentJaipur from './Hotels/TridentJaipur'

//============================================Malls================================================================

import CityMall from './Malls/CityMall'
import CrystalCourt from './Malls/CrystalCourt'
import Elements from './Malls/Elements'
import GTCentralMall from './Malls/GTCentralMall'
import MGFMetropolitian from './Malls/MGFMetropolitan'
import PinkSquare from './Malls/PinkSquare'
import TritonMall from './Malls/TritonMall'
import WTP from './Malls/WTP'


//===========================================Religious==============================================================

import AksharDhamTemple from './Religious/AksharDhamTemple'
import BirlaMandir from './Religious/BirlaMandir'
import GaltajiTemple from './Religious/GaltajiTemple'
import GarhGanesh from './Religious/GarhGanesh'
import GovindDevjiTemple from './Religious/GovindDevjiTemple'
import MotiDongriTemple from './Religious/MotiDongriTemple'
import ShilaDeviMandir from './Religious/ShilaDeviMandir'
import SunTemple from './Religious/SunTemple'
import TarkeshwarMahadev from './Religious/TarkeshwarMahadev'

//=================================================Travels==============================================================


import AirTaxi from './Travels/AirTaxi'
import Bicycle from './Travels/Bicycle'
import CamelSafari from './Travels/CamelSafari'
import HorseBackRiding from './Travels/HorseBackRiding'
import JeepSafari from './Travels/JeepSafari'
import Tongas from './Travels/Tongas'
import VintageCar from './Travels/VintageCar'

//================================================Dashboard================================================================

import DashboardHome from '../dashboard/DashboardHome'
import HotelDetails from '../dashboard/HotelDetails'
import PackageDetails from '../dashboard/PackageDetails'
import UserQuery from '../dashboard/UserQuery'
import UserDetails from '../dashboard/UserDetails'



const Navigation = () =>{

    return (
        <>
            <Router>
                <Switch>
                   
                    <Route path="/Museums">
                        <Museums />
                    </Route>
                    <Route path="/Hotels">
                        <Hotels />
                    </Route>
                    <Route path="/Malls">
                        <Malls />
                    </Route>
                    <Route path="/Monuments">
                        <Monuments />
                    </Route>
                    <Route path="/Travels">
                        <Travels />
                    </Route>
                    <Route path="/Religious">
                        <Religious />
                    </Route>

                    {/*===============================================Museums=============================================*/}


                    <Route path="/AlbertHall">
                        <AlbertHall />
                    </Route>
                    <Route path="/AnokhiMuseum">
                        <AnokhiMuseum />
                    </Route>
                    <Route path="/HawaMahal">
                        <HawaMahal />
                    </Route>
                    <Route path="/WaxMuseum">
                        <WaxMuseum />
                    </Route>
                    <Route path="/GemNJewellery">
                        <GemNJewellery />
                    </Route>
                    <Route path="/Amrapali">
                        <Amrapali />
                    </Route>
                    <Route path="/LegaciesMuseum">
                        <LegaciesMuseum />
                    </Route>
                    <Route path="/SculpturePark">
                        <SculpturePark />
                    </Route>

                    {/*==============================================Malls=============================================*/}

                    <Route path="/CityMall">
                        <CityMall />
                    </Route>
                    <Route path="/CrystalCourt">
                        <CrystalCourt />
                    </Route>
                    <Route path="/Elements">
                        <Elements />
                    </Route>
                    <Route path="/GTCentralMall">
                        <GTCentralMall />
                    </Route>
                    <Route path="/MGFMetropolitian">
                        <MGFMetropolitian />
                    </Route>
                    <Route path="/PinkSquare">
                        <PinkSquare />
                    </Route>
                    <Route path="/TritonMall">
                        <TritonMall />
                    </Route>
                    <Route path="/WTP">
                        <WTP />
                    </Route>


                    {/*==========================================Monuments=============================================*/}

                    <Route path="/AbhaneriStepFall">
                        <AbhaneriStepFall />
                    </Route>
                    <Route path="/AmerFort">
                        <AmerFort />
                    </Route>
                    <Route path="/BirlaTemple">
                        <BirlaTemple />
                    </Route>
                    <Route path="/CityPalace">
                        <CityPalace />
                    </Route>
                    <Route path="/JaigarhFort">
                        <JaigarhFort />
                    </Route>
                    <Route path="/JalMahal">
                        <JalMahal />
                    </Route>
                    <Route path="/JantarMantar">
                        <JantarMantar />
                    </Route>
                    <Route path="/NahargarhFort">
                        <NahargarhFort />
                    </Route>


                    {/*==============================================Hotels=============================================*/}

                    <Route path="/FernResidency">
                        <FernResidency />
                    </Route>
                    <Route path="/GrandChanakya">
                        <GrandChanakya />
                    </Route>
                    <Route path="/HiltonJaipur">
                        <HiltonJaipur />
                    </Route>
                    <Route path="/JaiMahal">
                        <JaiMahal />
                    </Route>
                    <Route path="/PearlPalaceHeritage">
                        <PearlPalaceHeritage />
                    </Route>
                    <Route path="/RadisonBlue">
                        <RadisonBlue />
                    </Route>
                    <Route path="/RambaghPalace">
                        <RambaghPalace />
                    </Route>
                    <Route path="/TridentJaipur">
                        <TridentJaipur />
                    </Route>


                    {/*===========================================Religious=============================================*/}

                    <Route path="/AksharDhamTemple">
                        <AksharDhamTemple />
                    </Route>
                    <Route path="/BirlaMandir">
                        <BirlaMandir />
                    </Route>
                    <Route path="/GaltajiTemple">
                        <GaltajiTemple />
                    </Route>
                    <Route path="/GarhGanesh">
                        <GarhGanesh />
                    </Route>
                    <Route path="/GovindDevjiTemple">
                        <GovindDevjiTemple />
                    </Route>
                    <Route path="/MotiDongriTemple">
                        <MotiDongriTemple />
                    </Route>
                    <Route path="/ShilaDeviMandir">
                        <ShilaDeviMandir />
                    </Route>
                    <Route path="/SunTemple">
                        <SunTemple />
                    </Route>
                    <Route path="/TarkeshwarMahadev">
                        <TarkeshwarMahadev />
                    </Route>


                    {/*===========================================Travels=============================================*/}

                    <Route path="/AirTaxi">
                        <AirTaxi />
                    </Route>
                    <Route path="/Bicycle">
                        <Bicycle />
                    </Route>
                    <Route path="/CamelSafari">
                        <CamelSafari />
                    </Route>
                    <Route path="/HorseBackRiding">
                        <HorseBackRiding />
                    </Route>
                    <Route path="/JeepSafari">
                        <JeepSafari />
                    </Route>
                    <Route path="/Tongas">
                        <Tongas />
                    </Route>
                    <Route path="/VintageCar">
                        <VintageCar />
                    </Route>

                    {/* ============================================Dashboard============================================= */}
                   
                    <Route path="/DashboardHome">
                        <DashboardHome />
                    </Route>
                    <Route path="/HotelDetails">
                        <HotelDetails />
                    </Route>
                    <Route path="/PackageDetails">
                        <PackageDetails />
                    </Route>
                    <Route path="/UserDetails">
                        <UserDetails />
                    </Route>
                    <Route path="/UserQuery">
                        <UserQuery />
                    </Route>


                    {/*========================================Home=============================================== */}
                    <Route path="/Register">
                        <Register />
                    </Route>

                    <Route path="/Package">
                        <Package />
                    </Route>

                    <Route path="/PackageBooking">
                        <PackageBooking />
                    </Route>

                    <Route path="/HotelBooking">
                        <HotelBooking />
                    </Route>

                    <Route path="/HotelBooking2">
                        <HotelBooking2 />
                    </Route>

                    <Route path="/Login">
                        <Login />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                    
                </Switch>
            </Router>

        </>

    );
}


export default Navigation;