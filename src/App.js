import "./App.css";
import { AppContextProvider } from "./context";
import Layout from "./helpers/Layout";
import AllRoutes from "./helpers/routes";

function App() {
  return (
    <AppContextProvider>
      <Layout>
        <div className="App">
          <AllRoutes />
        </div>
      </Layout>
    </AppContextProvider>
  );
}

export default App;
