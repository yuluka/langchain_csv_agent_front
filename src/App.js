import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./routes/Chat";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/chat" element={<Chat />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
