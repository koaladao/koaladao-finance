import React, { Component } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

class CodeConduct extends Component {
  render() {
    return (
      <Layout>
        <SEO title="FAQs" />
        <section>
          <div className="max-w-screen-lg mx-auto">
            <h1>FAQs</h1>
          </div>
        </section>
      </Layout>
    );
  }
}

export default CodeConduct;
