import styles from './Company.module.css';

import SubmitButton from '../form/SubmitButton';
import IManagerFooter from '../layout/IManagerFooter';

import CompanyImage2 from '../../assets/companyImage2.jpg';
import CompanyImage4 from '../../assets/companyImage4.jpg';
import CompanyImage6 from '../../assets/companyImage6.jpg';
import iBestImage from '../../assets/iBestImage.jpg';
import reclameAquiImage from '../../assets/reclameAquiImage.jpg';
import joaoVitorMeninImage from '../../assets/joaoVitorMeninImage.jpg';
import humanizadasImage from '../../assets/humanizadasImage.jpg';
import Muskan from '../../assets/muskan.jpg';
import Muskan2 from '../../assets/muskan2.jpg';
import Muskan3 from '../../assets/muskan3.jpg';
import seloOuroGHGImage from '../../assets/seloOuroGHGImage.jpg';

import { BiDownArrow } from 'react-icons/bi';
import { MdMonitor, MdAccountCircle, MdLock, MdAirplaneTicket, MdNetworkCell, MdOutlineSecurity } from 'react-icons/md';
import { SiPlatzi, SiFastapi, SiPowerbi } from 'react-icons/si';
import { CgMathPlus } from 'react-icons/cg';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsCreditCard2FrontFill, BsCheckLg, BsInstagram, BsTwitter, BsLinkedin, BsSpotify } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';

import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import AnimatedNumber from 'react-animated-number/build/AnimatedNumber';

import { useState, useRef, useEffect } from 'react';

