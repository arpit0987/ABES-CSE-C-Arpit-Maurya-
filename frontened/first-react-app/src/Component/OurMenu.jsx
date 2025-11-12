import Items from './Items'
import './OurMenu.css'
function OurMenu() {
    return (
        <div id="ourmenu">
            <h2>Our Menu</h2>
            <div className="items-container">
            <Items name="Pizza" imgsrc="" rate="499"/>
            <Items name="Burger" imgsrc="" rate="199"/>
            <Items name="Noodles" imgsrc="" rate="299"/>
            </div>
        </div>
    )
}
export default OurMenu