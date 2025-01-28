export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  specs: {
    engine: string;
    horsepower: number;
    acceleration: string;
    topSpeed: string;
    transmission: string;
  };
}

export const luxuryCars: Car[] = [
  {
    id: 1,
    brand: "Rolls-Royce",
    model: "Phantom",
    year: 2024,
    price: 460000,
    image: "/placeholder.svg",
    specs: {
      engine: "6.75L V12",
      horsepower: 563,
      acceleration: "0-60 mph in 5.1s",
      topSpeed: "155 mph",
      transmission: "8-speed automatic"
    }
  },
  {
    id: 2,
    brand: "Bentley",
    model: "Continental GT",
    year: 2024,
    price: 235000,
    image: "/placeholder.svg",
    specs: {
      engine: "6.0L W12",
      horsepower: 650,
      acceleration: "0-60 mph in 3.5s",
      topSpeed: "208 mph",
      transmission: "8-speed dual-clutch"
    }
  },
  {
    id: 3,
    brand: "Lamborghini",
    model: "Urus",
    year: 2024,
    price: 229495,
    image: "/placeholder.svg",
    specs: {
      engine: "4.0L V8 Twin-Turbo",
      horsepower: 641,
      acceleration: "0-60 mph in 3.5s",
      topSpeed: "190 mph",
      transmission: "8-speed automatic"
    }
  },
  {
    id: 4,
    brand: "Ferrari",
    model: "SF90 Stradale",
    year: 2024,
    price: 507300,
    image: "/placeholder.svg",
    specs: {
      engine: "4.0L V8 Hybrid",
      horsepower: 986,
      acceleration: "0-60 mph in 2.5s",
      topSpeed: "211 mph",
      transmission: "8-speed dual-clutch"
    }
  },
  {
    id: 5,
    brand: "Aston Martin",
    model: "DBS",
    year: 2024,
    price: 316300,
    image: "/placeholder.svg",
    specs: {
      engine: "5.2L V12 Twin-Turbo",
      horsepower: 715,
      acceleration: "0-60 mph in 3.4s",
      topSpeed: "211 mph",
      transmission: "8-speed automatic"
    }
  },
  {
    id: 6,
    brand: "Porsche",
    model: "911 GT3 RS",
    year: 2024,
    price: 223800,
    image: "/placeholder.svg",
    specs: {
      engine: "4.0L Flat-6",
      horsepower: 518,
      acceleration: "0-60 mph in 3.2s",
      topSpeed: "184 mph",
      transmission: "7-speed PDK"
    }
  },
  {
    id: 7,
    brand: "McLaren",
    model: "765LT",
    year: 2024,
    price: 382500,
    image: "/placeholder.svg",
    specs: {
      engine: "4.0L V8 Twin-Turbo",
      horsepower: 755,
      acceleration: "0-60 mph in 2.7s",
      topSpeed: "205 mph",
      transmission: "7-speed SSG"
    }
  },
  {
    id: 8,
    brand: "Mercedes-Benz",
    model: "AMG GT Black Series",
    year: 2024,
    price: 325000,
    image: "/placeholder.svg",
    specs: {
      engine: "4.0L V8 Bi-Turbo",
      horsepower: 720,
      acceleration: "0-60 mph in 3.1s",
      topSpeed: "202 mph",
      transmission: "7-speed DCT"
    }
  },
  {
    id: 9,
    brand: "Bugatti",
    model: "Chiron",
    year: 2024,
    price: 3000000,
    image: "/placeholder.svg",
    specs: {
      engine: "8.0L W16 Quad-Turbo",
      horsepower: 1479,
      acceleration: "0-60 mph in 2.4s",
      topSpeed: "261 mph",
      transmission: "7-speed DCT"
    }
  },
  {
    id: 10,
    brand: "Maserati",
    model: "MC20",
    year: 2024,
    price: 212000,
    image: "/placeholder.svg",
    specs: {
      engine: "3.0L V6 Twin-Turbo",
      horsepower: 621,
      acceleration: "0-60 mph in 2.9s",
      topSpeed: "202 mph",
      transmission: "8-speed DCT"
    }
  }
];