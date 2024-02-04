import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../App.css";
import firebaselogo from "../../src/Images/1175544_firebase_google_icon.png";
import reddisLogo from "../../src/Images/202809_redis_icon.png";
const CuttingEdge = () => {
  return (
    <div className="flex flex-col  ">
      <div className="items-center flex flex-col justify-center  ">
        <p
          className="text-white w-full md:w-1/2 lg:w-1/4	 flex flex-wrap text-xl justify-center uppercase"
          style={{ color: "#AD44DC" }}
        >
          <span>INNOVATIVE.</span> <span>CREATIVE .</span> <span>RESULT </span>{" "}
          <span>ORIENTED</span>
        </p>
        <h1 className="text-white text-xl md:text-xl w-3/4	text-center lg:text-4xl mt-2 font-bold">
          We create cutting-edge website and software products to elevate your
          business with confidence.
        </h1>
      </div>

      <Tabs className={"py-12"}>
        <TabList
          className={"text-center custom-tabs"}
          style={{ border: "none" }}
        >
          <Tab style={{ fontSize: "1.3rem", fontWeight: "bold" }}>CMS </Tab>
          <Tab style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            Front end
          </Tab>
          <Tab style={{ fontSize: "1.3rem", fontWeight: "bold" }}>Database</Tab>
          <Tab style={{ fontSize: "1.3rem", fontWeight: "bold" }}>Backend</Tab>
          <Tab style={{ fontSize: "1.3rem", fontWeight: "bold" }}>Mobile</Tab>
        </TabList>

        <TabPanel>
          <div className="flex custom-tabs  justify-evenly  my-12">
            <div className=" 	 	py-2   	 ">
              <div className="flex justify-center items-center m-auto">
                <img
                  className="w-14 mr-2"
                  src="https://cdn-icons-png.flaticon.com/512/174/174881.png"
                  alt=""
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center font-bold">
                  WordPress
                </h2>
              </div>
            </div>
            <div className=" 		py-2 	    ">
              <div className="flex justify-center items-center m-auto">
                <img
                  className="w-14"
                  src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png"
                  alt=""
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center font-bold">
                  Shopify
                </h2>
              </div>
            </div>
            <div className=" 		py-2    	 ">
              <div className="flex justify-center items-center m-auto">
                <img
                  className="w-14"
                  src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/magento-512.png"
                  alt=""
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center font-bold">
                  Magento
                </h2>
              </div>
            </div>
            <div className=" 		py-2 	   ">
              <div className="flex justify-center items-center m-auto">
                <img
                  className="w-14"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968770.png"
                  alt=""
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center font-bold">
                  Wix
                </h2>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex custom-tabs  justify-evenly  my-12">
            <div className=" 	py-2 ">
              <div className="flex justify-center items-center m-auto">
                <img
                  className="w-14"
                  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png"
                  alt=""
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center	 font-bold  ">
                  Angular.js
                </h2>
              </div>
            </div>
            <div className=" 	py-2 ">
              <div className="flex justify-center items-center m-auto">
                <img
                  className="w-14"
                  src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png"
                  alt=""
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center	 font-bold ml-2  ">
                  React.js
                </h2>
              </div>
            </div>
            <div className=" 	py-2 ">
              <div className="flex justify-center items-center m-auto">
                <img
                  className="w-14"
                  src="https://img.icons8.com/color/144/vue-js.png"
                  alt="vue-js"
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center	 font-bold  ">
                  Vue
                </h2>
              </div>
            </div>
            <div className=" 	py-2 ">
              <div className="flex justify-center items-center m-auto">
                <img
                  className="w-14"
                  src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                  alt=""
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center	 font-bold  ">
                  Html5
                </h2>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex custom-tabs  justify-evenly  my-12">
            <div className="	py-2">
              <div className="flex justify-center items-center m-auto">
                <img
                  width="70"
                  height="20"
                  src="https://img.icons8.com/color/144/my-sql.png"
                  alt="mongodb"
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center	 font-bold  ">
                  MySql
                </h2>
              </div>
            </div>
            <div className="	py-2">
              <div className="flex justify-center items-center m-auto">
                <img
                  width="70"
                  height="20"
                  src="https://img.icons8.com/color/144/mongodb.png"
                  alt="mongodb"
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center	 font-bold  ">
                  MongoDb
                </h2>
              </div>
            </div>
            <div className="	py-2">
              <div className="flex justify-center items-center m-auto">
                <img className="w-14" src={firebaselogo} alt="" />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center	 font-bold  ">
                  Firebase
                </h2>
              </div>
            </div>
            <div className="	py-2">
              <div className="flex justify-center items-center m-auto">
                <img className="w-14" src={reddisLogo} alt="" />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center	 font-bold  ">
                  Redis
                </h2>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex custom-tabs  justify-evenly  my-12">
            <div className="	py-2">
              <div className="flex justify-center items-center m-auto">
                <img
                  width="70"
                  height="20"
                  src="https://www.freepnglogos.com/uploads/php-logo-png/php-logo-parental-advisory-explicit-content-logo-png-transparent-3.png"
                  alt="mongodb"
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center	 font-bold  ">
                  PHP
                </h2>
              </div>
            </div>
            <div className="	py-2">
              <div className="flex justify-center items-center m-auto">
                <img
                  width="70"
                  height="20"
                  src="https://img.icons8.com/fluency/48/java-coffee-cup-logo.png"
                  alt="mongodb"
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center	 font-bold  ">
                  Java
                </h2>
              </div>
            </div>
            <div className="	py-2">
              <div className="flex justify-center items-center m-auto">
                <img
                  className="w-14"
                  src="https://img.icons8.com/fluency/48/node-js.png"
                  alt=""
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center	 font-bold  ">
                  Node.js{" "}
                </h2>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex custom-tabs  justify-evenly  my-12">
            <div className="	py-2">
              <div className="flex justify-center items-center m-auto">
                <img
                  width="70"
                  height="20"
                  src="https://img.icons8.com/color/144/mac-os--v1.png"
                  alt="mongodb"
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center	 font-bold  ">
                  IOS
                </h2>
              </div>
            </div>
            <div className="	py-2">
              <div className="flex justify-center items-center m-auto">
                <img
                  width="70"
                  height="20"
                  src="https://img.icons8.com/color/144/android-os.png"
                  alt="mongodb"
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center	 font-bold  ">
                  Android
                </h2>
              </div>
            </div>
            <div className="	py-2">
              <div className="flex justify-center items-center m-auto">
                <img
                  width="70"
                  height="20"
                  src="https://img.icons8.com/color/144/react-native.png"
                  alt="mongodb"
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center	 font-bold  ">
                  {" "}
                  React Native
                </h2>
              </div>
            </div>
            <div className="	py-2">
              <div className="flex justify-center items-center m-auto">
                <img
                  className="w-14"
                  src="https://img.icons8.com/color/144/flutter.png"
                  alt=""
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center	 font-bold  ">
                  Flutter{" "}
                </h2>
              </div>
            </div>
            <div className="	py-2">
              <div className="flex justify-center items-center m-auto">
                <img
                  className="w-14"
                  src="https://img.icons8.com/color/144/swift.png"
                  alt=""
                />
                <h2 className="googlefont text-white text-2xl w-8/12 text-center	 font-bold  ">
                  Swift{" "}
                </h2>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CuttingEdge;
