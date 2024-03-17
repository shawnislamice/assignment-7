import PropTypes from "prop-types";
const RecipeCart = ({ cart, handlePreparing, preparing }) => {
  const totalTime = preparing.reduce((p, c) => {
    const timeSubstring = c.preparing_time.slice(0, 3);
    const timeInteger = parseInt(timeSubstring);
    return p + timeInteger;
  }, 0);
  const totalCalories = preparing.reduce((p, c) => {
    const timeSubstring = c.calories.slice(0, 3);
    const timeInteger = parseInt(timeSubstring);
    return p + timeInteger;
  }, 0);
  return (
    <div className="recipe-cart p-0 md:p-6 space-y-4 py-6 m-4 md:m-0">
      <div>
        <h1 className="text-center text-[#282828] font-lexend">
          Want to cook: {cart.length}
        </h1>
        <hr className="bg-[#878787] h-[1px] w-2/3 block mx-auto my-3 opacity-50" />
        <div className="w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="font-fira-sans text-[#878787] font-medium">
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody className="">
              {/* row 1 */}

              {/* row 2 */}
              {cart.map((item, index) => (
                <tr key={index} className="  bg-[#28282808] h-[100px]">
                  <th className="font-fira-sans text-[#282828CC]">
                    {index + 1}
                  </th>
                  <td className="text-[#282828B2] font-fira-sans">
                    {item.recipe_name}
                  </td>
                  <td className="text-[#282828B2] font-fira-sans">
                    {item.preparing_time}
                  </td>
                  <td className="text-[#282828B2] font-fira-sans">
                    {item.calories}
                  </td>
                  <button
                    onClick={() => {
                      handlePreparing(item, item.recipe_id);
                    }}
                    className=" mr-1 bg-[#0BE58A] text-[#150B2B] relative top-7  md:px-6 px-3 rounded-full border-none outline-none font-lexend py-3 font-semibold cursor-pointer"
                  >
                    Preparing
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h1 className="text-center text-[#282828] font-lexend md:pt-4 pt-2">
          Currently cooking: {preparing.length}
        </h1>
        <hr className="bg-[#878787] h-[1px] w-2/3 block mx-auto my-3 opacity-30" />
        
        <div className="w-full">
          <table className="table relative ">
            {/* head */}
            <thead>
              <tr className="font-fira-sans text-[#878787] font-medium">
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody className="">
              {/* row 1 */}

              {preparing.map((item, index) => (
                <tr key={index} className="bg-[#28282808]">
                  <th className="font-fira-sans text-[#282828CC]">
                    {index + 1}
                  </th>
                  <td className="text-[#282828B2] font-fira-sans">
                    {item.recipe_name}
                  </td>
                  <td className="text-[#282828B2] font-fira-sans">
                    {item.preparing_time}
                  </td>
                  <td className="text-[#282828B2] font-fira-sans">
                    {item.calories}
                  </td>
                </tr>
              ))}

              {/* row 2 */}
            </tbody>
          </table>
          <div className=" flex flex-col md:flex-row items-center gap-3 justify-between ml-0 md:ml-[120px] table-end  font-lexend font-semibold md:space-x-8 md:w-2/3 md:text-center text-start w-full py-4 md:px-0">
            <p className="">Total time:{totalTime} min</p>
            <p>Total calories:{totalCalories} calories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

RecipeCart.propTypes = {
  cart: PropTypes.array.isRequired,
  handlePreparing: PropTypes.func.isRequired,
  preparing: PropTypes.array.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};
export default RecipeCart;
