import ResourceHighlight from "../components/ResourceHighlight";
import Newsletter from "../components/Newsletter";
import ResouceList from "../components/ResourceList";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

import {resources }from "./api/data";

function Home() {
  return (
    <Layout>
      <ResourceHighlight resources={resources} />
      <Newsletter />
      <ResouceList resources={resources} />
      <Footer />
    </Layout>
  );
}

export default Home;
