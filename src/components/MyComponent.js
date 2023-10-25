function Mycomponent() {
  const name = "Himanshu";

  const showMessage = () => {
    return "Hello. This is a message from ShowMessage function";
  };

  return (
    <div>
      <h2>
        This is my {name} {10 + 20} {showMessage()}
      </h2>
    </div>
  );
}
export default Mycomponent;
