import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { RootStoreContext } from "./contexts";
import { RootStore } from "./stores";

function App() {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <RouterProvider router={router} />
    </RootStoreContext.Provider>
  );
}

export default App;
