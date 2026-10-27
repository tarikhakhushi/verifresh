import { kissanJamProduct } from './kissanJamData';

export const foodProductData: Record<string, any> = {
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
        location: "Mumbai Port, India",
        date: "Feb 5, 2025",
        status: "Arrived Import Hub",
        description:
          "Container shipped via sustainable shipping line with reduced emissions.",
        verifiedBy: "Mumbai Port Authority",
        temperature: "15-18°C",
        blockchainHash: "0x8c4f...3e1b",
      },
      {
        location: "Delhi Roastery",
        date: "Feb 8, 2025",
        status: "Roasted",
        description:
          "Medium roast profile applied using renewable energy roasting equipment.",
        verifiedBy: "India Coffee Roasters Pvt Ltd",
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
          "All farmers receive 3x fair trade minimum price. Cooperative members have full voting rights and profit sharing.",
      },
      fairTradePremium: "₹65/kg",
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

  "canned-tomato-001": {
    id: "canned-tomato-001",
    name: "Organic Canned Tomatoes",
    category: "Canned Food",
    description:
      "Premium vine-ripened tomatoes, harvested and canned within 6 hours. No preservatives, FSSAI certified with complete farm-to-can traceability.",
    image:
      "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800",
    origin: "Nashik, Maharashtra",
    blockchainId: "0x8a3f7e9c2d5b1a6f4e8c9d2a5f7b3e1c6f9d4a2b",
    lastVerified: "1 hour ago",
    certifications: [
      {
        name: "FSSAI Certified",
        type: "authentic",
        verified: true,
        verifiedBy: "Food Safety and Standards Authority of India",
      },
      {
        name: "Organic India",
        type: "organic",
        verified: true,
        verifiedBy: "Organic Certification Agency",
      },
      {
        name: "No Preservatives",
        type: "quality",
        verified: true,
        verifiedBy: "Independent Lab Testing",
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
        location: "Ramesh Patil Farm, Nashik",
        date: "Oct 20, 2024",
        status: "Harvested",
        description:
          "Organic tomatoes harvested at peak ripeness. Brix level: 4.8%, perfect for canning.",
        verifiedBy: "Maharashtra Organic Certification",
        coordinates: "19.9975°N, 73.7898°E",
        temperature: "22-25°C",
        blockchainHash: "0x8a3f...4a2b",
      },
      {
        location: "Collection Center, Nashik",
        date: "Oct 20, 2024",
        status: "Quality Sorted",
        description:
          "Grade A tomatoes selected. No blemishes, perfect shape and color. Immediate transfer to processing.",
        verifiedBy: "APMC Quality Inspector",
        temperature: "15°C",
        blockchainHash: "0x2f9c...7e3d",
      },
      {
        location: "CanPro Processing Plant, Nashik",
        date: "Oct 20, 2024",
        status: "Washed & Blanched",
        description:
          "Tomatoes washed in purified water, blanched to remove skin. Processing within 6 hours of harvest.",
        verifiedBy: "CanPro Quality Control",
        temperature: "85°C blanching",
        blockchainHash: "0x5d2a...9f8c",
      },
      {
        location: "Canning Line, CanPro Facility",
        date: "Oct 20, 2024",
        status: "Canned & Sealed",
        description:
          "Tomatoes packed in BPA-free cans with natural tomato juice. Heat sealed and sterilized.",
        verifiedBy: "FSSAI Inspector",
        temperature: "121°C sterilization",
        blockchainHash: "0x7b4e...3c1a",
      },
      {
        location: "Quality Testing Lab",
        date: "Oct 21, 2024",
        status: "Lab Tested",
        description:
          "pH tested, microbial analysis passed. Shelf life confirmed: 24 months.",
        verifiedBy: "Independent Food Lab",
        blockchainHash: "0x9e1f...6d2b",
      },
      {
        location: "Distribution Warehouse",
        date: "Oct 22, 2024",
        status: "Ready for Distribution",
        description:
          "Labeled with batch number and QR code. Ready for retail distribution.",
        verifiedBy: "VeriFresh Distribution",
        temperature: "20-25°C storage",
        blockchainHash: "0x4c8a...5f9e",
      },
    ],
    environmentalImpact: {
      carbonFootprint: {
        label: "Carbon Footprint",
        value: "0.8 kg CO₂",
        comparison: "40% lower than imported canned tomatoes",
        better: true,
        details: "Local sourcing and solar-powered canning facility",
      },
      waterUsage: {
        label: "Water Usage",
        value: "25L per kg",
        comparison: "Drip irrigation reduces water by 60%",
        better: true,
        details: "Recycled water used in processing plant",
      },
      energyConsumption: {
        label: "Energy Consumption",
        value: "1.5 kWh",
        comparison: "80% solar energy",
        better: true,
        details: "Solar panels power 80% of canning operations",
      },
      wasteReduction: {
        label: "Waste Reduction",
        value: "98% utilized",
        comparison: "Tomato waste composted",
        better: true,
        details: "Peels and rejected tomatoes used as organic fertilizer",
      },
      sustainabilityScore: 92,
      certifications: [
        "Solar Powered Facility",
        "Water Recycling System",
        "Zero Waste Processing",
      ],
    },
    ethicalData: {
      workerRights: {
        fairWages: true,
        safeConditions: true,
        noChildLabor: true,
        unionRights: true,
        details:
          "Farmers receive premium prices for organic tomatoes. Processing plant workers have health insurance and safe working conditions.",
      },
      fairTradePremium: "₹12/kg",
      communityImpact:
        "Processing plant employs 150 local workers. Provides free health camps for farming community.",
      transparency: {
        supplierInfo:
          "CanPro Industries - FSSAI licensed canning facility since 2010. Sources from 80+ organic farmers.",
        audits: [
          "FSSAI annual inspection - Passed Oct 2024",
          "Organic certification audit - Renewed 2024",
          "Worker safety audit - ISO 45001 certified",
        ],
        certifications: [
          "FSSAI License",
          "Organic India Certified",
          "ISO 22000",
          "GMP Certified",
        ],
      },
      concerns: [],
    },
  },

  "ready-meal-001": {
    id: "ready-meal-001",
    name: "Ready-to-Eat Rajma Masala",
    category: "Ready-to-Eat Food",
    description:
      "Traditional North Indian kidney bean curry, ready in 2 minutes. Preservative-free with complete ingredient traceability from farm to pouch.",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
    origin: "Multiple farms across Punjab & Himachal Pradesh",
    blockchainId: "0x6f2d9a5c8e3b1f7a4d9e2c5f8b1a4e7c9f2d5a6b",
    lastVerified: "45 minutes ago",
    certifications: [
      {
        name: "FSSAI Licensed",
        type: "authentic",
        verified: true,
        verifiedBy: "Food Safety and Standards Authority of India",
      },
      {
        name: "ISO 22000",
        type: "quality",
        verified: true,
        verifiedBy: "Food Safety Management",
      },
      {
        name: "Halal Certified",
        type: "quality",
        verified: true,
        verifiedBy: "Halal Certification Authority",
      },
      {
        name: "No Preservatives",
        type: "quality",
        verified: true,
        verifiedBy: "Lab Verified",
      },
    ],
    ingredients: [
      {
        id: "rajma-batch-001",
        name: "Red Kidney Beans",
        origin: "Kangra Valley, Himachal Pradesh",
        farmerId: "farmer-301",
        farmerName: "Suresh Kumar",
        harvestDate: "Sep 15, 2024",
        quantity: "500kg",
        image: "https://images.unsplash.com/photo-1615485291219-7bc700cd13e3?w=800",
        blockchainId: "0x3f8c...2d5a",
        certifications: ["Organic Certified"],
        journey: [
          {
            location: "Suresh Kumar Farm, Kangra",
            date: "Sep 15, 2024",
            status: "Harvested",
            description: "Premium Rajma harvested from organic farm. No chemical fertilizers used.",
            verifiedBy: "Himachal Organic Certification",
            blockchainHash: "0x3f8c...2d5a",
          },
          {
            location: "Collection Center",
            date: "Sep 16, 2024",
            status: "Quality Checked",
            description: "Grade A beans. Moisture content: 12%, perfect for storage.",
            verifiedBy: "APMC Inspector",
            blockchainHash: "0x7a2f...9c8e",
          },
        ],
      },
      {
        id: "tomato-batch-002",
        name: "Tomatoes",
        origin: "Nashik, Maharashtra",
        farmerId: "farmer-302",
        farmerName: "Rajesh Patil",
        harvestDate: "Oct 1, 2024",
        quantity: "300kg",
        image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=800",
        blockchainId: "0x8d4f...6a3c",
        certifications: ["FSSAI Approved"],
        journey: [
          {
            location: "Rajesh Patil Farm, Nashik",
            date: "Oct 1, 2024",
            status: "Harvested",
            description: "Fresh tomatoes harvested for immediate processing.",
            verifiedBy: "Maharashtra APMC",
            blockchainHash: "0x8d4f...6a3c",
          },
        ],
      },
      {
        id: "spices-batch-001",
        name: "Spice Mix",
        origin: "Kerala Spice Gardens",
        farmerId: "supplier-101",
        farmerName: "Kerala Spice Co-op",
        harvestDate: "Aug 20, 2024",
        quantity: "50kg",
        image: "https://images.unsplash.com/photo-1596040033229-a0b3b7fda3e8?w=800",
        blockchainId: "0x5c9e...8f2a",
        certifications: ["Organic", "Spice Board Certified"],
        journey: [
          {
            location: "Kerala Spice Gardens",
            date: "Aug 20, 2024",
            status: "Harvested & Ground",
            description: "Fresh spices ground using traditional methods.",
            verifiedBy: "Spice Board of India",
            blockchainHash: "0x5c9e...8f2a",
          },
        ],
      },
    ],
    journey: [
      {
        location: "ReadyMeals Processing Plant, Ludhiana",
        date: "Oct 15, 2024",
        status: "Ingredients Received",
        description:
          "All ingredients received and verified. Blockchain IDs matched. Quality inspection passed.",
        verifiedBy: "ReadyMeals QC Team",
        temperature: "Ambient storage",
        blockchainHash: "0x6f2d...5a6b",
      },
      {
        location: "Cooking Facility",
        date: "Oct 15, 2024",
        status: "Cooked",
        description:
          "Rajma cooked with traditional recipe in steam kettles. Spices added per recipe.",
        verifiedBy: "Master Chef & FSSAI Inspector",
        temperature: "95°C cooking",
        blockchainHash: "0x2a7f...3d9c",
      },
      {
        location: "Retort Processing Line",
        date: "Oct 15, 2024",
        status: "Packed & Sterilized",
        description:
          "Packed in retort pouches, sterilized at high temperature. No preservatives added.",
        verifiedBy: "FSSAI Quality Control",
        temperature: "121°C sterilization",
        blockchainHash: "0x9e4c...7f1a",
      },
      {
        location: "Quality Lab",
        date: "Oct 16, 2024",
        status: "Lab Tested",
        description:
          "Microbial testing passed. Nutritional analysis completed. Shelf life: 12 months.",
        verifiedBy: "Independent Food Lab",
        blockchainHash: "0x5d8a...2b6f",
      },
      {
        location: "Distribution Center",
        date: "Oct 17, 2024",
        status: "Ready for Market",
        description:
          "Packaged in cartons with QR codes. Ready for distribution to retailers.",
        verifiedBy: "VeriFresh Distribution",
        blockchainHash: "0x7c3f...9e4d",
      },
    ],
    environmentalImpact: {
      carbonFootprint: {
        label: "Carbon Footprint",
        value: "0.6 kg CO₂",
        comparison: "70% lower than restaurant preparation",
        better: true,
        details: "Efficient batch cooking and local sourcing",
      },
      waterUsage: {
        label: "Water Usage",
        value: "15L per kg",
        comparison: "50% water recycling in plant",
        better: true,
        details: "Modern water treatment and recycling system",
      },
      energyConsumption: {
        label: "Energy Consumption",
        value: "2.2 kWh",
        comparison: "60% renewable energy",
        better: true,
        details: "Solar panels power daytime operations",
      },
      wasteReduction: {
        label: "Waste Reduction",
        value: "95% waste utilized",
        comparison: "Food waste composted",
        better: true,
        details: "All organic waste converted to biogas and compost",
      },
      sustainabilityScore: 85,
      certifications: [
        "Energy Efficient Facility",
        "Water Recycling Certified",
        "Biogas Plant Installed",
      ],
    },
    ethicalData: {
      workerRights: {
        fairWages: true,
        safeConditions: true,
        noChildLabor: true,
        unionRights: true,
        details:
          "All workers receive minimum wage + benefits. Regular health checkups and safety training provided.",
      },
      fairTradePremium: "Premium paid to organic farmers",
      communityImpact:
        "Plant employs 200+ local workers. Sources from 150+ small farmers, providing stable income.",
      transparency: {
        supplierInfo:
          "ReadyMeals India Pvt Ltd - FSSAI licensed since 2015. ISO 22000 certified facility.",
        audits: [
          "FSSAI annual audit - Passed Oct 2024",
          "ISO 22000 renewal - Certified 2024-2027",
          "Worker safety inspection - Clean record",
        ],
        certifications: [
          "FSSAI License",
          "ISO 22000",
          "Halal Certified",
          "GMP & HACCP",
        ],
      },
      concerns: [],
    },
  },

  "kissan-jam-001": kissanJamProduct,
};
