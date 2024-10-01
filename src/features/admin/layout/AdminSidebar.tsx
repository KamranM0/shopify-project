import { Divider, Menu, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import Title from "antd/es/typography/Title";
import CustomButton from "../../../ui/CustomButton";
import { Link } from "react-router-dom";
type SidebarProps = {
  selectedMenuItem: string;
};
const items = [
  {
    key: "dashboard",
    label: <Link to="dashboard">Dashboard</Link>,
  },
  { key: "products", label: <Link to="products">Products</Link> },
  { key: "categories", label: <Link to="categories">Categories</Link> },
  { key: "orders", label: <Link to="orders">Orders</Link> },
  {
    key: "analytics",
    label: <Link to="analytics">Analytics and reporting</Link>,
  },
  { key: "settings", label: <Link to="settings">Settings</Link> },
];
function AdminSidebar({ selectedMenuItem }: SidebarProps) {
  return (
    <Sider width="20%" style={{ background: "#101010", padding: "2px" }}>
      <Space style={{ margin: "20px" }} direction="vertical">
        <Title level={3}>Welcome, Admin</Title>
        <CustomButton type="primary">Log out</CustomButton>
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
