import kaushik from '../../assets/img/kk.png'
import kunal from '../../assets/img/Kunal.png'

interface Speakers {
    name: string,
    image : string,
    des1 : string,
    des2: string,
    github : string,
    linkedin : string,
    portfolio : string,
}
const speakers: Speakers[] = [
    {
        name : 'Kaushik Kumaran',
        image : kaushik,
        des1 : 'Cloud Engineer at Searce Inc',
        des2 : 'Webmaster at IEEE SRM WAD',
        github : 'https://github.com/CodeBuildder',
        linkedin : 'https://www.linkedin.com/in/kaushikkums/',
        portfolio : 'https://kaushiks.xyz/'
    },
    {
        name : 'Kunal Keshan',
        image : kunal,
        des1 : 'Co-Founder at Codelance Devs',
        des2 : 'Acting Heat at IEEE SRM Computer Society',
        github : 'https://GitHub.com/kunalkeshan',
        linkedin : 'https://www.linkedin.com/in/kunalkeshan',
        portfolio : 'https://kunalkeshan.dev'
    }
]

export default speakers;