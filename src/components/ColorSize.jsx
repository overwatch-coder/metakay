
const ColorSize = ({
        name, 
        items, 
        selectedItem, 
        setSelectedItem, 
        extraClass,
        quantity,
        currentSize
    }) => {

    let selectedName;

    if(selectedItem > -1){
        selectedName = items[selectedItem];
    }
    

  return (
    <div className="space-y-4">
        <h4 className="font-medium text-[18px] md:text-xl space-x-2">
            {name.toLowerCase() === 'color' ? 
                <span> { name }s Available </span> : 
                <span> { name } </span>
            }
            <span> {selectedName} </span>
        </h4>

        <h3 className="flex items-center gap-x-4 capitalize">
        {(name.toLowerCase() === 'color') ?
            items.map((item, index) => (
                <span 
                    key={index}
                >
                    {item}
                </span>
            )) :
            items.map((item, index) => (
                <div key={index} className="relative">
                    <span 
                        className={`
                            ${extraClass} 
                            ${selectedItem === index ? 
                                'bg-gray border-white border-2 text-white' 
                                : 'text-black hover:bg-transparent hover:text-white hover:border-white hover:border-[3px] bg-white'
                            } 
                            font-medium uppercase cursor-pointer`
                        }
                        onClick={() => setSelectedItem(index)}
                    >
                        {item}
                    </span>
                    {(quantity > 0 && currentSize === item) && 
                        <span className="text-xs absolute -top-4 -right-1 text-white bg-black p-[3px] rounded-full"
                        >
                            {quantity}
                        </span>
                    }
                </div>
            ))
        }
        </h3>
    </div>
  )
}

export default ColorSize