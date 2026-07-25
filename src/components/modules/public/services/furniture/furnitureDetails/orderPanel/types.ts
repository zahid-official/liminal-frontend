import { IFurniture } from "../../furnitureData";

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
}

export interface DeliveryInfo {
  address: string;
  city: string;
  zip: string;
  notes: string;
}

export type FormErrors = Record<string, string>;

export interface SummaryItem {
  label: string;
  value: string | number;
  subValue?: string;
  isBlock?: boolean;
  isTotal?: boolean;
}

export interface FurnitureOrderPanelProps {
  isOpen: boolean;
  onClose: () => void;
  furniture: IFurniture;
}
