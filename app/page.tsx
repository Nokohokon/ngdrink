import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 md:p-8">
        <div className="text-2xl font-bold text-white">
          <span className="text-cyan-400">NG</span>Drink - Projekt zum Thema Unternehmensgründung
        </div>
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
          <a href="#benefits" className="hover:text-cyan-400 transition-colors">Vorteile</a>
          <a href="#buy" className="hover:text-cyan-400 transition-colors">Kaufen</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-8 py-12 md:py-20">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Fokus. <span className="text-cyan-400">Natürlich.</span><br />
            <span className="text-purple-400">Ohne Crash.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Probleme mit der Konzentration? NGDrink ist die natürliche Lösung für Jugendliche, 
            die ihre mentale Performance steigern wollen. Basierend auf Tee-Extrakt, 
            ohne Koffein und Zucker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              Schulprojekt - keine Bestellungen möglich
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
              Mehr erfahren
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <Image
              src="/ngdrink.png"
              alt="NGDrink Dose"
              width={400}
              height={500}
              className="relative z-10 hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 md:px-8 py-16 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Kennst du das Problem?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6">
              <div className="text-4xl mb-4">😵‍💫</div>
              <h3 className="text-xl font-semibold text-white mb-2">Konzentrationsmangel</h3>
              <p className="text-gray-300">Du kannst dich nicht fokussieren und schweifst ständig ab</p>
            </div>
            <div className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Energy-Crash</h3>
              <p className="text-gray-300">Andere Drinks geben dir einen Crash von 100 auf 0</p>
            </div>
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-6">
              <div className="text-4xl mb-4">🍭</div>
              <h3 className="text-xl font-semibold text-white mb-2">Zu viel Zucker</h3>
              <p className="text-gray-300">Ungesunde Inhaltsstoffe schaden deinem Körper</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Die <span className="text-cyan-400">NGDrink</span> Lösung
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-white mb-2">100% Natürlich</h3>
              <p className="text-gray-300">Basiert auf natürlichen Tee-Extrakten</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-xl font-semibold text-white mb-2">Kein Koffein</h3>
              <p className="text-gray-300">Keine Abhängigkeit oder Nebenwirkungen</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-teal-600/20 border border-green-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-semibold text-white mb-2">Erfrischend</h3>
              <p className="text-gray-300">Kohlensäure für den perfekten Frische-Kick</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 border border-orange-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-2">Sanfte Wirkung</h3>
              <p className="text-gray-300">Kein Crash - stetige Abflachung der Wirkung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="px-6 md:px-8 py-16 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Warum NGDrink?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Für Schule & Studium</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Bessere Konzentration in Klausuren</li>
                <li>✓ Längere Fokusphasen beim Lernen</li>
                <li>✓ Keine müden Nachmittage mehr</li>
                <li>✓ Natürliche Mental-Performance</li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Gesund & Lecker</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Zuckerfrei und kalorienarm</li>
                <li>✓ Keine künstlichen Zusatzstoffe</li>
                <li>✓ Erfrischender Geschmack</li>
                <li>✓ Perfekt für jeden Tag</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="buy" className="px-6 md:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bereit für besseren <span className="text-cyan-400">Fokus</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Probiere NGDrink jetzt aus und erlebe den Unterschied
          </p>
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-2xl p-8 mb-8">
            <div className="text-6xl font-bold text-white mb-2">1,99€</div>
            <div className="text-xl text-gray-300">pro Dose</div>
          </div>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-4">
          Schulprojekt - keine Bestellungen möglich
          </button>
          <p className="text-sm text-gray-400">
            Kostenloser Versand ab 25€ • 30 Tage Geld-zurück-Garantie
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-6 md:px-8 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-cyan-400">NG</span>Drink
            </div>
            <p className="text-gray-400">
              Die natürliche Lösung für bessere Konzentration
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Produkt</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-cyan-400">Inhaltsstoffe</a></li>
              <li><a href="#" className="hover:text-cyan-400">Nährwerte</a></li>
              <li><a href="#" className="hover:text-cyan-400">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Unternehmen</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-cyan-400">Über uns</a></li>
              <li><a href="#" className="hover:text-cyan-400">Kontakt</a></li>
              <li><a href="#" className="hover:text-cyan-400">Karriere</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-cyan-400">Hilfe</a></li>
              <li><a href="#" className="hover:text-cyan-400">Versand</a></li>
              <li><a href="#" className="hover:text-cyan-400">Rückgabe</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="https://konja-rehm.de/impressum" className="hover:text-cyan-400">Impressum</a></li>
              <li><a href="https://konja-rehm.de/datenschutz" className="hover:text-cyan-400">Datenschutzbedingungen</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 NGDrink. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
