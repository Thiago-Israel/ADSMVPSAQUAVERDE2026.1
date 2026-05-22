import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import SiteHeader from "../components/SiteHeader";
import SiteFooterMain from "../components/SiteFooterMain";
import { ArrowRight, Calendar, MapPin, Trees, Waves, Bird, Users, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const parques = [
    {
      title: "Parque Estadual da Costa do Sol",
      description: "Área de preservação com dunas, restingas e vista privilegiada do oceano. Habitat de diversas espécies nativas.",
      image: "https://images.unsplash.com/photo-1555363089-ff00193f476a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwcGFyayUyMGJlYWNoJTIwZHVuZXMlMjBicmF6aWx8ZW58MXx8fHwxNzc5MzczMDgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Waves,
    },
    {
      title: "Reserva Jacarepiá",
      description: "Reserva Ecológica Estadual com riqueza de fauna e flora. Área importante para observação de aves.",
      image: "https://images.unsplash.com/photo-1764552849574-07875f65c707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29sb2dpY2FsJTIwcmVzZXJ2ZSUyMHdldGxhbmQlMjBiaXJkc3xlbnwxfHx8fDE3NzkzNzMwODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Bird,
    },
    {
      title: "Eventos Ambientais",
      description: "Programação mensal com palestras, trilhas guiadas, mutirões de limpeza e oficinas de sustentabilidade.",
      image: "https://images.unsplash.com/photo-1722587511207-67e59383ffbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwZXZlbnQlMjBjb21tdW5pdHklMjBuYXR1cmV8ZW58MXx8fHwxNzc5MzczMDgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Users,
    },
  ];

  const eventos = [
    {
      title: "Trilha Guiada - Cachoeira do Sana",
      data: "28 de Maio, 2026",
      horario: "08:00",
      descricao: "Caminhada guiada até a Cachoeira do Sana com parada para observação de flora e fauna.",
      vagas: 20,
    },
    {
      title: "Mutirão de Limpeza - Praia de Itaúna",
      data: "02 de Junho, 2026",
      horario: "07:00",
      descricao: "Ação voluntária de preservação ambiental na Praia de Itaúna.",
      vagas: 50,
    },
    {
      title: "Palestra: Biodiversidade da Mata Atlântica",
      data: "10 de Junho, 2026",
      horario: "19:00",
      descricao: "Palestra educativa sobre a importância da conservação da Mata Atlântica na região.",
      vagas: 100,
    },
    {
      title: "Observação de Aves - Reserva Jacarepiá",
      data: "15 de Junho, 2026",
      horario: "06:00",
      descricao: "Atividade de observação de aves com biólogo especializado.",
      vagas: 15,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1665676248528-46312d500376?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3VucmlzZSUyMGJyYXppbHxlbnwxfHx8fDE3NzkzNzMwODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Saquarema Nature"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-4 bg-[#66BB6A] text-white border-0">
            Ecoturismo em Saquarema - RJ
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Descubra as Belezas Naturais de Saquarema
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Ecoturismo, trilhas e sustentabilidade no coração da natureza brasileira
          </p>
          <Link to="/trilhas">
            <Button size="lg" className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white">
              Explorar Trilhas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Cards de Parques e Reservas */}
      <section id="reservas" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2E7D32' }}>
              Conheça Nossas Áreas de Preservação
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Áreas protegidas que preservam a biodiversidade e oferecem experiências únicas de contato com a natureza
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {parques.map((parque, index) => {
              const Icon = parque.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={parque.image}
                      alt={parque.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                      <Icon className="h-6 w-6 text-[#2E7D32]" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#2E7D32]">{parque.title}</CardTitle>
                    <CardDescription>{parque.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button className="w-full bg-[#2E7D32] hover:bg-[#1B5E20]">
                      Saiba Mais
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção de Eventos */}
      <section id="eventos" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2E7D32' }}>
              Próximos Eventos Ambientais
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Participe de nossas atividades e contribua para a preservação ambiental
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {eventos.map((evento, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg text-[#2E7D32]">{evento.title}</CardTitle>
                    <Badge variant="secondary" className="bg-[#66BB6A] text-white">
                      {evento.vagas} vagas
                    </Badge>
                  </div>
                  <CardDescription>{evento.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 text-[#2E7D32]" />
                      <span>{evento.data}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-[#2E7D32]" />
                      <span>{evento.horario}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" style={{ borderColor: '#2E7D32', color: '#2E7D32' }}>
                    Participar
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#2E7D32] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trees className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Faça Parte do Movimento Verde
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Junte-se a nós na preservação das áreas naturais de Saquarema
          </p>
          <Link to="/trilhas">
            <Button size="lg" className="bg-white text-[#2E7D32] hover:bg-gray-100">
              Explorar Trilhas Ecológicas
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooterMain />
    </div>
  );
}
