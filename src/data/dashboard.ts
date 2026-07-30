import type {
    LiveTrackingData,
    ProductCategory,
    ProfitData,
    ShipmentStatistic,
    ShipmentTypeData,
    SummaryCardData,
    ShipmentAlert,
    ShipmentAlertSummary,
    RecentShipment
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


  export const liveTrackingData: LiveTrackingData = {
    shipmentId: "SH8743291",
  
    status: "In Transit",
  
    courier: {
      name: "Daniel Cooper",
      role: "Courier",
    },
  
    departure: {
      city: "San Francisco, CA, USA",
      dateTime: "Mar 18, 2026 - 10:30 AM",
    },
  
    destination: {
      city: "New York, NY, USA",
      dateTime: "Mar 22, 2026 - 6:00 PM (estimated)",
    },
  
    progress: 72,
  };



  export const shipmentAlertSummary = [
    {
      id: "customs",
      count: 5,
      label: "Customs Clearance Delay",
      color: "#E3DDFF",
    },
    {
      id: "address",
      count: 4,
      label: "Incorrect Address Provided",
      color: "#E3DDFF",
    },
    {
      id: "weather",
      count: 3,
      label: "Weather-Related Hold",
      color: "#E3DDFF",
    },
  ] satisfies ShipmentAlertSummary[];
  
  export const shipmentAlerts = [
    {
      id: "alert-1",
      shipmentId: "#SH8734921",
      issue: "Customs Clearance Delay",
      date: "Mar 20",
      icon: "document",
    },
    {
      id: "alert-2",
      shipmentId: "#SH8738281",
      issue: "Incorrect Address Provided",
      date: "Mar 20",
      icon: "location",
    },
    {
      id: "alert-3",
      shipmentId: "#SH8739324",
      issue: "Weather-Related Hold",
      date: "Mar 19",
      icon: "message",
    },
    {
      id: "alert-4",
      shipmentId: "#SH8739564",
      issue: "Incorrect Address Provided",
      date: "Mar 18",
      icon: "document",
    },
  ] satisfies ShipmentAlert[];


  export const recentShipments: RecentShipment[] = [
    {
      id: "#SH9283746",
      company: "TechGear Inc.",
      category: "Electronics",
      carrier: "FedEx",
      route: "Los Angeles, CA → Chicago, IL",
      shippingDate: "Mar 20, 2025",
      status: "In Transit",
    },
    {
      id: "#SH9128635",
      company: "StyleHub Co.",
      category: "Apparel",
      carrier: "DHL",
      route: "New York, NY → Atlanta, GA",
      shippingDate: "Mar 19, 2025",
      status: "Out for Delivery",
    },
    {
      id: "#SH9037821",
      company: "FreshNest",
      category: "Home & Kitchen",
      carrier: "UPS",
      route: "Dallas, TX → Miami, FL",
      shippingDate: "Mar 18, 2025",
      status: "Delivered",
    },
    {
      id: "#SH8947362",
      company: "SportsGear",
      category: "Sports & Outdoors",
      carrier: "USPS",
      route: "Seattle, WA → Denver, CO",
      shippingDate: "Mar 21, 2025",
      status: "Processing",
    },
    {
      id: "#SH8457730",
      company: "AutoParts Pro",
      category: "Automotive",
      carrier: "Aramex",
      route: "Detroit, MI → San Diego, CA",
      shippingDate: "Mar 20, 2025",
      status: "In Transit",
    },
  ];