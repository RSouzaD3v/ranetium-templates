import axios from 'axios';

export interface RanetiumData {
    id: string;
    name: string;
    value: number;
}

export class RanetiumService {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    async getAll(): Promise<RanetiumData[]> {
        const response = await axios.get<RanetiumData[]>(`${this.apiUrl}/ranetium`);
        return response.data;
    }

    async getById(id: string): Promise<RanetiumData> {
        const response = await axios.get<RanetiumData>(`${this.apiUrl}/ranetium/${id}`);
        return response.data;
    }

    async create(data: RanetiumData): Promise<RanetiumData> {
        const response = await axios.post<RanetiumData>(`${this.apiUrl}/ranetium`, data);
        return response.data;
    }

    async update(id: string, data: Partial<RanetiumData>): Promise<RanetiumData> {
        const response = await axios.put<RanetiumData>(`${this.apiUrl}/ranetium/${id}`, data);
        return response.data;
    }

    async delete(id: string): Promise<void> {
        await axios.delete(`${this.apiUrl}/ranetium/${id}`);
    }
}