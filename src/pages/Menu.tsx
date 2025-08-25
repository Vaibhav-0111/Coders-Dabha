import React from 'react';
import Header from '../components/layout/Header';

const Menu = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-holographic bg-clip-text text-transparent">
              Full Menu
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Explore our complete collection of futuristic culinary masterpieces
            </p>
            <div className="bg-card/50 backdrop-blur-md rounded-2xl p-12 border border-neon-cyan/20">
              <p className="text-lg text-muted-foreground">
                Complete menu coming soon with 3D interactive cards and AR preview...
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;