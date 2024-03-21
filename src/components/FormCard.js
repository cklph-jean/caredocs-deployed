import Card from "./Card"

export default function FormCard({ children }) {

    return (
        <Card className="bg-white px-[48px] py-[32px] rounded-[12px] custom-shadow-md">
            {children}
        </Card>
    )
}