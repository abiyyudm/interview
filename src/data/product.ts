export type Specification = {
  id: string;
  key: string;
  value: string;
};

export type Variant = {
  id: string;
  name: string;
  price: number;
  stock: number;
  imageUrl: string;
  specifications: Specification[];
};

export type Product = {
  id: string;
  name: string;
  description: string;
  brand: string;
  variants: Variant[];
};

export const mockProduct: Product = {
  id: "prod-1",
  name: "AeroBook Pro 15",
  description: "Experience unparalleled performance with the new AeroBook Pro 15. Designed for professionals who need power on the go.",
  brand: "AeroTech",
  variants: [
    {
      id: "var-1",
      name: "Space Gray - 16GB RAM / 512GB SSD",
      price: 1499.0,
      stock: 42,
      imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specifications: [
        { id: "spec-1", key: "Color", value: "Space Gray" },
        { id: "spec-2", key: "Processor", value: "M3 Pro" },
        { id: "spec-3", key: "Memory", value: "16GB Unified" },
        { id: "spec-4", key: "Storage", value: "512GB SSD" },
        { id: "spec-5", key: "Display", value: "15.3-inch Liquid Retina" }
      ]
    },
    {
      id: "var-2",
      name: "Space Gray - 32GB RAM / 1TB SSD",
      price: 1999.0,
      stock: 15,
      imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specifications: [
        { id: "spec-6", key: "Color", value: "Space Gray" },
        { id: "spec-7", key: "Processor", value: "M3 Max" },
        { id: "spec-8", key: "Memory", value: "32GB Unified" },
        { id: "spec-9", key: "Storage", value: "1TB SSD" },
        { id: "spec-10", key: "Display", value: "15.3-inch Liquid Retina" }
      ]
    },
    {
      id: "var-3",
      name: "Silver - 16GB RAM / 512GB SSD",
      price: 1499.0,
      stock: 8,
      imageUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specifications: [
        { id: "spec-11", key: "Color", value: "Silver" },
        { id: "spec-12", key: "Processor", value: "M3 Pro" },
        { id: "spec-13", key: "Memory", value: "16GB Unified" },
        { id: "spec-14", key: "Storage", value: "512GB SSD" },
        { id: "spec-15", key: "Display", value: "15.3-inch Liquid Retina" }
      ]
    }
  ]
};
