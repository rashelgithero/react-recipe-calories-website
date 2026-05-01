import { useEffect, useState } from "react";
import Recipe from "../recipe/Recipe";
import WantToCook from "../recipe/wantToCook/WantToCook";

const Recipies = () => {
    const [recipies, setRecipies] = useState([]);
    useEffect(() => {
        fetch('recipies.json')
            .then(res => res.json())
            .then(data => setRecipies(data))
    }, []);
    const [cook, setCook] = useState([]);
    const [count, setCount] = useState(0);
    const [cooking, setCooking] = useState([]);
    const [currentlyCooking, setCurrentlyCooking] = useState(0);
    const [alreadyCook, setAlreadyCook] = useState(false);
    const handlePreparing = (itemCooking) => {
        setCook(cook.filter(item => item.recipe_name !== itemCooking.recipe_name));
        setCooking(preCooking => [...preCooking, itemCooking]);
        setCount(preCount => preCount - 1);
        setCurrentlyCooking(preCurrentlyCooking => preCurrentlyCooking + 1);

    }
    const handleWantToCook = (recipe) => {
        const isExist = cook.find(item => item.recipe_name === recipe.recipe_name);
        if (!isExist) {
            setCook(preCook => [...preCook, recipe]);
            setCount(preCount => preCount + 1);
            setAlreadyCook(false)
        }
        else {
            setAlreadyCook(true)
        }
    };

    return (
        <section className="text-center my-16 space-y-6">
            <h2 className="text-4xl font-semibold text-[#150B2B]">Our Recipes</h2>
            <p className="w-full lg:max-w-2/3 mx-auto p-5 lg:p-0 text-[#150B2B99] text-base font-normal">Explore a variety of delicious and healthy recipes crafted to suit every taste and lifestyle.Find easy-to-make meals, track calories, and enjoy cooking with confidence every day.</p>
            <div className="flex w-full flex-col md:flex-row relative gap-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full md:w-1/2 lg:w-2/3 px-16 md:px-0">
                    {
                        recipies.map((recipe, idx) => <Recipe recipe={recipe} handleWantToCook={handleWantToCook} alreadyCook={alreadyCook} setAlreadyCook={setAlreadyCook} key={idx}></Recipe>)
                    }
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-5 md:px-0 mt-10 md:mt-0">
                    <WantToCook count={count} cook={cook} handlePreparing={handlePreparing} cooking={cooking} currentlyCooking={currentlyCooking}></WantToCook>
                </div>
            </div>
        </section>
    );
};

export default Recipies;