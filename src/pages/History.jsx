import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-quartz.css";
import "./history.css";
import { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const columnDefs = [
    { headerName: "Transaction ID", field: "_id" },
    { headerName: "Amount", field: "amount" },
    { headerName: "Payee", field: "payee" },
    { headerName: "Date", field: "date" },
    { headerName: "Status", field: "status" },
  ];
  const [rowData, setRowData] = useState([{ _id: "Toyota", amount: "Celica", payee: 35000 , date: 35000 , status: 35000 }]);
  const gridOptions = {
    getRowStyle: function(params) {
      return params.node.rowIndex % 2 === 0 ? { backgroundColor: '#40A2E34f' } : { backgroundColor: '#f3f4f6' };
    }
  }

  useEffect(() => {
    try {
      axios
        .put("http://localhost:8000/api/transactions/fetchTransactions", {
          headers: {
            Accept: "application/json",
          },
          body: {
            farmer: "65c8163e6bb04243ab2d923b",
          },
        })
        .then((data) => {
          console.log(data);

          const dataArray = Object.values(data.data);
          console.log(dataArray);
          console.log(typeof(data.data))
            setRowData(() => dataArray)
        })
        .catch((error) => {
          throw Error(error);
        });
    } catch (error) {
      console.error("Error", error.message);
    }
  }, []);

  return (
    <section className="history">
      <div className="header-details">
        <div>
          <h1>Hello, Dhruv</h1>
        </div>
        <div>
          <h3>Total Revenue</h3>
          <h2 style={{color: "#0D9276"}}>$500</h2>
        </div>
        <div>
          <h3>Total Debt</h3>
          <h2 style={{color: "#561C24"}}>$500</h2>
        </div>
      </div>
      <div
        className="ag-theme-quartz"
        style={{
          height: "500px",
          width: "100%",
        }}
      >
        <AgGridReact gridOptions={gridOptions} rowStyle={{}} columnDefs={columnDefs} rowData={rowData}></AgGridReact>
      </div>
    </section>
  );
};

export default History;
