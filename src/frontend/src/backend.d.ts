import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Sweet {
    id: bigint;
    name: string;
    description: string;
    imagePlaceholder: string;
    category: Category;
    price: string;
    ingredients: Array<string>;
    occasions: Array<string>;
}
export type Timestamp = bigint;
export interface ContactInquiry {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: Timestamp;
    phone: string;
}
export interface CateringInquiry {
    id: bigint;
    guestCount: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: Timestamp;
    phone: string;
    eventDate: string;
}
export enum Category {
    MishtiDoi = "MishtiDoi",
    Barfi = "Barfi",
    Laddoo = "Laddoo",
    Chamcham = "Chamcham",
    Rasgulla = "Rasgulla",
    Sandesh = "Sandesh"
}
export interface backendInterface {
    getAllCateringInquiries(): Promise<Array<CateringInquiry>>;
    getAllContactInquiries(): Promise<Array<ContactInquiry>>;
    getAllSweets(): Promise<Array<Sweet>>;
    getSweetById(id: bigint): Promise<Sweet | null>;
    getSweetsByCategory(category: Category): Promise<Array<Sweet>>;
    submitCateringInquiry(name: string, email: string, phone: string, eventDate: string, guestCount: bigint, message: string): Promise<bigint>;
    submitContactInquiry(name: string, email: string, phone: string, message: string): Promise<bigint>;
}
