import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import axios from 'axios'
import './Noticias.css'

const Noticias = () => {
  const [noticias, setNoticias] = useState([])
  const [expandedId, setExpandedId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await axios.get('http://localhost:3001/noticias')
        setNoticias(response.data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
        console.error('Erro ao buscar notícias:', err)
      }
    }

    fetchNoticias()
  }, [])

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const formatTitle = (title) => {
    const words = title.split(' ')
    return {
      firstPart: words[0],
      rest: words.slice(1).join(' ')
    }
  }

  if (loading) return <div className="text-center my-5">Carregando notícias...</div>
  if (error) return <div className="text-center my-5 text-danger">Erro ao carregar notícias: {error}</div>

  return (
    <Container className="noticias-container py-4">
      <h1 className="text-center mb-4">Notícias</h1>

      {/* Notícia em destaque */}
      {noticias.length > 0 && (
        <Card className="destaque-card mb-5 border-0 shadow">
          <Row className="g-0">
            <Col lg={6} className="destaque-imagem">
              <Card.Img
                src={noticias[0].imagem}
                alt={noticias[0].titulo}
                className="img-fluid h-100"
              />
            </Col>
            <Col lg={6} className="destaque-conteudo">
              <Card.Body className="h-100 d-flex flex-column p-4">
                <div className="mb-3">
                  <h2 className="destaque-titulo-principal mb-1">
                    {formatTitle(noticias[0].titulo).firstPart}
                  </h2>
                  <h3 className="destaque-titulo-secundario">
                    {formatTitle(noticias[0].titulo).rest}
                  </h3>
                </div>
                <Card.Text className="flex-grow-1">
                  {expandedId === noticias[0].id ? noticias[0].texto : noticias[0].resumo}
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => toggleExpand(noticias[0].id)}
                  className="align-self-start mt-3"
                >
                  {expandedId === noticias[0].id ? 'Mostrar menos' : 'Ler mais'}
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      )}

      {/* Divisor */}
      <hr className="divisor-noticias my-4" />

      {/* Grid de notícias (2 colunas) */}
      <Row className="g-4">
        {noticias.slice(1).map((noticia) => (
          <Col md={6} key={noticia.id}>
            <Card className="h-100 noticia-card shadow-sm border-0">
              <Card.Img
                variant="top"
                src={noticia.imagem}
                alt={noticia.titulo}
                className="noticia-imagem"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-3">{noticia.titulo}</Card.Title>
                <Card.Text>
                  {expandedId === noticia.id ? noticia.texto : noticia.resumo}
                </Card.Text>
                <Button
                  variant="outline-primary"
                  onClick={() => toggleExpand(noticia.id)}
                  className="mt-auto align-self-start"
                >
                  {expandedId === noticia.id ? 'Mostrar menos' : 'Ler mais'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Noticias