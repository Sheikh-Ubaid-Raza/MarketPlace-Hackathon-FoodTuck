import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import AddToCart from "@/components/AddToCart";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import Navbar from "@/components/Navbar/Navbar";
import ShopDetailHero from "@/components/MainHero/ShopDetailHero";
import { redirect } from "next/navigation";

interface ProductPageProps {
  params: { slug: string }; // `params` should not be a Promise
}

// Fetch product data with additional fields
async function getProduct(slug: string): Promise<Product | null> {
  if (!slug) {
    console.error('Slug is not provided');
    return null;
  }

  const query = groq`*[_type == "food" && slug.current == $slug][0] {
    _id,
    name,
    _type,
    image,
    price,
    description,
    category,
    available,
    tags,
    stripe
  }`;
  return client.fetch(query, { slug });
}

// Food Page Component
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params; // Extract slug directly from params
  const product = await getProduct(slug);

  // Handle case when product is null
  if (!product) {
    redirect("/error");
  }

  return (
    <div>
      <Navbar />
      <ShopDetailHero />

    <div className="bg-white my-32">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Flexbox layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Image */}
          <div className="flex-shrink-0">
            {product.image && (
              <Image
                src={urlFor(product.image).url()} // Ensure the `urlFor` function is properly set up
                alt={product.name}
                width={500}
                height={500}
                loading="lazy"
                className="object-cover object-center w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-lg"
              />
            )}
          </div>

          {/* Right Side: Product Details */}
          <div className="flex-1">
            {/* Display product availability */}
            <span className={`px-3 py-1 rounded-md text-sm ${product.available ? "bg-[#ff9f0d] text-white" : 'bg-red-200 text-red-800'}`}>
              {product.available ? "In Stock" : "Out of Stock"}
            </span>

            {/* Product details */}
            <h1 className="text-3xl font-bold text-gray-800 mt-5">{product.name}</h1>
            <p className="text-gray-600 border-b-[2px] pb-4">
              {product.description}
            </p>
            <div className="text-2xl font-bold text-gray-800">
              ${product.price}.00
            </div>

            {/* Rating and Reviews */}
            <div className="flex items-center gap-2 text-[#ff9f0d]">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
              </div>
              <span className="text-gray-500">{"5"} Rating</span>
              <span className="text-gray-500">| {"22"} Reviews</span>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-4">
              <Link href={"/checkout"}>
                <AddToCart
                  key={product._id}
                  price_id={product?.stripe}
                  btnName="CheckOut"
                  name={product.name}
                  price={product.price}
                  images={urlFor(product.image).url()}
                  currency="USD"
                />
              </Link>

              <AddToCart
                key={product._id}
                price_id={product?.stripe}
                btnName="Add to Cart"
                name={product.name}
                price={product.price}
                images={urlFor(product.image).url()}
                currency="USD"
              />
            </div>

            {/* Category and Tags */}
            <div className="text-gray-500 space-y-1 mt-4">
              <p>
                <span className="text-gray-800">
                  <span className="font-bold">Category:</span> {product.category}
                </span>
              </p>
              <p>
                <span className="text-gray-800">
                  <span className="font-bold">Tag:</span> {product.tags.join(", ")}
                </span>
              </p>
            </div>

            <div className="flex items-center gap-2 mt-4">
                <span className="font-bold text-gray-800">Share:</span>
                <div className="flex gap-3 text-gray-800">
                  <Link href="#">
                    <FaFacebook />
                  </Link>
                  <Link href="#">
                    <FaInstagram />
                  </Link>
                  <Link href="#">
                    <FaLinkedin />
                  </Link>
                  <Link href="#">
                    <FaYoutube />
                  </Link>
                  <Link href="#">
                    <FaTwitter />
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
