import { Link } from "react-router-dom";
import { Heart, ArrowLeft } from "lucide-react";

export default function Registration() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              ЛюбовьаПатченко
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-rose-600 hover:text-rose-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Повернутися
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="max-w-md w-full px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-white fill-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Реєстрація
            </h1>
            <p className="text-gray-600 mb-8">
              Цей розділ переглядається. Повніть у розроблені усередину
              користування вдалі сторінки
            </p>

            <div className="space-y-4">
              <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
            </div>

            <p className="text-sm text-gray-600 mt-8">
              Форма реєстрації буде розроблена дуже скоро!
            </p>

            <Link
              to="/"
              className="inline-block mt-8 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Повернутися на головну
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
