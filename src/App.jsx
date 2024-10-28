import TanstackQueryProvider from "./provider/TanstackQueryProvider";
import Router from "./router/Router";

function App() {
  return (
    <TanstackQueryProvider>
      <Router />
    </TanstackQueryProvider>
  );
}

export default App;
