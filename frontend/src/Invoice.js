import jsPDF from "jspdf";

export const downloadInvoice = (
  order
) => {

  const doc = new jsPDF();

  doc.setFontSize(24);
  doc.text(
    "Shopping.ly Invoice",
    20,
    20
  );

  doc.setFontSize(14);

  doc.text(
    `Product: ${order.name}`,
    20,
    60
  );

  doc.text(
    `Price: Rs. ${order.price}`,
    20,
    80
  );

  doc.text(
    `Quantity: ${order.quantity}`,
    20,
    100
  );

  doc.text(
    `Total: Rs. ${
      order.price *
      order.quantity
    }`,
    20,
    120
  );

  doc.text(
    `Date: ${
      order.orderDate ||
      new Date()
        .toLocaleDateString()
    }`,
    20,
    140
  );

  doc.text(
    "Payment Status: Paid",
    20,
    160
  );

  doc.text(
    "Thank you for shopping!",
    20,
    200
  );

  doc.save(
    `invoice-${order.name}.pdf`
  );
};