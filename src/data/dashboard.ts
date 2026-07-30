import type {
    ProductCategory,
    ProfitData,
    ShipmentStatistic,
    ShipmentTypeData,
    SummaryCardData,
  } from "@/types/dashboard";

export const summaryCards: SummaryCardData[] = [
    {
      id: "active-shipments",
      title: "Active Shipments",
      value: "1,284",
      additionalInfo: "shipments",
      percentage: "+8.7%",
      trend: "up",
    },
    {
      id: "delivery-performance",
      title: "Delivery Performance",
      value: "94.3%",
      additionalInfo: "on-time",
      percentage: "-1.2%",
      trend: "down",
    },
    {
      id: "revenue",
      title: "Revenue",
      value: "$82,450",
      percentage: "+12.4%",
      trend: "up",
    },
  ];


  export const shipmentStatistics: ShipmentStatistic[] = [
    {
      month: "Jan",
      shipments: 1650,
    },
    {
      month: "Feb",
      shipments: 1980,
    },
    {
      month: "Mar",
      shipments: 1520,
    },
    {
      month: "Apr",
      shipments: 1850,
    },
    {
      month: "May",
      shipments: 3124,
    },
    {
      month: "Jun",
      shipments: 2250,
    },
    {
      month: "Jul",
      shipments: 2600,
    },
  ];


  export const profitSummary: ProfitData[] = [
    {
      month: "Jan",
      revenue: 52000,
      cost: 42000,
    },
    {
      month: "Feb",
      revenue: 48000,
      cost: 39000,
    },
    {
      month: "Mar",
      revenue: 55000,
      cost: 45000,
    },
    {
      month: "Apr",
      revenue: 61000,
      cost: 51000,
    },
    {
      month: "May",
      revenue: 69000,
      cost: 58000,
    },
    {
      month: "Jun",
      revenue: 56000,
      cost: 47000,
    },
    {
      month: "Jul",
      revenue: 62000,
      cost: 51000,
    },
    {
      month: "Aug",
      revenue: 67000,
      cost: 54000,
    },
  ];



  export const shipmentTypeData: ShipmentTypeData[] = [
    {
      name: "Road Freight",
      value: 46,
      shipments: 1150,
      color: "#856DF3",
    },
    {
      name: "Ocean Freight",
      value: 17,
      shipments: 425,
      color: "#757575",
    },
    {
      name: "Air Freight",
      value: 28,
      shipments: 700,
      color: "#333333",
    },
    {
      name: "Rail Freight",
      value: 9,
      shipments: 225,
      color: "#E0E0E0",
    },
  ];


  export const productCategories: ProductCategory[] = [
    {
      id: "electronics",
      name: "Electronics",
      percentage: 24,
      totalProducts: 240,
      color: "#856DF3",
    },
    {
      id: "home-kitchen",
      name: "Home & Kitchen",
      percentage: 20,
      totalProducts: 200,
      color: "#E3DDFF",
    },
    {
      id: "apparel",
      name: "Apparel",
      percentage: 18,
      totalProducts: 180,
      color: "#333333",
    },
    {
      id: "beauty-health",
      name: "Beauty & Health",
      percentage: 14,
      totalProducts: 140,
      color: "#757575",
    },
    {
      id: "sports-outdoors",
      name: "Sports & Outdoors",
      percentage: 12,
      totalProducts: 120,
      color: "#E0E0E0",
    },
    {
      id: "automotive",
      name: "Automotive",
      percentage: 12,
      totalProducts: 120,
      color: "#F0F0F0",
    },
  ];