export const OneTask = ({id, name} = {}) => {
    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>
                <button>Remove</button>
            </td>
        </tr>   
    )
}
