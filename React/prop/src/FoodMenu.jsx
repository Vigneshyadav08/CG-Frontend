import FoodCard from "./FoodCard";

const FoodMenu = () => {
    let foodData = [
        {
        id: 1,
        name: "Burger",
        price: 120,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
        },
        {
        id: 3,
        name: "Pasta",
        price: 180,
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
    },
        {
        id: 4,
        name: "French Fries",
        price: 90,
        image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5"
    },
    {
        id: 6,
        name: "Momos",
        price: 80,
        image: "https://images.unsplash.com/photo-1625943555419-56a2cb596640"
    },
    {
        id: 7,
        name: "Biryani",
        price: 200,
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
    },
    {
        id: 8,
        name: "Ice Cream",
        price: 70,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    }
    ];

    console.log(foodData);
    return (
        <>
            <h1>FoodMenu</h1>
            <FoodCard foodData={foodData} />
        </>
    )
}

export default FoodMenu;