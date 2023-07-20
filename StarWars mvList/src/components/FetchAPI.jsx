import { React, useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import './FetchAPI.css'   

const FetchAPI = () => {
  // Guarda as informações da API
  const [filmes, setFilmes] = useState([])

  // Relacionada ao botão ShowInfo
  const [informaçoesExtra, setInformaçõesExtra] = useState(null)

  // Tostify
  const notify = () =>
    toast.error('Erro na requisição... Tente Novamente Em instantes', {
      position: toast.POSITION.TOP_CENTER,
      className: 'notify'
    })

  // Mostrar Informações extra
  const handleInformaçõesExtra = episodeId => {
    setInformaçõesExtra(episodeId)
  }

  // Salva a Id exata do filme para ser usada em FilmeSelecionado
  const filmID = id => {
    return filmes.find(filme => filme.episode_id === id)
  }

  const filmeSelecionado = informaçoesExtra ? filmID(informaçoesExtra) : null

  // Função para pegar as informações da API
  const fetchFilmes = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/films')
      const data = await response.json()
      setFilmes(data.results)
    } catch (error) {
      notify(error)
    }
  }

  useEffect(() => {
    fetchFilmes()
  }, [])

  return (
    <div>
      <div className='Container'>
        {filmes.map(movie => (
          <div key={movie.episode_id} className='Caixas'>
            <h2>{movie.title}</h2>
            <p>Data De Lançamento:</p>
            <p>{movie.release_date}</p>
            <button
              className='ShowInfo'
              onClick={() => handleInformaçõesExtra(movie.episode_id)}
              >Informações Extras</button>
          </div>
        ))}
      </div>

      {informaçoesExtra && (
        <div className='Container-info'>
          <div className='Box'>
            <h2>{filmeSelecionado.title}</h2>
            <p>Data de Lançamento: {filmeSelecionado.release_date}</p>
            <p>Diretor: {filmeSelecionado.director}</p>
            <p>Producers: {filmeSelecionado.producer}</p>
            <p>Movie Crawl: {filmeSelecionado.opening_crawl}</p>
            <div className="button-box">
            <button
              className='HideInfo'
              onClick={() => handleInformaçõesExtra(false)}>Sair</button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  )
}

export default FetchAPI
