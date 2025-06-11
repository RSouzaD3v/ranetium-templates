export interface IRanetium {
    id: string;
    name: string;
    formula: string;
    atomicNumber: number;
    discoveredAt: Date;
    isSynthetic: boolean;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

export const Ranetium: IRanetium = {
    id: '',
    name: '',
    formula: '',
    atomicNumber: 0,
    discoveredAt: new Date(),
    isSynthetic: false,
    description: '',
    createdAt: new Date(),
    updatedAt: new Date(),
};
