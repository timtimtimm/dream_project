export const required = (value) => {
    return value? undefined : 'Required';
}

export const maxLength = (length) => (value) => {
    return value.length > length? `Max length ${length} simbols` : undefined;
}