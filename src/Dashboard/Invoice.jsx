import React from "react";
import "../Dashboard/Dashboard_Styles/Invoice.css";

const Invoice = () => {
  const invoiceData = {
    invoiceId: "#id001",
    orderDate: "Oct 13, 2018",
    orderStatus: "Paid",
    customer: {
      name: "Nicolas Alexa",
      address: "6 Brickyard Street, Johnson City, TN 37601",
      phone: "234-50494-948",
    },
    items: [
      { id: 1, description: 'Acer Aspire A3114" laptop', quantity: 3, price: 530 },
      { id: 2, description: "Adata D10 8GB Desktop RAM", quantity: 5, price: 25 },
      { id: 3, description: "Dell 1TB 7.2K RPM Hard Drive", quantity: 2, price: 16 },
      { id: 4, description: "AMD Ryzen 9 3900X Processor", quantity: 1, price: 115 },
      { id: 5, description: "Antec NX100 Gaming Casing", quantity: 1, price: 75 },
      { id: 6, description: 'GIGASONIC 17" Square LED Monitor', quantity: 3, price: 30 },
    ],
    taxRate: 12, // 12% tax
  };

  const calculateTotal = () => {
    const subTotal = invoiceData.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const tax = (subTotal * invoiceData.taxRate) / 100;
    return { subTotal, tax, total: subTotal + tax };
  };

  const { subTotal, tax, total } = calculateTotal();

  return (
    <div className="invoice-container">
      <div className="invoice-box">
        {/* Header */}
        <div className="invoice-header">
          <h1 className="logo">Botiga</h1>
          <div className="invoice-details">
            <p><strong>Invoice ID:</strong> {invoiceData.invoiceId}</p>
            <p><strong>Order Date:</strong> {invoiceData.orderDate}</p>
            <p className="status"><strong>Order Status:</strong> <span>{invoiceData.orderStatus}</span></p>
          </div>
        </div>

        {/* Customer Info */}
        <div className="customer-info">
          <h3>INVOICE TO:</h3>
          <p><strong>{invoiceData.customer.name}</strong></p>
          <p>{invoiceData.customer.address}</p>
          <p><strong>Phone:</strong> {invoiceData.customer.phone}</p>
        </div>

        {/* Product Table */}
        <table className="invoice-table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Product Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>${item.quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total Calculation */}
        <div className="total-section">
          <p><strong>Sub Total:</strong> ${subTotal.toFixed(2)}</p>
          <p><strong>TAX ({invoiceData.taxRate}%):</strong> ${tax.toFixed(2)}</p>
          <p className="grand-total"><strong>Total:</strong> ${total.toFixed(2)}</p>
        </div>

        {/* Buttons */}
        <div className="invoice-buttons">
          <button className="btn print" onClick={() => window.print()}>🖨 Print</button>
          <button className="btn send">📧 Send Invoice</button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
