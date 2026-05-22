import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Navbar } from '../components/Navbar';
import { SiteFooter } from '../components/SiteFooter';
import { 
  Leaf, 
  Trees, 
  Waves, 
  Calendar, 
  MapPin, 
  Clock, 
  Shield,
  Sprout,
  Mountain,
  Bird,
  Users,
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  const locations = [
    {
      id: 1,
      title: 'Parque Estadual da Costa do Sol',
      description: 'Área de proteção ambiental com trilhas, biodiversidade e vistas deslumbrantes do litoral de Saquarema.',
      image: 'https://images.unsplash.com/photo-1638658172477-943964ba84f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc2FxdWFyZW1hJTIwc3VyZmluZ3xlbnwxfHx8fDE3NzkzNzI4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Waves,
      color: 'text-accent'
    },
    {
      id: 2,
      title: 'Reserva Ecológica Jacarepiá',
      description: 'Reserva com rica fauna e flora da Mata Atlântica, ideal para observação de aves e estudos ambientais.',
      image: 'https://images.unsplash.com/photo-1667900736514-ffa1c9c85685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29sb2dpY2FsJTIwcmVzZXJ2ZSUyMGJpb2RpdmVyc2l0eXxlbnwxfHx8fDE3NzkzNzI4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Bird,
      color: 'text-secondary'
    },
    {
      id: 3,
      title: 'Eventos Ambientais',
      description: 'Calendário completo de eventos de conscientização ambiental, mutirões de limpeza e palestras educativas.',
      image: 'https://images.unsplash.com/photo-1760992004129-af025de65367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwZXZlbnQlMjBuYXR1cmUlMjBzdXN0YWluYWJpbGl0eXxlbnwxfHx8fDE3NzkzNzI4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Users,
      color: 'text-primary'
    }
  ];

  const events = [
    {
      id: 1,
      name: 'Trilha Guiada - Mata Atlântica',
      date: '2026-05-28',
      time: '08:00',
      location: 'Reserva Jacarepiá',
      participants: 25
    },
    {
      id: 2,
      name: 'Workshop de Sustentabilidade',
      date: '2026-06-05',
      time: '14:00',
      location: 'Centro de Visitantes',
      participants: 40
    },
    {
      id: 3,
      name: 'Observação de Aves',
      date: '2026-06-12',
      time: '06:00',
      location: 'Parque Costa do Sol',
      participants: 15
    },
    {
      id: 4,
      name: 'Mutirão de Limpeza de Praia',
      date: '2026-06-18',
      time: '09:00',
      location: 'Praia de Itaúna',
      participants: 60
    }
  ];

  const features = [
    {
      icon: Trees,
      title: 'Trilhas Ecológicas',
      description: 'Explore trilhas certificadas com guias especializados'
    },
    {
      icon: Shield,
      title: 'Áreas Protegidas',
      description: 'Conheça as reservas e parques de preservação'
    },
    {
      icon: Sprout,
      title: 'Biodiversidade',
      description: 'Descubra a rica fauna e flora da região'
    },
    {
      icon: Mountain,
      title: 'Ecoturismo',
      description: 'Turismo sustentável e consciente'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1659431246221-9d92a3a7bc0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBwYXRoJTIwbmF0dXJlJTIwZ3JlZW58ZW58MXx8fHwxNzc5MzcyODQzfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/70"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2">
              <Leaf className="w-4 h-4 mr-2" />
              Ecoturismo em Saquarema - RJ
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Poppins'] drop-shadow-lg">
              Descubra as Belezas Naturais de Saquarema
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow">
              Ecoturismo, trilhas ecológicas e sustentabilidade na cidade maravilhosa do litoral fluminense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/trilhas">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl px-8 py-6 text-lg">
                  <Mountain className="mr-2 w-5 h-5" />
                  Explorar Trilhas
                </Button>
              </Link>
              <Link to="/eventos">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20 backdrop-blur-sm px-8 py-6 text-lg">
                  <Calendar className="mr-2 w-5 h-5" />
                  Ver Eventos
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white hover:shadow-xl transition-all duration-300 border-border/50 h-full">
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-['Poppins'] mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Destinos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Poppins']">
            Principais Locais de Preservação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça as áreas protegidas e pontos de interesse ecológico em Saquarema
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <location.icon className={`w-6 h-6 ${location.color}`} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-['Poppins'] text-xl">{location.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{location.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button className="w-full bg-primary hover:bg-primary/90 group/btn">
                    Saiba Mais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-gradient-to-br from-muted/50 to-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Calendar className="w-4 h-4 mr-2" />
              Agenda
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Poppins']">
              Próximos Eventos Ambientais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Participe de atividades educativas e ações de preservação ambiental
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="font-['Poppins'] text-lg">{event.name}</CardTitle>
                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                        <Users className="w-3 h-3 mr-1" />
                        {event.participants}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {new Date(event.date).toLocaleDateString('pt-BR', { 
                          day: '2-digit', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      Participar
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/eventos">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Ver Todos os Eventos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
