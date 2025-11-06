import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Heart, Star, Package, Truck, Shield } from 'lucide-react'
import gallery1 from '../assets/81.jpg';
import gallery2 from '../assets/7.webp';
import gallery3 from '../assets/blck.jpg';
import gallery4 from '../assets/pink.jpg';
import gallery5 from '../assets/royal.jpg';
import gallery6 from '../assets/2_blue.jpg';
import iw1 from '../assets/iw1.png';
import iw2 from '../assets/iw2.png';
import iw3 from '../assets/iw3.png';
import iw4 from '../assets/iw4.png';

import k1 from '../assets/k1.png';
import k2 from '../assets/k2.png';
import k3 from '../assets/k3.png';
import k4 from '../assets/k4.png';


import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p4 from '../assets/p4.png';


import s1 from '../assets/s1.jpg';
import s4 from '../assets/s2.webp';
import s3 from '../assets/s3.jpg';
import s2 from '../assets/s4.webp';

import i1 from '../assets/i1.jpg';
import i4 from '../assets/i4.jpg';
import i31 from '../assets/i31.jpg';
import i2 from '../assets/oip2.jpeg';

import l1 from "../assets/l1.jpg";
import l2 from "../assets/l2.jpg";
import l3 from "../assets/l3.jpg";
import l4 from "../assets/l4.png";

import d1 from "../assets/d1.jpg";
import d2 from "../assets/d2.png";
import d3 from "../assets/d31.png";
import d4 from "../assets/d4.png";



