import { NavLink, useLocation } from "react-router-dom";

const Categories = ({ categories }) => {
  const {pathname}=useLocation()
  console.log(pathname);

  const isAllProduct =()=>pathname==="/"
  
  return (
    <div className="flex flex-col gap-5 bg-white p-5 rounded-2xl">
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
          className={({ isActive }) =>
            `btn rounded-full btn-ghost btn-lg ${
              isActive ? "bg-[#9538E2] text-white" : "bg-gray-300"
            } ${isAllProduct() && category.category === "All Products" && "!bg-[#9538E2] text-white"} `
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
