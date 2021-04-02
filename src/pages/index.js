import React, { Component } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { ReactTypeformEmbed } from "react-typeform-embed";

const tweets = [
  {
    id: 0,
    username: "StefanDGeorge",
    html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Soon creating AMM strategies for <a href="https://twitter.com/Uniswap?ref_src=twsrc%5Etfw">@Uniswap</a> and <a href="https://twitter.com/BalancerLabs?ref_src=twsrc%5Etfw">@BalancerLabs</a> will become a full-time job.</p>&mdash; Stefan George 🦉 Hiring Core Devs for OpenEthereum (@StefanDGeorge) <a href="https://twitter.com/StefanDGeorge/status/1374437805112270855?ref_src=twsrc%5Etfw">March 23, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
  },
  {
    id: 1,
    username: "QwQiao",
    html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Trickle-down economics:<br><br>Central bank -&gt; commercial banks -&gt; asset managers -&gt; Bitcoin -&gt; Ethereum -&gt; DeFi -&gt; NFT</p>&mdash; Qiao Wang (@QwQiao) <a href="https://twitter.com/QwQiao/status/1371217013729792004?ref_src=twsrc%5Etfw">March 14, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
  },
  {
    id: 3,
    username: "beautyofhelin",
    html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;m paying in 100$ gas fee for 50$ transaction on Uniswap<br><br>WTF !!! <br>Executing trade is more expensive than trade itself!😬😅<br><br>I’ll take 2 shots of vodka to that 🍋<a href="https://twitter.com/hashtag/Ethereum?src=hash&amp;ref_src=twsrc%5Etfw">#Ethereum</a> <a href="https://twitter.com/search?q=%24Eth&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$Eth</a> <a href="https://twitter.com/hashtag/Gasfee?src=hash&amp;ref_src=twsrc%5Etfw">#Gasfee</a> <a href="https://twitter.com/hashtag/Defi?src=hash&amp;ref_src=twsrc%5Etfw">#Defi</a> <a href="https://twitter.com/search?q=%24Btc&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$Btc</a> <a href="https://t.co/Qvejso9kGn">pic.twitter.com/Qvejso9kGn</a></p>&mdash; Helin ÜLKER (@beautyofhelin) <a href="https://twitter.com/beautyofhelin/status/1355736907657981959?ref_src=twsrc%5Etfw">January 31, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
  },
  {
    id: 4,
    username: "econoar",
    html: `<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">What may seem easy to a lot of us, looks like rocket science to many. <br><br>Do your best to help educate newcomers to ethereum. The <a href="https://twitter.com/ethStaker?ref_src=twsrc%5Etfw">@ethStaker</a> community is doing a great job for eth2. <a href="https://t.co/TsBYi0mCtq">pic.twitter.com/TsBYi0mCtq</a></p>&mdash; eric.eth (@econoar) <a href="https://twitter.com/econoar/status/1336168310983905280?ref_src=twsrc%5Etfw">December 8, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
  },
];

const KoalaReasons = [
  {
    id: 0,
    heading: "Risk Assessment",
    desc:
      "You can diversify your portfolio into several DeFi strategies with different 💰 yield and 🚥 risks.",
  },
  {
    id: 1,
    heading: "Delegate Management",
    desc:
      "You can delegate the management of your 💼  portfolio to third parties like a 👨‍💼 broker, a 🏢 financial institution or a 🙍🏽‍♀️ friend.",
  },
  {
    id: 2,
    heading: "Strategies",
    desc: "Users can create their own 🔃 strategies. It’s open, secure & easy.",
  },
  {
    id: 3,
    heading: "Less gas ⛽️",
    desc:
      "We created batch-transaction, so 1️⃣ manager can make 1️⃣ transaction with 🎳 many users",
  },
];

const SurveyModel = ({ isOpen, onClose }) => (
  <div
    className={`modal ${
      isOpen ? "opacity-100" : "pointer-events-none none opacity-0"
    }  fixed w-full h-full top-0 left-0 flex items-center justify-center z-30`}
  >
    <div
      className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50 z-10"
      onClick={onClose}
    ></div>
    <div className="modal-container flex flex-col bg-white w-11/12 md:max-w-lg mx-auto rounded shadow-lg z-50 overflow-y-auto">
      <div className="flex py-2 px-4 flex justify-end">
        <button onClick={onClose} className="font-gt text-xs text-gray-350">
          Close
        </button>
      </div>
      <div class="modal-content bg-white  text-left w-full mx-auto">
        <ReactTypeformEmbed
          style={{ height: "500px", width: "100%", position: "relative" }}
          url="https://form.typeform.com/to/GVCzFy"
        />
      </div>
    </div>
  </div>
);

class IndexPage extends Component {
  state = {
    sur: false,
  };

  runSurvey = () => {
    this.setState({
      sur: true,
    });
  };

  onClose = () => {
    this.setState({
      sur: false,
    });
  };

  render() {
    return (
      <Layout>
        <SEO title="KoalaDAO - Delegate Yield Aggregator" />
        <SurveyModel onClose={this.onClose} isOpen={this.state.sur} />
        <div className="py-3 w-screen text-center text-sm font-gt bg-green-900 font-bold text-white">
          Stay tuned, upcoming days with big news...
        </div>
        <div className="">
          <div className="max-w-screen-lg  mx-auto pt-12 md:pt-32">
            <div className="flex justify-center">
              <div className="w-full md:w-2/3  text-center px-6 md:px-0">
                <div className="flex flex-row items-center justify-center md:w-1/3 w-1/2 mx-auto mb-12">
                  <img
                    alt="KoalaDAO Logo"
                    className="h-16 text-gray-900"
                    src={require("../assets/images/k.svg")}
                  />
                  <p className="text-gray-900 font-sans font-tl font-semibold">
                    KoalaDAO
                  </p>
                </div>
                <h1 className="w-full text-3xl md:text-5xl text-gray-900 font-gt ">
                  Delegated <br /> Yield Aggregator
                </h1>
                <p className=" font-gt text-base md:text-lg text-gray-800 leading-relaxed tracking-wide letter">
                  KoalaDAO is the next gen managment layer for yield strategies
                  in the DeFi world{" "}
                </p>
                <div className="flex flex-col mt-8 align-center justify-center">
                  <div>
                    <button
                      onClick={this.runSurvey}
                      className="bg-green-900 underline px-6 py-3 text-base rounded-sm  font-gt font-regular mt-4 text-white ml-1"
                    >
                      Request access
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 mt-12 md:mt-32 py-12 md:pt-32 md:pb-24 steps--container">
            <div className="max-w-screen-lg mx-auto">
              <div className="flex steps-section justify-center ">
                <div className="md:w-1/2 px-6 md:px-0">
                  <h3 className=" text-2xl text-center md:text-3xl font-bold text-white leading-relaxed font-gt">
                    Why are we building KoalaDAO
                  </h3>
                  <div className="steps-area ">
                    {KoalaReasons.map((step) => (
                      <div class="step__item active">
                        <span class="step__item-number font-gt text-white"></span>
                        <div class="step__item-content">
                          <span className="font-gt text-xl md:text-2xl mb-4 block text-white font-bold">
                            {step.heading}
                          </span>
                          <p className="font-gt text-white desc-bg">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24 text-center">
            <h2 className="font-gt md:text-5xl text-green-900">
              Community Based
            </h2>
            <p className="font-gt text-green-900 tracking-wide">
              With this last year of DeFi on fire 🔥 we collected many user
              feedback
            </p>
            <div className="mt-12 md:mt-24 px-4 md:px-0 max-w-screen-sm md:max-w-screen-lg mx-auto flex flex-row flex-wrap justify-center">
              {tweets.map((tweet) => (
                <div key={tweet.id} className="w-full md:w-1/2 px-4 mb-8">
                  <div
                    className=""
                    dangerouslySetInnerHTML={{ __html: tweet.html }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className=" mt-12 md:mt-32 text-center bg-gray-900 p-12 md:py-32 strokes-bg">
            <div className="max-w-screen-md mx-auto px-6 md:px-2">
              <h2 className="text-3xl md:text-4xl font-gt text-white">
                KoalaDAO is getting ready <br />
              </h2>
              <p className="font-gt text-white  leading-relaxed tracking-wide">
                DeFi is reinventing traditional financial services as open and
                transparent protocols. Protocols allow for faster innovation and
                permissionless integration which drive efficiencies that
                ultimately deliver more value to people. But DeFi still requires
                technical expertise and has become exclusionary as a result. We
                are here to help newcomers & advanced users.
              </p>
              <button
                onClick={this.runSurvey}
                className="bg-white hover:bg-gray-200 px-6 py-3 text-base rounded-lg mt-8 font-gt font-bold text-green-900"
              >
                Request Access
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
