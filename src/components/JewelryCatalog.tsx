
interface JewelryItem {
    id: number;
    name: string;
    image: string;
  }
  
  interface JewelryCatalogProps {
    items: JewelryItem[];
  }
  
  export const JewelryCatalog: React.FC<JewelryCatalogProps> = ({ items }) => {
    return (
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Jewelry Catalog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded shadow-md">
              <img
                src={`images/${item.image}`}
                alt={item.name}
                className="w-full h-32 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
