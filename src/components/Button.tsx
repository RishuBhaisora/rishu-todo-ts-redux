

const Button = (props:any) => {
  let themeClasses = "bg-yellow-400 rounded-md text-white text-xl";
  if (props.theme === "secondry") {
    themeClasses = " bg-green-400 rounded-md text-white ";
  }
  if (props.theme === "third") {
    themeClasses = " bg-yellow-400 rounded-full  text-white ";
  }

  if (props.theme === "fourth") {
    themeClasses = " bg-white rounded-md  ";
  }

  return (
    <>
      <button
        onClick={props.onClick}
        className={"p-2  border  font-bold " + themeClasses}
      >
        {props.input}
      </button>
    </>
  );
};
export default Button;
