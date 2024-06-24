import { ModuleWithProviders } from '@angular/core';
 // notre site
export interface ISociete {
    id?: string;
    nom: string;
    matriculeFiscal: string;
    tva: string;
    c: string;
    a: string;
    numeroEmployeurCNSS: string;
    adresse: string;
    cin: string;
    activite: string;
    codePostal: string;
    tenantId?: string;
}
// end 
export interface IState {
    id: number;
    abbreviation: string;
    name: string;
}

export interface IOrder {
    product: string;
    price: number;
    quantity: number;
    orderTotal?: number;
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface ISocieteResponse {
    status: boolean;
    societe: ISociete;
}