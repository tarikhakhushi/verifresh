import { kissanJamProduct } from './kissanJamData';

export const productData: Record<string, any> = {
  "coffee-001": {
    id: "coffee-001",
    name: "Ethiopian Single-Origin Coffee",
    category: "Food & Beverage",
    description:
      "Premium Arabica coffee beans from Yirgacheffe region, grown at 1,800m elevation by small-holder farmers.",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800",
    origin: "Yirgacheffe, Ethiopia",
    blockchainId: "0x7f3c4a9e2d1b8f6e5a4c3d2e1f0a9b8c7d6e5f4a",
    lastVerified: "2 hours ago",
    certifications: [
      {
        name: "Fair Trade",
        type: "fairtrade",
        verified: true,
        verifiedBy: "Fairtrade International",
      },
      {
        name: "USDA Organic",
        type: "organic",
        verified: true,
        verifiedBy: "USDA",
      },
      {
        name: "Rainforest Alliance",
        type: "sustainable",
        verified: true,
        verifiedBy: "Rainforest Alliance",
      },
      {
        name: "Blockchain Verified",
        type: "authentic",
        verified: true,
        verifiedBy: "TrueChain Network",
      },
    ],
    journey: [
      {
        location: "Yirgacheffe, Ethiopia",
        date: "Jan 15, 2025",
        status: "Harvested",
        description:
          "Coffee cherries hand-picked by 47 cooperative farmers during peak ripeness season.",
        verifiedBy: "Yirgacheffe Farmers Cooperative",
        coordinates: "6.1623°N, 38.2070°E",
        temperature: "18-22°C",
        blockchainHash: "0x7f3c...5f4a",
      },
      {
        location: "Addis Ababa Processing Facility",
        date: "Jan 18, 2025",
        status: "Processed & Graded",
        description:
          "Washed processing method, Grade 1 quality beans. Sorted and prepared for export.",
        verifiedBy: "Ethiopian Coffee Quality Inspector",
        coordinates: "9.0320°N, 38.7469°E",
        blockchainHash: "0x2a8d...9c3f",
      },
      {
        location: "Djibouti Port",
        date: "Jan 22, 2025",
        status: "Export Customs Cleared",
        description:
          "Quality inspection passed, export documentation verified.",
        verifiedBy: "Djibouti Customs Authority",
        blockchainHash: "0x5b9e...7d2a",
      },
      {
        location: "Rotterdam Port, Netherlands",
        date: "Feb 5, 2025",
        status: "Arrived Import Hub",
        description:
          "Container shipped via sustainable shipping line with reduced emissions.",
        verifiedBy: "Rotterdam Port Authority",
        temperature: "15-18°C",
        blockchainHash: "0x8c4f...3e1b",
      },
      {
        location: "Berlin Roastery",
        date: "Feb 8, 2025",
        status: "Roasted",
        description:
          "Medium roast profile applied using renewable energy roasting equipment.",
        verifiedBy: "Berlin Coffee Roasters GmbH",
        blockchainHash: "0x1d7a...6f9c",
      },
      {
        location: "Distribution Center",
        date: "Feb 10, 2025",
        status: "Ready for Retail",
        description:
          "Packaged in compostable bags and ready for distribution to retail locations.",
        verifiedBy: "VeriFresh Distribution",
        blockchainHash: "0x4e2b...8a5d",
      },
    ],
    environmentalImpact: {
      carbonFootprint: {
        label: "Carbon Footprint",
        value: "1.2 kg CO₂",
        comparison: "45% lower than industry average",
        better: true,
        details:
          "Achieved through renewable energy roasting and efficient shipping practices",
      },
      waterUsage: {
        label: "Water Usage",
        value: "140L per kg",
        comparison: "30% lower than conventional coffee",
        better: true,
        details:
          "Washed processing with water recycling systems in place",
      },
      energyConsumption: {
        label: "Energy Consumption",
        value: "2.8 kWh",
        comparison: "60% from renewable sources",
        better: true,
        details:
          "Solar-powered processing facility and wind energy roasting",
      },
      wasteReduction: {
        label: "Waste Reduction",
        value: "95% recycled",
        comparison: "Coffee pulp used as fertilizer",
        better: true,
        details:
          "Zero-waste processing: pulp composted, husks used as fuel",
      },
      sustainabilityScore: 87,
      certifications: [
        "Carbon Neutral Certified",
        "Water Conservation Program",
        "Renewable Energy Powered",
      ],
    },
    ethicalData: {
      workerRights: {
        fairWages: true,
        safeConditions: true,
        noChildLabor: true,
        unionRights: true,
        details:
          "All farmers receive 3x fair trade minimum price. Cooperative members have full voting rights and profit sharing. Regular health and safety training provided.",
      },
      fairTradePremium: "$0.85/kg",
      communityImpact:
        "Fair trade premium funds local school construction, clean water projects, and healthcare access for 2,400 community members.",
      transparency: {
        supplierInfo:
          "Yirgacheffe Farmers Cooperative (Est. 1998) - 47 certified organic farmers, average farm size 2.5 hectares",
        audits: [
          "Annual Fair Trade audit - Last conducted Jan 2025",
          "USDA Organic inspection - Certified 2022-2027",
          "Worker conditions audit by ILO - Passed with commendation",
        ],
        certifications: [
          "Fair Trade International",
          "USDA Organic",
          "Rainforest Alliance",
          "Direct Trade Partnership",
        ],
      },
      concerns: [],
    },
  },

  "pharma-001": {
    id: "pharma-001",
    name: "Essential Vaccine Batch #2847",
    category: "Pharmaceutical",
    description:
      "WHO-approved pediatric vaccine with complete cold-chain verification and authenticity guarantees.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
    origin: "BioPharm Labs, Switzerland",
    blockchainId: "0x9a2b5c8f1e3d7a6f4b9c2e5d8a1f3b7c9e2d5f8a",
    lastVerified: "15 minutes ago",
    certifications: [
      {
        name: "WHO Prequalified",
        type: "authentic",
        verified: true,
        verifiedBy: "World Health Organization",
      },
      {
        name: "FDA Approved",
        type: "authentic",
        verified: true,
        verifiedBy: "US FDA",
      },
      {
        name: "EMA Certified",
        type: "authentic",
        verified: true,
        verifiedBy: "European Medicines Agency",
      },
      {
        name: "Cold-Chain Verified",
        type: "ethical",
        verified: true,
        verifiedBy: "TrueChain IoT Sensors",
      },
    ],
    journey: [
      {
        location: "BioPharm Labs, Basel, Switzerland",
        date: "Oct 1, 2024",
        status: "Manufactured",
        description:
          "Batch #2847 produced in WHO-certified facility under GMP standards. Quality control passed all safety markers.",
        verifiedBy: "Swissmedic Quality Control",
        temperature: "2-8°C storage initiated",
        blockchainHash: "0x9a2b...9f2b",
      },
      {
        location: "Basel Pharmaceutical Warehouse",
        date: "Oct 3, 2024",
        status: "Quality Tested & Packaged",
        description:
          "Potency testing: 98.7% efficacy confirmed. Packaged with temperature sensors and tamper-proof seals.",
        verifiedBy: "Independent Lab Testing",
        temperature: "4°C maintained",
        blockchainHash: "0x3c7d...2e4a",
      },
      {
        location: "Frankfurt Cold Storage Hub",
        date: "Oct 5, 2024",
        status: "Transit Storage",
        description:
          "Refrigerated storage facility. IoT sensors continuously monitoring temperature.",
        verifiedBy: "Frankfurt Medical Logistics",
        temperature: "3-5°C (verified)",
        blockchainHash: "0x6f1e...8b3c",
      },
      {
        location: "Air Cargo - Medical Flight",
        date: "Oct 7, 2024",
        status: "International Transport",
        description:
          "Specialized pharmaceutical air cargo with climate control. Real-time GPS and temperature tracking active.",
        verifiedBy: "MedAir Logistics",
        temperature: "2-8°C maintained",
        blockchainHash: "0x2d9a...5f7e",
      },
      {
        location: "Regional Distribution Center",
        date: "Oct 9, 2024",
        status: "Import & Customs",
        description:
          "Import documentation verified. WHO certificate authenticated. Cold chain integrity confirmed.",
        verifiedBy: "National Medicine Regulatory Authority",
        temperature: "5°C verified",
        blockchainHash: "0x8b4c...1a6d",
      },
      {
        location: "Hospital Pharmacy Storage",
        date: "Oct 12, 2024",
        status: "Final Destination",
        description:
          "Currently stored in hospital-grade refrigeration. Ready for administration. All seals intact.",
        verifiedBy: "Hospital Chief Pharmacist",
        temperature: "4°C (current)",
        blockchainHash: "0x5e7f...9c2b",
      },
    ],
    environmentalImpact: {
      carbonFootprint: {
        label: "Carbon Footprint",
        value: "8.5 kg CO₂",
        comparison: "20% lower via optimized routes",
        better: true,
        details:
          "Carbon offset through verified environmental projects",
      },
      waterUsage: {
        label: "Water Usage",
        value: "45L per batch",
        comparison: "Industry standard compliance",
        better: true,
        details:
          "Water recycling system in manufacturing process",
      },
      energyConsumption: {
        label: "Energy Consumption",
        value: "15.2 kWh",
        comparison: "80% renewable energy facility",
        better: true,
        details: "Hydroelectric-powered manufacturing plant",
      },
      wasteReduction: {
        label: "Waste Reduction",
        value: "88% recycled",
        comparison: "Medical waste properly disposed",
        better: true,
        details:
          "Packaging materials recyclable, hazardous waste safely treated",
      },
      sustainabilityScore: 78,
      certifications: [
        "Carbon Offset Certified",
        "Renewable Energy Manufacturing",
        "Responsible Packaging",
      ],
    },
    ethicalData: {
      workerRights: {
        fairWages: true,
        safeConditions: true,
        noChildLabor: true,
        unionRights: true,
        details:
          "Pharmaceutical-grade worker safety standards. All staff receive specialized training and protective equipment. Union representation for all manufacturing workers.",
      },
      fairTradePremium: "N/A",
      communityImpact:
        "Company funds vaccination programs in underserved regions. 5% of profits support global health initiatives.",
      transparency: {
        supplierInfo:
          "BioPharm Labs AG - WHO-prequalified manufacturer since 2008. Employs 1,200+ scientists and technicians.",
        audits: [
          "WHO GMP inspection - Passed Oct 2024",
          "FDA facility audit - Compliant status maintained",
          "Worker safety audit - ISO 45001 certified",
          "Cold-chain validation - Complete traceability confirmed",
        ],
        certifications: [
          "WHO Prequalification",
          "FDA Approval",
          "EMA Authorization",
          "GMP Certified",
          "ISO 45001",
        ],
      },
      concerns: [],
    },
  },

  "luxury-001": {
    id: "luxury-001",
    name: "Conflict-Free Diamond Ring",
    category: "Luxury Goods",
    description:
      "1.5 carat ethically sourced diamond with complete mine-to-market traceability and Kimberley Process certification.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
    origin: "Jwaneng Mine, Botswana",
    blockchainId: "0x3f7b2c9a5e1d8f4b6c3a9e7d2f5b8c1a4e7d9f2b",
    lastVerified: "1 day ago",
    certifications: [
      {
        name: "Kimberley Process",
        type: "authentic",
        verified: true,
        verifiedBy: "Kimberley Process Authority",
      },
      {
        name: "Conflict-Free",
        type: "ethical",
        verified: true,
        verifiedBy: "Responsible Jewellery Council",
      },
      {
        name: "GIA Certified",
        type: "authentic",
        verified: true,
        verifiedBy: "Gemological Institute of America",
      },
      {
        name: "Blockchain Tracked",
        type: "authentic",
        verified: true,
        verifiedBy: "TrueChain Network",
      },
    ],
    journey: [
      {
        location: "Jwaneng Mine, Botswana",
        date: "Mar 10, 2024",
        status: "Extracted",
        description:
          "Diamond extracted from ethically operated mine. Rough weight: 2.8 carats. Mine workers receive fair wages and safe conditions.",
        verifiedBy: "Debswana Mining Company",
        coordinates: "24.6°S, 24.7°E",
        blockchainHash: "0x3f7b...9f2b",
      },
      {
        location: "Gaborone Sorting Center",
        date: "Mar 12, 2024",
        status: "Classified & Registered",
        description:
          "Diamond classified and assigned unique serial number. Kimberley Process certificate issued.",
        verifiedBy: "Botswana Diamond Trading Company",
        blockchainHash: "0x1a5c...3d8e",
      },
      {
        location: "Antwerp Diamond Exchange",
        date: "Mar 20, 2024",
        status: "Trade & Export",
        description:
          "Conflict-free certification verified. Export documentation processed through secure channels.",
        verifiedBy: "Antwerp World Diamond Centre",
        blockchainHash: "0x7e9b...4f1c",
      },
      {
        location: "Master Cutter Workshop, Tel Aviv",
        date: "Apr 5, 2024",
        status: "Cut & Polished",
        description:
          "Expert cutting by master craftsman. Final weight: 1.5 carats, Round Brilliant cut, Excellent proportions.",
        verifiedBy: "Israeli Diamond Institute",
        blockchainHash: "0x9d2f...6a8b",
      },
      {
        location: "GIA Laboratory, New York",
        date: "Apr 15, 2024",
        status: "Certified",
        description:
          "Graded as G color, VS1 clarity, Excellent cut. Laser inscribed with certificate number on girdle.",
        verifiedBy: "Gemological Institute of America",
        blockchainHash: "0x4b8c...2e5d",
      },
      {
        location: "Luxury Jeweler, London",
        date: "Apr 25, 2024",
        status: "Set in Ring",
        description:
          "Set in 18K recycled gold band by master jeweler. All provenance documentation attached.",
        verifiedBy: "London Assay Office",
        blockchainHash: "0x6c3a...7f9e",
      },
    ],
    environmentalImpact: {
      carbonFootprint: {
        label: "Carbon Footprint",
        value: "42 kg CO₂",
        comparison: "35% lower than typical mining",
        better: true,
        details:
          "Modern mining practices with carbon offset programs",
      },
      waterUsage: {
        label: "Water Usage",
        value: "380L per carat",
        comparison: "50% water recycled on-site",
        better: true,
        details:
          "Closed-loop water system reduces environmental impact",
      },
      energyConsumption: {
        label: "Energy Consumption",
        value: "45 kWh",
        comparison: "70% solar-powered operations",
        better: true,
        details: "Mine operates on hybrid solar-diesel system",
      },
      wasteReduction: {
        label: "Waste Management",
        value: "92% land rehabilitated",
        comparison: "Progressive rehabilitation program",
        better: true,
        details:
          "Mined areas actively restored to natural habitat",
      },
      sustainabilityScore: 73,
      certifications: [
        "Carbon Offset Program",
        "Water Stewardship Council",
        "Biodiversity Conservation Partner",
      ],
    },
    ethicalData: {
      workerRights: {
        fairWages: true,
        safeConditions: true,
        noChildLabor: true,
        unionRights: true,
        details:
          "Miners receive above-average wages for region. Comprehensive health benefits and safety training. Strong union presence ensures worker representation.",
      },
      fairTradePremium: "$450 community development",
      communityImpact:
        "Mining revenue supports local infrastructure, schools, and healthcare. 12% of profits invested in community development programs benefiting 50,000+ residents.",
      transparency: {
        supplierInfo:
          "Debswana - Joint venture between De Beers and Botswana government (50/50 ownership). Operates under strict ethical guidelines.",
        audits: [
          "Kimberley Process certification - Renewed annually",
          "Responsible Jewellery Council audit - 3-star rating",
          "Worker safety inspection - Zero incidents 2024",
          "Environmental impact assessment - Exceeds requirements",
        ],
        certifications: [
          "Kimberley Process Certified",
          "RJC Certified",
          "ISO 14001 Environmental",
          "Fair Labor Standards",
        ],
      },
      concerns: [],
    },
  },

  "food-001": {
    id: "food-001",
    name: "Organic Salmon Fillet",
    category: "Food & Seafood",
    description:
      "Premium Atlantic salmon from certified sustainable ocean farm with complete feed-to-table traceability.",
    image:
      "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=800",
    origin: "Faroe Islands Ocean Farm",
    blockchainId: "0x5c8a2f6e9b3d1a7c4e9f2b5d8a3c6f1e4b7a9d2c",
    lastVerified: "3 hours ago",
    certifications: [
      {
        name: "MSC Certified",
        type: "sustainable",
        verified: true,
        verifiedBy: "Marine Stewardship Council",
      },
      {
        name: "Organic",
        type: "organic",
        verified: true,
        verifiedBy: "EU Organic Certification",
      },
      {
        name: "ASC Certified",
        type: "ethical",
        verified: true,
        verifiedBy: "Aquaculture Stewardship Council",
      },
      {
        name: "Blockchain Tracked",
        type: "authentic",
        verified: true,
        verifiedBy: "TrueChain Network",
      },
    ],
    journey: [
      {
        location: "Ocean Farm Site 7, Faroe Islands",
        date: "Dec 10, 2024",
        status: "Harvested",
        description:
          "Atlantic salmon harvested at optimal maturity (3 years). Farm operates in strong ocean currents ensuring fish health.",
        verifiedBy: "Faroe Islands Fisheries Inspection",
        coordinates: "62.0°N, 6.8°W",
        temperature: "6-8°C ocean temp",
        blockchainHash: "0x5c8a...9d2c",
      },
      {
        location: "Tórshavn Processing Facility",
        date: "Dec 10, 2024",
        status: "Processed Same-Day",
        description:
          "Fish processed within 4 hours of harvest. Quality inspection passed. Vacuum sealed with oxygen absorbers.",
        verifiedBy: "Faroese Food & Veterinary Authority",
        temperature: "0-2°C",
        blockchainHash: "0x2f7e...4b1a",
      },
      {
        location: "Cold Storage, Tórshavn",
        date: "Dec 11, 2024",
        status: "Quality Testing",
        description:
          "Tested for mercury, PCBs, and contaminants. All levels well below EU safety limits. Omega-3 content verified.",
        verifiedBy: "Independent Food Lab",
        temperature: "-1°C",
        blockchainHash: "0x8d3c...5e9f",
      },
      {
        location: "Refrigerated Air Cargo",
        date: "Dec 12, 2024",
        status: "Export Transport",
        description:
          "Shipped via temperature-controlled air freight. Real-time monitoring active throughout journey.",
        verifiedBy: "Atlantic Cargo Services",
        temperature: "0°C maintained",
        blockchainHash: "0x1b6a...7c4d",
      },
      {
        location: "Distribution Hub, Copenhagen",
        date: "Dec 13, 2024",
        status: "Import Processing",
        description:
          "EU import standards verified. Cold chain integrity confirmed. Ready for distribution.",
        verifiedBy: "Danish Veterinary Authority",
        temperature: "1°C",
        blockchainHash: "0x9e5f...3a8b",
      },
      {
        location: "Retail Store",
        date: "Dec 14, 2024",
        status: "Available for Sale",
        description:
          "Currently displayed in refrigerated case. Best before: Dec 21, 2024. All safety seals intact.",
        verifiedBy: "Store Food Safety Manager",
        temperature: "2°C (current)",
        blockchainHash: "0x4c2d...6f1e",
      },
    ],
    environmentalImpact: {
      carbonFootprint: {
        label: "Carbon Footprint",
        value: "3.2 kg CO₂",
        comparison: "55% lower than conventional farming",
        better: true,
        details:
          "Ocean currents provide natural water flow, reducing energy needs",
      },
      waterUsage: {
        label: "Water Quality",
        value: "Zero pollution",
        comparison:
          "Open ocean location prevents concentration",
        better: true,
        details:
          "Natural ocean currents disperse waste, no antibiotics used",
      },
      energyConsumption: {
        label: "Energy Consumption",
        value: "4.5 kWh",
        comparison: "90% from tidal energy",
        better: true,
        details:
          "Faroe Islands operates on renewable hydroelectric and tidal power",
      },
      wasteReduction: {
        label: "Feed Efficiency",
        value: "1.2:1 ratio",
        comparison: "Industry leading conversion",
        better: true,
        details:
          "Organic feed from sustainable fisheries, minimal waste",
      },
      sustainabilityScore: 91,
      certifications: [
        "Ocean-Friendly Certified",
        "Renewable Energy Powered",
        "Zero Antibiotic Use",
        "Low Carbon Footprint",
      ],
    },
    ethicalData: {
      workerRights: {
        fairWages: true,
        safeConditions: true,
        noChildLabor: true,
        unionRights: true,
        details:
          "All workers receive Faroese minimum wage (highest in fishing industry). Comprehensive maritime safety training. Strong union representation for all employees.",
      },
      fairTradePremium: "N/A (Fair wages standard)",
      communityImpact:
        "Company invests in marine conservation research and local coastal community infrastructure. Supports 400+ jobs in Faroe Islands.",
      transparency: {
        supplierInfo:
          "Bakkafrost ASC - Family-owned company operating since 1968. Third-generation sustainable aquaculture.",
        audits: [
          "ASC annual audit - Full compliance 2024",
          "MSC sustainability review - 5-year certification",
          "EU organic inspection - Certified 2023-2026",
          "Worker safety audit - Maritime safety excellence award",
        ],
        certifications: [
          "ASC Certified",
          "MSC Certified",
          "EU Organic",
          "Friend of the Sea",
          "Global G.A.P.",
        ],
      },
      concerns: [],
    },
  },

  "kissan-jam-001": kissanJamProduct,
};