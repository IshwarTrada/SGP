import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PaymentComponent from "./components/PaymentCoponent";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PaymentComponent />}>
      
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
