import './Consejos.css'

const consejos = [
  {
    id: 1,
    titulo: '¿Cómo aprovechar mejor tu detergente?',
    descripcion:
      'No sobrecargues la lavadora y utiliza siempre la medida recomendada. Así ahorras producto y cuidas tu ropa.',
  },
  {
    id: 2,
    titulo: 'Desinfecta con seguridad',
    descripcion:
      'Evita mezclar cloro con otros productos. Usa guantes y ventila el espacio al limpiar.',
  },
  {
    id: 3,
    titulo: 'Aromatiza tu hogar naturalmente',
    descripcion:
      'Usa aromatizantes en telas, cortinas y rincones. Aumenta el efecto si limpias antes con un multiuso neutro.',
  },
]

function Consejos() {
  return (
    <section id="consejos" className="consejos">
      <h2>Consejos útiles</h2>
      <div className="consejos-grid">
        {consejos.map((item) => (
          <div className="consejo-card" key={item.id}>
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Consejos
