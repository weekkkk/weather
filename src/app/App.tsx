import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { RootStoreContext } from "./contexts";
import { RootStore } from "./stores";
import { HeaderLayout, MainLayout } from "./layouts";

function App() {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <HeaderLayout />
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </RootStoreContext.Provider>
  );
}

export default App;
