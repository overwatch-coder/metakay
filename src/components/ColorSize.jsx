
const ColorSize = ({
        name, 
        items, 
        selectedItem, 
        setSelectedItem, 
        extraClass
    }) => {

    let selectedName;

    if(selectedItem > -1){
        selectedName = items[selectedItem];
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
                        ${selectedItem === index ? 'bg-transparent border-cyan-500 border-[3px] text-white' 
                        : 'text-black hover:text-white hover:border-white hover:border-[3px]'} font-medium uppercase cursor-pointer 
                        ${name.toLowerCase() === 'color' ? `bg-${item}` : 'hover:bg-transparent bg-white'}
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