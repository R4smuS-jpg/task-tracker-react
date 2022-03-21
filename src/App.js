import React from 'react';
import {
	Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
		<div>
			<Routes>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
				<Route path="/" element={<Home/>}></Route>
      </Routes>
		</div>
  );
}

export default App;
