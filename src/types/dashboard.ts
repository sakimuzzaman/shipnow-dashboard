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

 