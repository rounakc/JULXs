import React, { useEffect ,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetProducts } from "../../apicalls/products";
import { SetLoader } from "../../redux/loadersSlice";
import { message ,Button} from "antd";
import Divider from "../../components/Divider";
import { useNavigate } from "react-router-dom";
import Filters from "./Filters";
import Search from "./Search";
import moment from "moment";
import HomeShimmer from "./HomeShimmer";

function Home() {
  const [showFilters, setShowFilters] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  const [filters, setFilters] = React.useState({
    status: "approved",
    category: [],
    age: [],
  });
  const [error, setError]=React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [showProductForm, setShowProductForm] = React.useState(false);
  const [localLoading, setLocalLoading] = React.useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const { loading } = useSelector((state) => state.loaders);
  const getData = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await GetProducts(filters);
      dispatch(SetLoader(false));
      if (response.success) {
        setProducts(response.data);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [filters]);


  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setLocalLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading || localLoading) {
    return <HomeShimmer />;
  }
  return (
    <div className="flex gap-5">
      {showFilters && (
        <Filters
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          filters={filters}
          setFilters={setFilters}
        />
      )}
      <div className="flex flex-col gap-5 w-full">
        <div className="flex gap-5 items-center">
          {!showFilters && (
            <i
              className="ri-equalizer-line text-xl cursor-pointer"
              onClick={() => setShowFilters(!showFilters)}
            ></i>
          )}
          <Search  setproducts={setProducts} reloadData={getData} setError={setError} />
          {/* <input
            type="text"
            placeholder="Search Products  here..."
            className="border border-gray-300 rounded border-solid px-2 py-1 h-14 w-full"
          /> */}
        </div>
        {/* <div className="flex justify-end mb-2">
        <Button
          type="default"
          onClick={() => {
            setSelectedProduct(null);
            setShowProductForm(true);
          }}
        >
          Add Product
        </Button>
      </div> */}
        <div
          className={`
        grid gap-5 ${showFilters ? "grid-cols-4" : "grid-cols-5"}
      `}
        >
          {products?.map((product) => {
            return (
              <div
                className="border border-gray-300 rounded border-solid flex flex-col gap-2 pb-2 cursor-pointer"
                key={product._id}
                onClick={() => navigate(`/product/${product._id}`)}
              >
                <img
                  src={product.images[0]}
                  className="w-full h-52 p-2 rounded-md object-cover"
                  alt=""
                />
                <div className="px-2 flex flex-col">
                  <h1 className="text-lg font-semibold">{product.name}</h1>
                  <p className="text-sm">
                    {product.age} {' '}
                    {product.age === 1 ? " year" : " years"} {' '}
                    old
                  </p>
                  <Divider />
                  <span className="text-xl font-semibold text-green-700">
                  ₹ {product.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

