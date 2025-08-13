import React from 'react';
import { Star, Shield, Clock } from 'lucide-react';

function App() {
  const handlePurchase = () => {
    window.open('https://app.pushinpay.com.br/service/pay/9fa0792c-aa19-4bc3-862d-58979b2f6bfb', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section com 3 Imagens */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 h-[40vh] md:h-[50vh]">
          <div className="relative overflow-hidden group">
            <img 
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Modelo 1"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative overflow-hidden group">
            <img 
              src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Modelo 2"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative overflow-hidden group">
            <img 
              src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Modelo 3"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        
        {/* Overlay com gradiente */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Main Content */}
      <section className="relative px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge Premium */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Star className="w-4 h-4" />
            <span>CONTEÚDO PREMIUM</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            As Novinhas Mais Quentes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              (Vazados Exclusivos)
            </span>
          </h1>

          {/* Texto Descritivo */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Adquira acesso ao nosso conteúdo exclusivo com mais de{' '}
            <span className="text-yellow-400 font-bold">600 fotos profissionais</span>{' '}
            de nossas modelos novas (todas maiores de idade), por apenas{' '}
            <span className="text-yellow-400 font-bold text-3xl">R$ 9,90</span>
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300">
              <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">100% Seguro</h3>
              <p className="text-gray-400 text-sm">Pagamento protegido e confiável</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300">
              <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Acesso Imediato</h3>
              <p className="text-gray-400 text-sm">Receba por email após o pagamento</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Conteúdo Premium</h3>
              <p className="text-gray-400 text-sm">Mais de 600 fotos exclusivas</p>
            </div>
          </div>

          {/* Preço Destacado */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-8 rounded-2xl mb-8 shadow-2xl">
            <div className="text-sm font-semibold mb-2">OFERTA ESPECIAL</div>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-3xl line-through opacity-60">R$ 29,90</span>
              <span className="text-6xl font-bold">R$ 9,90</span>
            </div>
            <div className="text-sm mt-2">Economize R$ 20,00 hoje!</div>
          </div>

          {/* Botão de Compra */}
          <button
            onClick={handlePurchase}
            className="group relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-2xl font-bold py-6 px-12 rounded-full shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 active:scale-95 mb-8"
          >
            <span className="relative z-10">COMPRAR AGORA</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Garantia */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">🔒 Pagamento 100% seguro via PIX</p>
            <p className="text-gray-400 text-sm">✅ Satisfação garantida ou seu dinheiro de volta</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            O que nossos clientes dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 mb-4">"Conteúdo incrível e preço justo. Recomendo!"</p>
              <p className="text-gray-500 text-sm">- Cliente Verificado</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 mb-4">"Qualidade excepcional das fotos. Valeu cada centavo!"</p>
              <p className="text-gray-500 text-sm">- Cliente Verificado</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 mb-4">"Processo de pagamento super rápido e seguro!"</p>
              <p className="text-gray-500 text-sm">- Cliente Verificado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800">
        <p>&copy; 2024 Conteúdo Exclusivo. Todos os direitos reservados.</p>
        <p className="mt-2">Todas as modelos são maiores de idade.</p>
      </footer>
    </div>
  );
}

export default App;