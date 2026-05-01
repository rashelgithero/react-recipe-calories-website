import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";
import { useEffect } from "react";

const Recipe = ({ recipe, handleWantToCook, alreadyCook, setAlreadyCook }) => {
    const { recipe_name, recipe_image, short_description, ingredients, calories, preparing_time } = recipe;
    useEffect(() => {
        if (alreadyCook) {
            const timer = setTimeout(() => {
                setAlreadyCook(false)
            }, 5000);
            return () => clearTimeout(timer)
        }
    }, [alreadyCook, setAlreadyCook])
    console.log(alreadyCook)
    return (
        <section>
            <div id="recipe" className="flex flex-col items-between justify-start border-[#28282833] border-2 rounded-2xl p-5 h-175 gap-6 relative w-full mx-auto" >
                <img className=" w-full h-48 rounded-2xl" src={recipe_image} alt="" />
                <h2 className="text-xl font-semibold text-[#150B2B] ">{recipe_name}</h2>
                <p className="text-[#878787] font-fira text-base font-normal text-start">{short_description}</p>
                <div className="text-start w-full border-y-[#28282833] border-y-2 py-2">
                    <h3 className="font-medium text-lg">Ingredients : {ingredients.length}</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 w-full my-5 content-between">
                        {ingredients.map((item, i) => (
                            <table key={i}>
                                <tr className="text-sm font-normal text-[#150B2B99]">
                                    <td className="px-1 text-black font-black"> # </td>
                                    <td><li>{item}</li></td>
                                </tr>
                            </table>
                        ))}
                    </div>
                </div>
                <div className="flex space-x-10">
                    <div className="flex items-center space-x-2">
                        <IoMdTime />
                        <p> {preparing_time}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <AiOutlineFire />
                        <p>{calories}</p>
                    </div>
                </div>
                <button onClick={() => handleWantToCook(recipe)} className="btn btn-success rounded-3xl px-5 w-2/3 absolute right-0 left-0 mx-auto bottom-5">Want to Cook</button>
                <div className={`toast toast-top toast-end ${alreadyCook ? 'block' : 'hidden'}`}>
                    <div class="alert alert-info flex flex-col">
                        <span className="text-black font-bold">Already Exists</span>
                        <progress class="progress w-56 bg-linear-to-r from-red-500    to-amber-200 font-bold transition-colors 5s"></progress>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recipe;