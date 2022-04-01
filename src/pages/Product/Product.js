import Loader from "../../components/Loader";
import { useEffect, useMemo } from "react";
import Message from "../../components/Message";
import { useTable, useRowSelect } from "react-table";
import { COLUMNS, toastMessage } from "../../utils";
import Checkbox from "../../components/Checkbox";
import { AiOutlineDelete, AiOutlinePlus, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/actions/productActions";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ loading, error, products }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    success,
    loading: deleteLoading,
    error: deleteError,
  } = useSelector((state) => state.productDelete);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => products, [products]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            name: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );
  useEffect(() => {
    if (success) {
      dispatch(getProducts());
    }
  }, [dispatch, success]);

  const handleDeleteProducts = () => {
    const selected_row = selectedFlatRows.map((row) => row.original._id);
    if (selected_row.length > 0) {
      dispatch(deleteProduct(selected_row));
      toastMessage("success", "Product has been deleted successfully");
    } else {
      toastMessage("error", "Please select a product");
    }
  };
  const handleEditProduct = () => {
    // edit only one row at a time
    const selected_row = selectedFlatRows.map((row) => row.original.slug);
    if (selected_row.length > 1) {
      toastMessage("error", "Oops! You can only edit one product at a time");
    } else if (selected_row.length < 1) {
      toastMessage("error", "Please select a product to edit");
    } else {
      navigate(`/product/edit/${selected_row[0]}`);
    }
  };

  return (
    <>
      <div>
        {loading && <Loader fullPage={true} />}
        {error && <Message type="danger" message={error} />}
        {!loading && products && (
          <div className="table-responsive shadow p-2 my-4">
            <table
              className="table table-striped table-hover"
              {...getTableProps()}
            >
              <thead className="thead-dark">
                {headerGroups.map((headerGroup) => (
                  <tr className="small" {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th scope="col" {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows?.map((row) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className="p-0 small font-weight-bold"
                    >
                      {row?.cells?.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {deleteLoading && <Loader smallPage={true} />}
      {deleteError && <Message type="danger" message={deleteError} />}
      <div className="my-1 d-flex">
        <Link
          className="btn btn-primary mr-3 my-2 d-flex align-items-center small"
          to="/product/create"
        >
          <AiOutlinePlus className="mr-1" /> Add Product
        </Link>

        <button
          type="button"
          className="btn btn-danger ml-3 my-2  d-flex align-items-center small"
          onClick={handleDeleteProducts}
        >
          <AiOutlineDelete className="mr-1" />
          Delete Products
        </button>
        <button
          type="button"
          className="btn btn-danger ml-3 my-2  d-flex align-items-center small"
          onClick={handleEditProduct}
        >
          <AiFillEdit className="mr-1" />
          Edit Product
        </button>
      </div>
    </>
  );
};

export default Product;
