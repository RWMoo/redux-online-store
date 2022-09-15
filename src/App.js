import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUserToStore, removeUserFromStore } from "./redux/authSlice";
import Layout from "./components/Layout";
import Navigation from "./components/navigation/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TodoListsPage from "./pages/TodoListsPage";
import GroceryListPage from "./pages/GroceryListPage";
import AccountPage from "./pages/AccountPage";
import Loading from "./components/auth/loading";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isToast = useSelector((state) => state.toast);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUserToStore({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(removeUserFromStore());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/todo-list" element={<TodoListsPage />} />
          <Route path="/grocery-list" element={<GroceryListPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
      <Layout>
        {isLoading ? <Loading /> : null}
        <ToastContainer limit={3} autoClose={2500} position="bottom-center" />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
