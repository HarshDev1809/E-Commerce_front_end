import { useState } from "react";
import PriceSlider from "../PriceSlider/PriceSlider";
import "./SideBar.css"

function SideBar(){

    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();
    const [isPriceOpened, setIsPriceOpened] = useState(false);
    const [isGenderOpen, setIsGenderOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isMaterialOpen, setIsMaterialOpen] = useState(false);

    const updateMinPrice = (e)=>{
        setMinPrice(e.target.value);
    }

    const updateMaxPrice = (e)=>{
        setMaxPrice(e.target.value);
    }

    const changeIsPriceOpened = ()=>{
        setIsPriceOpened(!isPriceOpened);
        setIsGenderOpen(false);
        setIsCategoryOpen(false);
        setIsMaterialOpen(false);
    }

    const changeIsGenderOpen = () => {
        setIsPriceOpened(false);
        setIsGenderOpen(!isGenderOpen);
        setIsCategoryOpen(false);
        setIsMaterialOpen(false);
    }

    const changeIsCategoryOpen = () => {
        setIsPriceOpened(false);
        setIsGenderOpen(false);
        setIsCategoryOpen(!isCategoryOpen);
        setIsMaterialOpen(false);
    }

    const changeIsMaterialOpen = () => {
        setIsPriceOpened(false);
        setIsGenderOpen(false);
        setIsCategoryOpen(false);
        setIsMaterialOpen(!isMaterialOpen);
    }

    return <div className="side-bar">
        <div className="price-drop-down drop-down">
            <button type="button" onClick={changeIsPriceOpened} className="side-bar-button">Price </button>
            {isPriceOpened && (
                <form className="price-range">
                    <div className="min-price-div price-input-div">
                        <label for="minPrice">{`Min Price (₹) :`}</label>
                        <input id="minPrice" className="price-input" type="number" value={minPrice} onChange={updateMinPrice}></input>
                    </div>
                    <span>-</span>
                    <div className="max-price-div price-input-div">
                        <label for="maxPrice">{`Max Price (₹) :`}</label>
                        <input id="maxPrice" className="price-input" type="number" value={maxPrice} onChange={updateMaxPrice}></input>
                    </div>
                </form>
            )}
        </div>
        <div className="gender-drop-down drop-down">
            <button type="button" onClick={changeIsGenderOpen} className="side-bar-button">Gender </button>
            {isGenderOpen && (
                <form className="gender-form">
                        <div className="male">
                            <input id="maleInput" type="checkbox" value="Men's"/>
                            <label for = "maleInput">Men's</label>
                        </div>
                        <div className="female">
                            <input id = "femaleInput" type="checkbox" value="Woman's" />
                            <label for="femaleInput">Women's</label>
                        </div>
                        <div className="kid">
                            <input id = "kidInput" type="checkbox" value="Kid's" />
                            <label for="kidInput">Kid's</label>
                        </div>
                        <button type="reset" className="reset-button">Clear</button>
                    </form>
            )}
        </div>
        <div className="catergory-drop-down drop-down">
            <button type="button" onClick={changeIsCategoryOpen} className="side-bar-button">
                Category 
            </button>
            {isCategoryOpen && (
                <form className="category-form">
                    <div className="rings">
                        <input id="ring" type="checkbox" value="Ring" />
                        <label for="ring">Ring</label>
                    </div>
                    <div className="necklace">
                        <input id="necklace" type="checkbox" value="Necklace" />
                        <label for="necklace">Necklace</label>
                    </div>
                    <div className="bracelet">
                        <input id="bracelet" type="checkbox" value="Bracelet" />
                        <label for="bracelet">Bracelet</label>
                    </div>
                    <div className="earring">
                        <input id="earring" type="checkbox" value="Earring" />
                        <label for="earring">Earring</label>
                    </div>
                    <div className="pendent">
                        <input id="pendent" type="checkbox" value="Pendent" />
                        <label for="pendent">Pendent</label>
                    </div>
                    <div className="bali">
                        <input id="bali" type="checkbox" value="Bali" />
                        <label for="Bali">Bali</label>
                    </div>
                    <div className="chain">
                        <input id="chain" type="checkbox" value="Chain" />
                        <label for="chain">Chain</label>
                    </div>
                    <div className="set">
                        <input id="set" type="checkbox" value="Set" />
                        <label for="set">set</label>
                    </div>
                    <button type="reset" className="reset-button">Clear</button>

                </form>
            )}
        </div>
        <div className="material-drop-down drop-down">
            <button type="button" onClick={changeIsMaterialOpen} className="side-bar-button">
                Material
            </button>
            {isMaterialOpen && (
                <form className="material-form">
                    <div className="silver">
                        <input id="silver" type="checkbox" value="Silver" />
                        <label for="silver">Silver</label>
                    </div>
                    <div className="gold">
                        <input id="gold" type="checkbox" value="Gold" />
                        <label for="gold">Gold</label>
                    </div>
                    <div className="roseGold">
                        <input id="roseGold" type="checkbox" value="Rose Gold" />
                        <label for="roseGold">Rose Gold</label>
                    </div>
                    <button type="reset" className="reset-button">Clear</button>
                </form>
            )}
        </div>
    </div>
}

export default SideBar;