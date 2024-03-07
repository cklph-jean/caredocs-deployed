import Button from "./Button";

export default function SecondaryButton({ children, ...rest }) {
    return (
        <Button {...rest} secondary className={rest.className}>
            {children}
        </Button>
    )
}
