export interface ItemProps {
    id: number;
    name: string;
    packed: boolean;
}
export const initItems: ItemProps[] = [
    {
        id: 1,
        name: "Good mood",
        packed: true,
    },
    {
        id: 2,
        name: "Passport",
        packed: false 
    },
    {
        id: 3,
        name: "Phone charger",
        packed: false
    },
    {
        id: 4,
        name: "Docs",
        packed: false
    }
]
