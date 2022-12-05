import React, { Fragment } from "react";
import { Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import SubPosts from "./components/SubPosts";
import RecPosts from "./components/RecPosts";
import Profile from "./components/Profile";

import "./App.css";

function App() {
	return (
        <Fragment>
            <Header/>
            <Routes>
                <Route path="/" element={<RecPosts/>} />
                <Route path='/subposts' element={<SubPosts/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </Fragment>
  	);
};

export default App;
