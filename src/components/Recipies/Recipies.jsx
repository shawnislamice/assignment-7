import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import RecipeCart from "../ReciprCart/RecipeCart";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipies = () => {
  const [recipes, setRecipies] = useState([]);
  const [cart, setCart] = useState([]);
  const [preparing, setPreparing] = useState([]);

  useEffect(() => {
    fetch("recipies.json")
      .then((res) => res.json())
      .then((data) => setRecipies(data));
  }, []);

  const handleAddToCart = (recipe) => {
    const newCart = [...cart, recipe];
    const isExist=cart.find((item)=>item.recipe_id==recipe.recipe_id)
    if(!isExist){
      toast.success('Recipe Added Successfully')
      setCart(newCart);
    }else{
      toast.warn("This recipe is already in your cart")
    }
  };
  const handlePreparing = (item, id) => {
    const newPreparing = [...preparing, item];
    const newPreparing2 = cart.filter((item) => item.recipe_id !== id);
    toast.success('Added to Currently Cooking')
    setPreparing(newPreparing);
    setCart(newPreparing2);
  };

  return (
    <div>
      <div className="font-lexend my-8 md:my-20">
        <h1 className="text-center text-[#150B2B] text-3xl">Our Recipes</h1>
        <p className="mt-4 text-center block mx-auto md:w-2/3 leading-6 text-[#150B2B99]">
          Rowse through our extensive collection of delicious dishes, discover
          new flavors, and unleash your inner chef. Join our vibrant community
          of food enthusiasts and embark on a culinary adventure like never
          before.Lets get cooking!
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-between md:mb-20 mb-10">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 md:gap-6 md:w-[63%]">
          {recipes.map((recipe, index) => (
            <Recipe
              recipe={recipe}
              handleAddToCart={handleAddToCart}
              key={index}
            ></Recipe>
          ))}
        </div>
        <div className="md:w-[34%] ">
          <RecipeCart
            cart={cart}
            handlePreparing={handlePreparing}
            preparing={preparing}
            handleDelete={handleAddToCart}
          ></RecipeCart>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

Recipies.propTypes = {
  recipes: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};
export default Recipies;
