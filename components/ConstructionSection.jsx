"use client";

import { useState, useEffect } from "react";
import {
  Package,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  Globe,
  TrendingUp,
  Hammer,
  Star,
  Shield,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ConstructionSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Construction product categories
  const categories = [
    "All",
    "Building Materials",
    "Hardware",
    "Painting",
    "Tools",
    "Plumbing & Sanitary",
    "Wood",
  ];

  // Auto-rotate carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const newIndex = { ...prev };
        products.forEach((product) => {
          if (product.images && product.images.length > 1) {
            const currentIdx = prev[product.id] || 0;
            newIndex[product.id] = (currentIdx + 1) % product.images.length;
          }
        });
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Construction products data from CSV
  const products = [
    // Painting Products
    {
      id: 1,
      name: "National Polyester Putty 3.5kg",
      category: "Painting",
      itemGroup: "Stucco, Putty & Filler",
      image:
        "/construction/painting/National_Polyester_Putty_Light_Weight-35kg.jpg",
      description:
        "Light weight polyester putty for automobiles and wooden surfaces. Good rheological properties for uniform leveling.",
      features: [
        "Repair and dent filler",
        "For automobiles & wood",
        "Uniform surface leveling",
        "Dry and wet sanding",
      ],
      featured: true,
    },
    {
      id: 2,
      name: "National Polyester Putty 1.5kg",
      category: "Painting",
      itemGroup: "Stucco, Putty & Filler",
      image:
        "/construction/painting/National_Polyester_Putty_Light_Weight-15kg.jpg",
      description:
        "Light weight polyester putty for automobiles and wooden surfaces. Good rheological properties for uniform leveling.",
      features: [
        "Repair and dent filler",
        "For automobiles & wood",
        "Uniform surface leveling",
        "Dry and wet sanding",
      ],
      featured: false,
    },
    {
      id: 3,
      name: "National PU Wood Thinner 200Ltr",
      category: "Painting",
      itemGroup: "Solvents & Thinners",
      image:
        "/construction/painting/National_PU_Wood_Thinner_Normal_T1_200Ltr_A58300000200L.jpg",
      description:
        "Two pack polyurethane topcoat with excellent water, salt & corrosion resistance. UV resistant for interior & exterior applications.",
      features: [
        "Colour retentive glossy finish",
        "Excellent water resistance",
        "UV resistant",
        "Marine conditions suitable",
      ],
      featured: true,
    },
    {
      id: 4,
      name: "National PU Wood Thinner 18Ltr",
      category: "Painting",
      itemGroup: "Solvents & Thinners",
      image:
        "/construction/painting/National_PU_Wood_Thinner_Normal_T1_18Ltr_A5830000020L.jpg",
      description:
        "Two pack polyurethane topcoat with excellent water, salt & corrosion resistance. UV resistant for interior & exterior applications.",
      features: [
        "Colour retentive glossy finish",
        "Excellent water resistance",
        "UV resistant",
        "Marine conditions suitable",
      ],
      featured: false,
    },
    {
      id: 5,
      name: "National Epoxy Thinner 18Ltr",
      category: "Painting",
      itemGroup: "Solvents & Thinners",
      image: "/construction/painting/National_Epoxy_Thinner-18Ltr.jpg",
      description:
        "Thinner for epoxy based protective coatings. Gives good flow and improves brush ability.",
      features: [
        "For epoxy coatings",
        "Improves brush ability",
        "Good flow properties",
        "Tool cleaning suitable",
      ],
      featured: false,
    },
    {
      id: 6,
      name: "National Lacquer Thinner 0.9Ltr",
      category: "Painting",
      itemGroup: "Solvents & Thinners",
      image: "/construction/painting/National_Lacquer_Thinner-09Ltr.jpg",
      description:
        "Medium for dilution of alkyd, P.U, epoxy and NC paints. Used for ease of paint application.",
      features: [
        "Multi-coating compatible",
        "Easy application",
        "Alkyd & PU suitable",
        "NC paints compatible",
      ],
      featured: false,
    },
    {
      id: 7,
      name: "National Lacquer Thinner 3.6Ltr",
      category: "Painting",
      itemGroup: "Solvents & Thinners",
      image: "/construction/painting/National_Lacquer_Thinner-36Ltr.png",
      description:
        "Medium for dilution of alkyd, P.U, epoxy and NC paints. Used for ease of paint application.",
      features: [
        "Multi-coating compatible",
        "Easy application",
        "Alkyd & PU suitable",
        "NC paints compatible",
      ],
      featured: false,
    },
    {
      id: 8,
      name: "Jotun Paint Thinner 5Ltr No.2",
      category: "Painting",
      itemGroup: "Solvents & Thinners",
      image: "/construction/painting/Jotun_Paint_Thinner_5Ltr_No2.jpg",
      description:
        "Solvent for thinning alkyd and oil based products. Also used as cleaner for pumps & tools.",
      features: [
        "Alkyd & oil based",
        "Pump & tool cleaner",
        "Safe storage required",
        "Jotun quality",
      ],
      featured: true,
    },
    {
      id: 9,
      name: "National NC Thinner 18Ltr",
      category: "Painting",
      itemGroup: "Solvents & Thinners",
      image:
        "/construction/painting/National_NC_Thinner_E_18Ltr_A5860000020L.jpg",
      description:
        "Nitro cellulose thinner - mixture of esters, glycol, alcohol, aromatic solvents and ketones for all nitro products.",
      features: [
        "For nitro products",
        "Precise blend ratio",
        "Lacquer reduction",
        "Multiple methods",
      ],
      featured: false,
    },
    {
      id: 10,
      name: "National NC Thinner 200Ltr",
      category: "Painting",
      itemGroup: "Solvents & Thinners",
      image:
        "/construction/painting/National_NC_Thinner_E_200Ltr_A58600000200L.jpg",
      description:
        "Nitro cellulose thinner - mixture of esters, glycol, alcohol, aromatic solvents and ketones for all nitro products.",
      features: [
        "For nitro products",
        "Precise blend ratio",
        "Lacquer reduction",
        "Bulk quantity",
      ],
      featured: false,
    },
    {
      id: 11,
      name: "National PU Wood Thinner Slow Dry 0.9Ltr",
      category: "Painting",
      itemGroup: "Solvents & Thinners",
      image:
        "/construction/painting/National_PU_Wood_Thinner_Slow_Dry_09Ltr_A585000001L.jpg",
      description:
        "Paint thinner that dissolves paint and reduces viscosity for sprayer applicators. Aids in paint removal and cleanup.",
      features: [
        "Slow drying formula",
        "Sprayer compatible",
        "Paint removal aid",
        "Cleanup suitable",
      ],
      featured: false,
    },
    // Building Materials
    {
      id: 12,
      name: 'Gi-Block Mesh 6" X 45Mtr',
      category: "Building Materials",
      itemGroup: "Nets & Mesh",
      image: "/construction/building-materials/Gi-Block_Mesh_6_X_45Mtr.jpg",
      description:
        "Metal mesh that adds strength to bricks and prevents cracking. Ideal for reinforcing window and wall openings.",
      features: [
        "Brick reinforcement",
        "Prevents cracking",
        "Single sheet production",
        "Model making suitable",
      ],
      featured: true,
    },
    {
      id: 13,
      name: "Asmaco PU Foam Gold 750ml",
      category: "Building Materials",
      itemGroup: "PU Foam",
      image: "/construction/building-materials/Asmaco_Pu_Foam_Gold_750ml.jpg",
      description:
        "Efficient seal against smoke and gas. Quick drying, moisture curing with thermal insulation characteristics.",
      features: [
        "Smoke & gas seal",
        "Quick drying",
        "Thermal insulation",
        "CFC free",
      ],
      featured: true,
    },
    // Hardware
    {
      id: 14,
      name: "Veneer Lipping Mahogany 22mmX50Mtr",
      category: "Hardware",
      itemGroup: "Veneer Lipping",
      image:
        "/construction/hardware/Venner_Lipping_With_Glue_Mahogany-22mmX50Mtr.jpg",
      description:
        "Highest grade pre-glued maple wood veneer edging for cabinetry, furniture, DIY projects and shelving.",
      features: [
        "Pre-glued with adhesive",
        "Finely sanded finish",
        "German hot melt glue",
        "Household iron apply",
      ],
      featured: true,
    },
    // Plumbing & Sanitary
    {
      id: 15,
      name: "Geepas Angle Valve GSW61113",
      category: "Plumbing & Sanitary",
      itemGroup: "Bathroom Accessories",
      image: "/construction/plumbing-sanitary/Geepas_Angle_Valve-GSW61113.jpg",
      description:
        "High-quality stylish radiator valve with chrome plated solid brass. Perfect shining finish with maximum rust protection.",
      features: [
        "Chrome plated brass",
        "Rust protection",
        "Designer look",
        "Highly durable",
      ],
      featured: true,
    },
    {
      id: 16,
      name: 'RAK Angle Valve CP 1/2" 33003',
      category: "Plumbing & Sanitary",
      itemGroup: "Bathroom Accessories",
      image: "/construction/plumbing-sanitary/RAK_Angle_Valve-CP-12-33003.jpg",
      description:
        "Chrome plated product with perfect finishing. Ceramic disc fitting and ABS handle with brass 1/4 turn valve.",
      features: [
        "Chrome plated",
        "Ceramic disc fitting",
        "ABS handle",
        "1/4 turn valve",
      ],
      featured: false,
    },
    {
      id: 17,
      name: 'Milano Square Angle Valve 1/2"',
      category: "Plumbing & Sanitary",
      itemGroup: "Bathroom Accessories",
      image:
        "/construction/plumbing-sanitary/Milano_Square_Angle_Valve-12-140800300063.jpg",
      description:
        "High-quality material for long term use. Thread type valve with secure closure and shiny polished finish.",
      features: [
        "Long term durability",
        "Thread type valve",
        "Secure closure",
        "Polished finish",
      ],
      featured: false,
    },
    {
      id: 18,
      name: 'RAK Ceramics Angle Valve 1/2" 13013',
      category: "Plumbing & Sanitary",
      itemGroup: "Bathroom Accessories",
      image:
        "/construction/plumbing-sanitary/RAK_Ceramics_Angle_Valve-12-13013.jpg",
      description:
        "Beautiful chrome plated product with perfect finishing. High quality authentic valve with ceramic disc fitting.",
      features: [
        "Chrome plated",
        "Ceramic disc fitting",
        "ABS handle",
        "Authentic quality",
      ],
      featured: false,
    },
    {
      id: 19,
      name: "Geepas Angle Valve GSW61132",
      category: "Plumbing & Sanitary",
      itemGroup: "Bathroom Accessories",
      image:
        "/construction/plumbing-sanitary/Geepas_Angle_Valve_-_GSW61132.jpeg",
      description:
        "Non-ferrous angle valve with solid knob. Quality solid metal construction with 1/4 turn ceramic brass cartridge.",
      features: [
        "Non-ferrous material",
        "Solid metal construction",
        "Ceramic brass cartridge",
        "Hot & cold water",
      ],
      featured: false,
    },
    {
      id: 20,
      name: "Geepas Angle Valve GSW61134",
      category: "Plumbing & Sanitary",
      itemGroup: "Bathroom Accessories",
      image:
        "/construction/plumbing-sanitary/Geepas_Angle_Valve_-_GSW61134.jpg",
      description:
        "Stylized slim-line design with premium non-ferrous materials. Durable, corrosion and abrasion-resistant.",
      features: [
        "Slim-line design",
        "Non-ferrous materials",
        "Corrosion resistant",
        "Lifetime durability",
      ],
      featured: false,
    },
    {
      id: 21,
      name: "RAK Kludi Polaris Sink Mixer RAK10050",
      category: "Plumbing & Sanitary",
      itemGroup: "Sanitary",
      image:
        "/construction/plumbing-sanitary/RAK_Kludi_Polaris_Single_Lever_Sink_Mixer_-_RAK10050.jpeg",
      description:
        "Single lever sink mixer with ceramic cartridge and hot water safety device. Flexible high pressure supply tubes.",
      features: [
        "Ceramic cartridge 35mm",
        "Hot water safety device",
        "High pressure tubes",
        "Rapid installation",
      ],
      featured: true,
    },
    {
      id: 22,
      name: "Geepas Bathroom Accessories 8pc GSW61704",
      category: "Plumbing & Sanitary",
      itemGroup: "Bathroom Accessories",
      image:
        "/construction/plumbing-sanitary/Geepas_Bathroom_Accessories_1x8_-_GSW61704.jpg",
      description:
        "7-in-1 master bathroom accessories set. Includes towel ring, towel rail, robe hook and toilet paper holder.",
      features: [
        "7-in-1 set",
        "Easy clean coating",
        "High shine finish",
        "Complete bathroom set",
      ],
      featured: false,
    },
    // Tools
    {
      id: 23,
      name: "Makita Jigsaw Blade B-12 A-85640",
      category: "Tools",
      itemGroup: "Sawing Acc.",
      image: "/construction/tools/Makita_Jigsaw_Blade_B-12_A-85640.jpg",
      description:
        "High-quality jigsaw blade with symmetrical tip geometry. Designed for fast finishing of wood and plastic.",
      features: [
        "High-quality material",
        "Symmetrical tip",
        "Sharp teeth design",
        "Wood & plastic cutting",
      ],
      featured: true,
    },
    // Wood Products
    {
      id: 24,
      name: "Kingdo Commercial Plywood 18mm",
      category: "Wood",
      itemGroup: "Commercial Plywood",
      image: "/construction/wood/Kingdo_Commercial_Plywood_18mmx122x244cm.jpg",
      description:
        "Commercial plywood for furniture base panels like sofa, wardrobe, cabinet. Moisture resistant and durable.",
      features: [
        "122x244cm size",
        "Moisture resistant",
        "Furniture grade",
        "Multi-purpose use",
      ],
      featured: true,
    },
    {
      id: 25,
      name: "JR 18mm Marine Plywood Plex Premium",
      category: "Wood",
      itemGroup: "Marine Plywood",
      image: "/construction/wood/JR_18mm_Marine_Plywood_Plex-Premium.jpg",
      description:
        "Premium marine grade plywood, highly water-resistant and boiling water proof. Sustains 500+ hours in boiling water.",
      features: [
        "Boiling water proof",
        "500+ hours tested",
        "Outdoor furniture",
        "Boat manufacturing",
      ],
      featured: true,
    },
    {
      id: 26,
      name: "JR 18mm Marine Plywood Film Face",
      category: "Wood",
      itemGroup: "Marine Plywood",
      image: "/construction/wood/JR_18mm_Marine_Plywood-Film_Face.jpg",
      description:
        "Marine plywood for partition walls, furniture, cupboards, kitchen cabinets, office tables, and light doors.",
      features: [
        "Partition walls",
        "Kitchen cabinets",
        "Office furniture",
        "Light doors & shutters",
      ],
      featured: false,
    },
    {
      id: 27,
      name: "6mm Bendply Vertical",
      category: "Wood",
      itemGroup: "Commercial Plywood",
      image: "/construction/wood/6mm_Bendply_Vertical_55mm_Generic.jpeg",
      description:
        "Flexible plywood for curved furniture, interior elements, lamp stands, ornamental woodwork and staircases.",
      features: [
        "Curved furniture",
        "Ornamental woodwork",
        "Staircases",
        "Office furniture",
      ],
      featured: false,
    },
    {
      id: 28,
      name: "6mm Bendply Horizontal",
      category: "Wood",
      itemGroup: "Commercial Plywood",
      image: "/construction/wood/6mm_Bendply_Horizontal_55mm_Generic.jpg",
      description:
        "Flexible plywood for curved furniture, interior elements, lamp stands, ornamental woodwork and staircases.",
      features: [
        "Curved furniture",
        "Ornamental woodwork",
        "Staircases",
        "Office furniture",
      ],
      featured: false,
    },
    {
      id: 29,
      name: "6mm Plain MDF Thailand",
      category: "Wood",
      itemGroup: "Plain MDF",
      image: "/construction/wood/6mm_Plain_MDF_Thailand_4Ft_X_8Ft.jpg",
      description:
        "Versatile MDF for furniture, skirting boards, doors, wall panels, flooring and kitchen cabinets. 4Ft X 8Ft size.",
      features: [
        "4Ft x 8Ft size",
        "Furniture industry",
        "Laminate flooring",
        "Kitchen cabinets",
      ],
      featured: false,
    },
    {
      id: 30,
      name: "6mm FR MDF Thailand",
      category: "Wood",
      itemGroup: "FR MDF",
      image: "/construction/wood/6mm_FR_MDF_Thailand_4Ft_x_8Ft.jpg",
      description:
        "Fire-rated MDF with exact machining qualities as typical MDF. Environmentally friendly from recycled wood fibres.",
      features: [
        "Fire rated",
        "Easy to work",
        "Environmentally friendly",
        "Recycled wood fibres",
      ],
      featured: true,
    },
    {
      id: 31,
      name: "9mm FR MDF Thailand",
      category: "Wood",
      itemGroup: "FR MDF",
      image: "/construction/wood/9mm_FR_MDF_Thailand_4Ft_x_8Ft.jpg",
      description:
        "Fire-rated MDF with exact machining qualities as typical MDF. Environmentally friendly from recycled wood fibres.",
      features: [
        "Fire rated",
        "Easy to work",
        "Environmentally friendly",
        "9mm thickness",
      ],
      featured: false,
    },
    {
      id: 32,
      name: "6mm Commercial Plywood China",
      category: "Wood",
      itemGroup: "Commercial Plywood",
      image: "/construction/wood/6Mm-Commercial_Plywood-China.jpg",
      description:
        "Commercial plywood for furniture inside base panels. Moisture resistant and durable for various applications.",
      features: [
        "Moisture resistant",
        "Furniture grade",
        "Interior decoration",
        "Packing materials",
      ],
      featured: false,
    },
    {
      id: 33,
      name: "6mm Commercial Plywood India",
      category: "Wood",
      itemGroup: "Commercial Plywood",
      image: "/construction/wood/6mm-Commercial_Plywood-India.jpg",
      description:
        "Commercial plywood for furniture inside base panels. Moisture resistant and durable for various applications.",
      features: [
        "Moisture resistant",
        "Furniture grade",
        "Interior decoration",
        "Packing materials",
      ],
      featured: false,
    },
    {
      id: 34,
      name: "15mm Commercial Plywood Indonesia",
      category: "Wood",
      itemGroup: "Commercial Plywood",
      image:
        "/construction/wood/15mm_Commercial_Plywood_Indonesia_4Ft_x_8Ft.jpg",
      description:
        "Commercial plywood for furniture base panels. 4Ft x 8Ft size, moisture resistant and durable.",
      features: [
        "4Ft x 8Ft size",
        "15mm thickness",
        "Moisture resistant",
        "Indonesia origin",
      ],
      featured: false,
    },
    {
      id: 35,
      name: "12mm Commercial Plywood Indonesia",
      category: "Wood",
      itemGroup: "Commercial Plywood",
      image:
        "/construction/wood/12mm_Commercial_Plywood_Indonesia_4Ft_x_8Ft.jpg",
      description:
        "Commercial plywood for furniture base panels. 4Ft x 8Ft size, moisture resistant and durable.",
      features: [
        "4Ft x 8Ft size",
        "12mm thickness",
        "Moisture resistant",
        "Indonesia origin",
      ],
      featured: false,
    },
    {
      id: 36,
      name: "9mm Commercial Plywood Indonesia",
      category: "Wood",
      itemGroup: "Commercial Plywood",
      image:
        "/construction/wood/9mm_Commercial_Plywood_Indonesia_4Ft_x_8Ft.jpg",
      description:
        "Commercial plywood for furniture base panels. 4Ft x 8Ft size, moisture resistant and durable.",
      features: [
        "4Ft x 8Ft size",
        "9mm thickness",
        "Moisture resistant",
        "Indonesia origin",
      ],
      featured: false,
    },
    {
      id: 37,
      name: "6mm Commercial Plywood Indonesia",
      category: "Wood",
      itemGroup: "Commercial Plywood",
      image:
        "/construction/wood/6mm_Commercial_Plywood_Indonesia_4Ft_x_8Ft.jpg",
      description:
        "Commercial plywood for furniture base panels. 4Ft x 8Ft size, moisture resistant and durable.",
      features: [
        "4Ft x 8Ft size",
        "6mm thickness",
        "Moisture resistant",
        "Indonesia origin",
      ],
      featured: false,
    },
    {
      id: 38,
      name: "JR 18mm Commercial Plywood India",
      category: "Wood",
      itemGroup: "Commercial Plywood",
      image:
        "/construction/wood/JR_18mm_Commercial_Plywood_India_4Ft_x_8Ft.jpg",
      description:
        "Grade A commercial plywood for partition walls, furniture, cupboards, kitchen cabinets and office tables.",
      features: [
        "Grade A quality",
        "18mm thickness",
        "Partition walls",
        "Kitchen cabinets",
      ],
      featured: false,
    },
    {
      id: 39,
      name: "JR 6mm Commercial Plywood India",
      category: "Wood",
      itemGroup: "Commercial Plywood",
      image: "/construction/wood/JR_6mm_Commercial_Plywood_India_4Ft_x_8Ft.jpg",
      description:
        "Commercial plywood for furniture base panels. Moisture resistant and durable for various applications.",
      features: [
        "6mm thickness",
        "Moisture resistant",
        "Furniture grade",
        "India origin",
      ],
      featured: false,
    },
    {
      id: 40,
      name: "JR 12mm Commercial Plywood India",
      category: "Wood",
      itemGroup: "Commercial Plywood",
      image:
        "/construction/wood/JR_12mm_Commercial_Plywood_India_4Ft_x_8Ft.jpg",
      description:
        "Commercial plywood for furniture manufacturing, interior decoration, container floors and packing materials.",
      features: [
        "12mm thickness",
        "Multi-purpose use",
        "Interior decoration",
        "Container floors",
      ],
      featured: false,
    },
    {
      id: 41,
      name: "9mm Plain MDF Thailand",
      category: "Wood",
      itemGroup: "Plain MDF",
      image: "/construction/wood/9mm_Plain_MDF_Thailand_4Ft_x_8Ft.jpg",
      description:
        "Versatile MDF for cabinets, wardrobes, desks, doors, wall panels, flooring and kitchen cabinets. 4Ft x 8Ft size.",
      features: [
        "4Ft x 8Ft size",
        "9mm thickness",
        "Laminate flooring",
        "Store fixtures",
      ],
      featured: false,
    },
    {
      id: 42,
      name: "12mm Plain MDF Thailand",
      category: "Wood",
      itemGroup: "Plain MDF",
      image: "/construction/wood/12mm_Plain_MDF_Thailand_4Ft_x_8Ft.jpg",
      description:
        "MDF for furniture industry, skirting boards, architraves, packaging and flooring. 4Ft x 8Ft size.",
      features: [
        "4Ft x 8Ft size",
        "12mm thickness",
        "Skirting boards",
        "Prefinished paneling",
      ],
      featured: false,
    },
    {
      id: 43,
      name: "15mm Plain MDF Thailand",
      category: "Wood",
      itemGroup: "Plain MDF",
      image: "/construction/wood/15mm_Plain_MDF_Thailand_4Ft_x_8Ft.jpg",
      description:
        "MDF for furniture industry, skirting boards, architraves, doors and laminate flooring core. 4Ft x 8Ft size.",
      features: [
        "4Ft x 8Ft size",
        "15mm thickness",
        "Laminate flooring core",
        "Office furniture",
      ],
      featured: false,
    },
  ];

  // Filter products
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Featured products
  const featuredProducts = products.filter((product) => product.featured);

  // Stats
  const stats = [
    {
      icon: Package,
      label: "Products",
      value: "43+",
      color: "text-teal-600",
    },
    {
      icon: Globe,
      label: "Source Countries",
      value: "10+",
      color: "text-blue-600",
    },
    {
      icon: Award,
      label: "Quality Certified",
      value: "100%",
      color: "text-purple-600",
    },
    {
      icon: TrendingUp,
      label: "Industry Experience",
      value: "8+ Years",
      color: "text-orange-600",
    },
  ];

  // Why choose our construction materials
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "Construction materials meeting international standards for durability and performance",
    },
    {
      icon: Shield,
      title: "Certified Products",
      description:
        "All materials come with quality certifications and compliance documentation",
    },
    {
      icon: Hammer,
      title: "Industry Expertise",
      description:
        "Years of experience supplying contractors, retailers, and construction projects",
    },
    {
      icon: Package,
      title: "Flexible Orders",
      description:
        "From small orders to bulk shipments, we accommodate all project sizes",
    },
  ];

  return (
    <section className="relative min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg)] dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-teal-950 bg-top bg-no-repeat opacity-20" />

      {/* Animated background dots */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-slate-900/80 pointer-events-none" />

      <div className="relative z-0 flex flex-col items-center px-4 sm:px-6 md:px-8 text-black dark:text-white text-sm pb-28 pt-8">
        <div className="w-full max-w-7xl mx-auto px-4 mt-16">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-900/40 rounded-full mb-6">
              <Hammer className="size-5 text-teal-600 dark:text-teal-400" />
              <span className="text-xs sm:text-sm font-medium text-teal-700 dark:text-teal-300">
                Construction Materials
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 bg-gradient-to-r from-black dark:from-white to-teal-600 dark:to-teal-400 text-transparent bg-clip-text px-2 break-words">
              Building Materials & Solutions
            </h1>

            <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8">
              Quality construction materials including{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-400">
                plywood, MDF, paints, thinners, plumbing fixtures,
              </span>{" "}
              and building essentials for your projects across Africa.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <stat.icon
                    className={`size-8 ${stat.color} dark:brightness-125 mx-auto mb-3`}
                  />
                  <div className="text-3xl font-bold text-black dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Products */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className="size-6 text-teal-600 dark:text-teal-400 fill-current" />
              <h2 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white px-2">
                Featured Materials
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer h-80 shadow-xl hover:shadow-2xl transition-all duration-500"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/90 group-hover:via-black/70 group-hover:to-black/20 transition-all duration-500" />
                  </div>

                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-1 bg-teal-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                      <Star className="size-3 fill-current" />
                      Featured
                    </div>
                  </div>

                  <div
                    className={`absolute inset-x-0 bottom-0 p-6 pb-8 z-10 transition-all duration-500 ${
                      hoveredProduct === product.id
                        ? "translate-y-0"
                        : "translate-y-[calc(100%-100px)]"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {product.name}
                    </h3>

                    <div
                      className={`transition-all duration-500 ${
                        hoveredProduct === product.id
                          ? "opacity-100 max-h-96"
                          : "opacity-0 max-h-0"
                      } overflow-hidden`}
                    >
                      <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-medium mb-3">
                        {product.category}
                      </div>

                      <p className="text-white/80 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-center gap-2 text-teal-400 font-semibold text-sm">
                        <span>View Details</span>
                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-black dark:text-white mb-6">
              Browse by Category
            </h2>

            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-teal-600 dark:bg-teal-700 text-white shadow-lg scale-105"
                      : "bg-white/80 dark:bg-slate-800/80 text-black dark:text-white border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* All Products Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-black dark:text-white mb-8">
              {selectedCategory === "All" ? "All Materials" : selectedCategory}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const productImages = product.images || [product.image];
                const currentIndex = currentImageIndex[product.id] || 0;

                return (
                  <div
                    key={product.id}
                    className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                  >
                    <div className="relative w-full h-96 bg-white  overflow-hidden">
                      <Image
                        src={productImages[currentIndex]}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transition-all duration-1000 ease-in-out "
                      />

                      {productImages.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                          {productImages.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex((prev) => ({
                                  ...prev,
                                  [product.id]: idx,
                                }));
                              }}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentIndex
                                  ? "bg-teal-600 w-6"
                                  : "bg-slate-300 dark:bg-slate-600"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {product.name}
                      </h3>
                      <div className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 text-xs rounded-full font-medium mb-4">
                        {product.category}
                      </div>
                      <p className="text-zinc-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                        {product.description}
                      </p>

                      <div className="mb-4">
                        <p className="text-xs font-semibold text-zinc-500 dark:text-slate-500 mb-2 uppercase tracking-wide">
                          Key Features
                        </p>
                        <div className="space-y-1.5">
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-xs text-zinc-700 dark:text-slate-300"
                            >
                              <CheckCircle2 className="size-3.5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-teal-600 dark:text-teal-400 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                        <span>View Full Details</span>
                        <ArrowRight className="size-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
                Why Choose Our Materials?
              </h2>
              <p className="text-zinc-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                Quality construction materials backed by expertise and
                reliability
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-5 p-6 bg-gradient-to-r from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-slate-200 dark:border-slate-600 hover:border-teal-400 dark:hover:border-teal-500 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="size-8 text-white" />
                  </div>

                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-slate-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-12 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-zinc-600 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Contact us for product specifications, pricing, and delivery
              options for your construction needs
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Request Quote
                <ArrowRight className="size-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-black dark:text-white px-8 py-4 rounded-full font-semibold border-2 border-slate-200 dark:border-slate-600 transition-all duration-200 hover:scale-105"
              >
                View Food Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
