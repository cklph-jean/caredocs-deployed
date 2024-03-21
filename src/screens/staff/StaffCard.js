import Card from "../../components/Card"

export default function StaffCard({ children }) {

    return (
        <Card className="bg-white px-[48px] py-[32px] rounded-[12px] custom-shadow-md">
            {children}
        </Card>
    )
}