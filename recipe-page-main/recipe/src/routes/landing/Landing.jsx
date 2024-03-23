import './Landing.css'
import './LandingMob.css'
import img from "../../assets/images/image-omelette.jpeg"

const Landing = () => {
    const table = [
        {
            id: 1,
            title:  "Calories",
            text: "277kcal"        
        },
        {
            id: 2,
            title:  "Carbs",
            text: "0g"     
        },
        {
            id: 3,
            title:  "Protein",
            text: "20g"        
        },
        {
            id: 4, 
            title:  "Fat",
            text: "22g"        
        }
    ]

    
    return(    
        <div className="landingBody">
            <div className='container'>
                <div className='contImg'>
                    <img className='imgLan' src={img} alt="" />
                </div>
                <h1 className='title'>Simple Omelette Recipe</h1>
                <p className='text'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
                <div className='contPrep'>
                    <h3 className='titlePrep'><strong>Preparation time</strong></h3>
                    <ul className='lista'>
                        <li className='listaText'><span className='listaTextNe'><strong>Total: </strong></span><span className='listaTextDesc'>Approximately 10 minutes</span></li>
                        <li className='listaText'><span className='listaTextNe'><strong>Preparation: </strong></span><span className='listaTextDesc'>5 minutes</span></li>
                        <li className='listaText'><span className='listaTextNe'><strong>Cooking: </strong></span><span className='listaTextDesc'>5 minutes</span></li>
                    </ul>
                </div>
                <div>
                    <h2 className='titleDos'>Ingredients</h2>
                    <ul className='lista'>
                        <li className='listaTextDos'><span className='listaTextDesc'>2-3 large eggs</span></li>
                        <li className='listaTextDos'><span className='listaTextDesc'>Salt, to taste</span></li>
                        <li className='listaTextDos'><span className='listaTextDesc'>Pepper, to taste</span></li>
                        <li className='listaTextDos'><span className='listaTextDesc'>1 tablespoon of butter or oil</span></li>
                        <li className='listaTextDos'><span className='listaTextDesc'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</span></li>
                    </ul>
                    <div className='line'></div>
                </div>
                <div>
                    <h2 className='titleDos'>Instructions</h2>
                    <ul className='lista'>
                        <li className='listaTextTres'><span className='listaTextNe'><strong>Beat the eggs: </strong></span><span className='listaTextDesc'>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span></li>
                        <li className='listaTextTres'><span className='listaTextNe'><strong>Heat the pan: </strong></span><span className='listaTextDesc'>Place a non-stick frying pan over medium heat and add butter or oil.</span></li>
                        <li className='listaTextTres'><span className='listaTextNe'><strong>Cook the omelette: </strong></span><span className='listaTextDesc'>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span></li>
                        <li className='listaTextTres'><span className='listaTextNe'><strong>Add fillings (optional): </strong></span><span className='listaTextDesc'>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span></li>
                        <li className='listaTextTres'><span className='listaTextNe'><strong>Fold and serve: </strong></span><span className='listaTextDesc'>As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span></li>
                        <li className='listaTextTres'><span className='listaTextNe'><strong>Enjoy: </strong></span><span className='listaTextDesc'>Serve hot, with additional salt and pepper if needed.</span></li>
                    </ul>
                    <div className='line'></div>
                </div>
                <div>
                    <h2 className='titleDos'>Nutrition</h2>
                    <p className='text'>The table below shows nutritional values per serving without the additional fillings.</p>
                    <div className='table'>
                        {table.map((item) => (
                            <div >
                                <div className='colTable'>
                                    <div className='contTable'>
                                        <p className='tableTitle'>{item.title}</p>
                                    </div>
                                    <div className='contTable'>
                                        <p className='tableText'>{item.text}</p>
                                    </div>
                                </div>
                                {item.id === 4 ? <div className=''></div> : <div className='lineDos'></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing