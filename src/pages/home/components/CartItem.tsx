type CartItemProps = {
    name: string
    price: number
    image: string
}

const CartItem: React.FC<CartItemProps> = ({
    name,
    price,
    image
}) => {
    return (
        <div className="flex flex-row justify-between items-start w-[100%] h-[100px] ">
            <div className="w-[100px] h-[100px] ">
                <img
                    className="bg-center bg-cover"
                    src={image}
                />
            </div>
            <div className="flex flex-col justify-start">
                <h1 className="mb-[24px]">{name}</h1>
                <div className="flex flex-row items-center justify-between">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-6 h-6 mr-4 cursor-pointer">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className="mr-4">1</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} stroke="currentColor" 
                        className="w-6 h-6  cursor-pointer">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </div>
            </div>
            <div>
                <h1>${price}</h1>
            </div>

        </div>
    )

}

export default CartItem