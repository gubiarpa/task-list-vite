export const OneTask = ({id, name} = {}) => {
    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>
                <button className="btn btn-outline-primary mx-1">Edit</button>
                <button className="btn btn-outline-danger mx-1">Remove</button>
            </td>
        </tr>   
    )
}
