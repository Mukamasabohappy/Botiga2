import React from "react";
import "../Dashboard/Dashboard_Styles/RecentOrder.css";

const RecentOrder = () => {
  const orders = [
    { id: 1, img: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-category-8-1.jpg.webp", name: "Electronics", productId: "id#9001", quantity: 20, price: "$120.00", time: "19-11-2016 03:09:08", customer: "Patricia J. King", status: "Pending" },
    { id: 2, img: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-category-3.jpg.webp", name: "Gadget", productId: "id#9002", quantity: 12, price: "$190.00", time: "29-12-2016 01:23:11", customer: "Rachel J. Wicker", status: "Delivered" },
    { id: 3, img: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-alexa-420x420.jpg.webp", name: "Amazon Alexa", productId: "id#9003", quantity: 23, price: "$690.00", time: "12-12-2016 11:12:28", customer: "Michael K. Ledford", status: "Delivered" },
    { id: 4, img: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-category-9.jpg.webp", name: "Watch", productId: "id#9004", quantity: 34, price: "$650.00", time: "23-12-2016 09:08:55", customer: "Michael K. Ledford", status: "Delivered" },
  ];

  return (
    <div className="recent-orders">
      <h3>Recent Orders</h3>
      <div className="filter-options">
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Item Name</th>
            <th>Product Id</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Time</th>
            <th>Customer</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td><img src={order.img} alt={order.name} /></td>
              <td>{order.name}</td>
              <td>{order.productId}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              <td>{order.time}</td>
              <td>{order.customer}</td>
              <td className={order.status.toLowerCase()}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="view-details">View Details</button>
    </div>
  );
};

export default RecentOrder;