export default function Company() {
    const [evolutionEnterpriseValue, setEvolutionEnterpriseValue] = useState(0);
    const [evolutionCollaboratorsValue, setEvolutionCollaboratorsValue] = useState(0);
    const [evolutionPresenceValue, setEvolutionPresenceValue] = useState(0);
    const [remainingMinutes, setRemainingMinutes] = useState(0);
    const [remainingSeconds, setRemainingSeconds] = useState(0);
    const evolutionSectionRef = useRef(null);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    function calculateTimeFromDate(startDate) {
        // Create a new Date object for the current date and time
        const currentDate = new Date();
        
        // Parse the startDate string into a Date object
        const startDateObj = new Date(startDate);
        
        // Calculate the difference in milliseconds between the two dates
        const timeDifference = currentDate - startDateObj;
        
        // Convert milliseconds to seconds, minutes, hours, days, and months
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        
        // Calculate remaining days, hours, minutes, and seconds
        const remainingDays = days % 30;
        const remainingHours = hours % 24;
        const remainingMinutes = minutes % 60;
        const remainingSeconds = seconds % 60;
        
        // Return an object with the calculated values
        return {
          months,
          days: remainingDays,
          hours: remainingHours,
          minutes: remainingMinutes,
          seconds: remainingSeconds,
        };
      }
      
    //   useEffect()
      
    window.onscroll = () => {
        const evolutionSectionOffset = evolutionSectionRef.current.offsetTop;
        const userOffset = window.scrollY;

        if (userOffset >= evolutionSectionOffset - 400) {
            const startDate = '2023-11-10T23:00:00'; // Example start date
            const { months, days, hours, minutes, seconds } = calculateTimeFromDate(startDate);

            setEvolutionEnterpriseValue(months);
            setEvolutionCollaboratorsValue(days);
            setEvolutionPresenceValue(hours);
            setRemainingMinutes(minutes);
            setRemainingSeconds(seconds);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    }, []);

    return (
        <section className={styles.section}>
            <article className={styles.headerImage} id="companyHeader">
                <h2>Happy birthday ♥ ♥ ♥</h2>
            </article>
            <article id="colorHighlight" className={styles.colorHighlight}>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1.6} delay={100} animatePreScroll={false}>
                    <h3>
                        Mera Motta bachha
                        <br />
                        pyara bachha
                    </h3>
                    <p>
                    I love you soo sooo much aur phelei bat mai khai ni jya raha there sath he chipka 
                    hua hu till infinity ♾  aur Haan muje pata hai tu care karti Hai bhot mere Lia aur 
                    mai bhi karta hu there lie bhot sari Mc muje bhi dar lagata hai jab tu gussa hoti hai ki tu khai chali na jye 
                    ..wese God have blessed me with my wishes I have you my angle ❤
                        <br />
                        I will serve no matter how I will work hard for you to be with
                      you forever ✨✨and ever..
                    </p>
                </ScrollAnimation>
            </article>
            <article className={styles.simplicity} id="simplicity">
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <h3>Remember our trip ?</h3>
                    <p>Yad hai trip se akk din phele apan kese ladh rahye the ki muje nahi jana sab ajeeb sa lag raha tha </p>
                    <br />
                    <p>Par moti dhek le fir thuje mai kese trip pe le gaya tha itne acting kar ke fir waha par kitna compensation bhi lia tha moti apani pheli trip sath mai moti dhek le trip pe tho thuje yhe wali bhi nahi jhana hota (acting) jho itni karti hai par moti ka man pura hota hai Kitna Kush mai mera bachha is mai dhek  </p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <img src={CompanyImage2} alt="woman programmer working" />
                </ScrollAnimation>
            </article>
            <div className={styles.simplicityImageDown} id="simplicityImageDown">
                {/* <MdMonitor /> */}
                {/* <p>Mais que um gerenciador, um Web App que simplifica a sua empresa.</p> */}
            </div>
            <article className={styles.services} id="services">
                <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <img src={CompanyImage4} alt="woman accountant working" style={{ width: '100%', maxWidth: '400px', height: 'auto' }}/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <div>
                        <h3>
                            Pros   &<span>Cons</span> 
                        </h3>
                        <p>
                            Of My Mota Bachha <BsCheckLg />
                        </p>
                        <ul>
                            <li>
                                <MdAccountCircle /> Eats everything possible
                            </li>
                            <li>
                                <SiPlatzi /> Sleep everytime possible 
                            </li>
                            <li>
                                <MdLock /> Use only 10 % of her brain rest is never used 
                            </li>
                            <li>
                                <RiShoppingBagFill /> Big nose (CUTE SI)
                            </li>
                            <li>
                                <BsCreditCard2FrontFill /> Very less strength 
                            </li>
                            <li>
                                <MdAirplaneTicket /> Mujhe bhot sara khama khilati hai moti 
                            </li>
                            <li>
                                <MdNetworkCell /> The poti ability to kill the whole city 
                            </li>
                            <li>
                                <CgMathPlus /> These were the pros there are no cons
                            </li>
                        </ul>
                    </div>
                </ScrollAnimation>
            </article>
            <article className={styles.cards} id="cards">
                <h3>
                    The<span>Types</span> of hall of frame faces of my bachha
                </h3>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <div className={styles.cardList}>
                        <div className={styles.card}>
                        <img src={Muskan} alt="Segurança" />
                            <p className='text-white fs-2' >The dumb face</p>
                        </div>
                        <div className={styles.card}>
                        <img src={Muskan2} alt="Segurança" />
                            <p className='text-white fs-2' >The happy face</p>
                        </div>
                        <div className={styles.card}>
                        <img src={Muskan3} alt="Segurança" />
                            <p className='text-white fs-2' >The Ki hui face</p>
                        </div>
                    </div>
                </ScrollAnimation>
            </article>
            {/* <article className={styles.gettingBetter} id="gettingBetter">
                <h3>Crescendo cada vez mais</h3>
                <p>Quem é da iManager pode contar com soluções completas para todos os momentos.</p>
                <ul>
                    <li>
                        <span>iManager</span> App
                    </li>
                    <li>
                        <span>iManager</span> Seguros
                    </li>
                    <li>
                        <span>iManager</span> Plus
                    </li>
                    <li>
                        <span>iManager</span> Cel
                    </li>
                    <li>
                        <span>iManager</span> Empresas
                    </li>
                    <li>
                        <span>iManager</span> Shop
                    </li>
                </ul>
            </article> */}
            <article className={styles.evolution} ref={evolutionSectionRef} id="evolution">
                <h3>Together Since</h3>
                <div className={styles.evolutionCardsList}>
                    <div>
                        <h4>
                            +
                            <AnimatedNumber
                                value={evolutionEnterpriseValue}
                                style={{
                                    transitionProperty: 'all',
                                    transition: '1s ease-out',
                                    fontSize: 60,
                                    borderBottom: '2px solid #b3679b',
                                    color: '#b3679b'
                                }}
                                duration={1200}
                                formatValue={v => v.toFixed(0)}
                            />{' '}
                            Months
                        </h4>
                        <p>It feels like I have been with you forevere</p>
                    </div>
                    <div>
                        <h4>
                            + 
                            <AnimatedNumber
                                value={evolutionCollaboratorsValue}
                                style={{
                                    transitionProperty: 'all',
                                    transition: '1s ease-out',
                                    fontSize: 60,
                                    borderBottom: '2px solid #b3679b',
                                    color: '#b3679b'
                                }}
                                duration={900}
                                formatValue={v => v.toFixed(0)}
                            />{' '}
                            DAYS
                        </h4>
                        <p>But it has been only this much of time.</p>
                    </div>
                    <div>
                        <h4>
                            <AnimatedNumber
                                value={evolutionPresenceValue}
                                style={{
                                    transitionProperty: 'all',
                                    transition: '1s ease-out',
                                    fontSize: 60,
                                    borderBottom: '2px solid #b3679b',
                                    color: '#b3679b'
                                }}
                                duration={1800}
                                formatValue={v => v.toFixed(0)}
                            />:
                            <AnimatedNumber
                                value={remainingMinutes}
                                style={{
                                    transitionProperty: 'all',
                                    transition: '1s ease-out',
                                    fontSize: 60,
                                    borderBottom: '2px solid #b3679b',
                                    color: '#b3679b'
                                }}
                                duration={1800}
                                formatValue={v => v.toFixed(0)}
                            />:
                            <AnimatedNumber
                                value={remainingSeconds}
                                style={{
                                    transitionProperty: 'all',
                                    transition: '1s ease-out',
                                    fontSize: 60,
                                    borderBottom: '2px solid #b3679b',
                                    color: '#b3679b'
                                }}
                                duration={1800}
                                formatValue={v => v.toFixed(0)}
                            />
                            Hr
                        </h4>
                        <p>If we dont count that 1 and 1/2 years ....</p>
                    </div>
                </div>
            </article>
            <article className={styles.trajectory} id="trajectory">
                <div>
                    <h3>Nossa Trajetória</h3>
                    <p>Numa jornada com grandes transformações, cada momento é importante para continuarmos crescendo e inovando.</p>
                </div>
                {windowWidth > 600 ? (
                    <Carousel className={styles.carouselRoot} showArrows={true} showStatus={false} transitionTime={900} showThumbs={false} verticalSwipe="natural" swipeable={true} useKeyboardArrows={true} emulateTouch={true}>
                        <div>
                            <h4>
                                <span>&emsp;&emsp;</span>
                                1994
                                <span>2015</span>
                            </h4>
                            <p>Nasce o iManagement Enterprise e posteriormente o iManagement App.</p>
                        </div>
                        <div>
                            <h4>
                                <span>1994</span>
                                2015
                                <span>2017</span>
                            </h4>
                            <p>Lançamos a Conta Digital iManagement e nos tornamos a primeira empresa de gestão digital do país.</p>
                        </div>
                        <div>
                            <h4>
                                <span>2015</span>
                                2017
                                <span>2018</span>
                            </h4>
                            <p>A iManagement Enterprise passa a ser iManager.</p>
                        </div>
                        <div>
                            <h4>
                                <span>2017</span>
                                2018
                                <span>2019</span>
                            </h4>
                            <p>Fomos a primeira empresa de gestão digital a oferecer uma solução de gerenciamento corporativo gratuita, completa, autônoma, simples e totalmente online.</p>
                        </div>
                        <div>
                            <h4>
                                <span>2018</span>
                                2019
                                <span>2020</span>
                            </h4>
                            <p>Lançamos oficialmente nossa plataforma de seguros e de gestão, e criamos nossa própria operadora móvel virtual.</p>
                        </div>
                        <div>
                            <h4>
                                <span>2019</span>
                                2020
                                <span>2021</span>
                            </h4>
                            <p>Estabelecemos parcerias com os melhores lojistas do Brasil e com conceituadas companhias aéreas.</p>
                        </div>
                        <div>
                            <h4>
                                <span>2020</span>
                                2021
                                <span>2022</span>
                            </h4>
                            <p>Lançamos oficialmente o iManager Empresas e criamos o plano iManager Plus.</p>
                        </div>
                        <div>
                            <h4>
                                <span>2021</span>
                                2022
                                <span>&emsp;&emsp;</span>
                            </h4>
                            <p>Migramos nossa base acionária para a Nasdaq, importante bolsa de valores americana, e atingimos a marca de 20 milhões de cliente e lançamos a Global Account.</p>
                        </div>
                    </Carousel>
                ) : (
                    <Carousel className={styles.carouselRoot} showArrows={true} showStatus={false} transitionTime={900} showThumbs={false} verticalSwipe="natural" swipeable={true} useKeyboardArrows={true} emulateTouch={true}>
                        <div>
                            <h4>1994</h4>
                            <p>Nasce o iManagement Enterprise e posteriormente o iManagement App.</p>
                        </div>
                        <div>
                            <h4>2015</h4>
                            <p>Lançamos a Conta Digital iManagement e nos tornamos a primeira empresa de gestão digital do país.</p>
                        </div>
                        <div>
                            <h4>2017</h4>
                            <p>A iManagement Enterprise passa a ser iManager.</p>
                        </div>
                        <div>
                            <h4>2018</h4>
                            <p>Fomos a primeira empresa de gestão digital a oferecer uma solução de gerenciamento corporativo gratuita, completa, autônoma, simples e totalmente online.</p>
                        </div>
                        <div>
                            <h4>2019</h4>
                            <p>Lançamos oficialmente nossa plataforma de seguros e de gestão, e criamos nossa própria operadora móvel virtual.</p>
                        </div>
                        <div>
                            <h4>2020</h4>
                            <p>Estabelecemos parcerias com os melhores lojistas do Brasil e com conceituadas companhias aéreas.</p>
                        </div>
                        <div>
                            <h4>2021</h4>
                            <p>Lançamos oficialmente o iManager Empresas e criamos o plano iManager Plus.</p>
                        </div>
                        <div>
                            <h4>2022</h4>
                            <p>Migramos nossa base acionária para a Nasdaq, importante bolsa de valores americana, e atingimos a marca de 20 milhões de cliente e lançamos a Global Account.</p>
                        </div>
                    </Carousel>
                )}
            </article>
            <article className={styles.sustainable} id="sustainable">
                <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <h3>Motu apan dhek kha se kha aya gaye hai .</h3>
                    <p>phele jab apan ne start kia tha tho apan ko kitna seekhna tha apan dhek sath mai grow kie hai motu tu 2 company maikam kar raha hai mai 2 mai jho tu karta hai vo mai copy karta hu jho mai karta hu vo tu copy karta hai mera chota sa bandar </p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <img src={CompanyImage6} alt="wind energy" />
                </ScrollAnimation>
            </article>
            <article className={styles.recognition} id="recognition">
                <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true} duration={2} delay={100} animatePreScroll={false}>
                    <Carousel className={styles.secondCarousel} showArrows={true} showStatus={false} transitionTime={1000} showThumbs={false} autoPlay>
                        <div className={styles.carouselItem}>
                            <img src={iBestImage} alt="iBest award image" />
                            <div>
                                <h4>Mera bandar</h4>
                                <p>This is where everything started i started liking you mere motu .</p>
                            </div>
                        </div>
                        <div className={styles.carouselItem}>
                            <img src={reclameAquiImage} alt="reclame aqui award image" />
                            
                            <div>
                                <h4>Reclame Aqui</h4>
                                <p>Fomos eleitos o 2º melhor atendimento do Brasil por voto popular pelo segundo ano consecutivo - categoria de Gestores Digitais.</p>
                            </div>
                        </div>
                        <div className={styles.carouselItem}>
                            <img src={joaoVitorMeninImage} alt="João Vitor Menin image" />
                            <div>
                                <h4>Forbes Brasil</h4>
                                <p>João Vitor Menin foi eleito um dos 10 líderes que melhor mantiveram ou elevaram a relevância de suas marcas e os indicadores de seus negócios em meio a crise.</p>
                            </div>
                        </div>
                        <div className={styles.carouselItem}>
                            <img src={humanizadasImage} alt="Humanizadas award image" />
                            <div>
                                <h4>Melhores para o Brasil</h4>
                                <p>Fomos reconhecidos pela Humanizadas como uma organização aberta aos feedbacks e agente de transformação social e ambiental que soluciona problemas reais.</p>
                            </div>
                        </div>
                        <div className={styles.carouselItem}>
                            <img src={seloOuroGHGImage} alt="Selo Ouro GHG Protocol award image" />
                            <div>
                                <h4>Selo Ouro GHG Protocol</h4>
                                <p>Pela segunda vez consecutiva o iManager teve seu Inventário de emissões de gases de Efeito Estufa (GEE) reconhecido com o Selo Ouro do GHG Protocol, reforçando nosso compromisso com o desenvolvimento sustentável.</p>
                            </div>
                        </div>
                    </Carousel>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <h3>Prêmios e reconhecimentos</h3>
                    <p>Somos reconhecidos e premiados em diversas áreas, por nossas ações inovadoras e focadas em impactar positivamente a vida das pessoas, a gestão das empresas, e o mundo.</p>
                </ScrollAnimation>
            </article>
            {/* <article className={styles.partnership} id="partnership">
                <h3>Imprensa e Parcerias</h3>
                <p>Pedidos de imprensa, parcerias e mais informações? Fale com a gente.</p>
                <div className={styles.partnershipInfo}>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={100} animatePreScroll={false}>
                        <h4>Para informações e entrevistas</h4>
                        <p>Mande um e-mail para nossa assessoria de imprensa:</p>
                        <a href="mailto:#">imprensa@iManager.com.br</a>
                        <a href="mailto:#">iManager@idealhks.com</a>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={600} animatePreScroll={false}>
                        <h4>Press Kit e Guia da Marca</h4>
                        <p>Acesse nosso guia caso precise utilizar nossa marca e nossos materiais visuais.</p>
                        <a href="#">
                            <button>
                                <span>Baixar material</span>
                                <FiArrowUpRight />
                            </button>
                        </a>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={1800} animatePreScroll={false}>
                        <h4>Para patrocínios</h4>
                        <p>Mande um e-mail para:</p>
                        <a href="mailto:#">patrocinios@iManager.com.br</a>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={1100} animatePreScroll={false}>
                        <h4>Fotos institucionais</h4>
                        <p>O melhor do Inter para você. Nossa galeria de fotos à sua disposição.</p>
                        <a href="#">
                            <button>
                                <span>Baixar fotos</span>
                                <FiArrowUpRight />
                            </button>
                        </a>
                    </ScrollAnimation>
                </div>
            </article> */}
            <article className={styles.news} id="news">
                <h3>Fique por dentro das nossas novidades</h3>
                <p>
                    <a href="#">Acompanhe nosso blog</a> e nossas redes sociais para ficar por dentro do que acontece aqui no Inter.
                </p>
                <div className={styles.newsInfo}>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={600} animatePreScroll={false}>
                        <div className={styles.newsInfoTitleContainer}>
                            <BsInstagram />
                            <h4>Instagram</h4>
                        </div>
                        <p>Acompanhe as nossas novidades!</p>
                        <a href="#">
                            <button>
                                <span>Siga o nosso Instagram</span>
                                <FiArrowUpRight />
                            </button>
                        </a>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={100} animatePreScroll={false}>
                        <div className={styles.newsInfoTitleContainer}>
                            <BsLinkedin />
                            <h4>LinkedIn</h4>
                        </div>
                        <p>O iManager se conecta. Faça parte da nossa comunidade.</p>
                        <a href="#">
                            <button>
                                <span>Junte-se à comunidade</span>
                                <FiArrowUpRight />
                            </button>
                        </a>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={1100} animatePreScroll={false}>
                        <div className={styles.newsInfoTitleContainer}>
                            <BsSpotify />
                            <h4>Spotify</h4>
                        </div>
                        <p>Podcast semanal sobre gestão!</p>
                        <a href="#">
                            <button>
                                <span>Ouça agora mesmo</span>
                                <FiArrowUpRight />
                            </button>
                        </a>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={1800} animatePreScroll={false}>
                        <div className={styles.newsInfoTitleContainer}>
                            <BsTwitter />
                            <h4>Twitter</h4>
                        </div>
                        <p>Simplifique a sua empresa ao conferir nossas novidades.</p>
                        <a href="#">
                            <button>
                                <span>Fique por dentro</span>
                                <FiArrowUpRight />
                            </button>
                        </a>
                    </ScrollAnimation>
                </div>
            </article>
        </section>
    );
}