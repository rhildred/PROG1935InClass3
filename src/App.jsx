import Index from "./Index";
import Detail from "./Detail";

export default function App() {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has("code")) {
    const sCode = urlParams.get("code");
    // add your code here to fill in the detail page
    return <Detail code={sCode} />;
  }
  else {
    const sCategory = urlParams.get("s");
    // add your code here to fill in search/index page
    return <Index category={sCategory} />;
  }
}