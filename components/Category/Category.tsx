interface TextOptions {
    Text: string;
}

const Category : React.FC<TextOptions> = ({Text }) => {
    return (
        <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-700">
            {Text}
        </div>
    )
}   
export default Category;