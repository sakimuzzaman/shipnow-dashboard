export interface SummaryCardData {
    id: string;
    title: string;
    value: string;
    additionalInfo?: string;
    percentage: string;
    trend: "up" | "down";
  }

  export interface ShipmentTypeData {
    name: string;
    value: number;
    shipments: number;
    color: string;
  }
  
  export interface ShipmentStatistic {
    month: string;
    shipments: number;
  }
  
  export interface ProfitData {
    month: string;
    revenue: number;
    cost: number;
  }

  export interface ProductCategory {
    id: string;
    name: string;
    percentage: number;
    totalProducts: number;
    color: string;
  }


  export interface LiveTrackingData {
    shipmentId: string;
  
    status: string;
  
    courier: {
      name: string;
      role: string;
    };
  
    departure: {
      city: string;
      dateTime: string;
    };
  
    destination: {
      city: string;
      dateTime: string;
    };
  
    progress: number;
  }

  export interface ShipmentAlertSummary {
    id: string;
    count: number;
    label: string;
    color: string;
  }
  
  export interface ShipmentAlert {
    id: string;
    shipmentId: string;
    issue: string;
    date: string;
    icon: "document" | "location" | "message";
  }

  export type ShipmentStatus =
  | "In Transit"
  | "Out for Delivery"
  | "Delivered"
  | "Processing";

export interface RecentShipment {
  id: string;
  company: string;
  category: string;
  carrier: string;
  route: string;
  shippingDate: string;
  status: ShipmentStatus;
}