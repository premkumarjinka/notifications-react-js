const Notification = (props) => {
  //  Write your code here.
  const { className, children } = props;
  return <p className={className} children={children}></p>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading" className="heading">
      Notifications
    </h1>
    <div className="information-container">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="informationClass"
        children="Information Message"
      />
    </div>
    <div className="success-container">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification className="successClass" children="Success Message" />
    </div>
    <div className="warning-container">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification className="warningClass" children="Warning Message" />
    </div>
    <div className="error-container">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
      <Notification className="errorClass" children="Error Message" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
