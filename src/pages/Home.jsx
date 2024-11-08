import { Link, Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
       <Helmet>
        <title>Gadget Heaven</title>
      </Helmet>
      <Header></Header>
      <div className="bg-[#F7F7F7]  min-h-screen">
        <div className="pt-[350px] container mx-auto ">
          <h1 className="text-3xl font-bold text-center py-5">
            Explore Cutting-Edge Gadgets
          </h1>
          <div className="flex  gap-10 py-5">
            <div className="w-[20%] ">
              <Categories categories={categories}></Categories>
            </div>
            <div className="w-[80%]">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
