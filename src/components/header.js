

const Header = ({content , onFormSubmit , onChangeInput })=>{

    return (
        
        <form onSubmit={onFormSubmit}>
            <label htmlFor="id">id:</label>
            <input type="number" value={content.id} id="id"  onChange={onChangeInput} name="id"></input>
            <label htmlFor="amount">sellingamount</label>
            <input type="number" value={content.amount} id="amount"  onChange={onChangeInput} name="amount"></input>
            <label htmlFor="name">name</label>
            <input type="text" value={content.name} id="name" onChange={onChangeInput} name="name" ></input>
            <label htmlFor="category">category</label>
            <select id="category" value={content.category} onChange={onChangeInput} name="category">
                <option>electronics</option>
                <option>skincare</option>
                <option>clothing</option>
            </select>
            <button type="submit">submit</button>
        </form>
        
    )
}

export default Header;