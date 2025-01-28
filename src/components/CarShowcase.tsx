import { Card } from "./ui/card";
import { luxuryCars } from "../data/cars";

const CarShowcase = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-playfair text-center mb-12">Our Luxury Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {luxuryCars.map((car) => (
          <Card key={car.id} className="overflow-hidden group">
            <div className="relative aspect-video">
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-playfair">{car.brand} {car.model}</h3>
              <p className="text-luxury-gold text-xl font-semibold">
                ${car.price.toLocaleString()}
              </p>
              <div className="space-y-2">
                <p><span className="font-semibold">Engine:</span> {car.specs.engine}</p>
                <p><span className="font-semibold">Horsepower:</span> {car.specs.horsepower} hp</p>
                <p><span className="font-semibold">0-60 mph:</span> {car.specs.acceleration}</p>
                <p><span className="font-semibold">Top Speed:</span> {car.specs.topSpeed}</p>
                <p><span className="font-semibold">Transmission:</span> {car.specs.transmission}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CarShowcase;