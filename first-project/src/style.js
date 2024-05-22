const cardStyle = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontFamily: 'Helvetica, sans-serif',
    },
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        margin: '20px',
        padding: '15px',
        maxWidth: '300px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
    },
    cardImg: {
        borderRadius: '8px',
        width: '100%',
        height: 'auto',
    },
    cardUl: {
        listStyleType: 'none',
        padding: '0',
        margin: '10px 0 0 0',
    },
    cardLi: {
        margin: '5px 0',
    },
    button: {
        marginTop: '10px',
        padding: '5px 10px',
        border: 'solid black 1px',
        borderRadius: '5px',
        color: 'black',
        cursor: 'pointer',
    },
};


export default cardStyle;
