const WantToCook = ({ count, cook, handlePreparing, cooking, currentlyCooking }) => {

    return (
        <div className='flex flex-col items-between justify-start border-[#28282833] border-2 rounded-2xl gap-6 relative w-full mx-auto'>
            <div className="">
                <h2 className="text-2xl font-semibold mt-8 text-center border-b-[#28282833] border-b-2 w-2/3 pb-5 mx-auto">Want to Cook: {count}</h2>
                <table className='w-full mx-auto border-separate border-spacing-y-3 mb-8 px-1 rounded-lg' >
                    <thead className='p-3'>
                        <tr className='' >
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody className=' gap-7'>
                        {cook.map((item, idx) => (
                            <tr key={idx} className=' p-2 bg-[#28282808]'>
                                <td className="px-1 leading-5 py-2"> {item.recipe_name} </td>
                                <td className="px-1 py-4 leading-5"> {item.preparing_time} </td>
                                <td className="px-1 py-2 leading-5"> {item.calories} </td>
                                <td className="px-1 py-2 leading-5">
                                    <button onClick={() => handlePreparing(item)} className=" btn bg-[#0BE58A] rounded-full px-3 py-1 text-black font-medium text-xs cursor-pointer">
                                        Preparing
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="">
                    <h2 className="text-2xl font-semibold mt-8 text-center border-b-[#28282833] border-b-2 w-2/3 pb-5 mx-auto">Currently Cooking: {currentlyCooking}</h2>
                    <table className='w-full mx-auto border-separate border-spacing-y-3 mb-8 px-1 rounded-lg' >
                        <thead className='p-3'>
                            <tr className='' >
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody className=' gap-7'>
                            {cooking.map((item, idx) => (
                                <tr key={idx} className=' p-2 bg-[#28282808]' >
                                    <td className="px-1 leading-5 py-2"> {item.recipe_name} </td>
                                    <td className="px-1 py-4 leading-5"> {item.preparing_time} </td>
                                    <td className="px-1 py-2 leading-5"> {item.calories} </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="p-0">
                            <tr>
                                <td className="px-1 leading-5 py-0 font-bold"></td>
                                <td className="px-1 py-0 leading-5 font-bold">Total Time =</td>
                                <td className="px-1 py-0 leading-5 font-bold"> Total Calories =</td>
                            </tr>
                            <tr>
                                <td className="px-1 leading-5 py-2 font-bold"></td>
                                <td className="px-1 py-0 leading-5 font-bold"> {cooking.reduce((total, item) => total + parseInt(item.preparing_time), 0)} mins</td>
                                <td className="px-1 py-0 leading-5 font-bold"> {cooking.reduce((total, item) => total + parseInt(item.calories), 0)} kcal</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default WantToCook;