const Collection = () => {
  const { category } = useParams()

  const collectionData = {
    'western': {
      title: 'Western Collection',
      description: 'Modern and stylish western ethnic fusion wear that blends contemporary fashion with traditional elements.',
      heroImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1200&auto=format&fit=crop',
      items: [
        {
          id: 1,
          name: 'Indo-Western Gown',
          description: 'An elegant indo-western gown that beautifully merges contemporary western silhouettes with traditional Indian embroidery techniques. This stunning piece features a modern fitted bodice that flows into a graceful floor-length skirt, adorned with intricate hand-embroidered motifs inspired by Mughal art.',
          collection: 'Signature Fusion Collection',
          fabric: 'Premium georgette with silk lining',
          embroidery: 'Hand-embroidered with zari and thread work',
          occasion: 'Perfect for cocktail parties, evening receptions, and festive celebrations',
          care: 'Dry clean only to preserve embroidery and fabric quality',
          availability: 'Made to order with 2-3 weeks delivery time',
          customization: 'Available in custom sizes and color variations',
          features: ['Premium Georgette Fabric', 'Hand Embroidered Details', 'Custom Fit Available', 'Floor Length Design', 'Silk Inner Lining'],
          image: iw1
        },
        {
          id: 2,
          name: 'Fusion Dress',
          description: 'A modern fusion dress that seamlessly blends western contemporary cuts with vibrant ethnic prints and traditional Indian textile patterns. This versatile piece features a comfortable A-line silhouette that flatters all body types while celebrating Indian craftsmanship.',
          collection: 'Contemporary Ethnic Collection',
          fabric: 'Breathable cotton with digital ethnic prints',
          embroidery: 'Block print patterns with mirror work accents',
          occasion: 'Ideal for day events, casual gatherings, office wear, and semi-formal occasions',
          care: 'Gentle hand wash or dry clean recommended',
          availability: 'Ready to ship within 5-7 business days',
          customization: 'Length and sleeve modifications available',
          features: ['Breathable Cotton Fabric', 'Traditional Block Prints', 'A-Line Silhouette', 'Mirror Work Details', 'Easy Care Material'],
          image: iw2
        },
        {
          id: 3,
          name: 'Designer Jumpsuit',
          description: 'A chic designer jumpsuit that revolutionizes traditional Indian wear by incorporating ethnic embellishments on a contemporary western silhouette. This statement piece combines the comfort of modern fashion with the richness of Indian decorative arts.',
          collection: 'Urban Fusion Collection',
          fabric: 'Premium crepe with cotton blend',
          embroidery: 'Sequin and bead embellishments on shoulders and waist',
          occasion: 'Perfect for parties, dinner events, gallery openings, and modern celebrations',
          care: 'Dry clean only due to embellishments',
          availability: 'Limited edition - 3-4 weeks for made-to-order',
          customization: 'Available in petite, regular, and tall lengths',
          features: ['Premium Crepe Fabric', 'Sequin Embellishments', 'Contemporary Cut', 'Side Zip Closure', 'Comfortable Fit'],
          image: iw3
        },
        {
          id: 4,
          name: 'Contemporary Suit',
          description: 'A contemporary suit set that redefines professional ethnic wear by combining modern tailoring with subtle traditional details. This elegant ensemble features clean lines and structured cuts enhanced with delicate Indian embroidery, perfect for the modern working woman.',
          collection: 'Professional Ethnic Collection',
          fabric: 'High-quality linen blend with wrinkle-resistant finish',
          embroidery: 'Minimal thread work on collar and cuffs',
          occasion: 'Ideal for office wear, business meetings, formal events, and professional gatherings',
          care: 'Machine washable on gentle cycle or dry clean',
          availability: 'Ready stock with immediate shipping',
          customization: 'Blazer and trouser alterations available',
          features: ['Linen Blend Fabric', 'Wrinkle-Resistant', 'Professional Tailoring', 'Minimal Embroidery', 'Structured Fit'],
          image: iw4
        }
      ]
    },
    'indo-western': {
      title: 'Indo-Western Collection',
      description: 'Perfect blend of Indian tradition and western silhouettes for the modern woman.',
      heroImage: 'https://images.unsplash.com/photo-1596385193050-d11c9f08e5fc?w=1200&auto=format&fit=crop',
      items: [
        {
          id: 1,
          name: 'Jacket Style Lehenga',
          price: '₹15,999',
          description: 'Trendy jacket style lehenga with contemporary design and traditional embroidery work.',
          collection: 'Designer Indo-Western Collection',
          fabric: 'Premium silk blend with satin inner lining',
          embroidery: 'Designer jacket with zari and sequin work on lehenga',
          occasion: 'Perfect for weddings, cocktail parties, and festive celebrations',
          care: 'Dry clean only to maintain embroidery and fabric shine',
          availability: 'Made to order with 3-4 weeks delivery',
          customization: 'Available in all sizes with color customization',
          features: ['Designer Jacket', 'Embroidered Lehenga', 'Matching Dupatta'],
          image: i1
        },
        {
          id: 2,
          name: 'Cape Dress',
          price: '₹13,999',
          description: 'Elegant cape dress with flowing silhouette and intricate detailing perfect for special occasions.',
          collection: 'Contemporary Fusion Collection',
          fabric: 'Georgette with chiffon cape overlay',
          embroidery: 'Delicate thread work on cape edges with stone embellishments',
          occasion: 'Ideal for engagement parties, receptions, and evening events',
          care: 'Dry clean recommended',
          availability: 'Ready to ship in 2-3 weeks',
          customization: 'Cape length and sleeve style can be customized',
          features: ['Flowing Cape', 'Premium Fabric', 'Elegant Design'],
          image: i2
        },
        {
          id: 3,
          name: 'Dhoti Pants Set',
          price: '₹9,999',
          description: 'Comfortable dhoti pants paired with designer top, perfect fusion of traditional and modern.',
          collection: 'Comfort Fusion Collection',
          fabric: 'Soft crepe with cotton blend for comfort',
          embroidery: 'Minimal embroidery on neckline with printed patterns',
          occasion: 'Perfect for festivals, family gatherings, and casual events',
          care: 'Hand wash or gentle machine wash',
          availability: 'Ready stock available with immediate shipping',
          customization: 'Size adjustments and color options available',
          features: ['Comfortable Fit', 'Unique Style', 'Easy to Wear'],
          image: i31
        },
        {
          id: 4,
          name: 'Fusion Saree',
          price: '₹14,999',
          description: 'Pre-draped fusion saree that combines traditional elegance with modern convenience.',
          collection: 'Modern Saree Collection',
          fabric: 'Shimmer georgette with pre-stitched pleats',
          embroidery: 'Sequin border work with contemporary draping style',
          occasion: 'Ideal for parties, corporate events, and celebrations',
          care: 'Dry clean only',
          availability: 'Pre-stitched and ready to wear, ships in 7-10 days',
          customization: 'Blouse customization available',
          features: ['Pre-draped', 'Contemporary Style', 'Party Ready'],
          image: i4
        }
      ]
    },
    'bridal-blouse': {
      title: 'Bridal Blouse Collection',
      description: 'Exquisitely designed bridal blouses with intricate embroidery and embellishments for your special day.',
      heroImage: 'https://images.unsplash.com/photo-1617627143956-3c9ac17c2e01?w=1200&auto=format&fit=crop',
      items: [
        {
          id: 1,
          name: 'Heavy Work Blouse',
          price: '₹8,999',
          description: 'Heavily embellished bridal blouse with zari and stone work, perfect for your wedding day.',
          collection: 'Bridal Elegance Collection',
          fabric: 'Premium silk with heavy padding and inner lining',
          embroidery: 'Heavy zari work with stone, sequin, and bead embellishments',
          occasion: 'Perfect for wedding ceremonies and bridal photoshoots',
          care: 'Dry clean only to preserve embellishments',
          availability: 'Custom made to order, 4-5 weeks delivery',
          customization: 'Fully customizable design, neck style, and sleeve length',
          features: ['Heavy Embroidery', 'Premium Zari', 'Stone Work'],
          image: gallery1
        },
        {
          id: 2,
          name: 'Aari Work Blouse',
          price: '₹7,999',
          description: 'Traditional aari work blouse handcrafted by skilled artisans with intricate designs.',
          collection: 'Handcrafted Bridal Collection',
          fabric: 'Raw silk with soft inner lining for comfort',
          embroidery: 'Handcrafted aari work with traditional motifs and thread work',
          occasion: 'Ideal for traditional weddings and ceremonial functions',
          care: 'Dry clean only to maintain aari work',
          availability: 'Made to order with 5-6 weeks handcraft time',
          customization: 'Custom patterns and color combinations available',
          features: ['Handcrafted', 'Aari Work', 'Traditional Design'],
          image: gallery2
        },
        {
          id: 3,
          name: 'Maggam Work Blouse',
          price: '₹9,499',
          description: 'Exquisite maggam work blouse with detailed embroidery perfect for South Indian brides.',
          collection: 'South Indian Bridal Collection',
          fabric: 'Pure silk with traditional temple border fabric',
          embroidery: 'Intricate maggam work with zardosi and kundan embellishments',
          occasion: 'Perfect for South Indian weddings and traditional ceremonies',
          care: 'Professional dry clean recommended',
          availability: 'Custom crafted, 6-7 weeks delivery time',
          customization: 'Design, neck pattern, and embroidery density customizable',
          features: ['Maggam Work', 'Rich Design', 'Bridal Collection'],
          image: gallery3
        },
        {
          id: 4,
          name: 'Designer Blouse',
          price: '₹6,999',
          description: 'Contemporary designer blouse with unique cut and embellishments for the modern bride.',
          collection: 'Modern Bridal Collection',
          fabric: 'Stretch satin with comfortable fit and elegant drape',
          embroidery: 'Contemporary designer work with minimal sequin details',
          occasion: 'Ideal for cocktail parties, reception, and modern wedding functions',
          care: 'Dry clean recommended',
          availability: 'Semi-custom, ready in 3-4 weeks',
          customization: 'Neck style, sleeve design, and cut variations available',
          features: ['Modern Cut', 'Designer Work', 'Unique Style'],
          image: gallery4
        }
      ]
    },
    'salwar': {
      title: 'Salwar Collection',
      description: 'Elegant and comfortable salwar suits perfect for every occasion from casual to festive.',
      heroImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1200&auto=format&fit=crop',
      items: [
        {
          id: 1,
          name: 'Anarkali Suit',
          price: '₹7,999',
          description: 'Flowing anarkali suit with beautiful prints and comfortable fit, ideal for festive occasions.',
          collection: 'Festive Ethnic Collection',
          fabric: 'Premium georgette with soft inner lining',
          embroidery: 'Digital print with gota patti and thread work on neckline',
          occasion: 'Perfect for festivals, weddings, and family celebrations',
          care: 'Dry clean or gentle hand wash',
          availability: 'Ready stock available, ships in 3-5 days',
          customization: 'Size and length adjustments available',
          features: ['Flowing Design', 'Festive Wear', 'Comfortable Fit'],
          image: s1
        },
        {
          id: 2,
          name: 'Punjabi Suit',
          price: '₹5,999',
          description: 'Classic Punjabi suit with traditional embroidery and vibrant colors.',
          collection: 'Traditional Punjabi Collection',
          fabric: 'Pure cotton with breathable comfort',
          embroidery: 'Traditional phulkari work with vibrant thread embroidery',
          occasion: 'Ideal for daily wear, casual outings, and cultural events',
          care: 'Machine washable with gentle cycle',
          availability: 'Ready to ship immediately',
          customization: 'Available in multiple color options',
          features: ['Traditional Style', 'Vibrant Colors', 'Quality Fabric'],
          image: s2
        },
        {
          id: 3,
          name: 'Palazzo Suit',
          price: '₹6,499',
          description: 'Trendy palazzo suit set with contemporary design and comfortable palazzo pants.',
          collection: 'Contemporary Comfort Collection',
          fabric: 'Rayon blend with smooth texture and easy drape',
          embroidery: 'Minimal embroidery with modern printed patterns',
          occasion: 'Perfect for office wear, casual meetings, and day events',
          care: 'Hand wash or gentle machine wash',
          availability: 'Ready stock with same-day dispatch',
          customization: 'Palazzo width and length customizable',
          features: ['Trendy Design', 'Palazzo Pants', 'Modern Look'],
          image: s3
        },
        {
          id: 4,
          name: 'Churidar Suit',
          price: '₹5,499',
          description: 'Elegant churidar suit with refined embroidery suitable for both casual and formal wear.',
          collection: 'Versatile Ethnic Collection',
          fabric: 'Cotton silk blend with comfortable stretch',
          embroidery: 'Delicate chikankari work with subtle embellishments',
          occasion: 'Suitable for office wear, family functions, and festive occasions',
          care: 'Dry clean or gentle hand wash',
          availability: 'Available in stock, ships in 2-4 days',
          customization: 'Size and dupatta style options available',
          features: ['Versatile', 'Elegant Design', 'Easy to Wear'],
          image: s4
        }
      ]
    },
    'kids': {
      title: 'Kids Collection',
      description: 'Adorable ethnic wear for your little ones, designed with comfort and style in mind.',
      heroImage: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=1200&auto=format&fit=crop',
      items: [
        {
          id: 1,
          name: 'Kids Lehenga',
          price: '₹4,999',
          description: 'Cute lehenga for kids with comfortable fabric and beautiful embellishments.',
          collection: 'Kids Festive Collection',
          fabric: 'Soft cotton silk blend, gentle on skin',
          embroidery: 'Light sequin work with colorful thread embroidery',
          occasion: 'Perfect for weddings, birthday parties, and festivals',
          care: 'Hand wash with mild detergent',
          availability: 'Ready stock in standard kids sizes',
          customization: 'Size adjustments and color options available',
          features: ['Comfortable', 'Festive Wear', 'Kids Friendly'],
          image: k1
        },
        {
          id: 2,
          name: 'Kids Kurta Set',
          price: '₹3,499',
          description: 'Traditional kurta set for kids perfect for festivals and family gatherings.',
          collection: 'Kids Traditional Collection',
          fabric: '100% soft cotton for all-day comfort',
          embroidery: 'Minimal embroidery with printed traditional patterns',
          occasion: 'Ideal for festivals, cultural programs, and family functions',
          care: 'Machine washable with gentle cycle',
          availability: 'Available in multiple sizes, ships in 2-3 days',
          customization: 'Pajama or churidar bottom options',
          features: ['Traditional', 'Soft Fabric', 'Easy Wear'],
          image: k2
        },
        {
          id: 3,
          name: 'Kids Anarkali',
          price: '₹4,499',
          description: 'Adorable anarkali dress for little girls with playful design and comfortable fit.',
          collection: 'Kids Party Collection',
          fabric: 'Lightweight georgette with cotton inner lining',
          embroidery: 'Sparkly sequin work with colorful thread details',
          occasion: 'Perfect for birthday parties, weddings, and special occasions',
          care: 'Dry clean or gentle hand wash',
          availability: 'Made to order in 2-3 weeks',
          customization: 'Length and size fully customizable',
          features: ['Playful Design', 'Party Wear', 'Comfortable'],
          image: k3
        },
        {
          id: 4,
          name: 'Kids Pavada',
          price: '₹3,999',
          description: 'Traditional pavada for young girls perfect for festivals and celebrations.',
          collection: 'Kids Traditional South Collection',
          fabric: 'Pure cotton with silk border',
          embroidery: 'Traditional zari border with minimal thread work',
          occasion: 'Ideal for traditional festivals, cultural events, and temple visits',
          care: 'Hand wash separately',
          availability: 'Ready stock available in standard sizes',
          customization: 'Custom sizes available on request',
          features: ['Traditional', 'Festive', 'Quality Fabric'],
          image: k4
        }
      ]
    },
    'lehenga': {
      title: 'Lehenga Collection',
      description: 'Stunning lehengas for weddings, festivals, and celebrations, adorned with beautiful embellishments.',
      heroImage: 'https://images.unsplash.com/photo-1596385193050-d11c9f08e5fc?w=1200&auto=format&fit=crop',
      items: [
        {
          id: 1,
          name: 'Bridal Lehenga',
          price: '₹45,999',
          description: 'Exquisite bridal lehenga with heavy embroidery and luxurious fabric for your special day.',
          collection: 'Luxury Bridal Collection',
          fabric: 'Premium silk with velvet panels and satin lining',
          embroidery: 'Heavy zari, zardosi, and kundan work with intricate bridal motifs',
          occasion: 'Perfect for wedding ceremonies, bridal photoshoots, and reception',
          care: 'Professional dry clean only',
          availability: 'Fully customized, 8-10 weeks crafting time',
          customization: 'Complete customization of design, embroidery, and colors',
          features: ['Heavy Embroidery', 'Luxury Fabric', 'Bridal Collection'],
          image: l1
        },
        {
          id: 2,
          name: 'Party Lehenga',
          price: '₹25,999',
          description: 'Glamorous party lehenga with contemporary design and stunning embellishments.',
          collection: 'Party Glam Collection',
          fabric: 'Shimmer georgette with net overlay',
          embroidery: 'Sequin and stone work with modern geometric patterns',
          occasion: 'Ideal for engagement parties, cocktail events, and celebrations',
          care: 'Dry clean recommended',
          availability: 'Semi-custom, ready in 4-5 weeks',
          customization: 'Color and blouse design customizable',
          features: ['Contemporary', 'Party Wear', 'Stunning Design'],
          image: l2
        },
        {
          id: 3,
          name: 'Festive Lehenga',
          price: '₹18,999',
          description: 'Beautiful festive lehenga with traditional work perfect for celebrations.',
          collection: 'Festive Celebration Collection',
          fabric: 'Rich silk with traditional weave patterns',
          embroidery: 'Traditional gota patti and thread work with mirror embellishments',
          occasion: 'Perfect for festivals, family weddings, and cultural events',
          care: 'Dry clean or gentle hand wash',
          availability: 'Ready to ship in 3-4 weeks',
          customization: 'Size and minor design changes available',
          features: ['Traditional Work', 'Festive', 'Rich Colors'],
          image: l3
        },
        {
          id: 4,
          name: 'Designer Lehenga',
          price: '₹32,999',
          description: 'Designer lehenga with unique patterns and modern embellishments.',
          collection: 'Designer Exclusive Collection',
          fabric: 'Imported organza with silk inner layers',
          embroidery: 'Contemporary designer work with 3D floral embellishments',
          occasion: 'Suitable for destination weddings, designer events, and premium functions',
          care: 'Professional dry clean only',
          availability: 'Limited edition, 6-7 weeks delivery',
          customization: 'Complete design customization possible',
          features: ['Designer Piece', 'Unique Pattern', 'Modern'],
          image: l4
        }
      ]
    },
    'pattu-pavada': {
      title: 'Pattu Pavada Collection',
      description: 'Traditional South Indian silk pavadas for young girls, perfect for festivals and special occasions.',
      heroImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1200&auto=format&fit=crop',
      items: [
        {
          id: 1,
          name: 'Silk Pavada',
          price: '₹5,999',
          description: 'Pure silk pavada with traditional zari border perfect for festivals.',
          collection: 'Pure Silk Collection',
          fabric: 'Pure Kanchipuram silk with temple border',
          embroidery: 'Traditional zari border with woven gold thread patterns',
          occasion: 'Perfect for festivals, temple visits, and traditional ceremonies',
          care: 'Dry clean only to preserve silk quality',
          availability: 'Ready stock in standard sizes',
          customization: 'Border style and color options available',
          features: ['Pure Silk', 'Zari Border', 'Traditional'],
          image: p1
        },
        {
          id: 2,
          name: 'Designer Pavada',
          price: '₹6,999',
          description: 'Designer silk pavada with contemporary patterns and traditional elegance.',
          collection: 'Designer Kids Collection',
          fabric: 'Soft silk with modern weave patterns',
          embroidery: 'Contemporary embroidery mixed with traditional motifs',
          occasion: 'Ideal for weddings, parties, and special family functions',
          care: 'Dry clean recommended',
          availability: 'Made to order in 3-4 weeks',
          customization: 'Fully customizable designs and colors',
          features: ['Designer', 'Contemporary', 'Elegant'],
          image: p2
        },
        {
          id: 3,
          name: 'Festive Pavada',
          price: '₹5,499',
          description: 'Festive silk pavada with rich colors and beautiful embellishments.',
          collection: 'Festive Kids Collection',
          fabric: 'Rich silk with vibrant festive colors',
          embroidery: 'Golden zari work with colorful thread embroidery',
          occasion: 'Perfect for Diwali, Pongal, weddings, and celebrations',
          care: 'Hand wash separately or dry clean',
          availability: 'Available in stock, ships in 2-3 days',
          customization: 'Size adjustments available',
          features: ['Rich Colors', 'Festive', 'Quality Silk'],
          image: k4
        },
        {
          id: 4,
          name: 'Traditional Pavada',
          price: '₹4,999',
          description: 'Classic traditional pavada with timeless design for young girls.',
          collection: 'Classic Traditional Collection',
          fabric: 'Traditional silk with classic weave',
          embroidery: 'Simple zari border with traditional temple patterns',
          occasion: 'Suitable for all traditional occasions and daily temple visits',
          care: 'Gentle hand wash or dry clean',
          availability: 'Ready stock available',
          customization: 'Standard size alterations possible',
          features: ['Traditional', 'Timeless', 'Classic Design'],
          image: p4
        }
      ]
    },
    'ready-to-wear-sarees': {
      title: 'Ready to Wear Sarees',
      description: 'Pre-stitched sarees for effortless draping, combining convenience with traditional elegance.',
      heroImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&auto=format&fit=crop',
      items: [
        {
          id: 1,
          name: 'Designer Saree',
          price: '₹12,999',
          description: 'Pre-stitched designer saree with contemporary draping and elegant design.',
          collection: 'Designer Ready-to-Wear Collection',
          fabric: 'Premium georgette with pre-stitched pleats and pallu',
          embroidery: 'Modern embellishments with sequin and thread work',
          occasion: 'Perfect for parties, corporate events, and social gatherings',
          care: 'Dry clean only',
          availability: 'Ready to ship in 7-10 days',
          customization: 'Blouse size and minor adjustments available',
          features: ['Pre-stitched', 'Contemporary', 'Easy to Wear'],
          image: d1
        },
        {
          id: 2,
          name: 'Ruffle Saree',
          price: '₹10,999',
          description: 'Trendy ruffle saree with pre-pleated design ready to wear in minutes.',
          collection: 'Trendy Ruffle Collection',
          fabric: 'Lightweight georgette with layered ruffle work',
          embroidery: 'Minimal border work with modern ruffle layers',
          occasion: 'Ideal for parties, weddings, and festive celebrations',
          care: 'Dry clean recommended',
          availability: 'Pre-stitched and ready, ships immediately',
          customization: 'Blouse customization available',
          features: ['Ruffle Design', 'Trendy', 'Pre-pleated'],
          image: d2
        },
        {
          id: 3,
          name: 'Party Saree',
          price: '₹9,999',
          description: 'Glamorous party saree with shimmer and embellishments perfect for celebrations.',
          collection: 'Party Glam Collection',
          fabric: 'Shimmer georgette with sequin work',
          embroidery: 'All-over sequin work with stone-embellished border',
          occasion: 'Perfect for cocktail parties, receptions, and evening events',
          care: 'Dry clean only to preserve embellishments',
          availability: 'Ready stock, immediate shipping',
          customization: 'Blouse neck and sleeve style options',
          features: ['Glamorous', 'Party Ready', 'Embellished'],
          image: d3
        },
        {
          id: 4,
          name: 'Fusion Saree',
          price: '₹8,999',
          description: 'Modern fusion saree combining traditional draping with contemporary styling.',
          collection: 'Fusion Style Collection',
          fabric: 'Crepe silk with modern drape and fall',
          embroidery: 'Contemporary print patterns with minimal embroidery',
          occasion: 'Suitable for office wear, casual events, and modern gatherings',
          care: 'Hand wash or dry clean',
          availability: 'Available in multiple colors, ships in 5-7 days',
          customization: 'Blouse and draping style variations available',
          features: ['Fusion Style', 'Modern', 'Versatile'],
          image: d4
        }
      ]
    }
  }

  const collection = collectionData[category] || collectionData['western']

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="min-h-screen pt-20 ">
      {/* Hero Section - Image and Text Split */}
     
      <section className="gradient-bg2">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            {/* Hero Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="px-8 md:px-16 py-12 max-w-4xl text-center"
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                {collection.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {collection.description}
              </p>

              <div className="flex flex-wrap gap-6 mb-8 justify-center">
                <div className="flex items-center gap-3">
                  <Package className="secondary" size={24} />
                  <span className="text-gray-700">Premium Quality</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="secondary" size={24} />
                  <span className="text-gray-700">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="secondary" size={24} />
                  <span className="text-gray-700">Secure Shopping</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section - Alternating Layout */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Our Collection
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          {collection.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="mb-20 last:mb-0"
            >
              <div className={`bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-0 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}>
                {/* Product Image */}
                <motion.div
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className={`relative group ${index % 2 === 0 ? '' : 'md:col-start-2'}`}
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Wishlist Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:secondary hover:bg-secondary/10 transition-colors"
                  >
                    <Heart size={20} />
                  </motion.button>

                  {/* Rating Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                    <span className="font-semibold text-gray-900">4.8</span>
                    <span className="text-gray-600 text-sm">(120)</span>
                  </div>
                </motion.div>

                {/* Product Details */}
                <motion.div
                  variants={index % 2 === 0 ? slideInRight : slideInLeft}
                  className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'
                    }`}
                >
                  <div className="mb-4">
                    <span className="inline-block bg-secondary secondary px-4 py-1 rounded-full text-sm font-medium mb-2 text-white">
                      {item.collection}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                    {item.name}
                  </h3>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Detailed Information */}
                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-secondary pl-4">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Fabric Details</p>
                      <p className="text-gray-600">{item.fabric}</p>
                    </div>

                    <div className="border-l-4 border-secondary pl-4">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Embroidery & Work</p>
                      <p className="text-gray-600">{item.embroidery}</p>
                    </div>

                    <div className="border-l-4 border-secondary pl-4">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Perfect For</p>
                      <p className="text-gray-600">{item.occasion}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="pt-6 border-t border-gray-200 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Care Instructions</p>
                        <p className="text-sm text-gray-600">{item.care}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Availability</p>
                        <p className="text-sm text-gray-600">{item.availability}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Customization</p>
                        <p className="text-sm text-gray-600">{item.customization}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 gradient-bg2 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
              Looking for Something Unique?
            </h2>
            <p className="text-black/90 text-lg mb-8 max-w-2xl mx-auto">
              We specialize in custom designs tailored to your preferences. Let us create something special just for you.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-black text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Start Custom Order
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Collection