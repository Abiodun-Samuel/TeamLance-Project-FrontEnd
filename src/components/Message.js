const Message = ({ type = "", message = "", children }) => {
  return (
    <>
      <div className={`alert alert-${type} fade show`} role="alert">
        {message && <p className="py-0 my-0 font-weight-bold">{message}</p>}
        {children && <p className="py-0 my-0 font-weight-bold">{children}</p>}
        {/* <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button> */}
      </div>
    </>
  );
};
// Message.defaultProps = {
//   variant: "info",
// };
export default Message;
