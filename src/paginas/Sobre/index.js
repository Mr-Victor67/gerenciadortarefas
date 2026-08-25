import'./index.css'
import fotoPerfil from'./foto-Perfil.png'
import habilidadeGamer from'./Gamer.png'
import habilidadeCantar from'./HipHop.png'
import habilidadeDesenhista from'./Eminem.png'

function Sobre(){
    return (
        <main>
            
            <header>
                <h1>Sobre</h1>
            </header>
            <section>
                <div className= 'boxfotoPerfil'>
                    <img className='imgfotoPerfil' src={fotoPerfil}/>
                    <p>Victor Hugo de Matos Santana</p>
                </div>
                <div className="habilidades">
                    <article>
                        <h2>Gamer</h2>
                        <img className='habilidadeGamer' src={habilidadeGamer}/>
                        <p className='descrição'>
                            Jogo jogos como Brawl Stars, Free Fire, Roblox, Fortinite Man Neater, Call of Duty etc...
                        </p>
                    </article>

                    <article>
                        <h2>cantar</h2>
                        <img className='habilidadeCantar' src={habilidadeCantar}/> 
                        <p className='descrição'>
                             Gosto de Cantar musícas em inglẽs principalmente Hip Hop ou as musícas do Eminem
                        </p>
                    </article>

                    <article>
                        <h2>Desenhista</h2>
                        <img className='habilidadeDesenhista' src={habilidadeDesenhista}/>
                        <p className='descrição'>
                             Gosto de desenhar animes, persongens de jogos principalmente femininos e skins de jogos
                        </p>
                    </article>
                </div>

            </section>
        </main>
    )
}

export default Sobre;