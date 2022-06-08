import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import UserAuth from "./pages/user-auth/UserAuth";

function App() {
  return (
    <div className="app-wrapper">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserAuth />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
