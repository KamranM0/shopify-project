import { Divider, Menu, message, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import Title from "antd/es/typography/Title";
import CustomButton from "../../../ui/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../api/apiSlice";
type SidebarProps = {
  selectedMenuItem: string;
};
const items = [
  {
    key: "dashboard",
    label: <Link to="dashboard">Dashboard</Link>,
  },
  { key: "products", label: <Link to="/admin/products">Products</Link> },
  { key: "categories", label: <Link to="/admin/categories">Categories</Link> },
  { key: "users", label: <Link to="/admin/users">Users</Link> },
  { key: "orders", label: <Link to="/admin/orders">Orders</Link> },
  {
    key: "analytics",
    label: <Link to="/admin/analytics">Analytics and reporting</Link>,
  },
  { key: "settings", label: <Link to="/admin/settings">Settings</Link> },
];
function AdminSidebar({ selectedMenuItem }: SidebarProps) {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const onLogout = async () => {
    try {
      await logout().unwrap();
      message.success("Logged out successfully.");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Sider width="20%" style={{ background: "#101010", padding: "2px" }}>
      <Space style={{ margin: "20px" }} direction="vertical">
        <Title level={3}>Welcome, Admin</Title>
        <CustomButton type="primary" onClick={onLogout}>
          Log out
        </CustomButton>
      </Space>
      <Divider />
      <Menu
        style={{ background: "" }}
        defaultSelectedKeys={[`${selectedMenuItem}`]}
        items={items}
      ></Menu>
    </Sider>
  );
}

export default AdminSidebar;
