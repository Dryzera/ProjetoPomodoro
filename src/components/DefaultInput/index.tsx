type DefaultInputProps = {
    id: string;
    type: 'number' | 'text';
} & React.ComponentProps<'input'>;

export function DefaultInput({ type, id }: DefaultInputProps) {
    return (
        <>
            <label htmlFor={id}>task</label>
            <input type={type} id={id} />
        </>
    );
}
