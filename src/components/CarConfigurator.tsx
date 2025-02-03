import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState, Suspense } from 'react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const CarModel = ({ color, wheelType, exhaustType, bodyKit }: any) => {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1, 4]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Wheels */}
      <mesh position={[-1, -0.5, 1]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[1, -0.5, 1]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[-1, -0.5, -1]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[1, -0.5, -1]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
};

const CarConfigurator = () => {
  const [color, setColor] = useState('#000000');
  const [wheelType, setWheelType] = useState('standard');
  const [exhaustType, setExhaustType] = useState('standard');
  const [bodyKit, setBodyKit] = useState('standard');
  const [showLuxuryAddons, setShowLuxuryAddons] = useState(false);

  const colors = [
    { name: 'Phantom Black', value: '#000000' },
    { name: 'Pearl White', value: '#FFFFFF' },
    { name: 'Racing Red', value: '#FF0000' },
    { name: 'Luxury Gold', value: '#B8860B' },
  ];

  const wheelTypes = [
    { name: 'Standard', value: 'standard' },
    { name: 'Sport', value: 'sport' },
    { name: 'Luxury', value: 'luxury' },
  ];

  const exhaustTypes = [
    { name: 'Standard', value: 'standard' },
    { name: 'Sport', value: 'sport' },
    { name: 'Performance', value: 'performance' },
  ];

  const bodyKits = [
    { name: 'Standard', value: 'standard' },
    { name: 'Sport', value: 'sport' },
    { name: 'Wide Body', value: 'wide' },
  ];

  return (
    <div className="w-full min-h-screen bg-black/95 fixed top-0 left-0 z-50">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 3D Viewer */}
          <div className="lg:col-span-2 bg-gray-900 rounded-lg overflow-hidden h-[600px]">
            <Canvas
              camera={{
                position: [4, 4, 4],
                fov: 50
              }}
            >
              <color attach="background" args={['#1a1a1a']} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Suspense fallback={null}>
                <CarModel 
                  color={color}
                  wheelType={wheelType}
                  exhaustType={exhaustType}
                  bodyKit={bodyKit}
                />
                <OrbitControls 
                  enablePan={false}
                  minDistance={5}
                  maxDistance={10}
                />
              </Suspense>
              <gridHelper args={[20, 20, '#333333', '#222222']} />
            </Canvas>
          </div>

          {/* Configuration Panel */}
          <div className="bg-gray-900 rounded-lg p-6 space-y-6">
            <h2 className="text-2xl font-playfair text-white mb-6">Car Configurator</h2>
            
            {/* Color Selection */}
            <div className="space-y-2">
              <label className="text-white">Color</label>
              <div className="flex flex-wrap gap-2">
                {colors.map((c) => (
                  <button
                    key={c.value}
                    className={`w-8 h-8 rounded-full border-2 ${
                      color === c.value ? 'border-luxury-gold' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: c.value }}
                    onClick={() => setColor(c.value)}
                  />
                ))}
              </div>
            </div>

            {/* Wheel Type Selection */}
            <div className="space-y-2">
              <label className="text-white">Wheels</label>
              <Select onValueChange={setWheelType} value={wheelType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select wheels" />
                </SelectTrigger>
                <SelectContent>
                  {wheelTypes.map((wheel) => (
                    <SelectItem key={wheel.value} value={wheel.value}>
                      {wheel.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Exhaust Type Selection */}
            <div className="space-y-2">
              <label className="text-white">Exhaust</label>
              <Select onValueChange={setExhaustType} value={exhaustType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select exhaust" />
                </SelectTrigger>
                <SelectContent>
                  {exhaustTypes.map((exhaust) => (
                    <SelectItem key={exhaust.value} value={exhaust.value}>
                      {exhaust.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Body Kit Selection */}
            <div className="space-y-2">
              <label className="text-white">Body Kit</label>
              <Select onValueChange={setBodyKit} value={bodyKit}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select body kit" />
                </SelectTrigger>
                <SelectContent>
                  {bodyKits.map((kit) => (
                    <SelectItem key={kit.value} value={kit.value}>
                      {kit.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Luxury Add-ons Button */}
            <Button 
              className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-black"
              onClick={() => setShowLuxuryAddons(!showLuxuryAddons)}
            >
              Luxury Add-ons
            </Button>

            {/* Luxury Add-ons Panel */}
            {showLuxuryAddons && (
              <div className="space-y-4">
                <h3 className="text-xl font-playfair text-white">Luxury Add-ons</h3>
                <div className="space-y-2">
                  <label className="text-white">Start Button Cover</label>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((c) => (
                      <button
                        key={c.value}
                        className={`w-8 h-8 rounded-full border-2 ${
                          color === c.value ? 'border-luxury-gold' : 'border-transparent'
                        }`}
                        style={{ backgroundColor: c.value }}
                        onClick={() => setColor(c.value)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarConfigurator;