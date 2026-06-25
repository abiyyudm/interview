"use client";

import { useState } from "react";
import Image from "next/image";
import { mockProduct } from "@/data/product";

export default function ApiContractPage() {
  const product = mockProduct;
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0].id);

  const selectedVariant = product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* API Contract Task Card */}
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-2">
        <div className="bg-white rounded-2xl shadow-xl border-2 border-indigo-200 overflow-hidden">
          <div className="bg-indigo-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white">Design the API Contract</h2>
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Your task is to design a <strong>RESTful API</strong> that can supply the data to power the product page shown below. The API should return all the information the frontend needs to render the page exactly as you see it.
            </p>

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Requirements:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5">1.</span>
                  <span>Define the <strong>endpoints</strong> needed (method, path, query params, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5">2.</span>
                  <span>Define the <strong>response shapes</strong> (JSON schemas) for each endpoint</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5">3.</span>
                  <span>Consider <strong>nested relationships</strong>: a product has multiple variants, each variant has multiple specifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Below is the mockup to reference</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
      </div>

      {/* Product Page Mockup */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">

            {/* Image Gallery */}
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-100 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src={selectedVariant.imageUrl}
                  alt={selectedVariant.name}
                  fill
                  className="object-cover rounded-xl shadow-md"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="p-8 sm:p-10 lg:p-12">
              <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase font-semibold">
                {product.brand}
              </h2>
              <h1 className="text-3xl font-extrabold text-gray-900 mt-2 sm:text-4xl">
                {product.name}
              </h1>

              <div className="mt-4">
                <p className="text-3xl text-gray-900 font-bold">
                  ${selectedVariant.price.toFixed(2)}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Select Variant</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariantId(variant.id)}
                      className={`relative flex cursor-pointer rounded-lg border p-4 shadow-sm focus:outline-none transition-all ${
                        selectedVariantId === variant.id
                          ? "border-indigo-600 ring-2 ring-indigo-600 bg-indigo-50"
                          : "border-gray-300 bg-white hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex flex-col text-left">
                        <span className={`block text-sm font-medium ${
                          selectedVariantId === variant.id ? "text-indigo-900" : "text-gray-900"
                        }`}>
                          {variant.name}
                        </span>
                        <span className="mt-1 block text-sm text-gray-500">
                          Stock: {variant.stock} available
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Specifications</h3>
                <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      {selectedVariant.specifications.map((spec, index) => (
                        <tr key={spec.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3 border-r border-gray-200">
                            {spec.key}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-10 flex sm:flex-col1">
                <button
                  type="button"
                  className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full transition-colors shadow-lg"
                >
                  Add to cart
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
