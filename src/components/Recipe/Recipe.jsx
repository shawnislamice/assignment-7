import time from "../../assets/images/time.png";
import fire from "../../assets/images/fire.png";
import PropTypes from "prop-types";
const Recipe = ({ recipe, handleAddToCart }) => {
  const {
    recipe_image,
    calories,
    preparing_time,
    ingredients,
    short_description,
    recipe_name,
  } = recipe;
  return (
    <div className="hover:scale-105 duration-300 cursor-pointer md:w-[370px] recipe-card shadow-xl m-4  md:m-0 space-y-3 px-4 py-6">
      <div>
        <img
          className="block mx-auto w-[330px] h-[200px] rounded-xl"
          src={recipe_image}
          alt=""
        />
      </div>
      <h3 className="text-xl text-[#282828] font-lexend font-semibold pt-2">
        {recipe_name}
      </h3>
      <p className="text-[#878787] font-fira-sans leading-8">
        {short_description.slice(0, 60)}
      </p>
      <hr className="recipe-hr" />
      <h3 className="text-[#282828] text-[18px] font-lexend pb-3 ">
        Ingredients: {ingredients.length}
      </h3>
      <ul className="capitalize text-[#878787] space-y-3 font-fira-sans pl-6 pb-2">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr className="recipe-hr" />

      <div className="flex gap-7 items-center py-3">
        <div className="flex items-center gap-2">
          <img src={time} alt="" />
          <p className="text-[#282828CC] font-fira-sans">
            {preparing_time.slice(0, 3)} minutes
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img src={fire} alt="" />
          <p className="text-[#282828CC] font-fira-sans">
            {calories.slice(0, 3)} calories
          </p>
        </div>
      </div>
      <button
        onClick={() => handleAddToCart(recipe)}
        className="hover:bg-[#F00] duration-300 btn border-none outline-none rounded-full bg-[#0BE58A] px-6 my-3"
      >
        Want to Cook
      </button>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};
export default Recipe;
