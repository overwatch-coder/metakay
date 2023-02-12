
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
                    className=''
                >
                    {item}
                </span>
            )) :
            items.map((item, index) => (
                <span 
                    key={index} 
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
                    {name.toLowerCase() !== 'color' ? item : ''}
                </span>
            ))
        }
        </h3>
    </div>
  )
}

export default ColorSize