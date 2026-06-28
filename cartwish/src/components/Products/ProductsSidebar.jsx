import React from "react";
import "./ProductsSidebar.css";
import LinkWithIcon from "../NavBar/LinkWithIcon";
import useData from "../../hooks/useData";

const ProductsSidebar = () => {
  const { data: categories, error } = useData(
    "/category",
    null,
    ["categories"],
    24 * 60 * 60 * 1000
  );

  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        {error && <em className="form_error">{error}</em>}
        {categories &&
          categories.map((category) => (
            <LinkWithIcon
              key={category._id}
              title={category.name}
              link={`/products?category=${category.name}`}
              sidebar={true}
              emoji={`http://localhost:5002/category/${category.image}`}
            />
          ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;
