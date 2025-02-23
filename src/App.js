import { Mainfile } from "./components";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Python DL, ML & DSA Code Hub | Explore & Learn</title>
        <meta name="description" content="Explore Python implementations of Deep Learning (DL), Machine Learning (ML), and Data Structures & Algorithms (DSA). Perfect for learners and developers." />
        <meta name="keywords" content="Python, Deep Learning, Machine Learning, Data Structures, Algorithms, AI, Neural Networks, Code Implementations" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Mainfile />
    </>
  );
}

export default App;
