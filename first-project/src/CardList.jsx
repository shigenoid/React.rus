import Card from './card'
import cardStyle from './style.js'

function CardList({ dataSiswa, onDelete }) {
    return (
      <div>
        <div style={cardStyle.container}>
          {dataSiswa.map((siswa) => (
            <Card 
                {...siswa} 
                key={siswa.id}
                id={siswa.id}
                onDelete={onDelete} 
            />
          ))}
        </div>
      </div>
    );
}

export default CardList