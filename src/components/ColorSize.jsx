
const ColorSize = ({
        name, 
        items, 
        selectedItem, 
        setSelectedItem, 
        extraClass
    }) => {

        let selectedName;
        if(selectedItem > -1){
            selectedName = name === 'Color' ? items[selectedItem].name : items[selectedItem];
        }

  return (
    <div className="space-y-2">
        <h4 className="font-medium text-[18px] md:text-xl space-x-2">
            <span> { name } </span>
            <span>{selectedName}</span>
        </h4>

        <p className="flex items-center gap-x-4">
            {items.map((item, index) => (
            <span 
                key={index} 
                className={`
                    ${extraClass} 
                    ${selectedItem === index ? 'bg-transparent text-white border-green-400 border-2' 
                    : 'text-black hover:bg-transparent hover:text-white hover:border-white hover:border-2'} font-medium uppercase cursor-pointer 
                    ${name.toLowerCase() === 'color' ? item.color : ''}
                `}
                onClick={() => setSelectedItem(index)}
            >
                {name.toLowerCase() !== 'color' ? item : ''}
            </span>
            ))}
        </p>
    </div>
  )
}

export default ColorSize