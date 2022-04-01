import { toast } from "react-toastify";

export const COLUMNS = [
  {
    Header: "Product Name",
    accessor: "name",
  },
  {
    Header: "Category Id",
    accessor: "category_id",
  },
  {
    Header: "Category Name",
    accessor: "category",
  },
  {
    Header: "Unit Price",
    accessor: "price",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Avalaible Since",
    accessor: "date",
  },
];

export const toastMessage = (type, message) => {
  if (type === "error") {
    toast.error(
      <div>
        <span className="toastify">{message}</span>
      </div>
    );
  }
  if (type === "warning") {
    toast.warning(
      <div>
        <span className="toastify">{message}</span>
      </div>
    );
  }
  if (type === "success") {
    toast.success(
      <div>
        <span className="toastify">{message}</span>
      </div>
    );
  }
};
