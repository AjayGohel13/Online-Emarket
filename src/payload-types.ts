/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    media: Media;
    orders: Order;
    products: Product;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  role: 'admin' | 'user';
  user_name: string;
  City_Name: string;
  State_Name: string;
  Country: string;
  Pincode: string;
  Address: string;
  Contect_Number: string;
  products?: (string | Product)[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  _verified?: boolean | null;
  _verificationToken?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products".
 */
export interface Product {
  id: string;
  user?: (string | null) | User;
  Name_Of_Product: string;
  Brand_Name: string;
  Color: string;
  Size: string;
  Style: string;
  description_Heading?: string | null;
  description?: string | null;
  description_Heading2?: string | null;
  description2?: string | null;
  description_Heading3?: string | null;
  description_3?: string | null;
  description_Heading_4?: string | null;
  description_4?: string | null;
  Number_Of_Stock?: number | null;
  category: 'Electronics' | 'Clothes' | 'Home_Applinces' | 'Accessories' | 'Furniture' | 'Others';
  SubCategory:
    | 'Laptops'
    | 'Smart_Phones'
    | 'Smart_Watches'
    | 'Cameras'
    | 'Video_Games'
    | 'Radios'
    | 'Computers'
    | 'Headphones'
    | 'WashingMachine'
    | 'Mixture'
    | 'Microwave'
    | 'Refridgerator'
    | 'Blender'
    | 'Soda_Maker'
    | 'Charger/Cables/Handspre'
    | 'Oven'
    | 'Gizzer'
    | 'Cupboard'
    | 'Tipoi'
    | 'Headlamp'
    | 'Library_Cupboard'
    | 'LadiesWare'
    | 'JentsWare'
    | 'Kidswear'
    | 'Hoodies'
    | 'Jeans'
    | 'Shirts'
    | 'Others'
    | 'Others_Clothes';
  Price: string;
  approvedForSale?: ('pending' | 'approved' | 'denied') | null;
  priceId?: string | null;
  stripeId?: string | null;
  images: {
    image: string | Media;
    id?: string | null;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  user?: (string | null) | User;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "orders".
 */
export interface Order {
  id: string;
  _isPaid: boolean;
  user: string | User;
  product?: (string | Product)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}