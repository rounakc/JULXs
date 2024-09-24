import React, { useEffect,useState } from "react";
import { Tabs } from "antd";
import Products from "./Products";
import Users from "./Users";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminShimmer from "./AdminShimmer";
function Admin() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const [localLoading, setLocalLoading] = useState(false);
  // eslint-disable-next-line

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/");
    }
  }, []);
  // useEffect(() => {
  //   if (!user || user.role !== "admin") {
  //     navigate("/");
  //   } else {
  //     // Simulate loading for 3 seconds
  //     const timer = setTimeout(() => {
  //       setLocalLoading(false);
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [user, navigate]);
  if (localLoading) {
    return <AdminShimmer />;
  }
  return (
    <div>
      <Tabs>
        <Tabs.TabPane tab="Products" key="1">
          <Products />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Users" key="2">
          <Users />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Admin;