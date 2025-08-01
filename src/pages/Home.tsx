import {ProductCardTailwind} from "../components/ProductCardTailwind.tsx";
import {ProductCardMUI} from "../components/ProductCardMUI.tsx";
import {SimpleModalMUI} from "../components/SimpleModalMUI.tsx";
import {Counter} from "../components/Counter.tsx";
import {SimpleModalTailwind} from "../components/SimpleModalTailwind.tsx";
import {SimpleModalHeadlessUI} from "../components/SimpleModalHeadlessUI.tsx";
import {SimpleModalJoy} from "../components/SimpleModalJoy.tsx";


const Home = () => {

    return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
        <ProductCardTailwind
            title="Беспроводные наушники"
            price={199}
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8Bwz43xkn_Bl-Y7Vb6h6rV7AvOsWTK55sA&s"
            description="До 10 часов работы без подзарядки"
        />
        <ProductCardMUI
            title="Беспроводные наушники"
            price={250}
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMq4eXryfmZMFm_z6j8OZIg-l0v75WO1Texg&s"
            description="До 5 часов работы без подзарядки"
        />

        <div className="min-h-screen flex items-center justify-center p-10">
            <SimpleModalMUI />
        </div>

        <div className="min-h-screen flex items-center justify-center p-10 bg-gray-100">
            <Counter />
        </div>

        <div className="min-h-screen flex items-center justify-center p-10">
            <SimpleModalTailwind />
        </div>

        <div className="min-h-screen flex items-center justify-center p-10">
            <SimpleModalHeadlessUI />
        </div>

        <div className="min-h-screen flex items-center justify-center p-10">
            <SimpleModalJoy />
        </div>



    </div>

);
}
export default Home;
