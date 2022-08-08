import "../../styles/globals.css";
import NavBar from "../components/layout/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <NavBar>
      <Component {...pageProps} />
    </NavBar>
  );
}

export default MyApp;
